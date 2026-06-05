import { Check, Crown, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { TranslationSet } from '../types';

interface PricingProps { t: TranslationSet; }

export default function Pricing({ t }: PricingProps) {
  const tiers = t.pricing.tiers;

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
            <ShieldCheck className="w-4 h-4" /> Tarifs
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-text tracking-tight mb-6">{t.pricing.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary max-w-3xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className={`bg-white rounded-2xl border border-border/50 shadow-sm transition-all duration-300 ease-out overflow-hidden relative ${tier.popular ? 'border-2 border-primary/50 shadow-primary-lg scale-105' : 'hover:border-primary/20'}`}>
              {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-bold"><Crown className="w-4 h-4" /> {t.pricing.popularBadge}</span></div>}
              {tier.popular && <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />}
              <div className={`p-8 pb-0 ${tier.popular ? 'text-center' : ''}`}>
                <h3 className="text-2xl font-bold text-text mb-2">{tier.name}</h3>
                <p className="text-text-secondary mb-6">{tier.desc}</p>
                <div className="flex items-baseline justify-center gap-2 mb-2"><span className="text-5xl font-bold text-primary">{tier.price}</span><span className="text-text-secondary">{tier.period}</span></div>
              </div>
              <div className="p-8 pt-0">
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-text-secondary group hover:text-primary transition-colors">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" /><span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${tier.popular ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-light hover:to-primary shadow-primary hover:shadow-primary-lg' : 'text-primary bg-white border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5'}`}>
                  {tier.cta}{!tier.popular && <ArrowRight className="w-5 h-5 ml-2" />}
                </button>
                {tier.popular && <div className="mt-4 text-center"><p className="text-sm text-primary font-medium">Le plus choisi par les entreprises françaises</p></div>}
              </div>
              {tier.popular && <><div className="absolute bottom-0 left-0 w-32 h-1 bg-primary/30 rounded-r-full" /><div className="absolute bottom-0 right-0 w-32 h-1 bg-primary/30 rounded-l-full" /></>}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl border border-border/50 shadow-sm p-8 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center"><Building2 className="w-8 h-8 text-primary" /></div>
              <div>
                <h3 className="text-2xl font-bold text-text mb-2">Solution sur mesure pour les grands comptes</h3>
                <p className="text-text-secondary">Ministères, collectivités, OIV, santé, défense - Contactez-nous pour une offre personnalisée</p>
              </div>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-darker rounded-lg transition-all duration-300 ease-out shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
              {t.pricing.contactBtn}<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-text-muted flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" />Satisfait ou remboursé - Essai gratuit sans engagement</p>
        </div>
      </div>
    </section>
  );
}
