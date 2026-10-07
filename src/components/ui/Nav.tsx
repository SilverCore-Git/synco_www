"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#technologie", label: "Technologie" },
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#tarif", label: "Tarif" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const position = scrolled
    ? "translate-x-[calc(50cqw_-_50%)] bg-primary"
    : "translate-x-[calc(50cqw_-_50%)] bg-primary/0 md:translate-x-[calc(100cqw_-_100%_-_0.5rem)]";

  return (
    <header className="@container pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Navigation principale"
        className={`pointer-events-auto w-max max-w-full p-1 transition-[translate,background-color] duration-500 ease-out motion-reduce:transition-none ${position}`}
      >
        <ul className="flex flex-wrap justify-center text-[clamp(1rem,1.9vw,1.75rem)] font-medium tracking-tighter">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-[0.35em] py-1 transition-colors duration-150 hover:bg-brand focus-visible:bg-brand focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
