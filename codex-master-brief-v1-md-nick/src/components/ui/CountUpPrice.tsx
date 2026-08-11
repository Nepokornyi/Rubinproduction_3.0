"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function CountUpPrice({ price }: { price: string }) {
  const match = useMemo(() => price.match(/^(.*?)€(\d+)(.*)$/), [price]);
  const target = match ? Number(match[2]) : 0;
  const [value, setValue] = useState(target ? 1 : 0);
  const rootRef = useRef<HTMLParagraphElement>(null);
  const hasRun = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !match || hasRun.current) return;

    let animationFrame = 0;
    const run = () => {
      if (hasRun.current) return;
      hasRun.current = true;
      if (reducedMotion) {
        setValue(target);
        return;
      }
      const startedAt = performance.now();
      const duration = 3000;
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.max(1, Math.round(target * eased)));
        if (progress < 1) animationFrame = window.requestAnimationFrame(tick);
      };
      animationFrame = window.requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(root);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [match, reducedMotion, target]);

  if (!match) return <p ref={rootRef} className="service-price">{price}</p>;

  return (
    <p ref={rootRef} className="service-price" aria-label={price}>
      <span aria-hidden="true">{match[1]}€{value}{match[3]}</span>
    </p>
  );
}
