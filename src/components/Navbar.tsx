"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/lib/site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <Link href="/" className="font-display text-xl md:text-2xl tracking-wide">
          Rangeen <span className="text-gold">Interiors</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href={business.phoneHref} className="flex items-center gap-2 text-sm font-medium hover:text-gold">
            <Phone size={16} /> {business.phone}
          </a>
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass mt-3 mx-4 rounded-2xl p-6">
          <ul className="flex flex-col gap-4 text-base">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={business.phoneHref} className="btn-primary w-full justify-center mt-6">
            <Phone size={16} /> Call Now
          </a>
        </div>
      )}
    </header>
  );
}
