import Image from "next/image";
import { ImageIcon } from "lucide-react";

const gradients = [
  "from-[#d9b88a] to-[#8a6a3f]",
  "from-[#c26b4a] to-[#8a4a30]",
  "from-[#7c8b6f] to-[#4d5a43]",
  "from-[#b8925a] to-[#3a2f22]",
  "from-[#1a1a1a] to-[#4a4038]",
];

export default function PlaceholderImage({
  label,
  className = "",
  seed = 0,
  aspect = "aspect-[4/3]",
  src,
}: {
  label: string;
  className?: string;
  seed?: number;
  aspect?: string;
  /** Optional real photo URL. When provided, renders the real image instead of a gradient. */
  src?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${aspect} ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  const gradient = gradients[seed % gradients.length];
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} ${aspect} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-cream/80 p-4 text-center">
        <ImageIcon size={28} strokeWidth={1.5} />
        <span className="text-xs md:text-sm font-medium tracking-wide">{label}</span>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
    </div>
  );
}
