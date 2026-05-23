import { useState, useEffect } from 'react';
import { Shield, Key, ArrowRight, Server, Laptop, Cpu, Lock, Unlock, AlertTriangle, RefreshCw } from 'lucide-react';
import { TranslationSet } from '../types';

interface E2EEDemoProps {
  t: TranslationSet;
}

// Simple base64 cypher substitution to emulate real-time encryption visually in JS
function simulateEncrypt(text: string, secretKey: string): string {
  if (!text) return '';
  // Simple deterministic but visually realistic AES-like byte scrambling
  let encoded = '';
  const merged = text + '||' + secretKey;
  for (let i = 0; i < merged.length; i++) {
    const charCode = merged.charCodeAt(i);
    encoded += String.fromCharCode(charCode ^ 42); // XOR with 42
  }
  try {
    return 'sinco_v1_e2ee_' + btoa(unescape(encodeURIComponent(encoded))).substring(0, 36) + '==';
  } catch (e) {
    return 'sinco_v1_e2ee_encrypted_data_hash';
  }
}

function simulateDecrypt(cipher: string, secretKey: string): { text: string; success: boolean } {
  if (!cipher || !cipher.startsWith('sinco_v1_e2ee_')) {
    return { text: '', success: false };
  }
  
  // Real decrypt check: reverse XOR
  const base64Part = cipher.replace('sinco_v1_e2ee_', '').replace(/==$/, '');
  try {
    const rawEncoded = decodeURIComponent(escape(atob(base64Part)));
    let decryptedMerged = '';
    for (let i = 0; i < rawEncoded.length; i++) {
      decryptedMerged += String.fromCharCode(rawEncoded.charCodeAt(i) ^ 42);
    }
    
    const parts = decryptedMerged.split('||');
    const originalText = parts[0];
    const originalKey = parts[1];
    
    if (originalKey === secretKey) {
      return { text: originalText, success: true };
    } else {
      return { text: '❌ [CORRUPTION_KEY_MISMATCH]: Impossible de déchiffrer. La clé de session ne correspond pas.', success: false };
    }
  } catch (e) {
    return { text: '❌ [CRYPTOGRAPHIC_ERROR]: Données invalides ou clé corrompue.', success: false };
  }
}

const DEFAULT_MESSAGES = [
  "Rapport budgétaire stratégique confidentiel.",
  "Notre code source contient les brevets de turbine.",
  "La réunion secrète est déplacée à 15h00 au ministère.",
  "Achat confidentiel pour la filiale française."
];

