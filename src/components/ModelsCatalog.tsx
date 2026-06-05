import { useState } from "react";
import { Check, Info, Layers, Zap, Star, ShieldAlert, Cpu, ChevronRight } from "lucide-react";
import { SyncoModel } from "../types";

export default function ModelsCatalog() {
  const [selectedModel, setSelectedModel] = useState<string>("synco-orch-large");

  const models: SyncoModel[] = [
    {
      id: "synco-orch-large",
      name: "Synco Orchestrator v3.2",
      type: "orchestrator",
      description: "Notre fleuron technologique. Capable de fusionner plus de 50 flux d'entreprise (Slack, Notion, SharePoint) simultanément pour synthétiser un contexte parfait à vos agents de décision.",
      latencyMs: 12,
      accuracy: 99.98,
      maxTokens: 32768,
      contextWindow: "2,048,000 tokens",
      useCase: "Orchestration globale d'agents d'entreprise, audits sécurisés de conformité, synthèses inter-services."
    },
    {
      id: "synco-sync-medium",
      name: "Synco Sync Medium",
      type: "connector",
      description: "Le modèle de synchronisation le plus rapide du marché. Optimisé spécifiquement pour l'indexation de fils de discussion instantanés (Slack, MS Teams, Discord) en moins de 3ms.",
      latencyMs: 3,
      accuracy: 99.4,
      maxTokens: 8192,
      contextWindow: "128,000 tokens",
      useCase: "Alerting temps réel, streaming d'événements, synchronisation instantanée de chats."
    },
    {
      id: "synco-code-align",
      name: "Synco Code-Align",
      type: "agent",
      description: "Spécialisé pour les équipes de développement. Il scanne vos dépôts GitHub globaux et branches actives pour générer de la documentation technique auto-mise à jour.",
      latencyMs: 18,
      accuracy: 98.9,
      maxTokens: 16384,
      contextWindow: "512,000 tokens",
      useCase: "Refactoring de bases de code, intégration d'API, synthèses de pull requests."
    },
    {
      id: "synco-embed-omni",
      name: "Synco Embed Omni v2",
      type: "connector",
      description: "Modèle de plongement vectoriel à 1536 dimensions. Aligne sémantiquement des données hétérogènes (par exemple, une ligne de table PostgreSQL avec un canal Slack informel).",
      latencyMs: 1.5,
      accuracy: 99.85,
      maxTokens: 2048,
      contextWindow: "32,000 tokens",
      useCase: "Recherche hybride, RAG multi-sources, classification de documents."
    }
  ];

  const activeModel = models.find((m) => m.id === selectedModel) || models[0];

  return (
    <section id="models" className="border-b border-mistral-border-light bg-[#faf9f5] py-16 transition-colors duration-205 dark:border-mistral-border-dark dark:bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center mb-12">
          <div className="flex items-center space-x-2 text-primary-brand justify-center">
            <Cpu className="h-4 w-4" />
            <span className="font-mono text-xs tracking-widest uppercase font-semibold">GAMME DE MODÈLES SYNCO</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 mt-2 dark:text-zinc-50">
            Une architecture conçue pour la <span className="text-primary-brand">vélocité</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-sans max-w-2xl mx-auto">
            Nos moteurs d'orchestration s'adaptent à vos contraintes opérationnelles : de la puissance brute pour synthétiser des téraoctets à la latence instantanée pour les alertes de serveurs.
          </p>
        </div>

        {/* Model catalog interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of Models - Left Side (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <span className="font-mono text-[10px] text-zinc-405 dark:text-zinc-500 uppercase tracking-widest block pl-1">
              SÉLECTIONNEZ UN MODÈLE POUR ANALYSER :
            </span>

            <div className="space-y-3">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-150 relative ${
                    selectedModel === model.id
                      ? "border-primary-brand bg-white dark:bg-[#080808] shadow-sm"
                      : "border-mistral-border-light bg-white/40 hover:bg-white dark:border-mistral-border-dark dark:bg-[#080808]/40 dark:hover:bg-[#111]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-display font-bold text-sm text-zinc-900 dark:text-zinc-100">
                          {model.name}
                        </span>
                        {model.type === "orchestrator" && (
                          <span className="rounded-sm bg-emerald-50 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-700 dark:bg-[#108e6215] dark:text-[#108e62]">
                            PRESCRIPTIF
                          </span>
                        )}
                        {model.type === "connector" && (
                          <span className="rounded-sm bg-blue-50 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-blue-700 dark:bg-blue-950/20 dark:text-blue-400">
                            STREAMING-FAST
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-500 line-clamp-1">{model.description}</p>
                    </div>
                    <ChevronRight className={`h-4 w-4 text-zinc-400 transform transition-transform ${selectedModel === model.id ? "rotate-95 text-primary-brand" : ""}`} />
                  </div>
                  {selectedModel === model.id && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-primary-brand rounded-r-sm" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Model Specification Card - Right Side (7 cols) */}
          <div className="lg:col-span-7 rounded-sm border border-mistral-border-light bg-[#fdfdfb]/90 p-6 dark:border-mistral-border-dark dark:bg-[#080808]/80 shadow-sm transition-all">
            
            <div className="border-b border-mistral-border-light pb-4 dark:border-mistral-border-dark flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-primary-brand uppercase tracking-wider block font-bold">
                  {activeModel.type} SPECIFICATIONS SHEET
                </span>
                <h3 className="font-display text-xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-1">
                  {activeModel.name}
                </h3>
              </div>
              <div className="h-10 w-10 rounded-sm border border-primary-brand/25 bg-primary-brand/10 flex items-center justify-center text-primary-brand">
                {activeModel.type === "orchestrator" ? <Star className="h-5 w-5 animate-pulse" /> : <Layers className="h-5 w-5" />}
              </div>
            </div>

            {/* Model stats block */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-b border-mistral-border-light/60 dark:border-mistral-border-dark/40">
              <div className="flex flex-col space-y-1">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-550 uppercase">CONTEXTURE DE FENÊTRE</span>
                <span className="font-display font-extrabold text-base text-zinc-850 dark:text-zinc-200">
                  {activeModel.contextWindow}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-550 uppercase">LATENCE NOMINALE</span>
                <span className="font-display font-extrabold text-base text-[#108e62] flex items-center space-x-1">
                  <span>~{activeModel.latencyMs} ms</span>
                  <Zap className="h-3 w-3 text-emerald-500 shrink-0" />
                </span>
              </div>
              <div className="flex flex-col space-y-1 col-span-2 sm:col-span-1">
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-550 uppercase">FIABILITÉ REQUÊTE</span>
                <span className="font-display font-extrabold text-base text-zinc-850 dark:text-zinc-200">
                  {activeModel.accuracy}%
                </span>
              </div>
            </div>

            {/* In-depth details */}
            <div className="space-y-4 pt-6">
              
              <div className="space-y-1">
                <h4 className="font-mono text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider">
                  DESCRIPTION CONCEPTUELLE
                </h4>
                <p className="text-xs text-zinc-700 dark:text-zinc-350 leading-relaxed font-sans">
                  {activeModel.description}
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-mono text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider">
                  CAS D'USAGE RECOMMANDÉS
                </h4>
                <p className="text-xs text-zinc-700 dark:text-zinc-350 leading-relaxed font-sans font-medium">
                  ⚡ {activeModel.useCase}
                </p>
              </div>

              {/* Table of capabilities */}
              <div className="space-y-2 pt-2">
                <h4 className="font-mono text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-wider">
                  APTITUDES ARCHITECTURALES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Indexation optimisée sans fuite de mémoire",
                    "RAG natif & hybridation sémantique",
                    "Aptitudes de raisonnement logique multi-canaux",
                    "Conformité RGPD stricte au niveau du nœud Core",
                    "Gestion dynamique des contextes fuyants",
                    "Compatible cURL / Node / Python native SDK",
                  ].map((cap, i) => (
                    <div key={i} className="flex items-center space-x-2 text-[11px] text-zinc-650 dark:text-zinc-400">
                      <Check className="h-3.5 w-3.5 text-primary-brand shrink-0" />
                      <span className="font-sans">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
