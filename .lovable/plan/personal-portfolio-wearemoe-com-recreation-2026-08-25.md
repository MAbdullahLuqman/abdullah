# Personal Portfolio — wearemoe.com recreation

A single-page portfolio for Abdullah Luqman that recreates the structure, motion and orange-on-black look of wearemoe.com, with your own photo as the hero side-pose.

## Reference behaviour captured

I screenshotted the live site including its hover state. Key interactions to reproduce:

- Full-bleed hero portrait on burnt orange, centered circular logo mark, huge serif headline over the face, small sans subline, scroll arrow at the bottom.
- Sticky floating "Contact" pill bottom-right with a green status dot.
- Scroll-pinned sections: statement line, oversized serif paragraph that highlights line by line, and a three-column "what I do" row.
- Marquee/strip of image tiles between sections with orange-to-black gradient columns.
- Alternating image + text feature blocks (label in small caps, serif headline, body copy).
- Hover interaction on the "Flexing to fit your model" list: hovering a list item underlines it and swaps the description text on the right column. Same pattern reused for the services list.
- Dark closing section with a large "Get in touch" call and minimal footer links.

## Sections (your content)

1. **Hero** — your generated side-profile portrait, headline (e.g. "Build what's next"), subline "Full-stack developer — web, AI agents & automation".
2. **About** — statement line + oversized serif intro paragraph with scroll-driven highlight; three-column row (Design / Build / Automate).
3. **Skills** — alternating feature blocks (stack, tooling) plus the hover-swap list: hover a skill group, its description swaps in on the right.
4. **Projects** — image/gradient tiles for Flowvix, SEO Manager, BidPilot, Wash-Pass, Klarai, Architect landing, each linking to its live URL / repo.
5. **Contact** — dark closing block with email CTA, LinkedIn, GitHub; sticky contact pill throughout.

## Portrait

Use your uploaded photo with the image editing tool to produce a dramatic left-facing side profile on burnt orange with hard rim light and film grain, matching the reference hero. Saved to `src/assets/` and used as the hero image; a darker crop reused in one feature block.

## Technical notes

- Single route: rewrite `src/routes/index.tsx` (replaces the placeholder), with section components under `src/components/`.
- Tokens in `src/styles.css`: burnt orange accent, near-black, off-white; serif display face (Playfair-style, e.g. Instrument Serif / Editorial-style) + geometric sans body, loaded via `<link>` in `__root.tsx`.
- Motion: Framer Motion (`motion`) for scroll-linked reveals, marquee, line-by-line highlight; CSS transitions for the hover list. No backend needed — contact is a `mailto:` link.
- Route `head()` with your name/title, description, og/twitter tags.

## Not included

No CMS, no backend/database, no contact form submissions (mailto only). Project copy will be drafted from your GitHub descriptions — tell me any you want reworded.
