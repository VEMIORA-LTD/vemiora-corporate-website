import type { Metadata } from "next";
import { headers } from "next/headers";
import ContactForm from "./contact-form";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

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
    <PageHero eyebrow="Start a conversation" title="Tell us what you want to build." lead="Share the ambition, the challenge and where you are today. VEMIORA will help you define the most credible next step." />
    <section className="content-section"><div className="contact-grid">
      <div className="contact-panel"><p className="eyebrow dark">New projects</p><h2>Project enquiries</h2><p>For websites, mobile applications, SaaS products, custom software and UI/UX engagements.</p><div className="contact-options"><div className="contact-option"><span>Projects</span><a href="mailto:projects@vemiora.uk">projects@vemiora.uk</a></div><div className="contact-option"><span>General</span><a href="mailto:enquiries@vemiora.uk">enquiries@vemiora.uk</a></div><div className="contact-option"><span>Customer care</span><a href="mailto:customerhappiness@vemiora.uk">customerhappiness@vemiora.uk</a></div><div className="contact-option"><span>Complaints</span><a href="mailto:complaints@vemiora.uk">complaints@vemiora.uk</a></div><div className="contact-option"><span>WhatsApp · UK</span><a href="https://wa.me/447541469736" target="_blank" rel="noreferrer">+44 7541 469736</a></div><div className="contact-option"><span>Telephone · UAE</span><a href="tel:+971526114024">+971 52 611 4024</a></div></div></div>
      <div className="contact-panel"><p className="eyebrow dark">Project brief</p><ContactForm nonce={nonce} /></div>
    </div></section>
    <section className="content-section alt"><div className="content-grid"><div><p className="eyebrow dark">Registered office</p><h2>London</h2></div><div className="lead"><p>VEMIORA LTD<br />167–169 Great Portland Street<br />5th Floor<br />London W1W 5PF<br />United Kingdom</p><p>Company No. 17352395 · Registered in England and Wales</p></div></div></section>
    <SiteFooter />
  </main>;
}
