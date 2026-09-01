import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Marquee } from "@/components/portfolio/Marquee";
import { Feature } from "@/components/portfolio/Feature";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, ContactPill } from "@/components/portfolio/Contact";

const title = "Abdullah Luqman — Full-stack Developer & AI Automation";
const description =
  "Portfolio of Abdullah Luqman, a full-stack developer building web products, AI voice agents and automation workflows.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ink">
      <Hero />
      <Projects />
      <About />
      <Marquee />
      <Feature
        label="Approach"
        title={"Hands-on from\nfirst sketch to ship"}
        body="I work across the whole stack — interface, data layer and the automation glue in between. Fewer handovers, faster iterations, and a product that actually gets finished."
        visual="flow"
      />
      <Feature
        label="Human-first"
        title={"Tech that stays\nreadable"}
        body="I like tools, but I write code other people can pick up. Clear structure, honest naming and interfaces that explain themselves — so the work outlives the sprint it was built in."
        tone="light"
        visual="code"
        reverse
      />

      <Marquee />
      <Skills />
      <Contact />
      <ContactPill />
    </main>
  );
}
