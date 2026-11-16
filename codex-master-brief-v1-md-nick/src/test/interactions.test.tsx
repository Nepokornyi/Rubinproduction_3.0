import React from "react";
import { render, screen, cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Contact } from "@/components/Contact";
import { ServiceWorkGrid } from "@/components/services/ServiceWorkGrid";
import { services } from "@/content/services";
import { OptionalBooking } from "@/components/OptionalBooking";
import { openBookingPage } from "@/lib/booking";
import { MysteryVisual } from "@/components/services/MysteryVisual";
import { CampaignGallery } from "@/components/services/CampaignGallery";

vi.mock("@/lib/booking", async (importOriginal) => ({ ...await importOriginal<typeof import("@/lib/booking")>(), openBookingPage: vi.fn() }));
vi.mock("next/image", () => ({ default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
  const clean = { ...props }; delete clean.fill; return React.createElement("img", { alt: "", ...clean });
} }));
afterEach(() => { cleanup(); vi.unstubAllGlobals(); vi.clearAllMocks(); });

describe("V3 navigation and interactions", () => {
  it("brands the header and sends Start a project to the form", () => {
    render(<SiteHeader />);
    expect(screen.getByRole("link", { name: "Rubin Production, home" })).toHaveAttribute("href", "#top");
    expect(screen.getByRole("link", { name: "Start a project" })).toHaveAttribute("href", "#contact");
  });
  it("opens mobile navigation and closes it with Escape, restoring trigger focus", async () => {
    const user = userEvent.setup(); render(<SiteHeader />);
    const trigger = screen.getByRole("button", { name: "Open menu" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Book a call" })).toHaveAttribute("href", "#contact");
    await user.keyboard("{Escape}");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveFocus();
  });
  it("opens and switches playable work examples", async () => {
    const user = userEvent.setup();
    render(<ServiceWorkGrid items={services.find(s => s.id === "your-footage-our-edit")!.workSamples!} label="Editing" />);
    expect(document.querySelector("video")).toBeNull();
    expect(screen.queryByRole("button", {name:/Pause previews/})).toBeNull();
    await user.click(screen.getByRole("button", { name: "Open Editing example 1" }));
    expect(screen.getByRole("dialog")).toHaveAttribute("open");
    expect(document.querySelector("video")).toHaveAttribute("controls");
    await user.click(screen.getByRole("button", { name: "Next work" }));
    expect(screen.getByText("02 / 08")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Close work" }));
    expect(document.querySelector("video")).toBeNull();
  });
  it("opens campaign reels and BTS and keeps photo pagination within its case", async () => {
    const user = userEvent.setup();
    render(<CampaignGallery slides={services[2].campaignSlides!} />);
    expect(screen.getByText("1–2 / 8")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Next campaign photos" }));
    expect(screen.getByText("3–4 / 8")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Watch Blue campaign — vertical reel 1" }));
    expect(document.querySelector("dialog video")).toHaveAttribute("src", "/assets/services/campaign-blue/reel-01.mp4");
    await user.click(screen.getByRole("button", { name: "Next work" }));
    expect(document.querySelector("dialog video")).toHaveAttribute("src", "/assets/services/campaign-blue/reel-02.mp4");
    await user.click(screen.getByRole("button", { name: "Next work" }));
    expect(document.querySelector("dialog video")).toHaveAttribute("src", "/assets/services/campaign-blue/bts.mp4");
    await user.click(screen.getByRole("button", { name: "Close work" }));
    await user.click(screen.getByRole("button", { name: "02 / Lyric · Soft · Poetry" }));
    expect(screen.getByText("1–2 / 4")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Watch Dominika Lukešová — vertical reel 1" }));
    expect(document.querySelector("dialog video")).toHaveAttribute("src", "/assets/services/campaign-dominika/reel-01.mp4");
    await user.click(screen.getByRole("button", { name: "Close work" }));
    expect(screen.queryByRole("button", { name: "Watch Blue campaign — vertical reel 1" })).toBeNull();
    await user.click(screen.getByRole("button", { name: "01 / Hip-Hop · Dynamic · Hard" }));
    expect(screen.getByText("3–4 / 8")).toBeInTheDocument();
  });
  it("requires email and accurately identifies the local-only form", async () => {
    const fetchMock = vi.fn(); vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup(); render(<Contact />);
    expect(screen.getByLabelText(/Your email/)).toBeRequired();
    await user.type(screen.getByLabelText(/Your email/), "preview@example.com");
    await user.click(screen.getByRole("checkbox", { name: "Campaign" }));
    act(() => window.dispatchEvent(new CustomEvent("select-service", { detail: "mystery-box" })));
    expect(screen.getByRole("checkbox", { name: "Mystery Box" })).toBeChecked();
    expect(screen.getByRole("checkbox", { name: "Campaign" })).toBeChecked();
    await user.click(screen.getByRole("button", { name: /Send enquiry/ }));
    expect(screen.getByText(/Nothing was sent/)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it("keeps Mystery Box copy unchanged when its illustration is clicked", async () => {
    const user = userEvent.setup(); render(<MysteryVisual />);
    expect(screen.getByRole("img", {name: /Black and red pixel/})).toHaveAttribute("src", "/assets/mystery-box/03-voxel.webp");
    const copy = screen.getByText("The idea stays a mystery. The price doesn’t.");
    await user.click(screen.getByRole("img", { name: "Animated Mystery Box" }));
    expect(copy).toHaveTextContent("The idea stays a mystery. The price doesn’t.");
  });
  it("opens Google booking straight from the call button and lets the visitor choose email", async () => {
    const user = userEvent.setup();
    render(<OptionalBooking bookingUrl="https://calendar.app.google/test" />);
    const call = screen.getByRole("link", { name: /Book a 30-minute call/ });
    expect(call).toHaveAttribute("href", "https://calendar.app.google/test");
    expect(call).toHaveAttribute("target", "_blank");
    await user.click(screen.getByRole("button", { name: "Email is fine for now" }));
    expect(screen.getByText(/no call is required/)).toBeInTheDocument();
  });
  it("offers the optional call after a confirmed form response, without a redirect", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok:true, json:async()=>({ ok:true, bookingUrl:"https://calendar.app.google/test" }) }));
    const user = userEvent.setup(); render(<Contact deliveryEnabled />);
    await user.type(screen.getByLabelText(/Your email/), "test@example.com");
    await user.click(screen.getByRole("checkbox", { name:"Mystery Box" }));
    expect(screen.queryByRole("link", { name:/Book a 30-minute call/ })).toBeNull();
    await user.click(screen.getByRole("button", { name:/Send enquiry/ }));
    expect(await screen.findByRole("link", { name:/Book a 30-minute call/ })).toHaveAttribute("href", "https://calendar.app.google/test");
    expect(openBookingPage).not.toHaveBeenCalled();
    expect(screen.getByText(/Your project details have been sent/)).toBeInTheDocument();
  });
  it("keeps the brief and does not open booking when lead delivery fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ok:false,json:async()=>({error:"Delivery unavailable"})}));
    const user = userEvent.setup(); render(<Contact deliveryEnabled />);
    await user.type(screen.getByLabelText(/Your email/), "artist@example.com");
    await user.type(screen.getByLabelText(/Tell us about/), "My new release");
    await user.click(screen.getByRole("checkbox", {name:"Campaign"}));
    await user.click(screen.getByRole("button", {name:/Send enquiry/}));
    expect(await screen.findByText("Delivery unavailable")).toBeInTheDocument();
    expect(openBookingPage).not.toHaveBeenCalled();
    expect(screen.getByLabelText(/Tell us about/)).toHaveValue("My new release");
  });

});
