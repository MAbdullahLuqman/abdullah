import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const LINES = [
  "The best products aren't shipped by",
  "committee. They're built by people who",
  "care about the last five percent \u2014",
  "the part everyone else skips.",
];

const PILLARS = [
  { title: "Design", body: "Interface work that has a point of view, not a template." },
  { title: "Build", body: "React, TypeScript and Next-gen tooling, shipped end to end." },
  { title: "Automate", body: "AI agents, n8n workflows and integrations that keep running." },
];

function Line({ text, index, total }: { text: string; index: number; total: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.45"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.22, 1]);
  return (
    <motion.span
      ref={ref}
      style={{ opacity }}
      className="block"
      data-line={`${index + 1}/${total}`}
    >
      {text}
    </motion.span>
  );
}

export function About() {
  return (
    <section id="about" className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-tight text-paper/60">
          Good software has a heartbeat.
        </p>

        <h2 className="mt-20 font-display text-[clamp(1.8rem,5vw,4rem)] leading-[1.12] tracking-tight text-paper md:mt-32">
          {LINES.map((line, i) => (
            <Line key={line} text={line} index={i} total={LINES.length} />
          ))}
        </h2>

        <div className="mt-24 border-t border-paper/15 pt-8 md:mt-36">
          <p className="text-xs uppercase tracking-[0.2em] text-flame">What I do</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
            {PILLARS.map((p) => (
              <div key={p.title}>
                <h3 className="font-display text-2xl text-paper md:text-3xl">{p.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
