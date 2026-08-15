import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { business } from "@/lib/site-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://rangeeninteriorsadiala.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rangeen Interiors Adiala | Premium Interior Design in Rawalpindi",
    template: "%s | Rangeen Interiors Adiala",
  },
  description:
    "Rangeen Interiors Adiala offers premium interior design and finishing in Rawalpindi — wallpapers, false ceilings, PVC paneling, flooring, wardrobes and full home & office renovations.",
  keywords: [
    "interior design Rawalpindi",
    "Rangeen Interiors Adiala",
    "false ceiling Rawalpindi",
    "wallpaper installation Rawalpindi",
    "office renovation Rawalpindi",
    "PVC paneling Rawalpindi",
  ],
  openGraph: {
    title: "Rangeen Interiors Adiala | Premium Interior Design in Rawalpindi",
    description:
      "Premium interior design and finishing services in Rawalpindi — wallpapers, flooring, false ceilings, paneling and complete renovations.",
    url: siteUrl,
    siteName: "Rangeen Interiors Adiala",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangeen Interiors Adiala",
    description: "Premium interior design & finishing services in Rawalpindi.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    image: `${siteUrl}/images/hero.jpg`,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Adiala Road",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      postalCode: "46000",
      addressCountry: "PK",
    },
    url: siteUrl,
    sameAs: [business.social.facebook, business.social.instagram],
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
