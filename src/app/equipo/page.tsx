import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kinesiólogos en Corrientes — El Equipo",
  description:
    "Kinesiólogas en Corrientes especializadas en neuro kinesiología y rehabilitación. Método Bobath, Therasuit, Perfetti y RPG Tres Escuadras. María del Mar Flores e Isabel Leonora Aranda.",
};

const WA_URL =
  "https://wa.me/5493794258022?text=Hola%2C%20quisiera%20pedir%20un%20turno.";

const TEAM = [
  {
    name: "María del Mar Flores",
    initials: "MF",
    title: "Lic. en Kinesiología y Fisiatría",
    bio: "Especializada en rehabilitación neurológica, motora y respiratoria, con formación en Método Perfetti y Reeducación Postural Global (Método Tres Escuadras). Orientada al abordaje integral del paciente, con evaluación funcional estandarizada y planificación de objetivos terapéuticos medibles.",
    specialties: [
      "Rehabilitación Neurológica",
      "Rehabilitación Motora",
      "RPG — Reeducación Postural Global",
      "Kinesiología Convencional",
      "Rehabilitación de la Deglución",
    ],
    phone: "+54 379 425-8022",
    waLink: "https://wa.me/5493794258022",
  },
  {
    name: "Isabel Leonora Aranda",
    initials: "IA",
    title: "Lic. en Kinesiología y Fisiatría",
    bio: "Especializada en rehabilitación neurológica y motora, con formación en Método Bobath, Therasuit y kinesioterapia respiratoria. Trabaja en coordinación con pediatras, neuropediatras, fonoaudiólogos y nutricionistas según cada caso.",
    specialties: [
      "Rehabilitación Pediátrica",
      "Rehabilitación Respiratoria",
      "Kinesiotaping",
      "Rehabilitación de la Deglución",
    ],
    phone: "+54 379 460-8244",
    waLink: "https://wa.me/5493794608244",
  },
];

export default function EquipoPage() {
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
            El{" "}
            <em className="text-teal-lt not-italic">equipo</em>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Profesionales comprometidas con la recuperación de cada paciente,
            con formación continua y atención personalizada.
          </p>
        </div>
      </section>

      {/* ── PROFESIONALES ── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-warm rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8"
            >
              {/* Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center">
                  <span
                    className="text-3xl text-teal-lt font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.initials}
                  </span>
                </div>
                <a
                  href={member.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal hover:text-teal-lt transition-colors font-medium"
                >
                  {member.phone}
                </a>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <h2
                    className="text-3xl font-light text-navy"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.name}
                  </h2>
                  <p className="text-xs text-muted tracking-widest uppercase mt-1">
                    {member.title}
                  </p>
                </div>

                <p className="text-muted text-base leading-relaxed">{member.bio}</p>

                <div>
                  <p className="text-xs text-navy font-semibold tracking-wide uppercase mb-2">
                    Áreas de especialización
                  </p>
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SER SALUD ── */}
      <section className="py-12 px-6 bg-white border-t border-warm">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center text-teal flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <p className="text-base font-semibold text-navy mb-1">
              Cooperación con Ser Salud<sup>®</sup>
            </p>
            <p className="text-base text-muted leading-relaxed">
              Trabajamos en cooperación con Ser Salud®, integrando recursos y
              especialidades para una atención más completa y coordinada cuando
              el caso lo requiere.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-cream border-t border-warm">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-3xl md:text-4xl font-light text-navy mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            ¿Querés conocer más?
          </p>
          <p className="text-muted mb-8 leading-relaxed">
            Escribinos por WhatsApp y te orientamos sobre el profesional y el
            tratamiento más adecuado para tu caso.
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
              Pedí tu turno
            </a>
            <Link
              href="/servicios"
              className="border border-warm hover:border-teal text-navy font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
