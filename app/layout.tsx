import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vemiora.uk"),

  alternates: {
    canonical: "/",
  },

  title: {
    default: "VEMIORA — Digital Products & Technology Solutions",
    template: "%s — VEMIORA",
  },

  description:
    "VEMIORA builds elegant websites, mobile applications, SaaS products and custom software for ambitious organisations.",

  manifest: "/manifest.json",

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "VEMIORA",

    title:
      "VEMIORA — Digital ambition, built with discipline.",

    description:
      "Elegant web, mobile, SaaS and custom software solutions for ambitious organisations.",

    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 628,
        alt: "VEMIORA — Digital products and technology solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "VEMIORA — Digital ambition, built with discipline.",

    description:
      "Elegant web, mobile, SaaS and custom software solutions for ambitious organisations.",

    images: ["/og.webp"],
  },
};


const organisationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: "VEMIORA LTD",

  legalName: "VEMIORA LTD",

  url: "https://vemiora.uk",

  logo: "https://vemiora.uk/favicon.svg",

  foundingDate: "2026-07-21",

  telephone: "+447541469736",

  address: {
    "@type": "PostalAddress",
    streetAddress: "167-169 Great Portland Street, 5th Floor",
    addressLocality: "London",
    postalCode: "W1W 5PF",
    addressCountry: "GB",
  },

  sameAs: [
    "https://www.linkedin.com/in/omar-elmohr-09a03780/",
  ],

  founder: {
    "@type": "Person",
    name: "Omar Elmohr",
    jobTitle: "Founder & CEO",
  },
};

const META_PIXEL_ID = "2229622037970742";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const nonce =
    (await headers()).get("x-nonce") ?? undefined;


  return (
    <html lang="en">

      <body>

        {/* Google Organization Schema */}
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organisationSchema
            ),
          }}
        />


        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J5YBKFQ9C"
          strategy="afterInteractive"
          nonce={nonce}
        />


        <Script
          id="google-analytics"
          strategy="afterInteractive"
          nonce={nonce}
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-J5YBKFQ9C');
          `}
        </Script>


        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          nonce={nonce}
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>


        {children}

      </body>

    </html>
  );
}
