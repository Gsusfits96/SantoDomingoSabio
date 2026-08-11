"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { GlowButton } from "@/components/ui";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

type Stat = { value: string; label: string };

export function Hero() {
  const t = useTranslations("Home.hero");
  const stats = t.raw("stats") as Stat[];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-warm-wash">
      {/* Halo cálido detrás del escudo */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[12%] h-40 w-40 rounded-full bg-verde-300/30 blur-3xl animate-float" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-4xl px-6 pb-20 pt-32 text-center sm:pt-36"
      >
        {/* Escudo institucional protagonista */}
        <motion.div variants={item} className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-white/40 blur-xl" />
            <img
              src="/logo.svg"
              alt="Escudo de la Escuela Bilingüe Santo Domingo Savio"
              className="h-28 w-auto drop-shadow-[0_12px_30px_rgba(60,40,20,0.25)] sm:h-36"
            />
          </div>
        </motion.div>

        {/* Insignia */}
        <motion.div variants={item} className="mt-7 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-white/60 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-600 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Titular editorial en serif */}
        <motion.h1
          variants={item}
          className="mx-auto mt-6 max-w-3xl font-serif text-[2.6rem] font-medium leading-[1.06] tracking-tight text-ink sm:text-6xl"
        >
          {t("titleTop")}{" "}
          <span className="gold-underline italic">{t("titleHighlight")}</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <GlowButton href="/nosotros">{t("primaryCta")}</GlowButton>
          <GlowButton href="/oferta-academica" variant="secondary">
            {t("secondaryCta")}
          </GlowButton>
        </motion.div>

        {/* Estadísticas con divisores editoriales */}
        <motion.div
          variants={item}
          className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              {i > 0 && <span className="hidden h-9 w-px bg-stone/30 sm:block" />}
              <div className="text-center">
                <div className="font-serif text-3xl font-semibold text-verde-600 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs text-graphite">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
