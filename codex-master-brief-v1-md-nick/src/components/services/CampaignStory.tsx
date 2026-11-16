"use client";
import { motion, useReducedMotion } from "framer-motion";
const comparison = [
  ["Find and brief separate photographers, filmmakers and creators.", "One creative team listens to your music and brings several concepts in a short presentation."],
  ["Develop the entire idea yourself and explain it to everyone.", "We discuss the ideas on a call and build the direction you approve."],
  ["Coordinate people, locations and several production dates.", "Choose one convenient date. We organise the crew, equipment, locations and schedule."],
  ["Hope the photos, videos and live content feel like one release.", "A music video, original reels, photography and live content — created together on one shoot day."],
  ["Chase separate deliveries and hope every deadline holds.", "One team manages the edit, graphics, VFX and final formats against agreed delivery dates."],
  ["Pay repeated production costs and spend release time organising.", "Shared production resources, BTS captured throughout the day and more time to focus on your music."],
];
export function CampaignStory() {
  const reduced = useReducedMotion();
  return <div className="campaign-story">
    <div className="campaign-comparison campaign-comparison--lists">
      {[0,1].map(column=><div key={column} className={`comparison-column ${column ? "campaign-answer" : ""}`}>
        <p className="eyebrow">{column ? "The Rubin Production way" : "The usual way"}</p>
        <h4>{column ? <>Your music.<br/>We handle the picture.</> : <>Your release.<br/>Six more jobs.</>}</h4>
        <motion.ul initial={reduced ? false : "hidden"} whileInView="visible" viewport={{once:true,amount:.15}} variants={{hidden:{},visible:{transition:{staggerChildren:.24}}}}>
          {comparison.map((pair)=><motion.li key={pair[0]} variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0}}} transition={{duration:.55}}>
            <span className="comparison-mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{column ? <path d="m3 8 3 3 7-7"/> : <path d="m4 4 8 8m0-8-8 8"/>}</svg></span><p>{pair[column]}</p>
          </motion.li>)}
        </motion.ul>
      </div>)}
    </div>
    <div className="campaign-included-note"><p className="eyebrow">All the essentials. Included.</p><p>Pre-production, crew, equipment, filming, photography and full post-production — including all agreed content and delivery formats. Standard studios and locations are covered. Special locations, custom sets and unusual rentals are quoted separately and agreed in advance.</p><p className="campaign-ferrari">Want a Ferrari in the shot? We don’t have one. Yet. But we’ll find you one.</p></div>
  </div>;
}
