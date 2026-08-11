import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, GlowButton } from "@/components/ui";
import { ArrowIcon } from "@/components/PhotoSlot";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages" });
  return { title: t("contact") };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} intro={t("hero.intro")} />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Información */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {t("addressLabel")}
                </h3>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block font-serif text-2xl font-medium text-ink transition-colors hover:text-verde-700"
                >
                  {site.location}
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {t("phonesLabel")}
                </h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  {site.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+507${phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-paper px-5 py-2.5 font-serif text-lg font-medium text-ink transition-colors hover:border-verde-600/40 hover:text-verde-700"
                    >
                      <svg className="h-4 w-4 text-verde-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {t("scheduleLabel")}
                </h3>
                <p className="mt-2 text-lg text-graphite">{t("scheduleValue")}</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {t("socialLabel")}
                </h3>
                <div className="mt-3 flex gap-3">
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Instagram ${site.instagram}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-black/[0.08] bg-paper text-ink transition-colors hover:border-verde-600/40 hover:text-verde-700"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a
                    href={site.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="grid h-11 w-11 place-items-center rounded-full border border-black/[0.08] bg-paper text-ink transition-colors hover:border-verde-600/40 hover:text-verde-700"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-black/[0.08] shadow-photo">
              <iframe
                title="Mapa Santo Domingo Savio"
                src={site.mapEmbed}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <Eyebrow>{t("form.eyebrow")}</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
                {t("form.title")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-graphite">
                {t("form.intro")}
              </p>
              <div className="mt-8 space-y-4 text-sm text-graphite">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-verde-100 text-xs font-bold text-verde-700">
                    1
                  </span>
                  <span>{t("form.step1")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-verde-100 text-xs font-bold text-verde-700">
                    2
                  </span>
                  <span>{t("form.step2")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-verde-100 text-xs font-bold text-verde-700">
                    3
                  </span>
                  <span>{t("form.step3")}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-black/[0.08] bg-paper p-6 shadow-soft sm:p-8">
                <ContactForm
                  labels={{
                    name: t("form.fields.name"),
                    email: t("form.fields.email"),
                    phone: t("form.fields.phone"),
                    message: t("form.fields.message"),
                    send: t("form.fields.send"),
                    sending: t("form.fields.sending"),
                    successTitle: t("form.successTitle"),
                    successBody: t("form.successBody"),
                    errorTitle: t("form.errorTitle"),
                    errorBody: t("form.errorBody"),
                    retry: t("form.retry"),
                    phoneOptional: t("form.fields.phoneOptional"),
                    namePlaceholder: t("form.fields.namePlaceholder"),
                    emailPlaceholder: t("form.fields.emailPlaceholder"),
                    phonePlaceholder: t("form.fields.phonePlaceholder"),
                    messagePlaceholder: t("form.fields.messagePlaceholder"),
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium leading-snug text-ink sm:text-4xl">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-graphite">{t("ctaText")}</p>
            <div className="mt-7 flex justify-center">
              <GlowButton href="/admisiones">
                {t("ctaButton")}
                <ArrowIcon />
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
