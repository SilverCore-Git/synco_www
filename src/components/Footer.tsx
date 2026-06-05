import { ShieldCheck, Linkedin, Twitter, Github, ArrowRight, Building2 } from 'lucide-react';
import { TranslationSet } from '../types';

interface FooterProps { t: TranslationSet; }

export default function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 via-primary/3 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3"><img src="/assets/synco_icons/banner_synco.svg" alt="Synco" className="h-8" /></div>
            <p className="text-text-secondary">{t.footer.tagline}</p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                { icon: <Twitter className="w-5 h-5" />, href: '#' },
                { icon: <Github className="w-5 h-5" />, href: '#' },
              ].map((social, index) => (
                <a key={index} href={social.href} className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">{social.icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-text mb-4">Produit</h4>
            <ul className="space-y-3">
              {['Fonctionnalités', 'Tarifs', 'Démo', 'Comparatif'].map((item, index) => (
                <li key={index}><a href={`#${item.toLowerCase()}`} className="text-text-secondary hover:text-primary hover:translate-x-1 transition-all">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text mb-4">Ressources</h4>
            <ul className="space-y-3">
              {['Documentation', 'API', 'Blog', 'Support'].map((label, index) => (
                <li key={index}><a href="#" className="text-text-secondary hover:text-primary hover:translate-x-1 transition-all">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text mb-4">Légal</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.legal, href: '#' },
                { label: t.footer.privacy, href: '#' },
                { label: t.footer.terms, href: '#' },
                { label: t.footer.cookies, href: '#' },
              ].map((item, index) => (
                <li key={index}><a href={item.href} className="text-text-secondary hover:text-primary hover:translate-x-1 transition-all">{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border/50 shadow-sm p-8 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center"><Building2 className="w-8 h-8 text-primary" /></div>
              <div>
                <h3 className="text-2xl font-bold text-text mb-2">Prêt à sécuriser vos communications ?</h3>
                <p className="text-text-secondary">Rejoignez des milliers d'entreprises françaises qui font déjà confiance à Synco</p>
              </div>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-darker rounded-lg transition-all duration-300 ease-out shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
              Commencer gratuitement<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /><span className="text-sm text-text-secondary">Hébergé en France 🇫🇷 | Conforme RGPD</span></div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-sm text-text-secondary">{t.footer.rights.replace('2026', currentYear.toString())}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
