import { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { blogPosts } from "@/lib/site-data";
import { stockPhotos } from "@/lib/photos";

const blogPhotos: Record<string, string> = {
  "false-ceiling-trends-2026": stockPhotos.lighting,
  "choosing-wallpaper-vs-paint": stockPhotos.curtains,
  "pvc-paneling-benefits": stockPhotos.wallPanels,
  "small-office-renovation-tips": stockPhotos.office,
};

export const metadata: Metadata = {
  title: "Blog",
  description: "Interior design tips, trends and guides from Rangeen Interiors Adiala, Rawalpindi.",
};

export default function BlogPage() {
  return (
    <div className="pt-32">
      <section className="container-px section pt-0">
        <SectionHeading eyebrow="Insights" title="Interior Design Blog" subtitle="Tips, trends and guides for homeowners and businesses in Rawalpindi." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <PlaceholderImage label={post.title} seed={i} aspect="aspect-[16/10]" className="mb-4" src={blogPhotos[post.slug]} />
              <p className="eyebrow mb-2">{post.category}</p>
              <h3 className="font-display text-lg mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
              <p className="text-sm text-charcoal/60 mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-charcoal/40">
                <span className="flex items-center gap-1"><CalendarDays size={12} /> {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span className="text-gold flex items-center gap-1">Read <ArrowRight size={12} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
