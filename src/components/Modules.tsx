"use client";

import { motion } from "framer-motion";
import { MessageSquare, Video, FolderLock, Kanban, Network } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    title: "Espaces & Canaux",
    description: "Organisez votre entreprise. Salons textuels et vocaux instantanés sans friction.",
    icon: MessageSquare,
  },
  {
    title: "Messagerie Ultra-Sécurisée",
    description: "Échanges en tête-à-tête chiffrés (E2EE) et sessions éphémères P2P pour vos secrets.",
    icon: Network,
  },
  {
    title: "Visioconférence",
    description: "Partage d'écran et collaboration en temps réel, intégrés directement dans l'app.",
    icon: Video,
  },
  {
    title: "Fichiers Cloud",
    description: "Stockage dédié par projet. Fini les recherches interminables dans l'historique.",
    icon: FolderLock,
  },
  {
    title: "Kanban Intégré",
    description: "Gérez vos tâches visuellement. À faire, En cours, Terminé. Tout est centralisé.",
    icon: Kanban,
  },
];

export function Modules() {
  return (
    <section className="py-32 relative bg-transparent border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                Un espace. <br />
                Des <span className="text-primary">modules</span> infinis.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Activez uniquement ce dont vous avez besoin. Synco s'adapte à la complexité de votre équipe.
              </p>
              
              <div className="w-24 h-1 bg-primary mb-8 rounded-full" />
            </div>
          </div>

          {/* Scrolling Right Column (Cards) */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {modules.map((mod, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "p-8 sm:p-10 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow",
                    "group relative overflow-hidden",
                    index === 0 ? "sm:col-span-2 bg-slate-50" : ""
                  )}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                    <mod.icon className="w-32 h-32" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                      <mod.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{mod.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {mod.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
