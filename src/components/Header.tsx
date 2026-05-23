import { useState } from 'react';
import { Shield, Menu, X, Globe, ArrowRight } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSet;
}

export default function Header({ currentLang, setLang, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fdfdfd]/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand bg-opacity-10 text-brand">
              <Shield className="w-5 h-5 stroke-[2.5]" />
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-brand rounded-full border-2 border-white animate-pulse-ring" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-slate-900">
              Sinco<span className="text-brand">.</span>
            </span>
          </div>

          {/* Nav items for desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              id="nav-features-btn"
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-slate-600 hover:text-brand transition-colors cursor-pointer"
            >
              {t.nav.features}
            </button>
            <button
              id="nav-demo-btn"
              onClick={() => scrollToSection('demo')}
              className="text-sm font-medium text-slate-600 hover:text-brand transition-colors cursor-pointer"
            >
              Démo E2EE
            </button>
            <button
              id="nav-comparison-btn"
              onClick={() => scrollToSection('comparison')}
              className="text-sm font-medium text-slate-600 hover:text-brand transition-colors cursor-pointer"
            >
              {t.nav.teamsComparison}
            </button>
            <button
              id="nav-sovereignty-btn"
              onClick={() => scrollToSection('sovereignty')}
              className="text-sm font-medium text-slate-600 hover:text-brand transition-colors cursor-pointer"
            >
              {t.nav.security}
            </button>
            <button
              id="nav-pricing-btn"
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium text-slate-600 hover:text-brand transition-colors cursor-pointer"
            >
              {t.nav.pricing}
            </button>
            <button
              id="nav-faq-btn"
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-slate-600 hover:text-brand transition-colors cursor-pointer"
            >
              {t.nav.faq}
            </button>
          </nav>

          {/* Language Switcher + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-lg">
              <button
                id="lang-fr-btn"
                onClick={() => setLang('FR')}
                className={`px-2.5 py-1 text-xs font-semibold rounded ${
                  currentLang === 'FR' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                } transition-all`}
              >
                FR
              </button>
              <button
                id="lang-en-btn"
                onClick={() => setLang('EN')}
                className={`px-2.5 py-1 text-xs font-semibold rounded ${
                  currentLang === 'EN' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                } transition-all`}
              >
                EN
              </button>
            </div>
            
            <button
              id="header-cta-btn"
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-brand hover:bg-brand-dark rounded-xl transition-all shadow-sm shadow-brand/10 cursor-pointer"
            >
              {t.nav.ctaButton}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg">
              <button
                id="m-lang-fr-btn"
                onClick={() => setLang('FR')}
                className={`px-2 py-0.5 text-xxs font-bold rounded ${
                  currentLang === 'FR' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500'
                }`}
              >
                FR
              </button>
              <button
                id="m-lang-en-btn"
                onClick={() => setLang('EN')}
                className={`px-2 py-0.5 text-xxs font-bold rounded ${
                  currentLang === 'EN' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500'
                }`}
              >
                EN
              </button>
            </div>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfdfd] border-b border-slate-100 px-4 py-6 space-y-4 animate-[slideDown_0.2s_ease-out]">
          <div className="grid grid-cols-1 gap-4">
            <button
              id="m-nav-features"
              onClick={() => scrollToSection('features')}
              className="text-left py-2 font-medium text-slate-700 hover:text-brand border-b border-slate-50"
            >
              {t.nav.features}
            </button>
            <button
              id="m-nav-demo"
              onClick={() => scrollToSection('demo')}
              className="text-left py-2 font-medium text-slate-700 hover:text-brand border-b border-slate-50"
            >
              Démo E2EE
            </button>
            <button
              id="m-nav-comparison"
              onClick={() => scrollToSection('comparison')}
              className="text-left py-2 font-medium text-slate-700 hover:text-brand border-b border-slate-50"
            >
              {t.nav.teamsComparison}
            </button>
            <button
              id="m-nav-sovereignty"
              onClick={() => scrollToSection('sovereignty')}
              className="text-left py-2 font-medium text-slate-700 hover:text-brand border-b border-slate-50"
            >
              {t.nav.security}
            </button>
            <button
              id="m-nav-pricing"
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 font-medium text-slate-700 hover:text-brand border-b border-slate-50"
            >
              {t.nav.pricing}
            </button>
            <button
              id="m-nav-faq"
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 font-medium text-slate-700 hover:text-brand border-b border-slate-50"
            >
              {t.nav.faq}
            </button>
          </div>
          <div>
            <button
              id="m-cta"
              onClick={() => scrollToSection('pricing')}
              className="w-full inline-flex items-center justify-center py-3 px-4 font-semibold text-white bg-brand rounded-xl"
            >
              {t.nav.ctaButton}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
