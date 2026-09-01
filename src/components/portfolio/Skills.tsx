import { useState } from "react";

const GROUPS = [
  {
    name: "Frontend",
    detail: "React, TypeScript, Next.js, Tailwind, motion-driven interfaces",
  },
  {
    name: "Backend & Data",
    detail: "Node, Supabase, Postgres, REST APIs, GA4 & Search Console pipelines",
  },
  {
    name: "AI & Automation",
    detail: "AI voice agents, WhatsApp bots, n8n workflows, Python & scikit-learn",
  },
];

export function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="bg-paper px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-flame">Toolkit</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] tracking-tight text-ink">
            Flexing to fit
            <br />
            your stack
          </h2>
        </div>

        <ul className="space-y-4 self-center">
          {GROUPS.map((g, i) => (
            <li key={g.name} className="flex items-center gap-3">
              <span className="size-2 bg-ink" aria-hidden="true" />
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`text-left text-base font-medium text-ink underline-offset-[6px] transition-all md:text-lg ${
                  active === i ? "underline decoration-1" : "no-underline"
                }`}
              >
                {g.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="self-center">
          <p key={active} className="max-w-xs text-sm leading-relaxed text-ink/70 animate-fade-in">
            {GROUPS[active]?.detail}
          </p>
        </div>
      </div>
    </section>
  );
}
