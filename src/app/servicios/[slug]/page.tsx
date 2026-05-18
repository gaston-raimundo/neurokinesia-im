import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ── WHATSAPP ── */
const WA_URL =
  "https://wa.me/5493794258022?text=Hola%2C%20quisiera%20pedir%20un%20turno.";

/* ── DATOS COMPLETOS DE CADA SERVICIO ── */
const SERVICES: Record<
  string,
  {
    name: string;
    eyebrow: string;
    patientDesc: string;
    clinicalDesc: string;
    indications: string[];
    derivadores: string[];
    tags: string[];
    icon: React.ReactNode;
  }
> = {
  neurologica: {
    name: "Rehabilitación Neurológica",
    eyebrow: "Neuro Kinesiología",
    patientDesc:
      "Recuperación del movimiento y la funcionalidad después de una lesión o enfermedad del sistema nervioso. Trabajamos con el cerebro y el cuerpo juntos para reconectar, compensar y mejorar tu calidad de vida.",
    clinicalDesc:
      "Reeducación neuromuscular mediante Método Bobath, Therasuit y Perfetti. Atención a niños, adolescentes y adultos. Evaluación funcional estandarizada en primera consulta. Comunicación disponible con el médico derivador.",
    indications: [
      "ACV / Hemiparesia",
      "Enfermedad de Parkinson",
      "Esclerosis Múltiple",
      "Lesión medular",
      "Neuropatías periféricas",
      "TCE",
      "Parálisis cerebral",
      "Retraso psicomotor",
      "Hipotonía",
    ],
    derivadores: ["Neurología", "Clínica médica", "Pediatría", "Neuropediatría"],
    tags: ["ACV / Hemiparesia", "Parkinson", "Esclerosis Múltiple", "Lesión medular", "TCE"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/>
        <line x1="5.6" y1="5.6" x2="9.9" y2="9.9"/><line x1="14.1" y1="14.1" x2="18.4" y2="18.4"/>
        <line x1="18.4" y1="5.6" x2="14.1" y2="9.9"/><line x1="9.9" y1="14.1" x2="5.6" y2="18.4"/>
      </svg>
    ),
  },
  respiratoria: {
    name: "Rehabilitación Respiratoria",
    eyebrow: "Kinesiología Respiratoria",
    patientDesc:
      "Técnicas específicas para mejorar tu capacidad pulmonar, facilitar la expectoración y recuperar la función respiratoria después de una enfermedad o cirugía.",
    clinicalDesc:
      "Kinesioterapia respiratoria con técnicas de higiene bronquial, reentrenamiento muscular respiratorio y ejercicio aeróbico progresivo. Indicada en patologías obstructivas, restrictivas y post-quirúrgicas torácicas o abdominales.",
    indications: [
      "EPOC",
      "Asma",
      "Fibrosis quística",
      "Bronquiectasias",
      "Post-cirugía torácica o abdominal",
      "Atelectasias",
      "Enfermedades neuromusculares con afectación respiratoria",
    ],
    derivadores: ["Neumonología", "Clínica médica", "Geriatría", "Cardiología (post-quirúrgico)"],
    tags: ["EPOC", "Asma", "Fibrosis quística", "Post-cirugía torácica"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2c-2 0-4 1.5-4 4v4c0 2.5 1.5 4.5 4 5 2.5-.5 4-2.5 4-5V6c0-2.5-2-4-4-4z"/>
        <path d="M5 14c0 4 3 7 7 7s7-3 7-7"/>
        <line x1="8" y1="14" x2="6" y2="19"/>
        <line x1="16" y1="14" x2="18" y2="19"/>
      </svg>
    ),
  },
  motora: {
    name: "Rehabilitación Motora",
    eyebrow: "Rehabilitación Funcional",
    patientDesc:
      "Recuperación del movimiento y la fuerza perdidos por lesión, enfermedad o cirugía, con un plan adaptado a las necesidades de cada etapa del proceso.",
    clinicalDesc:
      "Evaluación del movimiento funcional, reeducación de patrones motores, fortalecimiento progresivo y entrenamiento de la coordinación. Abordaje individual con objetivos funcionales medibles a corto y largo plazo.",
    indications: [
      "Déficit motor por causa neurológica o músculo-esquelética",
      "Post-quirúrgico",
      "Secuelas de inmovilización prolongada",
      "Rehabilitación funcional general",
    ],
    derivadores: ["Clínica médica", "Traumatología", "Neurología"],
    tags: ["Déficit motor", "Post-quirúrgico", "Inmovilización prolongada"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v8"/>
        <path d="M8 11l4 2 4-2"/>
        <path d="M8 20l4-5 4 5"/>
      </svg>
    ),
  },
  traumatologica: {
    name: "Rehabilitación Traumatológica",
    eyebrow: "Rehabilitación Post-quirúrgica",
    patientDesc:
      "Tratamiento kinesiológico para recuperar fuerza, movilidad y confianza tras una lesión, fractura o cirugía ortopédica, de forma segura y progresiva.",
    clinicalDesc:
      "Rehabilitación pre y post quirúrgica, tratamiento de lesiones ligamentarias y tendinosas, recuperación funcional de miembro. Protocolo adaptado a cada patología.",
    indications: [
      "Post-quirúrgico de rodilla / cadera / hombro",
      "Fracturas en consolidación",
      "Esguinces y roturas ligamentarias",
      "Roturas tendinosas",
      "Lesiones musculares",
      "Prótesis articulares",
    ],
    derivadores: ["Traumatología", "Ortopedia", "Deportología"],
    tags: ["Rodilla / Cadera / Hombro", "Fracturas", "Prótesis articulares", "Roturas tendinosas"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M18 3a3 3 0 00-3 3v12a3 3 0 006 0 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 006 0V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12"/>
      </svg>
    ),
  },
  geriatrica: {
    name: "Fisioterapia Geriátrica",
    eyebrow: "Adulto Mayor",
    patientDesc:
      "Cuidado kinesiológico pensado para las necesidades del adulto mayor: mantener la independencia, prevenir caídas, mejorar el equilibrio y recuperar la movilidad del día a día.",
    clinicalDesc:
      "Evaluación funcional geriátrica, entrenamiento del equilibrio y la marcha, prevención de caídas, rehabilitación post-fractura y mantenimiento de la autonomía funcional. Disponibilidad para abordaje interdisciplinario.",
    indications: [
      "Deterioro funcional por envejecimiento",
      "Post-fractura de cadera",
      "Síndrome de caídas",
      "Sarcopenia",
      "Parkinson en adultos mayores",
      "Post-internación prolongada",
      "Osteoporosis con limitación funcional",
    ],
    derivadores: ["Geriatría", "Clínica médica", "Traumatología", "Neurología"],
    tags: ["Post-fractura de cadera", "Síndrome de caídas", "Sarcopenia", "Post-internación"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  rpg: {
    name: "Reeducación Postural Global (Método Tres Escuadras)",
    eyebrow: "RPG · Método Tres Escuadras",
    patientDesc:
      "Un método de estiramiento global que trabaja sobre todo tu cuerpo como una cadena, no síntoma por síntoma. Ideal para dolores crónicos de columna, contracturas y posturas compensatorias.",
    clinicalDesc:
      "Técnica de trabajo en cadenas musculares mediante posturas de estiramiento global mantenido. Aborda el síntoma desde su causa morfológica y postural. Indicada especialmente cuando los tratamientos segmentarios no han dado resultado sostenido.",
    indications: [
      "Escoliosis funcional",
      "Cervicalgia y lumbalgia crónica",
      "Hernias discales",
      "Asimetrías posturales",
      "Contracturas de repetición",
      "Dolor miofascial",
      "Cefaleas tensionales",
    ],
    derivadores: ["Traumatología", "Clínica médica", "Neurología", "Autoderivación"],
    tags: ["Escoliosis funcional", "Cervicalgia / Lumbalgia crónica", "Hernias discales"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="M8 6c0 0 2 1 4 0s4 0 4 0"/>
        <path d="M7 12c0 0 2.5 1.5 5 0s5 0 5 0"/>
        <path d="M8 18c0 0 2 1 4 0s4 0 4 0"/>
      </svg>
    ),
  },
  kinesiotaping: {
    name: "Kinesiotaping",
    eyebrow: "Vendaje Neuromuscular",
    patientDesc:
      "Vendaje neuromuscular con cinta elástica especial que acompaña el movimiento natural de tu cuerpo, alivia el dolor, reduce la inflamación y apoya la recuperación entre sesiones.",
    clinicalDesc:
      "Técnica de vendaje funcional con cinta de algodón elástico. Indicado como complemento terapéutico para inhibición/facilitación muscular, drenaje linfático, corrección articular y reentrenamiento propioceptivo. No invasivo, aplicable en fase aguda y crónica.",
    indications: [
      "Lesiones músculo-esqueléticas agudas",
      "Edema post-traumático",
      "Síndrome doloroso regional",
      "Inestabilidad articular",
      "Soporte durante rehabilitación activa",
    ],
    derivadores: ["Traumatología", "Deportología", "Complementario a todos los servicios"],
    tags: ["Lesiones agudas", "Edema post-traumático", "Inestabilidad articular"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="8" width="18" height="8" rx="3"/>
        <line x1="9" y1="8" x2="9" y2="16"/>
        <line x1="15" y1="8" x2="15" y2="16"/>
      </svg>
    ),
  },
  deglucion: {
    name: "Rehabilitación de la Deglución",
    eyebrow: "Disfagia · Rehabilitación Orofacial",
    patientDesc:
      "Tratamiento especializado para quienes tienen dificultades para tragar (disfagia), ya sea por una lesión neurológica, una cirugía o el avance de una enfermedad. Trabajamos para que comer y beber sea más seguro y cómodo.",
    clinicalDesc:
      "Evaluación y tratamiento kinesiológico de la disfagia orofaríngea. Técnicas de facilitación neuromuscular orofacial, maniobras deglutorias compensatorias y ejercicios de fortalecimiento muscular oral y faríngeo.",
    indications: [
      "Disfagia post-ACV",
      "Enfermedad de Parkinson",
      "Esclerosis múltiple / ELA",
      "Post-cirugía de cabeza y cuello",
      "Disfagia geriátrica",
      "TCE con afectación deglutoria",
    ],
    derivadores: ["Neurología", "Geriatría", "Fonoaudiología", "Oncología de cabeza y cuello"],
    tags: ["Disfagia post-ACV", "Parkinson", "ELA / EM", "Post-cirugía cervical"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5z"/>
        <path d="M8 14s-.5 6 4 6 4-6 4-6"/>
        <line x1="12" y1="13" x2="12" y2="14"/>
      </svg>
    ),
  },
  convencional: {
    name: "Kinesiología Convencional",
    eyebrow: "Kinesiología · Fisioterapia",
    patientDesc:
      "Atención kinesiológica completa para dolores, lesiones y limitaciones del aparato locomotor. Evaluación, tratamiento y acompañamiento hasta recuperar la función necesaria.",
    clinicalDesc:
      "Evaluación y tratamiento de disfunciones músculo-esqueléticas. Ejercicio terapéutico supervisado y fisioterapia (TENS, ultrasonido, magnetoterapia) según indicación.",
    indications: [
      "Contracturas musculares",
      "Tendinopatías",
      "Bursitis",
      "Dolor lumbar inespecífico",
      "Síndrome de hombro doloroso",
      "Cervicalgias",
      "Limitaciones articulares funcionales",
    ],
    derivadores: ["Clínica médica", "Traumatología", "Autoderivación"],
    tags: ["Tendinopatías", "Contracturas", "Bursitis", "Dolor lumbar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
};

/* ── STATIC PARAMS ── */
export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

/* ── METADATA ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES[slug];
  if (!s) return {};
  return {
    title: `${s.name} · Kinesiología en Corrientes`,
    description: `${s.patientDesc} Neurokinesia IM — Quintana 1465, Corrientes.`,
    alternates: { canonical: `/servicios/${slug}/` },
  };
}

/* ── PAGE ── */
export default async function ServicioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = SERVICES[slug];
  if (!s) notFound();

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-teal-lt mb-6">
            <Link href="/servicios" className="hover:text-white transition-colors">
              Servicios
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">{s.eyebrow}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-8 max-w-3xl">
            {/* Ícono */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal to-teal-lt flex items-center justify-center text-white flex-shrink-0">
              {s.icon}
            </div>
            <div>
              <h1
                className="text-4xl md:text-5xl font-light leading-[1.1] mb-5"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {s.name}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                {s.patientDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Columna principal */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Indicaciones */}
            <div className="bg-white border border-warm rounded-xl p-8">
              <p className="text-xs tracking-widest uppercase text-teal mb-4">
                Indicaciones principales
              </p>
              <h2
                className="text-2xl font-light text-navy mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                ¿Cuándo está indicado?
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.indications.map((ind) => (
                  <li key={ind} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    <span className="text-muted leading-relaxed">{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Para derivadores */}
            <div className="bg-navy text-white rounded-xl p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full border-[40px] border-teal opacity-10"
                style={{ transform: "translate(40%, -40%)" }}
              />
              <p className="text-xs tracking-widest uppercase text-teal-lt mb-4 relative z-10">
                Para profesionales de la salud
              </p>
              <h2
                className="text-2xl font-light text-white mb-4 relative z-10"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Descripción clínica
              </h2>
              <p className="text-white/70 leading-relaxed mb-6 relative z-10">
                {s.clinicalDesc}
              </p>
              <div className="relative z-10">
                <p className="text-xs tracking-widest uppercase text-teal-lt mb-3">
                  Derivaciones desde
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.derivadores.map((d) => (
                    <span
                      key={d}
                      className="text-sm px-3 py-1 rounded-full border border-white/20 text-white/70"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Columna lateral */}
          <div className="flex flex-col gap-6">

            {/* Tags */}
            <div className="bg-white border border-warm rounded-xl p-6">
              <p className="text-xs tracking-widest uppercase text-teal mb-3">
                Condiciones frecuentes
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1.5 rounded-full bg-cream border border-warm text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Proceso */}
            <div className="bg-white border border-warm rounded-xl p-6">
              <p className="text-xs tracking-widest uppercase text-teal mb-4">
                Nuestro proceso
              </p>
              <ol className="flex flex-col gap-4">
                {[
                  { n: "1", t: "Evaluación funcional", d: "Primera consulta para conocer tu historia clínica, objetivos y estado actual." },
                  { n: "2", t: "Plan personalizado", d: "Diseño del programa terapéutico adaptado a tu diagnóstico y metas." },
                  { n: "3", t: "Tratamiento y seguimiento", d: "Sesiones individuales con reevaluación periódica y ajuste del plan." },
                  { n: "4", t: "Alta y prevención", d: "Informe de evolución y herramientas para sostener los resultados." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-navy text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {step.n}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{step.t}</p>
                      <p className="text-sm text-muted mt-0.5 leading-relaxed">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA */}
            <div className="bg-teal rounded-xl p-6 text-white">
              <p
                className="text-xl font-light mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Pedí tu turno
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Consultanos hoy. Evaluamos tu caso y diseñamos un plan específico para vos.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-white text-teal font-semibold px-5 py-3 rounded-lg text-sm hover:bg-cream transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-teal">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.305-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.042-1.383l-.361-.214-3.742.893.924-3.638-.235-.374A9.863 9.863 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.466 0 9.882 4.415 9.882 9.882 0 5.466-4.416 9.882-9.882 9.882z"/>
                </svg>
                Escribinos por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="block text-center text-white/70 hover:text-white text-sm mt-3 transition-colors"
              >
                Ver todos los datos de contacto
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── VOLVER A SERVICIOS ── */}
      <section className="py-10 px-6 bg-white border-t border-warm">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-teal hover:text-navy text-sm font-medium transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Ver todos los servicios
          </Link>
        </div>
      </section>
    </>
  );
}
