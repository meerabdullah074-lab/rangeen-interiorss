"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { business } from "@/lib/site-data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="p-3 rounded-full bg-charcoal text-cream shadow-soft hover:bg-gold transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <a
        href={business.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="p-4 rounded-full bg-[#25D366] text-white shadow-soft hover:scale-105 transition-transform animate-pulse"
      >
        <MessageCircle size={24} fill="white" />
      </a>
    </div>
  );
}
