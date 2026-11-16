"use client";

import { heroMedia } from "@/content/settings";
import { Button } from "@/components/ui/Button";
import { CleanMedia } from "@/components/media/CleanMedia";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <link rel="preload" as="image" href={heroMedia.poster} media="(min-width:768px)" fetchPriority="high" />
      <link rel="preload" as="image" href={heroMedia.mobilePoster} media="(max-width:767px)" fetchPriority="high" />
      <div className="hero__media" aria-hidden="true">
        <CleanMedia {...heroMedia} priority sizes="100vw" />
      </div>
      <div className="hero__scrim" aria-hidden="true" />
      <div className="container hero__copy">
        <AnimatedHeadline as="h1" id="hero-title" lines={["Visual Content", "for Your", "Music Release"]} immediate fadeOnly />
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button className="hero__cta" href="#services">Explore the services</Button>
        </motion.div>
      </div>
    </section>
  );
}
