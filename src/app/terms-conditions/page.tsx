import { Metadata } from "next";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Rangeen Interiors Adiala services.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-32">
      <section className="container-px section pt-0 max-w-3xl mx-auto prose prose-neutral">
        <h1 className="heading-lg mb-6">Terms & Conditions</h1>
        <p className="text-sm text-charcoal/50 mb-8">Last updated: August 2026</p>

        <div className="space-y-6 text-charcoal/70 leading-relaxed">
          <h2 className="heading-md !text-xl mt-8 mb-2">1. Services</h2>
          <p>
            Rangeen Interiors Adiala provides interior design and finishing
            services including but not limited to wallpapers, flooring, false
            ceilings, wall paneling and renovation work in Rawalpindi and
            surrounding areas. Final scope of work is agreed in writing
            before a project begins.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">2. Quotations</h2>
          <p>
            All quotations are valid for 30 days from the date issued unless
            otherwise stated. Prices may vary based on final site
            measurements and material availability.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">3. Payment Terms</h2>
          <p>
            Projects are typically billed on a milestone basis, with an
            advance payment required before work begins. Specific payment
            schedules are outlined in the project agreement.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">4. Project Timelines</h2>
          <p>
            Estimated timelines are provided in good faith based on project
            scope. Delays due to material availability, site access, or
            circumstances beyond our control will be communicated promptly.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">5. Warranty</h2>
          <p>
            Workmanship is covered under our standard warranty terms, details
            of which are provided at project handover. Materials are covered
            under their respective manufacturer warranties where applicable.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">6. Cancellations</h2>
          <p>
            Cancellation terms, including any applicable refunds for advance
            payments, are outlined in the individual project agreement signed
            with the client.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">7. Contact</h2>
          <p>
            For questions about these Terms & Conditions, contact us at{" "}
            <a href={`mailto:${business.email}`} className="text-gold hover:underline">{business.email}</a>{" "}
            or {business.phone}.
          </p>
        </div>
      </section>
    </div>
  );
}
