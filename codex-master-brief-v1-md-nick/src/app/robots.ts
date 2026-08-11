import type { MetadataRoute } from "next";
import { launchBlockers, settings } from "@/content/settings";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: launchBlockers.length === 0 ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${settings.canonicalUrl}/sitemap.xml`,
  };
}
