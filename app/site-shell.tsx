import Link from "next/link";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link className="brand" href="/" aria-label="VEMIORA home">
          <span className="brand-mark">V</span>
          <span className="brand-word">VEMIORA</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">Company</Link>
          <Link href="/founder">Founder</Link>
        </nav>
        <Link className="header-cta" href="/contact">
          Start a project <span aria-hidden="true">↗</span>
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
    <a className="floating-whatsapp" href="https://wa.me/447541469736" target="_blank" rel="noreferrer" aria-label="Chat with VEMIORA on WhatsApp at +44 7541 469736">
      <span>WhatsApp</span>
      <strong>+44 7541 469736</strong>
    </a>
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <span className="brand-mark">V</span>
            <span className="brand-word">VEMIORA</span>
          </Link>
          <p>Digital products and technology solutions, built with commercial discipline.</p>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/founder">Founder &amp; CEO</Link>
          <Link href="/products">Products</Link>
        </div>
        <div>
          <h3>Capabilities</h3>
          <Link href="/services">Web platforms</Link>
          <Link href="/services">Mobile applications</Link>
          <Link href="/services">SaaS &amp; custom software</Link>
          <Link href="/services">UI/UX design</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <a href="mailto:enquiries@vemiora.uk">enquiries@vemiora.uk</a>
          <a href="https://wa.me/447541469736" target="_blank" rel="noreferrer">WhatsApp · +44 7541 469736</a>
          <a href="tel:+971526114024">UAE · +971 52 611 4024</a>
          <a href="https://www.linkedin.com/in/omar-elmohr-09a03780/" target="_blank" rel="noreferrer">LinkedIn</a>
          <Link href="/contact">Project enquiry</Link>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <p>© 2026 VEMIORA LTD · Company No. 17352395 · Registered in England and Wales</p>
          <div><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
    </>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="page-hero section-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{lead}</p>
    </section>
  );
}
