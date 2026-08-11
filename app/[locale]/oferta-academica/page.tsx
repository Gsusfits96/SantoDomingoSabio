import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

type Area = { name: string; subjects: string[] };
type Level = {
  id: string;
  name: string;
  grades: string;
  hours?: string;
  meta?: string;
  description: string;
  tags: string[];
  areas: Area[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages" });
  return { title: t("academics") };
}

export default async function AcademicsPage() {
  const t = await getTranslations("Academics");
  const levels = t.raw("levels") as Level[];

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} intro={t("hero.intro")} />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t("explorer.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t("explorer.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{t("explorer.intro")}</p>
        </Reveal>

        <div className="mt-12">
          {levels.map((lvl) => (
            <Reveal key={lvl.id}>
              <article
                id={lvl.id}
                className="grid scroll-mt-28 gap-8 border-t border-stone/30 py-10 first:border-t-0 lg:grid-cols-[0.85fr_1.15fr]"
              >
                {/* Resumen del nivel */}
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">
                    {lvl.grades}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                    {lvl.name}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-graphite">
                    {lvl.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-verde-600 px-3 py-1 text-xs font-semibold text-white">
                      {lvl.hours ?? lvl.meta}
                    </span>
                    {lvl.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gold-300/60 bg-gold-50 px-3 py-1 text-xs font-medium text-gold-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Áreas y asignaturas */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {lvl.areas.map((area) => (
                    <div key={area.name}>
                      <h4 className="border-b border-stone/30 pb-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-graphite">
                        {area.name}
                      </h4>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {area.subjects.map((s) => (
                          <li
                            key={s}
                            className="rounded-lg border border-black/[0.07] bg-paper px-2.5 py-1.5 text-[13px] text-ink"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
