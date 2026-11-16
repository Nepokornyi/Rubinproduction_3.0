import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/enquiry/route";

const enquiry = {
  email: "lena@example.com", artist: "@lenamusic", message: "New single out 12 December.", driveUrl: "",
  services: ["campaign"], requestId: "3f2b9c1e-0000-4000-8000-000000000000", website: "",
};

async function sendAndReadVisitorEmail(bookingUrl: string) {
  vi.stubEnv("NEXT_PUBLIC_BOOKING_URL", bookingUrl);
  const fetchMock = vi.fn().mockResolvedValue(new Response("{}", { status: 200 }));
  vi.stubGlobal("fetch", fetchMock);
  const response = await POST(new Request("http://localhost:3000/api/enquiry", {
    method: "POST", headers: { origin: "http://localhost:3000", "content-type": "application/json" }, body: JSON.stringify(enquiry),
  }));
  expect(response.status).toBe(200);
  const [, visitor] = JSON.parse(fetchMock.mock.calls[0][1].body);
  return visitor;
}

describe("visitor confirmation email", () => {
  beforeEach(() => {
    vi.stubEnv("LEADS_ENABLED", "true");
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.stubEnv("LEADS_TO_EMAIL", "owner@example.com");
    vi.stubEnv("LEADS_FROM_EMAIL", "Rubin Production <hello@rubinproduction.eu>");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000");
  });
  afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });

  it("links 'Book a call with Nick' in HTML and keeps the plain URL in the text part", async () => {
    const visitor = await sendAndReadVisitorEmail("https://calendar.app.google/test");
    expect(visitor.to).toEqual(["lena@example.com"]);
    expect(visitor.reply_to).toBe("owner@example.com");
    expect(visitor.subject).toBe("Rubin Production — Let’s talk | Online call");
    expect(visitor.html).toContain('<a href="https://calendar.app.google/test" style="font-weight:600">Book a call with Nick →</a>');
    expect(visitor.text).toContain("Book a call with Nick: https://calendar.app.google/test");
    expect(visitor.text).toContain("Can’t find a time that works? Reply here and we’ll find another slot.");
  });

  it("leaves out the call paragraphs when no booking URL is set", async () => {
    const visitor = await sendAndReadVisitorEmail("");
    expect(visitor.text).not.toContain("Book a call");
    expect(visitor.html).not.toContain("<a ");
    expect(visitor.text).toContain("Speak soon,\nRubin Production");
  });
});
