import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { links, mainNav } from '../data/site';
import ContactLink from './ContactLink';

const navText = 'font-display text-xl font-medium';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { pathname, hash } = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const [mini, setMini] = useState(false);

  // Nav compacte (ordinateur) : visible dès que la nav principale a entièrement quitté l'écran.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setMini(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Le menu se ferme à chaque navigation (lien, bouton retour du navigateur…).
  useEffect(() => setOpen(false), [pathname, hash]);

  // Menu ouvert : Échap le ferme, la page derrière ne défile plus.
  useEffect(() => {
    if (!open) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') setOpen(false);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
    {/* Sur mobile, la nav reste fixée en haut ; sur ordinateur, elle défile et la nav compacte prend le relais. */}
    <header ref={headerRef} className="sticky top-0 z-50 shrink-0 border-b border-line bg-bg lg:relative">
      <nav
        aria-label="Navigation principale"
        className="relative z-10 flex min-h-[74px] w-full items-stretch justify-between bg-bg"
      >
        {/* Entre 1024 et 1280 px, espacements resserrés pour que la nav tienne sur une ligne. */}
        <div className="flex items-center gap-6 pl-4 sm:pl-8 xl:gap-10">
          <Link to="/#accueil" aria-label="Synco — accueil" className="flex items-center py-2 pr-6" onClick={close}>
            <img src="/brand/logo.webp" alt="Synco" className="block h-[30px] w-auto" />
          </Link>
          <div className="hidden flex-wrap items-center gap-x-7 gap-y-2 lg:flex xl:gap-x-10">
            {mainNav.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </div>
        </div>

        <div className="flex items-stretch">
          {/* Sous 1024 px, « Inscription » et « Se connecter » passent dans le menu déroulant. */}
          <a href={links.signup} className={`hidden items-center px-5 lg:flex xl:px-7 ${navText}`}>
            Inscription
          </a>
          <a
            href={links.login}
            className="hidden items-center bg-accent px-5 font-display xl:px-6 text-xl font-semibold text-ink hover:text-ink hover:brightness-110 lg:flex"
          >
            Se connecter
          </a>
          <button
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            className="flex w-[64px] items-center justify-center border-0 bg-transparent text-fg lg:hidden"
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <>
          {/* Fond assombri : le menu passe par-dessus la page, sans la faire descendre. */}
          <div aria-hidden="true" onClick={close} className="fixed inset-0 bg-black/60 lg:hidden" />
          <div
            id="menu-mobile"
            className="absolute inset-x-0 top-full z-10 flex max-h-[calc(100dvh-75px)] flex-col overflow-y-auto border-b border-line-strong bg-bg px-4 pb-5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)] sm:px-8 lg:hidden"
          >
            {mainNav.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} onClick={close} block />
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={links.signup}
                onClick={close}
                className="flex min-h-12 items-center justify-center border border-line-strong font-display text-lg font-medium"
              >
                Inscription
              </a>
              <a
                href={links.login}
                onClick={close}
                className="flex min-h-12 items-center justify-center bg-accent font-display text-lg font-semibold text-ink hover:text-ink hover:brightness-110"
              >
                Se connecter
              </a>
            </div>
          </div>
        </>
      )}
    </header>
    <MiniNav visible={mini} />
    </>
  );
}

/**
 * Nav compacte, sur ordinateur seulement : languette centrée, fixée en haut, avec les seuls liens.
 * Sa hauteur est --nav-offset (index.css), dont les ancres et les éléments sticky se décalent.
 */
function MiniNav({ visible }: { visible: boolean }) {
  const { pathname } = useLocation();
  const active = useActiveSection(pathname === '/' && visible);

  return (
    <nav
      aria-label="Navigation compacte"
      inert={!visible}
      className={`fixed top-0 left-1/2 z-40 hidden max-w-[calc(100vw-32px)] -translate-x-1/2 border border-t-0 border-line-strong bg-bg shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none lg:block ${
        visible ? 'translate-y-0' : '-translate-y-[calc(100%+12px)]'
      }`}
    >
      <div className="flex h-(--nav-offset) items-center gap-4 px-5">
        {mainNav.map((item) => (
          <NavItem key={item.to} to={item.to} label={item.label} compact active={item.to === `/#${active}`} />
        ))}
      </div>
    </nav>
  );
}

/** Section de l'accueil en cours de lecture : la dernière dont le haut a passé le tiers de l'écran. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (!enabled) return;
    const ids = mainNav.filter((i) => i.to.startsWith('/#')).map((i) => i.to.slice(2));
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight / 3;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);
  return enabled ? active : '';
}

function NavItem({
  to,
  label,
  onClick,
  block,
  compact,
  active,
}: {
  to: string;
  label: string;
  onClick?: () => void;
  block?: boolean;
  /** Nav compacte : texte plus petit, sur une ligne. */
  compact?: boolean;
  /** Section en cours de lecture (lien d'ancre de la nav compacte). */
  active?: boolean;
}) {
  const isPage = !to.includes('#');
  const cls = compact
    ? 'font-display text-lg font-medium whitespace-nowrap py-1.5'
    : `${navText} py-3 ${block ? 'border-b border-line' : ''}`;
  if (to === '/#contact') {
    return <ContactLink className={cls}>{label}</ContactLink>;
  }
  if (isPage) {
    return (
      <NavLink to={to} onClick={onClick} className={({ isActive }) => `${cls} ${isActive ? 'text-accent' : ''}`}>
        {label}
      </NavLink>
    );
  }
  return (
    <Link to={to} onClick={onClick} className={`${cls} ${active ? 'text-accent' : ''}`}>
      {label}
    </Link>
  );
}
