import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "VEMIORA brings strategy, product design and engineering together to create web platforms, mobile applications, SaaS products and custom software.",
  alternates: { canonical: "/services" },
};

const capabilities = [
  ["01", "Web platforms", "Corporate websites, marketplaces, customer portals and responsive web applications designed around clear commercial outcomes."],
  ["02", "Mobile applications", "Purposeful iOS and Android products with intuitive journeys, considered interfaces and dependable cross-device experiences."],
  ["03", "SaaS products", "Cloud software and subscription platforms planned for real users, recurring value and sustainable operational growth."],
  ["04", "Custom software", "Tailored digital systems, workflow tools, APIs and integrations shaped around the way your organisation needs to operate."],
  ["05", "UI/UX and product design", "Research-led journeys, elegant interfaces, prototypes and scalable design systems that make complex products feel simple."],
  ["06", "Product strategy", "Practical discovery, scope definition and technical planning that connect the idea, the customer and the commercial case."],
];

export default function ServicesPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Technology services" title="From ambitious idea to valuable digital product." lead="VEMIORA brings strategy, product design and engineering together to create technology that is commercially sound, distinctive and ready for real-world use." />
    <section className="content-section">
      <p className="eyebrow dark">Capabilities</p>
      <h2>What we can build for you.</h2>
      <div className="capability-list">
        {capabilities.map(([number, title, copy]) => <article className="capability-row" key={number}>
          <span>{number}</span><h3>{title}</h3><p>{copy}</p>
        </article>)}
      </div>
    </section>
    <section className="content-section dark">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">Engagement model</p><h2>A disciplined path from definition to release.</h2></div>
        <p className="lead">Each engagement is shaped around the project, but the principles remain constant: clarity of scope, accountable milestones and transparent communication.</p>
      </div>
      <div className="content-grid three">
        <article className="content-card"><span>01</span><h3>Define</h3><p>We establish the audience, business objective, requirements and success measures.</p></article>
        <article className="content-card"><span>02</span><h3>Design &amp; build</h3><p>We create the experience and technical solution in clear, reviewable stages.</p></article>
        <article className="content-card"><span>03</span><h3>Validate &amp; launch</h3><p>We test against the agreed scope and prepare the product for a confident release.</p></article>
      </div>
    </section>
    <section className="cta-section"><p className="eyebrow dark">Your next product</p><h2>Let us turn the brief into a credible plan.</h2><p>International delivery, with in-person meetings available across the Gulf and wider Middle East.</p><Link className="button button-dark" href="/contact">Discuss your project <span>↗</span></Link></section>
    <SiteFooter />
  </main>;
}
