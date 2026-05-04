# Long Trail Partners — Site Build Handoff

## What this is

This package contains a **complete working prototype** of the Long Trail Partners marketing website, plus instructions for building a production version of it.

You (Claude Code) are being asked to build a fresh, production-grade version of this site from scratch and deploy it to Vercel. This is a **clean rebuild** — there's no existing codebase to reconcile with. Whatever was deployed before is being replaced entirely.

## What's in this folder

```
claude-code-handoff/
├── README.md                    ← this file
└── prototype/
    ├── Long Trail Partners.html ← open this in a browser to see the site
    ├── site-styles.css          ← all design tokens (colors, fonts, spacing)
    ├── site-app.jsx             ← top-level app, routing, defaults
    ├── site-shell.jsx           ← Nav + Footer
    ├── page-home.jsx            ← Home page
    ├── page-interior.jsx        ← all 5 interior pages
    ├── tweaks-panel.jsx         ← design-time only — IGNORE
    └── images/                  ← all 18 photos and the logo
```

## How to view the prototype

Open `prototype/Long Trail Partners.html` in any web browser. It runs in-browser via React + Babel-standalone — slow to load (~2 seconds) but fully functional. **The visual it produces is the spec. Match it pixel-for-pixel.**

The prototype uses hash-based routing. Navigate with the top-nav links. The URL will show `#/who-we-are`, `#/how-we-think`, etc.

There is a "Tweaks" panel in the bottom-right corner of the prototype — that's a design-time tool. Ignore it entirely; do not port it to production.

---

## Build requirements

### Stack

- **Next.js 14+ with App Router**
- **TypeScript**
- **Vanilla CSS / CSS Modules** — do NOT use Tailwind. The current design uses CSS variables and inline styles; CSS Modules is a clean 1:1 port.
- **`next/font`** for Google Fonts (Source Serif 4, Source Sans 3)
- **`next/image`** for all photos
- **No animation libraries.** The site is intentionally static. CSS transitions only.

### Pages (six routes)

| Route | Source file in prototype | Component name |
|---|---|---|
| `/` | `page-home.jsx` | `HomePage` |
| `/who-we-are` | `page-interior.jsx` | `WhoWeArePage` |
| `/how-we-think` | `page-interior.jsx` | `HowWeThinkPage` |
| `/our-focus` | `page-interior.jsx` | `OurFocusPage` |
| `/for-owners` | `page-interior.jsx` | `ForOwnersPage` |
| `/contact` | `page-interior.jsx` | `ContactPage` |

Each becomes an `app/<route>/page.tsx`.

### Recommended file structure

```
app/
├── layout.tsx                   ← root, includes Nav + Footer + fonts
├── page.tsx                     ← Home
├── who-we-are/page.tsx
├── how-we-think/page.tsx
├── our-focus/page.tsx
├── for-owners/page.tsx
├── contact/page.tsx
└── globals.css                  ← from site-styles.css
components/
├── Nav.tsx
├── Footer.tsx
├── Button.tsx
├── Eyebrow.tsx
├── Section.tsx
├── Container.tsx
├── PageHero.tsx                 ← interior-page hero (used on 5 pages)
├── HeroVideo.tsx                ← home-page hero
├── PhaseTile.tsx
├── BusinessCard.tsx
├── TeamMember.tsx
├── GalleryFigure.tsx
└── Quote.tsx
public/
└── images/                      ← copy from prototype/images/
```

---

## Design tokens

All values live in `prototype/site-styles.css`. Reproduce in `app/globals.css` or a tokens file:

### Colors

```css
:root {
  --color-forest:      #1F3329;  /* primary brand color, dark sections, body text on cream */
  --color-forest-deep: #18271F;  /* deepest forest, hover states */
  --color-cream:       #F4EFE3;  /* primary cream, light sections */
  --color-cream-soft:  #D9D2C0;  /* warm cream, image placeholders */
  --color-cream-deep:  #ECE3CE;  /* slightly more saturated cream, panels */
  --color-brass:       #C8A766;  /* accent, focus rings — sparingly */
  --color-muted:       #9FA89D;  /* eyebrow text on dark backgrounds */
  --color-ink-soft:    #2A4736;
  --color-ink-body:    #2A3A2C;  /* default body text on cream */
  --color-ink-eyebrow: #6B6157;  /* eyebrow text on cream */
}
```

