import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-warm-wash pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-200/25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-graphite">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
