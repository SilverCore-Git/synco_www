import { Shield, Mail, Globe, Cpu } from 'lucide-react';
import { TranslationSet } from '../types';

interface FooterProps {
  t: TranslationSet;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-slate-800">
          
          {/* Brand/Slogan - 5 cols */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand text-white">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Sinco<span className="text-brand">.</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            
            <div className="flex items-center space-x-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800 inline-block">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <p className="text-[10px] text-slate-400 font-mono">
                Heures d&apos;activité : SecNumCloud-Region-Paris
              </p>
            </div>
          </div>

          {/* Links - 4 cols */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-xs sm:text-sm">
            <div>
              <span className="block font-semibold text-white uppercase tracking-wider text-xxs mb-4">Navigation</span>
              <ul className="space-y-2.5">
                <li><a href="#features" className="hover:text-brand transition-colors">Fonctionnalités</a></li>
                <li><a href="#demo" className="hover:text-brand transition-colors">Démo E2EE</a></li>
                <li><a href="#comparison" className="hover:text-brand transition-colors">Comparatif</a></li>
                <li><a href="#pricing" className="hover:text-brand transition-colors">Tarifs</a></li>
              </ul>
            </div>
            <div>
              <span className="block font-semibold text-white uppercase tracking-wider text-xxs mb-4">Légal & Contact</span>
              <ul className="space-y-2.5">
                <li><span className="hover:text-brand transition-colors cursor-pointer">{t.footer.legal}</span></li>
                <li><span className="hover:text-brand transition-colors cursor-pointer">{t.footer.privacy}</span></li>
                <li><span className="hover:text-brand transition-colors cursor-pointer">{t.footer.terms}</span></li>
                <li><span className="hover:text-brand transition-colors cursor-pointer">{t.footer.cookies}</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Details - 3 cols */}
          <div className="md:col-span-3 space-y-4">
            <span className="block font-semibold text-white uppercase tracking-wider text-xxs mb-2">Support Sinco</span>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand" />
                <span>contact@sinco.fr</span>
              </p>
              <p className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand" />
                <span>Assistance État : etp@sinco.fr</span>
              </p>
              <p className="text-[10px] text-slate-500 italic mt-4 leading-normal">
                Notre assistance est qualifiée en protection de secrets industriels. Nos bureaux sont basés à Lyon, France.
              </p>
            </div>
          </div>

        </div>

        {/* Rights reserved */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xxs text-slate-500 gap-4 text-center">
          <p>{t.footer.rights}</p>
          <div className="flex items-center space-x-4">
            <span>ANSSI qualified stack</span>
            <span>•</span>
            <span>GDPR Audited 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
