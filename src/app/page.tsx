import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  Ruler,
  Hammer,
  PaintBucket,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  Wallet,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import ContactForm from "@/components/ContactForm";
import {
  business,
  services,
  portfolio,
  testimonials,
  faqs,
  stats,
  serviceAreas,
} from "@/lib/site-data";
import { stockPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Premium Interior Design in Rawalpindi",
  description:
    "Rangeen Interiors Adiala designs and finishes homes and offices across Rawalpindi with wallpapers, false ceilings, PVC paneling, flooring and more.",
};

const process = [
  { icon: Ruler, title: "Consultation & Site Visit", text: "We visit your space, understand your needs and budget." },
  { icon: Sparkles, title: "Design Concept", text: "A tailored design plan with materials and finishes selected." },
  { icon: Hammer, title: "Execution", text: "Skilled craftsmen carry out the work with regular progress updates." },
  { icon: PaintBucket, title: "Final Handover", text: "A thorough walkthrough and finishing touches before handover." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Trusted Craftsmanship", text: "Years of hands-on experience finishing homes and offices across Rawalpindi." },
  { icon: Wallet, title: "Transparent Pricing", text: "Detailed, itemised quotes with no hidden costs." },
  { icon: Clock, title: "On-Time Delivery", text: "Projects planned and tracked to meet agreed timelines." },
  { icon: Star, title: "Premium Finishing", text: "Attention to detail on every wall, ceiling and floor." },
];

const brands = ["Turkish Wood Flooring Co.", "PremiumWall Panels", "LuxWrap Wallpapers", "GypLine Ceilings", "ClearView Blinds"];

function serviceStockPhoto(slug: string): string | undefined {
  const map: Record<string, string> = {
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
  return map[slug];
}

const portfolioPhotos: Record<string, string> = {
  "adiala-road-family-residence": stockPhotos.livingRoom,
  "linear-commercial-park-office": stockPhotos.office,
  "bahria-town-living-room": stockPhotos.wallPanels,
  "satellite-town-kitchen": stockPhotos.kitchen,
  "cantt-boutique-showroom": stockPhotos.retail,
  "gulraiz-bedroom-suite": stockPhotos.bedroom,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-cream to-gold-light/20" />
        <div className="absolute -right-32 top-20 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl -z-10" />
        <div className="container-px grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">Rawalpindi&apos;s Premium Interior Studio</p>
            <h1 className="heading-xl mb-6">
              Interiors That Feel <span className="text-gold">Like Home,</span>
              <br /> Look Like Luxury.
            </h1>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-8 max-w-lg">
              {business.name} transforms homes and offices across Rawalpindi with
              premium wallpapers, false ceilings, flooring and complete
              renovation services — designed around your life, built to last.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-outline">
                View Our Projects
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-gold">{s.value}</p>
                  <p className="text-xs text-charcoal/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <PlaceholderImage label="Rangeen Interiors — Signature Living Room" seed={0} aspect="aspect-[4/5]" className="shadow-soft" src={stockPhotos.livingRoom} />
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-glass hidden md:block">
              <p className="font-display text-2xl text-gold">8+ Years</p>
              <p className="text-xs text-charcoal/60">Serving Rawalpindi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section container-px">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PlaceholderImage label="Behind the Scenes at Rangeen Interiors" seed={1} src={stockPhotos.office} />
          <div>
            <SectionHeading eyebrow="Who We Are" title="Crafting Beautiful, Functional Spaces Since Day One" center={false} />
            <p className="text-charcoal/60 leading-relaxed mb-6">
              Based on Adiala Road, Rangeen Interiors Adiala has become a trusted
              name for homeowners and businesses across Rawalpindi looking for
              dependable, premium interior finishing — from wallpapers and
              flooring to complete renovations.
            </p>
            <ul className="space-y-3">
              {["Free consultation & site visit", "Transparent, itemised quotations", "Skilled in-house craftsmen", "On-time project delivery"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-px">
          <SectionHeading eyebrow="Why Choose Us" title="Built on Trust, Finished with Precision" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="card p-6">
                <w.icon className="text-gold mb-4" size={28} />
                <h3 className="font-display text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-charcoal/60">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section container-px">
        <SectionHeading eyebrow="Our Services" title="Featured Interior Design Services" subtitle="From single rooms to full renovations, we cover every element of your interior." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
              <PlaceholderImage label={s.title} seed={i} aspect="aspect-[16/10]" className="mb-4" src={serviceStockPhoto(s.slug)} />
              <h3 className="font-display text-lg mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-sm text-charcoal/60 mb-3">{s.short}</p>
              <span className="text-sm text-gold inline-flex items-center gap-1">Learn more <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline">View All 18 Services</Link>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-charcoal text-cream">
        <div className="container-px">
          <SectionHeading eyebrow="Our Process" title="How We Bring Your Interior to Life" subtitle="A simple, transparent process from first visit to final handover." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.title} className="relative">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-5">
                  <p.icon className="text-gold" size={24} />
                </div>
                <p className="text-gold text-sm mb-1">Step {i + 1}</p>
                <h3 className="font-display text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-cream/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="section container-px">
        <SectionHeading eyebrow="Transformations" title="Before & After Showcase"/>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <PlaceholderImage label="Before — Living Room" seed={4} aspect="aspect-[4/3]"  src={stockPhotos.beforeLivingRoom} />
            <p className="text-center text-sm mt-2 text-charcoal/50">Before</p>
          </div>
          <div>
            <PlaceholderImage label="After — Living Room" seed={0} aspect="aspect-[4/3]" src={stockPhotos.livingRoom} />
            <p className="text-center text-sm mt-2 text-charcoal/50">After</p>
          </div>
        </div>
      </section>

      {/* Latest Projects / Portfolio Preview */}
      <section className="section bg-white">
        <div className="container-px">
          <SectionHeading eyebrow="Recent Work" title="Latest Projects" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.slice(0, 3).map((p, i) => (
              <Link key={p.slug} href={`/portfolio#${p.slug}`} className="group">
                <PlaceholderImage label={p.title} seed={i + 2} aspect="aspect-[4/3]" className="mb-4" src={portfolioPhotos[p.slug]} />
                <p className="eyebrow mb-1">{p.category}</p>
                <h3 className="font-display text-lg group-hover:text-gold transition-colors">{p.title}</h3>
                <p className="text-sm text-charcoal/50">{p.location}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-outline">See Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container-px">
        <SectionHeading eyebrow="Client Stories" title="What Our Clients Say" />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.slice(0, 4).map((t) => (
            <div key={t.name} className="card p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-charcoal/70 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-medium text-sm">{t.name}</p>
              <p className="text-xs text-charcoal/50">{t.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Counter */}
      <section className="section bg-gold/10">
        <div className="container-px grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl md:text-5xl text-gold mb-2">{s.value}</p>
              <p className="text-sm text-charcoal/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Worked With */}
      <section className="section container-px">
        <SectionHeading eyebrow="Trusted Materials" title="Brands & Suppliers We Work With" />
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-charcoal/40 font-display text-lg">
          {brands.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container-px">
          <SectionHeading eyebrow="Coverage" title="Areas We Serve Across Rawalpindi" />
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((a) => (
              <span key={a} className="px-4 py-2 rounded-full border border-charcoal/10 text-sm hover:border-gold hover:text-gold transition-colors">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section container-px">
        <div className="rounded-3xl bg-gradient-to-r from-charcoal to-charcoal/90 text-cream p-10 md:p-16 text-center">
          <h2 className="heading-lg mb-4">Ready to Transform Your Space?</h2>
          <p className="text-cream/60 max-w-xl mx-auto mb-8">
            Book a free consultation with Rangeen Interiors Adiala and get a
            detailed quote for your home or office project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline !border-cream/30 !text-cream hover:!text-gold">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section container-px">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.slice(0, 4).map((f) => (
            <details key={f.q} className="card p-5 group">
              <summary className="cursor-pointer font-medium flex items-center justify-between">
                {f.q}
                <span className="text-gold group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-charcoal/60 mt-3">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-gold hover:underline text-sm">View all FAQs →</Link>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="section bg-white">
        <div className="container-px grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading eyebrow="Get In Touch" title="Request Your Free Consultation" center={false} />
            <p className="text-charcoal/60 mb-6">
              Call, WhatsApp, or fill out the form and our team will get back
              to you within a few hours.
            </p>
            <div className="rounded-2xl overflow-hidden h-72 lg:h-[380px] border border-charcoal/10">
              <iframe
                src={business.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Rangeen Interiors Adiala Location"
              />
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
