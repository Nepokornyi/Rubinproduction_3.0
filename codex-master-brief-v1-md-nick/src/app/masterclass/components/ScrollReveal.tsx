"use client";

import { useEffect } from "react";
import { prefersReducedMotion, subscribeToReducedMotion } from "@/lib/reducedMotion";

export function ScrollReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const waiting = [...document.querySelectorAll("[data-reveal]")].filter(
      (element) => element.getBoundingClientRect().top > window.innerHeight,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 },
    );
    for (const element of waiting) {
      element.classList.add("reveal-ready");
      observer.observe(element);
    }

    const unsubscribe = subscribeToReducedMotion(() => {
      if (!prefersReducedMotion()) return;
      for (const element of waiting) element.classList.add("is-visible");
      observer.disconnect();
    });

    return () => {
      unsubscribe();
      observer.disconnect();
      for (const element of waiting) element.classList.remove("reveal-ready", "is-visible");
    };
  }, []);

  return null;
}
