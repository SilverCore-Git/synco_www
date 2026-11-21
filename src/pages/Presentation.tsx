import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import mockupHtml from '../sections/presentation/app-mockup.html?raw';
import '../sections/presentation/presentation.css';

/**
 * Page « Présentation » : scrollytelling.
 * Le mock-up de l'application (à gauche) se construit au fil du défilement, piloté par la
 * variable CSS --p (progression en « blocs » de texte). Chaque élément du mock-up porte
 * --s (début) / --e (fin) et s'anime via les classes .sx-* de presentation.css.
 */

const steps = [
  { kicker: '01 / 06 · Workspace', title: '[Présentation workspace]', text: '[Description workspace]' },
  { kicker: '02 / 06 · Modules', title: '[Présentation module]', text: '[Description module]' },
  { kicker: '03 / 06 · Salons', title: '[Présentation salon]', text: '[Description salon]' },
  { kicker: '04 / 06 · Membres actifs', title: '[Présentation Membre Actif]', text: '[Description Membre Actif]' },
  { kicker: '05 / 06 · Messages privés', title: '[Présentation Message privé]', text: '[Description Message privé]' },
  { kicker: '06 / 06 · Tableau de bord', title: '[Présentation Tableau de bord]', text: '[Description Tableau de bord]' },
];

const SCREEN_W = 1440;
const SCREEN_H = 900;
/** À partir de cette largeur (lg), scène et texte sont côte à côte. */
const DESKTOP_QUERY = '(min-width: 1024px)';

/**
 * Retard du mock-up sur le texte, en blocs. Chaque étape du mock-up commence vers i − 0,09 alors
 * qu'un texte centré n'entre à l'écran que vers i + 0,13 : sans retard, l'élément se construisait
 * 200 à 300 px avant que son titre soit visible. Le retard monte progressivement entre p = 0,5 et
 * 0,9, pour que l'étape 01 reste construite telle quelle à l'arrivée sur la page (p ≈ 0,3).
 */
const MOCKUP_LAG = 0.2;
const mockupP = (p: number) => p - MOCKUP_LAG * Math.max(0, Math.min(1, (p - 0.5) / 0.4));

type Vars = CSSProperties & Record<`--${string}`, string | number>;