export default function E2EEDemo({ t }: E2EEDemoProps) {
  const [inputText, setInputText] = useState(DEFAULT_MESSAGES[0]);
  const [secretKey, setSecretKey] = useState("sinco-99a2-f87c-bc42");
  const [transitCipher, setTransitCipher] = useState("");
  const [recipientKey, setRecipientKey] = useState("sinco-99a2-f87c-bc42");
  const [decryptedResult, setDecryptedResult] = useState<{ text: string; success: boolean }>({ text: inputText, success: true });
  const [step, setStep] = useState<'plain' | 'encrypted' | 'transit' | 'decrypted'>('plain');

  // Automatically update cipher when input text or secret key change
  useEffect(() => {
    const encrypted = simulateEncrypt(inputText, secretKey);
    setTransitCipher(encrypted);
    
    // Recipient decrypts with recipientKey
    const decrypted = simulateDecrypt(encrypted, recipientKey);
    if (!inputText) {
      setDecryptedResult({ text: '', success: true });
    } else {
      setDecryptedResult(decrypted);
    }
  }, [inputText, secretKey, recipientKey]);

  const generateNewKey = () => {
    const hex = Array.from({ length: 4 }, () => Math.floor(Math.random() * 65536).toString(16).padStart(4, '0')).join('-');
    const newKey = `sinco-${hex}`;
    setSecretKey(newKey);
    setRecipientKey(newKey);
  };

  const loadRandomMessage = () => {
    const curIdx = DEFAULT_MESSAGES.indexOf(inputText);
    const nextIdx = (curIdx + 1) % DEFAULT_MESSAGES.length;
    setInputText(DEFAULT_MESSAGES[nextIdx]);
    setStep('plain');
  };

  return (
    <section id="demo" className="py-20 sm:py-24 bg-[#fafcfa] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xxs font-bold text-brand uppercase tracking-widest bg-brand/10 px-3 py-1.5 rounded-full mb-4 inline-block">
            SÉCURITÉ DÉMONTRÉE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900 mb-4">
            {t.liveDemo.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.liveDemo.subtitle}
          </p>
        </div>

        {/* Dynamic Encryption Playground Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Panel - Left side (4 columns) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-slate-900 text-sm flex items-center gap-2">
                  <Laptop className="w-4.5 h-4.5 text-slate-500" />
                  Console de l&apos;Émetteur
                </h3>
                <button
                  id="random-message-btn"
                  onClick={loadRandomMessage}
                  className="text-xxs text-slate-500 hover:text-brand flex items-center gap-1 bg-slate-100 px-2 py-1 rounded transition-colors"
                >
                  <RefreshCw className="w-3 h-3" /> Changer de texte
                </button>
              </div>

              {/* Input Text area */}
              <div className="mb-6">
                <label className="block text-xxs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Message Secret (Tapez ici)
                </label>
                <textarea
                  id="client-demo-input"
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    if (step === 'plain') setStep('encrypted');
                  }}
                  placeholder={t.liveDemo.placeholder}
                  maxLength={180}
                  className="w-full h-24 p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-brand focus:border-brand focus:bg-white outline-none text-slate-700 resize-none transition-all"
                />
              </div>

              {/* Secret Key configurations */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xxs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1">
                    <Key className="w-3.5 h-3.5 text-brand" />
                    {t.liveDemo.keyLabel}
                  </label>
                  <button
                    id="gen-key-btn"
                    onClick={generateNewKey}
                    className="text-xxs text-brand font-medium hover:underline"
                  >
                    Générer une clé
                  </button>
                </div>
                
                <input
                  type="text"
                  id="client-demo-key"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg text-slate-600"
                />
              </div>

              {/* Recipient Key config to test mismatch */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="block text-xxs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1">
                    Clé Secrète du Destinataire
                  </span>
                  {secretKey !== recipientKey && (
                    <button
                      id="reset-recipient-key"
                      onClick={() => setRecipientKey(secretKey)}
                      className="text-xxs text-amber-600 font-semibold"
                    >
                      Synchroniser
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  id="recipient-demo-key"
                  value={recipientKey}
                  onChange={(e) => setRecipientKey(e.target.value)}
                  className={`w-full px-3 py-2 text-xs font-mono border rounded-lg ${
                    secretKey === recipientKey 
                    ? 'bg-slate-50 border-slate-200 text-slate-600' 
                    : 'bg-amber-50 border-amber-200 text-amber-700 font-semibold'
                  }`}
                />
                {secretKey !== recipientKey && (
                  <p className="text-[10px] text-amber-600 leading-normal mt-1 flex items-start gap-1">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    Simulation d&apos;attaque de l&apos;homme du milieu : Les clés diffèrent, la donnée est impossible à décoder.
                  </p>
                )}
              </div>
            </div>

            <div className="pt-6 text-slate-400 text-xxs border-t border-slate-100 mt-6 mt-auto">
              {t.liveDemo.interactiveNotice}
            </div>
          </div>

          {/* Interactive Flow Visualizer - Right side (8 columns) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 flex flex-col justify-between">
            <h3 className="font-display font-semibold text-slate-900 text-sm mb-6 flex items-center gap-2">
              <Cpu className="w-4.5 h-4.5 text-brand" />
              Analyse du Flux Réseau (Protocoles d&apos;Échange Direct)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Step 1: Emitter */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xxs px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold">ÉMETTEUR</span>
                    <Laptop className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="font-semibold text-xs text-slate-800 mb-1">Votre ordinateur</h4>
                  <div className="h-1 bg-brand rounded w-1/4 mb-3" />
                  <p className="text-[11px] text-slate-500 mb-4">La donnée est saisie localement.</p>
                </div>

                <div className="bg-white border border-slate-100 rounded-lg p-2.5">
                  <span className="block text-[10px] text-slate-400 font-semibold mb-1 uppercase tracking-wider">Texte Brut</span>
                  <div className="text-xs text-slate-800 font-medium break-words h-12 overflow-y-auto">
                    {inputText ? inputText : <span className="text-slate-300 italic">Vide...</span>}
                  </div>
                </div>
              </div>

              {/* Connection vector arrow */}
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 hidden md:block z-10 text-brand">
                <div className="flex flex-col items-center">
                  <Lock className="w-3.5 h-3.5 animate-bounce mb-1" />
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Step 2: Server Transit */}
              <div className="bg-slate-900 text-slate-100 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 bg-brand/20 text-brand text-xxs font-mono rounded-bl">Transit</div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xxs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold uppercase">Routeur</span>
                    <Server className="w-4 h-4 text-brand" />
                  </div>
                  <h4 className="font-semibold text-xs text-white mb-1">{t.liveDemo.networkNode}</h4>
                  <div className="h-1 bg-brand rounded w-3/4 mb-3" />
                  <p className="text-[11px] text-slate-400 mb-4">Serveur intermédiaire de routage.</p>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-lg p-2.5">
                  <span className="block text-[10px] text-slate-500 font-semibold mb-1 uppercase tracking-wider">{t.liveDemo.cipherTextLabel}</span>
                  <div className="text-xs text-brand font-mono h-12 overflow-y-auto select-all break-all leading-normal">
                    {transitCipher ? transitCipher : <span className="text-slate-800 italic">En attente...</span>}
                  </div>
                </div>
              </div>

              {/* Connection vector arrow */}
              <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 hidden md:block z-10 text-brand">
                <div className="flex flex-col items-center">
                  <Unlock className="w-3.5 h-3.5 animate-pulse mb-1" />
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Step 3: Recipient */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xxs px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold uppercase">Destinataire</span>
                    <Laptop className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="font-semibold text-xs text-slate-800 mb-1">{t.liveDemo.recipient}</h4>
                  <div className="h-1 bg-brand rounded w-1/4 mb-3" />
                  <p className="text-[11px] text-slate-500 mb-4">L&apos;application réceptrice tente le décodage.</p>
                </div>

                <div className={`border rounded-lg p-2.5 ${decryptedResult.success ? 'bg-white border-slate-100' : 'bg-amber-50 border-amber-100'}`}>
                  <span className="block text-[10px] text-slate-400 font-semibold mb-1 uppercase tracking-wider">État Déchiffré</span>
                  <div className={`text-xs h-12 overflow-y-auto break-words font-medium ${decryptedResult.success ? 'text-slate-800' : 'text-amber-700 font-semibold'}`}>
                    {decryptedResult.text ? decryptedResult.text : <span className="text-slate-300 italic">Vide...</span>}
                  </div>
                </div>
              </div>

            </div>

            {/* Explanatory Footnote box */}
            <div className="mt-8 bg-emerald-50 border border-brand/12 p-4 rounded-xl flex items-start space-x-3 text-slate-700 text-xs">
              <Shield className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-brand-dark mb-0.5">Note de Souveraineté Technologique</p>
                <p className="leading-relaxed">
                  Dans une plateforme traditionnelle de visioconférence ou de chat (comme Teams ou Slack), la clé secrète est stockée et gérée par l&apos;éditeur américain. Chez <strong>Sinco</strong>, la négociation de clés s&apos;effectue par l&apos;algorithme d&apos;échange Diffie-Hellman directement sur votre navigateur. <strong>Zéro clé sur nos serveurs de transit.</strong>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
