import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { links, mainNav } from '../data/site';
import ContactLink from './ContactLink';

const navText = 'font-display text-xl font-medium';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { pathname, hash } = useLocation();

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
    <header className="relative z-50 shrink-0 border-b border-line bg-bg">
      <nav
        aria-label="Navigation principale"
        className="relative z-10 flex min-h-[74px] w-full items-stretch justify-between bg-bg"
      >
        <div className="flex items-center gap-10 pl-4 sm:pl-8">
          <Link to="/#accueil" aria-label="Synco — accueil" className="flex items-center py-2 pr-6" onClick={close}>
            <img src="/brand/logo.webp" alt="Synco" className="block h-[30px] w-auto" />
          </Link>
          <div className="hidden flex-wrap items-center gap-x-10 gap-y-2 lg:flex">
            {mainNav.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </div>
        </div>

        <div className="flex items-stretch">
          {/* Sous 640 px, « Inscription » et « Se connecter » passent dans le menu déroulant. */}
          <a href={links.signup} className={`hidden items-center px-7 sm:flex ${navText}`}>
            Inscription
          </a>
          <a
            href={links.login}
            className="hidden items-center bg-accent px-6 font-display text-xl font-semibold text-ink hover:text-ink hover:brightness-110 sm:flex"
          >
            Se connecter
          </a>
          <button
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            className="flex w-[64px] items-center justify-center border-l border-line bg-transparent text-fg lg:hidden"
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
            <div className="mt-5 grid grid-cols-2 gap-3 sm:hidden">
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
  );
}

function NavItem({ to, label, onClick, block }: { to: string; label: string; onClick?: () => void; block?: boolean }) {
  const isPage = !to.includes('#');
  const cls = `${navText} py-3 ${block ? 'border-b border-line' : ''}`;
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
    <Link to={to} onClick={onClick} className={cls}>
      {label}
    </Link>
  );
}
