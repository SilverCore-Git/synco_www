import { MessageSquare, Video, HardDrive, RefreshCw, Landmark, Key } from 'lucide-react';
import { TranslationSet } from '../types';

interface FeatureGridProps {
  t: TranslationSet;
}

export default function FeatureGrid({ t }: FeatureGridProps) {
  const cards = [
    {
      icon: <Key className="w-5 h-5" />,
      title: t.features.e2eeTitle,
      desc: t.features.e2eeDesc,
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: t.features.voiceTitle,
      desc: t.features.voiceDesc,
    },
    {
      icon: <HardDrive className="w-5 h-5" />,
      title: t.features.fileTitle,
      desc: t.features.fileDesc,
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: t.features.channelsTitle,
      desc: t.features.channelsDesc,
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      title: t.features.sovereignTitle,
      desc: t.features.sovereignDesc,
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: t.features.integrationTitle,
      desc: t.features.integrationDesc,
    }
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header - Minimalist */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mb-6 block">
            Fonctionnalités
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-light text-slate-900 mb-6 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Grid - Clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:border-brand/30 hover:shadow-lg hover:shadow-slate-200/50"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300 text-brand">
                {card.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-base font-semibold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Banner - Minimalist */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-10 sm:p-14 relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-brand text-[10px] font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span>Conformité & Réglementation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-light text-white mb-4">
                Déjà conforme à toutes les directives françaises & européennes
              </h3>
              <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
                Notre solution aide les Établissements Publics de Santé, les banques régulées, et les administrations d'État à aligner leur outillage de travail quotidien avec la directive NIS 2 et les recommandations d'hébergement de la CNIL.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800">
                <ul className="space-y-4">
                  {[
                    'Immunisé contre l\'espionnage industriel',
                    '100% hébergement France IPv6',
                    'Auditable et SecNumCloud Ready'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-xs text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}