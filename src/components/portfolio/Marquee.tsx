const COLUMNS = Array.from({ length: 14 });

export function Marquee() {
  return (
    <div className="overflow-hidden bg-ink py-0" aria-hidden="true">
      <div className="flex w-[200%] marquee-track">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex w-1/2 shrink-0">
            {COLUMNS.map((_, i) => (
              <div
                key={i}
                className="h-[26vw] max-h-72 min-h-40 flex-1"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(to bottom, var(--flame), var(--ink))"
                      : "linear-gradient(to bottom, var(--ink), var(--flame-deep))",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
