import { Shield, Laptop, Server, Lock, Unlock, ArrowRight } from 'lucide-react';
import { TranslationSet } from '../types';

interface E2EEDemoProps {
  t: TranslationSet;
}

export default function E2EEDemo({ t }: E2EEDemoProps) {
  return (
    <section id="demo" className="py-20 sm:py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Entête de Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full mb-4 inline-block border border-emerald-200/50">
            Technologie
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            {t.liveDemo.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t.liveDemo.subtitle}
          </p>
        </div>

        {/* Les 3 Cartes du Flux Réseau */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative items-stretch">
          
          {/* Carte 1 : Émetteur (Local) */}
          <div className="max-w-90 bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-medium uppercase tracking-wider border border-slate-200/40">
                  Étape 1 : Origin
                </span>
                <Laptop className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="font-semibold text-base text-slate-900 mb-2">{t.liveDemo.sender}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Les flux vidéos, audios et textuels sont chiffrés mathématiquement sur votre terminal local avant même d&apos;être envoyés sur le réseau.
              </p>
            </div>

            <div className="mt-6 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-500" />
              <span className="text-[11px] font-mono text-slate-600 truncate">Donnée brute convertie localement</span>
            </div>
          </div>

          {/* Indicateur Flèche Invisible sur Mobile */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 hidden lg:block z-10 text-emerald-500">
            <ArrowRight className="w-10 h-10" />
          </div>

          {/* Carte 2 : Le Noeud Réseau Opaque */}
          <div className="max-w-90 bg-slate-900 text-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] px-2.5 py-1 rounded bg-slate-800 text-slate-400 font-medium uppercase tracking-wider border border-slate-700/50">
                  Étape 2 : Transit
                </span>
                <Server className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-base text-white mb-2">{t.liveDemo.networkNode}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le serveur cloud ne sert que de relais de transit aveugle. N&apos;ayant jamais accès aux clés de chiffrement, il est techniquement incapable de lire ou d&apos;intercepter vos données.
              </p>
            </div>

            <div className="mt-6 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-400 truncate">Donnés chiffrées en transit</span>
            </div>
          </div>

          {/* Indicateur Flèche Invisible sur Mobile */}
          <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 hidden lg:block z-10 text-emerald-500">
            <ArrowRight className="w-10 h-10" />
          </div>

          {/* Carte 3 : Réception et Déchiffrement */}
          <div className="max-w-90 bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-medium uppercase tracking-wider border border-slate-200/40">
                  Étape 3 : Target
                </span>
                <Laptop className="w-5 h-5 text-slate-400" />
              </div>
              <h3 className="font-semibold text-base text-slate-900 mb-2">{t.liveDemo.recipient}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Seul le terminal de votre destinataire légitime possède la clé privée correspondante permettant de décoder et restituer le flux de manière fluide.
              </p>
            </div>

            <div className="mt-6 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
              <Unlock className="w-4 h-4 text-emerald-500" />
              <span className="text-[11px] font-mono text-slate-600 truncate">Flux décodé de bout en bout</span>
            </div>
          </div>

        </div>

        {/* Note de Souveraineté Bas de Page */}
        <div className="mt-12 bg-emerald-50/40 border border-emerald-500/10 p-5 rounded-2xl flex items-start gap-4 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
          <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-900 mb-1">Architecture Zeo-Knowledge</p>
            <p className="text-xs text-slate-500">
              Contrairement aux solutions centralisées où l’éditeur possède les clés, l’échange de clé  de Synco s’effectue directement via des protocoles cryptographique décentralisés. Même nos administrateurs ne peuvent pas accéder à vos données
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}