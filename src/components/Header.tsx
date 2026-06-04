import { useState } from 'react';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';
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
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Minimalist */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-display font-semibold text-slate-900 tracking-tight">
              Sinco
            </span>
          </div>

          {/* Nav items for desktop - Clean spacing */}
          <nav className="hidden md:flex items-center space-x-8">
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
                className="text-xs font-medium text-slate-500 hover:text-brand transition-colors tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 bg-slate-100 p-0.5 rounded-lg">
              {(['FR', 'EN'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLang(lang)}
                  className={`px-3 py-1.5 text-[10px] font-bold rounded-md transition-all ${
                    currentLang === lang 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all hover:shadow-lg hover:shadow-slate-900/20"
            >
              {t.nav.ctaButton}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white px-6 py-8 animate-[fadeInUp_0.3s_ease-out]">
          <div className="flex flex-col space-y-6">
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
                className="text-left text-lg font-medium text-slate-900 hover:text-brand py-2 border-b border-slate-100"
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-6 space-y-4">
              <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-lg w-fit">
                {(['FR', 'EN'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLang(lang)}
                    className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${
                      currentLang === lang 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-400'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full inline-flex items-center justify-center py-4 px-6 font-semibold text-white bg-slate-900 rounded-xl"
              >
                {t.nav.ctaButton}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}