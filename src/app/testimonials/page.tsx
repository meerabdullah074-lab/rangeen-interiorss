import { Metadata } from "next";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what clients across Rawalpindi say about working with Rangeen Interiors Adiala.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-32">
      <section className="container-px section pt-0">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Real feedback from homeowners and businesses we've worked with across Rawalpindi."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-8">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              <p className="mb-5 leading-relaxed italic text-charcoal/70">
                &ldquo;{t.quote}&rdquo;
              </p>

              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-charcoal/50">{t.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}