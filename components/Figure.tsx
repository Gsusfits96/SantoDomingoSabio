import type { ReactNode } from "react";

/**
 * Fotografía editorial con tratamiento duotono cálido (verde/dorado).
 * Usa imágenes temporales (Lorem Picsum) a reemplazar por las fotos reales
 * del colegio. El duotono unifica cualquier foto con la paleta institucional.
 */
export function Figure({
  src,
  caption,
  className = "",
  tall = false,
  fill = false,
  children,
}: {
  src: string;
  caption?: string;
  className?: string;
  tall?: boolean;
  fill?: boolean;
  children?: ReactNode;
}) {
  const sizing = fill ? "h-full w-full" : tall ? "aspect-[3/4]" : "aspect-[4/3]";
  return (
    <figure
      className={`group photo-frame relative overflow-hidden ${sizing} ${className}`}
    >
      <img
        src={src}
        alt={caption ?? ""}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      {/* Duotono cálido institucional */}
      <div className="pointer-events-none absolute inset-0 bg-verde-900/35 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-verde-900/30 via-transparent to-gold-400/30 mix-blend-soft-light" />
      {children}
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/55 to-transparent p-4">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
            {caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

/** Genera una URL de foto temporal determinista a partir de una semilla. */
export function stockPhoto(seed: string, w = 900, h = 675) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}
