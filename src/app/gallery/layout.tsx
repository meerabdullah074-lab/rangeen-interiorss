import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of interior finishes and completed spaces by Rangeen Interiors Adiala, Rawalpindi.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
