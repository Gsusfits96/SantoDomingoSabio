/**
 * Marco fotográfico editorial. Placeholder cálido con el escudo hasta que
 * el colegio entregue sus fotografías reales.
 */
export function PhotoSlot({
  caption,
  className = "",
  tall = false,
  fill = false,
}: {
  caption: string;
  className?: string;
  tall?: boolean;
  fill?: boolean;
}) {
  const sizing = fill ? "h-full w-full" : tall ? "aspect-[3/4]" : "aspect-[4/3]";
  return (
    <div className={`photo-frame photo-placeholder ${sizing} ${className}`}>
      <div className="absolute inset-0 grid place-items-center">
        <img src="/logo.svg" alt="" aria-hidden className="h-24 w-auto opacity-80" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/45 to-transparent p-4">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
          {caption}
        </span>
      </div>
    </div>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
