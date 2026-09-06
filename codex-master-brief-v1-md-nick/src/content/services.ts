import type { BeforeAfterSlide, CampaignSlide, MediaContent, ServiceOffer } from "@/types/content";

const media = (id: string, basePath: string, label: string): MediaContent => ({
  id,
  poster: `${basePath}/${id}.webp`,
  videoSrc: `${basePath}/${id}.mp4`,
  alt: `${label} content placeholder`,
});

const beforeAfterSlides = (
  serviceId: string,
  beforePrefix = "before",
  afterPrefix = "after",
  count = 6,
): BeforeAfterSlide[] =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const basePath = `/assets/services/${serviceId}`;
    return {
      id: `${serviceId}-${number}`,
      before: media(`${beforePrefix}-${number}`, basePath, `${serviceId} ${beforePrefix}`),
      after: media(`${afterPrefix}-${number}`, basePath, `${serviceId} ${afterPrefix}`),
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
    name: "VFX Enhance",
    price: "From €45 / Scene",
    description: "For an existing music video that needs one specific scene refined, rebuilt or taken further. I focus on a single continuous shot—not a collection of shots—typically lasting 5–12 seconds, and develop it in detail through VFX, clean-up and post-production.",
    presentation: "before-after",
    beforeAfterSlides: beforeAfterSlides("visual-upgrade"),
  },
  {
    id: "performance-snippet",
    number: "02",
    name: "Performance Snippet",
    price: "From €125 / Snippet",
    description: "One of the most popular formats on my Instagram. You film a series of simple, static performance shots, and I turn them into a complete music visual through editing and post-production. The result is an author-led piece shaped by my style, taste and visual instinct. I will listen to your ideas in a consultation, while keeping the creative direction distinctly mine.",
    note: "Prepayment only. After payment, you receive a PDF shooting guide and video tutorial so you and your team can prepare the footage at the best possible quality. A personal consultation can also be arranged.",
    presentation: "before-after",
    beforeAfterSlides: beforeAfterSlides("performance-snippet"),
  },
  {
    id: "music-video-post-production",
    number: "03",
    name: "Music Video Post Production",
    price: "From €450 / ~60 Sec",
    description: "For artists and teams who have already shot a music video—or are preparing to shoot and need an editor and post-production artist. I can create a new edit from your footage, re-edit an existing version that is not working, or join earlier to help shape the concept, art direction and shooting plan. The final film is built in my visual style while making space for your ideas and the needs of the track.",
    note: "Prepayment only. Pricing starts at approximately 60 seconds; longer films and larger scopes are quoted individually. For more substantial projects, I can also support art direction, consultations, tutorials and tailored shooting guides.",
    comparisonLabels: {
      before: "Music Video",
      after: "Editing Process",
    },
    presentation: "before-after",
    beforeAfterSlides: beforeAfterSlides(
      "music-video-post-production",
      "music-video",
      "editing-process",
      3,
    ),
  },
  {
    id: "campaign",
    number: "04",
    name: "Campaign",
    price: "From €1950 / Campaign",
    description: "A full-service launch package for one complete track. Together with my team, I can take care of the production day, video shoot, photography, editing and post-production. The campaign can include a full music video, stills, resized edits, vertical music reels, Spotify and YouTube Canvas assets, cover artwork, channel and social avatars, plus behind-the-scenes photos, reels and a short film—giving you one connected visual system for the release.",
    note: "Included in price: art direction, concept development and a tailored shooting presentation. Every campaign is scoped around the track and built to give its launch the strongest possible visual support.",
    presentation: "campaign",
    campaignSlides,
  },
];
