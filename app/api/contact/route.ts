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

function cookie(request: Request, name: string) {
  const cookies = request.headers.get("cookie") ?? "";
  return cookies
    .split(";")
    .map((item) => item.trim().split("="))
    .find(([key]) => key === name)
    ?.slice(1)
    .join("=");
}

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value.trim().toLowerCase());
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sendMetaLeadEvent({
  request,
  eventId,
  email,
  phone,
  name,
  type,
  landingPage,
}: {
  request: Request;
  eventId: string;
  email: string;
  phone: string;
  name: string;
  type: string;
  landingPage: string;
}) {
  const accessToken = process.env.META_CONVERSIONS_API_TOKEN;
  const pixelId = process.env.META_PIXEL_ID ?? "2229622037970742";
  if (!accessToken) return;

  const [firstName, ...lastNameParts] = name.trim().split(/\s+/);
  const userData: Record<string, string | string[]> = {
    em: [await sha256(email)],
    fn: [await sha256(firstName)],
    client_ip_address: clientIp(request),
    client_user_agent: request.headers.get("user-agent") ?? "",
  };

  const lastName = lastNameParts.join(" ");
  if (lastName) userData.ln = [await sha256(lastName)];
  if (phone) userData.ph = [await sha256(phone.replace(/[^\d+]/g, ""))];

  const fbp = cookie(request, "_fbp");
  const fbc = cookie(request, "_fbc");
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const payload: Record<string, unknown> = {
    data: [{
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      action_source: "website",
      event_source_url: landingPage || "https://www.vemiora.uk/contact",
      user_data: userData,
      custom_data: {
        content_name: "Project enquiry",
        content_category: type,
      },
    }],
  };

  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  const graphVersion = process.env.META_GRAPH_API_VERSION ?? "v23.0";
  const response = await fetch(
    `https://graph.facebook.com/${graphVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    console.error("Meta rejected a Lead event", response.status, await response.text());
  }
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
  const companyWebsite = text(body.companyWebsite, 300);
  const email = text(body.email, 254);
  const type = text(body.type, 80);
  const budget = text(body.budget, 80);
  const contactMethod = text(body.contactMethod, 40);
  const phone = text(body.phone, 60);
  const brief = text(body.brief, 5000);
  const utmSource = text(body.utmSource, 120);
  const utmMedium = text(body.utmMedium, 120);
  const utmCampaign = text(body.utmCampaign, 180);
  const landingPage = text(body.landingPage, 500);

  if (!name || !EMAIL_PATTERN.test(email) || !type || !brief) {
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
    return NextResponse.json(
      { error: "Email service is temporarily unavailable. Please email projects@vemiora.uk." },
      { status: 503 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Project enquiry · ${type} · ${name}`,
      html: `<h2>New project enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Organisation:</strong> ${escapeHtml(company || "Not provided")}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Telephone / WhatsApp:</strong> ${escapeHtml(phone || "Not provided")}</p><p><strong>Company website:</strong> ${escapeHtml(companyWebsite || "Not provided")}</p><p><strong>Project type:</strong> ${escapeHtml(type)}</p><p><strong>Indicative budget:</strong> ${escapeHtml(budget || "Not decided")}</p><p><strong>Preferred contact:</strong> ${escapeHtml(contactMethod || "Email")}</p><p><strong>Brief:</strong></p><p>${escapeHtml(brief).replace(/\n/g, "<br>")}</p><hr><p><strong>Campaign source:</strong> ${escapeHtml(utmSource || "Direct / unknown")}</p><p><strong>Campaign medium:</strong> ${escapeHtml(utmMedium || "Not provided")}</p><p><strong>Campaign:</strong> ${escapeHtml(utmCampaign || "Not provided")}</p><p><strong>Landing page:</strong> ${escapeHtml(landingPage || "Not provided")}</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected a contact enquiry", response.status, await response.text());
    return NextResponse.json(
      { error: "We could not send your enquiry. Please email projects@vemiora.uk." },
      { status: 502 }
    );
  }

  const eventId = crypto.randomUUID();
  await sendMetaLeadEvent({
    request,
    eventId,
    email,
    phone,
    name,
    type,
    landingPage,
  }).catch((error) => console.error("Could not send Meta Lead event", error));

  return NextResponse.json({ ok: true, eventId });
}
