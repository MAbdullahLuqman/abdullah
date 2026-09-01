import { Mark } from "./Mark";

export const EMAIL = "abdullah@klarai.uk";

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-6 pb-16 pt-28 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center">
          <Mark />
        </div>

        <h2 className="mt-16 text-center font-display text-[clamp(2.4rem,8vw,6.5rem)] leading-[0.98] tracking-tight text-paper">
          Let&rsquo;s build
          <br />
          something good.
        </h2>

        <div className="mt-14 flex justify-center">
          <a
            href={`mailto:${EMAIL}?subject=Project%20enquiry`}
            className="border border-paper/30 px-8 py-4 text-sm uppercase tracking-[0.18em] text-paper transition-colors hover:border-flame hover:bg-flame hover:text-ink"
          >
            Get in touch
          </a>
        </div>

        <footer className="mt-28 flex flex-col items-center justify-between gap-4 border-t border-paper/15 pt-8 text-xs text-paper/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Abdullah Luqman</p>
          <nav className="flex gap-6">
            <a
              className="transition-colors hover:text-flame"
              href="https://www.linkedin.com/in/abdullahluqman/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="transition-colors hover:text-flame"
              href="https://github.com/MAbdullahLuqman"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="transition-colors hover:text-flame" href={`mailto:${EMAIL}`}>
              Email
            </a>
          </nav>
        </footer>
      </div>
    </section>
  );
}

export function ContactPill() {
  return (
    <a
      href={`mailto:${EMAIL}?subject=Project%20enquiry`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-ink/70 px-5 py-3 text-sm text-paper backdrop-blur-md transition-colors hover:bg-flame hover:text-ink"
    >
      <span className="size-2 rounded-full bg-[oklch(0.75_0.2_145)]" aria-hidden="true" />
      Contact
    </a>
  );
}
