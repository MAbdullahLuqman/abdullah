type FeatureProps = {
  label: string;
  title: string;
  body: string;
  visual?: "flow" | "code";
  reverse?: boolean;
  tone?: "light" | "dark";
};

const FLOW = [
  { step: "01", name: "Scope", note: "One call, a written brief, no guessing." },
  { step: "02", name: "Build", note: "Interface, data layer and automations together." },
  { step: "03", name: "Ship", note: "Deployed, measured, handed over clean." },
];

const CODE = [
  { indent: 0, text: "function priceFor(plan) {", tone: "key" },
  { indent: 1, text: "if (plan.isTrial) return 0;", tone: "plain" },
  { indent: 1, text: "return plan.seats * plan.rate;", tone: "plain" },
  { indent: 0, text: "}", tone: "key" },
  { indent: 0, text: "", tone: "plain" },
  { indent: 0, text: "// no cleverness required", tone: "muted" },
];

function FlowVisual({ light }: { light: boolean }) {
  return (
    <div
      className={`flex aspect-4/5 w-full flex-col justify-center gap-px ${
        light ? "bg-ink/10" : "bg-paper/15"
      }`}
    >
      {FLOW.map((f) => (
        <div
          key={f.step}
          className={`group/row flex flex-1 items-center gap-5 px-6 transition-colors md:px-8 ${
            light ? "bg-paper hover:bg-flame" : "bg-ink hover:bg-flame"
          }`}
        >
          <span className="font-display text-2xl text-flame transition-colors group-hover/row:text-ink">
            {f.step}
          </span>
          <div>
            <p
              className={`font-display text-2xl transition-colors group-hover/row:text-ink md:text-3xl ${
                light ? "text-ink" : "text-paper"
              }`}
            >
              {f.name}
            </p>
            <p
              className={`mt-1 text-xs leading-relaxed transition-colors group-hover/row:text-ink/70 ${
                light ? "text-ink/55" : "text-paper/50"
              }`}
            >
              {f.note}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CodeVisual({ light }: { light: boolean }) {
  return (
    <div
      className={`flex aspect-4/5 w-full flex-col justify-center border p-6 md:p-10 ${
        light ? "border-ink/15 bg-ink" : "border-paper/15 bg-[oklch(0.18_0.02_40)]"
      }`}
    >
      <div className="mb-6 flex gap-2" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-flame" />
        <span className="size-2.5 rounded-full bg-paper/25" />
        <span className="size-2.5 rounded-full bg-paper/25" />
      </div>
      <pre className="overflow-hidden font-mono text-[0.8rem] leading-7 md:text-sm">
        {CODE.map((line, i) => (
          <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
            <span
              className={
                line.tone === "muted"
                  ? "text-paper/35"
                  : line.tone === "key"
                    ? "text-flame"
                    : "text-paper/85"
              }
            >
              {line.text || "\u00a0"}
            </span>
          </div>
        ))}
      </pre>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-paper/40">
        Readable beats clever
      </p>
    </div>
  );
}

export function Feature({ label, title, body, visual = "flow", reverse, tone = "dark" }: FeatureProps) {
  const light = tone === "light";
  return (
    <section className={light ? "bg-paper px-6 py-24 md:py-32" : "bg-ink px-6 py-24 md:py-32"}>
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-flame">{label}</p>
          <h2
            className={`mt-6 whitespace-pre-line font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-tight ${
              light ? "text-ink" : "text-paper"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-6 max-w-md text-sm leading-relaxed md:text-base ${
              light ? "text-ink/65" : "text-paper/60"
            }`}
          >
            {body}
          </p>
        </div>
        <div className="group/visual blur-reveal">
          {visual === "code" ? <CodeVisual light={light} /> : <FlowVisual light={light} />}
        </div>
      </div>
    </section>
  );
}
