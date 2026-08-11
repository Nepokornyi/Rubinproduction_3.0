"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BeforeAfterCarousel } from "@/components/services/BeforeAfterCarousel";
import { CampaignGallery } from "@/components/services/CampaignGallery";
import { CountUpPrice } from "@/components/ui/CountUpPrice";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import type { ServiceOffer } from "@/types/content";

export function ServiceShowcase({ service }: { service: ServiceOffer }) {
  const reducedMotion = useReducedMotion();
  const titleLines = service.name === "Performance Snippet" ? ["Performance", "Snippet"] : [service.name];
  return (
    <article className="service-showcase" id={service.id}>
      <header className="service-showcase__header">
        <motion.span
          className="service-number"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {service.number}
        </motion.span>
        <div className="service-title-wrap">
          <AnimatedHeadline as="h3" lines={titleLines} />
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {service.description}
          </motion.p>
        </div>
        <motion.div
          className="service-commerce"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <CountUpPrice price={service.price} />
          {service.note ? <p className="service-note">{service.note}</p> : null}
        </motion.div>
      </header>
      {service.presentation === "before-after" && service.beforeAfterSlides ? <BeforeAfterCarousel slides={service.beforeAfterSlides} label={service.name} /> : null}
      {service.presentation === "campaign" && service.campaignSlides ? <CampaignGallery slides={service.campaignSlides} /> : null}
    </article>
  );
}
