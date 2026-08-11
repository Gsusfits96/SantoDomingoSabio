"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    retry: string;
    phoneOptional: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
  };
}

export function ContactForm({ labels }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors([]);
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: (data.get("name") as string)?.trim() ?? "",
      email: (data.get("email") as string)?.trim() ?? "",
      phone: (data.get("phone") as string)?.trim() ?? "",
      message: (data.get("message") as string)?.trim() ?? "",
    };

    // Validación rápida del lado cliente
    const clientErrors: string[] = [];
    if (body.name.length < 2)
      clientErrors.push("El nombre es obligatorio (mínimo 2 caracteres).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
      clientErrors.push("Ingresa un correo electrónico válido.");
    if (body.message.length < 10)
      clientErrors.push("El mensaje debe tener al menos 10 caracteres.");

    if (clientErrors.length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();

      if (!json.success) {
        setErrors(json.errors ?? ["Error desconocido."]);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrors(["No se pudo conectar con el servidor. Revisa tu conexión."]);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-verde-200/60 bg-verde-50/60 px-8 py-16 text-center"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-verde-100 text-verde-600">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
          {labels.successTitle}
        </h3>
        <p className="mt-2 max-w-sm text-graphite">{labels.successBody}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <AnimatePresence>
        {errors.length > 0 && status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-xl border border-coral-200/60 bg-coral-50/60 px-5 py-4"
          >
            <p className="text-sm font-semibold text-coral-500">{labels.errorTitle}</p>
            <ul className="mt-1.5 space-y-0.5">
              {errors.map((e) => (
                <li key={e} className="text-[13px] text-graphite">
                  {e}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => { setStatus("idle"); setErrors([]); }}
              className="mt-3 text-xs font-semibold text-coral-500 underline underline-offset-2 hover:text-coral-600"
            >
              {labels.retry}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
            {labels.name} <span className="text-coral-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            placeholder={labels.namePlaceholder}
            className="mt-1.5 w-full rounded-xl border border-black/[0.08] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-stone/60 transition-colors focus:border-verde-500/60 focus:outline-none focus:ring-2 focus:ring-verde-100"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
            {labels.email} <span className="text-coral-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder={labels.emailPlaceholder}
            className="mt-1.5 w-full rounded-xl border border-black/[0.08] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-stone/60 transition-colors focus:border-verde-500/60 focus:outline-none focus:ring-2 focus:ring-verde-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-ink">
          {labels.phone}{" "}
          <span className="text-xs text-stone">({labels.phoneOptional})</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder={labels.phonePlaceholder}
          className="mt-1.5 w-full rounded-xl border border-black/[0.08] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-stone/60 transition-colors focus:border-verde-500/60 focus:outline-none focus:ring-2 focus:ring-verde-100"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
          {labels.message} <span className="text-coral-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder={labels.messagePlaceholder}
          className="mt-1.5 w-full resize-y rounded-xl border border-black/[0.08] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-stone/60 transition-colors focus:border-verde-500/60 focus:outline-none focus:ring-2 focus:ring-verde-100"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center gap-2.5 rounded-full bg-verde-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-verde-700 hover:shadow-float disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
            </svg>
            {labels.sending}
          </>
        ) : (
          <>
            {labels.send}
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
