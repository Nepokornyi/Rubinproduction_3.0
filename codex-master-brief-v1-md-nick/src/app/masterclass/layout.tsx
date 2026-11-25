import type { Metadata } from "next";
import "./masterclass.css";

export const metadata: Metadata = {
  title: "Nick Rubin × Kaiber — AI Video",
  description: "Explore real footage, editing and AI with music-video director Nick Rubin.",
};

export default function MasterclassLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
