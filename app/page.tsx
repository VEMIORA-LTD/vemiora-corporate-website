import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

const services = [
  {
    number: "01",
    title: "Web Platforms",
    text: "High-performance corporate websites, customer portals and digital platforms designed around clear commercial goals.",
  },
  {
    number: "02",
    title: "Mobile Applications",
    text: "Thoughtful iOS and Android experiences that make complex services feel direct, intuitive and dependable.",
  },
  {
    number: "03",
    title: "SaaS & Custom Software",
    text: "Purpose-built software, cloud products and operational tools shaped for the way your organisation actually works.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    text: "Elegant interfaces, coherent user journeys and scalable design systems built to earn attention and trust.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Independent technology company · London</p>
          <h1>
            Digital ambition,
            <span>built with discipline.</span>
          </h1>
          <p className="hero-lead">
            VEMIORA creates refined websites, mobile applications, SaaS products
            and custom software for organisations ready to turn ambitious ideas
            into valuable digital businesses.
          </p>
          <div className="button-row">
            <Link className="button button-light" href="/contact">
              Discuss your project <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/services">
              Explore our capabilities <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-aside" aria-label="Vemiora positioning">
          <div className="orbital-card">
                <div className="orbital-core" aria-hidden="true">V</div>
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="orbit orbit-three" />
          </div>
          <div className="hero-note">
            <span>Our focus</span>
            <p>Commercially sound digital products, delivered with precision.</p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our markets">
        <div className="section-shell trust-grid">
          <p>Serving clients internationally</p>
          <span>United Kingdom</span>
          <span>Europe</span>
          <span>Middle East</span>
          <span>Worldwide</span>
        </div>
      </section>

      <section className="light-section section-shell" id="services">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark">What we build</p>
            <h2>Technology that works<br />as beautifully as it looks.</h2>
          </div>
          <p>
            Every engagement begins with the business objective. We connect
            strategy, experience design and engineering to deliver a product
            people can understand, trust and use.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/services" aria-label={`Learn about ${service.title}`}>
                View capability <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section">
        <div className="section-shell product-layout">
          <div className="product-copy">
            <Image
              className="product-brand-logo"
              src="/kavora-logo.png"
              alt="KAVORA — The World of Animal Care"
              width={1200}
              height={1212}
            />
            <p className="eyebrow">VEMIORA product portfolio</p>
            <span className="status-pill">In development · Near launch</span>
            <h2>KAVORA</h2>
            <p className="product-intro">
              A connected destination for pet owners and trusted service
              providers — designed to simplify everyday animal care across the
              world.
            </p>
            <ul className="product-list">
              <li>Pet sitting & boarding</li>
              <li>Pet taxi & grooming</li>
              <li>Veterinary clinics</li>
              <li>Horse training & specialist services</li>
            </ul>
            <Link className="text-link pale" href="/products">
              Discover KAVORA <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="product-visual" aria-label="KAVORA platform preview">
            <div className="device device-back kavora-brand-device">
              <Image
                className="kavora-logo-preview"
                src="/kavora-logo.png"
                alt="KAVORA — The World of Animal Care"
                width={1200}
                height={1212}
              />
            </div>
            <div className="device device-front">
              <div className="device-top"><b>K</b><span>KAVORA</span></div>
              <div className="device-welcome">Care, closer than ever.</div>
              <div className="service-chips">
                <span>Pet sitter</span><span>Grooming</span><span>Vet</span>
              </div>
              <div className="provider-card">
                      <div className="provider-avatar" aria-hidden="true">P</div>
                <div><b>Nearby care</b><small>Verified providers</small></div>
                <strong>4.9</strong>
              </div>
              <div className="provider-card">
                      <div className="provider-avatar alt" aria-hidden="true">T</div>
                <div><b>Pet taxi</b><small>Available today</small></div>
                <strong>4.8</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="principles-section section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark">How we work</p>
            <h2>Clarity at every stage.<br />Accountability in every detail.</h2>
          </div>
          <p>
            A disciplined process reduces uncertainty and protects the value of
            your idea. We communicate plainly, agree realistic milestones and
            treat every delivery date as a commitment.
          </p>
        </div>
        <div className="principles-grid">
          <article><span>01</span><h3>Discover</h3><p>We define the problem, audience and commercial outcome before proposing a solution.</p></article>
          <article><span>02</span><h3>Design</h3><p>We turn complexity into a clear product experience and a credible technical plan.</p></article>
          <article><span>03</span><h3>Deliver</h3><p>We build, validate and release against agreed milestones with transparent communication.</p></article>
        </div>
      </section>

      <section className="founder-preview">
        <div className="section-shell founder-layout">
            <div className="founder-image">
              <Image
                src="/omar-elmohr.webp"
                alt="Omar Elmohr, Founder and CEO of VEMIORA LTD"
                width={1087}
                height={1447}
                sizes="(max-width: 900px) 100vw, 44vw"
                priority
              />
            </div>
          <div className="founder-copy">
            <p className="eyebrow">Leadership</p>
            <blockquote>
              “Our ambition is to build a company known for original ideas,
              professional execution and promises kept.”
            </blockquote>
            <h2>Omar Elmohr</h2>
            <p className="role">Founder &amp; CEO</p>
            <p>
              Omar brings a background in audit and forensic accounting
              consultancy to technology entrepreneurship — combining commercial
              judgement, risk awareness and disciplined delivery with a clear
              vision for VEMIORA&apos;s global digital portfolio.
            </p>
            <Link className="text-link pale" href="/founder">
              Meet the founder <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section section-shell">
        <p className="eyebrow dark">Start a conversation</p>
        <h2>Have an ambitious digital project in mind?</h2>
        <p>Tell us where you want to go. We will help you define the right way to build it.</p>
        <Link className="button button-dark" href="/contact">
          Discuss your project <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
