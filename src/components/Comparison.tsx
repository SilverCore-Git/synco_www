"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Chiffrement de bout en bout (Défaut)",
    synco: "yes",
    teams: "no",
    slack: "no",
  },
  {
    feature: "Modules activables (Fichiers, Tâches)",
    synco: "yes",
    teams: "partial",
    slack: "partial", // represented as "Via Apps tiers" in markdown
  },
  {
    feature: "Salons Vocaux permanents (Drop-in)",
    synco: "yes",
    teams: "no",
    slack: "partial", // Huddles
  },
  {
    feature: "Interface Ultra-Rapide et Allégée",
    synco: "yes",
    teams: "no", // Lourd
    slack: "partial", // Moyen
  },
  {
    feature: "Sessions Éphémères P2P",
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
          <span className="hidden sm:inline">Non</span>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center gap-2 text-yellow-500/80 font-medium">
        <AlertCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">{label}</span>
      </div>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Les Forces de Synco
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
                  <th className="p-6 font-semibold text-lg text-center text-primary">Synco</th>
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
                      {getIcon(row.teams, "Difficile")}
                    </td>
                    <td className="p-6 text-center">
                      {getIcon(row.slack, row.feature.includes("Vocaux") ? "Huddles" : row.feature.includes("Modules") ? "Apps Tiers" : "Moyen")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 glass p-6 rounded-xl max-w-3xl mx-auto border-l-4 border-l-primary flex gap-4"
        >
          <div className="text-primary mt-1">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Le saviez-vous ?</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Les administrateurs peuvent activer ou désactiver les modules de Fichiers et de Tâches d'un simple clic dans les paramètres. Vous gardez ainsi une interface qui correspond exactement à la complexité de votre équipe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
