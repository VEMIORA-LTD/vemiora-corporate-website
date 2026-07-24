import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description:
    "A clear explanation of the limited technology currently used by this website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return <main><SiteHeader /><PageHero eyebrow="Legal" title="Cookie notice" lead="A clear explanation of the limited technology currently used by this website." /><section className="content-section"><div className="legal-copy"><p>Last updated: 22 July 2026</p><h2>Current use of cookies</h2><p>This version of the VEMIORA website does not intentionally use advertising cookies or non-essential tracking cookies.</p><h2>Essential technology</h2><p>The website host or security infrastructure may use strictly necessary technical data to deliver pages securely, prevent abuse and maintain reliable performance. These functions are required for the website to operate.</p><h2>Future changes</h2><p>If analytics, embedded services or other non-essential cookies are introduced, this notice will be updated and an appropriate consent mechanism will be provided where required.</p><h2>Contact</h2><p>Questions about this notice can be sent to <a href="mailto:enquiries@vemiora.uk">enquiries@vemiora.uk</a>.</p></div></section><SiteFooter /></main>;
}
