import { MessageSquare, Video, HardDrive, RefreshCw, Landmark, Key, Users, CheckCircle2 } from 'lucide-react';
import { TranslationSet } from '../types';

interface FeatureGridProps {
  t: TranslationSet;
}

export default function FeatureGrid({ t }: FeatureGridProps) {
  const cards = [
    {
      icon: <Key className="w-6 h-6 text-brand" />,
      title: t.features.e2eeTitle,
      desc: t.features.e2eeDesc,
    },
    {
      icon: <Video className="w-6 h-6 text-brand" />,
      title: t.features.voiceTitle,
      desc: t.features.voiceDesc,
    },
    {
      icon: <HardDrive className="w-6 h-6 text-brand" />,
      title: t.features.fileTitle,
      desc: t.features.fileDesc,
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand" />,
      title: t.features.channelsTitle,
      desc: t.features.channelsDesc,
    },
    {
      icon: <Landmark className="w-6 h-6 text-brand" />,
      title: t.features.sovereignTitle,
      desc: t.features.sovereignDesc,
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-brand" />,
      title: t.features.integrationTitle,
      desc: t.features.integrationDesc,
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xxs font-bold text-brand uppercase tracking-widest bg-brand/10 px-3 py-1.5 rounded-full mb-4 inline-block">
            DES OUTILS À TOUTE ÉPREUVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Grid with hover states */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 bg-[#fafcfa] border border-slate-150 rounded-2xl transition-all duration-300 hover:bg-white hover:border-brand/35 hover:shadow-lg hover:shadow-brand/5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/8 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-base font-display font-semibold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Banner block */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-2 text-brand text-xs font-semibold uppercase tracking-wider mb-2.5">
                <Users className="w-4 h-4" />
                <span>Réglementations & Confiance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-4">
                Déjà conforme à toutes les directives françaises & européennes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Notre solution aide les Établissements Publics de Santé, les banques régulées, et les administrations d&apos;État à aligner leur outillage de travail quotidien avec la directive NIS 2 et les recommandations d&apos;hébergement de la CNIL.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 gap-3.5 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                <span>Immunisé contre l&apos;espionnage industriel étranger</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                <span>100% de la chaîne d&apos;hébergement en France IPV6</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                <span>Auditable et SecNumCloud Ready</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
