import { Metadata } from "next";
import { Target, Eye, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { stats } from "@/lib/site-data";
import { stockPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rangeen Interiors Adiala — Rawalpindi's trusted interior design and finishing studio serving homes and businesses since 2018.",
};

const values = [
  { icon: Target, title: "Our Mission", text: "To deliver premium interior finishing that transforms everyday spaces into places people love, without unnecessary cost or delay." },
  { icon: Eye, title: "Our Vision", text: "To be Rawalpindi's most trusted name in interior design, known equally for craftsmanship and honesty." },
  { icon: HeartHandshake, title: "Our Values", text: "Transparency, punctuality and attention to detail guide every project, big or small." },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      <section className="container-px section pt-0">
        <SectionHeading eyebrow="About Rangeen Interiors Adiala" title="Rawalpindi's Interior Studio, Built on Craftsmanship" subtitle="From wallpapers to complete renovations, we've helped hundreds of families and businesses across Rawalpindi create spaces they're proud of." />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <PlaceholderImage label="The Rangeen Interiors Team on Site" seed={2} aspect="aspect-[4/3]" src={stockPhotos.kitchen} />
          <div className="space-y-5 text-charcoal/70 leading-relaxed">
            <p>
              Rangeen Interiors Adiala began with a simple idea: interior
              finishing in Rawalpindi should be dependable, transparent and
              genuinely premium — without the inflated costs often associated
              with luxury design studios.
            </p>
            <p>
              Operating from Adiala Road, our team specialises in wallpapers,
              laminate and vinyl flooring, PVC paneling, artificial grass,
              false ceilings and complete home and office renovations. Every
              project starts with a free site visit and ends with a detailed
              handover — no shortcuts in between.
            </p>
            <p>
              Today, we serve clients across Adiala Road, Bahria Town,
              Satellite Town, Cantt and neighbouring areas, handling
              everything from single-room makeovers to full commercial
              fit-outs.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px">
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-8 text-center">
                <v.icon className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-display text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-charcoal/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container-px">
        <div className="rounded-3xl bg-charcoal text-cream p-10 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-gold mb-2">{s.value}</p>
                <p className="text-sm text-cream/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
