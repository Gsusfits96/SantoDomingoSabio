import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return { title: t("hero.title") };
}

type Section = { title: string; content: string[] };

export default async function PrivacyPage() {
  const t = await getTranslations("Privacy");
  const sections = t.raw("sections") as Section[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        intro={t("hero.intro")}
      />

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        {/* Última actualización */}
        <Reveal>
          <p className="mb-12 text-sm text-stone">
            {t("lastUpdated")}: {t("effectiveDate")}
          </p>
        </Reveal>

        <div className="prose-custom space-y-14">
          {sections.map((section, i) => (
            <Reveal key={i}>
              <section id={section.title.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
                  {section.title}
                </h2>
                {section.content.map((paragraph, j) => (
                  <p
                    key={j}
                    className="mt-4 leading-relaxed text-graphite"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            </Reveal>
          ))}

          {/* Contacto dentro de la política */}
          <Reveal>
            <section
              id="contacto"
              className="rounded-2xl border border-black/[0.08] bg-cream p-6 sm:p-8"
            >
              <h2 className="font-serif text-xl font-medium text-ink">
                {t("contactTitle")}
              </h2>
              <p className="mt-3 leading-relaxed text-graphite">
                {t("contactBody", {
                  name: site.name,
                  location: site.location,
                  phones: site.phones.join(" / "),
                })}
              </p>
            </section>
          </Reveal>
        </div>
      </section>
    </>
  );
}
