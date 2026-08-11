import type { MetadataRoute } from "next";
import { settings } from "@/content/settings";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: settings.canonicalUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
