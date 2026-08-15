import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { business, services, serviceAreas } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/90 mt-24">
      <div className="container-px py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl mb-4">
            Rangeen <span className="text-gold">Interiors</span>
          </h3>
          <p className="text-sm text-cream/60 leading-relaxed mb-4">
            Premium interior design and finishing services in Rawalpindi —
            wallpapers, flooring, false ceilings, paneling and complete
            renovations.
          </p>
          <div className="flex gap-3">
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-cream/20 hover:border-gold hover:text-gold transition-colors">
              <Facebook size={16} />
            </a>
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-cream/20 hover:border-gold hover:text-gold transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold text-sm tracking-widest uppercase mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-gold hover:underline">
                View All Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm tracking-widest uppercase mb-4">Areas We Serve</h4>
          <ul className="space-y-2 text-sm text-cream/70 grid grid-cols-2 gap-x-4">
            {serviceAreas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm tracking-widest uppercase mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold shrink-0" /> {business.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold shrink-0" />
              <a href={business.phoneHref} className="hover:text-gold">{business.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold shrink-0" />
              <a href={`mailto:${business.email}`} className="hover:text-gold">{business.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <div className="container-px flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Rangeen Interiors Adiala. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
