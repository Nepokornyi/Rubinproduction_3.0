"use client";

import { useEffect, useRef, useState } from "react";

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = (e: PointerEvent) => { if (!header.current?.contains(e.target as Node)) setMenuOpen(false); };
    const escape = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); } };
    const resize = () => { if (window.innerWidth > 767) setMenuOpen(false); };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => { document.removeEventListener("pointerdown", dismiss); document.removeEventListener("keydown", escape); window.removeEventListener("resize", resize); };
  }, [menuOpen]);

  useEffect(() => {
    let previousY = window.scrollY;
    let travel = 0;
    let direction = 0;
    let navigating = false;
    let navigationTimer: ReturnType<typeof setTimeout>;

    const finishNavigation = () => {
      navigating = false;
      clearTimeout(navigationTimer);
      previousY = window.scrollY;
      travel = 0;
    };
    const interruptNavigation = () => { if (navigating) finishNavigation(); };
    const onScroll = () => {
      // Clamp rubber-band overscroll so it cannot flip the header on touch devices.
      const y = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight));
      const delta = y - previousY;
      previousY = y;
      if (navigating) return;
      if (y < 24) { setHidden(false); travel = 0; return; }
      const nextDirection = Math.sign(delta);
      if (!nextDirection) return;
      if (direction !== nextDirection) travel = 0;
      direction = nextDirection;
      travel += Math.abs(delta);
      if (travel >= 12) { setHidden(direction > 0); travel = 0; }
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.clientY <= 16 && !navigating) setHidden(false);
    };
    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || link.target === "_blank") return;
      const hash = link.getAttribute("href")!;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      setMenuOpen(false);
      const top = hash === "#top" ? 0 : Math.max(0,
        window.scrollY + target.getBoundingClientRect().top + (parseFloat(getComputedStyle(target).paddingTop) || 0) - 24);
      navigating = true;
      setHidden(top > 24);
      travel = 0;
      clearTimeout(navigationTimer);
      navigationTimer = setTimeout(finishNavigation, 1600);
      if (window.location.hash !== hash) window.history.pushState(null, "", hash);
      // Move keyboard focus with the destination, without adding a second scroll.
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
      }
      target.focus({ preventScroll: true });
      window.scrollTo({ top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", finishNavigation);
    window.addEventListener("wheel", interruptNavigation, { passive: true });
    window.addEventListener("touchstart", interruptNavigation, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("click", onAnchorClick);
    return () => {
      clearTimeout(navigationTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", finishNavigation);
      window.removeEventListener("wheel", interruptNavigation);
      window.removeEventListener("touchstart", interruptNavigation);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return (
    <header ref={header} className={`site-header${hidden && !menuOpen ? " site-header--hidden" : ""}`} onFocusCapture={() => setHidden(false)}>
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="Rubin Production, home">Rubin Production</a>
        <button ref={menuButton} className="mobile-menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(value => !value)}><span>{menuOpen ? "Close" : "Menu"}</span><span className={menuOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true"><i /><i /></span></button>
        <nav id="site-navigation" className={menuOpen ? "is-open" : ""} aria-label="Primary navigation">
          <a className="nav-mystery" href="#mystery-box"><span aria-hidden="true">✧</span> Mystery Box</a>
          <a href="#your-footage-our-edit">Snippet</a>
          <a href="#music-video-production">Music Video</a>
          <a href="#campaign">Campaign</a>
          <a className="mobile-menu-contact" href="#contact">Book a call <span aria-hidden="true">↗</span></a>
        </nav>
        <a className="nav-cta" href="#contact">Start a project</a>
      </div>
    </header>
  );
}
