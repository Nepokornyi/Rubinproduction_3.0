"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { prefersReducedMotion, subscribeToReducedMotion } from "@/lib/reducedMotion";

const serverPrefersReducedMotion = () => false;

function useBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [controlVisibility, setControlVisibility] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, prefersReducedMotion, serverPrefersReducedMotion);
  const isControlVisible = controlVisibility ?? reducedMotion;

  useEffect(() => {
    if (prefersReducedMotion()) return;
    videoRef.current?.play().catch(() => setControlVisibility(true));
  }, []);

  const videoEvents = {
    onPlaying: () => {
      setHasStarted(true);
      setIsPlaying(true);
      setControlVisibility(true);
    },
    onPause: () => setIsPlaying(false),
    onError: () => {
      setHasStarted(false);
      setControlVisibility(false);
    },
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setControlVisibility(false));
    else video.pause();
  };

  return { videoRef, videoEvents, hasStarted, isPlaying, isControlVisible, togglePlayback };
}

export function Hero() {
  const { videoRef, videoEvents, hasStarted, isPlaying, isControlVisible, togglePlayback } = useBackgroundVideo();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-fallback">
          <Image className="hero-poster" src="/assets/masterclass/hero-poster.jpg" alt="" width={1280} height={716} sizes="100vw" preload />
        </div>
        <video ref={videoRef} className={hasStarted ? "hero-video is-playing" : "hero-video"} src="/assets/masterclass/hero.mp4" muted loop playsInline preload="none" aria-hidden="true" {...videoEvents} />
      </div>
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow"><span className="dot" /> NICK RUBIN × KAIBER</p>
        <h1 id="hero-title">YOU’VE SEEN<br />THE VISUALS.<br /><em>LET’S MAKE<br />YOUR OWN.</em></h1>
        <div className="hero-intro">
          <p><strong>Hey, I’m Nick.</strong> I create music videos by combining real footage, editing, and AI. If you’re here because you want to understand how it all comes together, you’re in the right place.</p>
          <p>I’ll show you where to start, share some practical techniques, and help you explore what you could make with your own ideas.</p>
        </div>
        <div className="actions">
          <a className="btn btn-primary" href="#learn"><span>Watch the free tutorial</span><span className="arrow">↘</span></a>
          <a className="btn btn-secondary" href="#signup"><span>Get the free masterclass</span><span className="arrow">↗</span></a>
        </div>
        <button className="motion-control" type="button" hidden={!isControlVisible} aria-label={isPlaying ? "Pause background video" : "Play background video"} onClick={togglePlayback}>
          {isPlaying ? "Ⅱ Pause video" : "▶ Play video"}
        </button>
      </div>
    </section>
  );
}
