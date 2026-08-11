"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";

export function SectionHeading({ eyebrow, title, lines, intro, id }: { eyebrow: string; title: string; lines?: string[]; intro?: string; id?: string }) {
  const reducedMotion = useReducedMotion();
  return (
    <header className="section-heading">
      <motion.p
        className="eyebrow"
        initial={reducedMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {eyebrow}
      </motion.p>
      <AnimatedHeadline as="h2" id={id} lines={lines ?? [title]} />
      {intro ? (
        <motion.p
          className="section-intro"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {intro}
        </motion.p>
      ) : null}
    </header>
  );
}
