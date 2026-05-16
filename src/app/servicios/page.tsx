import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Conocé todos los servicios de kinesiología y rehabilitación que ofrecemos en Neurokinesia IM.",
};

export default function ServiciosPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-navy mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
        Nuestros servicios
      </h1>
      <p className="text-muted">Página en construcción.</p>
    </section>
  );
}
