/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, X, ShieldAlert, ShieldCheck, MapPin, Building, Info, FileText } from 'lucide-react';

interface MetricRow {
  name: string;
  description: string;
  sinko: { ok: boolean; text: string };
  slack: { ok: boolean; text: string };
  teams: { ok: boolean; text: string };
}

const COMPARISON_DATA: MetricRow[] = [
  {
    name: "Soumission au CLOUD Act & FISA 702",
    description: "Lois extraterritoriales US permettant d'espionner vos données sans mandat.",
    sinko: { ok: true, text: "Exempté (Entreprise 100% Française)" },
    slack: { ok: false, text: "Soumis (Hébergeur & Capital US)" },
    teams: { ok: false, text: "Soumis (Infrastructure Microsoft US)" }
  },
  {
    name: "Chiffrement de Bout-en-Bout (E2EE)",
    description: "Protection ultime : personne d'autre que vous ne peut lire les messages.",
    sinko: { ok: true, text: "Intégré par défaut (Zéro-Knowledge)" },
    slack: { ok: false, text: "Chiffrement transit uniquement" },
    teams: { ok: false, text: "Transit uniquement (Clés gérées par MS)" }
  },
  {
    name: "Localisation des Données",
    description: "Emplacement physique des serveurs stockant vos conversations et fichiers.",
    sinko: { ok: true, text: "Hébergé en France 🇫🇷 (Éco-responsable)" },
    slack: { ok: false, text: "Serveurs US / Cloud mondiaux" },
    teams: { ok: false, text: "Zones gérées au gré du fournisseur" }
  },
  {
    name: "Conformité stricte RGPD",
    description: "Garanties juridiques, absence de transfert hors UE.",
    sinko: { ok: true, text: "Conforme dès la conception (Privacy by Design)" },
    slack: { ok: false, text: "Accords de transfert de données flous" },
    teams: { ok: false, text: "Multiples enquêtes CNIL en cours" }
  },
  {
    name: "Fluidité & Architecture de Canaux",
    description: "Prise en main ergonomique sans surcharge d'informations.",
    sinko: { ok: true, text: "Discord-style (Salons vocaux instantanés, hyper intuitif)" },
    slack: { ok: true, text: "Canaux linéaires standard" },
    teams: { ok: false, text: "Lourd, arborescence complexe, lenteurs" }
  }
];

