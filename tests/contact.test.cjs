const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { runInNewContext } = require('node:vm');
const ts = require('typescript');

function loadRoute(env = {}, send = async () => ({ data: { id: 'test-email' }, error: null })) {
    const exports = {};
    const source = ts.transpileModule(readFileSync(resolve(__dirname, '../src/app/api/contact/route.ts'), 'utf8'), {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    runInNewContext(source, {
        exports, Response, process: { env },
        require(name) {
            assert.equal(name, 'resend');
            return { Resend: class { emails = { send }; } };
        },
    });
    return exports.POST;
}

const configured = { RESEND_API_KEY: 'test-only', CONTACT_FROM_EMAIL: 'Portfolio <contact@example.com>' };
const valid = { subject: 'Project inquiry', senderEmail: 'visitor@example.com', message: 'Hello from the contact form' };
const request = (body) => new Request('http://localhost/api/contact', { method: 'POST', body: JSON.stringify(body) });

test('rejects malformed JSON', async () => {
    const response = await loadRoute()(new Request('http://localhost/api/contact', { method: 'POST', body: '{' }));
    assert.equal(response.status, 400);
});

for (const [name, body] of [
    ['null body', null], ['invalid email', { ...valid, senderEmail: 'invalid' }],
    ['email header injection', { ...valid, senderEmail: 'visitor@example.com\r\nBcc: someone@example.com' }],
    ['non-string email', { ...valid, senderEmail: ['visitor@example.com'] }],
    ['blank subject', { ...valid, subject: '   ' }],
    ['missing subject', { ...valid, subject: undefined }],
    ['non-string subject', { ...valid, subject: 123 }],
    ['oversized subject', { ...valid, subject: 'x'.repeat(201) }],
    ['multiline subject', { ...valid, subject: 'Hello\r\nBcc: test@example.com' }],
    ['blank message', { ...valid, message: ' \n ' }],
    ['oversized message', { ...valid, message: 'x'.repeat(5001) }],
    ['non-string message', { ...valid, message: 123 }],
]) {
    test(`rejects ${name} before calling the email provider`, async () => {
        let called = false;
        const response = await loadRoute(configured, async () => { called = true; })(request(body));
        assert.equal(response.status, 400);
        assert.equal(called, false);
    });
}

test('reports missing configuration without false success', async () => {
    const response = await loadRoute()(request(valid));
    assert.equal(response.status, 503);
    assert.equal((await response.json()).success, undefined);
});

test('sends trimmed plain text to the fixed recipient with visitor reply-to', async () => {
    let payload;
    const response = await loadRoute(configured, async (value) => {
        payload = value;
        return { data: { id: 'test-email' }, error: null };
    })(request({ subject: ' Project inquiry ', senderEmail: ' visitor@example.com ', message: ' <b>Hello</b> ' }));
    assert.equal(response.status, 200);
    assert.equal((await response.json()).success, true);
    assert.equal(payload.to, 'pro.roihan@gmail.com');
    assert.equal(payload.from, configured.CONTACT_FROM_EMAIL);
    assert.equal(payload.subject, valid.subject);
    assert.equal(payload.replyTo, valid.senderEmail);
    assert.equal(payload.text, 'From: visitor@example.com\n\n<b>Hello</b>');
    assert.equal(payload.html, undefined);
});

for (const [name, send] of [
    ['provider rejection', async () => ({ data: null, error: { message: 'private provider details' } })],
    ['network failure', async () => { throw new Error('private network details'); }],
    ['missing delivery id', async () => ({ data: null, error: null })],
]) {
    test(`handles ${name} without leaking details or reporting success`, async () => {
        const response = await loadRoute(configured, send)(request(valid));
        assert.equal(response.status, 502);
        const result = await response.json();
        assert.equal(result.success, undefined);
        assert.doesNotMatch(result.error, /private/);
    });
}
