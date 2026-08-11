"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, site } from "@/lib/site";
import { routing } from "@/i18n/routing";

function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const change = (next: string) => {
    if (next === locale) return;
    router.replace(pathname, { locale: next as "es" | "en" });
  };

  return (
    <div className="flex items-center rounded-full border border-black/[0.06] bg-white/60 p-0.5 backdrop-blur">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => change(l)}
          className={`relative rounded-full px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide transition-colors ${
            l === locale ? "text-white" : "text-graphite hover:text-ink"
          }`}
          aria-pressed={l === locale}
        >
          {l === locale && (
            <motion.span
              layoutId="localePill"
              className="absolute inset-0 rounded-full bg-verde-600"
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
            />
          )}
          <span className="relative z-10">{l}</span>
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-5">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`flex w-full max-w-5xl items-center gap-1 rounded-full py-2 pl-3 pr-2 transition-all duration-500 ${
          scrolled
            ? "border border-black/[0.06] bg-ivory/85 shadow-float backdrop-blur-md"
            : "border border-black/[0.05] bg-ivory/55 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-full pl-1 pr-2"
          aria-label={site.name}
        >
          <img
            src="/logo.svg"
            alt="Escudo Santo Domingo Savio"
            className="h-9 w-auto shrink-0 object-contain"
          />
          <span className="hidden text-[15px] font-semibold tracking-tight text-ink sm:block">
            Santo Domingo Savio
          </span>
        </Link>

        {/* Nav desktop */}
        <ul
          className="mx-1 hidden items-center gap-0.5 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setHovered(item.href)}
              >
                <Link
                  href={item.href}
                  className={`relative z-10 rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                    active ? "text-ink" : "text-graphite hover:text-ink"
                  }`}
                >
                  {t(item.key)}
                </Link>
                {active && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 -z-0 rounded-full bg-white shadow-soft ring-1 ring-black/[0.06]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {!active && hovered === item.href && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 -z-0 rounded-full bg-white/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA + idioma + toggle */}
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block">
            <LocaleSwitcher />
          </div>
          <Link
            href={site.academicaUrl}
            className="group hidden items-center gap-1.5 rounded-full bg-verde-600 px-4 py-2 text-[13px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-verde-700 md:inline-flex"
          >
            <span>{t("plataforma")}</span>
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/[0.06] bg-white/70 backdrop-blur lg:hidden"
            aria-label="Menú"
            aria-expanded={open}
          >
            <div className="relative h-4 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 h-0.5 w-5 rounded bg-ink"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="absolute left-0 top-[7px] h-0.5 w-5 rounded bg-ink"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-[14px] h-0.5 w-5 rounded bg-ink"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-3 top-[72px] z-40 lg:hidden"
          >
            <div className="glass rounded-3xl p-3 shadow-float">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-verde-50 text-verde-700"
                          : "text-ink hover:bg-sand"
                      }`}
                    >
                      {t(item.key)}
                      <svg
                        className="h-4 w-4 opacity-40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl bg-sand/70 px-4 py-3">
                <Link
                  href={site.academicaUrl}
                  className="flex items-center gap-2 text-sm font-semibold text-verde-700"
                >
                  {t("plataforma")}
                </Link>
                <LocaleSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
