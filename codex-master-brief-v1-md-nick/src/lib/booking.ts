// No personal enquiry data belongs in a public booking URL.
export function googleBookingUrl(value: string | undefined, embed = false): string {
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) return "";
    if (url.hostname === "calendar.google.com" && url.pathname.startsWith("/calendar/appointments/")) return url.href;
    if (!embed && url.hostname === "calendar.app.google") return url.href;
  } catch { /* Unconfigured or invalid URLs stay disabled. */ }
  return "";
}

export function openBookingPage(url: string): void {
  const destination = googleBookingUrl(url);
  if (destination) window.location.assign(destination);
}
