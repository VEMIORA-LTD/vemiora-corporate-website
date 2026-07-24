import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404</p>
      <h1>This page could not be found.</h1>
      <p>
        The address may have changed, or the page may no longer be available.
      </p>
      <Link className="text-link" href="/">
        Return to the homepage <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