export default function Presentation() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const lastTextRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState({ p: -1, scale: 0.62, top: 24, lead: 0, headTop: 0, tailTop: 0, tailPad: 0 });

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const sec = sectionRef.current;
      const stage = stageRef.current;
      if (!sec || !stage) return;
      const vh = window.innerHeight;
      // Sous lg, la scène reste fixée en haut au-dessus du texte : elle ne doit pas dépasser la moitié
      // de l'écran (téléphone à l'horizontale), sinon le texte qui défile dessous n'est jamais visible.
      const oneColumn = !window.matchMedia(DESKTOP_QUERY).matches;
      const maxH = (oneColumn ? vh * 0.5 : vh - 32) - 24;
      const scale = Math.max(0.2, Math.min(stage.clientWidth / SCREEN_W, maxH / SCREEN_H));
      const stageH = SCREEN_H * scale + 24;
      const top = Math.max(16, Math.round((Math.min(vh, 1000) - stageH) / 2));
      // Le sticky descend la scène dès l'arrivée (top > position naturelle sous le header) :
      // le premier texte reçoit ce même retrait pour démarrer au niveau du haut du mock-up.
      const secTop = sec.getBoundingClientRect().top + window.scrollY;
      const lead = oneColumn ? 0 : Math.max(0, Math.round(top - secTop));
      // Premier bloc : son texte reste sticky (haut du mock-up en deux colonnes, juste sous la scène
      // en une colonne) jusqu'à son fondu de sortie. En haut d'un bloc de 150vh, il défilait hors de
      // l'écran à mi-étape et laissait la colonne vide jusqu'au texte 02. Pas de sticky si le texte
      // ne tient pas sous la scène (téléphone à l'horizontale).
      const headH = firstTextRef.current?.offsetHeight ?? 0;
      const pin = oneColumn ? stage.offsetHeight + 24 : top + 12;
      const headTop = pin + headH <= vh - 16 ? pin : 0;
      // Dernier bloc : son texte devient sticky, aligné sur le haut du mock-up (même règle que le
      // premier bloc : 12 px = py-3 de la scène), et le bloc reçoit sous lui un espace (tailPad) tel
      // que texte et scène se décrochent au même moment. Sans ça, le texte continuait de monter
      // pendant que la scène restait fixe, puis repartait avec elle, trop haut.
      const textH = lastTextRef.current?.offsetHeight ?? 0;
      const room = Math.round(stageH - 12 - textH);
      const tail = !oneColumn && room >= 40;
      const tailTop = tail ? top + 12 : 0;
      const tailPad = tail ? room : 0;
      const bh = firstBlockRef.current?.offsetHeight ?? vh;
      // Référence = haut de la colonne de texte. En deux colonnes c'est le haut de la section ; en une
      // colonne, le texte commence sous la scène, et mesurer depuis la section décalait tout de ~0,27.
      const ref = textColRef.current ?? sec;
      let p = (vh * 0.55 - ref.getBoundingClientRect().top) / Math.max(1, bh);
      p = Math.max(-1, Math.min(7, Math.round(p * 200) / 200));
      setView((s) =>
        p !== s.p ||
        Math.abs(scale - s.scale) > 0.001 ||
        top !== s.top ||
        lead !== s.lead ||
        headTop !== s.headTop ||
        tailTop !== s.tailTop ||
        tailPad !== s.tailPad
          ? { p, scale, top, lead, headTop, tailTop, tailPad }
          : s,
      );
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    measure();
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="visite"
      ref={sectionRef}
      style={{ '--p': view.p } as Vars}
      className="mx-auto box-border flex max-w-[1440px] flex-wrap items-start gap-x-14 px-4 pb-[min(18vh,160px)] sm:px-8"
    >
      <h1 className="sr-only">Présentation de Synco</h1>

      {/* Scène : l'application qui se construit */}
      <div
        ref={stageRef}
        className="stage sticky z-[2] flex w-full min-w-0 flex-col gap-3.5 bg-bg py-3 lg:w-auto lg:flex-[999_1_600px]"
        style={{ top: view.top, '--p': mockupP(view.p) } as Vars}
        aria-hidden="true"
      >
        {/* Largeur = celle de l'application réduite : centrée quand la hauteur limite l'échelle. */}
        <div
          className="relative mx-auto max-w-full"
          style={{ width: Math.round(SCREEN_W * view.scale), height: Math.round(SCREEN_H * view.scale) }}
        >
          <div
            className="sx sx-fade absolute top-0 left-0"
            style={{ '--s': -0.45, width: SCREEN_W, height: SCREEN_H, zoom: view.scale } as Vars}
            dangerouslySetInnerHTML={{ __html: mockupHtml }}
          />
        </div>
      </div>

      {/* Titres qui défilent */}
      {/* Sous lg (1024 px) : une seule colonne, le texte défile sous la scène. */}
      <div ref={textColRef} className="w-full min-w-0 max-w-[440px] lg:w-auto lg:flex-[1_1_300px]">
        {steps.map((s, i) => {
          const first = i === 0;
          const last = i === steps.length - 1;
          const vars: Vars = { '--s': i - 0.3, '--d': 0.25 };
          if (!last) vars['--e'] = i + 0.82;
          // Premier bloc : texte en haut, au niveau du haut du mock-up, pour être lu dès l'arrivée
          // (centré dans un bloc de 150vh, il tombait en bas de l'écran). En deux colonnes, son
          // retrait = décalage du sticky (view.lead) + py-3 de la scène.
          const align = first ? 'justify-start pt-6 pb-10 lg:pt-3' : 'justify-center py-10';
          if (first && view.lead > 0) vars.paddingTop = view.lead + 12;
          const head = first && view.headTop > 0;
          const tail = last && view.tailPad > 0;
          // Même retrait en haut qu'en bas : le texte reste centré comme ceux des étapes 02 à 05, donc
          // il arrive au même moment de son étape (le seul padding du bas le faisait remonter).
          if (tail) {
            vars.paddingTop = Math.max(40, view.tailPad);
            vars.paddingBottom = view.tailPad;
          }
          const sticky = head || tail;
          const stickyTop = head ? view.headTop : view.tailTop;
          return (
            <div
              key={s.kicker}
              ref={first ? firstBlockRef : undefined}
              className={`scrolly-block sx sx-up box-border flex flex-col ${align}`}
              style={vars}
            >
              <div
                ref={first ? firstTextRef : last ? lastTextRef : undefined}
                className={`flex flex-col gap-3.5 sm:gap-[18px] ${sticky ? 'sticky' : ''}`}
                style={sticky ? { top: stickyTop } : undefined}
              >
                <p className="m-0 font-mono text-[13px] text-accent">{s.kicker}</p>
                <h2 className="m-0 font-display text-[30px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[44px]">{s.title}</h2>
                <p className="m-0 text-[15px] leading-[1.65] text-[#b4b4bc] sm:text-[17px]">{s.text}</p>
                {last && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      to="/#tarif"
                      className="inline-flex min-h-12 items-center bg-accent px-[22px] text-[15px] font-semibold text-ink hover:text-ink hover:brightness-110"
                    >
                      Voir les tarifs
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
