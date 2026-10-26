"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
    const id = useId();
    const submitting = useRef(false);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    function resizeMessage() {
        const textarea = messageRef.current;
        if (!textarea) return;
        textarea.style.height = "auto";
        const border = textarea.offsetHeight - textarea.clientHeight;
        textarea.style.height = `${textarea.scrollHeight + border}px`;
    }

    useEffect(() => {
        const textarea = messageRef.current;
        if (!textarea) return;
        let width = 0;
        const observer = new ResizeObserver(([entry]) => {
            if (entry.contentRect.width !== width) {
                width = entry.contentRect.width;
                resizeMessage();
            }
        });
        observer.observe(textarea);
        return () => observer.disconnect();
    }, []);
    const [pending, setPending] = useState(false);
    const [status, setStatus] = useState<{ error: boolean; message: string } | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (submitting.current) return;
        const form = event.currentTarget;
        const fields = new FormData(form);
        const senderEmail = String(fields.get("senderEmail") ?? "").trim();
        const subject = String(fields.get("subject") ?? "").trim();
        const message = String(fields.get("message") ?? "").trim();
        if (!subject) {
            setStatus({ error: true, message: "Please enter a subject." });
            return;
        }
        if (!message) {
            setStatus({ error: true, message: "Please enter a message." });
            return;
        }

        submitting.current = true;
        setPending(true);
        setStatus(null);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ senderEmail, subject, message }),
                signal: AbortSignal.timeout(15000),
            });
            const result = await response.json().catch(() => null);
            if (!response.ok || result?.success !== true) {
                setStatus({ error: true, message: typeof result?.error === "string"
                    ? result.error : "Unable to send your message. Please try again." });
                return;
            }
            form.reset();
            resizeMessage();
            setStatus({ error: false, message: "Your message has been sent. Thank you!" });
        } catch {
            setStatus({ error: true, message: "Unable to send your message. Please check your connection and try again." });
        } finally {
            submitting.current = false;
            setPending(false);
        }
    }

    const fieldClass = "contact-field w-full min-w-0 rounded-lg border border-zinc-400 bg-transparent px-4 py-3 dark:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500";

    return (
        <form onSubmit={handleSubmit} className={`${compact ? "" : "mt-10"} flex flex-col gap-3 dark:text-zinc-100`} aria-busy={pending}>
            <div>
                <label htmlFor={`${id}-email`} className="mb-2 block text-sm font-medium">Your email</label>
                <input id={`${id}-email`} name="senderEmail" type="email" autoComplete="email" required maxLength={254} readOnly={pending}
                    placeholder="you@example.com" className={`${fieldClass} ${compact ? "" : "h-14"}`} />
            </div>
            <div>
                <label htmlFor={`${id}-subject`} className="mb-2 block text-sm font-medium">Subject</label>
                <input id={`${id}-subject`} name="subject" type="text" required maxLength={200} readOnly={pending}
                    placeholder="What would you like to discuss?" className={`${fieldClass} ${compact ? "" : "h-14"}`} />
            </div>
            <div>
                <label htmlFor={`${id}-message`} className="mb-2 block text-sm font-medium">Your message</label>
                <textarea ref={messageRef} onInput={resizeMessage} rows={compact ? 3 : 7} id={`${id}-message`} name="message" required maxLength={5000} readOnly={pending} placeholder="Your message..."
                    className={`${fieldClass} resize-none overflow-hidden ${compact ? "min-h-24" : "min-h-52"}`} />
            </div>
            <button type="submit" disabled={pending}
                className="min-h-11 w-full sm:w-auto self-start rounded-full bg-zinc-800 px-5 py-3 text-zinc-50 disabled:cursor-wait disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500">
                {pending ? "Sending..." : compact ? "Send" : "Submit"}
            </button>
            <div aria-live="polite" aria-atomic="true">
                {status && <p role={status.error ? "alert" : "status"} className={`text-sm ${status.error ? "text-red-700 dark:text-red-400" : "text-green-700 dark:text-green-400"}`}>
                    {status.message}{status.error && <> You can also email <a className="underline" href="mailto:pro.roihan@gmail.com">pro.roihan@gmail.com</a>.</>}
                </p>}
            </div>
        </form>
    );
}
