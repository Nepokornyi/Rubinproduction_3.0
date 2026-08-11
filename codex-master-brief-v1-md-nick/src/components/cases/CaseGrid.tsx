"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { works } from "@/content/cases";
import { CaseCard } from "@/components/cases/CaseCard";
import { CleanMedia } from "@/components/media/CleanMedia";

export function CaseGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selected = selectedIndex === null ? null : works[selectedIndex];

  const moveSelection = useCallback((direction: -1 | 1) => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current + direction + works.length) % works.length;
    });
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open && typeof dialog.showModal === "function") dialog.showModal();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") moveSelection(-1);
      if (event.key === "ArrowRight") moveSelection(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveSelection, selectedIndex]);

  return (
    <>
      <div className="work-grid">
        {works.map((item, index) => <CaseCard key={item.id} item={item} index={index} onOpen={() => setSelectedIndex(index)} />)}
      </div>
      <dialog ref={dialogRef} className="work-lightbox" onClose={() => setSelectedIndex(null)} onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }} aria-label={selectedIndex === null ? "Selected music visual preview" : `Selected music visual ${selectedIndex + 1} of ${works.length}`}>
        {selected && selectedIndex !== null ? (
          <div className="work-lightbox__panel">
            <button type="button" className="work-lightbox__close" onClick={() => dialogRef.current?.close()} aria-label="Close fullscreen preview">×</button>
            <CleanMedia key={selected.id} {...selected.media} active sizes="(max-width: 767px) calc(100vw - 1.5rem), calc(82vh * 1.7778)" />
            <div className="work-lightbox__controls" aria-label="Selected music visual navigation">
              <button type="button" onClick={() => moveSelection(-1)} aria-label="Previous selected music visual"><span aria-hidden="true">←</span></button>
              <span className="work-lightbox__count" aria-live="polite">{String(selectedIndex + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}</span>
              <button type="button" className="work-lightbox__next" onClick={() => moveSelection(1)} aria-label="Next selected music visual"><span aria-hidden="true">→</span></button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
