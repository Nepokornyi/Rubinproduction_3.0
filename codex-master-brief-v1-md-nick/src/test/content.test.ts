import { describe, expect, it } from "vitest";
import { services } from "@/content/services";
import { works } from "@/content/cases";
import { settings } from "@/content/settings";

describe("approved content structure", () => {
  it("contains exactly the three approved services", () => {
    expect(services.map((service) => service.name)).toEqual(["AI VFX Enhance", "Performance Snippet", "Campaign"]);
    expect(services.map((service) => service.price)).toEqual(["From €45 / Scene", "From €125 / Snippet", "From €490 / Campaign"]);
  });

  it("provides the approved number of content slides for every service", () => {
    expect(services[0].beforeAfterSlides).toHaveLength(6);
    expect(services[1].beforeAfterSlides).toHaveLength(6);
    expect(services[2].campaignSlides).toHaveLength(3);
    expect(services[2].campaignSlides?.every((slide) => slide.tiles.length === 7)).toBe(true);
    expect(new Set(services[2].campaignSlides?.flatMap((slide) => slide.tiles.map((tile) => tile.shape)))).toEqual(new Set(["landscape", "portrait", "square"]));
    expect(services[2].campaignSlides?.every((slide) => slide.tiles.filter((tile) => tile.videoSrc).length === 1)).toBe(true);
    expect(services[2].campaignSlides?.every((slide) => slide.tiles.find((tile) => tile.videoSrc)?.shape === "landscape")).toBe(true);
  });

  it("keeps exactly six editable work slots", () => {
    expect(works).toHaveLength(6);
    expect(works.every((work) => work.artist === "Artist name" && work.track === "Track title")).toBe(true);
  });

  it("uses the supplied Instagram identity", () => {
    expect(settings.instagramHandle).toBe("@who1snick");
    expect(settings.instagramUrl).toBe("https://www.instagram.com/who1snick/");
  });
});
