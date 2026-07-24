"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="not-found-page">
      <p className="eyebrow">Error</p>
      <h1>Something went wrong.</h1>
      <p>
        An unexpected error occurred while loading this page. Please try
        again, or return to the homepage.
      </p>
      <div className="button-row">
        <button className="button button-dark" type="button" onClick={() => reset()}>
          Try again
        </button>
        <Link className="text-link" href="/">
          Return to the homepage <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
