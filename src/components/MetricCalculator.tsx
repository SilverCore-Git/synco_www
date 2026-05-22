/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Users, Shield, Cpu, Leaf, HelpCircle, HardDrive } from 'lucide-react';

export const MetricCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(50);

  // Computational utilities
  const keysGenerated = teamSize * 4; // 4 devices per team member on average
  const bandwidthSavedGb = Math.round(teamSize * 1.8 * 12); // GB saved per year per user
  const carbonOffsetKg = Math.round(teamSize * 2.4); // kg of Co2 saved by using direct French green-servers
  const monthlyCostEstimate = teamSize <= 10 ? 0 : (teamSize * 4.5); // 4.5€ per user per month (extremely reasonable vs Slack/Teams)

  return (
    <section className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Slider Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-sinko-green font-bold bg-green-50 border border-green-150 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Simulateur d'infrastructure Sinko
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
              Calculez l'empreinte de votre équipe Sinko
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Ajustez la taille de votre entreprise ou communauté pour voir comment Sinko optimise la sécurité de vos clés de chiffrement et l'empreinte carbone de vos communications locales.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-baseline">
              <label className="text-sm font-bold text-slate-800">
                Taille de l'équipe active :
              </label>
              <span className="text-2xl font-black text-sinko-green font-display">
                {teamSize} membres
              </span>
            </div>

            <input
              type="range"
              min="2"
              max="500"
              value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sinko-green"
            />
            
            <div className="flex justify-between text-[11px] text-slate-500 font-mono font-bold">
              <span>2 membres</span>
              <span>100 membres</span>
              <span>250 membres</span>
              <span>500 membres (ETI)</span>
            </div>
          </div>

          <div className="p-4.5 bg-slate-50/60 rounded-2xl border border-slate-200/60 flex gap-3 text-xs text-slate-600">
            <HelpCircle className="w-5 h-5 text-sinko-green shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-bold block">Comment calculons nous ?</strong>
              <p className="mt-0.5 leading-snug">
                Nos calculs sont basés sur le comportement d'un hébergement éco-responsable certifié PUE inférieur à 1,15 situé en France, éliminant les allers-retours transatlantiques via les câbles sous-marins requis par Teams et Slack.
              </p>
            </div>
          </div>
        </div>

        {/* Results metrics (Bento Grid Style) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Card 1: Keys Generated */}
          <div className="p-5.5 bg-slate-50/50 border border-slate-200 rounded-2xl relative overflow-hidden group hover:border-sinko-green/40 transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Sécurité E2EE</span>
              <Shield className="w-4 h-4 text-sinko-green shrink-0" />
            </div>
            <div className="mt-4">
              <span className="text-2xl font-black text-slate-950 font-mono">{keysGenerated.toLocaleString()}</span>
              <p className="text-xs text-slate-600 mt-1.5 font-sans leading-relaxed">
                Clés de chiffrement privées générées de façon décentralisée direct sur les machines.
              </p>
            </div>
          </div>

          {/* Card 2: Carbon saved */}
          <div className="p-5.5 bg-slate-50/50 border border-slate-200 rounded-2xl relative overflow-hidden group hover:border-sinko-green/40 transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Éco-Conception</span>
              <Leaf className="w-4 h-4 text-emerald-500 shrink-0" />
            </div>
            <div className="mt-4">
              <span className="text-2xl font-black text-emerald-600 font-mono">-{carbonOffsetKg} kg CO₂</span>
              <p className="text-xs text-slate-600 mt-1.5 font-sans leading-relaxed">
                Économie annuelle estimée par Sinko en évitant le routage lointain et l'obsolescence matérielle.
              </p>
            </div>
          </div>

          {/* Card 3: Bandwidth optimization */}
          <div className="p-5.5 bg-slate-50/50 border border-slate-200 rounded-2xl relative overflow-hidden group hover:border-sinko-green/40 transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Fluidité Réseau</span>
              <Cpu className="w-4 h-4 text-sinko-green shrink-0" />
            </div>
            <div className="mt-4">
              <span className="text-2xl font-black text-slate-950 font-mono">{bandwidthSavedGb.toLocaleString()} Go / an</span>
              <p className="text-xs text-slate-600 mt-1.5 font-sans leading-relaxed">
                Échange de données optimisé par flux de communication compressé Sinko (Discord Engine).
              </p>
            </div>
          </div>

          {/* Card 4: Budget Simulation */}
          <div className="p-5.5 bg-slate-50/50 border border-slate-200 rounded-2xl relative overflow-hidden group hover:border-sinko-green/40 transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Tarification Estimée</span>
              <span className="font-mono text-[10px] text-sinko-green font-bold uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded border border-green-150">PRO</span>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-black text-slate-950 font-mono">
                {monthlyCostEstimate === 0 ? "Gratuit" : `${monthlyCostEstimate.toLocaleString('fr-FR')} € / mois`}
              </span>
              <p className="text-xs text-slate-600 mt-1.5 font-sans leading-relaxed">
                {teamSize <= 10 
                  ? "Offre d'amorçage gratuite pour les petites équipes de moins de 10 personnes." 
                  : `Seulement 4,50€ par utilisateur/mois (soit ~50% d'économie vs licences US).`}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
