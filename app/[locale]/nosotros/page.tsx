import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { Figure } from "@/components/Figure";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

type TItem = { year: string; title: string; text: string };
type Pillar = { n: string; t: string; d: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages" });
  return { title: t("about") };
}

export default async function AboutPage() {
  const t = await getTranslations("About");
  const pillars = t.raw("model.pillars") as Pillar[];
  const items = t.raw("timeline.items") as TItem[];

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} intro={t("hero.intro")} />

      {/* MISIÓN */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{t("mission.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("mission.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              {t.rich("mission.body", {
                gold: (c) => <span className="gold-underline">{c}</span>,
              })}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:translate-y-6">
            <Figure src={photos.aboutMission} caption={t("mission.eyebrow")} />
          </Reveal>
        </div>
      </section>

      {/* VISIÓN */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1} className="order-2 lg:order-1 lg:-translate-y-6">
            <Figure src={photos.aboutVision} caption={t("vision.eyebrow")} />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <Eyebrow>{t("vision.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("vision.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              {t.rich("vision.body", {
                gold: (c) => <span className="gold-underline">{c}</span>,
              })}
            </p>
          </Reveal>
        </div>
      </section>

      {/* MODELO PREVENTIVO */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t("model.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t("model.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{t("model.intro")}</p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {pillars.map((p) => (
            <Reveal key={p.n}>
              <div className="border-t border-stone/30 pt-5">
                <div className="font-serif text-2xl font-semibold text-gold-500">{p.n}</div>
                <h3 className="mt-2 font-serif text-2xl font-medium text-ink">{p.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-graphite">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Eyebrow>{t("director.eyebrow")}</Eyebrow>
            <p className="mt-6 font-serif text-3xl font-medium italic leading-snug text-verde-700 sm:text-4xl">
              &ldquo;{t("director.quote")}&rdquo;
            </p>
            <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">{t("director.title")}</h3>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-graphite">
              {t("director.body")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* LÍNEA DE TIEMPO */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t("timeline.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t("timeline.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{t("timeline.intro")}</p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute bottom-3 left-[31px] top-3 w-px bg-gradient-to-b from-gold-300 via-verde-300 to-celeste-300" />
          {items.map((it) => (
            <Reveal key={it.year}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                <div className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-gold-300 bg-ivory text-center font-serif text-[13px] font-semibold leading-tight text-verde-600">
                  {it.year}
                </div>
                <div className="pt-1">
                  <h3 className="font-serif text-xl font-medium text-ink">{it.title}</h3>
                  <p className="mt-1 leading-relaxed text-graphite">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <span className="sr-only">{site.name}</span>
    </>
  );
}
