"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CleanMedia } from "@/components/media/CleanMedia";
import { CarouselControls } from "@/components/services/CarouselControls";
import type { BeforeAfterSlide } from "@/types/content";

const AUTO_ADVANCE_MS = 3500;

export function BeforeAfterCarousel({ slides, label }: { slides: BeforeAfterSlide[]; label: string }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [beforeReady, setBeforeReady] = useState(false);
  const [afterReady, setAfterReady] = useState(false);
  const beforeRef = useRef<HTMLVideoElement>(null);
  const afterRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const pairReady = beforeReady && afterReady;
  const slide = slides[current];

  const select = (index: number) => {
    setBeforeReady(false);
    setAfterReady(false);
    setCurrent((index + slides.length) % slides.length);
  };
  const previous = () => select(current - 1);
  const next = () => select(current + 1);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setBeforeReady(false);
      setAfterReady(false);
      setCurrent((value) => (value + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, slides.length]);

  useEffect(() => {
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!pairReady || !before || !after) return;

    before.pause();
    after.pause();
    before.currentTime = 0;
    after.currentTime = 0;

    if (reducedMotion) return;
    const start = () => {
      void Promise.allSettled([before.play(), after.play()]);
    };
    const frame = window.requestAnimationFrame(start);
    const synchronizer = window.setInterval(() => {
      if (before.paused || after.paused) return;
      const drift = Math.abs(before.currentTime - after.currentTime);
      if (drift > 0.1) after.currentTime = before.currentTime;
    }, 250);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(synchronizer);
    };
  }, [current, pairReady, reducedMotion]);

  return (
    <div
      className="before-after-carousel"
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
          <motion.div key={slide.id} className="before-after-slide" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: reducedMotion ? 0 : 0.24 }}>
            <div className="comparison-item">
              <p>Before</p>
              <CleanMedia ref={beforeRef} {...slide.before} active controlledPlayback revealVideo={pairReady} onVideoReadyChange={setBeforeReady} sizes="(max-width: 767px) 100vw, 50vw" />
            </div>
            <div className="comparison-item">
              <p>After</p>
              <CleanMedia ref={afterRef} {...slide.after} active controlledPlayback revealVideo={pairReady} onVideoReadyChange={setAfterReady} sizes="(max-width: 767px) 100vw, 50vw" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <CarouselControls current={current} total={slides.length} label={label} onPrevious={previous} onNext={next} onSelect={select} emphasizeNext />
    </div>
  );
}
