---
name: photos-convention
description: All site photos are centralized in lib/photos.ts; currently temp (Picsum), to swap for real /public/photos/ files
metadata:
  type: project
---

Every photo on the site is referenced through **`lib/photos.ts`** (a single map: `homeIntro`, `journey[]`, `aboutMission`, `aboutVision`, `gallery[]`, `video`). They render via the `Figure` component (`components/Figure.tsx`), which applies a warm green/gold duotone and uses `picsum.photos` URLs as **temporary** fill so the site looks complete.

The school is providing real photos. To swap them in, replace each entry in `lib/photos.ts` with a local path under `/public/photos/` (e.g. `homeIntro: "/photos/inicio.jpg"`). Suggested filenames already match the slots: `inicio.jpg`, `prekinder.jpg`, `primaria.jpg`, `premedia.jpg`, `bachillerato.jpg`, `mision.jpg`, `vision.jpg`, `galeria-1.jpg` … `galeria-6.jpg`, `video.jpg`.

Related: [[project-aesthetic-warm-educational]] (editorial duotone treatment).
