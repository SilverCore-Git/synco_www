import { Shield, Laptop, Server, Lock, Unlock, ArrowRight } from 'lucide-react';
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
          <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mb-6 block">
            Technologie
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-light text-slate-900 mb-6 tracking-tight">
            {t.liveDemo.title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
            {t.liveDemo.subtitle}
          </p>
        </div>

        {/* Flow diagram - Minimalist 3-column */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1: Sender */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Étape 1
                </span>
                <Laptop className="w-5 h-5 text-slate-400" />
              </div>
              
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                {t.liveDemo.sender}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Les flux vidéos, audios et textuels sont chiffrés mathématiquement sur votre terminal local avant d'être envoyés.
              </p>
              
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <Lock className="w-4 h-4 text-brand flex-shrink-0" />
                <span className="text-[10px] font-mono text-slate-500 truncate">
                  Chiffrement local AES-256
                </span>
              </div>
            </div>

            {/* Step 2: Network */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl shadow-slate-900/20 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Étape 2
                </span>
                <Server className="w-5 h-5 text-brand" />
              </div>
              
              <h3 className="text-base font-semibold text-white mb-3">
                {t.liveDemo.networkNode}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Le serveur cloud ne sert que de relais de transit aveugle. Sans les clés de chiffrement, il ne peut rien lire.
              </p>
              
              <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse flex-shrink-0" />
                <span className="text-[10px] font-mono text-brand truncate">
                  Données chiffrées en transit
                </span>
              </div>
            </div>

            {/* Step 3: Recipient */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Étape 3
                </span>
                <Laptop className="w-5 h-5 text-slate-400" />
              </div>
              
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                {t.liveDemo.recipient}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Seul le terminal du destinataire possède la clé privée permettant de déchiffrer et restituer le flux.
              </p>
              
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <Unlock className="w-4 h-4 text-brand flex-shrink-0" />
                <span className="text-[10px] font-mono text-slate-500 truncate">
                  Déchiffrement de bout en bout
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Info note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Architecture Zero-Knowledge
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Contrairement aux solutions centralisées où l'éditeur possède les clés, l'échange de clés de Sinco s'effectue directement de navigateur à navigateur via des protocoles cryptographiques décentralisés. Même nos administrateurs ne peuvent pas accéder à vos données.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}