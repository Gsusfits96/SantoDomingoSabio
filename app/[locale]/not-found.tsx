import { Link } from "@/i18n/navigation";
import { Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden bg-warm-wash px-6 pb-20 pt-32 text-center">
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-xl">
        <div className="flex justify-center">
          <img src="/logo.svg" alt="Escudo Santo Domingo Savio" className="h-20 w-auto opacity-90" />
        </div>
        <p className="mt-8 font-serif text-7xl font-semibold text-verde-600">404</p>
        <div className="mt-5 flex justify-center">
          <Eyebrow>Página no encontrada · Page not found</Eyebrow>
        </div>
        <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Ups, esta página no existe.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-graphite">
          La página que buscas no está disponible. Volvamos a un lugar conocido.
        </p>
        <div className="mt-7 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-verde-600 px-6 py-3 text-[15px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-verde-700"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
