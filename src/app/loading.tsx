export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-cream flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        <p className="font-display text-sm tracking-widest uppercase text-gold">Rangeen Interiors</p>
      </div>
    </div>
  );
}
