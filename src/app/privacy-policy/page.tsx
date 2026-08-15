import { Metadata } from "next";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rangeen Interiors Adiala.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32">
      <section className="container-px section pt-0 max-w-3xl mx-auto prose prose-neutral">
        <h1 className="heading-lg mb-6">Privacy Policy</h1>
        <p className="text-sm text-charcoal/50 mb-8">Last updated: August 2026</p>

        <div className="space-y-6 text-charcoal/70 leading-relaxed">
          <p>
            Rangeen Interiors Adiala (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your
            privacy. This Privacy Policy explains how we collect, use and
            protect the information you provide when you visit our website
            or contact us regarding our services.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">1. Information We Collect</h2>
          <p>
            When you submit an enquiry through our contact form, we may
            collect your name, phone number, email address and details about
            your project. We do not collect payment information through this
            website.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">2. How We Use Your Information</h2>
          <p>
            Information submitted is used solely to respond to your enquiry,
            provide quotations, and communicate about your project. We do not
            sell or share your information with third parties for marketing
            purposes.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">3. Cookies</h2>
          <p>
            Our website may use basic cookies to improve browsing experience
            and understand general site usage. No personally identifying
            information is stored in cookies.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">4. Data Security</h2>
          <p>
            We take reasonable steps to protect the information you share
            with us. However, no method of transmission over the internet is
            completely secure.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites (such as
            WhatsApp, Facebook, or Instagram). We are not responsible for the
            privacy practices of these external sites.
          </p>

          <h2 className="heading-md !text-xl mt-8 mb-2">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href={`mailto:${business.email}`} className="text-gold hover:underline">{business.email}</a>{" "}
            or {business.phone}.
          </p>
        </div>
      </section>
    </div>
  );
}
