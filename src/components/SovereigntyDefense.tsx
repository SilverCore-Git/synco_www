import { ShieldAlert, Fingerprint, Network, Scale, Globe, Lock } from 'lucide-react';
import { TranslationSet } from '../types';

interface SovereigntyDefenseProps {
  t: TranslationSet;
}

export default function SovereigntyDefense({ t }: SovereigntyDefenseProps) {
  return (
    <section id="sovereignty" className="py-24 sm:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 mb-8">
              <Scale className="w-4 h-4 text-brand" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                {t.sovereignty.badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-display font-light text-slate-900 mb-6 tracking-tight leading-tight">
              {t.sovereignty.title}
            </h2>

            {/* Description */}
            <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
              <p>{t.sovereignty.desc1}</p>
              <p className="font-medium text-slate-700">{t.sovereignty.desc2}</p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-white p-5 rounded-xl border border-slate-100">
                <Network className="w-5 h-5 text-brand mb-3" />
                <h4 className="text-xs font-semibold text-slate-900 mb-1">{t.sovereignty.hostTitle}</h4>
                <p className="text-[11px] text-slate-500 leading-normal">{t.sovereignty.hostDesc}</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100">
                <Fingerprint className="w-5 h-5 text-brand mb-3" />
                <h4 className="text-xs font-semibold text-slate-900 mb-1">{t.sovereignty.lawTitle}</h4>
                <p className="text-[11px] text-slate-500 leading-normal">{t.sovereignty.lawDesc}</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100">
                <Globe className="w-5 h-5 text-brand mb-3" />
                <h4 className="text-xs font-semibold text-slate-900 mb-1">{t.sovereignty.auditTitle}</h4>
                <p className="text-[11px] text-slate-500 leading-normal">{t.sovereignty.auditDesc}</p>
              </div>
            </div>
          </div>

          {/* Visual diagram */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-brand/5 rounded-3xl blur-[60px]" />
              
              {/* Main card */}
              <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl shadow-slate-200/50">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Périmètre de sécurité
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    Souverain
                  </span>
                </div>

                {/* Diagram */}
                <div className="space-y-4">
                  
                  {/* French Datacenter */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-brand/20 bg-brand/5">
                    <div className="w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark">
                        Cloud France 🇫🇷
                      </span>
                      <span className="block text-xs font-semibold text-slate-900">
                        Datacenters Paris
                      </span>
                      <span className="block text-[10px] text-slate-500">
                        Juridiction française exclusive
                      </span>
                    </div>
                  </div>

                  {/* Connection */}
                  <div className="flex justify-center py-2">
                    <div className="w-px h-8 border-r border-dashed border-slate-300" />
                  </div>

                  {/* Blocked foreign access */}
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 opacity-60">
                    <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-400 flex items-center justify-center flex-shrink-0">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 line-through">
                        Cloud Act & FISA
                      </span>
                      <span className="block text-xs font-semibold text-slate-700">
                        Requêtes étrangères
                      </span>
                      <span className="block text-[10px] text-rose-500">
                        ⚠️ Bloqué par souveraineté
                      </span>
                    </div>
                  </div>

                </div>

                {/* Bottom stats */}
                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="block text-2xl font-display font-semibold text-slate-900">0</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">Risque Cloud Act</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-display font-semibold text-brand">100%</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">SecNumCloud Ready</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}