import { Shield, Laptop, Server, Lock, Unlock } from 'lucide-react';
import { TranslationSet } from '../types';

interface E2EEDemoProps {
  t: TranslationSet;
}

export default function E2EEDemo({ t }: E2EEDemoProps) {
  return (
    <section id="demo" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-4 block">
            Technologie
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            {t.liveDemo.title}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            {t.liveDemo.subtitle}
          </p>
        </div>

        {/* Flow diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

            {/* Step 1: Sender */}
            <div className="bg-white rounded-xl p-6 border border-border relative z-10">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Étape 1
                </span>
                <Laptop className="w-5 h-5 text-text-secondary" />
              </div>

              <h3 className="text-lg font-semibold text-text mb-2">
                {t.liveDemo.sender}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Les flux vidéos, audios et textuels sont chiffrés mathématiquement sur votre terminal local avant d'être envoyés.
              </p>

              <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <Lock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs text-primary font-mono">
                  Chiffrement AES-256
                </span>
              </div>
            </div>

            {/* Step 2: Network */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Étape 2
                </span>
                <Server className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-text mb-2">
                {t.liveDemo.networkNode}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Le serveur cloud ne sert que de relais de transit aveugle. Sans les clés de chiffrement, il ne peut rien lire.
              </p>

              <div className="flex items-center gap-2 p-3 bg-primary rounded-lg text-white">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono">
                  Données chiffrées en transit
                </span>
              </div>
            </div>

            {/* Step 3: Recipient */}
            <div className="bg-white rounded-xl p-6 border border-border relative z-10">
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Étape 3
                </span>
                <Laptop className="w-5 h-5 text-text-secondary" />
              </div>

              <h3 className="text-lg font-semibold text-text mb-2">
                {t.liveDemo.recipient}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Seul le terminal du destinataire possède la clé privée permettant de déchiffrer et restituer le flux.
              </p>

              <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <Unlock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs text-primary font-mono">
                  Déchiffrement E2E
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Info note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-bg-secondary border border-border rounded-xl p-6 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-text mb-2">
                Architecture Zero-Knowledge
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Contrairement aux solutions centralisées où l'éditeur possède les clés, l'échange de clés de Synco s'effectue directement via des protocoles cryptographiques décentralisés. Même nos administrateurs ne peuvent pas accéder à vos données.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
