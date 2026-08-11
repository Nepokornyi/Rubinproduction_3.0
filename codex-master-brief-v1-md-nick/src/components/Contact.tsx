"use client";

import { settings } from "@/content/settings";
import { Button } from "@/components/ui/Button";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { motion, useReducedMotion } from "framer-motion";

export function Contact() {
  const reducedMotion = useReducedMotion();
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <motion.p className="eyebrow" initial={reducedMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}>Start a project</motion.p>
        <AnimatedHeadline as="h2" id="contact-title" lines={["Thanks", "for", "watching"]} />
        <motion.div
          className="contact-side"
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-copy">
            <p>If you still have questions, are not sure what you need, or want to discuss your project personally, send me a message on Instagram and let&apos;s talk.</p>
            <p>If you want to see more work—or you are ready to work together—I&apos;ll be waiting for you there.</p>
          </div>
          <Button href={settings.instagramUrl} target="_blank" rel="noreferrer">Message me on Instagram</Button>
          <a className="instagram-handle" href={settings.instagramUrl} target="_blank" rel="noreferrer">{settings.instagramHandle}</a>
        </motion.div>
      </div>
    </section>
  );
}
