const partners = ['[Logo partenaire]', '[Logo partenaire]', '[Logo partenaire]'];

const figures = [
  { fig: 'Fig. 1', value: 'E2EE', caption: 'Chiffrement de bout en bout' },
  { fig: 'Fig. 2', value: 'EU', caption: 'Hébergement en France, chez Silvercore' },
  { fig: 'Fig. 3', value: '...', caption: '...' },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      // Occupe toute la hauteur de l'écran, moins l'en-tête (74px + 1px de bordure).
      className="mx-auto flex min-h-[calc(100svh-75px)] max-w-[1440px] scroll-mt-4 flex-wrap border-b border-line"
    >
      {/* Partenaires */}
      <div
        aria-label="Partenaires"
        // Sous lg : pleine largeur, sous le titre (jamais en colonne étroite à droite).
        className="order-2 grid min-w-[240px] flex-[1_0_100%] grid-cols-3 lg:flex-[1_0_25%] border-t border-line lg:order-none lg:grid-cols-1 lg:grid-rows-[repeat(3,minmax(0,1fr))] lg:border-t-0 lg:border-r"
      >
        {partners.map((p, i) => (
          <div
            key={i}
            className="flex min-h-[96px] items-center justify-center border-line text-xs text-subtle not-last:border-r lg:not-last:border-r-0 lg:not-last:border-b"
          >
            {p}
          </div>
        ))}
      </div>

      {/* Titre + chiffres clés */}
      <div className="grid min-w-[min(560px,100%)] flex-[1_1_75%] lg:grid-rows-[repeat(3,minmax(0,1fr))]">
        <div className="flex items-end border-b border-line px-6 pt-[clamp(48px,10svh,120px)] pb-[clamp(32px,6svh,72px)] sm:px-16 lg:row-span-2">
          <h1 className="m-0 max-w-[820px] font-display text-[clamp(2.25rem,min(4vw,7svh)+1rem,4.5rem)] leading-[1.05] font-bold tracking-[-0.035em] text-balance hyphens-auto">
            La collaboration d’équipe sans compromis sur la sécurité.
          </h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(180px,100%),1fr))] content-start gap-8 px-6 pt-8 pb-16 sm:px-16">
          {figures.map((f) => (
            <div key={f.fig} className="flex flex-col gap-3">
              <span className="font-mono text-[11px] text-subtle">{f.fig}</span>
              <span className="font-display text-[40px] leading-none font-medium">{f.value}</span>
              <span className="text-[13px] text-muted">{f.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
