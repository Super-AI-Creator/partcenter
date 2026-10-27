import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Suspense } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { office, officeQuery, site, siteOrigin } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: `${site.name} | Recruitment and Engineering Collaboration`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/logo.png" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  logo: new URL("/logo.png", siteOrigin()).toString(),
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    streetAddress: office.street,
    addressLocality: office.city,
    addressRegion: office.region,
    postalCode: office.postalCode,
    addressCountry: "US",
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeQuery())}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Suspense fallback={<div className="h-24 border-b border-line bg-paper" />}>
          <SiteHeader />
        </Suspense>
        <main id="content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
