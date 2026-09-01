export function Mark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex size-16 items-center justify-center rounded-full bg-flame md:size-20 ${className}`}
      aria-label="Abdullah Luqman"
    >
      <span className="font-display text-3xl leading-none text-ink md:text-4xl">al</span>
    </div>
  );
}
