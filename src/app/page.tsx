import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Neurokinesia IM — Kinesiólogo en Corrientes · Rehabilitación Integral",
  description:
    "Kinesiólogo en Corrientes. Rehabilitación neurológica, respiratoria, traumatológica, pediátrica, geriátrica y más. Turno exclusivo y atención personalizada. Quintana 1465.",
};

const WA_URL = "https://wa.me/5437942580223?text=Hola%2C%20quisiera%20pedir%20un%20turno.";

// ── Datos ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    slug: "neurologica-pediatrica",
    name: "Neurológica · Pediátrica",
    desc: "Recuperación funcional del sistema nervioso en adultos y niños. Abordaje del movimiento, la coordinación y el desarrollo neuromotor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/>
        <line x1="5.6" y1="5.6" x2="9.9" y2="9.9"/><line x1="14.1" y1="14.1" x2="18.4" y2="18.4"/>
        <line x1="18.4" y1="5.6" x2="14.1" y2="9.9"/><line x1="9.9" y1="14.1" x2="5.6" y2="18.4"/>
      </svg>
    ),
  },
  {
    slug: "respiratoria",
    name: "Respiratoria",
    desc: "Tratamiento de patologías respiratorias agudas y crónicas. Técnicas de higiene bronquial, expansión pulmonar y rehabilitación post-COVID.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5z"/>
        <path d="M5 14s-1 8 7 8 7-8 7-8"/>
      </svg>
    ),
  },
  {
    slug: "motora",
    name: "Motora",
    desc: "Recuperación del movimiento y la fuerza tras lesión, enfermedad o cirugía. Plan adaptado a las necesidades de cada etapa del tratamiento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v8"/>
        <path d="M9 10l3 2 3-2"/>
        <path d="M9 20l3-5 3 5"/>
      </svg>
    ),
  },
  {
    slug: "traumatologica",
    name: "Traumatológica",
    desc: "Rehabilitación de fracturas, esguinces, lesiones deportivas y post-quirúrgicas. Recuperación funcional orientada al retorno a la actividad.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12"/>
      </svg>
    ),
  },
  {
    slug: "geriatrica",
    name: "Geriátrica",
    desc: "Mantenimiento de la funcionalidad y la independencia en adultos mayores. Prevención de caídas, equilibrio y movilidad articular.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    slug: "convencional",
    name: "Kinesiología Convencional",
    desc: "Atención kinesiológica integral para dolores, lesiones y limitaciones del aparato locomotor. Evaluación, tratamiento y seguimiento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

const FEATURES = [
  {
    title: "Turno exclusivo",
    desc: "Cada paciente tiene su espacio reservado. Sin esperas, sin interrupciones — toda la atención enfocada en vos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: "Abordaje integral",
    desc: "Evaluamos el diagnóstico, el historial y las metas de cada paciente para diseñar un plan de tratamiento personalizado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    title: "Seguimiento hasta el alta",
    desc: "El tratamiento no termina hasta que alcanzás tus objetivos. Acompañamos cada etapa de la recuperación.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

const TEAM = [
  {
    name: "María del Mar Flores",
    title: "Lic. en Kinesiología y Fisiatría",
    initials: "MF",
    specialties: ["Rehabilitación Neurológica", "Rehabilitación Motora", "RPG"],
  },
  {
    name: "Isabel Leonora Aranda",
    title: "Lic. en Kinesiología y Fisiatría",
    initials: "IA",
    specialties: ["Rehabilitación Pediátrica", "Rehabilitación Respiratoria", "Kinesiotaping"],
  },
];

// ── Componentes de sección ────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-widest uppercase text-teal font-semibold mb-4">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-4xl md:text-5xl font-light text-navy leading-tight mb-6"
      style={{ fontFamily: "var(--font-cormorant)" }}
    >
      {children}
    </h2>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy text-white overflow-hidden">
        {/* Arco decorativo */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-[56px] border-teal opacity-10 translate-x-32 -translate-y-32 pointer-events-none" />
        <div className="absolute bottom-0 right-24 w-48 h-48 rounded-full border-[28px] border-teal-lt opacity-10 translate-y-16 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <p className="text-xs tracking-widest uppercase text-teal-lt mb-6">
            Kinesiología · Terapia · Rehabilitación
          </p>
          <h1
            className="text-5xl md:text-7xl font-light leading-[1.1] mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Recuperá tu movimiento.{" "}
            <em className="text-teal-lt not-italic">Recuperá tu vida.</em>
          </h1>
          <p className="text-white/65 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Atención personalizada e integral con turno exclusivo y seguimiento
            continuo hasta el alta. Corrientes, Argentina.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal hover:bg-teal-lt text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Pedí tu turno
            </a>
            <Link
              href="/servicios"
              className="border border-white/25 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS DESTACADOS ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Nuestros servicios</SectionLabel>
            <SectionHeading>
              Rehabilitación integral<br />
              <em className="not-italic text-teal">en cada etapa</em>
            </SectionHeading>
            <p className="text-muted max-w-xl leading-relaxed">
              Diez especialidades kinesiológicas en Corrientes bajo un mismo techo,
              con un equipo formado y actualizado en cada área.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios`}
                className="group bg-white border border-warm rounded-xl p-6 hover:border-teal hover:shadow-md transition-all"
              >
                {/* Ícono */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal to-teal-lt flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-navy text-base mb-2">{s.name}</h3>
                <p className="text-muted text-base leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:text-teal-lt transition-colors"
            >
              Ver todos los servicios
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <SectionLabel>Por qué elegirnos</SectionLabel>
            <SectionHeading>
              Un modelo de atención<br />
              <em className="not-italic text-teal">centrado en vos</em>
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col gap-4">
                {/* Ícono con línea acento */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream border border-warm flex items-center justify-center text-teal flex-shrink-0">
                    {f.icon}
                  </div>
                  <div className="h-px flex-1 bg-warm" />
                </div>
                <h3
                  className="text-2xl text-navy"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {f.title}
                </h3>
                <p className="text-muted text-base leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Banda Ser Salud */}
          <div className="mt-16 border border-warm rounded-xl px-8 py-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <p className="text-base text-muted text-center sm:text-left">
              Trabajamos en cooperación con{" "}
              <span className="font-medium text-navy">Ser Salud®</span>, integrando
              recursos y especialidades para una atención kinesiológica más completa en Corrientes.
            </p>
          </div>
        </div>
      </section>

      {/* ── EL EQUIPO ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <SectionLabel>El equipo</SectionLabel>
            <SectionHeading>
              Profesionales comprometidas<br />
              <em className="not-italic text-teal">con tu recuperación</em>
            </SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-warm rounded-xl p-8 flex flex-col gap-6"
              >
                {/* Avatar placeholder */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-xl text-teal-lt font-light"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-light text-navy"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted tracking-wide uppercase mt-0.5">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Especialidades */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-sm px-3 py-1 rounded-full bg-cream border border-warm text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/equipo"
              className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:text-teal-lt transition-colors"
            >
              Conocé al equipo completo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-[40px] border-teal opacity-10 -translate-x-24 -translate-y-24" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full border-[50px] border-teal-lt opacity-10 translate-x-24 translate-y-24" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <SectionLabel>¿Listo para empezar?</SectionLabel>
          <h2
            className="text-4xl md:text-5xl font-light leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Tu recuperación empieza<br />
            <em className="text-teal-lt not-italic">con una consulta</em>
          </h2>
          <p className="text-white/60 mb-10 text-lg leading-relaxed">
            Escribinos por WhatsApp y te orientamos sobre el tratamiento más
            adecuado para tu caso.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-teal hover:bg-teal-lt text-white font-medium px-8 py-4 rounded-lg transition-colors text-sm"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.305-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.042-1.383l-.361-.214-3.742.893.924-3.638-.235-.374A9.863 9.863 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.466 0 9.882 4.415 9.882 9.882 0 5.466-4.416 9.882-9.882 9.882z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
