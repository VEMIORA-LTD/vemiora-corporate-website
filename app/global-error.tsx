"use client";

import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="not-found-page">
          <p className="eyebrow">Error</p>
          <h1>Something went wrong.</h1>
          <p>The application encountered an unexpected error. Please try again.</p>
          <div className="button-row">
            <button className="button button-dark" type="button" onClick={() => reset()}>
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
