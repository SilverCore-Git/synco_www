import { Shield, ArrowRight } from 'lucide-react';
import { TranslationSet } from '../types';

interface HeroProps {
  t: TranslationSet;
}

export default function Hero({ t }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Minimalist background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#16ac77 1px, transparent 1px), linear-gradient(90deg, #16ac77 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Soft gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-brand/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                {t.hero.securityBadge.split('•')[0].trim()}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-light text-slate-900 leading-[1.1] tracking-tight mb-6">
              {t.hero.title}
              <span className="block mt-2 font-normal">
                <span className="bg-gradient-to-r from-brand via-brand to-brand-dark bg-clip-text text-transparent">
                  {t.hero.titleGradient}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('pricing')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5"
              >
                <Shield className="w-4 h-4" />
                {t.hero.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => scrollToSection('demo')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all hover:border-slate-300 hover:-translate-y-0.5"
              >
                {t.hero.secondaryCta}
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand" />
                <span>100% France</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand" />
                <span>E2EE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand" />
                <span>RGPD</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            {/* Geometric frame */}
            <div className="relative">
              {/* Outer decorative frame */}
              <div className="absolute -inset-8 border border-slate-100 rounded-3xl" />
              <div className="absolute -inset-4 border border-slate-50 rounded-2xl" />
              
              {/* Main image container */}
              <div className="relative bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50">
                <img 
                  src="/assets/screen.png" 
                  alt="Sinco Interface" 
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 border border-slate-100 shadow-lg shadow-slate-200/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Sécurité
                      </p>
                      <p className="text-xs font-semibold text-slate-900">
                        Chiffré AES-256
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}