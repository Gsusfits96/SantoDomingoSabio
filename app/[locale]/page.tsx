import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Eyebrow, GlowButton } from "@/components/ui";
import { ArrowIcon } from "@/components/PhotoSlot";
import { Figure } from "@/components/Figure";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

type Pillar = { n: string; title: string; text: string };
type Step = { age: string; title: string; text: string; caption: string };
type HistoryItem = { year: string; title: string; text: string };
type Testimonial = { quote: string; name: string; role: string };

export default async function HomePage() {
  const t = await getTranslations("Home");

  const pillars = t.raw("mission.pillars") as Pillar[];
  const steps = t.raw("journey.steps") as Step[];
  const historyItems = t.raw("history.items") as HistoryItem[];
  const testimonials = t.raw("testimonials.items") as Testimonial[];
  const accreditations = t.raw("accreditations.items") as string[];

  return (
    <>
      <Hero />

      {/* CINTA DE PRESTIGIO */}
      <section className="border-y border-black/[0.06] bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-5 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-stone sm:gap-x-8">
          {accreditations.map((a, i) => (
            <span key={a} className="flex items-center gap-6 sm:gap-8">
              {i > 0 && <span className="hidden h-1.5 w-1.5 rounded-full bg-gold-400 sm:block" />}
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* INTRO editorial */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{t("intro.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("intro.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              {t.rich("intro.body", {
                gold: (chunks) => <span className="gold-underline">{chunks}</span>,
              })}
            </p>
            <div className="mt-7">
              <GlowButton href="/nosotros" variant="secondary">
                {t("history.cta")}
                <ArrowIcon />
              </GlowButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:translate-y-6">
            <Figure src={photos.homeIntro} caption={t("intro.caption")} className="rotate-[1.5deg]" />
            <div className="mx-auto mt-3 h-px max-w-xs hairline-gold" />
          </Reveal>
        </div>
      </section>

      {/* MISIÓN con subrayados dorados + pilares editoriales */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow>{t("mission.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("mission.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              {t.rich("mission.body", {
                gold: (chunks) => <span className="gold-underline">{chunks}</span>,
              })}
            </p>
          </Reveal>

          <RevealStagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.n} className="border-t border-stone/30 pt-5">
                <div className="font-serif text-2xl font-semibold text-gold-500">{p.n}</div>
                <h3 className="mt-2 font-serif text-xl font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-graphite">{p.text}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* VIAJE — storytelling vertical con fotografía protagonista */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t("journey.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t("journey.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{t("journey.intro")}</p>
        </Reveal>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {steps.map((s, i) => (
            <Reveal key={s.age} delay={0.05}>
              <Link
                href="/oferta-academica"
                className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Figure src={photos.journey[i] ?? photos.homeIntro} caption={s.caption} />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">
                    {s.age}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-graphite">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-verde-700">
                    {site.shortName}
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>{t("testimonials.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("testimonials.title")}
            </h2>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((tm) => (
              <figure
                key={tm.name}
                className="flex h-full flex-col rounded-2xl border border-black/[0.07] bg-paper p-7 shadow-soft"
              >
                <svg className="h-8 w-8 text-gold-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7z" />
                </svg>
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-ink">
                  &ldquo;{tm.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-verde-600 font-serif text-lg font-semibold text-white">
                    {tm.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-semibold text-ink">{tm.name}</div>
                    <div className="text-xs text-graphite">{tm.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* HISTORIA teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>{t("history.eyebrow")}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("history.titleA")}{" "}
              <span className="italic text-verde-600">{t("history.titleHi")}</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-graphite">
              {t("history.text", { students: site.students, director: site.director })}
            </p>
            <div className="mt-7">
              <GlowButton href="/nosotros">
                {t("history.cta")}
                <ArrowIcon />
              </GlowButton>
            </div>
          </Reveal>

          <RevealStagger className="relative space-y-2.5">
            {historyItems.map((h) => (
              <div
                key={h.year}
                className="flex items-start gap-5 border-l-2 border-gold-300/60 py-1 pl-5"
              >
                <div className="font-serif text-2xl font-semibold tabular-nums text-verde-600">
                  {h.year}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-ink">{h.title}</h3>
                  <p className="mt-0.5 text-[13.5px] leading-relaxed text-graphite">{h.text}</p>
                </div>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
