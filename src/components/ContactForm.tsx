"use client";

import { useState } from "react";

// Replace FORMSPREE_ID with actual form ID from formspree.io after registering
const FORMSPREE_URL = "https://formspree.io/f/FORMSPREE_ID";

const MOTIVOS = [
  "Quiero pedir un turno",
  "Tengo una consulta sobre un servicio",
  "Quiero información sobre obras sociales",
  "Otro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-teal">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <p className="text-navy font-medium mb-1">¡Mensaje enviado!</p>
        <p className="text-muted text-sm">Te contactaremos a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-navy tracking-wide uppercase">
            Nombre y apellido *
          </label>
          <input
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre completo"
            className="border border-warm rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-teal transition-colors bg-cream"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-navy tracking-wide uppercase">
            Teléfono / WhatsApp *
          </label>
          <input
            name="telefono"
            type="tel"
            required
            placeholder="+54 379 ..."
            className="border border-warm rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-teal transition-colors bg-cream"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-navy tracking-wide uppercase">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="tu@email.com"
          className="border border-warm rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-teal transition-colors bg-cream"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-navy tracking-wide uppercase">
          Motivo de contacto *
        </label>
        <select
          name="motivo"
          required
          defaultValue=""
          className="border border-warm rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-teal transition-colors bg-cream"
        >
          <option value="" disabled>Seleccioná una opción</option>
          {MOTIVOS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-navy tracking-wide uppercase">
          Obra social / Prepaga
        </label>
        <input
          name="obra_social"
          type="text"
          placeholder="Ej: IOSCOR, OSDE, particular..."
          className="border border-warm rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-teal transition-colors bg-cream"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-navy tracking-wide uppercase">
          Mensaje *
        </label>
        <textarea
          name="mensaje"
          required
          rows={4}
          placeholder="Contanos brevemente tu consulta o el motivo del turno..."
          className="border border-warm rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-teal transition-colors bg-cream resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Hubo un error al enviar. Por favor intentá de nuevo o contactanos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-teal hover:bg-teal-lt disabled:opacity-60 text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm self-start"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
