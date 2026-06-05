import { useState } from 'react';
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Handle scroll for header background
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 20);
    });
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-sm'
        : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo - Banner */}
          <div
            className="flex items-center cursor-pointer h-10 hover:opacity-80 transition-opacity duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/assets/synco_icons/light_banner_h1000_synco.png"
              alt="Synco"
              className="h-full w-auto"
            />
          </div>

          {/* Nav items for desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: 'features', label: t.nav.features },
              { id: 'demo', label: 'Chiffrement' },
              { id: 'comparison', label: t.nav.teamsComparison },
              { id: 'pricing', label: t.nav.pricing },
              { id: 'faq', label: t.nav.faq },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-all duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Language Switcher + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-bg-secondary rounded-lg p-1 border border-border hover:border-primary/30 transition-colors duration-300">
              {(['FR', 'EN'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLang(lang)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all duration-300 ${
                    currentLang === lang
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-text-secondary hover:text-text cursor-pointer'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 group cursor-pointer"
            >
              {t.nav.ctaButton}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text transition-colors duration-200 "
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white px-4 py-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {[
              { id: 'features', label: t.nav.features },
              { id: 'demo', label: 'Chiffrement' },
              { id: 'comparison', label: t.nav.teamsComparison },
              { id: 'pricing', label: t.nav.pricing },
              { id: 'faq', label: t.nav.faq },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-base font-medium text-text hover:text-primary py-2 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-6 border-t border-border space-y-3">
              <div className="flex items-center space-x-2 bg-bg-secondary p-1 rounded-lg w-fit">
                {(['FR', 'EN'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLang(lang)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
                      currentLang === lang
                        ? 'bg-white text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full px-4 py-3 font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all duration-300 cursor-pointer"
              >
                {t.nav.ctaButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
