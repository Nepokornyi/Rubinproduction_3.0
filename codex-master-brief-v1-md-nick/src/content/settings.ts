import launchBlockersData from "@/content/launch-blockers.json";
import type { SiteSettings } from "@/types/content";

export const settings: SiteSettings = {
  title: "Rubin Production — Music Videos & Release Campaigns",
  description: "Your footage, our edit. Music video production and complete hybrid visual campaigns for artists, managers and labels.",
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en",
  instagramHandle: "@who1snick",
  instagramUrl: "https://www.instagram.com/who1snick/",
};

export const navigation = [{ label: "Services", href: "#services" }] as const;
export const launchBlockers = launchBlockersData;

export const heroMedia = {
  poster: "/assets/showreel/hero-poster-fast-desktop.webp",
  mobilePoster: "/assets/showreel/hero-poster-fast-mobile.webp",
  videoSrc: "/assets/showreel/hero-showreel-desktop.mp4",
  alt: "Hero music video content placeholder",
} as const;
