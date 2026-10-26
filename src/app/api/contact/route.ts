import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }
    if (!body || typeof body !== "object") {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }
    const fields = body as Record<string, unknown>;
    const senderEmail = typeof fields.senderEmail === "string" ? fields.senderEmail.trim() : "";
    const subject = typeof fields.subject === "string" ? fields.subject.trim() : "";
    const message = typeof fields.message === "string" ? fields.message.trim() : "";
    if (senderEmail.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(senderEmail)) {
        return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!subject || subject.length > 200 || /[\r\n]/.test(subject)) {
        return Response.json({ error: "Please enter a subject of up to 200 characters on one line." }, { status: 400 });
    }
    if (!message || message.length > 5000) {
        return Response.json({ error: "Please enter a message of up to 5,000 characters." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) {
        return Response.json({ error: "The contact form is temporarily unavailable." }, { status: 503 });
    }

    try {
        const resend = new Resend(apiKey);
        const { data, error } = await resend.emails.send({
            from,
            to: "pro.roihan@gmail.com",
            replyTo: senderEmail,
            subject,
            text: `From: ${senderEmail}\n\n${message}`,
        });
        if (error || !data?.id) {
            return Response.json({ error: "Unable to send your message. Please try again later." }, { status: 502 });
        }
        return Response.json({ success: true });
    } catch {
        return Response.json({ error: "Unable to send your message. Please try again later." }, { status: 502 });
    }
}
