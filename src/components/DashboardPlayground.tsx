import { useState, useEffect, useRef } from "react";
import { 
  Play, RefreshCw, Send, CheckCircle2, ChevronRight, AlertCircle, 
  Slack, Github, Mail, Database, HelpCircle, FileText, Sparkles, MessageSquare
} from "lucide-react";
import { SyncLog, PlaygroundQuery } from "../types";

export default function DashboardPlayground() {
  // Connector toggle state
  const [connectors, setConnectors] = useState({
    slack: true,
    github: true,
    notion: true,
    gmail: false,
    db: true,
  });

  // Logs mimicking active synchronization
  const [logs, setLogs] = useState<SyncLog[]>([
    { id: "1", time: "09:12:04", source: "slack", status: "synced", details: "Indexé #general et #eng-alerts", recordsCount: 142 },
    { id: "2", time: "09:12:15", source: "github", status: "synced", details: "Indexé commits sur branch main", recordsCount: 38 },
    { id: "3", time: "09:13:01", source: "notion", status: "synced", details: "Indexé Synco Roadmap & Architecture", recordsCount: 89 },
    { id: "4", time: "09:14:10", source: "gmail", status: "pending", details: "Flux désactivé par l'utilisateur", recordsCount: 0 },
    { id: "5", time: "09:14:22", source: "db", status: "synced", details: "Synchronisé postgres_customer_prod", recordsCount: 1205 }
  ]);

  const [inputQuery, setInputQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [chatHistory, setChatHistory] = useState<PlaygroundQuery[]>([
    {
      id: "init",
      prompt: "Où en est la correction du bug d'indexation GraphQL signalé sur Slack ?",
      response: "D'après vos canaux **Slack** (#eng-alerts) et les commits récents sur **GitHub** :\n\n- Le bug d'indexation GraphQL a été identifié par @lucas hier à 15h. Il concernait un dépassement de tampon lors du traitement de requêtes imbriquées.\n- Un correctif a été poussé par l'équipe sur la branche `hotfix/graphql-buffer-overflow` (git commit `a7bcf12`).\n- Les tests d'intégration sont passés au vert à 08h30 ce matin. La mise en production est planifiée pour ce midi.",
      sourcesUsed: ["slack", "github"],
      timeTakenMs: 14,
      tokensSynced: 42390
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, consoleLogs, isProcessing]);

  // Handler for toggle connectors
  const toggleConnector = (connector: keyof typeof connectors) => {
    const newState = !connectors[connector];
    setConnectors(prev => ({ ...prev, [connector]: newState }));

    // Add logging entries indicating real-time sync shifts
    const sourceMap = {
      slack: "slack" as const,
      github: "github" as const,
      notion: "notion" as const,
      gmail: "gmail" as const,
      db: "db" as const,
    };

    const sourceName = sourceMap[connector];
    const timestamp = new Date().toLocaleTimeString();

    setLogs(prev => [
      {
        id: Math.random().toString(),
        time: timestamp,
        source: sourceName,
        status: newState ? "synced" : "pending",
        details: newState ? "Synchronisation contextuelle réactivée" : "Indexation interrompue, cache persistant préservé",
        recordsCount: newState ? Math.floor(Math.random() * 200) + 50 : 0
      },
      ...prev.slice(0, 7)
    ]);
  };

  // Sample quick templates
  const presets = [
    {
      title: "Rapport d'activité GitHub & Slack",
      prompt: "Fais-moi un résumé des retours techniques sur GitHub et Slack de ce matin.",
      responseBuilder: () => {
        const sources: ("slack" | "notion" | "github" | "gmail" | "jira" | "db")[] = [];
        let resp = "Voici la synthèse en temps réel :\n\n";
        
        if (connectors.github) {
          sources.push("github");
          resp += "🔑 **GitHub Activity** :\n- 3 PRs fusionnées sur la branche principale.\n- Issue d'indexation de base fermée.\n";
        } else {
          resp += "❌ **GitHub** : Non interrogé (connecteur inactif).\n";
        }

        if (connectors.slack) {
          sources.push("slack");
          resp += "\n💬 **Slack Feed (#engineering)** :\n- @clara a mentionné qu'un correctif de latence a été livré.\n- 5 alertes de synchronisation résolues.\n";
        } else {
          resp += "\n❌ **Slack** : Multi-canal ignoré (connecteur inactif).\n";
        }

        if (sources.length === 0) {
          resp = "⚠️ Aucun connecteur n'a été spécifié comme source primaire. Veuillez activer au moins un connecteur dans le volet de gauche (Notion, Slack, ou GitHub) pour consolider les événements.";
        }

        return { response: resp, sources };
      }
    },
    {
      title: "Recherche sur Notion & base SQL",
      prompt: "Quel est notre plan de conformité RGPD documenté dans Notion et la DB Clients ?",
      responseBuilder: () => {
        const sources: ("slack" | "notion" | "github" | "gmail" | "jira" | "db")[] = [];
        let resp = "Analyse de conformité Synco :\n\n";

        if (connectors.notion) {
          sources.push("notion");
          resp += "📖 **Notion Wiki (SecOps/Compliance)** :\n- Politique de rétention : Toutes les métadonnées de chat sont chiffrées au repos via AES-256.\n- Durée maximale de stockage : 90 jours glissants par défaut, avec option d'archivage sur serveur souverain français.\n";
        } else {
          resp += "❌ **Notion** : Base de connaissances non disponible (connecteur inactif).\n";
        }

        if (connectors.db) {
          sources.push("db");
          resp += "\n🗄️ **Production Data Warehouse (postgres_customer)** :\n- Table `users_personal_info` cryptée au niveau de la colonne.\n- Audits d'accès automatiques activés pour l'Orchestrator Synco.\n";
        } else {
          resp += "\n❌ **Client database SQL** : Connexion scellée (connecteur inactif).\n";
        }

        if (sources.length === 0) {
          resp = "⚠️ Pas de référentiel disponible. Veuillez activer la base de données PostgreSQL ou Notion pour que Synco puisse vérifier les protocoles conformes.";
        }

        return { response: resp, sources };
      }
    }
  ];

  // Execution Flow Simulator
  const handleQuerySubmit = async (promptText: string) => {
    if (!promptText.trim() || isProcessing) return;
    
    setIsProcessing(true);
    setConsoleLogs([]);
    setInputQuery("");

    const logsStream = [
      "🔄 Initialisation de la requête utilisateur...",
      "📡 Recherche de connecteurs actifs en mémoire...",
      connectors.slack ? "🟢 slack-connector: Recherche de fils récents..." : "⚪ slack-connector: Ignoré.",
      connectors.github ? "🟢 github-connector: Récupération de l'arbre git..." : "⚪ github-connector: Ignoré.",
      connectors.notion ? "🟢 notion-connector: Diagnostic des pages d'équipe..." : "⚪ notion-connector: Ignoré.",
      connectors.db ? "🟢 sql-connector: Requête en lecture optimisée..." : "⚪ sql-connector: Ignoré.",
      "🧠 Agrégation et fusion d'arbres de graphes contextuels...",
      "🛡️ Validation des filtres d'accès & SecOps conformes ok.",
      "🚀 Envoi à Synco-Orchestrator-Large..."
    ];

    // Stream logs simulating technical timing
    for (let i = 0; i < logsStream.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 200));
      setConsoleLogs(prev => [...prev, logsStream[i]]);
    }

    await new Promise(resolve => setTimeout(resolve, 300));

    // Formulate response
    const activeSources: ("slack" | "notion" | "github" | "gmail" | "jira" | "db")[] = [];
    if (connectors.slack) activeSources.push("slack");
    if (connectors.github) activeSources.push("github");
    if (connectors.notion) activeSources.push("notion");
    if (connectors.gmail) activeSources.push("gmail");
    if (connectors.db) activeSources.push("db");

    let responseMarkdown = "";
    if (activeSources.length === 0) {
      responseMarkdown = "⚠️ **Aucun connecteur n'est actif.**\n\nSynco n'a pas pu collecter de contexte en temps réel car toutes les sources d'information externes ont été coupées. Activez un ou plusieurs connecteurs (Slack, GitHub, Notion ou SQL) sur le volet de gauche et relancez votre question.";
    } else {
      responseMarkdown = `### Résultats consolidés en temps réel\n\nBasé sur vos sources actives : **${activeSources.join(", ")}** :\n\n`;
      responseMarkdown += `1. **Analyse Contextuelle** : Synco a parcouru vos flux indexés et a repéré 3 corrélations directes avec votre requête : "${promptText}".\n`;
      
      if (connectors.slack) {
        responseMarkdown += `- **Sur Slack** : Les dernières conversations indiquent que ce sujet a été abordé ce matin dans le canal de coordination d'équipe.\n`;
      }
      if (connectors.notion) {
        responseMarkdown += `- **Sur Notion** : Votre documentation interne détaille précisément la marche à suivre pour ce cas d'usage.\n`;
      }
      if (connectors.github) {
        responseMarkdown += `- **Sur GitHub** : Le dépôt principal contient les lignes de code sous-jacentes à ce flux de travail technique.\n`;
      }
      if (connectors.db) {
        responseMarkdown += `- **Sur SQL Database** : Les métadonnées confirment les derniers états d'exécution correspondants.\n`;
      }
      
      responseMarkdown += `\n*Synco a injecté ces éléments de contexte dynamiquement dans le prompt d'exécution de votre LLM en moins de 18ms.*`;
    }

    const newQuery: PlaygroundQuery = {
      id: Math.random().toString(),
      prompt: promptText,
      response: responseMarkdown,
      sourcesUsed: activeSources,
      timeTakenMs: Math.floor(Math.random() * 10) + 8,
      tokensSynced: activeSources.length * 15400 + Math.floor(Math.random() * 8000)
    };

    setChatHistory(prev => [...prev, newQuery]);
    setIsProcessing(false);
  };

  return (
    <section id="playground" className="border-b border-mistral-border-light bg-[#faf9f5] py-16 transition-colors duration-200 dark:border-mistral-border-dark dark:bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center md:text-left mb-10">
          <div className="flex items-center space-x-2 text-primary-brand justify-center md:justify-start">
            <MessageSquare className="h-4 w-4" />
            <span className="font-mono text-xs tracking-widest uppercase font-semibold">ESPACE PLAYGROUND PLATFORM</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 mt-2 dark:text-zinc-50">
            Faites l'expérience du <span className="text-primary-brand">Synco Engine</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-650 dark:text-zinc-450 font-sans max-w-2xl">
            Tâtez le moteur en temps réel. Activez ou désactivez les connecteurs d'entreprise dans le volet gauche pour constater l'hybridation dynamique du contexte par Synco lors des requêtes d'agent.
          </p>
        </div>

        {/* Master Console Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left panel: Orchestration & Connectors control (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Box 1: Sources & Connectors switches */}
            <div className="rounded-sm border border-mistral-border-light bg-white p-5 dark:border-mistral-border-dark dark:bg-[#080808] shadow-sm">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 flex items-center justify-between">
                <span>CONNECTEURS SOURCE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </h3>

              <div className="space-y-4">
                
                {/* Connector Switch: Slack */}
                <div 
                  onClick={() => toggleConnector("slack")}
                  className={`flex items-center justify-between p-3 rounded-sm border transition-all cursor-pointer select-none ${
                    connectors.slack 
                      ? "border-primary-brand/35 bg-primary-brand/5 dark:bg-[#108e6210]" 
                      : "border-zinc-250 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-[#050505]/40"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-sm ${connectors.slack ? "bg-[#4A154B]/10 text-[#4A154B]" : "bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"}`}>
                      <Slack className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-850 dark:text-zinc-200">Slack workspace</h4>
                      <p className="text-[10px] text-zinc-500">Fils #dev, #ops, #roadmap</p>
                    </div>
                  </div>
                  <div className={`h-5 w-9 rounded-full p-0.5 transition-colors duration-200 ${connectors.slack ? "bg-primary-brand" : "bg-zinc-300 dark:bg-zinc-700"}`}>
                    <div className={`h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${connectors.slack ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </div>

                {/* Connector Switch: GitHub */}
                <div 
                  onClick={() => toggleConnector("github")}
                  className={`flex items-center justify-between p-3 rounded-sm border transition-all cursor-pointer select-none ${
                    connectors.github 
                      ? "border-primary-brand/35 bg-primary-brand/5 dark:bg-[#108e6210]" 
                      : "border-zinc-250 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-[#050505]/40"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-sm ${connectors.github ? "bg-zinc-900/10 text-zinc-900 dark:bg-white/10 dark:text-white" : "bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"}`}>
                      <Github className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-850 dark:text-zinc-200">GitHub Enterprise</h4>
                      <p className="text-[10px] text-zinc-500">Commits, PRs & Wiki</p>
                    </div>
                  </div>
                  <div className={`h-5 w-9 rounded-full p-0.5 transition-colors duration-200 ${connectors.github ? "bg-primary-brand" : "bg-zinc-300 dark:bg-zinc-700"}`}>
                    <div className={`h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${connectors.github ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </div>

                {/* Connector Switch: Notion */}
                <div 
                  onClick={() => toggleConnector("notion")}
                  className={`flex items-center justify-between p-3 rounded-sm border transition-all cursor-pointer select-none ${
                    connectors.notion 
                      ? "border-primary-brand/35 bg-primary-brand/5 dark:bg-[#108e6210]" 
                      : "border-zinc-250 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-[#050505]/40"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-sm ${connectors.notion ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-200" : "bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"}`}>
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-850 dark:text-zinc-200">Notion Workspace</h4>
                      <p className="text-[10px] text-zinc-500">Docs de roadmap, specs</p>
                    </div>
                  </div>
                  <div className={`h-5 w-9 rounded-full p-0.5 transition-colors duration-200 ${connectors.notion ? "bg-primary-brand" : "bg-zinc-300 dark:bg-zinc-700"}`}>
                    <div className={`h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${connectors.notion ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </div>

                {/* Connector Switch: SQL Clients Database (Disabled by default to prove context adaptation) */}
                <div 
                  onClick={() => toggleConnector("db")}
                  className={`flex items-center justify-between p-3 rounded-sm border transition-all cursor-pointer select-none ${
                    connectors.db 
                      ? "border-primary-brand/35 bg-primary-brand/5 dark:bg-[#108e6210]" 
                      : "border-zinc-250 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-[#050505]/40"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-sm ${connectors.db ? "bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400" : "bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"}`}>
                      <Database className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-850 dark:text-zinc-200">PostgreSQL DB</h4>
                      <p className="text-[10px] text-zinc-500">Tables d'utilisateurs & logs</p>
                    </div>
                  </div>
                  <div className={`h-5 w-9 rounded-full p-0.5 transition-colors duration-200 ${connectors.db ? "bg-primary-brand" : "bg-zinc-300 dark:bg-zinc-700"}`}>
                    <div className={`h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${connectors.db ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </div>

                {/* Connector Switch: Gmail (Workspace) */}
                <div 
                  onClick={() => toggleConnector("gmail")}
                  className={`flex items-center justify-between p-3 rounded-sm border transition-all cursor-pointer select-none ${
                    connectors.gmail 
                      ? "border-primary-brand/35 bg-primary-brand/5 dark:bg-[#108e6210]" 
                      : "border-zinc-250 bg-zinc-50 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-[#050505]/40"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-sm ${connectors.gmail ? "bg-red-50 text-red-650 dark:bg-red-950/20 dark:text-red-400" : "bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"}`}>
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-850 dark:text-zinc-200">Gmail Workspace</h4>
                      <p className="text-[10px] text-zinc-500">Mails d'alertes & clients</p>
                    </div>
                  </div>
                  <div className={`h-5 w-9 rounded-full p-0.5 transition-colors duration-200 ${connectors.gmail ? "bg-primary-brand" : "bg-zinc-300 dark:bg-zinc-700"}`}>
                    <div className={`h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${connectors.gmail ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </div>

              </div>
            </div>

            {/* Box 2: Feed of last operations */}
            <div className="hidden border border-mistral-border-light bg-white rounded-sm p-5 dark:border-mistral-border-dark dark:bg-[#080808] shadow-sm md:flex lg:flex flex-col">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center justify-between">
                <span>RÉSEAU SYNCO RECENT FLUX</span>
                <RefreshCw className="h-3 w-3 animate-spin text-primary-brand" />
              </h3>
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-start justify-between border-b border-zinc-100 pb-2 last:border-0 dark:border-zinc-800 text-[11px]">
                    <div className="flex flex-col space-y-0.5">
                      <div className="flex items-center space-x-1.5">
                        <span className="font-mono text-[9px] text-zinc-400">{log.time}</span>
                        <span className={`font-mono text-[9px] uppercase px-1 rounded ${
                          log.source === "slack" ? "bg-[#4A154B]/10 text-[#4A154B] dark:bg-[#4A154B]/20" :
                          log.source === "github" ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200" :
                          log.source === "notion" ? "bg-zinc-200 text-zinc-800" : "bg-blue-50 text-blue-800"
                        }`}>
                          {log.source}
                        </span>
                      </div>
                      <span className="text-zinc-650 dark:text-zinc-405 font-medium leading-[1.2]">{log.details}</span>
                    </div>
                    <span className="font-mono text-[9px] text-zinc-400 bg-zinc-50 px-1 dark:bg-zinc-850">
                      {log.recordsCount > 0 ? `+${log.recordsCount} docs` : "offline"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: Active Chat Console Playground (8 cols) */}
          <div className="lg:col-span-8 flex flex-col rounded-sm border border-mistral-border-light bg-[#fdfdfb]/80 shadow-md transition-all dark:border-mistral-border-dark dark:bg-[#080808]/75 overflow-hidden min-h-[580px] h-[610px]">
            
            {/* Terminal Tab header */}
            <div className="flex items-center justify-between border-b border-mistral-border-light bg-mistral-cream-dark/50 px-4 py-2.5 dark:border-mistral-border-dark dark:bg-[#050505]">
              <div className="flex items-center space-x-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#108e62] animate-pulse" />
                <span className="font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  console@synco_sandbox_cloud
                </span>
              </div>
              <div className="flex items-center space-x-4 text-[10px] font-mono text-zinc-405 dark:text-zinc-500">
                <span>ORCHESTRATOR: READY</span>
                <span className="hidden sm:inline">PING: 8ms</span>
              </div>
            </div>

            {/* Chat conversation area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
              
              {/* Informative Welcome note inside chat */}
              <div className="rounded-sm border border-dashed border-primary-brand/20 bg-primary-brand-light/35 p-4 dark:bg-primary-brand/5 max-w-xl">
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 text-primary-brand mt-0.5 shrink-0" />
                  <div className="text-xs space-y-1">
                    <h5 className="font-bold text-zinc-900 dark:text-zinc-100">Bâtissez avec synco-context</h5>
                    <p className="text-zinc-650 dark:text-zinc-405 leading-relaxed">
                      L'agent possède son propre moteur de synchronisation. Cliquez sur les exemples ci-dessous ou saisissez une demande pour observer comment Synco indexe et synthétise différents canaux de messagerie en temps réel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Discussion Feed */}
              {chatHistory.map((chat) => (
                <div key={chat.id} className="space-y-4">
                  
                  {/* User Question */}
                  <div className="flex items-start justify-end">
                    <div className="rounded-sm bg-zinc-900 px-4 py-2.5 font-sans text-xs text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm max-w-[80%]">
                      {chat.prompt}
                    </div>
                  </div>

                  {/* Systems citations header & execution metadata */}
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-zinc-405 dark:text-zinc-500 pl-2">
                    <span>⏱️ Latence contextuelle: <strong className="text-emerald-600 dark:text-emerald-400">{chat.timeTakenMs} ms</strong></span>
                    <span>•</span>
                    <span>📑 Indexation: <strong className="text-blue-600 dark:text-blue-400">{chat.tokensSynced.toLocaleString()} tox</strong></span>
                    <span>•</span>
                    <div className="flex items-center space-x-1.5 bg-zinc-50 text-zinc-600 rounded-sm px-1.5 py-0.5 dark:bg-zinc-850 dark:text-zinc-350">
                      <span>Sources Citées:</span>
                      {chat.sourcesUsed.map((sc) => (
                        <span key={sc} className="font-bold uppercase text-[8px] text-primary-brand">{sc}</span>
                      ))}
                      {chat.sourcesUsed.length === 0 && <span className="text-red-500 font-bold uppercase text-[8px]">aucune (vide)</span>}
                    </div>
                  </div>

                  {/* Synco Agent Typed Model Response */}
                  <div className="flex items-start space-x-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-primary-brand/30 bg-primary-brand/10">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary-brand" />
                    </div>
                    <div className="rounded-sm border border-mistral-border-light bg-[#fdfdfb] p-4 text-xs font-sans text-zinc-800 dark:border-mistral-border-dark dark:bg-zinc-950 dark:text-zinc-100 shadow-sm leading-relaxed max-w-[90%] whitespace-pre-line">
                      {chat.response}
                    </div>
                  </div>

                </div>
              ))}

              {/* Streaming logs inside console sandbox during background wait */}
              {isProcessing && (
                <div className="space-y-3">
                  {/* Streaming Terminal Lines */}
                  <div className="rounded-sm bg-zinc-900 p-4 font-mono text-[10px] text-green-400 space-y-1.5 dark:bg-zinc-950">
                    <p className="text-zinc-405 font-bold mb-1">=== CONSOLE DIRECT INDEXING LOGGER ===</p>
                    {consoleLogs.map((logLine, idx) => (
                      <p key={idx} className="flex items-center space-x-2 animate-fade-in">
                        <ChevronRight className="h-3 w-3 shrink-0 text-primary-brand" />
                        <span>{logLine}</span>
                      </p>
                    ))}
                    <div className="flex items-center space-x-2 text-zinc-400 animate-pulse pt-1">
                      <RefreshCw className="h-3 w-3 animate-spin text-primary-brand" />
                      <span>Syntonisation du LLM avec les blocs structurés...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick Presets Prompt Deck */}
            <div className="border-t border-mistral-border-light/60 p-3 bg-[#fbfbfa]/75 dark:border-mistral-border-dark/40 dark:bg-zinc-900/40">
              <span className="font-mono text-[9px] text-zinc-405 uppercase tracking-wide block mb-2 pl-1 select-none">
                🔥 Questions suggérées (S'ajuste au profil des sources activées) :
              </span>
              <div className="flex flex-wrap gap-2">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    disabled={isProcessing}
                    onClick={() => {
                      const data = preset.responseBuilder();
                      setInputQuery(preset.prompt);
                      handleQuerySubmit(preset.prompt);
                    }}
                    className="flex items-center space-x-1.5 rounded-sm border border-neutral-200 bg-white px-2.5 py-1.5 text-left font-sans text-[11px] text-zinc-650 hover:bg-[#faf9f5] hover:border-primary-brand/40 hover:text-black dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-350 dark:hover:bg-zinc-850 dark:hover:text-white transition-all disabled:opacity-50 select-none"
                  >
                    <span>{preset.title}</span>
                    <ChevronRight className="h-3 w-3 text-neutral-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom text inputs */}
            <div className="border-t border-mistral-border-light/85 p-3 bg-white dark:border-mistral-border-dark dark:bg-[#080808] flex items-center space-x-2">
              <input
                type="text"
                value={inputQuery}
                disabled={isProcessing}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleQuerySubmit(inputQuery);
                  }
                }}
                placeholder={isProcessing ? "Indexation d'entreprise en cours..." : "Posez une question contextuelle à Synco..."}
                className="flex-1 bg-zinc-50 border border-neutral-200 rounded-sm px-3 py-2 text-xs font-sans text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-primary-brand/80 focus:ring-1 focus:ring-primary-brand/35 disabled:opacity-70 dark:bg-[#050505] dark:border-zinc-800 dark:text-zinc-100"
              />
              <button
                disabled={isProcessing || !inputQuery.trim()}
                onClick={() => handleQuerySubmit(inputQuery)}
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary-brand text-white shadow hover:bg-[#0d7a54] active:scale-95 disabled:opacity-40 transition-all cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
