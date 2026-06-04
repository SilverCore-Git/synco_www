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
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-4 block">
            Fonctionnalités
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              {/* Icon container */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                {card.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-text mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wide mb-4">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              Conformité & Réglementation
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Déjà conforme à toutes les directives françaises & européennes
            </h3>
            <p className="text-white/90 leading-relaxed mb-8">
              Notre solution aide les Établissements Publics de Santé, les banques régulées, et les administrations d'État à aligner leur outillage de travail quotidien avec la directive NIS 2 et les recommandations d'hébergement de la CNIL.
            </p>

            <ul className="space-y-3">
              {[
                'Immunisé contre l\'espionnage industriel',
                '100% hébergement France',
                'Architecture Zero-Knowledge'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
