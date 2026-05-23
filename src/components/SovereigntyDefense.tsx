import { ShieldAlert, Fingerprint, Network, Scale, FileSpreadsheet, Lock } from 'lucide-react';
import { TranslationSet } from '../types';

interface SovereigntyDefenseProps {
  t: TranslationSet;
}

export default function SovereigntyDefense({ t }: SovereigntyDefenseProps) {
  return (
    <section id="sovereignty" className="py-20 sm:py-24 bg-[#FAFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content - Left 7 columns on Desktop */}
          <div className="lg:col-span-7">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-brand/8 text-brand-dark border border-brand/12 mb-6">
              <Scale className="w-3.5 h-3.5 text-brand" />
              <span className="text-xs font-semibold uppercase tracking-wider font-display">
                {t.sovereignty.badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900 mb-6 leading-tight">
              {t.sovereignty.title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              {t.sovereignty.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 mb-10 leading-relaxed font-medium">
              {t.sovereignty.desc2}
            </p>

            {/* List items with elegant layouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="bg-white p-5 rounded-xl border border-slate-150 shadow-sm">
                <Network className="w-5 h-5 text-brand mb-3" />
                <h4 className="font-semibold text-xs text-slate-930 mb-1">{t.sovereignty.hostTitle}</h4>
                <p className="text-[11px] text-slate-500 leading-normal">{t.sovereignty.hostDesc}</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-150 shadow-sm">
                <Fingerprint className="w-5 h-5 text-brand mb-3" />
                <h4 className="font-semibold text-xs text-slate-930 mb-1">{t.sovereignty.lawTitle}</h4>
                <p className="text-[11px] text-slate-500 leading-normal">{t.sovereignty.lawDesc}</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-150 shadow-sm">
                <FileSpreadsheet className="w-5 h-5 text-brand mb-3" />
                <h4 className="font-semibold text-xs text-slate-930 mb-1">{t.sovereignty.auditTitle}</h4>
                <p className="text-[11px] text-slate-500 leading-normal">{t.sovereignty.auditDesc}</p>
              </div>

            </div>

          </div>

          {/* Graphical Schema - Right 5 columns on Desktop */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand/3 rounded-full blur-[100px]" />
            
            {/* Visual sovereignty map construct */}
            <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl max-w-sm mx-auto overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full -mr-8 -mt-8" />
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <span className="text-xxs font-bold text-slate-400 uppercase tracking-widest">Périmètre de Sécurité</span>
                <span className="bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <span>SOUVERAIN</span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                </span>
              </div>

              {/* Server Nodes Diagram */}
              <div className="space-y-4">
                
                {/* French Datacenter */}
                <div className="relative border border-brand/30 bg-brand/5 p-4 rounded-xl flex items-center gap-3.5 z-10">
                  <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xxs text-brand-dark uppercase tracking-wider font-bold">Cloud Local France 🇫🇷</span>
                    <span className="block font-semibold text-xs text-slate-800">Datacenters Paris / SecNumCloud</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">Juridiction exclusive République Française</span>
                  </div>
                </div>

                {/* Secure network tunnel */}
                <div className="flex justify-center my-1">
                  <div className="h-6 w-0.5 border-r border-dashed border-slate-300" />
                </div>

                {/* Standard Cloud Act block (Crossed out or blocked) */}
                <div className="relative border border-rose-200 bg-rose-50/50 p-4 rounded-xl flex items-center gap-3.5 opacity-60">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">
                    USA
                  </div>
                  <div className="flex-1">
                    <span className="block text-xxs text-rose-600 uppercase tracking-wider font-bold decoration-line-through">Cloud Act & FISA</span>
                    <span className="block font-semibold text-xs text-slate-700">Demandes d&apos;interceptions US</span>
                    <span className="block text-[10px] text-rose-600 mt-0.5">⚠️ Bloqué par la législation européenne</span>
                  </div>
                </div>

                {/* Secure shield block visually showing interception */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white rounded-xl px-4 py-2 text-xxs font-semibold shadow-lg border border-brand text-center z-15 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-brand" />
                  <span>SOUVERAINETÉ JURIDIQUE TOTALE</span>
                </div>

              </div>

              {/* Informative bottom tags */}
              <div className="mt-8 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="block text-xxs text-slate-400 uppercase font-bold">Zéro</span>
                  <p className="font-semibold text-slate-800 text-xs">Cloud-Act Risk</p>
                </div>
                <div>
                  <span className="block text-xxs text-slate-400 uppercase font-bold">ANSSI</span>
                  <p className="font-semibold text-slate-800 text-xs">SecNumCloud Ready</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