### Typography

- **Serif:** Source Serif 4 (Google Fonts), weights 300–700, opsz 8–60. Used for headings, blockquotes, italic display text.
- **Sans:** Source Sans 3 (Google Fonts), weights 300–700. Used for body, nav, buttons, eyebrows.

```ts
// app/layout.tsx
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google';
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif', weight: ['300','400','500','600','700'] });
const sans  = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans',  weight: ['300','400','500','600','700'] });
```

Then expose as CSS vars in `globals.css`.

### Layout

```css
:root {
  --max-w: 1240px;
  --gutter: clamp(24px, 5vw, 60px);
  --section-pad: 120px;
}
@media (max-width: 768px) {
  :root { --section-pad: 80px; }
}
```

### Buttons

Four variants in `site-styles.css` — port them as-is. Common: `padding: 14px 28px`, `border-radius: 2px` (do not soften — the design intentionally uses near-square corners), `font-weight: 600`, `letter-spacing: 0.02em`, `transition: all 0.2s ease`.

### Eyebrow

Tiny uppercase labels above section titles:
```css
.eyebrow {
  font-size: 13px;
  letter-spacing: 0.16em;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-muted);     /* on dark sections */
}
.eyebrow.on-cream { color: var(--color-ink-eyebrow); }
```

### Text wrap

The prototype applies `text-wrap: pretty` to all `p, li, blockquote` and `text-wrap: balance` to all `h1–h4`. Keep this — it noticeably improves readability.

### Card corners

Buttons and inputs: 2px radius. **Cards and image containers: 0 radius (square).** Do not introduce rounded cards — the editorial feel depends on this.

---

## Page summaries

### Home (`/`)

Sections in order:

1. **Hero** — Full-bleed, dark. Min-height `calc(100vh - 90px)`. Background: `<video>` with `images/hero.jpg` as poster. Brand wordmark tag (LONG TRAIL / PARTNERS) top-left. Two-line headline ("A Better Path Forward / **for Your Business.**" — second line italic serif). Lede paragraph. Primary CTA "Start a Conversation" → `/contact`.
2. **What We Stand For** — Cream section. Centered short statement: "The businesses that keep communities running deserve owners who plan to stick around."
3. **How We're Different** — Forest section. H2 left ("How We're Different."), supporting text right. Then 4–5 row table of compact heading/body pairs separated by hairlines (`border-bottom: 1px solid rgba(244,239,227,0.18)`).
4. **What to Expect** — 3-column phase grid. Roman numerals (I/II/III). Each tile: serif `font-size: 96px` watermark in top-right at 0.1 opacity, eyebrow label, heading, body.
5. **Our Businesses** — Forest section. Two large cards side-by-side. Each: 4:3 image with location chip overlay (bottom-left, uppercase, brass-bordered). Inside the card: eyebrow + serif title + body.
   - **On The River Inn** — Woodstock, Vermont · Acquired September 2024
   - **Hideaway Inn** — Mt. Snow, Vermont · Acquired July 2022
6. **Operator Quote** — Forest section. Full-width pull quote from Josh Hardy. Italic serif. No photo. Attribution underneath with 36px hairline lead-in: "Josh Hardy, General Manager, On The River Inn · Woodstock, Vermont"
7. **Team** — Cream section. Two columns side-by-side. Each: 4:5 portrait (max-width 240px, object-position center 18%) → name → role → bio paragraph. **No banner above.**
8. **Closing CTA** — Forest-deep section. Centered headline + button to Contact.

### Who We Are (`/who-we-are`)

