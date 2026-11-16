"use client";
import { useEffect, useRef } from "react";
import type { MediaContent } from "@/types/content";
export function VideoPlayer({ items, selected, onSelect, onClose, label }: { items: MediaContent[]; selected: number | null; onSelect: (n: number) => void; onClose: () => void; label: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    opener.current = document.activeElement as HTMLElement;
    dialog.current?.showModal();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new CustomEvent("portfolio-player", { detail: true }));
    return () => { document.body.style.overflow = original; window.dispatchEvent(new CustomEvent("portfolio-player", { detail: false })); opener.current?.focus(); };
  }, [isOpen]);
  const item = selected === null ? null : items[selected];
  return <dialog ref={dialog} className="service-player" aria-label={`${label} example player`} onClose={onClose}
    onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}
    onKeyDown={e => { if (selected !== null && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { e.preventDefault(); onSelect((selected + (e.key === "ArrowRight" ? 1 : -1) + items.length) % items.length); } }}>
    {item && selected !== null && <div className="service-player__panel">
      <button className="service-player__close" type="button" onClick={() => dialog.current?.close()} aria-label="Close work">×</button>
      <video key={item.id} src={item.videoSrc} poster={item.poster} controls autoPlay playsInline preload="metadata" aria-label={item.alt} />
      <div className="service-player__navigation"><button type="button" aria-label="Previous work" onClick={() => onSelect((selected - 1 + items.length) % items.length)}>←</button><span aria-live="polite">{String(selected + 1).padStart(2,"0")} / {String(items.length).padStart(2,"0")}</span><button type="button" aria-label="Next work" onClick={() => onSelect((selected + 1) % items.length)}>→</button></div>
    </div>}
  </dialog>;
}
