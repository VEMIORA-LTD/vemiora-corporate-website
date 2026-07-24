import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_PATTERN = /https?:\/\/|www\./gi;
const MAX_LINKS_IN_BRIEF = 2;
const MIN_FILL_TIME_MS = 2000;

// Simple in-memory rate limit: a handful of submissions per IP per window.
// This is per-instance only and resets on redeploy/restart. If the site is
// ever deployed across multiple serverless instances, replace this with a
// shared store (e.g. Redis/Upstash) so limits are enforced consistently.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(identifier: string) {
  const now = Date.now();
  const recent = (submissionsByIp.get(identifier) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  submissionsByIp.set(identifier, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function clientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

// Optional Turnstile verification. Only active once TURNSTILE_SECRET_KEY is
// configured; the form silently skips the widget until then, so this has no
// effect on the current deployment.
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

async function verifyTurnstile(token: string, ip: string) {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: TURNSTILE_SECRET_KEY ?? "",
      response: token,
      remoteip: ip,
    }),
  }).catch(() => null);

  if (!response) return false;
  const result = await response.json().catch(() => null);
  return Boolean(result?.success);
}

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character);
}

export async function POST(request: Request) {
  const ip = clientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (text(body.website, 200)) return NextResponse.json({ ok: true });

  // Reject submissions completed faster than a human could plausibly fill
  // the form. Respond as if it succeeded so bots don't learn to slow down.
  const renderedAt = Number(body.renderedAt);
  if (!Number.isFinite(renderedAt) || Date.now() - renderedAt < MIN_FILL_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  const name = text(body.name, 120);
  const company = text(body.company, 160);
  const email = text(body.email, 254);
  const type = text(body.type, 80);
  const brief = text(body.brief, 5000);

  if (!name || !EMAIL_PATTERN.test(email) || !brief) {
    return NextResponse.json({ error: "Please complete the required fields" }, { status: 400 });
  }

  const linkMatches = brief.match(URL_PATTERN);
  if (linkMatches && linkMatches.length > MAX_LINKS_IN_BRIEF) {
    return NextResponse.json(
      { error: "Please remove links from your message and try again." },
      { status: 400 }
    );
  }

  if (TURNSTILE_SECRET_KEY) {
    const token = text(body["cf-turnstile-response"], 2000);
    const verified = token ? await verifyTurnstile(token, ip) : false;
    if (!verified) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "projects@vemiora.uk";
  const from = process.env.CONTACT_FROM_EMAIL ?? "VEMIORA Website <website@vemiora.uk>";

  if (!apiKey) {
    return NextResponse.json({ error: "Contact service is not configured" }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Project enquiry — ${name}`,
      html: `<h2>New project enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Organisation:</strong> ${escapeHtml(company || "Not provided")}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Project type:</strong> ${escapeHtml(type)}</p><p><strong>Brief:</strong></p><p>${escapeHtml(brief).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Email service rejected the request" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
