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

type Vars = CSSProperties & Record<`--${string}`, string | number>;

export default function Presentation() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const firstBlockRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState({ p: -1, scale: 0.62, top: 24 });

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const sec = sectionRef.current;
      const stage = stageRef.current;
      if (!sec || !stage) return;
      const vh = window.innerHeight;
      const scale = Math.max(0.2, stage.clientWidth / SCREEN_W);
      const stageH = SCREEN_H * scale + 24;
      const top = Math.max(16, Math.round((Math.min(vh, 1000) - stageH) / 2));
      let p: number;
      if (vh > 1500) {
        p = 7;
      } else {
        const bh = firstBlockRef.current?.offsetHeight ?? vh;
        p = (vh * 0.55 - sec.getBoundingClientRect().top) / Math.max(1, bh);
      }
      p = Math.max(-1, Math.min(7, Math.round(p * 200) / 200));
      setView((s) =>
        p !== s.p || Math.abs(scale - s.scale) > 0.001 || top !== s.top ? { p, scale, top } : s,
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
      {/* Scène : l'application qui se construit */}
      <div
        ref={stageRef}
        className="stage sticky z-[2] flex w-full min-w-0 flex-col gap-3.5 bg-bg py-3 lg:w-auto lg:flex-[999_1_600px]"
        style={{ top: view.top }}
        aria-hidden="true"
      >
        <div className="relative" style={{ height: Math.round(SCREEN_H * view.scale) }}>
          <div
            className="sx sx-fade absolute top-0 left-0"
            style={{ '--s': -0.45, width: SCREEN_W, height: SCREEN_H, zoom: view.scale } as Vars}
            dangerouslySetInnerHTML={{ __html: mockupHtml }}
          />
        </div>
      </div>

      {/* Titres qui défilent */}
      {/* Sous lg (1024 px) : une seule colonne, le texte défile sous la scène. */}
      <div className="w-full min-w-0 max-w-[440px] lg:w-auto lg:flex-[1_1_300px]">
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          const vars: Vars = { '--s': i - 0.3, '--d': 0.25 };
          if (!last) vars['--e'] = i + 0.82;
          return (
            <div
              key={s.kicker}
              ref={i === 0 ? firstBlockRef : undefined}
              className="scrolly-block sx sx-up box-border flex flex-col justify-center gap-3.5 py-10 sm:gap-[18px]"
              style={vars}
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
          );
        })}
      </div>
    </section>
  );
}
