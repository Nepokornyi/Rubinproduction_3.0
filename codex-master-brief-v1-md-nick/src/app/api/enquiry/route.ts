import { createHash } from "node:crypto";
import { validateEnquiry } from "@/lib/enquiry";
import { googleBookingUrl } from "@/lib/booking";
export const runtime = "nodejs";
// A deployment-level durable rate limit must also be enabled before public launch.
const attempts = new Map<string,{ count:number; until:number }>();

const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// The confirmation the visitor receives. The HTML part makes "Book a call with Nick" a link;
// the text part is the fallback for mail apps that show plain text only.
// Without a booking URL, the three call paragraphs are left out.
function visitorConfirmation(bookingUrl: string) {
  const thanks = "Thanks for reaching out! We’ve received your enquiry and will look through everything you’ve shared.";
  const invite = "Let’s arrange a call with Nick, our director, to discuss your track, your ideas and the content we could create for your release.";
  const otherSlot = "Can’t find a time that works? Reply here and we’ll find another slot.";
  const bookingLink = `<a href="${escapeHtml(bookingUrl)}" style="font-weight:600">Book a call with Nick →</a>`;
  const text = ["Hey,", thanks, ...(bookingUrl ? [invite, `Book a call with Nick: ${bookingUrl}`, otherSlot] : []), "Speak soon,\nRubin Production"];
  const html = ["Hey,", thanks, ...(bookingUrl ? [invite, bookingLink, otherSlot] : []), "Speak soon,<br>Rubin Production"];
  return {
    subject: "Rubin Production — Let’s talk | Online call",
    text: text.join("\n\n"),
    html: html.map(paragraph => `<p>${paragraph}</p>`).join("\n"),
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL;
  const bookingUrl = googleBookingUrl(process.env.NEXT_PUBLIC_BOOKING_URL);
  if (process.env.LEADS_ENABLED !== "true" || !apiKey || !to || !from) return Response.json({error:"Email delivery is not connected yet. Nothing was sent."},{status:503});
  const origin = request.headers.get("origin");
  const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  if (origin && origin !== allowedOrigin) return Response.json({error:"Invalid origin."},{status:403});
  if (Number(request.headers.get("content-length")) > 16000) return Response.json({error:"Enquiry is too long."},{status:413});
  let input: unknown;
  try { const text = await request.text(); if(text.length>16000) return Response.json({error:"Enquiry is too long."},{status:413}); input=JSON.parse(text); } catch { return Response.json({error:"Invalid enquiry."},{status:400}); }
  const data = validateEnquiry(input);
  if (!data) return Response.json({error:"Check your email, selected formats and media link."},{status:400});
  const now = Date.now();
  for (const [key,value] of attempts) if(value.until<now) attempts.delete(key);
  const bucket = createHash("sha256").update(data.email.toLowerCase()).digest("hex");
  const prior = attempts.get(bucket) ?? {count:0,until:now+600000};
  if(prior.count>=5 || attempts.size>10000) return Response.json({error:"Please wait a few minutes before trying again."},{status:429});
  attempts.set(bucket,{...prior,count:prior.count+1});
  const names: Record<string,string> = {"mystery-box":"Mystery Box","your-footage-our-edit":"Snippet","music-video-production":"Music Video",campaign:"Campaign"};
  const hash = createHash("sha256").update(JSON.stringify(data)).digest("hex");
  try {
    const response = await fetch("https://api.resend.com/emails/batch",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json","Idempotency-Key":`enquiry-${hash}`},body:JSON.stringify([
      {from,to:[to],reply_to:data.email,subject:`New enquiry — ${data.services.map(s=>names[s]).join(" / ")}`,text:`Enquiry reference: ${data.requestId}\nMatch the calendar booking by the email below. This enquiry alone is not a booked call.\n\nEmail: ${data.email}\nArtist / profile: ${data.artist}\nFormats: ${data.services.map(s=>names[s]).join(", ")}\nMedia: ${data.driveUrl}\n\n${data.message}`},
      {from,to:[data.email],reply_to:to,...visitorConfirmation(bookingUrl)}
    ]),signal:AbortSignal.timeout(15000)});
    if(!response.ok) throw new Error("Provider rejected delivery");
    return Response.json({ok:true,bookingUrl});
  } catch { return Response.json({error:"We couldn’t confirm delivery. Please retry or contact us on Instagram."},{status:502}); }
}
