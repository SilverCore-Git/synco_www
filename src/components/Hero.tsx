import { Shield, Sparkles, Server, Check, HelpCircle, Eye, EyeOff } from 'lucide-react';
import { TranslationSet } from '../types';
import { useState } from 'react';

interface HeroProps {
  t: TranslationSet;
}

export default function Hero({ t }: HeroProps) {
  const [showEncryptedState, setShowEncryptedState] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Decorative background grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(22,172,119,0.03)_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Absolute aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
            {t.hero.title}
            <span className="block mt-2 bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
              {t.hero.titleGradient}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            {t.hero.description}
          </p>

          {/* Direct Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              id="hero-primary-cta"
              onClick={() => scrollToSection('pricing')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-xl transition-all shadow-md shadow-brand/20 hover:translate-y-[-1px] cursor-pointer"
            >
              <Shield className="w-4 h-4 mr-2" />
              {t.hero.primaryCta}
            </button>
            <button
              id="hero-secondary-cta"
              onClick={() => scrollToSection('demo')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all hover:translate-y-[-1px] cursor-pointer"
            >
              {t.hero.secondaryCta}
            </button>
          </div>

          {/* Compliance items */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-500 text-xs mb-10">
            <span className="flex items-center gap-1.5">
              <Server className="w-4 h-4 text-brand" /> {t.hero.securityBadge}
            </span>
          </div>
        </div>

        <div class=" perspective-distant p-10">
          <img 
            src="/assets/screen.png" 
            alt="Hero Image" 
            className="mx-auto max-w-full h-auto rounded-2xl rotate-x-12 shadow-2xl" 
          />
        </div>

        {/* ici mettre trusted badges */}

      </div>
    </section>
  );
}
