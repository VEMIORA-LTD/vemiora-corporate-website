"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm({ nonce }: { nonce?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [renderedAt] = useState(() => Date.now());

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Unable to send enquiry");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          nonce={nonce}
        />
      )}
      <form className="contact-form" onSubmit={submit}>
        <label className="form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <input type="hidden" name="renderedAt" value={renderedAt} />
        <label>Your name<input name="name" required /></label>
        <label>Organisation<input name="company" /></label>
        <label>Email address<input type="email" name="email" required /></label>
        <label>Project type<select name="type" defaultValue="Web platform"><option>Web platform</option><option>Mobile application</option><option>SaaS product</option><option>Custom software</option><option>UI/UX design</option><option>Other</option></select></label>
        <label>Tell us about the project<textarea name="brief" required placeholder="What are you looking to create, and what should it achieve?" /></label>
        {TURNSTILE_SITE_KEY && <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />}
        <button className="button button-dark" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send project enquiry"} <span aria-hidden="true">↗</span>
        </button>
          <p className={`form-status ${status}`} aria-live="polite">
          {status === "sent" && "Thank you. Your enquiry has been sent."}
          {status === "error" && "We could not send your enquiry. Please email projects@vemiora.uk."}
        </p>
      </form>
    </>
  );
}
