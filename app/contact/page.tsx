import type { Metadata } from "next";
import { headers } from "next/headers";
import ContactForm from "./contact-form";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VEMIORA LTD to discuss a website, mobile application, SaaS product, custom software or UI/UX project.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return <main>
    <SiteHeader />
    <section className="contact-hero section-shell">
      <div>
        <p className="eyebrow">Start a conversation</p>
        <h1>Build your next digital product with VEMIORA.</h1>
        <p className="contact-hero-lead">VEMIORA LTD is a London-based technology company helping organisations turn ambitious ideas into websites, mobile apps, SaaS platforms and custom software built around real business needs.</p>
        <div className="contact-hero-actions">
          <a className="button button-light" href="#project-enquiry">Start your project <span aria-hidden="true">↓</span></a>
          <a className="text-link pale" href="https://wa.me/447541469736" target="_blank" rel="noreferrer">Talk on WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="contact-trust-card" aria-label="Why work with VEMIORA">
        <p className="eyebrow">Why VEMIORA</p>
        <ul>
          <li><span>01</span><strong>UK-registered technology company</strong></li>
          <li><span>02</span><strong>Strategy, design and engineering together</strong></li>
          <li><span>03</span><strong>Clear scope and accountable delivery</strong></li>
          <li><span>04</span><strong>Serving clients internationally</strong></li>
        </ul>
      </div>
    </section>
    <section className="contact-proof" aria-label="VEMIORA credentials">
      <div className="section-shell contact-proof-grid">
        <p>Independent technology company · London</p>
        <span>Web platforms</span><span>Mobile apps</span><span>SaaS &amp; software</span><span>UI/UX design</span>
      </div>
    </section>
    <section className="content-section" id="project-enquiry"><div className="contact-grid">
      <div className="contact-panel contact-intro"><p className="eyebrow dark">A useful first step</p><h2>Tell us where you want to go.</h2><p className="contact-intro-lead">Share your objective, your current position and what success should look like. We will review it personally and come back with the clearest next step.</p>
        <div className="contact-expectations">
          <div><span>01</span><p><strong>A considered response</strong>We review every enquiry before replying.</p></div>
          <div><span>02</span><p><strong>No obligation</strong>The first conversation is about fit and direction.</p></div>
          <div><span>03</span><p><strong>International delivery</strong>Based in London, working across the UK, Europe and Middle East.</p></div>
        </div>
        <div className="contact-options"><div className="contact-option"><span>Projects</span><a href="mailto:projects@vemiora.uk">projects@vemiora.uk</a></div><div className="contact-option"><span>WhatsApp · UK</span><a href="https://wa.me/447541469736" target="_blank" rel="noreferrer">+44 7541 469736</a></div><div className="contact-option"><span>Telephone · UAE</span><a href="tel:+971526114024">+971 52 611 4024</a></div></div>
      </div>
      <div className="contact-panel contact-form-panel"><p className="eyebrow dark">Project brief</p><h2>Start your project.</h2><p>Fields marked * are required.</p><ContactForm nonce={nonce} /></div>
    </div></section>
    <section className="content-section alt"><div className="content-grid"><div><p className="eyebrow dark">Registered office</p><h2>London</h2></div><div className="lead"><p>VEMIORA LTD<br />167–169 Great Portland Street<br />5th Floor<br />London W1W 5PF<br />United Kingdom</p><p>Company No. 17352395 · Registered in England and Wales</p></div></div></section>
    <SiteFooter />
  </main>;
}
