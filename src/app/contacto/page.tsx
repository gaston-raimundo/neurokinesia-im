import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Turnos · Kinesiólogo en Corrientes",
  description:
    "Pedí turno con tu kinesiólogo en Corrientes. Neurokinesia IM · Quintana 1465, Corrientes · +54 379 425-8022 · contacto@neurokinesiaim.com.ar",
};

const CONTACT_INFO = [
  {
    label: "WhatsApp / Teléfono",
    lines: ["+54 379 425-8022 (María)", "+54 379 460-8244 (Isabel)"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-teal">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.847L0 24l6.305-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.042-1.383l-.361-.214-3.742.893.924-3.638-.235-.374A9.863 9.863 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.466 0 9.882 4.415 9.882 9.882 0 5.466-4.416 9.882-9.882 9.882z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    lines: ["contacto@neurokinesiaim.com.ar"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-teal">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "Dirección",
    lines: ["Quintana 1465", "Corrientes, Argentina"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-teal">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    lines: ["@neurokinesiaim"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-teal">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

export default function ContactoPage() {
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
            Contacto
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Escribinos para pedir un turno, resolver una duda o consultar sobre
            tu caso. Respondemos a la brevedad.
          </p>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-warm rounded-xl p-8">
              <h2
                className="text-2xl font-light text-navy mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Envianos un mensaje
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Datos de contacto + mapa */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white border border-warm rounded-xl p-8">
              <h2
                className="text-2xl font-light text-navy mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Datos de contacto
              </h2>
              <div className="flex flex-col gap-5">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs font-semibold text-navy tracking-wide uppercase mb-1">
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm text-muted">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa embebido */}
            <div className="rounded-xl overflow-hidden border border-warm">
              <iframe
                title="Ubicación Neurokinesia IM"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.3!2d-58.8341!3d-27.4806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sQuintana+1465%2C+Corrientes!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
