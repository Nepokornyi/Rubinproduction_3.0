import type { WorkItem } from "@/types/content";

export const works: WorkItem[] = Array.from({ length: 6 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    id: `work-${number}`,
    artist: "Artist name",
    track: "Track title",
    publicationUrl: "",
    media: {
      id: `work-${number}-media`,
      poster: `/assets/cases/case-${number}/poster.webp`,
      videoSrc: `/assets/cases/case-${number}/primary.mp4`,
      alt: `Work ${number} content placeholder`,
    },
  };
});
