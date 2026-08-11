---
name: project-aesthetic-warm-educational
description: Site art direction is "Editorial Escolar — Prestige & Warmth", NOT tech/SaaS
metadata:
  type: feedback
---

The user repeatedly rejected a "tech / SaaS / Liquid Glass" look for the Escuela Bilingüe Santo Domingo Savio site and asked for a warm, prestigious, human, Catholic-Salesian school feel. The final, current art direction is **"Editorial Escolar — Prestige & Warmth"**.

**Concrete rules (apply to every page):**
- **Typography:** Serif **Fraunces** for all headlines/titles (warm, prestigious, editorial) + Plus Jakarta Sans for body/UI. Use `font-serif` (defined via `--font-serif` token in `app/globals.css`).
- **Palette:** ivory/cream warm backgrounds (`--color-ivory`, `--color-cream`, `--color-sand`), emerald verde + celeste, and **gold from the escudo** (`--color-gold-*`) as the signature warm accent. No cold gray, no dark glass, no neon gradients.
- **NO dashboard/SaaS components:** no "Bento Grids", no rigid feature cards with heavy shadows, no app-style buttons with shine/sweep, no software-UI vibes. Use editorial layouts: magazine spreads, full-bleed photo frames, columns separated by hairlines, generous breathing space.
- **Photography is the narrative thread** (children learning, teachers, faith, sports, graduation). Until the school provides real photos, use elegant warm placeholder frames (`.photo-frame.photo-placeholder` + escudo watermark + caption) clearly labeled for replacement. The escudo SVG (`public/logo.svg`, also `app/icon.svg`) is the hero's institutional image.
- **Human micro-copy & details:** warm badges ("Una extensión del hogar", "Nuestra comunidad desde 1987"), gold underlines (`.gold-underline`) under key Mission words (amor, paz, justicia social), family storytelling ("Aquí no inscribimos estudiantes, matriculamos familias").
- Header is warm "paper" (ivory + soft blur), not techy glass; buttons are solid verde, not gradient-with-shine.

This supersedes any earlier "Apple / Liquid Clean" framing in the original brief. See [[site-bilingual-and-content-rules]] (ES/EN, no emoji, no dashes).
