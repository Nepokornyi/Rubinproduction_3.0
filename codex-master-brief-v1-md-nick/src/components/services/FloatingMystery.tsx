"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MysteryParticles } from "./MysteryParticles";
export function FloatingMystery() {
  const [visible,setVisible] = useState(false);
  useEffect(() => {
    const update = () => {
      const box = document.getElementById("mystery-box");
      setVisible(!!box && box.getBoundingClientRect().top > window.innerHeight * .8);
    };
    // Let the initial hidden frame paint before fading in on arrival.
    const intro = window.setTimeout(update, 250);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.clearTimeout(intro);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <a className={`floating-mystery${visible ? " floating-mystery--visible" : ""}`} aria-hidden={!visible} tabIndex={visible ? 0 : -1} href="#mystery-box" aria-label="Explore Mystery Box for €100"><Image className="floating-mystery__chest" src="/assets/mystery-box/03-voxel.webp" alt="" width={180} height={180} sizes="180px" priority /><span className="floating-mystery__particles" aria-hidden="true"><MysteryParticles compact /></span></a>;
}
