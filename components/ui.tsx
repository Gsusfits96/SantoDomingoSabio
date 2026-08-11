import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

/* ---------- Etiqueta editorial con filete dorado ---------- */
export function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] ${
        dark ? "text-gold-300" : "text-gold-600"
      } ${className}`}
    >
      <span className={`h-px w-7 ${dark ? "bg-gold-400/70" : "bg-gold-400"}`} />
      {children}
    </span>
  );
}

/* ---------- Encabezado de sección (serif) ---------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-serif text-[2rem] font-medium leading-[1.08] tracking-tight sm:text-[2.75rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-graphite"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------- Botón editorial (sin estética de app) ---------- */
export function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold tracking-tight transition-all duration-300";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${base} bg-verde-600 text-white shadow-soft hover:bg-verde-700 hover:-translate-y-0.5 hover:shadow-float ${className}`}
      >
        {children}
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`${base} border border-verde-600/25 bg-paper/70 text-verde-700 backdrop-blur hover:border-verde-600/50 hover:bg-verde-50 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={`${base} text-graphite hover:text-ink ${className}`}>
      {children}
    </Link>
  );
}

/* ---------- Estadística editorial ---------- */
export function Stat({
  value,
  label,
  className = "",
}: {
  value: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="font-serif text-4xl font-semibold text-verde-600 sm:text-5xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-graphite">{label}</div>
    </div>
  );
}
