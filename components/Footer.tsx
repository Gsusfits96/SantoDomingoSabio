import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { navItems, site } from "@/lib/site";
import { Eyebrow } from "@/components/ui";

function IconPhone() {
  return (
    <svg className="h-4 w-4 text-verde-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg className="h-4 w-4 text-verde-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

export async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  return (
    <footer className="relative mt-px overflow-hidden bg-sand text-ink">
      {/* CTA Plataforma Académica */}
      <div className="relative border-b border-black/[0.08] bg-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(at 20% 30%, rgba(31,126,77,0.16), transparent 55%), radial-gradient(at 80% 30%, rgba(212,160,47,0.18), transparent 55%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
          <Eyebrow>{t("plataformaEyebrow")}</Eyebrow>
          <h2 className="max-w-2xl font-serif text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            {t("plataformaTitle")}
          </h2>
          <p className="max-w-xl text-lg text-graphite">{t("plataformaText")}</p>
          <Link
            href={site.academicaUrl}
            className="group mt-2 inline-flex items-center gap-2 rounded-full bg-verde-600 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-verde-700"
          >
            <span>{t("plataformaCta")}</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Columnas */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Escudo Santo Domingo Savio" className="h-12 w-auto object-contain" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-graphite">
            {t("tagline")}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{t("colNavTitle")}</h3>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-graphite transition-colors hover:text-verde-700"
                >
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{t("colContactTitle")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-graphite">
            <li className="flex items-start gap-2.5">
              <IconPin />
              <a href={site.mapUrl} target="_blank" rel="noreferrer" className="hover:text-verde-700">
                {site.location}
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2.5">
                <IconPhone />
                <a href={`tel:+507${phone.replace(/\D/g, "")}`} className="hover:text-verde-700">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram ${site.instagram}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/[0.1] text-ink transition-colors hover:border-verde-600/40 hover:text-verde-700"
            >
              <IconInstagram />
            </a>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/[0.1] text-ink transition-colors hover:border-verde-600/40 hover:text-verde-700"
            >
              <IconFacebook />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{t("colInfoTitle")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-graphite">
            <li>
              <Link href="/admisiones" className="hover:text-verde-700">
                {t("infoAdmision")}
              </Link>
            </li>
            <li>
              <Link href="/admisiones#tarifario" className="hover:text-verde-700">
                {t("infoTarifario")}
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-verde-700">
                {t("infoPrivacidad")}
              </Link>
            </li>
            <li>
              <Link href="/privacidad#menores" className="hover:text-verde-700">
                {t("infoMenores")}
              </Link>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-stone">{t("legal")}</p>
        </div>
      </div>

      <div className="border-t border-black/[0.08]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-stone sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("rights")}
          </p>
          <p>{t("madeIn")}</p>
        </div>
      </div>
    </footer>
  );
}
