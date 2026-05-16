import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos educativos sobre kinesiología, rehabilitación y salud del movimiento. Información para pacientes y familias.",
};

const POSTS = [
  {
    slug: "rehabilitacion-neurologica",
    title: "¿Qué es la rehabilitación neurológica y cuándo se necesita?",
    excerpt:
      "El sistema nervioso tiene una capacidad de adaptación y reorganización que se puede aprovechar terapéuticamente. Explicamos cuándo está indicada la rehabilitación neurológica y qué esperar del proceso.",
    date: "2025-08-01",
    category: "Neurológica",
  },
  {
    slug: "rpg-vs-kinesio-convencional",
    title: "RPG vs. kinesiología convencional: ¿cuál es la diferencia?",
    excerpt:
      "La Reeducación Postural Global trabaja las cadenas musculares en su conjunto, a diferencia del abordaje segmentario tradicional. Cuándo elegir cada enfoque y por qué pueden complementarse.",
    date: "2025-08-15",
    category: "RPG",
  },
  {
    slug: "disfagia-rehabilitacion-deglucion",
    title: "¿Qué es la disfagia y cómo la tratamos?",
    excerpt:
      "La disfagia —dificultad para tragar— puede afectar la nutrición, la hidratación y la calidad de vida. Conocé las causas más frecuentes y cómo funciona la rehabilitación de la deglución.",
    date: "2025-09-01",
    category: "Deglución",
  },
  {
    slug: "rehabilitacion-respiratoria",
    title: "Rehabilitación respiratoria: no solo para el post-COVID",
    excerpt:
      "EPOC, asma, fibrosis quística y secuelas post-cirugía torácica son solo algunas de las indicaciones. La kinesioterapia respiratoria mejora la función pulmonar y la calidad de vida a largo plazo.",
    date: "2025-09-15",
    category: "Respiratoria",
  },
  {
    slug: "fisioterapia-geriatrica-independencia",
    title: "Fisioterapia geriátrica: mantener la independencia",
    excerpt:
      "El miedo a caerse es uno de los factores que más limita la vida de los adultos mayores. El entrenamiento del equilibrio y la marcha puede reducir ese riesgo y preservar la autonomía funcional.",
    date: "2025-10-01",
    category: "Geriátrica",
  },
];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  const months = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
  ];
  return `${parseInt(day)} ${months[parseInt(month) - 1]}. ${year}`;
}

export default function BlogPage() {
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
            Blog
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Información sobre kinesiología, rehabilitación y salud del movimiento
            para pacientes y familias.
          </p>
        </div>
      </section>

      {/* ── ARTÍCULOS ── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-warm rounded-xl p-8 hover:border-teal hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-teal/10 text-teal font-medium">
                  {post.category}
                </span>
                <time className="text-xs text-muted">{formatDate(post.date)}</time>
              </div>
              <h2
                className="text-2xl font-light text-navy mb-3 leading-snug"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {post.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-teal text-sm font-medium cursor-default opacity-50">
                Próximamente
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
                </svg>
              </span>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-10 text-center">
          <p className="text-muted text-sm">
            Los artículos estarán disponibles próximamente. Mientras tanto,
            podés{" "}
            <Link href="/contacto" className="text-teal hover:text-teal-lt transition-colors">
              consultarnos directamente
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
