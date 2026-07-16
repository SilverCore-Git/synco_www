"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Blocks } from "lucide-react";

const features = [
  {
    title: "Sécurité Inégalée",
    description: "Vos échanges professionnels, documents sensibles et mots de passe ne regardent que vous. Grâce à notre technologie de chiffrement de bout en bout (E2EE) et nos communications P2P, même nous ne pouvons pas lire vos messages.",
    icon: ShieldCheck,
  },
  {
    title: "Interface Premium",
    description: "Fini les menus complexes. Synco offre un design épuré, moderne et dynamique qui rend le travail quotidien agréable, que vous soyez sur votre ordinateur ou votre smartphone.",
    icon: Sparkles,
  },
  {
    title: "Modularité Unique",
    description: "Vous n'avez pas besoin du gestionnaire de tâches pour un projet spécifique ? Désactivez-le. Synco s'adapte à votre façon de travailler.",
    icon: Blocks,
  },
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pourquoi choisir Synco ?
          </h2>
          <p className="text-muted-foreground text-lg">
            Dans un monde où le télétravail est devenu la norme, les outils de communication traditionnels deviennent brouillons et ne garantissent pas la confidentialité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-start hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
