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

// Theme colors
const colors = {
  primary: '#108e62',
  text: '#27272a',
  textSecondary: '#52525b',
  bg: '#ffffff',
  border: '#e4e4e7',
  lightBg: '#f8f8f8',
  darkBg: '#1a1a1a',
};

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
    <section id="pricing" className="py-24 sm:py-32" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Minimalist */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block"
            style={{ color: colors.primary }}
          >
            Transparent
          </span>
          <h2
            className="text-4xl sm:text-5xl font-display font-semibold mb-6 tracking-tight"
            style={{ color: colors.text }}
          >
            {t.pricing.title}
          </h2>
          <p
            className="text-sm leading-relaxed max-w-lg mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Configurator - Simplified */}
        <div className="max-w-3xl mx-auto mb-20">
          <div
            className="rounded-2xl p-8 sm:p-12 border"
            style={{ backgroundColor: colors.lightBg, borderColor: colors.border }}
          >
            <h3
              className="text-lg font-display font-medium mb-8 text-center"
              style={{ color: colors.text }}
            >
              Configurez votre espace de travail
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Slots Configurator */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: colors.textSecondary }}
                  >
                    Nombre d'utilisateurs
                  </label>
                  <span
                    className="text-2xl font-display font-semibold"
                    style={{ color: colors.primary }}
                  >
                    {slots}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleSlotsChange(-10)}
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-opacity-10"
                    style={{
                      borderColor: colors.border,
                      color: colors.primary,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary + '10'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
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
                    style={{
                      accentColor: colors.primary,
                    }}
                  />
                  <button
                    onClick={() => handleSlotsChange(10)}
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-opacity-10"
                    style={{
                      borderColor: colors.border,
                      color: colors.primary,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary + '10'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    disabled={slots >= MAX_SLOTS}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex justify-between text-[10px] uppercase tracking-wider" style={{ color: colors.textSecondary }}>
                  <span>{MIN_SLOTS} min</span>
                  <span>{MAX_SLOTS.toLocaleString()} max</span>
                </div>
              </div>

              {/* Storage Configurator */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: colors.textSecondary }}
                  >
                    Stockage par utilisateur
                  </label>
                  <span
                    className="text-2xl font-display font-semibold"
                    style={{ color: colors.primary }}
                  >
                    {effectiveStoragePerUser} Go
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleStorageChange(-10)}
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-opacity-10"
                    style={{
                      borderColor: colors.border,
                      color: colors.primary,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary + '10'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
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
                    style={{
                      accentColor: colors.primary,
                    }}
                  />
                  <button
                    onClick={() => handleStorageChange(10)}
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-opacity-10"
                    style={{
                      borderColor: colors.border,
                      color: colors.primary,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary + '10'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    disabled={storagePerUser >= MAX_STORAGE_PER_USER || exceedsTotalStorage}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex justify-between text-[10px] uppercase tracking-wider" style={{ color: colors.textSecondary }}>
                  <span>{MIN_STORAGE_PER_USER} Go min</span>
                  <span>{MAX_STORAGE_PER_USER} Go max</span>
                </div>
              </div>
            </div>

            {/* Total Storage Display */}
            <div className="mt-10 pt-8 border-t" style={{ borderColor: colors.border }}>
              <div className="flex items-center justify-between">
                <span
                  className="text-xs uppercase tracking-wider"
                  style={{ color: colors.textSecondary }}
                >
                  Stockage total
                </span>
                <div className="flex items-center gap-4">
                  <span
                    className="text-3xl font-display font-semibold"
                    style={{ color: colors.text }}
                  >
                    {exceedsTotalStorage ? '10 To' : `${totalStorageTB} To`}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    ({totalStorageGB.toLocaleString()} Go)
                  </span>
                </div>
              </div>

              {exceedsTotalStorage && (
                <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: colors.primary }}>
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
          <div
            className="group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: colors.bg,
              borderColor: colors.border,
            }}
          >
            <div className="mb-6">
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-2"
                style={{ color: colors.textSecondary }}
              >
                Souverain Standard
              </h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-4xl font-display font-semibold"
                  style={{ color: colors.text }}
                >
                  {standardTotal}€
                </span>
                <span
                  className="text-xs"
                  style={{ color: colors.textSecondary }}
                >
                  /mois
                </span>
              </div>
              <p
                className="text-xs mt-3 leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                Pour les équipes de {slots} utilisateurs avec {effectiveStoragePerUser} Go chacun.
              </p>
            </div>

            <div
              className="h-px mb-6"
              style={{ backgroundColor: colors.border }}
            />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Chiffrement de bout en bout (E2EE)</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Salons privés illimités</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Visioconférences jusqu'à 50 participants</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>{effectiveStoragePerUser} Go de stockage par utilisateur</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Hébergement France standard</span>
              </li>
            </ul>

            <button
              className="w-full py-3 px-4 rounded-lg text-xs font-semibold transition-all"
              style={{
                backgroundColor: colors.lightBg,
                color: colors.text,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.lightBg;
              }}
              onClick={() => alert('Essai Standard démarré')}
            >
              <span className="flex items-center justify-center gap-2">
                Essai gratuit 30 jours
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Pro Tier - Featured */}
          <div
            className="group md:scale-105 rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl"
            style={{
              backgroundColor: colors.darkBg,
              borderColor: colors.primary,
              boxShadow: `0 0 24px ${colors.primary}15`,
            }}
          >
            <div className="mb-1">
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block"
                style={{
                  backgroundColor: colors.primary + '20',
                  color: colors.primary,
                }}
              >
                Recommandé
              </span>
            </div>

            <div className="mb-6 mt-4">
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-2"
                style={{ color: colors.primary }}
              >
                Souverain Pro
              </h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-4xl font-display font-semibold"
                  style={{ color: colors.bg }}
                >
                  {proTotal}€
                </span>
                <span
                  className="text-xs"
                  style={{ color: colors.textSecondary }}
                >
                  /mois
                </span>
              </div>
              <p
                className="text-xs mt-3 leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                Sécurité renforcée pour équipes exigeantes.
              </p>
            </div>

            <div
              className="h-px mb-6"
              style={{ backgroundColor: colors.border }}
            />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.bg }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Tout le forfait Standard</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.bg }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Authentification SSO (SAML v2, OIDC)</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.bg }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Infrastructure souveraine France 100%</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.bg }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Journal d'audit de sécurité</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.bg }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Support prioritaire 24/7</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.bg }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Intégration Active Directory</span>
              </li>
            </ul>

            <button
              className="w-full py-3 px-4 rounded-lg text-xs font-semibold transition-all"
              style={{
                backgroundColor: colors.primary,
                color: colors.bg,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onClick={() => alert('Essai Pro démarré')}
            >
              <span className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Démarrer l'essai Pro
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Public Sector Tier */}
          <div
            className="group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: colors.bg,
              borderColor: colors.border,
            }}
          >
            <div className="mb-6">
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-2"
                style={{ color: colors.textSecondary }}
              >
                Secteur Public
              </h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-4xl font-display font-semibold"
                  style={{ color: colors.text }}
                >
                  Sur devis
                </span>
              </div>
              <p
                className="text-xs mt-3 leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                Pour les organisations souveraines et défense.
              </p>
            </div>

            <div
              className="h-px mb-6"
              style={{ backgroundColor: colors.border }}
            />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Déploiement On-Premise possible</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Chiffrement HSM physique</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Marque blanche personnalisée</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Homologation de sécurité</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>Tarification administration</span>
              </li>
              <li className="flex items-start gap-3 text-xs" style={{ color: colors.text }}>
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.primary }} />
                <span>SLA contractuel garanti</span>
              </li>
            </ul>

            <button
              className="w-full py-3 px-4 rounded-lg text-xs font-semibold transition-all"
              style={{
                backgroundColor: colors.lightBg,
                color: colors.text,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.lightBg;
              }}
              onClick={() => alert('Contact entreprise')}
            >
              <span className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Contactez-nous
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Eco Notice */}
        <div className="mt-16 text-center">
          <p
            className="text-[10px] leading-relaxed max-w-lg mx-auto"
            style={{ color: colors.textSecondary }}
          >
            Les serveurs Sinco opèrent à 100% sur de l'énergie décarbonée d'origine hydraulique et nucléaire française.
          </p>
        </div>

      </div>
    </section>
  );
}