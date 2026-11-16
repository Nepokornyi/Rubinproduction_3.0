export type MediaContent = {
  id: string;
  poster: string;
  videoSrc?: string;
  previewSrc?: string;
  alt: string;
};

export type BeforeAfterSlide = {
  id: string;
  before: MediaContent;
  after: MediaContent;
};

export type CampaignTile = MediaContent & {
  shape: "landscape" | "portrait" | "square";
  slot:
    | "landscape"
    | "portrait-center"
    | "portrait-right"
    | "square-left-top"
    | "square-left-bottom"
    | "square-right-top"
    | "square-right-bottom";
};

export type CampaignSlide = {
  id: string;
  tiles: CampaignTile[];
  reels?: MediaContent[];
  photos?: MediaContent[];
  bts?: MediaContent;
};

export type ServiceOffer = {
  id: "mystery-box" | "your-footage-our-edit" | "music-video-production" | "campaign";
  number: string;
  name: string;
  price: string;
  description: string;
  note?: string;
  comparisonLabels?: {
    before: string;
    after: string;
  };
  presentation: "before-after" | "campaign" | "work-grid" | "offer";
  titleLines?: string[];
  workSamples?: MediaContent[];
  process?: { title: string; description: string }[];
  included?: string[];
  beforeAfterSlides?: BeforeAfterSlide[];
  campaignSlides?: CampaignSlide[];
};

export type WorkItem = {
  id: string;
  artist: string;
  track: string;
  publicationUrl: string;
  media: MediaContent;
};

export type SiteSettings = {
  title: string;
  description: string;
  canonicalUrl: string;
  locale: string;
  instagramHandle: string;
  instagramUrl: string;
};
