import type { CampaignSlide, MediaContent, ServiceOffer } from "@/types/content";

const media = (id: string, basePath: string, alt: string): MediaContent => ({
  id, poster: `${basePath}/${id}${/^(music-video-|after-)|^slide-\d+-landscape$/.test(id) ? "-preview" : ""}.webp`, videoSrc: `${basePath}/${id}.mp4`, alt,
});
const numbered = (n: number) => String(n).padStart(2, "0");
const campaignSlots = [
  { slot: "landscape", shape: "landscape" },
  { slot: "portrait-center", shape: "portrait" },
  { slot: "portrait-right", shape: "portrait" },
  { slot: "square-left-top", shape: "square" },
  { slot: "square-left-bottom", shape: "square" },
  { slot: "square-right-top", shape: "square" },
  { slot: "square-right-bottom", shape: "square" },
] as const;
const dominikaVideo = (id: string, alt: string): MediaContent => ({
  id: `dominika-${id}`, poster: `/assets/services/campaign-dominika/${id}.webp`, videoSrc: `/assets/services/campaign-dominika/${id}.mp4`, previewSrc: `/assets/services/campaign-dominika/${id}-preview.mp4`, alt,
});
const dominikaPhoto: MediaContent = {id: "dominika-photo-01", poster: "/assets/services/campaign-dominika/photo-01.webp", alt: "Dominika Lukešová — artist portrait"};
const dominikaLegacy = (slot: string): MediaContent => ({id: `dominika-photo-${slot}`, poster: `/assets/services/campaign/slide-02-${slot}.webp`, alt: "Dominika Lukešová — campaign photography"});
const dominikaCampaign: CampaignSlide = {
  id: "campaign-dominika",
  tiles: campaignSlots.map(({ slot, shape }) => ({
    ...(shape === "landscape" ? dominikaVideo("main", "Dominika Lukešová — Plamínky") : slot === "portrait-right" ? dominikaPhoto : dominikaLegacy(slot)), slot, shape,
  })),
  reels: [dominikaVideo("reel-01", "Dominika Lukešová — vertical reel 1"), dominikaVideo("reel-02", "Dominika Lukešová — vertical reel 2")],
  photos: [dominikaPhoto, dominikaLegacy("portrait-center"), dominikaLegacy("square-left-top"), dominikaLegacy("square-left-bottom")],
  bts: dominikaVideo("bts", "Dominika Lukešová — behind the scenes"),
};
const campaignPhoto = (n: number): MediaContent => ({
  id: `blue-photo-${numbered(n)}`, poster: `/assets/services/campaign-blue/photo-${numbered(n)}.webp`, alt: `Campaign artist photography ${n}`,
});
const campaignVideo = (id: string, alt: string): MediaContent => ({
  id: `blue-${id}`, poster: `/assets/services/campaign-blue/${id}.webp`, videoSrc: `/assets/services/campaign-blue/${id}.mp4`, previewSrc: `/assets/services/campaign-blue/${id}-preview.mp4`, alt,
});
const blueMain: MediaContent = {
  id: "blue-main", poster: "/assets/services/music-video-portfolio/music-video-02.webp", videoSrc: "/assets/services/music-video-portfolio/music-video-02.mp4", previewSrc: "/assets/services/music-video-portfolio/music-video-02-preview.mp4", alt: "Blue campaign — main music video",
};
const blueReels = [campaignVideo("reel-01", "Blue campaign — vertical reel 1"), campaignVideo("reel-02", "Blue campaign — vertical reel 2")];
const blueTiles = [blueMain, campaignPhoto(1), campaignPhoto(8), campaignPhoto(2), campaignPhoto(4), campaignPhoto(5), campaignPhoto(7)];
const campaignSlides: CampaignSlide[] = [{
  id: "campaign-blue",
  tiles: campaignSlots.map(({slot,shape}, index) => ({...blueTiles[index], slot, shape})),
  reels: blueReels,
  photos: Array.from({length:8}, (_, i) => campaignPhoto(i + 1)),
  bts: campaignVideo("bts", "Blue campaign — behind the scenes"),
}, dominikaCampaign];
// Standalone Music Video entries are independent of the Campaign case studies.
const existingMusicVideos: MediaContent[] = [
  { ...media("work-01", "/assets/services/music-video-existing", "Music video portfolio — original selection 1"), previewSrc: "/assets/services/music-video-existing/work-01-preview.mp4" },
  { ...media("slide-02-landscape", "/assets/services/campaign", "Dominika Lukešová — original music video"), previewSrc: "/assets/services/campaign/slide-02-landscape-preview.mp4" },
  { ...media("work-03", "/assets/services/music-video-existing", "Music video portfolio — original selection 3"), previewSrc: "/assets/services/music-video-existing/work-03-preview.mp4" },
];

const editingSamples: MediaContent[] = [1, 5, 2, 6, 3, 7, 4, 8].map((number) => {
  const id = `snippet-${numbered(number)}`;
  const base = `/assets/services/snippet-portfolio/${id}`;
  return { id, poster: `${base}.webp`, videoSrc: `${base}.mp4`, previewSrc: `${base}-preview.mp4`, alt: `Snippet portfolio ${number}` };
});

