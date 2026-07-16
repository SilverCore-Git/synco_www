"use client";

import { motion } from "framer-motion";
import { MessageSquare, Video, FolderLock, Kanban, Headphones, Network } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    title: "Espaces de Travail & Canaux",
    description: "Organisez votre entreprise en Espaces. Créez des Salons Textuels pour des discussions asynchrones et des Salons Vocaux (façon Discord) pour des réunions instantanées sans lien.",
    icon: MessageSquare,
    subIcon: Headphones,
    align: "left",
  },
  {
    title: "Messagerie Directe Ultra-Sécurisée",
    description: "Échangez en tête-à-tête dans des conversations entièrement chiffrées de bout en bout. Lancez des sessions éphémères P2P pour vos données ultra-confidentielles.",
    icon: Network,
    align: "right",
  },
  {
    title: "Visioconférence Intégrée",
    description: "Ne quittez plus l'application. Partagez votre écran, activez votre caméra et collaborez en temps réel avec une fluidité exceptionnelle.",
    icon: Video,
    align: "left",
  },
  {
    title: "Gestionnaire de Fichiers Cloud",
    description: "Chaque projet possède son propre espace de stockage. Créez des dossiers, glissez-déposez vos documents et retrouvez tout en un clin d'œil.",
    icon: FolderLock,
    align: "right",
  },
  {
    title: "Gestionnaire de Tâches Kanban",
    description: "Fini Trello ou Asana. Un système visuel intégré (À faire, En cours, Terminé) avec assignation et vue globale de tous vos projets.",
    icon: Kanban,
    align: "left",
  },
];

export function Modules() {
  return (
    <section className="py-24 relative bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            L'Espace de Travail <span className="text-primary">Tout-en-Un</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Des outils puissants pensés pour la rapidité et la sécurité, modulables selon les besoins de chaque équipe.
          </p>
        </div>

        <div className="space-y-24">
          {modules.map((mod, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col md:flex-row items-center gap-12",
                mod.align === "right" ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: mod.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary">
                  <mod.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold">{mod.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {mod.description}
                </p>
              </motion.div>

              {/* Visual Side (Mockup abstract) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-video rounded-2xl glass flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <mod.icon className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
