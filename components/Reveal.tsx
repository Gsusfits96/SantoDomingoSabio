"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  delay = 0,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={item}>{children}</motion.div>}
    </motion.div>
  );
}

/**
 * Texto que se ilumina palabra por palabra al hacer scroll.
 * Las palabras en `highlight` se muestran con degradado verde→celeste.
 */
export function RevealWords({
  text,
  highlight = [],
  className,
  as: Tag = "p",
}: {
  text: string;
  highlight?: string[];
  className?: string;
  as?: React.ElementType;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((word, i) => {
        const clean = word.replace(/[.,]/g, "").toLowerCase();
        const isHi = highlight.some((h) => h.toLowerCase() === clean);
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className={`inline-block ${isHi ? "text-gradient font-semibold" : ""}`}
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.035, ease: EASE }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
