import { describe, expect, it } from "vitest";
import { googleBookingUrl } from "@/lib/booking";

describe("Google booking configuration", () => {
  it("accepts Google booking links and official iframe URLs", () => {
    expect(googleBookingUrl("https://calendar.app.google/test")).toBe("https://calendar.app.google/test");
    expect(googleBookingUrl("https://calendar.google.com/calendar/appointments/schedules/test", true)).toContain("/schedules/test");
  });
  it("does not embed short links, arbitrary sites, or insecure URLs", () => {
    for (const url of [undefined, "javascript:alert(1)", "https://example.com/", "http://calendar.app.google/test", "https://calendar.google.com.evil.example/calendar/appointments/test"]) expect(googleBookingUrl(url)).toBe("");
    expect(googleBookingUrl("https://calendar.app.google/test", true)).toBe("");
  });
});
