"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Item = { q: string; a: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-black/[0.08]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-black/[0.08]">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg font-medium text-ink sm:text-xl">
                {it.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                  isOpen
                    ? "border-verde-600 bg-verde-600 text-white"
                    : "border-black/10 text-graphite"
                }`}
              >
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-lg leading-none">
                  +
                </motion.span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-5 pr-10 leading-relaxed text-graphite">
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
