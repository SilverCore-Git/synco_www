import { useState } from "react";
import { Check, Copy, Code, Terminal, ChevronRight, FileCode } from "lucide-react";

type CodeLang = "curl" | "javascript" | "python";

export default function ApiSnippet() {
  const [activeLang, setActiveLang] = useState<CodeLang>("curl");
  const [copied, setCopied] = useState(false);

  const snippets: Record<CodeLang, { code: string; title: string }> = {
    curl: {
      title: "cURL bash payload",
      code: `curl https://api.synco.ai/v1/orchestrate \\
  -H "Authorization: Bearer $SYNCO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "synco-orch-large",
    "prompt": "Reste-t-il des alertes de surcharge de serveur non traitées ?",
    "connectors": {
      "slack": {
        "channels": ["#engineering-alerts"],
        "lookback_hours": 12
      },
      "notion": {
        "sync_pages": ["Wiki conformité SRE"]
      }
    },
    "temperature": 0.1,
    "max_tokens": 1024
  }'`
    },
    javascript: {
      title: "TypeScript / Node.js SDK",
      code: `import { SyncoClient } from "@synco/sdk";

const synco = new SyncoClient({
  apiKey: process.env.SYNCO_API_KEY
});

// Exécution de l'orchestration multi-sources en temps réel
const response = await synco.orchestrate({
  model: "synco-orch-large",
  prompt: "Reste-t-il des alertes de surcharge de serveur non traitées ?",
  connectors: {
    slack: {
      channels: ["#engineering-alerts"],
      lookbackHours: 12
    },
    notion: {
      syncPages: ["Wiki conformité SRE"]
    }
  },
  temperature: 0.1
});

console.log(response.text);
console.log(response.metadata.sourcesUsed); // ["slack", "notion"]`
    },
    python: {
      title: "Python SDK (synco-ai)",
      code: `from synco import SyncoClient
import os

client = SyncoClient(
    api_key=os.environ.get("SYNCO_API_KEY")
)

# Interrogez à la fois Notion et Slack avec une seule ligne de code
completion = client.orchestrate(
    model="synco-orch-large",
    prompt="Reste-t-il des alertes de surcharge de serveur non traitées ?",
    connectors={
        "slack": {
            "channels": ["#engineering-alerts"],
            "lookback_hours": 12
        },
        "notion": {
            "sync_pages": ["Wiki conformité SRE"]
        }
    },
    temperature=0.1
)

print(completion.text)
print(completion.metadata["sources_used"])`
    }
  };

  const activeSnippet = snippets[activeLang];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Impossible de copier : ", err);
    }
  };

  // Custom regex-free syntax coloring simulation in React
  const renderHighlightedCode = (codeText: string) => {
    return (
      <code className="font-mono text-[11px] sm:text-xs leading-5 text-zinc-300 whitespace-pre scrollbar-thin scrollbar-thumb-zinc-800">
        {codeText.split("\n").map((line, idx) => {
          // Highlight comments
          if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
            return (
              <span key={idx} className="block text-zinc-500 italic">
                {line}
              </span>
            );
          }
          // Simple visualization strings
          return (
            <span key={idx} className="block">
              {line.split(/(["'].*?["'])/).map((segment, sIdx) => {
                if (segment.startsWith('"') || segment.startsWith("'")) {
                  return <span key={sIdx} className="text-emerald-400 font-medium">{segment}</span>;
                }
                if (segment.includes("curl") || segment.includes("import") || segment.includes("from ") || segment.includes("const ") || segment.includes("client =")) {
                  return <span key={sIdx} className="text-purple-400 font-semibold">{segment}</span>;
                }
                return segment;
              })}
            </span>
          );
        })}
      </code>
    );
  };

  return (
    <section id="developers" className="border-b border-mistral-border-light bg-[#faf9f5] py-16 transition-colors duration-200 dark:border-mistral-border-dark dark:bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Documentation Copy Block */}
          <div className="lg:col-span-4 flex flex-col space-y-6 text-left">
            <div className="flex items-center space-x-2 text-primary-brand">
              <Code className="h-4 w-4" />
              <span className="font-mono text-xs tracking-widest uppercase font-semibold">SYNCO DEVELOPER HUB</span>
            </div>
            
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Prêt pour les développeurs<span className="text-primary-brand">.</span>
            </h2>
            
            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
              <p>
                Intégrez Synco en quelques minutes grâce à nos SDK unifiés. Tout comme vous appelleriez un API classique, vous passez en paramètre la configuration des connecteurs souhaités.
              </p>
              <p>
                Synco se charge automatiquement de l'authentification OAuth, de la vectorisation contextuelle, de la gestion de cache distribué et de l'alignement sémantique du graphe avant d'injecter la réponse.
              </p>
            </div>

            {/* Micro Checkpoints */}
            <div className="space-y-2.5 pt-2">
              {[
                "Webhooks natifs sur événements Slack/GitHub",
                "Chiffrement de bout en bout des clés API",
                "Gestion globale du cache contextuel en CDN",
                "Intégration d'outils (Function Calling)",
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs font-mono text-zinc-700 dark:text-zinc-350">
                  <ChevronRight className="h-4 w-4 text-primary-brand" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Code Terminal Panel */}
          <div className="lg:col-span-8">
            <div className="rounded-sm border border-mistral-border-light bg-zinc-900 shadow-sm overflow-hidden dark:border-mistral-border-dark dark:bg-[#080808]">
              
              {/* Terminal Window Tab Navigation */}
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-3">
                <div className="flex items-center space-x-1.5 shrink-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                
                {/* Languages buttons */}
                <div className="flex items-center space-x-1 border border-zinc-800 bg-zinc-900 rounded-sm p-0.5">
                  {(["curl", "javascript", "python"] as CodeLang[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setActiveLang(lang);
                        setCopied(false);
                      }}
                      className={`px-2.5 py-1 rounded-sm font-mono text-[10px] font-semibold transition-all select-none uppercase ${
                        activeLang === lang
                          ? "bg-zinc-850 text-emerald-400"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {lang === "javascript" ? "typescript" : lang}
                    </button>
                  ))}
                </div>

                {/* Code Copy Button */}
                <button
                  onClick={handleCopy}
                  className="flex h-7 px-2 items-center justify-center space-x-1.5 rounded-sm border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 active:scale-95 transition-all text-[10px] font-mono shrink-0 select-none"
                  title="Copier le code"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Terminal body */}
              <div className="p-5 overflow-auto text-left max-h-[380px] bg-zinc-950/70 border-t border-zinc-900 relative">
                <div className="absolute top-2.5 right-4 font-mono text-[9px] text-zinc-550 uppercase tracking-widest hidden sm:block">
                  {activeSnippet.title}
                </div>
                <pre className="m-0">
                  {renderHighlightedCode(activeSnippet.code)}
                </pre>
              </div>

              {/* Documentation prompt footers */}
              <div className="bg-zinc-950/90 border-t border-zinc-900 px-4 py-2 font-mono text-[10px] text-zinc-500 flex items-center space-x-2">
                <Terminal className="h-3 w-3 text-zinc-650 shrink-0" />
                <span>NPM command: <code className="text-zinc-300 font-bold">npm i @synco/sdk</code></span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
