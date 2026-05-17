import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Neurokinesia IM — Kinesiólogo en Corrientes · Rehabilitación Integral",
    template: "%s · Neurokinesia IM",
  },
  description:
    "Kinesiólogo en Corrientes. Rehabilitación neurológica, respiratoria, traumatológica, pediátrica y geriátrica. Turno exclusivo y atención personalizada. Quintana 1465, Corrientes.",
  metadataBase: new URL("https://www.neurokinesiaim.com.ar"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "7e7bf_8najFScB1-J7qKYYMwCQVV95GJA3Cxo0GDfEs",
  },
  openGraph: {
    siteName: "Neurokinesia IM",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Neurokinesia IM — Kinesiología · Terapia · Rehabilitación" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Neurokinesia IM",
  description:
    "Consultorio de kinesiología especializado en rehabilitación integral. Atención personalizada con turno exclusivo.",
  url: "https://www.neurokinesiaim.com.ar",
  logo: "https://www.neurokinesiaim.com.ar/icon.svg",
  image: "https://www.neurokinesiaim.com.ar/og-image.png",
  telephone: ["+54-379-425-8022", "+54-379-460-8244"],
  email: "contacto@neurokinesiaim.com.ar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Quintana 1465",
    addressLocality: "Corrientes",
    addressRegion: "Corrientes",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.4806,
    longitude: -58.8341,
  },
  priceRange: "$$",
  medicalSpecialty: [
    "Kinesiología",
    "Rehabilitación Neurológica",
    "Rehabilitación Respiratoria",
    "Fisioterapia",
  ],
  sameAs: ["https://www.instagram.com/neurokinesiaim"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
