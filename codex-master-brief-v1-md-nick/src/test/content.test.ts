import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { services } from "@/content/services";
import { works } from "@/content/cases";

describe("V3 offer structure", () => {
  it("keeps the reviewed service order and fixed Mystery Box price", () => {
    expect(services.map(s => s.name)).toEqual(["Snippet", "Music Video", "Campaign", "Mystery Box"]);
    expect(services.map(s => s.price)).toEqual(["From €60 / Snippet", "From €450 / 60 sec", "From €1950", "€100 / Box"]);
    expect(services.map(s => s.number)).toEqual(["01", "02", "03", "04"]);
    expect(services[3].note).toContain("No revisions");
    expect(services[0].note).toContain("50% deposit");
  });
  it("keeps the approved snippet and music selections with two campaign cases", () => {
    expect(services[0].workSamples).toHaveLength(8);
    expect(services[1].workSamples).toHaveLength(12);
    expect(services[2].campaignSlides).toHaveLength(2);
    expect(services[2].campaignSlides!.map(c => c.id)).toEqual(["campaign-blue", "campaign-dominika"]);
    expect(services[2].campaignSlides![0].photos).toHaveLength(8);
    expect(services[2].campaignSlides![0].reels).toHaveLength(2);
    expect(services[2].campaignSlides![0].bts?.videoSrc).toBeTruthy();
    for (const slide of services[2].campaignSlides!) {
      expect(slide.tiles).toHaveLength(7);
      expect(slide.tiles.filter(t => t.videoSrc)).toHaveLength(1);
      expect(slide.tiles.find(t => t.videoSrc)?.shape).toBe("landscape");
    }
  });
  it("shares the blue film URLs across sections and uses lightweight carousel previews", () => {
    const blue = services[2].campaignSlides![0].tiles[0];
    const sameFilm = services[1].workSamples!.find(item => item.videoSrc === blue.videoSrc)!;
    expect(sameFilm).toBeTruthy();
    expect(sameFilm.previewSrc).toBe(blue.previewSrc);
    expect(sameFilm.poster).toBe(blue.poster);
    for (const service of services.slice(0, 2)) {
      for (const item of service.workSamples!) {
        expect(item.previewSrc).toBeTruthy();
        expect(item.previewSrc).not.toBe(item.videoSrc);
      }
    }
  });
  it("references existing poster and video files", () => {
    const media = [...services.flatMap(s => s.workSamples ?? []), ...services.flatMap(s => s.campaignSlides?.flatMap(c => [...c.tiles, ...(c.reels ?? []), ...(c.photos ?? []), ...(c.bts ? [c.bts] : [])]) ?? []), ...works.map(w => w.media)];
    for (const item of media) {
      expect(existsSync(`public${item.poster}`), item.poster).toBe(true);
      if (item.previewSrc) expect(existsSync(`public${item.previewSrc}`), item.previewSrc).toBe(true);
      if (item.videoSrc) expect(existsSync(`public${item.videoSrc}`), item.videoSrc).toBe(true);
    }
  });
});
