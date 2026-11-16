import type { WorkItem } from "@/types/content";
import { services } from "./services";

// Reuse the real portfolio if the legacy Works component is enabled later.
export const works: WorkItem[] = services[1].workSamples!.slice(0, 6).map((media, index) => ({
  id: `work-${String(index + 1).padStart(2, "0")}`,
  artist: "Rubin Production",
  track: "Selected music video",
  publicationUrl: "",
  media,
}));
