import { Lock, Mail, Globe } from 'lucide-react';
import { TranslationSet } from '../types';

interface FooterProps {
  t: TranslationSet;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-white border-t border-border text-text-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border">

          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/assets/synco_icons/favicon_100x100_synco.png" alt=""/>
              </div>
              <span className="text-lg font-semibold text-text tracking-tight">
                Synco
              </span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2 bg-primary/5 px-3 py-2 rounded-lg border border-primary/10 inline-flex">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs text-primary font-mono">
                Opérationnel • Hébergé en France
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-text mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#features" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
                <li><a href="#demo" className="hover:text-primary transition-colors">Démo E2EE</a></li>
                <li><a href="#comparison" className="hover:text-primary transition-colors">Comparatif</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Tarifs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-text mb-4">
                Légal
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><span className="hover:text-primary transition-colors cursor-pointer">{t.footer.legal}</span></li>
                <li><span className="hover:text-primary transition-colors cursor-pointer">{t.footer.privacy}</span></li>
                <li><span className="hover:text-primary transition-colors cursor-pointer">{t.footer.terms}</span></li>
                <li><span className="hover:text-primary transition-colors cursor-pointer">{t.footer.cookies}</span></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-text mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:contact@Synco.fr" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@Synco.fr</span>
              </a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Lyon, France</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-4 text-text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              ANSSI qualified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              GDPR Audited 2026
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
