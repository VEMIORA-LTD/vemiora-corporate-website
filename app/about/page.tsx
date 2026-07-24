import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "VEMIORA is a London-incorporated technology company creating digital products of its own and building thoughtful software for clients with ambitious commercial goals.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="VEMIORA LTD" title="A technology company built for long-term value." lead="VEMIORA is a London-incorporated technology company creating digital products of its own and building thoughtful software for clients with ambitious commercial goals." />
    <section className="content-section">
      <div className="content-grid">
        <div><p className="eyebrow dark">Our model</p><h2>One company. Two complementary ambitions.</h2></div>
        <div className="lead"><p>We develop a growing portfolio of VEMIORA-owned digital products while providing web, mobile, SaaS, software and product design services to organisations around the world.</p><p>This model keeps us close to the realities of building products—not only advising clients, but confronting the same questions of scope, users, delivery, risk and commercial value ourselves.</p></div>
      </div>
    </section>
    <section className="content-section alt">
      <p className="eyebrow dark">Our vision</p><h2>To become a distinctive global technology business.</h2>
      <div className="content-grid three">
        <article className="content-card"><h3>Original value</h3><p>Create services and digital assets that solve useful problems in ways the market has not seen before.</p></article>
        <article className="content-card"><h3>Professional execution</h3><p>Work to demanding standards, communicate clearly and treat every agreed delivery date as a commitment.</p></article>
        <article className="content-card"><h3>International relevance</h3><p>Build from London for Europe and the Middle East first, with the capability and ambition to serve worldwide.</p></article>
      </div>
    </section>
    <section className="content-section dark">
      <div className="content-grid"><div><p className="eyebrow">Where we work</p><h2>International by design. Present when it matters.</h2></div><div><p className="lead">Projects can be delivered internationally, with direct, face-to-face meetings available across the Gulf and the wider Middle East when the engagement benefits from an in-person presence.</p><Link className="text-link pale" href="/contact">Start a conversation <span>→</span></Link></div></div>
    </section>
    <SiteFooter />
  </main>;
}
