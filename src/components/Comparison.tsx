"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Chiffrement de bout en bout",
    synco: "yes",
    teams: "no",
    slack: "no",
  },
  {
    feature: "Module Todo / Kanban natif",
    synco: "yes",
    teams: "partial",
    teamsLabel: "Microsoft Planner",
    slack: "partial",
    slackLabel: "Applications tiers",
  },
  {
    feature: "Gestionnaire de fichiers par projet",
    synco: "yes",
    teams: "partial",
    teamsLabel: "Complexe (SharePoint)",
    slack: "partial",
    slackLabel: "Désorganisé",
  },
  {
    feature: "Simplicité extrême de l'interface",
    synco: "yes",
    teams: "no",
    teamsLabel: "Usine à gaz",
    slack: "partial",
    slackLabel: "Moyenne",
  },
  {
    feature: "Sessions Vocales et textuelles Éphémères",
    synco: "yes",
    teams: "no",
    slack: "partial",
    slackLabel: "Huddles",
  },
  {
    feature: "Hébergement 100% Européen (RGPD)",
    synco: "yes",
    teams: "partial",
    teamsLabel: "Transferts vers US",
    slack: "partial",
    slackLabel: "Transferts vers US",
  },
  {
    feature: "Immunité au CLOUD Act américain",
    synco: "yes",
    teams: "no",
    slack: "no",
  },
];

export function Comparison() {
  const getIcon = (status: string, label: string) => {
    if (status === "yes") {
      return (
        <div className="flex items-center justify-center gap-2 text-primary font-medium">
          <CheckCircle2 className="w-5 h-5" />
          <span className="hidden sm:inline">Oui</span>
        </div>
      );
    }
    if (status === "no") {
      return (
        <div className="flex items-center justify-center gap-2 text-red-500/80 font-medium">
          <XCircle className="w-5 h-5" />
          <span className="hidden sm:inline">{label || "Non"}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center gap-2 text-yellow-500/80 font-medium">
        <AlertCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">{label || "Partiel"}</span>
      </div>
    );
  };

  return (
    <section id="comparaison" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Les Forces de Synco.
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez pourquoi les équipes exigeantes délaissent les outils traditionnels pour passer sur Synco.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl overflow-hidden border border-border"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="p-6 font-semibold text-lg">Fonctionnalité</th>
                  <th className="p-6 font-semibold text-lg text-center text-primary">Synco.</th>
                  <th className="p-6 font-semibold text-lg text-center text-muted-foreground">Microsoft Teams</th>
                  <th className="p-6 font-semibold text-lg text-center text-muted-foreground">Slack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/[0.02] transition-colors">
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center">
                      {getIcon(row.synco, "")}
                    </td>
                    <td className="p-6 text-center">
                      {getIcon(row.teams, (row as any).teamsLabel)}
                    </td>
                    <td className="p-6 text-center">
                      {getIcon(row.slack, (row as any).slackLabel)}                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
