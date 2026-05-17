"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/",          label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo",    label: "Equipo" },
  { href: "/blog",      label: "Blog" },
  { href: "/contacto",  label: "Contacto" },
];

const WA_URL =
  "https://wa.me/5493794258022?text=Hola%2C%20quisiera%20pedir%20un%20turno.";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-warm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="font-display text-xl font-semibold tracking-tight text-navy"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Neuro<em className="not-italic text-teal">kinesia IM</em>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-muted hover:text-navy transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-teal hover:bg-teal-lt text-white text-base font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Pedí turno
          </a>
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Nav mobile */}
      {open && (
        <div className="md:hidden border-t border-warm bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-navy"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-teal text-white text-base font-medium px-4 py-2 rounded-lg"
          >
            Pedí turno
          </a>
        </div>
      )}
    </header>
  );
}
