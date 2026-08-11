"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Consent = "accepted" | "rejected" | "custom" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored) setConsent(stored as Consent);
  }, []);

  function save(value: Consent) {
    localStorage.setItem("cookie-consent", value ?? "custom");
    if (value === "custom") {
      localStorage.setItem("cookie-analytics", String(analytics));
    }
    setConsent(value);
  }

  function acceptAll() {
    localStorage.setItem("cookie-analytics", "true");
    setConsent("accepted");
  }

  function rejectAll() {
    localStorage.setItem("cookie-analytics", "false");
    setConsent("rejected");
  }

  // No mostrar si ya dio consentimiento
  if (consent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-black/[0.08] bg-ivory/98 p-5 shadow-float backdrop-blur-lg sm:p-6">
          {!showCustomize ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              {/* Icono */}
              <div className="hidden shrink-0 sm:grid sm:h-11 sm:w-11 sm:place-items-center sm:rounded-full sm:bg-gold-100/80">
                <svg className="h-5 w-5 text-gold-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a7 7 0 0 1 7 7c0 6-7 13-7 13S5 15 5 9a7 7 0 0 1 7-7z" />
                  <circle cx="12" cy="9" r="2" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-medium text-ink">
                  Cookies y privacidad
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-graphite sm:text-sm">
                  Utilizamos cookies para mejorar tu experiencia, analizar el
                  tráfico de forma anónima y recordar tu idioma. Para más
                  información, consulta nuestro{" "}
                  <button
                    onClick={() => {
                      window.location.href = "/es/privacidad";
                    }}
                    className="font-medium text-verde-700 underline underline-offset-2 hover:text-verde-800"
                  >
                    Aviso de Privacidad
                  </button>
                  .
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
                <button
                  onClick={acceptAll}
                  className="rounded-full bg-verde-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-verde-700 sm:text-sm"
                >
                  Aceptar todas
                </button>
                <button
                  onClick={rejectAll}
                  className="rounded-full border border-black/[0.08] bg-paper px-5 py-2.5 text-[13px] font-medium text-graphite transition-all hover:-translate-y-0.5 hover:border-verde-600/30 sm:text-sm"
                >
                  Solo necesarias
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="text-[12px] font-medium text-stone underline underline-offset-2 hover:text-ink sm:text-sm"
                >
                  Configurar
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-serif text-lg font-medium text-ink">
                Configurar cookies
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-graphite sm:text-sm">
                Selecciona qué cookies permites. Las cookies necesarias siempre
                están activas.
              </p>

              <div className="mt-5 space-y-4">
                {/* Necesarias */}
                <div className="flex items-start gap-3 rounded-xl border border-black/[0.06] bg-paper/60 p-4">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded bg-verde-100">
                    <svg className="h-4 w-4 text-verde-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      Cookies necesarias
                    </div>
                    <p className="mt-0.5 text-[12px] text-graphite">
                      Esenciales para el funcionamiento del sitio: selector de
                      idioma y navegación básica.
                    </p>
                  </div>
                </div>

                {/* Analíticas */}
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-black/[0.06] bg-paper/60 p-4 transition-colors hover:border-verde-200/40">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-0.5 h-5 w-5 rounded border-stone/40 text-verde-600 focus:ring-verde-500"
                  />
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      Cookies de análisis
                    </div>
                    <p className="mt-0.5 text-[12px] text-graphite">
                      Nos ayudan a entender cómo se usa el sitio para mejorar la
                      experiencia. La IP es anonimizada.
                    </p>
                  </div>
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={() => save("custom")}
                  className="rounded-full bg-verde-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-verde-700"
                >
                  Guardar preferencias
                </button>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="rounded-full border border-black/[0.08] bg-paper px-5 py-2.5 text-[13px] font-medium text-graphite transition-all hover:-translate-y-0.5"
                >
                  Volver
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
