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
      className="mx-auto flex max-w-[1440px] scroll-mt-4 flex-wrap border-b border-line lg:min-h-[843px]"
    >
      {/* Partenaires */}
      <div
        aria-label="Partenaires"
        className="order-2 grid min-w-[240px] flex-[1_0_25%] grid-cols-3 border-t border-line lg:order-none lg:grid-cols-1 lg:grid-rows-[repeat(3,minmax(160px,1fr))] lg:border-t-0 lg:border-r"
      >
        {partners.map((p, i) => (
          <div
            key={i}
            className="flex min-h-[120px] items-center justify-center border-line text-xs text-subtle not-last:border-r lg:not-last:border-r-0 lg:not-last:border-b"
          >
            {p}
          </div>
        ))}
      </div>

      {/* Titre + chiffres clés */}
      <div className="grid min-w-[min(560px,100%)] flex-[1_1_75%] lg:grid-rows-[repeat(3,minmax(0,1fr))]">
        <div className="flex items-end border-b border-line px-6 pt-24 pb-14 sm:px-16 sm:pt-[120px] sm:pb-[72px] lg:row-span-2">
          <h1 className="m-0 max-w-[820px] font-display text-[44px] leading-[1.05] font-bold tracking-[-0.035em] sm:text-[72px]">
            La collaboration d’équipe sans compromis sur la sécurité.
          </h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] content-start gap-8 px-6 pt-8 pb-16 sm:px-16">
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
