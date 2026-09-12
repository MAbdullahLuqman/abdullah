import shotPitchside from "@/assets/proj-pitchside.jpg";
import shotAsa from "@/assets/proj-asa.jpg";
import shotFlowvix from "@/assets/proj-flowvix.jpg";
import shotSeo from "@/assets/proj-seo.jpg";
import shotWashpass from "@/assets/proj-washpass.jpg";

const PROJECTS = [
  {
    name: "Pitchside AI",
    role: "AI sports product",
    body: "AI-powered football platform turning match data into instant insight and commentary-grade analysis.",
    href: "https://pitchside.ai",
    image: shotPitchside,
  },
  {
    name: "ASA Educators",
    role: "Education platform",
    body: "Website and enrolment experience for ASA Educators — courses, programmes and student intake in one place.",
    href: "https://www.asaeducators.com/",
    image: shotAsa,
  },
  {
    name: "Flowvix",
    role: "AI voice agents & automation studio",
    body: "Agency platform for AI voice agents, WhatsApp chatbots and custom n8n workflows that capture leads around the clock.",
    href: "https://flowvix-solutions.vercel.app",
    image: shotFlowvix,
  },
  {
    name: "SEO Manager",
    role: "B2B SaaS",
    body: "Action-driven SEO platform built on first-party Search Console and GA4 data \u2014 detects content decay and drives execution through a Kanban board.",
    href: "https://github.com/MAbdullahLuqman/Seo-manager",
    image: shotSeo,
  },
  {
    name: "Wash Pass",
    role: "Product mock",
    body: "TypeScript prototype for a subscription car-wash pass, from flow to interface.",
    href: "https://wash-pass-io-mock.luqmanabdullah2005.workers.dev/",
    image: shotWashpass,
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-flame">Selected work</p>
        <h2 className="mt-6 max-w-2xl font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-tight text-paper">
          Things I&rsquo;ve designed, built and shipped.
        </h2>

        <div className="mt-16 grid gap-px bg-paper/15 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between bg-ink p-8 transition-colors hover:bg-flame md:p-12"
            >
              <div className="mb-10 aspect-16/9 w-full overflow-hidden bg-ink">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.role}`}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div>
                <h3 className="font-display text-3xl text-paper transition-colors group-hover:text-ink md:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-flame transition-colors group-hover:text-ink/70">
                  {p.role}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60 transition-colors group-hover:text-ink/75">
                  {p.body}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
