import heroProfile from "@/assets/hero-profile.jpg";
import { Mark } from "./Mark";

const COLS = 16;
const ROWS = 10;

// Deterministic mosaic: orange blocks are dense at the edges, sparse over the
// face, and dissolve away (staggered) when the hero is hovered.
const TILES = Array.from({ length: COLS * ROWS }, (_, i) => {
  const x = i % COLS;
  const y = Math.floor(i / COLS);
  const dx = Math.abs(x - (COLS - 1) / 2) / ((COLS - 1) / 2);
  const dy = Math.abs(y - (ROWS - 1) / 2) / ((ROWS - 1) / 2);
  const edge = Math.max(dx, dy * 0.85);
  const noise = (((Math.sin(i * 12.9898) * 43758.5453) % 1) + 1) % 1;
  const opacity = Math.max(0.55, Math.min(1, edge * 1.8 - 0.35 + noise * 0.3));
  const color = "var(--flame-deep)";
  return { opacity, color, delay: Math.round(noise * 320) };
});

export function Hero() {
  return (
    <section className="group relative h-svh min-h-[640px] w-full overflow-hidden bg-flame-deep grain-overlay">
      <img
        src={heroProfile}
        alt="Side profile portrait of Abdullah Luqman"
        className="absolute inset-0 size-full object-contain object-bottom"
        fetchPriority="high"
      />

      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
        aria-hidden="true"
      >
        {TILES.map((t, i) => (
          <span
            key={i}
            className="mosaic-tile"
            style={
              {
                "--o": t.opacity,
                background: t.color,
                transitionDelay: `${t.delay}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>


      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/20" />


      <div className="absolute inset-x-0 top-6 z-10 flex justify-center md:top-8">
        <Mark />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.95] tracking-tight text-paper">
          Build what&rsquo;s next
        </h1>
        <p className="mt-6 max-w-md text-sm text-paper/85 md:text-base">
          Abdullah Luqman &mdash; full-stack developer for web, AI agents and automation
        </p>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-paper/80 transition-transform hover:translate-y-1"
        aria-label="Scroll to about"
      >
        <svg width="16" height="42" viewBox="0 0 16 42" fill="none" aria-hidden="true">
          <path d="M8 0v38M1 31l7 8 7-8" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </a>
    </section>
  );
}