export const CompareSection: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null);

  return (
    <section className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-wider bg-green-50 text-sinko-green px-3.5 py-1.5 rounded-full border border-green-100 font-bold">
          La Souveraineté face aux géants US
        </span>
        <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
          Pourquoi Sinko change la donne
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          En choisissant Sinko créé par <strong className="text-slate-900">Silvercor</strong>, vous quittez la dépendance des accords transatlantiques pour une technologie française, ultra-rapide et étanche.
        </p>
      </div>

      {/* Comparison Grid UI */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-mono font-bold tracking-wider text-slate-500">
                <th className="p-5 md:p-6 w-[35%]">CRITÈRE DE SOUVERAINETÉ</th>
                <th className="p-5 md:p-6 text-center text-sinko-green bg-green-50/50 w-[25%] font-extrabold">
                  ⚡ SINKO (Silvercor)
                </th>
                <th className="p-5 md:p-6 text-center w-[20%]">Slack</th>
                <th className="p-5 md:p-6 text-center w-[20%] font-medium">MS Teams</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150">
              {COMPARISON_DATA.map((row, index) => (
                <tr 
                  key={index}
                  onClick={() => setSelectedMetric(selectedMetric === index ? null : index)}
                  className={`group text-xs md:text-sm transition-colors cursor-pointer ${
                    selectedMetric === index ? 'bg-slate-50' : 'hover:bg-slate-50/40'
                  }`}
                >
                  <td className="p-5 md:p-6">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 font-display">
                      {row.name}
                      <Info className="w-4 h-4 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <p className={`text-xs text-slate-500 mt-1.5 transition-all duration-300 overflow-hidden ${
                      selectedMetric === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 md:max-h-24 md:opacity-100'
                    }`}>
                      {row.description}
                    </p>
                  </td>
                  
                  {/* Sinko column */}
                  <td className="p-5 md:p-6 text-center bg-green-50/20 group-hover:bg-green-50/40 transition-colors">
                    <div className="flex flex-col items-center justify-center gap-1">
                      {row.sinko.ok ? (
                        <ShieldCheck className="w-5 h-5 text-sinko-green shrink-0 animate-pulse" />
                      ) : (
                        <Check className="w-5 h-5 text-sinko-green shrink-0" />
                      )}
                      <span className="font-bold text-xs text-emerald-700 font-sans tracking-tight">
                        {row.sinko.text}
                      </span>
                    </div>
                  </td>

                  {/* Slack column */}
                  <td className="p-5 md:p-6 text-center">
                    <div className="flex flex-col items-center justify-center gap-1 text-slate-500">
                      {row.slack.ok ? (
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-red-500/80 shrink-0" />
                      )}
                      <span className="text-[11px] font-sans truncate max-w-[130px] inline-block font-medium">
                        {row.slack.text}
                      </span>
                    </div>
                  </td>

                  {/* Teams column */}
                  <td className="p-5 md:p-6 text-center">
                    <div className="flex flex-col items-center justify-center gap-1 text-slate-500">
                      {row.teams.ok ? (
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-red-500/80 shrink-0" />
                      )}
                      <span className="text-[11px] font-sans truncate max-w-[130px] inline-block font-medium">
                        {row.teams.text}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50/80 border-t border-slate-200 flex justify-between items-center text-[11px] text-slate-500 flex-wrap gap-2">
          <span className="font-medium">💡 Cliquez sur n'importe quel critère pour lire la notice explicative.</span>
          <span className="font-mono text-emerald-700 flex items-center gap-1.5 font-bold">
            <ShieldCheck className="w-4 h-4" /> Immunité totale FISA / CLOUD Act
          </span>
        </div>
      </div>

      {/* European Green Hosting Map Graphic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
        
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono font-bold">
            <Building className="w-4 h-4 text-sinko-green" />
            HEBERGEMENT SOUVERAIN EN FRANCE
          </div>
          <h3 className="text-2xl font-extrabold font-display text-slate-950 tracking-tight">
            Trois datacenters nationaux de haute sécurité
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            La souveraineté de Sinko n'est pas qu'un mot d'ordre marketing : notre infrastructure repose sur des banques de serveurs isolées et administrées en France. Vos clés privées de chiffrement de bout en bout ne transitent jamais sur le réseau sous forme déchiffrée : elles restent confinées au sein de vos navigateurs et applications de bureau.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex gap-3.5 text-xs">
              <div className="w-6 h-6 rounded-lg bg-green-50 text-[#16ac77] font-mono font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <strong className="text-slate-900 font-bold block text-sm">Paris (Datacenter Vert Principal)</strong>
                <p className="text-slate-500 text-xs mt-0.5">Hébergement redondant à faible empreinte carbone, certifié ISO 27001 et HDS.</p>
              </div>
            </div>
            <div className="flex gap-3.5 text-xs">
              <div className="w-6 h-6 rounded-lg bg-green-50 text-[#16ac77] font-mono font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <strong className="text-slate-900 font-bold block text-sm">Lyon & Strasbourg (Système de Miroirs)</strong>
                <p className="text-slate-500 text-xs mt-0.5">Serveurs secondaires en miroir continu garantissant un temps de disponibilité de 99,99%.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Graphic Map Panel */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 relative overflow-hidden h-[360px] flex items-center justify-center shadow-lg">
          {/* Subtle grid elements representing France border styling */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#16ac77_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          {/* Sinko stylized France outline graphic using css cards and nodes */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            
            {/* Outline shape */}
            <div className="absolute w-72 h-72 border border-sinko-green/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute w-56 h-56 border border-sinko-green/20 rounded-full rotate-45"></div>
            
            {/* Center Landmark nodes */}
            {/* Paris Node */}
            <div className="absolute top-1/4 left-1/2 -ml-2 -mt-2 group z-20">
              <div className="absolute -inset-1 rounded-full bg-sinko-green animate-ping opacity-75"></div>
              <div className="relative w-4 h-4 bg-sinko-green rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <MapPin className="w-3 h-3 text-white" />
              </div>
              <div className="absolute top-6 -left-12 bg-slate-900 text-[10px] text-white font-mono px-2 py-1 rounded shadow-xl whitespace-nowrap z-10 pointer-events-none group-hover:scale-105 transition-transform">
                📍 Paris (Serveur Maître)
              </div>
            </div>

            {/* Strasbourg Node */}
            <div className="absolute top-1/3 right-12 group z-20">
              <div className="absolute -inset-1 rounded-full bg-sinko-green animate-ping opacity-60"></div>
              <div className="relative w-4 h-4 bg-sinko-green rounded-full flex items-center justify-center shadow cursor-pointer" style={{ animationDelay: '1s' }}>
                <MapPin className="w-3 h-3 text-white" />
              </div>
              <div className="absolute top-6 -left-12 bg-slate-900 text-[10px] text-white font-mono px-2 py-1 rounded shadow-xl whitespace-nowrap z-10 pointer-events-none">
                📁 Strasbourg (Redondance)
              </div>
            </div>

            {/* Lyon Node */}
            <div className="absolute bottom-1/3 right-1/4 group z-20">
              <div className="absolute -inset-1 rounded-full bg-sinko-green/85 animate-ping opacity-60"></div>
              <div className="relative w-4 h-4 bg-sinko-green rounded-full flex items-center justify-center shadow cursor-pointer" style={{ animationDelay: '2s' }}>
                <MapPin className="w-3 h-3 text-white" />
              </div>
              <div className="absolute top-6 -left-12 bg-slate-900 text-[10px] text-white font-mono px-2 py-1 rounded shadow-xl whitespace-nowrap z-10 pointer-events-none">
                📁 Lyon (Sauvegarde)
              </div>
            </div>

            {/* Decorative Central Hub Label */}
            <div className="bg-slate-50/95 border border-slate-200 rounded-2xl p-4 text-center w-56 shadow-xl z-0 backdrop-blur-sm">
              <span className="text-[9px] font-mono text-slate-500 block font-bold uppercase tracking-wider">SOUVERAINETÉ PHYSIQUE</span>
              <strong className="text-13px text-slate-900 block mt-1 font-bold">Silvercor Cloud Network</strong>
              <div className="mt-2 flex justify-center gap-1.5 text-[10px] text-emerald-700 font-mono font-semibold">
                <span>Région: Europe-West9</span>
                <span>•</span>
                <span>Active</span>
              </div>
            </div>

          </div>

          <div className="absolute bottom-4 left-4 bg-slate-100 border border-slate-200 rounded-full px-3 py-1 text-[10px] text-slate-600 flex items-center gap-1.5 font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sinko-green inline-block animate-pulse"></span>
            Hébergeurs français certifiés SecNumCloud
          </div>
        </div>

      </div>
    </section>
  );
};
