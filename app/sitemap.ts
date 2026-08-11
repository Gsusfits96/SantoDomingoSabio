import type { MetadataRoute } from "next";

const BASE = "https://santodomingosavio.edu.pa";
const locales = ["es", "en"];
const paths = ["/", "/nosotros", "/oferta-academica", "/vida-escolar", "/admisiones", "/contacto", "/privacidad"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.flatMap((loc) =>
    paths.map((p) => {
      const suffix = p === "/" ? "" : p;
      return {
        url: `${BASE}/${loc}${suffix}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: p === "/" ? 1 : 0.8,
        alternates: {
          languages: {
            es: `${BASE}/es${suffix}`,
            en: `${BASE}/en${suffix}`,
          },
        },
      };
    })
  );
}
