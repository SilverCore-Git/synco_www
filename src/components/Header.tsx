import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links, mainNav } from '../data/site';

const navText = 'font-display text-xl font-medium';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="shrink-0 border-b border-line bg-bg">
      <nav
        aria-label="Navigation principale"
        className="flex min-h-[74px] w-full items-stretch justify-between"
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
          <Link to="/#tarif" className={`hidden items-center px-7 sm:flex ${navText}`}>
            Inscription
          </Link>
          <a
            href={links.login}
            className="flex items-center bg-accent px-6 font-display text-xl font-semibold text-ink hover:text-ink hover:brightness-110"
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
        <div id="menu-mobile" className="flex flex-col border-t border-line px-4 pb-4 sm:px-8 lg:hidden">
          {mainNav.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} onClick={close} block />
          ))}
          <Link to="/#tarif" onClick={close} className={`border-b border-line py-3 ${navText} sm:hidden`}>
            Inscription
          </Link>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label, onClick, block }: { to: string; label: string; onClick?: () => void; block?: boolean }) {
  const isPage = !to.includes('#');
  const cls = `${navText} py-3 ${block ? 'border-b border-line' : ''}`;
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
