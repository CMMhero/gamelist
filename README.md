# H320 Gamelist

A fast front end for browsing video games, powered by the RAWG database
API. Curated rows on the home page, an infinite-scrolling browse view
with real filters, palette search, and rich detail pages.

React 18, Vite 5, Tailwind, Radix and shadcn-style primitives, React
Router, cmdk for the command palette.

## Run it

```bash
npm install
npm run dev
```

You need a RAWG key in `.env` as `VITE_RAWG_API_KEY` (free at
rawg.io/apidocs). `npm run build` bundles, `npm run preview` serves it,
`npm run lint` lints.

## What it does

- Home with a hero plus curated rows by popularity, score, and release
  date. View All links jump into browse with that ordering applied.
- Browse view with infinite scroll, multi-select genre, platform, and
  store filters, ordering options, and three saved layouts (grid, cards,
  list) that persist.
- Global search as a command palette (Ctrl or Cmd+S), debounced, with
  thumbnail results.
- Detail pages with backdrop art, ratings, platforms, stores, a
  screenshot gallery with lightbox, and store links.
- Skeleton states everywhere data loads, dark and light themes, and a
  mobile nav sheet.

## Notes

There is no data layer here. Plain fetch plus hooks per view, which is
plenty for a read-only catalog. Game pages fire four RAWG requests in
parallel. Ignore the unused Gamespot key in `.env` if you see one.
