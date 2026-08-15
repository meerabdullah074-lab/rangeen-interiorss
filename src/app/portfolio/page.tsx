"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { portfolio } from "@/lib/site-data";
import { stockPhotos } from "@/lib/photos";

const categories = ["All", "Residential", "Commercial"];

const portfolioPhotos: Record<string, string> = {
  "adiala-road-family-residence": stockPhotos.livingRoom,
  "linear-commercial-park-office": stockPhotos.office,
  "bahria-town-living-room": stockPhotos.wallPanels,
  "satellite-town-kitchen": stockPhotos.kitchen,
  "cantt-boutique-showroom": stockPhotos.retail,
  "gulraiz-bedroom-suite": stockPhotos.bedroom,
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <div className="pt-32">
      <section className="container-px section pt-0">
        <SectionHeading eyebrow="Our Work" title="Portfolio & Completed Projects" subtitle="A selection of homes and businesses we've transformed across Rawalpindi." />

        <div className="flex justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm border transition-colors ${
                filter === c ? "bg-gold text-cream border-gold" : "border-charcoal/15 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <div key={p.slug} id={p.slug} className="card overflow-hidden scroll-mt-32">
              <PlaceholderImage label={p.title} seed={i} aspect="aspect-[4/3]" className="rounded-none" src={portfolioPhotos[p.slug]} />
              <div className="p-6">
                <p className="eyebrow mb-1">{p.category}</p>
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-charcoal/60 mb-4">{p.description}</p>
                <dl className="grid grid-cols-2 gap-y-2 text-xs text-charcoal/50">
                  <dt className="font-medium text-charcoal/70">Client Type</dt>
                  <dd>{p.clientType}</dd>
                  <dt className="font-medium text-charcoal/70">Style</dt>
                  <dd>{p.style}</dd>
                  <dt className="font-medium text-charcoal/70">Materials</dt>
                  <dd>{p.materials}</dd>
                  <dt className="font-medium text-charcoal/70">Completion</dt>
                  <dd>{p.completionTime}</dd>
                  <dt className="font-medium text-charcoal/70">Location</dt>
                  <dd>{p.location}</dd>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
