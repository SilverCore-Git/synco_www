import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TranslationSet } from '../types';

interface HeroProps {
  t: TranslationSet;
}

export default function Hero({ t }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 pb-32 overflow-hidden">
      {/* Minimalist background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-1/4 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
        <div className="absolute -bottom-1/4 -left-1/3 w-[600px] h-[500px] bg-primary/2 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Protégé • Souverain • Français
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-[1.1] tracking-tight">
              {t.hero.title}
              <span className="block">
                <span className="bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
                  {t.hero.titleGradient}
                </span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={() => scrollToSection('pricing')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all cursor-pointer"
            >
              {t.hero.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('demo')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 rounded-lg transition-all cursor-pointer"
            >
              {t.hero.secondaryCta}
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {['RGPD Compliant', '100% France', 'Zero Cloud Act'].map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-text-secondary">
                <CheckCircle className="w-4 h-4 text-primary" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Visual Hero - Banner or Screenshot */}
        <div className="relative w-full">
          <div
            className="relative rounded-2xl overflow-hidden border border-border bg-bg-secondary p-1 transition-transform duration-300"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            {/* Use banner SVG if available, fallback to screenshot */}
            <img
              src="/assets/screen.png"
              alt="Synco Banner"
              className="w-full h-auto rounded-xl animate-fade-in"
              onError={(e) => {
                // Fallback to screenshot if SVG fails
                e.currentTarget.src = '/assets/screen.png';
              }}
            />
          </div>

          {/* Subtle glow effect behind */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent blur-2xl animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
}
