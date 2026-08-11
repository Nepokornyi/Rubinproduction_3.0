"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CleanMedia } from "@/components/media/CleanMedia";
import { CarouselControls } from "@/components/services/CarouselControls";
import type { CampaignSlide } from "@/types/content";

const AUTO_ADVANCE_MS = 4200;

export function CampaignGallery({ slides }: { slides: CampaignSlide[] }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const slide = slides[current];
  const select = (index: number) => setCurrent((index + slides.length) % slides.length);
  const previous = () => select(current - 1);
  const next = () => select(current + 1);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, slides.length]);

  return (
    <div
      className="campaign-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart === null) return;
        const distance = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(distance) > 50) {
          if (distance > 0) previous(); else next();
        }
        setTouchStart(null);
      }}
    >
      <div className="carousel-tease">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={slide.id} className="campaign-grid" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: reducedMotion ? 0 : 0.24 }}>
            {slide.tiles.map((tile) => (
              <CleanMedia
                key={tile.id}
                {...tile}
                active
                unoptimized
                className={`campaign-tile campaign-tile--${tile.shape} campaign-slot--${tile.slot}`}
                sizes="(max-width: 767px) 50vw, 32vw"
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <CarouselControls current={current} total={slides.length} label="Campaign" onPrevious={previous} onNext={next} onSelect={select} emphasizeNext />
    </div>
  );
}
