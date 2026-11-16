"use client";
import { useEffect } from "react";

// Progressive enhancement: content stays readable if JS or motion is unavailable.
export function MotionDirector() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("motion-entered");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    const looping = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle("motion-on-screen", entry.isIntersecting)), {threshold: 0});
    const elements: HTMLElement[] = [];
    const register = (selector: string, kind: string, stagger = false) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        element.dataset.motion = kind;
        element.style.setProperty("--reveal-delay", `${stagger ? (index % 3) * 180 : selector.includes("service-description") ? 240 : 0}ms`);
        elements.push(element); observer.observe(element);
      });
    };
    register(".services-intro-section", "unfold");
    register(".service-description,.service-price", "fade");
    register(".service-note", "caption");
    register(".ribbon-tags span", "fade", true);
    register(".service-process li", "step", true);
    register(".campaign-comparison", "unfold");
    register(".campaign-included-note", "fade");
    register(".campaign-deliverable-copy", "slide");
    register(".campaign-deliverable-media", "fade");
    document.querySelectorAll(".hero__cta,.floating-mystery,.service-enquiry,.mystery-order,.campaign-included-note,.mystery-introduction,.mystery-price,.contact-introduction,.service-process").forEach(el=>looping.observe(el));
    const visibility = () => document.documentElement.classList.toggle("motion-paused", document.hidden);
    document.addEventListener("visibilitychange", visibility);
    const disable = () => { if(preference.matches) elements.forEach(el=>el.classList.add("motion-entered")); };
    preference.addEventListener("change",disable);
    return () => {
      observer.disconnect();looping.disconnect();document.removeEventListener("visibilitychange",visibility);preference.removeEventListener("change",disable);
      document.documentElement.classList.remove("motion-paused");
      elements.forEach(el=>{delete el.dataset.motion;el.classList.remove("motion-entered");});
    };
  }, []);
  return null;
}
