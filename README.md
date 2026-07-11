# shyan.xyz

Personal portfolio — a single-page, terminal-styled site.

- **Stack:** Next.js 14 (App Router) + Tailwind CSS + TypeScript
- **One page:** anchor sections (`#experience`, `#projects`, `#skills`, `#contact`); the old `/work`, `/projects`, `/contact`, `/blog` routes permanently redirect
- **All content** lives in a single typed file: [`lib/content.ts`](lib/content.ts)
- Dark-only, zero client-side JS (CSS-only interactions), system font stacks — no webfonts, no runtime dependencies beyond Next/React

```bash
npm install
npm run dev    # local dev
npm run build  # production build
```

Live at [shyan.xyz](https://shyan.xyz).