1. **PageHero** — Banner with `images/who-we-are-hero.jpg`, eyebrow "About", H1 "Who We Are.", lede.
2. **Our Story** — Two-column. Headline left, paragraphs right.
3. **Together** — Cream-pale section. Three-photo asymmetric grid:
   - Top-left (4:5): `cornell-graduation.jpg` — "Cornell, 2017. College graduation, just before our first jobs out of school."
   - Top-right (4:5): `officiating-wedding.jpg` (object-position center 25%) — "Stephen's wedding, 2025. Justin officiating."
   - Bottom (full-width, 2:1.25): `cape-weekend.jpg` — "Cape Cod, 2020. Thirteen years of friendship before there was a firm."
   - Long-form copy in the right column (paragraphs are in `page-interior.jsx`).
4. **Bios** — Long versions of Justin and Stephen, with their headshots.
5. **What We've Done** — Forest blockquote pull quote: "They look at the **business** with fresh, objective eyes..."
6. **In the field** — Cream-pale section. Three-photo gallery (max-width 1200px, centered 3-col grid). Each figure has small uppercase caption + body note:
   - `closing-with-lawyer.jpg` — "Burlington, Vermont. 2022. Closing day on our first business, with our lawyer Dave Sterrett." / "Signing the papers for our first business."
   - `mountaineer-bonfire.jpg` — "Mt. Snow, Vermont. 2023. Bonfire at the Hideaway." / "Owning the inn means being at the inn."
   - `cape-cod-dock.jpg` — "Cape Cod, 2024. On the dock." / "Off the clock, but never really off. Most of our best ideas show up on weekends like this one."

### How We Think (`/how-we-think`)

1. **PageHero** with `how-we-think-hero.jpg`.
2. **Beliefs** — A numbered list (01, 02, 03, 04, 05 — count is in the source) with theme tags (Time, People, Restraint, Place, etc.), heading, paragraph.

### Our Focus (`/our-focus`)

1. **PageHero** with `our-focus-hero.jpg`.
2. **Industry tiles** — 8 tiles in a grid. Each: eyebrow industry name + short description.
3. **Characteristics we look for** — A list section with `characteristics-hero.jpg` as a backdrop image (saturate 1.15, contrast 1.05).
4. **Closing CTA**.

### For Owners (`/for-owners`)

1. **PageHero** with `for-owners-hero.jpg`.
2. **Process** — Five phases (I–V), each with title + body.
3. **FAQ** — ~6 questions including "What happens to the real estate?" and "Will you keep my team?"
4. **Closing CTA**.

### Contact (`/contact`)

1. **PageHero** with `contact-hero.jpg`.
2. **Two-column layout** — Left: intro + email + phone. Right: form (name, email, company, message).
3. **Form backend** — Wire to **Resend** with a server action / API route. Send to the user's contact email. Add a TODO comment if the email address isn't known yet — a placeholder of `hello@longtrailpartners.com` is fine.

---

## Navigation

`prototype/site-shell.jsx` defines:

**Nav** (top of every page):
- Sticky. Cream text on forest background.
- Wordmark left (LONG TRAIL / PARTNERS — two stacked lines, optional moose logo from `images/logo-moose.png`).
- Right: text links — Who We Are · How We Think · Our Focus · For Owners · Contact.
- Active route: subtle indicator (small dot or underline; check the prototype).
- Mobile (≤768px): collapse to hamburger → drawer.

**Footer** (bottom of every page):
- Forest-deep background.
- Wordmark + tagline "Built for the Long Haul."
- Bottom row: "© 2026 Long Trail Partners" left, "Woodstock, Vermont" right.

---

## Responsive

- `≤ 900px` — multi-column grids collapse (4→2, 3→2).
- `≤ 768px` — section padding 120 → 80, nav becomes hamburger, two-column blocks stack.
- `≤ 560px` — gallery grids become single-column.

Container gutter is fluid (`clamp(24px, 5vw, 60px)`) so most spacing handles itself.

---

## Copy

**All copy in the prototype is final and signed off by the user.** Re-type it exactly. Do not paraphrase.

