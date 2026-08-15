import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { services, business } from "@/lib/site-data";
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

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
  };
}

const included = [
  "Free on-site consultation and measurement",
  "Detailed, itemised quotation",
  "Premium, durable materials",
  "Skilled, experienced installation team",
  "Post-project walkthrough and touch-ups",
];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="pt-32">
      <section className="container-px section pt-0">
        <nav className="text-sm text-charcoal/50 mb-8">
          <Link href="/" className="hover:text-gold">Home</Link> /{" "}
          <Link href="/services" className="hover:text-gold">Services</Link> /{" "}
          <span className="text-charcoal">{service.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <PlaceholderImage label={service.title} seed={services.indexOf(service)} aspect="aspect-[4/3]" src={photoMap[service.slug]} />
          <div>
            <p className="eyebrow mb-3">Service</p>
            <h1 className="heading-lg mb-5">{service.title}</h1>
            <p className="text-charcoal/60 leading-relaxed mb-6">{service.description}</p>

            <ul className="space-y-3 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={18} className="text-gold shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Request a Quote <ArrowRight size={16} /></Link>
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px">
          <h2 className="heading-md mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-display text-lg mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-sm text-charcoal/60">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
