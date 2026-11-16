"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Typewriter } from "@/components/ui/Typewriter";
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
      {intro ? <Typewriter text={intro} /> : null}
    </header>
  );
}
