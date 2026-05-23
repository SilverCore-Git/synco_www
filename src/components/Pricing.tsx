import { Check, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { TranslationSet } from '../types';

interface PricingProps {
  t: TranslationSet;
}

export default function Pricing({ t }: PricingProps) {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#FCFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xxs font-bold text-brand uppercase tracking-widest bg-brand/10 px-3 py-1.5 rounded-full mb-4 inline-block">
            SANS SURPRISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {t.pricing.tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular 
                  ? 'border-brand ring-2 ring-brand/10 shadow-xl' 
                  : 'border-slate-200 hover:border-slate-350 shadow-sm'
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                  {t.pricing.popularBadge}
                </span>
              )}

              <div>
                
                {/* Header */}
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-display font-bold text-slate-900">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-500 font-medium font-sans">
                    {tier.period}
                  </span>
                </div>
                
                <p className="text-xs text-slate-600 mb-8 leading-relaxed">
                  {tier.desc}
                </p>

                {/* Features List */}
                <div className="h-px bg-slate-100 mb-6" />
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Action button */}
              <div>
                <button
                  id={`pricing-action-${idx}`}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    tier.popular
                      ? 'bg-brand hover:bg-brand-dark text-white shadow-md shadow-brand/15'
                      : 'bg-slate-550 border border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                  onClick={() => alert(`Demande d'initialisation pour l'offre ${tier.name}`)}
                >
                  {tier.popular ? <ShieldCheck className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Small Sovereign notice footer */}
        <div className="mt-16 text-center max-w-2xl mx-auto bg-brand/3 p-4 rounded-2xl border border-brand/8">
          <p className="text-xxs sm:text-xs text-slate-600 leading-relaxed">
            🌿 <strong>Engagement Écologique local</strong> : Les serveurs de transit Sinco opèrent à 100% sur de l&apos;énergie décarbonée d&apos;origine hydraulique et nucléaire française, assurant un PUE extrêmement bas (inférieur à 1.15).
          </p>
        </div>

      </div>
    </section>
  );
}
