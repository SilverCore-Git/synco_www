import { Zap, HelpCircle, BarChart3, TrendingUp, ShieldCheck } from "lucide-react";

export default function BenchmarksGrid() {
  return (
    <section id="benchmarks" className="border-b border-mistral-border-light bg-[#faf9f5] py-16 transition-colors duration-200 dark:border-mistral-border-dark dark:bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center mb-12">
          <div className="flex items-center space-x-2 text-primary-brand justify-center">
            <BarChart3 className="h-4 w-4" />
            <span className="font-mono text-xs tracking-widest uppercase font-semibold">BENCHMARKS ET SUPRÉMATIE</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 mt-2 dark:text-zinc-50">
            Conçu pour écraser la <span className="text-primary-brand">lenteur</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-650 dark:text-zinc-450 font-sans max-w-2xl mx-auto">
            La latence est la clé de voûte de l'orchestration multi-agents. Découvrez comment Synco s'impose face aux approches RAG classiques et codages manuels d'API.
          </p>
        </div>

        {/* Bento Grid benchmark style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Bento Cell 1: Latency Comparison (6 cols) */}
          <div className="lg:col-span-6 rounded-sm border border-mistral-border-light bg-white p-6 dark:border-mistral-border-dark dark:bg-[#080808] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3 dark:border-zinc-800">
                <span className="font-mono text-[10px] text-zinc-405 dark:text-zinc-505 uppercase tracking-wider font-semibold">
                  Latence d'aggrégation (ms) — plus bas est meilleur
                </span>
                <span className="rounded-sm bg-emerald-50 px-2 py-0.5 font-mono text-[9px] text-[#108e62] font-semibold dark:bg-emerald-950/40">
                  TEMPS RÉEL
                </span>
              </div>

              {/* Chart container */}
              <div className="space-y-5 pt-6">
                
                {/* Bar 1: Synco */}
                <div className="space-y-1 group">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">Synco Pulse Pipeline v3.2</span>
                    <span className="text-primary-brand font-bold text-sm">14 ms</span>
                  </div>
                  <div className="h-6 w-full bg-zinc-100 rounded-sm overflow-hidden dark:bg-zinc-850 relative">
                    <div className="h-full bg-primary-brand rounded-sm transition-all duration-500 w-[5%] group-hover:bg-primary-brand-dark" />
                    <div className="absolute right-2 top-0 bottom-0 flex items-center font-mono text-[9px] text-zinc-455">
                      (Ultra-low latency memory heap)
                    </div>
                  </div>
                </div>

                {/* Bar 2: Pinecone + LlamaIndex */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-zinc-550 dark:text-zinc-405">RAG Standard (Vector DB + Orches.)</span>
                    <span className="text-zinc-700 dark:text-zinc-305">142 ms</span>
                  </div>
                  <div className="h-6 w-full bg-zinc-100 rounded-sm overflow-hidden dark:bg-zinc-850">
                    <div className="h-full bg-zinc-400 rounded-sm w-[45%] dark:bg-zinc-600" />
                  </div>
                </div>

                {/* Bar 3: Manual API / Python scripting */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-zinc-550 dark:text-zinc-405">Manual Custom Scripting over APIs</span>
                    <span className="text-zinc-700 dark:text-zinc-305">820 ms</span>
                  </div>
                  <div className="h-6 w-full bg-zinc-100 rounded-sm overflow-hidden dark:bg-zinc-850">
                    <div className="h-full bg-zinc-300 rounded-sm w-[100%] dark:bg-zinc-700" />
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800 text-[11px] text-zinc-405 dark:text-zinc-500 font-mono leading-relaxed flex items-start space-x-2">
              <Zap className="h-3.5 w-3.5 text-amber-500 mt-0.5 shrink-0" />
              <span>Synco est <strong>10x plus rapide</strong> que le RAG traditionnel grâce à sa couche de synchronisation mémoire à chaud qui supprime les phases redondantes de segmentation de fichiers.</span>
            </div>
          </div>

          {/* Bento Cell 2: Citations Accuracy Comparison (6 cols) */}
          <div className="lg:col-span-6 rounded-sm border border-mistral-border-light bg-white p-6 dark:border-mistral-border-dark dark:bg-[#080808] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3 dark:border-zinc-800">
                <span className="font-mono text-[10px] text-zinc-405 dark:text-zinc-505 uppercase tracking-wider font-semibold">
                  Taux de Rappel (Citation Accuracy %) — plus haut est meilleur
                </span>
                <span className="rounded-sm bg-blue-50 px-2 py-0.5 font-mono text-[9px] text-[#108e62] font-semibold dark:bg-blue-950/40">
                  FIABLE
                </span>
              </div>

              {/* Chart container */}
              <div className="space-y-5 pt-6">
                
                {/* Bar 1: Synco */}
                <div className="space-y-1 group">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">Synco Context-Core</span>
                    <span className="text-primary-brand font-bold text-sm">99.98 %</span>
                  </div>
                  <div className="h-6 w-full bg-zinc-100 rounded-sm overflow-hidden dark:bg-zinc-850">
                    <div className="h-full bg-primary-brand rounded-sm w-[100%] transition-all duration-500 group-hover:bg-primary-brand-dark" />
                  </div>
                </div>

                {/* Bar 2: Raw Gemini Context Injection */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-zinc-550 dark:text-zinc-405">Gemini Raw 1M Token Context Injection</span>
                    <span className="text-zinc-750 dark:text-zinc-305">92.40 %</span>
                  </div>
                  <div className="h-6 w-full bg-zinc-100 rounded-sm overflow-hidden dark:bg-zinc-850">
                    <div className="h-full bg-zinc-400 rounded-sm w-[92%] dark:bg-zinc-600" />
                  </div>
                </div>

                {/* Bar 3: Standard Chunk & Search RAG */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-zinc-550 dark:text-zinc-405">Search-Chunking Standard Retrieval</span>
                    <span className="text-zinc-750 dark:text-zinc-305">74.50 %</span>
                  </div>
                  <div className="h-6 w-full bg-zinc-100 rounded-sm overflow-hidden dark:bg-zinc-850">
                    <div className="h-full bg-zinc-300 rounded-sm w-[74%] dark:bg-zinc-700" />
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800 text-[11px] text-zinc-405 dark:text-zinc-500 font-mono leading-relaxed flex items-start space-x-2">
              <ShieldCheck className="h-3.5 w-3.5 text-primary-brand mt-0.5 shrink-0" />
              <span>Grâce au modèle Embed-Omni, Synco évite le phénomène de « perte au milieu » (lost in the middle) commun lors de l'injection brute de contextes gigantesques.</span>
            </div>
          </div>

          {/* Bento Cell 3: Technical Metrics Grid Highlight (12 cols) */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-sm border border-mistral-border-light bg-primary-brand/5 p-6 dark:border-mistral-border-dark dark:bg-[#080808]/35 shadow-inner text-zinc-800 dark:text-[#e0e0e0]">
            
            <div className="flex flex-col space-y-2 border-b border-primary-brand/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
              <span className="font-mono text-[10px] text-zinc-450 dark:text-zinc-505 uppercase tracking-wide">ÉCONOMIE D'ÉCHELLE d'équipe</span>
              <div className="flex items-baseline space-x-1">
                <span className="font-display text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">-84%</span>
                <span className="text-primary-brand font-bold text-xs">workload</span>
              </div>
              <p className="text-[11px] text-zinc-550 dark:text-zinc-405 font-sans leading-relaxed">
                Diminution drastique des heures d'ingénierie passées à coder et maintenir des raccordements d'API sur-mesure pour vos agents autonomes.
              </p>
            </div>

            <div className="flex flex-col space-y-2 border-b border-primary-brand/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
              <span className="font-mono text-[10px] text-zinc-450 dark:text-zinc-505 uppercase tracking-wide">ACCÉLÉRATION BOOTSTRAP</span>
              <div className="flex items-baseline space-x-1">
                <span className="font-display text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">12x</span>
                <span className="text-emerald-500 font-bold text-xs">plus rapide</span>
              </div>
              <p className="text-[11px] text-zinc-550 dark:text-zinc-405 font-sans leading-relaxed">
                Vos développeurs instancient de nouveaux agents en production en quelques lignes de code basiques, sans maintenance d'infrastructure.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="font-mono text-[10px] text-zinc-450 dark:text-zinc-505 uppercase tracking-wide">DÉCOUPLAGE SÉCURITÉ (SecOps)</span>
              <div className="flex items-baseline space-x-1">
                <span className="font-display text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">Zéro</span>
                <span className="text-primary-brand font-bold text-xs">fuite de clés</span>
              </div>
              <p className="text-[11px] text-zinc-550 dark:text-zinc-405 font-sans leading-relaxed">
                Les autorisations OAuth sont hermétiquement filtrées au niveau de notre nœud Core, garantissant la protection absolue des données sensibles.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
