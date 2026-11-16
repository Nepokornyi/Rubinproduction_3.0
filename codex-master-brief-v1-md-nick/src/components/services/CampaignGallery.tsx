"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useInView } from "framer-motion";
import { VideoPlayer } from "./VideoPlayer";
import { CleanMedia } from "@/components/media/CleanMedia";
import type { CampaignSlide } from "@/types/content";

const AUTO_ADVANCE_MS = 6500;

export function CampaignGallery({ slides }: { slides: CampaignSlide[] }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<{x:number;y:number} | null>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { amount: .1 });
  const reducedMotion = useReducedMotion();
  const slide = slides[current];
  const [photoPages, setPhotoPages] = useState<Record<string, number>>({});
  const photoPage = photoPages[slide.id] ?? 0;
  const photos = slide.photos ?? slide.tiles.filter(t => t.slot === "square-left-top" || t.slot === "square-left-bottom");
  const reels = slide.reels ?? slide.tiles.filter(t => t.slot === "portrait-center" || t.slot === "portrait-right");
  const bts = slide.bts ?? slide.tiles.find(t => t.slot === "square-right-top")!;
  const playerItems = [slide.tiles[0], ...reels, bts].filter(item => item.videoSrc);
  const turnPhotos = (direction: number) => setPhotoPages(pages => ({...pages, [slide.id]: ((pages[slide.id] ?? 0) + direction + Math.ceil(photos.length / 2)) % Math.ceil(photos.length / 2)}));
  useEffect(() => {
    if (paused || !visible || !inView || selected !== null || reducedMotion || photos.length <= 2) return;
    const timer = window.setInterval(() => setPhotoPages(pages => ({...pages, [slide.id]: ((pages[slide.id] ?? 0) + 1) % Math.ceil(photos.length / 2)})), 3500);
    return () => window.clearInterval(timer);
  }, [paused, visible, inView, selected, reducedMotion, photos.length, slide.id]);
  const select = (index: number) => setCurrent((index + slides.length) % slides.length);
  const previous = () => select(current - 1);
  const next = () => select(current + 1);

  useEffect(() => {
    if (paused || !visible || !inView || selected !== null || reducedMotion || slides.length < 2) return;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [paused, visible, inView, selected, reducedMotion, slides.length]);
  useEffect(() => { const handler = () => setVisible(!document.hidden); document.addEventListener("visibilitychange",handler); return () => document.removeEventListener("visibilitychange",handler); }, []);

  return (
    <div
      className="campaign-carousel"
      ref={root}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}

    >
      <h4 className="campaign-section-title">Visual Consistency</h4>
      <div className="campaign-switcher" aria-label="Choose campaign">{slides.map((item,index) => <button key={item.id} type="button" aria-pressed={current === index} onClick={() => select(index)}>{String(index+1).padStart(2,"0")} / {item.id === "campaign-dominika" ? "Lyric · Soft · Poetry" : "Hip-Hop · Dynamic · Hard"}</button>)}</div>
      <div className="carousel-tease"
      onTouchStart={(event) => setTouchStart({x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY})}
      onTouchEnd={(event) => {
        if (touchStart === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.x;
        if (Math.abs(distance) > 50 && Math.abs(distance) > Math.abs(event.changedTouches[0].clientY - touchStart.y)) {
          if (distance > 0) previous(); else next();
        }
        setTouchStart(null);
      }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={slide.id} className="campaign-grid" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: reducedMotion ? 0 : 0.24 }}>
            {slide.tiles.map((tile) => (
              <CleanMedia
                key={tile.id}
                {...tile}
                videoSrc={tile.previewSrc ?? tile.videoSrc}
                active={inView && visible && selected === null}
                unoptimized
                className={`campaign-tile campaign-tile--${tile.shape} campaign-slot--${tile.slot}`}
                sizes="(max-width: 767px) 50vw, 32vw"
              />
            ))}
            <button className="campaign-film-trigger campaign-slot--landscape" type="button" aria-label={`Watch campaign ${current+1} film`} onClick={()=>setSelected(0)}><span className="service-work__play" aria-hidden="true">▶</span></button>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="campaign-consistency-copy">Your photos and videos are created to complement each other. The same sets, outfits and creative direction connect every piece — so your release looks and feels like one complete campaign.</p>
      <div className="campaign-deliverables">
        {[
          ["01", "Original vertical reels", "Social media vertical content.", "Original short-form videos filmed specifically for your social channels during the same production day. We use the same setting, lighting and creative direction to shoot additional reels with their own ideas and moments — separate visuals, not just resized clips from your music video.", "portrait-center"],
          ["02", "Photography & artwork", "Professional photo shoot.", "We set aside dedicated time during your production day for a professional photo shoot. Working with a photographer, professional cameras and lighting, we create high-quality still visuals for your release: cover artwork, profile pictures, Spotify imagery, press materials and social content. These images can also become the starting point for animated Canvas visuals.", "square-left-top"],
          ["03", "BTS, live & artist Q&A", "Real moments. Authentic content.", "Behind-the-scenes photos and videos captured throughout the day, live moments and artist Q&A. Give your audience the story behind the release, the people behind the scenes and a closer connection to you.", "square-right-top"],
        ].map(([number,title,headline,copy]) => <div className="campaign-deliverable-row" key={title}>
          <div className="campaign-deliverable-copy"><span className="eyebrow">{number} / {title}</span><h4>{headline}</h4><p>{copy}</p></div>
          <div className={`campaign-deliverable-media campaign-media--${number}`}>
            <div className={number === "01" ? "reel-placeholder-pair" : number === "02" ? "photo-placeholder-pair" : "bts-placeholder"}>
              {(number === "01" ? reels : number === "02" ? [photos[(photoPage * 2) % photos.length], photos[(photoPage * 2 + 1) % photos.length]] : [bts]).map((item,index) => <div className="campaign-deliverables__image" key={`${slide.id}-${item.id}`}>
                <CleanMedia {...item} videoSrc={item.previewSrc ?? item.videoSrc} active={visible && selected === null} className="campaign-deliverable-asset" sizes="(max-width:767px) 45vw, 25vw" unoptimized />
                {item.videoSrc && <button className="campaign-media-play" type="button" aria-label={`Watch ${item.alt}`} onClick={() => setSelected(playerItems.findIndex(video => video.id === item.id))}><span className="service-work__play" aria-hidden="true">▶</span></button>}
                {number === "01" && <span className="placeholder-format">REEL {index+1} · 9:16</span>}
                {number === "03" && <span className="placeholder-format">BTS / Q&A</span>}
              </div>)}
            </div>
            {number === "02" && photos.length > 2 ? <div className="campaign-photo-controls"><button type="button" onClick={() => turnPhotos(-1)} aria-label="Previous campaign photos">←</button><span className="eyebrow">{photoPage * 2 + 1}–{Math.min(photoPage * 2 + 2, photos.length)} / {photos.length}</span><button type="button" onClick={() => turnPhotos(1)} aria-label="Next campaign photos">→</button></div> : <span className="eyebrow">{number === "01" ? "Original vertical content" : number === "02" ? "Campaign photography" : "Behind the scenes"}</span>}
          </div>
        </div>)}
      </div>
      <VideoPlayer items={playerItems} selected={selected} onSelect={setSelected} onClose={()=>setSelected(null)} label="Campaign" />
    </div>
  );
}
