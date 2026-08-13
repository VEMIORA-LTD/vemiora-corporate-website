"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm({ nonce }: { nonce?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [renderedAt] = useState(() => Date.now());

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const campaign = new URLSearchParams(window.location.search);
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      utmSource: campaign.get("utm_source") ?? "",
      utmMedium: campaign.get("utm_medium") ?? "",
      utmCampaign: campaign.get("utm_campaign") ?? "",
      landingPage: window.location.href,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error || "We could not send your enquiry. Please try again.");
      }
      form.reset();
      setStatus("sent");
      setMessage("Thank you. Your enquiry has been sent. We will be in touch shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your enquiry. Please email projects@vemiora.uk.");
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
        <div className="form-row">
          <label>Your name *<input name="name" autoComplete="name" required /></label>
          <label>Organisation<input name="company" autoComplete="organization" /></label>
        </div>
        <div className="form-row">
          <label>Email address *<input type="email" name="email" autoComplete="email" required /></label>
          <label>Company website<input type="url" name="companyWebsite" inputMode="url" placeholder="https://" /></label>
        </div>
        <div className="form-row">
          <label>Project type *<select name="type" defaultValue="" required><option value="" disabled>Select one</option><option>Website</option><option>Mobile app</option><option>SaaS platform</option><option>Custom software</option><option>Automation solution</option><option>UI/UX design</option><option>Other</option></select></label>
          <label>Indicative budget<select name="budget" defaultValue=""><option value="">Not decided yet</option><option>Under £5,000</option><option>£5,000–£15,000</option><option>£15,000–£40,000</option><option>£40,000+</option></select></label>
        </div>
        <div className="form-row">
          <label>Preferred contact<select name="contactMethod" defaultValue="Email"><option>Email</option><option>WhatsApp</option><option>Telephone</option><option>Video call</option></select></label>
          <label>Telephone / WhatsApp<input type="tel" name="phone" autoComplete="tel" placeholder="Include country code" /></label>
        </div>
        <label>Tell us about the project *<textarea name="brief" required placeholder="What are you looking to create, who is it for, and what should it achieve?" /></label>
        {TURNSTILE_SITE_KEY && <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />}
        <button className="button button-dark form-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send project enquiry"} <span aria-hidden="true">↗</span>
        </button>
        <p className="form-assurance">Your details are used only to respond to this enquiry.</p>
        <p className={`form-status ${status}`} aria-live="polite">{message}</p>
      </form>
    </>
  );
}
