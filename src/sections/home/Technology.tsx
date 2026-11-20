import { ArrowRightIcon } from '../../components/icons';

const e2eeCards = [
  { title: 'Chiffré sur votre appareil', text: 'Vos messages sont chiffrés avant de quitter votre appareil.' },
  { title: 'Illisible pour nos serveurs', text: 'Synco ne peut pas lire le contenu de vos échanges.' },
  {
    title: 'Sessions P2P éphémères',
    text: 'Pour les sujets les plus sensibles, les données ne passent pas par nos serveurs de stockage.',
  },
];

const tocLinks = [
  { href: '#technologie', label: 'Chiffrement de bout en bout', active: true },
  { href: '#p2p', label: 'Sessions P2P' },
  { href: '#hebergement', label: 'Hébergement' },
];

const card = 'box-border border border-line-strong p-7';

export default function Technology() {
  return (
    <section
      id="technologie"
      className="mx-auto flex max-w-[1440px] scroll-mt-4 flex-wrap gap-y-8 pt-12 pb-16 sm:gap-y-12 sm:pt-16 sm:pb-28"
    >
      {/* Sous lg : pleine largeur, au-dessus du contenu (les pastilles ne sont jamais dans une colonne étroite). */}
      <div className="box-border flex-[1_1_100%] px-6 sm:px-10 lg:max-w-[320px] lg:flex-[1_1_320px]">
        {/* Sous lg : rangée de pastilles qui défile horizontalement. À partir de lg : sommaire vertical (design). */}
        <nav
          aria-label="Technologie"
          className="-mx-6 flex gap-2 overflow-x-auto px-6 [scrollbar-width:none] sm:-mx-10 sm:px-10 lg:sticky lg:top-6 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-line lg:px-0"
        >
          {tocLinks.map((l) =>
            l.active ? (
              <a
                key={l.href}
                href={l.href}
                className="flex shrink-0 items-center justify-between gap-3 border border-accent px-3.5 py-2 text-sm font-medium text-accent lg:border-0 lg:border-b lg:border-line lg:py-3.5 lg:pr-0 lg:pl-[18px] lg:text-fg"
              >
                {l.label}
                <ArrowRightIcon className="hidden lg:block" />
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="shrink-0 border border-line-strong px-3.5 py-2 text-sm text-muted lg:border-0 lg:py-3.5 lg:pr-0 lg:pl-[18px]"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
      </div>

      <div className="box-border flex min-w-0 max-w-[1120px] flex-[999_1_560px] flex-col px-6 sm:px-16">
        <h2 className="m-0 mb-10 max-w-[1000px] font-display text-[34px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-5xl">
          Nous chiffrons vos messages. <span className="text-[#9a9aa2]">Vous seuls les lisez.</span>
        </h2>
        <p className="m-0 mb-10 max-w-[640px] text-base sm:mb-12 leading-[1.75] text-muted">
          Beaucoup de fuites de données commencent sur un serveur qui stocke les messages en clair. Avec le
          chiffrement de bout en bout, vos messages sont chiffrés sur votre appareil : seuls vous et vos
          destinataires peuvent les lire. Même en cas d’intrusion sur nos serveurs, les contenus restent illisibles.
        </p>

        <div id="p2p" className="mb-14 sm:mb-20 grid scroll-mt-6 grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
          {e2eeCards.map((c) => (
            <div key={c.title} className={`${card} min-h-[166px]`}>
              <h3 className="m-0 mb-3.5 text-lg font-medium">{c.title}</h3>
              <p className="m-0 text-[13px] leading-[1.7] text-muted">{c.text}</p>
            </div>
          ))}
        </div>

        <h2
          id="hebergement"
          className="m-0 mb-8 scroll-mt-6 font-display text-[32px] font-semibold tracking-[-0.02em]"
        >
          Où sont vos données ?
        </h2>
        <p className="m-0 mb-8 text-base text-muted sm:mb-12">Notre architecture vous laisse le choix de l’hébergement.</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-4">
          <div className={`${card} min-h-[172px]`}>
            <h3 className="m-0 mb-3.5 text-lg font-medium">Sur votre serveur</h3>
            <p className="m-0 text-[13px] leading-[1.7] text-muted">
              Hébergez la base de données sur votre propre infrastructure. Vous gardez la maîtrise totale de vos
              données.
            </p>
          </div>
          <div className={`${card} min-h-[172px]`}>
            <h3 className="m-0 mb-3.5 text-lg font-medium">Infrastructure Silvercore</h3>
            <p className="m-0 mb-3 text-[13px] leading-[1.7] text-muted">
              Vos données sont hébergées par Silvercore, sur une infrastructure située en France.
            </p>
            <p className="m-0 font-mono text-[11px] text-subtle">[*] Hébergement en France.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
