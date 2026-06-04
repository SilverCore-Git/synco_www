import { Shield, Mail, Globe } from 'lucide-react';
import { TranslationSet } from '../types';

interface FooterProps {
  t: TranslationSet;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-semibold text-white tracking-tight">
                Sinco<span className="text-brand">.</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            
            {/* Status indicator */}
            <div className="flex items-center gap-3 bg-slate-950 px-4 py-3 rounded-xl border border-slate-800 inline-flex">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                SecNumCloud-Region-Paris • Opérationnel
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-brand transition-colors">Fonctionnalités</a></li>
                <li><a href="#demo" className="hover:text-brand transition-colors">Démo E2EE</a></li>
                <li><a href="#comparison" className="hover:text-brand transition-colors">Comparatif</a></li>
                <li><a href="#pricing" className="hover:text-brand transition-colors">Tarifs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">
                Légal
              </h4>
              <ul className="space-y-3 text-sm">
                <li><span className="hover:text-brand transition-colors cursor-pointer">{t.footer.legal}</span></li>
                <li><span className="hover:text-brand transition-colors cursor-pointer">{t.footer.privacy}</span></li>
                <li><span className="hover:text-brand transition-colors cursor-pointer">{t.footer.terms}</span></li>
                <li><span className="hover:text-brand transition-colors cursor-pointer">{t.footer.cookies}</span></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:contact@sinco.fr" className="flex items-center gap-2 hover:text-brand transition-colors">
                <Mail className="w-4 h-4 text-brand" />
                <span>contact@sinco.fr</span>
              </a>
              <div className="flex items-center gap-2 text-slate-500">
                <Globe className="w-4 h-4 text-brand" />
                <span>Lyon, France 🇫🇷</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              ANSSI qualified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              GDPR Audited 2026
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}