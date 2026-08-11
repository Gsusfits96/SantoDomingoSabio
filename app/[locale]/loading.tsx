export default function Loading() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-warm-wash px-6 pb-20 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-200/25 blur-3xl" />
      <div className="relative mx-auto text-center">
        {/* Escudo */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center">
          <img
            src="/logo.svg"
            alt=""
            aria-hidden
            className="h-20 w-auto animate-pulse opacity-60"
          />
        </div>

        {/* Indicador de carga editorial */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-verde-600" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 animate-pulse rounded-full bg-verde-600" style={{ animationDelay: "150ms" }} />
          <span className="h-2 w-2 animate-pulse rounded-full bg-verde-600" style={{ animationDelay: "300ms" }} />
        </div>

        <p className="mt-5 font-serif text-lg italic text-graphite">
          Cargando...
        </p>
      </div>
    </section>
  );
}
