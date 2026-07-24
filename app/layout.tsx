import type { Metadata } from "next";
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

    streetAddress:
      "167-169 Great Portland Street, 5th Floor",

    addressLocality:
      "London",

    postalCode:
      "W1W 5PF",

    addressCountry:
      "GB",
  },

  sameAs: [
    "https://www.linkedin.com/in/omar-elmohr-09a03780/",
  ],

  founder: {
    "@type": "Person",

    name: "Omar Elmohr",

    jobTitle:
      "Founder & CEO",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        {/* Google Organization Schema */}
        <script
          type="application/ld+json"
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
        />


        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag(
              'config',
              'G-J5YBKFQ9C'
            );
          `}
        </Script>


        {children}

      </body>

    </html>
  );
}