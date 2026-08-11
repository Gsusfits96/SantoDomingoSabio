"use client";

import { useEffect } from "react";
import { Link } from "@/i18n/navigation";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Error]", error);
  }, [error]);

  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-warm-wash px-6 pb-20 pt-32 text-center">
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-coral-200/25 blur-3xl" />
      <div className="relative mx-auto max-w-xl">
        <div className="flex justify-center">
          <img
            src="/logo.svg"
            alt="Escudo Santo Domingo Savio"
            className="h-20 w-auto opacity-90"
          />
        </div>
        <div className="mt-8 flex items-baseline justify-center gap-3">
          <span className="font-serif text-5xl font-semibold text-verde-600 sm:text-6xl">
            500
          </span>
        </div>
        <h1 className="mt-5 font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Algo salió mal
        </h1>
        <p className="mx-auto mt-3 max-w-md text-graphite">
          Ocurrió un error inesperado. Por favor, intenta de nuevo. Si el
          problema persiste, contáctanos.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-verde-600 px-6 py-3 text-[15px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-verde-700"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 4 23 10 17 10" />
              <path d="M1 20v-2a4 4 0 014-4h14" />
            </svg>
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-paper px-6 py-3 text-[15px] font-semibold text-ink shadow-soft transition-all hover:-translate-y-0.5"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
