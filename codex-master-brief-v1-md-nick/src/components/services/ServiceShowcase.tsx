"use client";

import { BeforeAfterCarousel } from "@/components/services/BeforeAfterCarousel";
import { CampaignGallery } from "@/components/services/CampaignGallery";
import { ServiceWorkGrid } from "@/components/services/ServiceWorkGrid";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import type { ServiceOffer } from "@/types/content";
import { motion, useReducedMotion } from "framer-motion";
import { MysteryVisual } from "./MysteryVisual";
import { CampaignStory } from "./CampaignStory";

export function ServiceShowcase({ service }: { service: ServiceOffer }) {
  const reduced = useReducedMotion();
  const titleLines = service.titleLines ?? [service.name];
  const mystery = service.id === "mystery-box";
  const campaign = service.id === "campaign";
  const cta = mystery ? "Order Mystery Box" : campaign ? "Order a campaign" : service.id === "your-footage-our-edit" ? "Order a snippet" : "Order a music video";
  return (
    <article className={`service-showcase${mystery ? " service-showcase--mystery" : ""}`} id={service.id}>
      {!mystery && <header className="service-showcase__header service-header-aligned">
        <span className="service-number">{service.number}</span>
        <div className="service-title-wrap"><AnimatedHeadline as="h3" lines={titleLines} /></div>
        <p className="service-price">{service.price}</p>
        <p className="service-description">{service.description}</p>
        {service.note && <p className="service-note">{service.note}</p>}
      </header>}
      {mystery && <>
        <MysteryVisual introduction={<>
          <span className="service-number">{service.number} / A creative surprise</span>
          <div className="service-title-wrap">
            <AnimatedHeadline as="h3" lines={["Mystery Box"]} fadeOnly />
            <p>{service.description}</p>
            <p className="mystery-legal">{service.note}</p>
          </div>
        </>} />
      </>}
      {campaign && <CampaignStory />}
      {service.included ? <div className="campaign-inclusions">
        <p className="eyebrow">One connected release</p>
        <motion.ul initial={reduced ? false : "hidden"} whileInView="visible" viewport={{once:true,amount:.25}} variants={{hidden:{},visible:{transition:{staggerChildren:.2}}}}>{service.included.map(item => <motion.li variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0}}} transition={{duration:.5}} key={item}>{item}</motion.li>)}</motion.ul>
      </div> : null}
      {service.presentation === "work-grid" && service.workSamples ? <ServiceWorkGrid items={service.workSamples} label={service.name} /> : null}
      {service.presentation === "before-after" && service.beforeAfterSlides ? (
        <BeforeAfterCarousel
          slides={service.beforeAfterSlides}
          label={service.name}
          comparisonLabels={service.comparisonLabels}
        />
      ) : null}
      {service.presentation === "campaign" && service.campaignSlides ? <CampaignGallery slides={service.campaignSlides} /> : null}
      {service.process ? <ol className="service-process" aria-label={`${service.name}: how it works`}>
        {service.process.map((step, index) => <li key={step.title}>
          <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
          <h4>{step.title}</h4><p>{step.description}</p>
        </li>)}
      </ol> : null}
      {!mystery && <a className="service-enquiry" href="#contact" onClick={() => window.dispatchEvent(new CustomEvent("select-service", { detail: service.id }))}>{cta} <span aria-hidden="true">↗</span></a>}
    </article>
  );
}
