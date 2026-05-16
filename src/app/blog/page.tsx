import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos educativos sobre kinesiología y rehabilitación.",
};

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl text-navy mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
        Blog
      </h1>
      <p className="text-muted">Página en construcción.</p>
    </section>
  );
}
