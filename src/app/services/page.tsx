import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { services } from "@/lib/site-data";
import { stockPhotos } from "@/lib/photos";

const photoMap: Record<string, string> = {
  "home-interior-design": stockPhotos.livingRoom,
  "living-room-design": stockPhotos.livingRoom,
  "kitchen-design": stockPhotos.kitchen,
  "bedroom-design": stockPhotos.bedroom,
  "office-interior-design": stockPhotos.office,
  "commercial-interior-design": stockPhotos.retail,
  "bathroom-design": stockPhotos.bathroom,
  "ceiling-design": stockPhotos.lighting,
  "false-ceiling": stockPhotos.lighting,
  "lighting-design": stockPhotos.lighting,
  "wall-panels": stockPhotos.wallPanels,
  "wallpapers": stockPhotos.curtains,
  "curtains": stockPhotos.curtains,
  "furniture-design": stockPhotos.wallPanels,
  "wardrobes": stockPhotos.wardrobe,
  "tv-units": stockPhotos.tvUnit,
  "renovation": stockPhotos.flooring,
  "custom-wood-work": stockPhotos.flooring,
};

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all interior design and finishing services offered by Rangeen Interiors Adiala in Rawalpindi — from false ceilings to complete renovations.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="container-px section pt-0">
        <SectionHeading eyebrow="What We Do" title="Complete Interior Design & Finishing Services" subtitle="18 specialised services covering every part of your home or office interior." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
              <PlaceholderImage label={s.title} seed={i} aspect="aspect-[16/10]" className="mb-4" src={photoMap[s.slug]} />
              <h3 className="font-display text-lg mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-sm text-charcoal/60 mb-3">{s.short}</p>
              <span className="text-sm text-gold inline-flex items-center gap-1">Learn more <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
