import { readFileSync } from "node:fs";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import { MotionDirector } from "@/components/ui/MotionDirector";
import { Typewriter } from "@/components/ui/Typewriter";
afterEach(()=>{cleanup();vi.unstubAllGlobals();});
describe("Experimental motion accessibility",()=>{
 it("keeps unfold targets unclipped before IntersectionObserver can reveal them",()=>{
  const css=readFileSync("src/app/globals.css","utf8");
  const waitingRule=css.match(/\[data-motion="unfold"\]\s*\{([^}]+)\}/)![1];
  expect(waitingRule).toContain("clip-path:none");
  expect(waitingRule).not.toContain("inset(");
 });
 it("reveals both large sections once they enter the viewport",()=>{
  const callbacks: IntersectionObserverCallback[]=[];
  const targets: Element[]=[];
  vi.stubGlobal("IntersectionObserver",class {constructor(callback:IntersectionObserverCallback){callbacks.push(callback);}observe(el:Element){targets.push(el);}unobserve(){}disconnect(){}});
  render(<><MotionDirector/><section className="services-intro-section">The offer</section><div className="campaign-comparison">Campaign comparison</div></>);
  for(const text of ["The offer","Campaign comparison"]){
   const element=screen.getByText(text);
   expect(targets).toContain(element);
   expect(element).toHaveAttribute("data-motion","unfold");
   act(()=>callbacks[0]([{isIntersecting:true,target:element} as unknown as IntersectionObserverEntry],{} as IntersectionObserver));
   expect(element).toHaveClass("motion-entered");
  }
 });
 it("reveals observed content and restores ordinary markup on cleanup",()=>{
  const callbacks: IntersectionObserverCallback[]=[];
  vi.stubGlobal("IntersectionObserver",class {constructor(callback:IntersectionObserverCallback){callbacks.push(callback);}observe(){}unobserve(){}disconnect(){}});
  const {unmount}=render(<><MotionDirector/><p className="service-description">Visible service copy</p></>);
  const paragraph=screen.getByText("Visible service copy");
  expect(paragraph).toHaveAttribute("data-motion","fade");
  act(()=>callbacks[0]([{isIntersecting:true,target:paragraph} as unknown as IntersectionObserverEntry],{} as IntersectionObserver));
  expect(paragraph).toHaveClass("motion-entered");
  unmount();expect(paragraph).not.toHaveAttribute("data-motion");
 });
 it("keeps the complete text and skips reveal hiding with reduced motion",()=>{
  vi.stubGlobal("matchMedia",()=>({matches:true,addEventListener:vi.fn(),removeEventListener:vi.fn()}));
  render(<><MotionDirector/><p className="service-description">Readable without animation</p><Typewriter text="Full introductory text"/></>);
  expect(screen.getByText("Readable without animation")).not.toHaveAttribute("data-motion");
  expect(document.querySelector(".typewriter-ink")).toHaveTextContent("Full introductory text");
  expect(document.querySelector(".typewriter-ink")).not.toHaveClass("is-typing");
 });
});
