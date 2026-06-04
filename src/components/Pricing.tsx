import { useState, useMemo } from 'react';
import { Check, ShieldCheck, Mail, ArrowRight, Plus, Minus, AlertCircle } from 'lucide-react';
import { TranslationSet } from '../types';

interface PricingProps {
  t: TranslationSet;
}

// Constants for limits
const MIN_SLOTS = 10;
const MAX_SLOTS = 10000;
const MIN_STORAGE_PER_USER = 20;
const MAX_STORAGE_PER_USER = 100; // 100 Go max per user
const MAX_TOTAL_STORAGE_GB = 10240; // 10 To = 10240 Go max per account

export default function Pricing({ t }: PricingProps) {
  // Configurator state
  const [slots, setSlots] = useState<number>(50);
  const [storagePerUser, setStoragePerUser] = useState<number>(50); // Go per user

  // Calculate total storage
  const totalStorageGB = useMemo(() => slots * storagePerUser, [slots, storagePerUser]);
  const totalStorageTB = (totalStorageGB / 1024).toFixed(2);

  // Check if limits are exceeded
  const exceedsTotalStorage = totalStorageGB > MAX_TOTAL_STORAGE_GB;
  
  // Calculate effective storage per user (capped by total account limit)
  const effectiveStoragePerUser = exceedsTotalStorage 
    ? Math.floor(MAX_TOTAL_STORAGE_GB / slots) 
    : storagePerUser;

  // Pricing calculation
  const standardPrice = 4.90;
  const proPrice = 8.90;
  
  const standardTotal = (slots * standardPrice).toFixed(2);
  const proTotal = (slots * proPrice).toFixed(2);

  const handleSlotsChange = (delta: number) => {
    setSlots(prev => Math.max(MIN_SLOTS, Math.min(MAX_SLOTS, prev + delta)));
  };

  const handleStorageChange = (delta: number) => {
    setStoragePerUser(prev => {
      const newValue = prev + delta;
      // Check if new value would exceed total limit
      if (slots * newValue > MAX_TOTAL_STORAGE_GB) {
        return Math.floor(MAX_TOTAL_STORAGE_GB / slots);
      }
      return Math.max(MIN_STORAGE_PER_USER, Math.min(MAX_STORAGE_PER_USER, newValue));
    });
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Minimalist geometric background */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-brand" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" className="text-brand" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section title - Minimalist */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mb-6 block">
            Transparent
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-light text-slate-900 mb-6 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Configurator */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
            <h3 className="text-lg font-display font-medium text-slate-900 mb-8 text-center">
              Configurez votre espace de travail
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Slots Configurator */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Nombre d'utilisateurs
                  </label>
                  <span className="text-2xl font-display font-semibold text-brand">
                    {slots}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleSlotsChange(-10)}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
                    disabled={slots <= MIN_SLOTS}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="range"
                    min={MIN_SLOTS}
                    max={MAX_SLOTS}
                    value={slots}
                    onChange={(e) => setSlots(Number(e.target.value))}
                    className="flex-1"
                  />
                  <button
                    onClick={() => handleSlotsChange(10)}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
                    disabled={slots >= MAX_SLOTS}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-wider">
                  <span>{MIN_SLOTS} min</span>
                  <span>{MAX_SLOTS.toLocaleString()} max</span>
                </div>
              </div>

              {/* Storage Configurator */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Stockage par utilisateur
                  </label>
                  <span className="text-2xl font-display font-semibold text-brand">
                    {effectiveStoragePerUser} Go
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleStorageChange(-10)}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
                    disabled={storagePerUser <= MIN_STORAGE_PER_USER}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="range"
                    min={MIN_STORAGE_PER_USER}
                    max={MAX_STORAGE_PER_USER}
                    step={10}
                    value={storagePerUser}
                    onChange={(e) => setStoragePerUser(Number(e.target.value))}
                    className="flex-1"
                    disabled={exceedsTotalStorage}
                  />
                  <button
                    onClick={() => handleStorageChange(10)}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-brand hover:text-brand transition-colors"
                    disabled={storagePerUser >= MAX_STORAGE_PER_USER || exceedsTotalStorage}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-wider">
                  <span>{MIN_STORAGE_PER_USER} Go min</span>
                  <span>{MAX_STORAGE_PER_USER} Go max</span>
                </div>
              </div>
            </div>

            {/* Total Storage Display */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Stockage total
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-display font-semibold text-slate-900">
                    {exceedsTotalStorage ? '10 To' : `${totalStorageTB} To`}
                  </span>
                  <span className="text-sm text-slate-400">
                    ({totalStorageGB.toLocaleString()} Go)
                  </span>
                </div>
              </div>
              
              {exceedsTotalStorage && (
                <div className="mt-4 flex items-center gap-2 text-amber-600 text-xs">
                  <AlertCircle className="w-4 h-4" />
                  <span>
                    Limite maximale atteinte (10 To). Stockage par utilisateur ajusté à {effectiveStoragePerUser} Go.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Tiers - Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Standard Tier */}
          <div className="group relative bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Souverain Standard
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-semibold text-slate-900">
                  {standardTotal}€
                </span>
                <span className="text-xs text-slate-400">/mois</span>
              </div>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Pour les équipes de {slots} utilisateurs avec {effectiveStoragePerUser} Go chacun.
              </p>
            </div>

            <div className="h-px bg-slate-100 mb-6" />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Chiffrement de bout en bout (E2EE)</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Salons privés illimités</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Visioconférences jusqu'à 50 participants</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>{effectiveStoragePerUser} Go de stockage par utilisateur</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Hébergement France standard</span>
              </li>
            </ul>

            <button
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              onClick={() => alert('Essai Standard démarré')}
            >
              <span>Essai gratuit 30 jours</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pro Tier */}
          <div className="group relative bg-slate-900 rounded-2xl border border-slate-800 p-8 transition-all duration-300 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10">
            <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-brand to-brand-dark" />
            
            <div className="mb-1">
              <span className="text-[10px] font-bold text-brand uppercase tracking-wider bg-brand/10 px-3 py-1 rounded-full">
                Recommandé
              </span>
            </div>
            
            <div className="mb-6 mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand mb-2">
                Souverain Pro
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-semibold text-white">
                  {proTotal}€
                </span>
                <span className="text-xs text-slate-400">/mois</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Sécurité renforcée pour équipes exigeantes.
              </p>
            </div>

            <div className="h-px bg-slate-800 mb-6" />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-xs text-slate-300">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Tout le forfait Standard</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-300">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Authentification SSO (SAML v2, OIDC)</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-300">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Cloud SecNumCloud qualifié</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-300">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Journal d'audit de sécurité</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-300">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Support prioritaire 24/7</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-300">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Intégration Active Directory</span>
              </li>
            </ul>

            <button
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-brand hover:bg-brand-dark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand/25"
              onClick={() => alert('Essai Pro démarré')}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Démarrer l'essai Pro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="group relative bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Secteur Public
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-semibold text-slate-900">
                  Sur devis
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Pour les organisations souveraines et défense.
              </p>
            </div>

            <div className="h-px bg-slate-100 mb-6" />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Déploiement On-Premise possible</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Chiffrement HSM physique</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Marque blanche personnalisée</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Homologation de sécurité</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>Tarification administration</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-slate-600">
                <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                <span>SLA contractuel garanti</span>
              </li>
            </ul>

            <button
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              onClick={() => alert('Contact entreprise')}
            >
              <Mail className="w-4 h-4" />
              <span>Contactez-nous</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Eco notice */}
        <div className="mt-16 text-center">
          <p className="text-[10px] text-slate-400 leading-relaxed max-w-lg mx-auto">
            🌿 Les serveurs Sinco opèrent à 100% sur de l'énergie décarbonée d'origine hydraulique et nucléaire française.
          </p>
        </div>

      </div>
    </section>
  );
}