import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactate con Neurokinesia IM para pedir un turno o resolver una consulta.",
};

export default function ContactoPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-navy mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
        Contacto
      </h1>
      <p className="text-muted">Página en construcción.</p>
    </section>
  );
}
