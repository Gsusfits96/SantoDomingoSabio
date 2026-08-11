---
name: site-bilingual-and-content-rules
description: Site must be bilingual ES/EN (next-intl route-based) and contain no emojis or dashes
metadata:
  type: feedback
---

For the Escuela Bilingüe Santo Domingo Savio website the user requires:

1. **Bilingual Spanish and English.** Implemented with `next-intl` v4 (route-based, `localePrefix: "always"`), locales `es` (default) and `en`, URLs `/es` and `/en`. All user-visible copy lives in `messages/es.json` and `messages/en.json`; components read via `useTranslations` (client) / `getTranslations` (server). A language switcher lives in the header. Navigation uses `@/i18n/navigation` (`Link`, `usePathname`, `useRouter`) so links keep the locale. App structure is `app/[locale]/...`.

2. **No emojis anywhere** in content.

3. **No dashes** of any kind (`-`, `–`, `—`) in visible text. Concretely: compounds are joined ("Preescolar", "Premedia", "Prekínder", "Socioafectiva"); ranges use "a" or "to" ("10° a 12°", "Grades 10 to 12"); phone numbers use a space ("293 7879"); title separators use a period, not an em dash.

**Why:** The user explicitly asked for both, mid-build.

**How to apply:** When adding any page or string, add it to both `messages/es.json` and `messages/en.json`, dash-free and emoji-free, and route through the i18n helpers. See [[project-aesthetic-warm-educational]] for the matching visual direction.
