import { Shield, Sparkles, Server, Check, HelpCircle, Eye, EyeOff } from 'lucide-react';
import { TranslationSet } from '../types';
import { useState } from 'react';

interface HeroProps {
  t: TranslationSet;
}

export default function Hero({ t }: HeroProps) {
  const [showEncryptedState, setShowEncryptedState] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Decorative background grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(22,172,119,0.03)_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Absolute aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-brand/8 text-brand-dark border border-brand/12 mb-6 sm:mb-8 animate-[slideDown_0.3s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider font-display">
              {t.hero.sovereignBadge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
            {t.hero.title}
            <span className="block mt-2 bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
              {t.hero.titleGradient}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            {t.hero.description}
          </p>

          {/* Direct Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              id="hero-primary-cta"
              onClick={() => scrollToSection('pricing')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-xl transition-all shadow-md shadow-brand/20 hover:translate-y-[-1px] cursor-pointer"
            >
              <Shield className="w-4 h-4 mr-2" />
              {t.hero.primaryCta}
            </button>
            <button
              id="hero-secondary-cta"
              onClick={() => scrollToSection('demo')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all hover:translate-y-[-1px] cursor-pointer"
            >
              {t.hero.secondaryCta}
            </button>
          </div>

          {/* Compliance items */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-500 text-xs mb-10">
            <span className="flex items-center gap-1.5">
              <Server className="w-4 h-4 text-brand" /> {t.hero.securityBadge}
            </span>
          </div>
        </div>

        {/* Application Mockup with Interactive Encryption State */}
        <div id="app-mockup" className="relative max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden mt-6">
          
          {/* Mock Top bar */}
          <div className="bg-slate-50 border-b border-slate-150 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-400 block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 block" />
              <span className="text-xs text-slate-400 font-mono ml-4">https://app.sinco.fr/workspace/sec-cabinet</span>
            </div>
            
            {/* Interactive Toggle Button directly explaining E2EE encryption vs standard */}
            <div className="flex items-center space-x-2.5">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                {showEncryptedState ? "🚨 Mode d'interception serveur active" : "🔒 Mode Chiffré de Bout en bout"}
              </span>
              <button
                id="toggle-mock-encryption"
                onClick={() => setShowEncryptedState(!showEncryptedState)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  showEncryptedState ? 'bg-amber-500' : 'bg-brand'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showEncryptedState ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex h-[420px] sm:h-[480px]">
            
            {/* Sidebar Mock */}
            <div className="w-48 sm:w-64 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col justify-between p-3.5 select-none">
              <div>
                {/* Organization title */}
                <div className="flex items-center justify-between mb-6 px-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="bg-brand text-white font-bold w-6 h-6 rounded-md flex items-center justify-center text-xs">S</span>
                    <span className="font-bold text-white text-sm tracking-tight">Sinco France</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                </div>

                {/* Secure Badge */}
                <div className="bg-slate-800/60 rounded-lg p-2 mb-4 text-xxs flex items-center space-x-1.5 border border-slate-700/50">
                  <Shield className="w-3 h-3 text-brand flex-shrink-0" />
                  <span className="text-white font-medium">Hébergement Souverain Actif</span>
                </div>

                {/* Subsections */}
                <span className="text-slate-500 text-xxs uppercase tracking-wider font-bold block px-2 mb-2">Canaux Sécurisés</span>
                <div className="space-y-1">
                  <span className="flex items-center justify-between text-xs px-2 py-1.5 rounded bg-brand/12 text-white font-medium">
                    <span className="flex items-center gap-1"># général</span>
                    <Shield className="w-3 h-3 text-brand" />
                  </span>
                  <span className="flex items-center justify-between text-xs px-2 py-1.5 rounded text-slate-400 hover:bg-slate-800/50 cursor-pointer">
                    <span># stratégie-2026</span>
                    <Shield className="w-3 h-3 text-slate-500" />
                  </span>
                  <span className="flex items-center justify-between text-xs px-2 py-1.5 rounded text-slate-400 hover:bg-slate-800/50 cursor-pointer">
                    <span># brevets-conception</span>
                    <Shield className="w-3 h-3 text-slate-500" />
                  </span>
                  <span className="flex items-center justify-between text-xs px-2 py-1.5 rounded text-slate-400 hover:bg-slate-800/50 cursor-pointer">
                    <span className="text-brand-light font-medium">🔒 r&d-militaire</span>
                    <Shield className="w-3 h-3 text-brand-light" />
                  </span>
                </div>

                <span className="text-slate-500 text-xxs uppercase tracking-wider font-bold block px-2 mt-6 mb-2">Membres</span>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 px-2 py-1 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                    <span className="text-slate-300">Colonel Moreau</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2 py-1 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                    <span className="text-slate-400">Chloé (SSI)</span>
                  </div>
                </div>
              </div>

              {/* Account profile footer */}
              <div className="bg-slate-950 p-2 rounded-lg flex items-center justify-between text-xs">
                <div className="truncate">
                  <span className="block text-white font-semibold truncate">Cédric OIV</span>
                  <span className="text-slate-500 text-xxs">cedric@etat.gouv.fr</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-brand" />
              </div>
            </div>

            {/* Chat Body Mockup */}
            <div className="flex-1 bg-slate-50 flex flex-col justify-between p-4 relative">
              
              {/* Top active channel info */}
              <div className="border-b border-slate-200/80 pb-3 flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold text-slate-800"># r&d-militaire</span>
                    <span className="bg-brand/10 text-brand text-xxs font-semibold px-1.5 py-0.5 rounded">Zéro Trust</span>
                  </div>
                  <p className="text-slate-500 text-xxs mt-0.5">Clef de session : sinco_dh_ec256_active</p>
                </div>
                <div className="flex items-center space-x-1 bg-emerald-100/60 text-brand-dark px-2.5 py-1 rounded-full text-xxs font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Chiffré de bout en bout</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-sm">
                
                {/* Peer Message */}
                <div className="flex items-start space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-700">CM</div>
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-semibold text-slate-800 text-xs">Colonel Moreau</span>
                      <span className="text-[10px] text-slate-400">09:12</span>
                    </div>
                    
                    <div className="mt-1 bg-white border border-slate-200 p-2.5 rounded-xl rounded-tl-none max-w-sm">
                      {showEncryptedState ? (
                        <div className="font-mono text-xs text-amber-600 break-all select-all">
                          U2FsdGVkX19P/H29u2H9TqUe2S9uXm+m74v2h0P/xMv6h4=
                          <span className="block mt-1.5 text-[10px] text-slate-400 font-sans italic">
                            (Interception serveur : Les routeurs et la base de données ne voient que ce texte indéchiffrable)
                          </span>
                        </div>
                      ) : (
                        <p className="text-slate-700">
                          Bonjour Cédric. Le rapport ANSSI concernant notre homologation SecNumCloud vient d&apos;arriver. Le protocole de chiffrement Sinco est validé.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Peer Message 2 */}
                <div className="flex items-start space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand bg-opacity-20 flex items-center justify-center text-xs font-bold text-brand-dark">CO</div>
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-semibold text-slate-800 text-xs">Vous (Cédric)</span>
                      <span className="text-[10px] text-slate-400">09:14</span>
                    </div>

                    <div className="mt-1 bg-brand bg-opacity-8 border border-brand/10 p-2.5 rounded-xl rounded-tl-none max-w-sm">
                      {showEncryptedState ? (
                        <div className="font-mono text-xs text-amber-600 break-all select-all">
                          WjI5dWptVjBjeXBuY21SclluSmxlM056Y3k5bWNtRnVZMlU9
                          <span className="block mt-1.5 text-[10px] text-slate-400 font-sans italic">
                            (Information cryptée à l&apos;origine par AES-GCM-256)
                          </span>
                        </div>
                      ) : (
                        <p className="text-slate-700">
                          Excellente nouvelle. Toutes nos discussions stratégiques sur les brevets de turbine sont enfin immunisées contre le Patriot Act. 🇫🇷
                        </p>
                      )}
                    </div>
                  </div>
                </div>

              </div>

              {/* Interactive warning label */}
              {showEncryptedState && (
                <div className="absolute inset-0 bg-slate-900/90 text-white flex flex-col items-center justify-center p-6 text-center z-10 animate-[fadeIn_0.2s_ease-out]">
                  <EyeOff className="w-12 h-12 text-amber-400 mb-3" />
                  <h4 className="font-semibold text-base mb-1">Perspective du Serveur / Routeur Réseau</h4>
                  <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                    Si un pirate de réseau, un gouvernement étranger, ou même Sinco tente d'accéder à ce serveur, ils verront uniquement ce flux chiffré indéchiffrable. Personne sauf Moreau et vous ne détient la clef.
                  </p>
                  <button
                    id="mockup-action-btn"
                    onClick={() => setShowEncryptedState(false)}
                    className="mt-4 px-4 py-2 bg-brand text-xs font-semibold rounded-lg hover:bg-brand-dark"
                  >
                    Activer le Déchiffrement Client
                  </button>
                </div>
              )}

              {/* Message Input Box Mockup */}
              <div className="mt-4 bg-white border border-slate-200 rounded-xl p-2 flex items-center justify-between">
                <input
                  type="text"
                  readOnly
                  value="Saisir votre message securisé..."
                  className="bg-transparent text-slate-400 text-xs flex-1 outline-none px-2"
                />
                <button
                  id="mockup-send-btn"
                  className="bg-brand text-white w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Short Trusted Badges */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            {t.hero.trustedBy}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 opacity-75 grayscale contrast-125">
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-medium text-slate-800 text-sm tracking-widest">MINISTÈRE DE LA DÉFENSE</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-medium text-slate-800 text-sm tracking-wider">AÉROPORT DE PARIS</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-bold text-slate-800 text-sm tracking-wider">SANOFI S.A.</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-medium text-slate-800 text-sm tracking-widest text-[#16ac77]">ANSSI COMPLIANT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
