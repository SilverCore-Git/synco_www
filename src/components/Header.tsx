import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSet;
}

export default function Header({ currentLang, setLang, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-lg' : 'bg-white/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer h-8 hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/synco_icons/banner_synco.svg" alt="Synco" className="h-full w-auto" />
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'features', label: t.nav.features },
              { id: 'demo', label: 'Démo E2EE' },
              { id: 'comparison', label: t.nav.teamsComparison },
              { id: 'sovereignty', label: t.nav.security },
              { id: 'pricing', label: t.nav.pricing },
              { id: 'faq', label: t.nav.faq },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 relative group">
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-bg-secondary rounded-lg p-1 border border-border hover:border-primary/30 transition-colors">
              {(['FR', 'EN'] as const).map((lang) => (
                <button key={lang} onClick={() => setLang(lang)} className={`px-3 py-1.5 text-xs font-semibold rounded transition-all duration-300 ${
                  currentLang === lang ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-text hover:bg-border/50'
                }`}>
                  {lang}
                </button>
              ))}
            </div>
            <button onClick={() => scrollToSection('pricing')} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-darker rounded-lg transition-all duration-300 ease-out shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
              {t.nav.ctaButton}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-xl px-4 py-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {[
              { id: 'features', label: t.nav.features },
              { id: 'demo', label: 'Démo E2EE' },
              { id: 'comparison', label: t.nav.teamsComparison },
              { id: 'sovereignty', label: t.nav.security },
              { id: 'pricing', label: t.nav.pricing },
              { id: 'faq', label: t.nav.faq },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-base font-medium text-text hover:text-primary py-2 px-4 rounded-lg hover:bg-primary/5 transition-colors">
                {item.label}
              </button>
            ))}
            <div className="pt-6 border-t border-border space-y-4">
              <div className="flex items-center space-x-1 bg-bg-secondary p-1 rounded-lg w-fit">
                {(['FR', 'EN'] as const).map((lang) => (
                  <button key={lang} onClick={() => { setLang(lang); setMobileMenuOpen(false); }} className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
                    currentLang === lang ? 'bg-primary text-white' : 'text-text-secondary'
                  }`}>
                    {lang}
                  </button>
                ))}
              </div>
              <button onClick={() => { scrollToSection('pricing'); setMobileMenuOpen(false); }} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-darker rounded-lg transition-all duration-300 ease-out shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                {t.nav.ctaButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
