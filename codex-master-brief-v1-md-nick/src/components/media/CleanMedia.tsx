"use client";

import Image from "next/image";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useConstrainedNetwork } from "@/lib/network";
import { requestVideoSlot } from "@/lib/videoLoadQueue";

const POSTER_SETTLE_MS = 2200;

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
  const releaseSlotRef = useRef<(() => void) | null>(null);
  const reducedMotion = useReducedMotion();
  const constrainedNetwork = useConstrainedNetwork();
  const [videoReady, setVideoReady] = useState(false);
  const [posterSettled, setPosterSettled] = useState(false);
  const [inView, setInView] = useState(priority);
  const [loadVideo, setLoadVideo] = useState(false);

  const wantsVideo = Boolean(videoSrc) && !reducedMotion && !constrainedNetwork;
  const isRevealed = videoReady && revealVideo;

  const assignVideoRef = (node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const releaseSlot = useCallback(() => {
    releaseSlotRef.current?.();
    releaseSlotRef.current = null;
  }, []);

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
    if (loadVideo) return;
    if (!wantsVideo || !(priority || inView)) {
      releaseSlot();
      return;
    }
    if (priority) {
      setLoadVideo(true);
      return;
    }
    if (releaseSlotRef.current) return;
    releaseSlotRef.current = requestVideoSlot(() => setLoadVideo(true));
  }, [inView, loadVideo, priority, releaseSlot, wantsVideo]);

  useEffect(() => releaseSlot, [releaseSlot]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || controlledPlayback) return;
    if (!active || !inView) {
      video.pause();
      return;
    }
    const playback = video.play();
    void playback?.catch(() => undefined);
  }, [active, controlledPlayback, inView, loadVideo]);

  useEffect(() => {
    if (posterSettled) return;
    if (!wantsVideo) {
      setPosterSettled(true);
      return;
    }
    if (!loadVideo) return;
    const timer = window.setTimeout(() => setPosterSettled(true), POSTER_SETTLE_MS);
    return () => window.clearTimeout(timer);
  }, [loadVideo, posterSettled, wantsVideo]);

  const handleReady = () => {
    releaseSlot();
    setVideoReady(true);
    setPosterSettled(true);
    onVideoReadyChange?.(true);
  };

  const handleError = () => {
    releaseSlot();
    setVideoReady(false);
    setPosterSettled(true);
    onVideoReadyChange?.(false);
  };

  const rootClasses = [
    "clean-media",
    isRevealed ? "is-video-ready" : "",
    posterSettled ? "is-poster-settled" : "",
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
      {videoSrc && loadVideo ? (
        <video
          ref={assignVideoRef}
          className={`clean-media__video${isRevealed ? " is-ready" : ""}`}
          muted
          playsInline
          loop
          preload="auto"
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
