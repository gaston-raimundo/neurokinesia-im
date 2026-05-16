import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurokinesia IM — Kinesiología · Terapia · Rehabilitación",
  description:
    "Consultorio de kinesiología especializado en rehabilitación integral. Atención personalizada con turno exclusivo. Corrientes, Argentina.",
};

const WA_URL = "https://wa.me/5437942580223?text=Hola%2C%20quisiera%20pedir%20un%20turno.";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-teal-lt mb-6">
            Kinesiología · Terapia · Rehabilitación
          </p>
          <h1
            className="text-5xl md:text-6xl font-light leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Recuperá tu movimiento.<br />
            <em className="text-teal-lt not-italic">Recuperá tu vida.</em>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-10">
            Atención personalizada e integral con turno exclusivo y seguimiento
            continuo hasta el alta. Corrientes, Argentina.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal hover:bg-teal-lt text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Pedí tu turno
            </a>
            <a
              href="/servicios"
              className="border border-white/30 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Placeholder — próximas secciones */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted text-sm">
            Próximamente: servicios, equipo y más.
          </p>
        </div>
      </section>
    </>
  );
}
