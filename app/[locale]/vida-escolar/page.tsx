import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { Figure } from "@/components/Figure";
import { photos } from "@/lib/photos";

type Shot = { caption: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages" });
  return { title: t("schoolLife") };
}

export default async function SchoolLifePage() {
  const t = await getTranslations("SchoolLife");
  const shots = t.raw("gallery.items") as Shot[];

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} intro={t("hero.intro")} />

      {/* GALERÍA tipo mosaico editorial */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t("gallery.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t("gallery.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{t("gallery.intro")}</p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[200px] md:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.caption}
              delay={0.04 * i}
              className={`${i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : ""}`}
            >
              <Figure
                src={photos.gallery[i] ?? photos.gallery[0]}
                caption={shot.caption}
                fill
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO / recorrido */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>{t("video.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("video.title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-graphite">{t("video.intro")}</p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="aspect-video overflow-hidden rounded-2xl shadow-photo">
              <Figure src={photos.video} caption={t("video.caption")} fill className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
