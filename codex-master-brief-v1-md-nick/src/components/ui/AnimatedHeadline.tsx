"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimatedHeadlineProps = {
  as: "h1" | "h2" | "h3";
  lines: string[];
  id?: string;
  immediate?: boolean;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.14,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "58%",
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AnimatedHeadline({ as, lines, id, immediate = false }: AnimatedHeadlineProps) {
  const reducedMotion = useReducedMotion();
  const MotionHeading = as === "h1" ? motion.h1 : as === "h2" ? motion.h2 : motion.h3;
  const label = lines.join(" ");

  return (
    <MotionHeading
      id={id}
      aria-label={label}
      variants={containerVariants}
      initial={reducedMotion ? false : "hidden"}
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={{ once: true, amount: 0.45 }}
    >
      {lines.map((line) => (
        <span className="animated-headline__mask" aria-hidden="true" key={line}>
          <motion.span className="animated-headline__line" variants={lineVariants}>
            {line}
          </motion.span>
        </span>
      ))}
    </MotionHeading>
  );
}
