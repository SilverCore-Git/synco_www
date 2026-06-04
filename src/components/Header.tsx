import { useState } from 'react';
import { Lock, Menu, X, ArrowRight } from 'lucide-react';
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
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-sm border-b border-primary/5'
        : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo - Minimal */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <Lock className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-base font-semibold text-text tracking-tight">
              Sinco
            </span>
          </div>

          {/* Nav items for desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { id: 'features', label: t.nav.features },
              { id: 'demo', label: 'Démo' },
              { id: 'comparison', label: t.nav.teamsComparison },
              { id: 'sovereignty', label: t.nav.security },
              { id: 'pricing', label: t.nav.pricing },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-bg-secondary rounded-lg p-0.5">
              {(['FR', 'EN'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLang(lang)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                    currentLang === lang
                      ? 'bg-white text-primary'
                      : 'text-text-secondary hover:text-text'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all"
            >
              {t.nav.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 z-40 bg-white px-4 py-6">
          <div className="flex flex-col space-y-4">
            {[
              { id: 'features', label: t.nav.features },
              { id: 'demo', label: 'Démo E2EE' },
              { id: 'comparison', label: t.nav.teamsComparison },
              { id: 'sovereignty', label: t.nav.security },
              { id: 'pricing', label: t.nav.pricing },
              { id: 'faq', label: t.nav.faq },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-base font-medium text-text hover:text-primary py-2"
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
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
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
                className="w-full px-4 py-2 font-semibold text-white bg-primary rounded-lg"
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
