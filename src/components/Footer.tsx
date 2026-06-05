import { useState, FormEvent } from "react";
import { Mail, Check, ArrowRight, ArrowUpRight, Terminal } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#faf9f5] border-t border-mistral-border-light pt-12 pb-8 transition-colors duration-205 dark:bg-[#050505] dark:border-mistral-border-dark font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core links grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-mistral-border-light/60 dark:border-mistral-border-dark/40">
          
          {/* Logo brand card (2 columns wide on large screen) */}
          <div className="col-span-2 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm border border-primary-brand/35 bg-primary-brand/10">
                <div className="h-2.5 w-2.5 rounded-sm bg-primary-brand" />
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                synco<span className="text-primary-brand">.</span>
              </span>
            </div>
            
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              La plateforme souveraine de synchronisation de contextes d'entreprise pour les systèmes multi-agents en temps réel.
            </p>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-2 max-w-xs">
              <span className="font-mono text-[9px] text-zinc-450 dark:text-zinc-550 uppercase tracking-widest block font-bold">
                SOUSCRIRE AUX RAPPORTS DE RECHERCHE
              </span>
              <div className="flex space-x-1">
                <input
                  type="email"
                  value={email}
                  disabled={subscribed}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={subscribed ? "Merci !" : "Entrez votre email"}
                  className="flex-1 bg-white border border-neutral-200 rounded-sm px-2.5 py-1.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-primary-brand focus:ring-1 focus:ring-primary-brand/20 dark:bg-[#080808] dark:border-zinc-800 dark:text-zinc-100 disabled:opacity-80"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary-brand text-white hover:bg-primary-brand-dark transition-all shrink-0 active:scale-95 disabled:bg-emerald-600 cursor-pointer"
                >
                  {subscribed ? <Check className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="font-mono text-[9px] text-[#108e62] animate-bounce">
                  ⚡ Inscription au rapport mensuel effectuée.
                </p>
              )}
            </form>
          </div>

          {/* Column 1: Models */}
          <div className="flex flex-col space-y-3 text-left">
            <span className="font-mono text-[10px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-widest">
              MOTEURS
            </span>
            <ul className="space-y-1.5 text-xs">
              {["Orchestrator v3.2", "Sync-Medium v1", "Code-Align Enterprise", "Embed Omni v2"].map((link) => (
                <li key={link}>
                  <a href="#models" className="text-zinc-600 hover:text-primary-brand dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col space-y-3 text-left">
            <span className="font-mono text-[10px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-widest">
              DÉVELOPPEURS
            </span>
            <ul className="space-y-1.5 text-xs">
              {["Documentation API", "Node.js SDK", "Python Client", "Workspace Webhooks", "Status des Services"].map((link) => (
                <li key={link}>
                  <a href="#developers" className="text-zinc-600 hover:text-primary-brand dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Company */}
          <div className="flex flex-col space-y-3 text-left">
            <span className="font-mono text-[10px] font-bold text-zinc-450 dark:text-zinc-550 uppercase tracking-widest">
              SOCIÉTÉ
            </span>
            <ul className="space-y-1.5 text-xs">
              {["À propos", "Blog de Recherche", "Garanties SecOps", "RGPD & Souveraineté", "Carrières", "Contact"].map((link) => (
                <li key={link} className="flex items-center space-x-0.5">
                  <a href="#" className="text-zinc-600 hover:text-primary-brand dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
                    {link}
                  </a>
                  {link === "Carrières" && (
                    <span className="text-[8px] bg-primary-brand-light text-primary-brand dark:bg-[#108e6215] dark:text-[#108e62] px-1 rounded-sm scale-90 font-mono">
                      RECRUTE
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom meta footer info block */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 text-left font-mono text-[10px] text-zinc-450 dark:text-zinc-550 select-none">
          
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 Synco SAS.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Hébergé en Europe</span>
              <span className="h-1.5 w-1.5 rounded-sm bg-emerald-550 dark:bg-[#108e62]" />
            </span>
            <span>•</span>
            <a href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300">Conditions d'Utilisation</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-700 dark:hover:text-zinc-300">Confidentialité</a>
          </div>

          <div className="flex items-center space-x-2">
            <Terminal className="h-3 w-3 text-primary-brand" />
            <span>Même design épuré que Mistral. AI-Enhanced platform.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
