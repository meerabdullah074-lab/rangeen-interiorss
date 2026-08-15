import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Rangeen Interiors Adiala for a free consultation and quote on your interior project in Rawalpindi.",
};

export default function ContactPage() {
  return (
    <div className="pt-32">
      <section className="container-px section pt-0">
        <SectionHeading eyebrow="Get In Touch" title="Let's Talk About Your Project" subtitle="Reach out by phone, WhatsApp, or the form below — we usually respond within a few hours." />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-6 flex items-start gap-4">
              <Phone className="text-gold shrink-0" size={22} />
              <div>
                <p className="font-medium mb-1">Call Us</p>
                <a href={business.phoneHref} className="text-sm text-charcoal/60 hover:text-gold">{business.phone}</a>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <Mail className="text-gold shrink-0" size={22} />
              <div>
                <p className="font-medium mb-1">Email Us</p>
                <a href={`mailto:${business.email}`} className="text-sm text-charcoal/60 hover:text-gold">{business.email}</a>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <MapPin className="text-gold shrink-0" size={22} />
              <div>
                <p className="font-medium mb-1">Visit Us</p>
                <p className="text-sm text-charcoal/60">{business.address}</p>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <Clock className="text-gold shrink-0" size={22} />
              <div>
                <p className="font-medium mb-1">Working Hours</p>
                {business.hours.map((h) => (
                  <p key={h.day} className="text-sm text-charcoal/60">{h.day}: {h.time}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 border border-charcoal/10">
              <iframe
                src={business.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Rangeen Interiors Adiala Location Map"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