const additionalMusicVideos: MediaContent[] = Array.from({ length: 9 }, (_, index) => {
  const id = `music-video-${numbered(index + 1)}`;
  const base = `/assets/services/music-video-portfolio/${id}`;
  return { id: `portfolio-${id}`, poster: `${base}.webp`, videoSrc: `${base}.mp4`, previewSrc: `${base}-preview.mp4`, alt: `Music video portfolio ${index + 4}` };
});
const musicVideoSamples = existingMusicVideos.flatMap((item, index) => [
  item, ...additionalMusicVideos.slice(index * 3, index * 3 + 3),
]);

const offers: ServiceOffer[] = [
  {
    id: "mystery-box", number: "01", name: "Mystery Box", titleLines: ["Mystery Box"], price: "€100 / Box",
    description: "First time working with us? Curious, experimenting or keeping the budget small? Send your song and whatever photos or footage you have. Our creative team turns them into a snippet of at least 15 seconds, using editing, graphics, VFX and our imagination. Your material. Our creative instinct. A result you won’t see coming.",
    note: "Fixed price: €100 per box. Full prepayment. No revisions, change requests or requests to remove elements. You receive the finished snippet as we created it. Choose this format if you’re happy to trust the process and be surprised. Order as many boxes as you like.",
    presentation: "offer",
    process: [
      { title: "Say hello & share", description: "Leave an enquiry or contact us directly. Send your song, photos and footage via Google Drive. No new shoot is included." },
      { title: "Pay & let go", description: "Pay €100 upfront for each box. We take full creative control and build a concept around your material." },
      { title: "Open your box", description: "Get a finished snippet of at least 15 seconds within five working days of receiving payment and all materials." },
    ],
  },
  {
    id: "your-footage-our-edit", number: "02",
    name: "Snippet", titleLines: ["Snippet"], price: "From €60 / Snippet",
    description: "A short music visual with a direction of its own. We start with a quick call, explore your track and find the right style and references together. Send existing footage or plan a shoot with us. From the creative direction to the finished edit, we take care of bringing the idea to life.",
    note: "50% deposit to start. The remaining 50% is due after you see the final result. The starting price covers a simple edit; filming, complexity and deliverables are quoted together before work begins.",
    presentation: "work-grid", workSamples: editingSamples,
    process: [
      { title: "Find your direction", description: "A quick call, your track and a shared set of references. No concept yet? We’ll help you develop one." },
      { title: "Make it happen", description: "We agree the scope and 50% deposit. Bring existing footage or arrange filming together." },
      { title: "See the result", description: "We create your snippet. You preview the final result, then pay the remaining 50% before final delivery." },
    ],
  },
  {
    id: "music-video-production", number: "03", name: "Music Video", titleLines: ["Music Video"], price: "From €450 / 60 sec",
    description: "A fully developed creative world for your track. We build a concept, shape the art direction and connect production with detailed post-production. This is a larger, more considered piece of work — a music video with a clear idea behind every frame.",
    note: "From €450 for approximately 60 seconds. 50% deposit, 50% after you preview the final result. One consolidated revision round included. Production scope and longer videos are quoted individually.",
    presentation: "work-grid", workSamples: musicVideoSamples,
    process: [
      { title: "A concept, not just a cut", description: "We start with a call and develop the art direction, references and production plan together. Then we take the project through filming and post-production." },
      { title: "Remote or on set", description: "Work with us remotely, or film together on location across Europe. We agree the logistics, scope and budget before production." },
    ],
  },
  {
    id: "campaign", number: "04", name: "Campaign", price: "From €1950",
    description: "Our flagship format. One shoot day becomes 50+ pieces of content for your release: a music video, vertical reels, live-format performances, behind-the-scenes stories, artist Q&A and a professional photoshoot with multiple looks. One creative team takes responsibility for the whole picture — from the first concept to the final exports.",
    note: "Crew, equipment, studio, pre-production, production and post-production are included in the agreed campaign scope. From €1,950; the final package is tailored to your track.",
    presentation: "campaign", campaignSlides,
    included: ["Music video or lead visual", "Artist photography & artwork", "Vertical reels & cutdowns", "Behind-the-scenes content", "Platform-ready release assets", "Art direction & shooting plan"],
    process: [
      { title: "Payments in stages", description: "Your campaign payment is split into agreed stages. We confirm the amounts and milestones together before production begins." },
      { title: "A few calls. One shoot day.", description: "Join the creative calls and set aside one day for the shoot. We handle the planning, crew, equipment and coordination around you." },
      { title: "Your release, with a guide", description: "Your delivery includes a practical PDF guide with recommendations on how to use the content and when to publish it around your release." },
    ],
  },
];

const serviceOrder = ["your-footage-our-edit", "music-video-production", "campaign", "mystery-box"];
export const services: ServiceOffer[] = serviceOrder.map((id, index) => ({ ...offers.find(service => service.id === id)!, number: numbered(index + 1) }));
