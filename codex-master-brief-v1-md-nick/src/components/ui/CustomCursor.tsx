"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: -40, y: -40 });
  const [portalTarget, setPortalTarget] = useState<HTMLDialogElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    document.body.classList.add("custom-cursor-enabled");
    const syncPortalTarget = () => setPortalTarget(document.querySelector<HTMLDialogElement>("dialog[open]"));
    const dialogObserver = new MutationObserver(syncPortalTarget);
    dialogObserver.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["open"] });
    syncPortalTarget();
    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      dialogObserver.disconnect();
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const cursor = (
    <div
      className={`custom-cursor${visible ? " is-visible" : ""}${pressed ? " is-pressed" : ""}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    />
  );

  return portalTarget ? createPortal(cursor, portalTarget) : cursor;
}
