import Link from "next/link";

const navLinks = [
  { href: "/",          label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo",    label: "Equipo" },
  { href: "/blog",      label: "Blog" },
  { href: "/contacto",  label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Marca */}
        <div>
          <p
            className="text-2xl font-semibold text-white mb-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Neuro<em className="not-italic text-teal-lt">kinesia IM</em>
          </p>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
            Kinesiología · Terapia · Rehabilitación
          </p>
          <a
            href="https://www.instagram.com/neurokinesiaim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-teal-lt transition-colors"
          >
            @neurokinesiaim
          </a>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Contacto</p>
          <a href="tel:+5437942580223" className="hover:text-teal-lt transition-colors">
            +54 379 425-8022
          </a>
          <a href="tel:+5437946082443" className="hover:text-teal-lt transition-colors">
            +54 379 460-8244
          </a>
          <a href="mailto:contacto@neurokinesiaim.com.ar" className="hover:text-teal-lt transition-colors">
            contacto@neurokinesiaim.com.ar
          </a>
          <span>Quintana 1465, Corrientes</span>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-2">Secciones</p>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-teal-lt transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/30">
        © {new Date().getFullYear()} Neurokinesia IM — Todos los derechos reservados
      </div>
    </footer>
  );
}
