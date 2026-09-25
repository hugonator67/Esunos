# ESUNOS — Landing page

The subscriber-capture landing page for **ESUNOS** (esunos.com), a network of
newsletters. The first title is *The ESUNOS Guide to Infrastructure*.

Static site — plain HTML/CSS with a tiny bit of JavaScript for the signup form.
No framework, no build step. Deploys to Netlify from a GitHub repo as-is.

## What this is grounded in

Every design and content decision traces to a reference — nothing was invented:

- **`ESUNOS — Website Sketch.pdf`** (your sketch, page 1) — the primary layout and
  copy spec. Colours were sampled directly from the render (`#f26b1c` orange,
  `#191ed0` blue, `#1a1a1a` ink, `#f9f8f4` warm band).
- **`esunos-website-build-audit-2026-09-21.md`** — single-field email form, colour
  discipline (~90% neutral / ~10% accent, no large orange fills), legal/consent
  posture, SEO + social-share basics, performance, security headers.
- **Mobbin** (real shipping UI, referenced not copied) — the featured-lead + right
  rail pattern (Ghost, Assembly), the category-kicker dispatch grid (Codecademy,
  Assembly), the inline email hero (Teak, Intercom, Kajabi, beehiiv), and the
  three-card row (Hers).

## Structure

```
esunos-site/
├── index.html          # landing page (semantic HTML; every text box has a positional data-ref code)
├── issue-01.html       # first issue
├── about.html          # about page
├── css/styles.css      # design system + layout (all tokens in :root)
├── js/subscribe.js     # signup form handler — PLACEHOLDER, not wired to a provider
├── assets/
│   ├── logo.png         # your ESUNOS logo, cropped; disc unified to #f26b1c (header)
│   ├── logo-light.png   # reversed (white-text) logo for the dark footer
│   ├── favicon.svg      # simplified sun-disc mark
│   └── og-image.png     # social-share image (1200×630) — placeholder, replace later
├── netlify.toml         # publish root + security/caching headers
├── robots.txt
├── sitemap.xml
├── CONTENT.md           # explains the [X0000] text-code system
├── CODES.xlsx / .csv    # tracker: every code → current text, with a blank "New text" column
├── inactive/            # parked markup (e.g. network-band.txt) removed from live pages
└── README.md
```

## Run it locally

No dependencies. Any static server works:

```bash
npx serve .
```

Then open the printed `http://localhost:…` URL. (Opening `index.html` directly via
`file://` also works, but a server matches production more closely.)

## Deploy on Netlify

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from Git**, pick the repo.
3. Build command: *(leave empty)*. Publish directory: `.` (already set in
   `netlify.toml`).
4. Add the custom domain `esunos.com` and let Netlify provision HTTPS.

## Wire up the email provider (before launch)

The signup form is a **clearly-marked placeholder** — it validates the email and
shows the success state, but **sends nothing**. There is no endpoint or API key in
this repo, by design.

To connect Buttondown / Kit / Resend / beehiiv, either:

- **Simplest:** point the `<form>` at your provider's hosted form `action` URL and
  delete the JS handler; or
- **Keep the styling/AJAX:** replace the body of `submitToProvider()` in
  `js/subscribe.js` with a `fetch()` to the provider's public subscribe endpoint.

> ⚠️ Never commit secret API keys — this code ships to the browser. Use the
> provider's public embed/form action, or a Netlify Function as a proxy for
> anything that must stay secret. `.env*` is already git-ignored.

There are **two** forms (hero + closing band); both share the handler.

## Editing the copy

All wording is **draft**. Each text box has a **positional code** in a `data-ref`
attribute, in the format `[X0000]` — page letter (`L`anding / `I`ssue / `A`rchive /
`O`about) + across-coordinate + down-coordinate. See **`CONTENT.md`** for the full
explanation, and **`CODES.xlsx` / `CODES.csv`** for the live code → text tracker
(with a blank “New text” column to fill). To change something, reference its code
(e.g. "`[L0608]` → *new headline*") — find it with:

```bash
grep -n "L0608" index.html
```

Logos and buttons/CTAs are intentionally left uncoded.

## Brand tokens (in `css/styles.css` `:root`)

| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#1a1a1a` | text, utility bar, footer |
| `--paper` | `#ffffff` | main background |
| `--paper-warm` | `#f9f8f4` | warm section bands |
| `--orange` | `#f26b1c` | **brand** — logo dot + CTA button fills (with ink text) |
| `--orange-deep` | `#b8560d` | orange **text** on light backgrounds (accessibility, see below) |
| `--blue` | `#191ed0` | secondary accent, used sparingly |

Fonts: **Times New Roman** (`--serif`) for all editorial text; a neutral grotesque
(`--sans`, Helvetica Neue / Arial) for small uppercase UI labels — the split you
approved. Both are system fonts, so there are **no webfonts to download**.

## Accessibility & the two-orange decision

Semantic landmarks, one `<h1>`, a skip link, visually-hidden form labels,
`aria-live` success messages, visible focus rings, `prefers-reduced-motion`
support, and a colour scheme where category names never rely on colour alone.

**One deliberate deviation you should know about:** the brand orange `#f26b1c` only
reaches ~3:1 contrast as small text on white, which fails WCAG AA. So orange is used
at full brand strength for **fills** (buttons use ink text on orange ≈ 6.9:1) and on
the dark utility bar, but small orange **text** on light backgrounds (eyebrows,
category kickers, issue numerals) uses a slightly deeper orange `--orange-deep`
(`#b8560d`, ≈ 4.8:1). If you'd rather match the sketch pixel-for-pixel and accept the
lower contrast, set `--orange-deep: #f26b1c;` in `css/styles.css` — one line.

## Known placeholders (intentional — replace before or after launch)

- **Signup provider** — not wired (see above).
- **Images** — the featured photo is a captioned placeholder box; supply real art.
- **`assets/og-image.png`** — auto-generated placeholder; swap for final artwork.
- **About copy** — the About page wording is draft; edit via its `O####` codes.
- **Network band** — removed for now; full markup parked in `inactive/network-band.txt`.
- **Footer social links** — Instagram / Contact currently point to the About page;
  repoint to real social URLs when those exist.

The header/footer use **your supplied logo** (`assets/logo.png` / `logo-light.png`),
cropped from the original with the sun-disc recoloured from `#ff741f` to the site
orange `#f26b1c` per your "match the logo to the sketch" decision. To keep the
logo's original brighter orange instead, drop your source file back in and skip the
recolour — or if you have a **vector (SVG)** logo, swap it in for crisper scaling.
