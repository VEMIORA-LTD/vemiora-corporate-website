import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How VEMIORA LTD handles personal information when you visit this website or contact the company.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <main><SiteHeader /><PageHero eyebrow="Legal" title="Privacy notice" lead="How VEMIORA LTD handles personal information when you visit this website or contact the company." /><section className="content-section"><div className="legal-copy"><p>Last updated: 22 July 2026</p><h2>Who we are</h2><p>VEMIORA LTD is a company registered in England and Wales under company number 17352395. Our registered office is 167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom.</p><h2>Information you provide</h2><p>If you contact us by email, LinkedIn or WhatsApp, we may receive your name, contact details, organisation, project information and anything else you choose to provide.</p><h2>How we use information</h2><p>We use this information to respond to enquiries, assess potential projects, provide requested services, keep appropriate business records and meet legal obligations. We do not sell personal information.</p><h2>Sharing and retention</h2><p>Information may be processed by service providers used for communication, hosting or business administration, only where necessary. We retain information only for as long as reasonably required for the relevant purpose or legal obligation.</p><h2>Your rights</h2><p>Depending on applicable law, you may have rights to request access, correction, deletion, restriction or objection. Contact <a href="mailto:enquiries@vemiora.uk">enquiries@vemiora.uk</a> with a privacy request.</p></div></section><SiteFooter /></main>;
}
