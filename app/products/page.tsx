import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Products",
  description:
    "VEMIORA develops and owns a growing portfolio of digital products, including KAVORA, a connected destination for pet owners and trusted service providers.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Digital product portfolio" title="Products designed to make everyday life work better." lead="VEMIORA develops and owns a growing portfolio of digital assets, each built around a meaningful customer need and the potential to serve an international audience." />
    <section className="content-section">
      <div className="content-grid">
        <div><Image className="kavora-page-logo" src="/kavora-logo.png" alt="KAVORA — The World of Animal Care" width={1200} height={1212} /><p className="eyebrow dark">In development · Near launch</p><h2>KAVORA</h2><p className="lead">A global destination for pet owners to discover participating providers nearby, compare services and book care through one connected platform.</p></div>
        <div className="content-card"><h3>One platform. A world of pet care.</h3><p>KAVORA is being developed for mobile, web and desktop use. It connects registered pet owners with participating providers including pet sitters, pet taxis, groomers, veterinary clinics, boarding services and horse training and specialist services.</p><p>Its purpose is simple: bring the needs of different companion animals together in one clear, convenient experience across international markets.</p></div>
      </div>
    </section>
    <section className="content-section alt">
      <p className="eyebrow dark">KAVORA ecosystem</p><h2>Care, booking and discovery in one place.</h2>
      <div className="content-grid three">
        <article className="content-card"><h3>For pet owners</h3><p>Discover relevant services, view participating providers and manage bookings through a consistent experience.</p></article>
        <article className="content-card"><h3>For service providers</h3><p>Present services to pet owners, receive booking opportunities and build a visible presence within the platform.</p></article>
        <article className="content-card"><h3>For the wider pet community</h3><p>A scalable foundation designed to support different animals, service categories and countries over time.</p></article>
      </div>
    </section>
    <section className="cta-section"><p className="eyebrow dark">VEMIORA portfolio</p><h2>KAVORA is the beginning, not the boundary.</h2><p>Future products will be introduced as they move from development into public release.</p><Link className="button button-dark" href="/contact">Talk to VEMIORA <span>↗</span></Link></section>
    <SiteFooter />
  </main>;
}
