import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the VEMIORA LTD website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="The rules that apply when you use this website or submit a project enquiry to VEMIORA LTD."
      />
      <section className="content-section">
        <div className="legal-copy">
          <p>Last updated: 22 July 2026</p>

          <h2>About these terms</h2>
          <p>
            These terms govern your use of this website, which is operated by
            VEMIORA LTD, a company registered in England and Wales under company
            number 17352395.
          </p>

          <h2>Website information</h2>
          <p>
            We take reasonable care to keep the information on this website
            accurate and current. Content is provided for general information and
            does not constitute professional, legal, financial or technical
            advice.
          </p>

          <h2>Project enquiries and proposals</h2>
          <p>
            Submitting an enquiry does not create a client relationship or bind
            either party. Project scope, fees, delivery dates, ownership and other
            commercial terms become binding only when confirmed in a separate
            written agreement.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless stated otherwise, the website design, written content, brand
            assets and other original materials belong to VEMIORA LTD or are used
            with permission. They may not be copied, republished or commercially
            exploited without prior written consent.
          </p>

          <h2>Third-party links</h2>
          <p>
            Links to third-party services are provided for convenience. We are not
            responsible for their content, security, availability or privacy
            practices.
          </p>

          <h2>Liability</h2>
          <p>
            To the fullest extent permitted by law, VEMIORA LTD is not liable for
            loss arising solely from reliance on general website information or
            from temporary interruption of the website. Nothing in these terms
            excludes liability that cannot lawfully be excluded.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales, and the
            courts of England and Wales will have jurisdiction, subject to any
            mandatory rights that apply in your country of residence.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms may be sent to{" "}
            <a href="mailto:enquiries@vemiora.uk">enquiries@vemiora.uk</a>.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