Things that have been corrected through multiple rounds and must not regress:
- "Hideaway" / "Hideaway Inn" — never "The Mountaineer".
- "Thirteen years" of friendship — never twelve.
- Cornell "college graduation" — not "hotel school graduation" (though they did attend the hotel school; the Justin/Stephen bios reference it).
- "Run the business" / "look at the business" — never "the property" — in the Josh Hardy quote.
- **No em dashes (—) anywhere.** Use periods, commas, or sentence breaks.
- Footer: "© 2026 Long Trail Partners" (Arabic numerals, not Roman) and "Woodstock, Vermont" (not Burlington).

---

## Images

All in `prototype/images/`. Copy to `public/images/`:

| File | Used on |
|---|---|
| `logo-moose.png` | Nav (optional moose mark beside wordmark) |
| `hero.jpg` | Home hero (video poster) |
| `justin.jpg`, `stephen.jpg` | Home Team + Who We Are bios |
| `on-the-river-inn.jpg` | Home Locations card 1 |
| `hideaway-inn.webp` | Home Locations card 2 |
| `who-we-are-hero.jpg` | Who We Are page hero |
| `how-we-think-hero.jpg` | How We Think page hero |
| `our-focus-hero.jpg` | Our Focus page hero |
| `characteristics-hero.jpg` | Our Focus → Characteristics backdrop |
| `for-owners-hero.jpg` | For Owners page hero |
| `contact-hero.jpg` | Contact page hero |
| `cornell-graduation.jpg`, `officiating-wedding.jpg`, `cape-weekend.jpg` | Who We Are → Together |
| `closing-with-lawyer.jpg`, `mountaineer-bonfire.jpg`, `cape-cod-dock.jpg` | Who We Are → In the field gallery |

When using `next/image`, set explicit width/height (or `fill` with sized parent). Set `priority` only on the home hero. Use `placeholder="blur"` if generating blur data is straightforward.

The home hero `<video>` element should be present even though there's no `videos/hero.mp4` file in this handoff — leave a TODO if no video exists yet, and fall back to the poster image.

---

## What to ignore from the prototype

- **`tweaks-panel.jsx`** — design-time only. Do not port.
- **`site-app.jsx`** Tweaks panel rendering and `TWEAK_DEFAULTS` block — design-time only. Use the values as starting defaults; do not implement runtime tweaking in production.
- **Hash-based routing** (`#/who-we-are`) — replace with proper Next.js routing.
- **Babel-standalone runtime** — production uses Next.js's compiler.

---

## Deployment

The user has an **existing Vercel account** and wants this deployed there. The previous Vercel deployment is being replaced.

1. Initialize git in the project, push to a new GitHub repo (the user has GitHub).
2. In Vercel: connect the new repo, configure the same custom domain that the previous deployment used.
3. After verifying the build works on Vercel preview, the user will switch the production domain over.

Do not delete the old Vercel project until the new one is confirmed live.

If the existing Vercel project is named something like `long-trail-partners` or `ltp-site`, this can either replace its source repo or be a fresh project (user's call — ask if unclear).

---

## Acceptance criteria

A successful build:

1. Six routes render with all copy and images matching the prototype exactly.
2. Mobile (375px), tablet (768px), and desktop (1440px) all render cleanly.
3. Lighthouse score ≥ 95 on all four metrics for the home page.
4. Contact form submits successfully (or has a clear TODO for the email integration).
5. Deploys cleanly to Vercel.
6. No console errors or warnings.

---

## Recommended workflow

1. Open `prototype/Long Trail Partners.html` in a browser. Click through every page.
2. Read this README end-to-end.
3. Read `prototype/site-styles.css` — establish the tokens.
4. Read `prototype/site-shell.jsx` — build Nav and Footer first.
5. Read `prototype/page-home.jsx` — build Home next.
6. Read `prototype/page-interior.jsx` — build the 5 interior pages.
7. Test against the prototype side-by-side as you go.
8. Push to GitHub, connect to Vercel, verify the preview, then ask the user to flip the production domain.
