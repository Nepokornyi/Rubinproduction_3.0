"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { MysteryParticles } from "./MysteryParticles";

export function MysteryVisual({ introduction }: { introduction?: ReactNode }) {
  return <div className="mystery-experience">
    {introduction && <header className="mystery-introduction">{introduction}</header>}
    <div className="mystery-chest" role="img" aria-label="Animated Mystery Box">
      <Image className="mystery-chest__art" src="/assets/mystery-box/03-voxel.webp" alt="Black and red pixel-built treasure chest with glowing, hidden contents" width={1000} height={1000} sizes="(max-width: 700px) 90vw, 600px" />
      <MysteryParticles />
      <span className="mystery-chest__hint">Your music. Our imagination.</span>
    </div>
    <div className="mystery-offer">
      {!introduction && <p className="eyebrow">A small price. An open mind.</p>}
      <p className="mystery-price"><strong>€100</strong><span>for one box</span></p>
      <p id="mystery-reveal" className="mystery-reveal" aria-live="polite">The idea stays a mystery. The price doesn’t.</p>
      <div className="mystery-facts"><span>15+ seconds</span><span>5 working days</span><span>100% creative freedom</span></div>
      <a href="#contact" className="button button--primary mystery-order" onClick={() => window.dispatchEvent(new CustomEvent("select-service", { detail: "mystery-box" }))}>Order Mystery Box <span aria-hidden="true">✧</span></a>
    </div>
  </div>;
}
