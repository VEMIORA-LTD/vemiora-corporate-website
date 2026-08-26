import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore VEMIORA products: KAVORA is available now across mobile, desktop and web, while SESHURA is currently in development.",
  alternates: { canonical: "/products" },
};

const storeLinks = [
  { name: "App Store", eyebrow: "Download on the", href: "https://apps.apple.com/app/kavora-pet-care/id6800247931", icon: "apple" },
  { name: "Google Play", eyebrow: "Get it on", href: "https://play.google.com/store/apps/details?id=com.vemiora.kavora", icon: "play" },
  { name: "Microsoft Store", eyebrow: "Download from", href: "https://apps.microsoft.com/detail/9N4VC9084GFD", icon: "microsoft" },
  { name: "Web App", eyebrow: "Use KAVORA on the", href: "https://app.kavoraplatform.com", icon: "web" },
] as const;

function StoreIcon({ type }: { type: (typeof storeLinks)[number]["icon"] }) {
  if (type === "apple") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.05 12.54c-.03-3.13 2.55-4.65 2.67-4.72a5.75 5.75 0 0 0-4.53-2.45c-1.9-.2-3.75 1.14-4.72 1.14-1 0-2.5-1.12-4.13-1.09A6 6 0 0 0 1.3 8.5c-2.18 3.77-.56 9.31 1.53 12.36 1.05 1.5 2.27 3.18 3.9 3.12 1.59-.07 2.18-1 4.1-1 1.9 0 2.45 1 4.1.96 1.7-.03 2.77-1.5 3.78-3.02a12.36 12.36 0 0 0 1.73-3.52 5.44 5.44 0 0 1-3.39-4.86ZM13.95 3.36A5.52 5.52 0 0 0 15.22-.6a5.62 5.62 0 0 0-3.64 1.88 5.28 5.28 0 0 0-1.3 3.8 4.64 4.64 0 0 0 3.67-1.72Z" /></svg>;
  if (type === "play") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.7 2.3a1.6 1.6 0 0 0-.42 1.1v17.2c0 .42.16.8.42 1.08L13.34 12 3.7 2.3Zm10.9 10.96-2.42 2.43-7.4 4.18 9.82-6.61Zm1.3-1.3 2.8-1.58c.8-.45.8-1.18 0-1.64L4.77 2.87l11.14 11.1Zm-1.3-1.3L4.78 4.13l7.4 4.18 2.42 2.35Z" /></svg>;
  if (type === "microsoft") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 2h9.4v9.4H2V2Zm10.6 0H22v9.4h-9.4V2ZM2 12.6h9.4V22H2v-9.4Zm10.6 0H22V22h-9.4v-9.4Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.7" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.2-2.1 3.4-5.1 3.4-9S14.2 5.1 12 3c-2.2 2.1-3.4 5.1-3.4 9s1.2 6.9 3.4 9ZM3.5 9h17m-17 6h17" /></svg>;
}

export default function ProductsPage() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="Digital product portfolio" title="Products designed to make everyday life work better." lead="VEMIORA develops and owns a growing portfolio of digital assets, each built around a meaningful customer need and the potential to serve an international audience." />
    <section className="content-section product-release">
      <div className="content-grid product-release-grid">
        <div><Image className="kavora-page-logo" src="/kavora-logo.png" alt="KAVORA — The World of Animal Care" width={1200} height={1212} priority /><p className="eyebrow dark product-status"><span aria-hidden="true" /> Available now</p><h2>KAVORA</h2><p className="lead">A global destination for pet owners to discover participating providers nearby, compare services and book care through one connected platform.</p></div>
        <div className="content-card product-availability">
          <h3>One platform. A world of pet care.</h3>
          <p>KAVORA is available on mobile, desktop and the web. It connects registered pet owners with participating providers including pet sitters, pet taxis, groomers, veterinary clinics, boarding services, horse training and specialist services.</p>
          <p>Choose your platform to start using KAVORA.</p>
          <div className="store-links" aria-label="Download KAVORA">
            {storeLinks.map((store) => <a key={store.name} className="store-link" href={store.href} target="_blank" rel="noreferrer" aria-label={`${store.eyebrow} ${store.name}`}><StoreIcon type={store.icon} /><span><small>{store.eyebrow}</small><strong>{store.name}</strong></span><span className="store-link-arrow" aria-hidden="true">↗</span></a>)}
          </div>
          <p className="download-fallback">All download options are also available at <a href="https://kavoraplatform.com/download" target="_blank" rel="noreferrer">kavoraplatform.com/download</a>.</p>
        </div>
      </div>
    </section>
    <section className="content-section alt">
      <p className="eyebrow dark">KAVORA ecosystem</p><h2>Care, booking and discovery in one place.</h2>
      <div className="content-grid three">
        <article className="content-card"><h3>For pet owners</h3><p>Discover relevant services, view participating providers and manage bookings through a consistent experience.</p></article>
        <article className="content-card"><h3>For service providers</h3><p>Present services to pet owners, receive booking opportunities and build a visible presence within the platform.</p></article>
        <article className="content-card"><h3>For the wider pet community</h3><p>A scalable foundation designed to support different animals, service categories and countries over time.</p></article>
      </div>
      <div className="tutorial-links" aria-label="KAVORA service provider tutorials"><p><span>Service provider tutorials</span> Step-by-step guidance for registering and getting started.</p><div><a href="https://youtu.be/yWOf4aLoiak" target="_blank" rel="noreferrer">English tutorial <span aria-hidden="true">↗</span></a><a href="https://youtu.be/SQ1mFSkWvbA" target="_blank" rel="noreferrer">Arabic tutorial <span aria-hidden="true">↗</span></a></div></div>
    </section>
    <section className="content-section dark seshura-section">
      <div className="content-grid seshura-grid">
        <div className="seshura-logo-frame"><Image className="seshura-logo" src="/seshura-logo.png" alt="SESHURA — Connecting People with Trusted Expertise" width={1000} height={1000} loading="eager" /></div>
        <div className="seshura-copy"><p className="eyebrow">Currently in development</p><h2>SESHURA</h2><p className="lead">A new platform designed to connect people with trusted expertise.</p><p>SESHURA is the next product being developed within the VEMIORA portfolio. More information will be shared as the platform moves closer to public release.</p><div className="seshura-tagline">Connecting people with trusted expertise</div></div>
      </div>
    </section>
    <section className="cta-section"><p className="eyebrow dark">VEMIORA portfolio</p><h2>One product live. The next taking shape.</h2><p>KAVORA is available today, while SESHURA represents the next step in VEMIORA&apos;s growing product portfolio.</p><Link className="button button-dark" href="/contact">Talk to VEMIORA <span>↗</span></Link></section>
    <SiteFooter />
  </main>;
}
