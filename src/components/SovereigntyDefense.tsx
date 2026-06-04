import { Network, Fingerprint, Globe, Lock, ShieldAlert } from 'lucide-react';
import { TranslationSet } from '../types';

interface SovereigntyDefenseProps {
  t: TranslationSet;
}

export default function SovereigntyDefense({ t }: SovereigntyDefenseProps) {
  return (
    <section id="sovereignty" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                {t.sovereignty.badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight leading-tight">
              {t.sovereignty.title}
            </h2>

            {/* Description */}
            <div className="space-y-4 text-base text-text-secondary mb-8">
              <p>{t.sovereignty.desc1}</p>
              <p className="font-medium text-text">{t.sovereignty.desc2}</p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-bg-secondary p-4 rounded-lg border border-border">
                <Network className="w-4 h-4 text-primary mb-2" />
                <h4 className="text-sm font-semibold text-text mb-1">{t.sovereignty.hostTitle}</h4>
                <p className="text-xs text-text-secondary leading-normal">{t.sovereignty.hostDesc}</p>
              </div>

              <div className="bg-bg-secondary p-4 rounded-lg border border-border">
                <Fingerprint className="w-4 h-4 text-primary mb-2" />
                <h4 className="text-sm font-semibold text-text mb-1">{t.sovereignty.lawTitle}</h4>
                <p className="text-xs text-text-secondary leading-normal">{t.sovereignty.lawDesc}</p>
              </div>

              <div className="bg-bg-secondary p-4 rounded-lg border border-border">
                <Globe className="w-4 h-4 text-primary mb-2" />
                <h4 className="text-sm font-semibold text-text mb-1">{t.sovereignty.auditTitle}</h4>
                <p className="text-xs text-text-secondary leading-normal">{t.sovereignty.auditDesc}</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white border border-border rounded-xl p-8">

              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-border">
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                  Périmètre de sécurité
                </span>
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Souverain
                </span>
              </div>

              {/* Diagram */}
              <div className="space-y-3">

                {/* French Datacenter */}
                <div className="flex items-center gap-3 p-4 rounded-lg border-2 border-primary bg-primary/5">
                  <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-semibold text-primary">
                      Cloud France 🇫🇷
                    </span>
                    <span className="block text-sm font-semibold text-text">
                      Datacenters Paris
                    </span>
                    <span className="block text-xs text-text-secondary">
                      Juridiction française exclusive
                    </span>
                  </div>
                </div>

                {/* Connection */}
                <div className="flex justify-center py-1">
                  <div className="w-px h-6 border-r border-dashed border-border" />
                </div>

                {/* Blocked foreign access */}
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-bg-secondary/50 opacity-60">
                  <div className="w-9 h-9 rounded-lg bg-border text-text-secondary flex items-center justify-center flex-shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-semibold text-text-secondary line-through">
                      Cloud Act & FISA
                    </span>
                    <span className="block text-sm text-text-secondary">
                      Requêtes étrangères
                    </span>
                    <span className="block text-xs text-red-600">
                      ⚠️ Bloqué par souveraineté
                    </span>
                  </div>
                </div>

              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="block text-3xl font-bold text-text">0</span>
                  <span className="text-xs text-text-secondary uppercase tracking-wide">Risque Cloud Act</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-primary">100%</span>
                  <span className="text-xs text-text-secondary uppercase tracking-wide">SecNumCloud Ready</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
