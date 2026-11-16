export const offerIds = ["mystery-box", "your-footage-our-edit", "music-video-production", "campaign"] as const;
export type Enquiry = { email: string; artist: string; message: string; driveUrl: string; services: string[]; requestId: string; website: string };
export function validateEnquiry(input: unknown): Enquiry | null {
  if (!input || typeof input !== "object") return null;
  const value = input as Record<string,unknown>;
  const fields = { email:254, artist:300, message:5000, driveUrl:2000, requestId:36, website:200 };
  for (const [key,max] of Object.entries(fields)) if (typeof value[key] !== "string" || (value[key] as string).length > max) return null;
  const data = value as unknown as Enquiry;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || /[\r\n]/.test(data.email) || data.website || !/^[a-f0-9-]{36}$/i.test(data.requestId)) return null;
  if (!Array.isArray(data.services) || !data.services.length || data.services.length > 4 || data.services.some(s=>!offerIds.includes(s as typeof offerIds[number]))) return null;
  if (data.driveUrl) { try { const url = new URL(data.driveUrl); if (!["http:","https:"].includes(url.protocol)) return null; } catch { return null; } }
  return {...data, services:[...new Set(data.services)]};
}
