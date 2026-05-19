# AIGC Research · Homepage

Single-page Astro site for the AIGC Research / AI4C team.
Live: https://aigcresearch.github.io

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve dist/
```

## Stack

- Astro 4 (static)
- Vanilla TypeScript + CSS, no UI framework
- Canvas2D particle field (Hero)
- IntersectionObserver scroll reveal
- GitHub Actions → GitHub Pages

## Content

All copy lives in `src/data/content.zh.ts` and `src/data/content.en.ts`. Both files share the schema in `src/data/types.ts`.
