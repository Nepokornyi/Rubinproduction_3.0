import type { Metadata, Viewport } from "next";
import { launchBlockers, settings } from "@/content/settings";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(settings.canonicalUrl),
  title: settings.title,
  description: settings.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: settings.title,
    description: settings.description,
    siteName: "who1snick",
  },
  twitter: { card: "summary", title: settings.title, description: settings.description },
  robots: { index: launchBlockers.length === 0, follow: launchBlockers.length === 0 },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang={settings.locale}><body>{children}<CustomCursor /></body></html>;
}
