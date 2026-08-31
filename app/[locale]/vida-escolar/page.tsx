import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { Figure } from "@/components/Figure";
import { PhotoSlot } from "@/components/PhotoSlot";
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
          {shots.map((shot, i) => {
            const src = photos.gallery[i];
            return (
              <Reveal
                key={shot.caption}
                delay={0.04 * i}
                className={`${i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : ""}`}
              >
                {src ? (
                  <Figure src={src} caption={shot.caption} fill className="h-full" />
                ) : (
                  <PhotoSlot caption={shot.caption} fill className="h-full" />
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* BANDA ESCOLAR */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{t("band.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("band.title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-graphite">{t("band.intro")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 h-56 sm:h-72">
                <Figure
                  src={photos.band[0]}
                  caption={t("band.caption")}
                  fill
                  className="h-full"
                />
              </div>
              {photos.band.slice(1).map((src) => (
                <div key={src} className="h-40 sm:h-48">
                  <Figure src={src} fill className="h-full" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRADUACIONES */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t("graduaciones.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t("graduaciones.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{t("graduaciones.intro")}</p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[200px] md:grid-cols-4">
          {photos.graduaciones.map((src, i) => (
            <Reveal
              key={src}
              delay={0.04 * i}
              className={`${i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2" : ""}`}
            >
              <Figure
                src={src}
                caption={i === 0 ? t("graduaciones.caption") : undefined}
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
