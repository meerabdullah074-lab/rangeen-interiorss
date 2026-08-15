"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { stockPhotos } from "@/lib/photos";

const images = [
  "Living Room — Feature Wall",
  "Kitchen — PVC Paneling",
  "Bedroom — Custom Wardrobe",
  "Office — False Ceiling",
  "Bathroom — Modern Finish",
  "Living Room — Wallpaper Detail",
  "Ceiling — Cove Lighting",
  "TV Unit — Media Wall",
  "Retail Space — Accent Lighting",
  "Curtains — Living Room",
  "Flooring — Turkish Wood",
  "Office — Reception Area",
];

// Real photos for the categories we have verified-license stock for.
// Anything not listed here keeps the elegant gradient placeholder.
const galleryPhotos: (string | undefined)[] = [
  stockPhotos.livingRoom,
  stockPhotos.kitchen,
  stockPhotos.wardrobe,
  stockPhotos.office,
  stockPhotos.bathroom,
  stockPhotos.livingRoom,
  stockPhotos.lighting,
  stockPhotos.tvUnit,
  stockPhotos.retail,
  stockPhotos.curtains,
  stockPhotos.flooring,
  stockPhotos.office,
];

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  const next = () => setActive((a) => (a === null ? null : (a + 1) % images.length));
  const prev = () => setActive((a) => (a === null ? null : (a - 1 + images.length) % images.length));

  return (
    <div className="pt-32">
      <section className="container-px section pt-0">
        <SectionHeading eyebrow="Visual Gallery" title="Project Photo Gallery" subtitle="A closer look at the finishes, materials and details behind our projects." />
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((label, i) => (
            <button key={label} onClick={() => setActive(i)} className="block w-full break-inside-avoid">
              <PlaceholderImage
                label={label}
                seed={i}
                aspect={i % 3 === 0 ? "aspect-square" : "aspect-[3/4]"}
                className="hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                src={galleryPhotos[i]}
              />
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-6" onClick={() => setActive(null)}>
          <button className="absolute top-6 right-6 text-cream" onClick={() => setActive(null)} aria-label="Close">
            <X size={28} />
          </button>
          <button
            className="absolute left-4 md:left-10 text-cream"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <PlaceholderImage label={images[active]} seed={active} aspect="aspect-[4/3]" src={galleryPhotos[active]} />
            <p className="text-center text-cream/70 mt-4 text-sm">{images[active]}</p>
          </div>
          <button
            className="absolute right-4 md:right-10 text-cream"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
