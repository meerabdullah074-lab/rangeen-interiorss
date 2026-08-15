import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { blogPosts } from "@/lib/site-data";
import { stockPhotos } from "@/lib/photos";

const blogPhotos: Record<string, string> = {
  "false-ceiling-trends-2026": stockPhotos.lighting,
  "choosing-wallpaper-vs-paint": stockPhotos.curtains,
  "pvc-paneling-benefits": stockPhotos.wallPanels,
  "small-office-renovation-tips": stockPhotos.office,
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const index = blogPosts.indexOf(post);

  return (
    <div className="pt-32">
      <article className="container-px section pt-0 max-w-3xl mx-auto">
        <nav className="text-sm text-charcoal/50 mb-8">
          <Link href="/" className="hover:text-gold">Home</Link> /{" "}
          <Link href="/blog" className="hover:text-gold">Blog</Link> /{" "}
          <span className="text-charcoal">{post.title}</span>
        </nav>

        <p className="eyebrow mb-3">{post.category}</p>
        <h1 className="heading-lg mb-4">{post.title}</h1>
        <p className="flex items-center gap-2 text-sm text-charcoal/50 mb-8">
          <CalendarDays size={14} />
          {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <PlaceholderImage label={post.title} seed={index} aspect="aspect-[16/9]" className="mb-10" src={blogPhotos[post.slug]} />

        <div className="prose prose-neutral max-w-none space-y-5 text-charcoal/70 leading-relaxed">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
