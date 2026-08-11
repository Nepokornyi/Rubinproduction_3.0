"use client";

import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type CleanMediaProps = {
  poster: string;
  videoSrc?: string;
  mobilePoster?: string;
  mobileVideoSrc?: string;
  alt: string;
  active?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  unoptimized?: boolean;
  showPoster?: boolean;
  controlledPlayback?: boolean;
  revealVideo?: boolean;
  onVideoReadyChange?: (ready: boolean) => void;
};

export const CleanMedia = forwardRef<HTMLVideoElement, CleanMediaProps>(function CleanMedia(
  {
    poster,
    videoSrc,
    mobilePoster,
    mobileVideoSrc,
    alt,
    active = true,
    priority = false,
    sizes = "(max-width: 767px) 100vw, 60vw",
    className = "",
    unoptimized = false,
    showPoster = true,
    controlledPlayback = false,
    revealVideo = true,
    onVideoReadyChange,
  },
  forwardedRef,
) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [inView, setInView] = useState(priority);
  const isRevealed = videoReady && revealVideo;

  const assignVideoRef = (node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root || priority || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "220px 0px", threshold: 0.04 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || controlledPlayback) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!active || !inView || reducedMotion || connection?.saveData) {
      video.pause();
      return;
    }
    const playback = video.play();
    void playback?.catch(() => undefined);
  }, [active, controlledPlayback, inView, reducedMotion]);

  const handleReady = () => {
    setVideoFailed(false);
    setVideoReady(true);
    onVideoReadyChange?.(true);
  };

  const handleError = () => {
    setVideoReady(false);
    setVideoFailed(true);
    onVideoReadyChange?.(false);
  };

  const rootClasses = [
    "clean-media",
    isRevealed ? "is-video-ready" : "",
    videoFailed || !videoSrc ? "is-poster-settled" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div ref={rootRef} className={rootClasses}>
      {showPoster && inView && mobilePoster ? (
        <>
          <Image className="clean-media__poster clean-media__poster--desktop" src={poster} alt={alt} fill priority={priority} loading={priority ? undefined : "eager"} sizes={sizes} unoptimized={unoptimized} />
          <Image className="clean-media__poster clean-media__poster--mobile" src={mobilePoster} alt={alt} fill priority={priority} loading={priority ? undefined : "eager"} sizes="100vw" unoptimized={unoptimized} />
        </>
      ) : showPoster && inView ? (
        <Image className="clean-media__poster" src={poster} alt={alt} fill priority={priority} loading={priority ? undefined : "eager"} sizes={sizes} unoptimized={unoptimized} />
      ) : null}
      {videoSrc ? (
        <video
          ref={assignVideoRef}
          className={`clean-media__video${isRevealed ? " is-ready" : ""}`}
          muted
          autoPlay={!controlledPlayback}
          playsInline
          loop
          preload={priority ? "auto" : active && inView ? "metadata" : "none"}
          onLoadedData={handleReady}
          onCanPlay={handleReady}
          onError={handleError}
          aria-label={alt}
        >
          {mobileVideoSrc ? <source media="(max-width: 767px)" src={mobileVideoSrc} type="video/mp4" /> : null}
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
});
