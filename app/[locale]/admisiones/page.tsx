import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { Accordion } from "@/components/Accordion";

type Step = { step: string; title: string; description: string; details: string[] };
type Row = {
  nivel: string;
  inscripcion: string;
  mantenimiento: string;
  total: string;
  mensualidad: string;
  nota?: string;
};
type Gasto = { item: string; monto: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pages" });
  return { title: t("admissions") };
}

export default async function AdmissionsPage() {
  const t = await getTranslations("Admissions");
  const steps = t.raw("wizard.steps") as Step[];
  const rows = t.raw("pricing.rows") as Row[];
  const gastos = t.raw("pricing.gastos") as Gasto[];
  const faqs = t.raw("faq.items") as { q: string; a: string }[];

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} intro={t("hero.intro")} />

      {/* PROCESO */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t("wizard.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t("wizard.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{t("wizard.intro")}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Reveal key={s.step}>
              <div className="flex h-full flex-col border-t-2 border-gold-300 pt-5">
                <div className="font-serif text-3xl font-semibold text-verde-600">{s.step}</div>
                <h3 className="mt-2 font-serif text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-graphite">
                  {s.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2 text-[13.5px] text-graphite">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TARIFARIO */}
      <section id="tarifario" className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>{t("pricing.eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("pricing.title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-graphite">{t("pricing.intro")}</p>
          </Reveal>

          <Reveal className="mt-10">
            <div className="overflow-x-auto rounded-2xl border border-black/[0.08] bg-paper shadow-soft">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-black/[0.08] bg-sand/60">
                    <th className="px-5 py-4 font-serif text-sm font-semibold text-ink">
                      {t("pricing.nivel")}
                    </th>
                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-graphite">
                      {t("pricing.inscripcion")}
                    </th>
                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-graphite">
                      {t("pricing.mantenimiento")}
                    </th>
                    <th className="bg-verde-50 px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-verde-700">
                      {t("pricing.total")}
                    </th>
                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-graphite">
                      {t("pricing.mensualidad")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.nivel} className="border-b border-black/[0.06] last:border-0">
                      <td className="px-5 py-4">
                        <div className="font-medium text-ink">{r.nivel}</div>
                        {r.nota && (
                          <div className="mt-0.5 text-[11px] leading-snug text-stone">{r.nota}</div>
                        )}
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-graphite">
                        {r.inscripcion}
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-graphite">
                        {r.mantenimiento}
                      </td>
                      <td className="bg-verde-50/60 px-5 py-4 text-right font-serif text-base font-semibold tabular-nums text-verde-700">
                        {r.total}
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums text-ink">
                        {r.mensualidad}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Gastos fijos */}
          <Reveal className="mt-10">
            <h3 className="font-serif text-xl font-medium text-ink">
              {t("pricing.gastosTitle")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {gastos.map((g) => (
                <span
                  key={g.item}
                  className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-paper px-4 py-2 text-sm text-ink"
                >
                  <span className="text-graphite">{g.item}</span>
                  <span className="font-semibold text-verde-700">{g.monto}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Reveal>
          <Eyebrow>{t("faq.eyebrow")}</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {t("faq.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{t("faq.intro")}</p>
        </Reveal>
        <Reveal className="mt-10">
          <Accordion items={faqs} />
        </Reveal>
      </section>
    </>
  );
}
