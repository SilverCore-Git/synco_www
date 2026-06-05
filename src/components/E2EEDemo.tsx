import { useState, useEffect } from 'react';
import { Lock, Unlock, ArrowRight, Server, User, Users, Key, EyeOff, RefreshCw, ShieldCheck } from 'lucide-react';
import { TranslationSet } from '../types';

interface E2EEDemoProps { t: TranslationSet; }

export default function E2EEDemo({ t }: E2EEDemoProps) {
  const [message, setMessage] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [cipherText, setCipherText] = useState('');
  const [showNetwork, setShowNetwork] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const encryptMessage = () => {
    if (!message.trim() || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      const encrypted = message.split('').map((char, i) => String.fromCharCode((char.charCodeAt(0) + i + 100) % 256)).join('');
      setCipherText(btoa(encodeURIComponent(encrypted)));
      setIsEncrypted(true);
      setShowNetwork(true);
      setIsAnimating(false);
    }, 1000);
  };

  const decryptMessage = () => {
    if (!cipherText || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsEncrypted(false);
      setCipherText('');
      setShowNetwork(false);
      setIsAnimating(false);
    }, 1000);
  };

  const resetDemo = () => {
    setMessage('');
    setIsEncrypted(false);
    setCipherText('');
    setShowNetwork(false);
    setIsAnimating(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => { if (isEncrypted && !isAnimating) resetDemo(); }, 15000);
    return () => clearTimeout(timer);
  }, [isEncrypted, isAnimating]);

  return (
    <section id="demo" className="py-20 md:py-32 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
              <Lock className="w-4 h-4" />{t.liveDemo.title}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-text tracking-tight mb-6">{t.liveDemo.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary max-w-3xl mx-auto">{t.liveDemo.subtitle}</p>
          </div>

          <div className="relative bg-white rounded-3xl border border-border/50 shadow-xl overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/3 to-transparent" />
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-bg-secondary/30">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isEncrypted ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`} />
                <span className="text-sm font-medium text-text-secondary">{isEncrypted ? t.liveDemo.statusSecured : t.liveDemo.statusPlain}</span>
              </div>
              <button onClick={resetDemo} className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                <RefreshCw className="w-3 h-3" />Réinitialiser
              </button>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><User className="w-5 h-5 text-primary" /></div>
                    <div>
                      <h4 className="font-semibold text-text">{t.liveDemo.sender}</h4>
                      <p className="text-xs text-text-muted">Votre appareil - Clé privée locale</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-text flex items-center gap-2"><Key className="w-4 h-4 text-primary" />{t.liveDemo.placeholder}</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} disabled={isEncrypted} placeholder={isEncrypted ? 'Message chiffré...' : t.liveDemo.placeholder} className="w-full px-4 py-3 border border-border/80 rounded-lg bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none font-mono text-sm min-h-[150px]" />
                  </div>
                  <div className="flex gap-3">
                    <button onClick={encryptMessage} disabled={isAnimating || !message.trim() || isEncrypted} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-darker rounded-lg transition-all duration-300 ease-out shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed">
                      <Lock className="w-4 h-4" />{t.liveDemo.encryptButton}
                      {!isAnimating && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      {isAnimating && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                    </button>
                    <button onClick={decryptMessage} disabled={isAnimating || !isEncrypted} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-primary bg-white border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 active:bg-primary/10 rounded-lg transition-all duration-300 ease-out cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed">
                      <Unlock className="w-4 h-4" />{t.liveDemo.decryptButton}
                    </button>
                  </div>
                  {isEncrypted && (
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2"><Key className="w-4 h-4 text-primary" /><span className="text-xs font-medium text-primary uppercase tracking-wide">{t.liveDemo.keyLabel}</span></div>
                      <code className="text-xs font-mono text-primary-dark truncate block">{Array.from({ length: 48 }, () => Math.random().toString(36).charAt(2)).join('')}</code>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><Users className="w-5 h-5 text-primary" /></div>
                    <div>
                      <h4 className="font-semibold text-text">{t.liveDemo.recipient}</h4>
                      <p className="text-xs text-text-muted">Destinataire - Clé publique reçue</p>
                    </div>
                  </div>

                  {showNetwork && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                      <div className="flex items-center gap-2 mb-4"><Server className="w-4 h-4 text-primary" /><span className="text-xs font-medium text-primary uppercase tracking-wide">{t.liveDemo.networkNode}</span></div>
                      <div className="relative h-24 flex items-center justify-center">
                        <div className="absolute w-full h-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 rounded-full" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center animate-pulse"><User className="w-3 h-3 text-white" /></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/60 flex items-center justify-center animate-pulse animation-delay-500"><Users className="w-3 h-3 text-white" /></div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-pulse animation-delay-200"><Server className="w-4 h-4 text-white" /></div>
                        {!isAnimating && <div className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-lg animate-shimmer" />}
                      </div>
                      <p className="text-xs text-primary-dark mt-3 text-center">{t.liveDemo.networkWarning}</p>
                    </div>
                  )}

                  {isEncrypted && (
                    <div className="p-4 rounded-xl bg-bg-dark text-white font-mono">
                      <div className="flex items-center gap-2 mb-2"><EyeOff className="w-4 h-4 text-primary-light" /><span className="text-xs font-medium text-primary-light uppercase tracking-wide">{t.liveDemo.cipherTextLabel}</span></div>
                      <div className="text-xs leading-relaxed overflow-x-auto"><code className="whitespace-nowrap">{cipherText || 'U2FsdGVkX1+3v8j4k9z...'}</code></div>
                    </div>
                  )}

                  {!isEncrypted && !showNetwork && (
                    <div className="p-6 rounded-xl bg-bg-secondary/50 border-2 border-dashed border-border/50 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Lock className="w-6 h-6 text-primary/50" /></div>
                      <p className="text-sm text-text-muted mb-4">{t.liveDemo.interactiveNotice}</p>
                      <button onClick={() => setMessage('Bonjour, ce message est sécurisé par chiffrement de bout en bout.')} className="text-xs font-medium text-primary hover:underline">Essayer avec un exemple</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-border/50 bg-bg-secondary/30">
              <p className="text-sm text-text-secondary flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /><strong>Synco utilise un chiffrement AES-256</strong> - Chaque message est chiffré localement avant transmission.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
