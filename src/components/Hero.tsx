import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { TranslationSet } from '../types';

interface HeroProps { t: TranslationSet; }

export default function Hero({ t }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-primary/3 rounded-full blur-[200px]" />
      </div>
      <div className="absolute inset-0 -z-20 bg-grid opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-8 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{t.hero.securityBadge}</span>
          </div>

          <div className="space-y-6 mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-text tracking-tight animate-fade-in-up">
              {t.hero.title}
              <span className="block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mt-2">
                {t.hero.titleGradient}
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-text-secondary max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-500">
            <button onClick={() => scrollToSection('pricing')} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-darker rounded-lg transition-all duration-300 ease-out shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
              {t.hero.primaryCta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button onClick={() => scrollToSection('demo')} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary bg-white border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 active:bg-primary/10 rounded-lg transition-all duration-300 ease-out cursor-pointer group">
              {t.hero.secondaryCta}
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in-up animation-delay-700">
            {['RGPD Compliant', '100% France 🇫🇷', 'Zero Cloud Act', 'Chiffrement E2EE'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/50 shadow-sm hover:shadow-md transition-all">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-text-secondary">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full mt-16 md:mt-24">
          <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-bg-secondary p-1 shadow-2xl transition-transform duration-500" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
            <img src="/screen.png" alt="Synco Application Interface" className="w-full h-auto rounded-2xl animate-fade-in" />
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-t from-primary/10 via-transparent to-transparent blur-3xl animate-pulse-subtle" />
          </div>
          <div className="absolute -top-4 left-8 w-24 h-1 bg-primary/30 rounded-full blur-xl" />
          <div className="absolute -top-4 right-8 w-24 h-1 bg-primary/30 rounded-full blur-xl" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 rounded-full border-2 border-primary/30 flex justify-center">
          <div className="w-1 h-3 rounded-full bg-primary animate-float-subtle" />
        </div>
      </div>
    </section>
  );
}
