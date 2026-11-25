"use client";

import { useRef, useState } from "react";

export function IntroLesson() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasFailed, setHasFailed] = useState(false);

  const retry = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasFailed(false);
    video.load();
    video.play().catch(() => {
      if (video.error) setHasFailed(true);
    });
  };

  return (
    <>
      <div className="player" data-reveal>
        <video
          ref={videoRef}
          className="lesson-video"
          src="/assets/masterclass/intro-lesson.mp4"
          poster="/assets/masterclass/intro-lesson-cover.webp"
          width={1280}
          height={720}
          controls
          playsInline
          preload="none"
          aria-label="A quick introduction to AI video with Nick Rubin"
          onError={() => setHasFailed(true)}
          onPlaying={() => setHasFailed(false)}
        >
          Your browser doesn’t support this video format.
        </video>
      </div>
      <div className="lesson-error" hidden={!hasFailed}>
        <span role="status">The lesson couldn’t load.</span>{" "}
        <button className="lesson-retry" type="button" onClick={retry}>Try again</button>
      </div>
    </>
  );
}
