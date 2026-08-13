import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const isDevelopment = process.env.NODE_ENV === "development";

  const csp = `
    default-src 'self';

    script-src 
      'self'
      'nonce-${nonce}'
      'strict-dynamic'
      https://www.googletagmanager.com
      https://www.google-analytics.com
      ${isDevelopment ? "'unsafe-eval'" : ""};

    style-src 
      'self'
      'unsafe-inline';

    img-src 
      'self'
      data:
      https:;

    font-src 
      'self'
      data:;

    connect-src
      'self'
      https://www.google-analytics.com
      https://analytics.google.com
      https://www.googletagmanager.com
      https://www.facebook.com
      https://connect.facebook.net;

    object-src 
      'none';

    base-uri 
      'self';

    form-action 
      'self';

    frame-ancestors 
      'none';

    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    "Content-Security-Policy",
    csp
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|webp|ico|txt|xml|json|webmanifest)$).*)",
  ],
};
