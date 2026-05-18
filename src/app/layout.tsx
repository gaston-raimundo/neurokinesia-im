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
    "Centro de neuro kinesiología y rehabilitación en Corrientes. Kinesiólogo y fisioterapeuta con turno exclusivo. Neurológica, respiratoria, traumatológica, geriátrica, RPG y más. Quintana 1465.",
  metadataBase: new URL("https://www.neurokinesiaim.com.ar"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
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
    "Centro de neuro kinesiología y rehabilitación en Corrientes, Argentina. Kinesiólogo y fisioterapeuta con turno exclusivo y seguimiento continuo. Especialistas en rehabilitación neurológica (Método Bobath, Therasuit, Perfetti), respiratoria, traumatológica, geriátrica, RPG (Método Tres Escuadras), kinesiotaping y rehabilitación de la deglución.",
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
  areaServed: {
    "@type": "City",
    name: "Corrientes",
    sameAs: "https://www.wikidata.org/wiki/Q44753",
  },
  priceRange: "$$",
  medicalSpecialty: [
    "Kinesiología",
    "Neuro Kinesiología",
    "Rehabilitación Neurológica",
    "Rehabilitación Respiratoria",
    "Rehabilitación Motora",
    "Rehabilitación Traumatológica",
    "Fisioterapia Geriátrica",
    "Reeducación Postural Global",
    "Rehabilitación de la Deglución",
    "Kinesiotaping",
    "Fisioterapia",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Kinesiología y Rehabilitación",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Rehabilitación Neurológica", description: "Niños, adolescentes y adultos. Método Bobath, Therasuit y Perfetti." } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Rehabilitación Respiratoria", description: "Kinesioterapia respiratoria, higiene bronquial y expansión pulmonar." } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Rehabilitación Motora", description: "Recuperación del movimiento y la fuerza tras lesión, enfermedad o cirugía." } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Rehabilitación Traumatológica", description: "Rehabilitación pre y post quirúrgica, lesiones ligamentarias y tendinosas." } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Fisioterapia Geriátrica", description: "Equilibrio, marcha, prevención de caídas y autonomía funcional en adultos mayores." } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Reeducación Postural Global (Método Tres Escuadras)", description: "Trabajo en cadenas musculares para dolores crónicos de columna y postura." } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Rehabilitación de la Deglución", description: "Evaluación y tratamiento de la disfagia orofaríngea." } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Kinesiotaping", description: "Vendaje neuromuscular funcional para lesiones agudas y crónicas." } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Kinesiología Convencional", description: "Ejercicio terapéutico supervisado y fisioterapia según indicación." } },
    ],
  },
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
