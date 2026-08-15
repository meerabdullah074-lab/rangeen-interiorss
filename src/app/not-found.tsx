import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24">
      <div className="text-center container-px">
        <p className="font-display text-8xl text-gold mb-4">404</p>
        <h1 className="heading-md mb-4">This Page Wandered Off</h1>
        <p className="text-charcoal/60 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary">
          <Home size={16} /> Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
