# Synco — site vitrine

Site de Synco (Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router),
construit à partir du design Artifacts « Synco — Landing page ».

## Démarrer

Le projet utilise [Bun](https://bun.sh).

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # vérification TypeScript + build de production dans dist/
```

## Pages

| Route            | Contenu                                                         |
| ---------------- | --------------------------------------------------------------- |
| `/`              | Accueil, Technologie, Tarif, FAQ, footer (`#contact`)           |
| `/presentation`  | Scrollytelling : le mock-up de l'application se construit au défilement |
| `/configurateur` | Estimation du prix de l'offre Équipe (utilisateurs, stockage, modules) |

## Organisation

```
src/
  components/   Header, Footer, Layout, ScrollToHash, icônes SVG
  pages/        Home, Presentation, Configurateur
  sections/
    home/         Hero, Technology, Pricing, Faq
    presentation/ app-mockup.html + presentation.css (mock-up animé repris du design)
  data/         site.ts (liens, nav, footer), faq.ts
  lib/          pricing.ts (grille tarifaire + calcul de l'estimation)
  index.css     tokens de design (couleurs, polices) pour Tailwind
public/brand/   logo, favicon, bannière
```

- Les textes entre crochets (`[Logo partenaire]`, `[E-mail]`, `[Présentation workspace]`…) sont
  des emplacements à compléter, repris tels quels du design.
- Les URL de connexion / inscription et des réseaux sociaux sont dans `src/data/site.ts`.
- Les prix se modifient à un seul endroit : `src/lib/pricing.ts` (utilisés par la page Tarif
  et le configurateur).
- En production, le serveur doit renvoyer `index.html` pour toutes les routes (fallback SPA).

## Docker

`Dockerfile` construit le site avec Bun puis le sert avec nginx (`nginx.conf` : fallback SPA,
cache long sur `/assets/`). Le workflow `.github/workflows/docker.yml` pousse l'image
`ghcr.io/silvercore-git/synco-www` à chaque push sur `main` ou tag `v*` (secrets `GHCR_USER`
et `GHCR_TOKEN` requis).

```bash
docker build -t synco-www .
docker run -p 8080:80 synco-www   # http://localhost:8080
```
