"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { settings } from "@/content/settings";
import { services } from "@/content/services";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { OptionalBooking } from "@/components/OptionalBooking";
import { googleBookingUrl } from "@/lib/booking";

export function Contact({ deliveryEnabled = false }: { deliveryEnabled?: boolean }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [message, setMessage] = useState("");
  const [booking, setBooking] = useState("");
  const requestId = useRef("");
  const result = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const select = (event: Event) => { const id = (event as CustomEvent<string>).detail; if (services.some(item=>item.id===id)) setSelected(value=>value.includes(id)?value:[...value,id]); };
    window.addEventListener("select-service",select); return ()=>window.removeEventListener("select-service",select);
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "success") return;
    if (!deliveryEnabled) { setStatus("error"); setMessage("Sending is temporarily unavailable. Nothing was sent. Please message us on Instagram."); return; }
    if (!selected.length) { setStatus("error"); setMessage("Choose at least one format so we know what you have in mind."); return; }
    const data = new FormData(event.currentTarget);
    if (!requestId.current) requestId.current = crypto.randomUUID();
    setStatus("sending");
    try {
      const response = await fetch("/api/enquiry", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({email:data.get("email"),artist:data.get("artist"),message:data.get("message"),driveUrl:data.get("driveUrl"),website:data.get("website"),services:selected,requestId:requestId.current}), signal:AbortSignal.timeout(25000) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Delivery failed. Please try again or contact us on Instagram.");
      setStatus("success"); setBooking(googleBookingUrl(body.bookingUrl)); requestId.current="";
      // The call stays optional: the visitor chooses it in OptionalBooking, so there is no redirect here.
      setMessage(body.bookingUrl ? "Your project details have been sent." : "Thanks — we’ve received your enquiry. We’ll get back to you by email.");
      setTimeout(()=>result.current?.focus(),0);
    } catch(error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Unable to send. Please try again."); }
  }
  return <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-inner contact-inner--form">
    <div className="contact-introduction"><p className="eyebrow">Start a project</p><AnimatedHeadline as="h2" id="contact-title" lines={["What shall", "we create", "together?"]}/><p className="contact-introduction__copy">A creative experiment or a whole release? Choose the formats you’re interested in and tell us a little about your music.</p><a className="instagram-handle" href={settings.instagramUrl} target="_blank" rel="noreferrer">Need a quick answer? Message us on Instagram ↗</a></div>
    <form className="project-form" onSubmit={submit} onChange={()=>{if(status!=="sending"){setStatus("idle");requestId.current="";}}}>
      <label htmlFor="project-email">Your email *</label><input id="project-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com"/>
      <label htmlFor="project-artist">Artist name / Spotify / Instagram</label><input id="project-artist" name="artist" maxLength={300} placeholder="Your name, profile link or @handle"/>
      <fieldset className="service-choice"><legend>What do you have in mind? <span className="field-optional">Choose any</span></legend><div className="service-choice__grid">{services.map(item=><label key={item.id} className={selected.includes(item.id)?"is-checked":""}><input name="services" type="checkbox" value={item.id} checked={selected.includes(item.id)} onChange={e=>setSelected(value=>e.target.checked?[...value,item.id]:value.filter(id=>id!==item.id))}/><span>{item.name}</span></label>)}</div></fieldset>
      <label htmlFor="project-drive">Google Drive / media link <span className="field-optional">(optional)</span></label><input id="project-drive" name="driveUrl" type="url" maxLength={2000} placeholder="https://drive.google.com/…"/>
      <label htmlFor="project-message">Tell us about your release <span className="field-optional">(optional)</span></label><textarea id="project-message" name="message" rows={3} maxLength={5000} placeholder="Your track, idea, release date or anything we should know."/>
      <div className="form-trap" aria-hidden="true"><label htmlFor="project-website">Leave this empty</label><input id="project-website" name="website" tabIndex={-1} autoComplete="off"/></div>
      <button type="submit" className="button button--primary" disabled={status==="sending"||status==="success"}>{status==="sending"?"Sending…":status==="success"?"Details sent":"Send enquiry"}<span aria-hidden="true">↗</span></button>

      <div ref={result} tabIndex={-1} role="status" aria-live="polite">{(status==="error"||status==="success")&&<div className={`form-result form-result--${status}`}><strong>{message}</strong>{status==="success"&&booking&&<OptionalBooking bookingUrl={booking} />}{status==="error"&&<p><a href={settings.instagramUrl} target="_blank" rel="noreferrer">Contact us on Instagram ↗</a></p>}</div>}</div>
    </form>
  </div></section>;
}
