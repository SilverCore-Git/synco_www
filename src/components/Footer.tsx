import { footer, links } from '../data/site';
import { DiscordIcon, GithubIcon, InstagramIcon } from './icons';

const socials = [
  { label: 'Instagram', href: links.instagram, Icon: InstagramIcon },
  { label: 'Discord', href: links.discord, Icon: DiscordIcon },
  { label: 'GitHub', href: links.github, Icon: GithubIcon },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-bg-deep text-fg">
      <div className="mx-auto max-w-[1440px] px-6 pt-14 pb-10 sm:px-12 sm:pt-[72px] xl:px-28">
        <div className="mb-14 flex flex-wrap justify-between gap-12 sm:mb-24">
          <div className="flex max-w-[420px] flex-[1_1_320px] flex-col gap-3">
            <img src="/brand/logo.webp" alt="Synco" className="block h-10 w-auto self-start" />
            <p className="mb-6 text-sm leading-relaxed">{footer.tagline}</p>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-md border-[1.5px] border-fg text-fg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-3 md:gap-x-16">
            {footer.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5 text-[13px]">
                <h4 className="text-outline mb-1.5 font-display text-base font-bold">{col.title}</h4>
                {col.items.map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href}>
                      {item.label}
                    </a>
                  ) : (
                    <span key={item.label}>{item.label}</span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3">
          <span className="text-outline font-display text-base font-bold">
            © {new Date().getFullYear()} Silvercore. Tous droits réservés.
          </span>
          <span className="text-outline font-display text-base font-bold">Hébergé en France</span>
        </div>
      </div>
    </footer>
  );
}
