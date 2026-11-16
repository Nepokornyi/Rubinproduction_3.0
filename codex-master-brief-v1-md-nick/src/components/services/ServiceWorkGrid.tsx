"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore, type PointerEvent as ReactPointerEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { VideoPlayer } from "./VideoPlayer";
import type { MediaContent } from "@/types/content";

type DataConnection = EventTarget & { saveData?: boolean };
const connection = () => (navigator as Navigator & { connection?: DataConnection }).connection;
const subscribeData = (notify: () => void) => {
  const network = connection();
  network?.addEventListener("change", notify);
  return () => network?.removeEventListener("change", notify);
};
const dataSnapshot = () => !!connection()?.saveData;
const serverDataSnapshot = () => false;

function Preview({ item, playing }: { item: MediaContent; playing: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { if (playing) { void video.current?.play()?.catch(() => setReady(false)); } else { video.current?.pause(); } }, [playing]);
  return <>
    <Image src={item.poster} alt={item.alt} fill sizes="(max-width:767px) 78vw, 30vw" className={playing && !ready ? "preview-loading" : ""} />
    {playing && item.videoSrc && <video ref={video} src={item.previewSrc ?? item.videoSrc} className={`ribbon-video ${ready ? "is-ready" : ""}`} muted autoPlay loop playsInline preload="none" onLoadStart={() => setReady(false)} onPlaying={() => setReady(true)} onError={() => setReady(false)} aria-hidden="true" />}
  </>;
}

export function ServiceWorkGrid({ items, label }: { items: MediaContent[]; label: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState<string[]>([]);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [playerOpen, setPlayerOpen] = useState(false);
  const saveData = useSyncExternalStore(subscribeData, dataSnapshot, serverDataSnapshot);
  const reduced = useReducedMotion();
  const rows = [items];
  useEffect(() => {
    const visibility = () => setPageVisible(!document.hidden);
    const modal = (e: Event) => setPlayerOpen((e as CustomEvent<boolean>).detail);
    document.addEventListener("visibilitychange", visibility); window.addEventListener("portfolio-player", modal);
    const section = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .05 });
    if (root.current) section.observe(root.current);
    const shown = new Map<string, number>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { const id = (entry.target as HTMLElement).dataset.preview!; if (entry.isIntersecting && entry.intersectionRatio > .55) shown.set(id, entry.intersectionRatio); else shown.delete(id); });
      setVisible([...shown].sort((a,b) => b[1]-a[1]).map(([id])=>id));
    }, { threshold: [0,.55,.8,1] });
    root.current?.querySelectorAll("[data-preview]").forEach(el => observer.observe(el));
    return () => { observer.disconnect(); section.disconnect(); document.removeEventListener("visibilitychange",visibility); window.removeEventListener("portfolio-player",modal); };
  }, [items]);
  const canPlay = inView && pageVisible && !reduced && !saveData && !playerOpen;
  const moving = canPlay;
  return <div ref={root} className={`work-ribbon ${reduced || saveData ? "is-static" : ""}`} aria-label={`${label} portfolio`}>
    <div className="ribbon-toolbar"><p className="eyebrow ribbon-tags"><span>Selected work</span><span>Drag to explore</span><span>Tap to watch</span></p></div>
    {rows.filter(row=>row.length).map((row,r) => <RibbonRow key={r} row={row} rowIndex={r} items={items} label={label} moving={moving} canPlay={canPlay} visible={visible} onSelect={setSelected} />)}
    <VideoPlayer items={items} selected={selected} onSelect={setSelected} onClose={()=>setSelected(null)} label={label} />
  </div>;
}

function RibbonRow({row, rowIndex, items, label, moving, canPlay, visible, onSelect}: {row: MediaContent[]; rowIndex: number; items: MediaContent[]; label: string; moving: boolean; canPlay: boolean; visible: string[]; onSelect: (index: number)=>void}) {
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<{x:number; scroll:number; moved:boolean; pointer:number} | null>(null);
  const suppressClick = useRef(false);
  const [hover,setHover] = useState(false);
  const [focused,setFocused] = useState(false);
  const [dragging,setDragging] = useState(false);
  const [touching,setTouching] = useState(false);
  const touchResume = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (touchResume.current) clearTimeout(touchResume.current); }, []);
  useEffect(()=>{
    const el=viewport.current;
    if(!el || !moving || hover || focused || dragging || touching) return;
    let frame=0, last=0, position=el.scrollLeft;
    const tick=(now:number)=>{
      if(last) {
        const period=(el.firstElementChild?.firstElementChild as HTMLElement | null)?.getBoundingClientRect().width ?? 0;
        position += Math.min(now-last,50) / 1000 * (rowIndex===0 ? 32 : 19);
        if(period>0 && position>=period) position-=period;
        el.scrollLeft=position;
      }
      last=now;frame=requestAnimationFrame(tick);
    };
    frame=requestAnimationFrame(tick);return ()=>cancelAnimationFrame(frame);
  },[moving,hover,focused,dragging,touching,rowIndex]);
  const end=(e:ReactPointerEvent<HTMLDivElement>)=>{
    if(!drag.current)return;
    suppressClick.current=drag.current.moved;
    if(e.currentTarget.hasPointerCapture?.(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);
    drag.current=null;setDragging(false);
  };
  return <div className="ribbon-row" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onFocusCapture={e=>setFocused(e.target.matches(":focus-visible"))} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false);}}>

    <div ref={viewport} className={`ribbon-window ribbon-window--${rowIndex}${dragging?" is-dragging":""}`}
      onTouchStart={()=>{if(touchResume.current)clearTimeout(touchResume.current);setTouching(true);}}
      onTouchEnd={()=>{touchResume.current=setTimeout(()=>setTouching(false),2500);}}
      onTouchCancel={()=>{touchResume.current=setTimeout(()=>setTouching(false),2500);}}
      onPointerDown={e=>{if(e.pointerType==="touch" || e.button!==0)return;drag.current={x:e.clientX,scroll:e.currentTarget.scrollLeft,moved:false,pointer:e.pointerId};suppressClick.current=false;}}
      onPointerMove={e=>{const d=drag.current;if(!d)return;const distance=e.clientX-d.x;if(Math.abs(distance)>6){d.moved=true;setDragging(true);e.currentTarget.setPointerCapture(e.pointerId);}if(d.moved)e.currentTarget.scrollLeft=d.scroll-distance;}}
      onPointerUp={end} onPointerCancel={end} onLostPointerCapture={()=>{drag.current=null;setDragging(false);}}
      onClickCapture={e=>{if(suppressClick.current){e.preventDefault();e.stopPropagation();suppressClick.current=false;}}}>
      <div className="ribbon-track">{[0,1,2].map(copy=><div className="ribbon-group" key={copy} aria-hidden={copy>0?true:undefined}>
        {row.map((item,j)=>{const index=items.indexOf(item);const id=`${rowIndex}-${copy}-${j}`;return <button type="button" className="service-work" data-preview={id} key={id} tabIndex={copy>0?-1:0} aria-label={`Open ${label} example ${index+1}`} onClick={()=>onSelect(index)} draggable={false} onDragStart={e=>e.preventDefault()}><Preview item={item} playing={canPlay&&visible.includes(id)} /><span className="service-work__play" aria-hidden="true">▶</span><span className="service-work__number" aria-hidden="true">{String(index+1).padStart(2,"0")} / WATCH</span></button>;})}
      </div>)}</div>
    </div>
  </div>;
}
