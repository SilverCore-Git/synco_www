"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full bg-background z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-dark/50 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary text-sm font-medium mb-8"
        >
          <Lock className="w-4 h-4" />
          <span>Sécurité E2EE par défaut</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6 leading-tight"
        >
          L'Avenir de la <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#4ade80]">
            Collaboration Sécurisée
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Alliant la fluidité de Slack et la puissance de Teams, Synco centralise vos conversations, fichiers et tâches dans un environnement ultra-sécurisé, élégant et intuitif.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors gap-2 group w-full sm:w-auto">
            Commencer gratuitement
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg glass text-foreground font-medium hover:bg-muted transition-colors w-full sm:w-auto border border-border">
            Voir la démo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
