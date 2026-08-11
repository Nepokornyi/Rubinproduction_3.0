import type { BeforeAfterSlide, CampaignSlide, MediaContent, ServiceOffer } from "@/types/content";

const media = (id: string, basePath: string, label: string): MediaContent => ({
  id,
  poster: `${basePath}/${id}.webp`,
  videoSrc: `${basePath}/${id}.mp4`,
  alt: `${label} content placeholder`,
});

const beforeAfterSlides = (serviceId: string): BeforeAfterSlide[] =>
  Array.from({ length: 6 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const basePath = `/assets/services/${serviceId}`;
    return {
      id: `${serviceId}-${number}`,
      before: media(`before-${number}`, basePath, `${serviceId} before`),
      after: media(`after-${number}`, basePath, `${serviceId} after`),
    };
  });

const campaignSlots = [
  { slot: "landscape", shape: "landscape" },
  { slot: "portrait-center", shape: "portrait" },
  { slot: "portrait-right", shape: "portrait" },
  { slot: "square-left-top", shape: "square" },
  { slot: "square-left-bottom", shape: "square" },
  { slot: "square-right-top", shape: "square" },
  { slot: "square-right-bottom", shape: "square" },
] as const;

const campaignSlides: CampaignSlide[] = Array.from({ length: 3 }, (_, slideIndex) => {
  const slide = String(slideIndex + 1).padStart(2, "0");
  return {
    id: `campaign-${slide}`,
    tiles: campaignSlots.map(({ slot, shape }) => {
      const id = `slide-${slide}-${slot}`;
      const campaignMedia = media(id, "/assets/services/campaign", `Campaign slide ${slide}, ${slot.replaceAll("-", " ")}`);
      return {
        ...campaignMedia,
        videoSrc: shape === "landscape" ? campaignMedia.videoSrc : undefined,
        shape,
        slot,
      };
    }),
  };
});

export const services: ServiceOffer[] = [
  {
    id: "visual-upgrade",
    number: "01",
    name: "AI VFX Enhance",
    price: "From €45 / Scene",
    description: "For situations where you already have a music video, filmed scenes or a finished visual and need to fix, rework or improve one specific scene. Whether the goal is to strengthen the image, clean something up or solve an issue left from production, I can take that piece of work off your hands and develop the scene in detail.",
    presentation: "before-after",
    beforeAfterSlides: beforeAfterSlides("visual-upgrade"),
  },
  {
    id: "performance-snippet",
    number: "02",
    name: "Performance Snippet",
    price: "From €125 / Snippet",
    description: "I send you a free shooting instruction and PDF guide. You film a performance in a proven snippet format, and I handle the edit and post-production.",
    note: "Included in price for orders of four snippets or more: art direction, consultation and a tailored presentation of ideas created for your project.",
    presentation: "before-after",
    beforeAfterSlides: beforeAfterSlides("performance-snippet"),
  },
  {
    id: "campaign",
    number: "03",
    name: "Campaign",
    price: "From €490 / Campaign",
    description: "We develop the concept together, including art direction, and create a complete visual up to one minute. It can be fully AI-led from your photos, camera-shot, or a combination of both. This is full post-production for a larger music visual, with the final scope discussed personally.",
    note: "Included in price: art direction and a tailored shooting presentation prepared around your project.",
    presentation: "campaign",
    campaignSlides,
  },
];
