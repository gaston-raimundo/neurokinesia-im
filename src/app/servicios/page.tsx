import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Kinesiología en Corrientes",
  description:
    "Servicios de kinesiología y rehabilitación en Corrientes: neurológica, respiratoria, traumatológica, pediátrica, geriátrica, RPG, kinesiotaping, deglución y más. Neurokinesia IM.",
};

const WA_URL =
  "https://wa.me/5437942580223?text=Hola%2C%20quisiera%20pedir%20un%20turno.";

const SERVICES = [
  {
    slug: "neurologica",
    name: "Rehabilitación Neurológica",
    desc: "Recuperación funcional del sistema nervioso mediante reeducación neuromuscular, estimulación sensoriomotriz y ejercicio terapéutico basado en neuroplasticidad.",
    tags: ["ACV / Hemiparesia", "Parkinson", "Esclerosis Múltiple", "Lesión medular", "TCE"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
    name: "Rehabilitación Respiratoria",
    desc: "Técnicas de higiene bronquial, reentrenamiento muscular y ejercicio aeróbico progresivo para patologías obstructivas, restrictivas y post-quirúrgicas. Incluye rehabilitación post-COVID.",
    tags: ["EPOC", "Asma", "Post-COVID", "Fibrosis quística", "Post-cirugía torácica"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2c-2 0-4 1.5-4 4v4c0 2.5 1.5 4.5 4 5 2.5-.5 4-2.5 4-5V6c0-2.5-2-4-4-4z"/>
        <path d="M5 14c0 4 3 7 7 7s7-3 7-7"/>
        <line x1="8" y1="14" x2="6" y2="19"/>
        <line x1="16" y1="14" x2="18" y2="19"/>
      </svg>
    ),
  },
  {
    slug: "motora",
    name: "Rehabilitación Motora",
    desc: "Reeducación de patrones motores, fortalecimiento progresivo y entrenamiento de la coordinación. Con objetivos funcionales medibles orientados al retorno a las actividades cotidianas.",
    tags: ["Déficit motor", "Post-quirúrgico", "Inmovilización prolongada"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v8"/>
        <path d="M8 11l4 2 4-2"/>
        <path d="M8 20l4-5 4 5"/>
      </svg>
    ),
  },
  {
    slug: "traumatologica",
    name: "Rehabilitación Traumatológica",
    desc: "Rehabilitación post-quirúrgica ortopédica, tratamiento de lesiones ligamentarias y tendinosas, recuperación funcional de miembros. Protocolo adaptado según estadio de cicatrización.",
    tags: ["Rodilla / Cadera / Hombro", "Fracturas", "Prótesis articulares", "Roturas tendinosas"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 3a3 3 0 00-3 3v12a3 3 0 006 0 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 006 0V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12"/>
      </svg>
    ),
  },
  {
    slug: "geriatrica",
    name: "Fisioterapia Geriátrica",
    desc: "Entrenamiento del equilibrio y la marcha, prevención de caídas y mantenimiento de la autonomía funcional en adultos mayores. Disponibilidad para abordaje interdisciplinario.",
    tags: ["Post-fractura de cadera", "Síndrome de caídas", "Sarcopenia", "Post-internación"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
    desc: "Evaluación y tratamiento de disfunciones músculo-esqueléticas con terapia manual, ejercicio terapéutico supervisado y electroterapia (TENS, ultrasonido, magnetoterapia) según indicación.",
    tags: ["Tendinopatías", "Contracturas", "Bursitis", "Dolor lumbar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    slug: "rpg",
    name: "RPG — Reeducación Postural Global",
    desc: "Trabajo en cadenas musculares mediante posturas de estiramiento global mantenido. Especialmente indicada cuando los tratamientos segmentarios no han dado resultado sostenido.",
    tags: ["Escoliosis funcional", "Cervicalgia / Lumbalgia crónica", "Hernias discales"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="M8 6c0 0 2 1 4 0s4 0 4 0"/>
        <path d="M7 12c0 0 2.5 1.5 5 0s5 0 5 0"/>
        <path d="M8 18c0 0 2 1 4 0s4 0 4 0"/>
      </svg>
    ),
  },
  {
    slug: "kinesiotaping",
    name: "Kinesiotaping",
    desc: "Vendaje funcional con cinta de algodón elástico. Inhibición y facilitación muscular, drenaje linfático, corrección articular y reentrenamiento propioceptivo. Aplicable en fase aguda y crónica.",
    tags: ["Lesiones agudas", "Edema post-traumático", "Inestabilidad articular"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="8" width="18" height="8" rx="3"/>
        <line x1="9" y1="8" x2="9" y2="16"/>
        <line x1="15" y1="8" x2="15" y2="16"/>
      </svg>
    ),
  },
  {
    slug: "deglucion",
    name: "Rehabilitación de la Deglución",
    desc: "Evaluación y tratamiento de la disfagia orofaríngea. Facilitación neuromuscular orofacial, maniobras deglutorias y fortalecimiento muscular oral y faríngeo. Coordinación con fonoaudiología y nutrición.",
    tags: ["Disfagia post-ACV", "Parkinson", "ELA / EM", "Post-cirugía cervical"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5z"/>
        <path d="M8 14s-.5 6 4 6 4-6 4-6"/>
        <line x1="12" y1="13" x2="12" y2="14"/>
      </svg>
    ),
  },
  {
    slug: "pediatrica",
    name: "Rehabilitación Pediátrica",
    desc: "Evaluación del desarrollo neuromotor y tratamiento de disfunciones motrices en población pediátrica. Técnicas Bobath, Vojta y PNF adaptadas a la edad. Coordinación disponible con pediatra o neuropediatra.",
    tags: ["Parálisis cerebral", "Retraso psicomotor", "Hipotonía", "Tortícolis congénita"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="6" r="3"/>
        <path d="M8 22V14a4 4 0 018 0v8"/>
        <path d="M6 14l-2 4"/>
        <path d="M18 14l2 4"/>
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-xs tracking-widest uppercase text-teal-lt mb-4">
            Neurokinesia IM
          </p>
          <h1
            className="text-5xl md:text-6xl font-light leading-[1.1] mb-5 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Nuestros{" "}
            <em className="text-teal-lt not-italic">servicios</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Diez especialidades kinesiológicas con atención personalizada, turno
            exclusivo y seguimiento hasta el alta.
          </p>
        </div>
      </section>

      {/* ── GRILLA DE SERVICIOS ── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-white border border-warm rounded-xl p-6 flex flex-col gap-4 hover:border-teal hover:shadow-md transition-all"
              >
                {/* Ícono */}
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-teal to-teal-lt flex items-center justify-center text-white flex-shrink-0">
                  {s.icon}
                </div>

                {/* Nombre y descripción */}
                <div className="flex-1">
                  <h2
                    className="text-xl font-light text-navy mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.name}
                  </h2>
                  <p className="text-muted text-base leading-relaxed">{s.desc}</p>
                </div>

                {/* Tags de indicaciones */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-2.5 py-1 rounded-full bg-cream border border-warm text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-white border-t border-warm">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-3xl md:text-4xl font-light text-navy mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            ¿No encontrás lo que buscás?
          </p>
          <p className="text-muted mb-8 leading-relaxed">
            Consultanos directamente. Evaluamos tu caso y te orientamos sobre el
            tratamiento más adecuado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-teal hover:bg-teal-lt text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.305-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.042-1.383l-.361-.214-3.742.893.924-3.638-.235-.374A9.863 9.863 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.466 0 9.882 4.415 9.882 9.882 0 5.466-4.416 9.882-9.882 9.882z"/>
              </svg>
              Consultanos por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="border border-warm hover:border-teal text-navy font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Ver datos de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
