import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Founder & CEO",
  description:
    "Omar Elmohr founded VEMIORA to create valuable digital products and a technology company recognised for original thinking, professional execution and commitments kept.",
  alternates: { canonical: "/founder" },
};

export default function FounderPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Leadership" title="Commercial discipline behind digital ambition." lead="Omar Elmohr founded VEMIORA to create valuable digital products and a technology company recognised for original thinking, professional execution and commitments kept." />
    <section className="content-section">
      <div className="founder-page-grid">
        <div className="founder-page-image"><Image src="/omar-elmohr.webp" alt="Omar Elmohr, Founder and CEO of VEMIORA LTD" width={1087} height={1447} sizes="(max-width: 900px) 100vw, 50vw" priority /></div>
        <div className="founder-page-copy"><p className="eyebrow dark">Founder &amp; CEO</p><h2>Omar Elmohr</h2><p>Omar is a technology entrepreneur whose professional background is in audit and forensic accounting consultancy. He holds a Bachelor of Accounting from Alexandria University.</p><p>That background informs the way he leads VEMIORA: with attention to evidence, commercial reality, risk, controls and accountability. He directs the company&apos;s vision and works with the appropriate design and engineering disciplines to turn ambitious ideas into credible digital products.</p><p>His ambition is to build VEMIORA into a strong international competitor—known both for the products it owns and the technology it creates for clients.</p><div className="company-facts"><div><span>Role</span><strong>Founder &amp; CEO</strong></div><div><span>Professional background</span><strong>Audit &amp; forensic accounting consultancy</strong></div><div><span>Education</span><strong>Bachelor of Accounting, Alexandria University</strong></div></div><div className="button-row"><a className="text-link" href="https://www.linkedin.com/in/omar-elmohr-09a03780/" target="_blank" rel="noreferrer">LinkedIn profile <span>↗</span></a><Link className="text-link" href="/contact">Contact VEMIORA <span>→</span></Link></div></div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
