"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { prefersReducedMotion, subscribeToReducedMotion } from "@/lib/reducedMotion";

const canAnimate = () => !!window.IntersectionObserver && !prefersReducedMotion();
// The server render keeps the full text; it is cleared for typing only after hydration.
const serverCanAnimate = () => false;

export function Typewriter({text}:{text:string}) {
  const root=useRef<HTMLParagraphElement>(null);
  const animate=useSyncExternalStore(subscribeToReducedMotion, canAnimate, serverCanAnimate);
  const [count,setCount]=useState(0);
  useEffect(()=>{
    if(!animate)return;
    let frame=0;let start=0;
    const tick=(time:number)=>{if(!start)start=time;const progress=Math.min(1,(time-start)/5200);setCount(Math.floor(progress*text.length));if(progress<1)frame=requestAnimationFrame(tick);};
    const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){observer.disconnect();frame=requestAnimationFrame(tick);}},{threshold:.3});
    if(root.current)observer.observe(root.current);
    return ()=>{observer.disconnect();cancelAnimationFrame(frame);};
  },[animate,text]);
  const shown=animate?count:text.length;
  return <p ref={root} className="section-intro typewriter"><span className="sr-only">{text}</span><span aria-hidden="true" className="typewriter-reserve">{text}</span><span aria-hidden="true" className={`typewriter-ink${shown<text.length?" is-typing":""}`}>{text.slice(0,shown)}</span></p>;
}
