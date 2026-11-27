# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Synco** (end-to-end encrypted team collaboration app, hosted in France by Silvercore). All UI copy is in **French**. Stack: Vite 6 + React 19 + TypeScript (strict) + Tailwind CSS v4 + React Router 7. No backend, no tests.

The site is a port of an Artifacts design canvas ("Synco — Landing page", dark theme). When in doubt about look or copy, the design is the source of truth.

## Commands

The package manager is **Bun** (`bun.lock`). Don't use npm or create a `package-lock.json`.

```bash
bun install
bun run dev      # dev server on http://localhost:3000
bun run build    # tsc --noEmit (type-check) then vite build → dist/
bun run lint     # type-check only
bun run preview  # serve dist/
bun add <pkg>    # add a dependency (bun add -d for dev)
```

There is no test suite; `bun run build` is the verification step.

## Architecture

- **Routing** (`src/App.tsx`): `/`, `/presentation` and `/contact` render inside `components/Layout` (Header + Footer + `ScrollToHash`). `/configurateur` is a full-viewport page outside the layout that renders its own `Header` and no footer.
- **In-page anchors across routes**: nav links are `/#accueil`, `/#tarif`, `/#faq`; Contact is its own page `/contact` (`pages/Contact.tsx`, port of the « Contact · V10 » artboard of the « Synco — Page contact » design). `ScrollToHash` scrolls to the hash after each navigation, otherwise to the top. Sections need `scroll-mt-*` so the target isn't hidden.
- **Design tokens** are declared once in `src/index.css` under `@theme` (`bg`, `line`, `line-strong`, `fg`, `muted`, `subtle`, `accent` = `#22d89a`, `ink`, fonts `display` = Stack Sans Notch, `mono` = JetBrains Mono) and used as Tailwind classes (`text-accent`, `border-line`, `font-display`…). The fonts load from Google Fonts in `index.html`.
- **Single sources of truth**:
  - `src/lib/pricing.ts` holds all prices, storage tiers, billing discounts, modules and the `estimate()` / `eur()` helpers. The home Pricing section and the configurator both read from it. Change prices only here. `PRICING_ENABLED` (currently `false`) replaces the "Faire une estimation" (Équipe) button of the Pricing section with a dashed, non-clickable "Non disponible". The "Nous contacter" (Dédié, « Sur devis ») button does not depend on it, only on `CONTACT_ENABLED`.
  - `src/data/site.ts` holds nav items, external URLs (`links.signup` is used by the "Inscription" nav button and the "Créer mon organisation" buttons; `links.login` by "Se connecter") and the footer columns. `CONTACT_ENABLED` (currently `true`) makes every link to `/contact`, the "Contact" nav item included, render through `components/ContactLink` as a greyed, non-clickable span (still visible). Use `ContactLink` for any new contact link. The page itself stays reachable by URL. `contact` holds the page's e-mail (placeholder), form topics, steps and `formEndpoint` (empty = no real send, the confirmation screen just shows).
  - `src/data/faq.ts` holds the FAQ entries.
- **Presentation page (scrollytelling)** is the non-obvious part:
  - `sections/presentation/app-mockup.html` is a static HTML mock-up of the Synco app, copied verbatim from the design. `pages/Presentation.tsx` imports it with `?raw` and injects it via `dangerouslySetInnerHTML`. It is not JSX on purpose, so it stays identical to the design.
  - `pages/Presentation.tsx` computes a scroll progress `p` (in units of text-block height, measured from the top of the text column) and sets it as CSS var `--p` on the section. The stage overrides `--p` with `mockupP(p)`, i.e. the mock-up runs `MOCKUP_LAG` (0.2) behind the text after step 01, so each step builds once its text is on screen. The first and last text blocks are sticky (aligned on the top of the mock-up). Every animated element in the mock-up has the class `.sx` plus `--s` (start) / `--e` (end) / `--d` (ramp), and `presentation.css` derives `--v` (0→1) from them. The `.sx-fade/-up/-left/-pop/-gw/-gh/-bar/-ry` classes then animate from `--v`.
  - Animation pacing variables (`--sx-dur`, `--sx-fade-dur`, `--sx-frame-dur`, `--sx-step`, `--sx-step-mobile`) are on `:root` near the top of `presentation.css`.
  - `src/index.css` has `@source not` for `app-mockup.html`, so Tailwind does not generate utilities from the mock-up's own class names (`block`, `card`, `bar`…). Keep that exclusion. The text blocks use `.scrolly-block`, not `.block`, for the same reason.

## Conventions

- Bracketed copy such as `[Logo partenaire]`, `[E-mail]` or `[Présentation workspace]` marks placeholders carried over from the design. Keep them visible until real content is provided; don't invent marketing copy or figures.
- Icons are inline SVG components in `components/icons.tsx` (no icon library). The mock-up alone uses a Bootstrap Icons font subset from `public/fonts/`.
- Brand assets live in `public/brand/` (`logo.webp`, `favicon.webp`, `banner-light.webp`).
- Deployment needs an SPA fallback (serve `index.html` for every route) so `/presentation` and `/configurateur` load on refresh.
