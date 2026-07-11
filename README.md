# ramshri.dev — portfolio

Personal portfolio for **Ramshri Mohapatra** — Data Analyst & Engineer, London.
Built to the spec in [`PRD.md`](./PRD.md). Dark / technical aesthetic, warm
first-person voice, terminal motif. Next.js static export → GitHub Pages.

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
3. **Custom domain (`ramshri.dev`):** the `public/CNAME` file is already set.
   Add DNS records at your registrar:
   - Apex `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (or a `CNAME` on `www` → `ramshri-mohapatra.github.io`)
   Then enable **Enforce HTTPS** in Settings → Pages.

### Deploying to a project page instead (username.github.io/&lt;repo&gt;)
If you don't use the custom domain, set the base path so assets resolve:
- Edit `.github/workflows/deploy.yml` → `NEXT_PUBLIC_BASE_PATH: "/<repo-name>"`
- Delete `public/CNAME`.

## Update the CV
Edit `scripts/generate-cv.mjs` (mirrors `CV.md`) and run `npm run cv`.
