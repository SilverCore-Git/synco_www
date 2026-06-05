import { Lock, Video, FileText, Hash, Shield, Users, Zap, ArrowRight } from 'lucide-react';
import { TranslationSet } from '../types';

interface FeatureGridProps { t: TranslationSet; }

export default function FeatureGrid({ t }: FeatureGridProps) {
  const features = [
    { icon: <Lock className="w-6 h-6 text-primary" />, title: t.features.e2eeTitle, description: t.features.e2eeDesc, badge: 'E2EE' },
    { icon: <Video className="w-6 h-6 text-primary" />, title: t.features.voiceTitle, description: t.features.voiceDesc, badge: 'P2P' },
    { icon: <FileText className="w-6 h-6 text-primary" />, title: t.features.fileTitle, description: t.features.fileDesc, badge: 'Sécurisé' },
    { icon: <Hash className="w-6 h-6 text-primary" />, title: t.features.channelsTitle, description: t.features.channelsDesc },
    { icon: <Shield className="w-6 h-6 text-primary" />, title: t.features.sovereignTitle, description: t.features.sovereignDesc, badge: '🇫🇷' },
    { icon: <Users className="w-6 h-6 text-primary" />, title: t.features.integrationTitle, description: t.features.integrationDesc },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
            <Zap className="w-4 h-4" /> Fonctionnalités
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-text tracking-tight mb-6">{t.features.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed text-text-secondary max-w-3xl mx-auto">{t.features.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 hover:shadow-primary/15 transition-all duration-300 ease-out overflow-hidden group relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mt-8 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                {feature.badge && <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold text-white bg-primary rounded-full uppercase">{feature.badge}</span>}
                {feature.icon}
              </div>
              <div className="px-8 pb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-text mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-base sm:text-lg leading-relaxed text-text-secondary">{feature.description}</p>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full" />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-darker rounded-lg transition-all duration-300 ease-out shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
            Découvrir tous les avantages
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
