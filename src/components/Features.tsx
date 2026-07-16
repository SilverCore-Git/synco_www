"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Blocks, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Sécurité Inégalée",
    description: "Vos échanges, documents sensibles et mots de passe ne regardent que vous. Grâce à notre technologie de chiffrement de bout en bout et nos communications P2P, même nous ne pouvons pas lire vos messages.",
    icon: ShieldCheck,
    color: "bg-white text-foreground border border-border",
    bgIcon: Lock,
    iconBg: "bg-primary/10 text-primary"
  },
  {
    title: "Interface Premium",
    description: "Fini les menus complexes. Synco offre un design épuré, moderne et dynamique basé sur l'architecture de discord, qui rend le travail quotidien agréable, que vous soyez sur votre ordinateur ou votre smartphone.",
    icon: Sparkles,
    color: "bg-white text-foreground border border-border",
    bgIcon: Sparkles,
    iconBg: "bg-primary/10 text-primary"
  },
  {
    title: "Modularité Unique",
    description: "Vous n'avez pas besoin du gestionnaire de tâches pour un projet spécifique ? Désactivez-le. Synco s'adapte à votre façon de travailler sans jamais vous surcharger.",
    icon: Blocks,
    color: "bg-white text-foreground border border-border",
    bgIcon: Blocks,
    iconBg: "bg-primary/10 text-primary"
  },
];

export function Features() {
  return (
    <section id="avantages" className="py-32 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Pourquoi choisir Synco ?
          </h2>
          <p className="text-muted-foreground text-xl">
            Faites défiler pour découvrir nos trois piliers fondamentaux.
          </p>
        </div>

        {/* Stacking Sticky Cards Layout */}
        <div className="relative max-w-5xl mx-auto flex flex-col pb-32" style={{ gap: '20vh' }}>
          {features.map((feature, index) => {
            // Offset each card slightly lower so they stack like a deck
            const stickyTop = 120 + (index * 40);

            return (
              <div
                key={index}
                className="sticky"
                style={{ top: `${stickyTop}px` }}
              >
                <motion.div
                  initial={{ opacity: 0.3, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px", amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={cn(
                    "relative w-full p-10 sm:p-16 lg:p-20 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col justify-center min-h-[50vh]",
                    feature.color
                  )}
                >
                  {/* Decorative background pattern/icon */}
                  <feature.bgIcon className="absolute -bottom-16 -right-16 w-96 h-96 opacity-[0.03] pointer-events-none" />

                  <div className="relative z-10">
                    <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-sm", feature.iconBg)}>
                      <feature.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">{feature.title}</h3>
                    <p className="text-xl sm:text-2xl opacity-90 leading-relaxed max-w-3xl font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
