export type MediaContent = {
  id: string;
  poster: string;
  videoSrc?: string;
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
};

export type ServiceOffer = {
  id: "visual-upgrade" | "performance-snippet" | "campaign";
  number: string;
  name: string;
  price: string;
  description: string;
  note?: string;
  presentation: "before-after" | "campaign";
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
