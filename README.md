# portfolio

Personal portfolio for **Ramshri Mohapatra** — Data Analyst, London.
Dark / technical aesthetic, warm first-person voice, terminal motif.
Next.js static export → GitHub Pages.

Live: <https://ramshri-mohapatra.github.io/Portfolio/>

## Stack
- **Next.js 15** (App Router, `output: 'export'` static site)
- **TypeScript** + **Tailwind CSS** (design tokens as CSS variables)
- **Framer Motion** (scroll reveals, hero typing, timeline draw — all reduced-motion aware)
- Self-hosted fonts via `next/font` (Space Grotesk / Inter / JetBrains Mono)

## Content
All copy, projects, timeline and links live in **`lib/content.ts`** — edit there,
nothing is duplicated in markup. Project card art is generated abstract SVG
(`components/ProjectVisual.tsx`); swap a card's `visual` for a real screenshot by
adding an `<img>` — no layout changes needed.

## Local development
```bash
npm install
npm run cv      # generates public/CV.pdf from the resume data
npm run dev     # http://localhost:3000
```

## Build (static export)
```bash
npm run build   # runs `npm run cv` first, then exports to ./out
```
The static site is written to `./out`.

## Deploying to GitHub Pages
1. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
   publishes automatically.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.

It deploys as a **project page**, so the site is served under `/Portfolio`.
That subpath is set by `NEXT_PUBLIC_BASE_PATH` in the workflow, and everything
in `/public` (CV, screenshots) is prefixed with it in `lib/content.ts` — Next
only auto-prefixes its own `/_next` assets.

### Moving to a custom domain later
Three things must change together, or the metadata will advertise a URL the
site isn't served from:
- `.github/workflows/deploy.yml` → `NEXT_PUBLIC_BASE_PATH: ""`
- `lib/content.ts` → `origin` = the new domain
- add `public/CNAME` containing the domain, point DNS at GitHub's apex `A`
  records (`185.199.108-111.153`), then enable **Enforce HTTPS**.

## Update the CV
Edit `scripts/generate-cv.mjs` (mirrors `CV.md`) and run `npm run cv`.
