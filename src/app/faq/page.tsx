import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Rangeen Interiors Adiala's design, pricing and renovation process.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="container-px section pt-0">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" subtitle="Everything you need to know before starting your project with us." />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card p-6 group">
              <summary className="cursor-pointer font-medium flex items-center justify-between list-none">
                {f.q}
                <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-charcoal/60 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
