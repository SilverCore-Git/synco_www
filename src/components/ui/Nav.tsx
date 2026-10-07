const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#technologie", label: "Technologie" },
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#tarif", label: "Tarif" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <nav aria-label="Navigation principale">
      <ul className="flex flex-wrap justify-center gap-x-[0.6em] gap-y-1 text-[clamp(1rem,1.9vw,1.75rem)] font-medium tracking-tighter md:justify-end">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
