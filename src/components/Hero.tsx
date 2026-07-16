"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, ShieldCheck, Globe, ServerOff } from "lucide-react";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-[95vh] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-grid">
      {/* Top subtle fade out for grid if needed */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-7xl bg-primary rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-12 sm:p-24"
      >
        {/* Dotted pattern overlay */}
        <div className="absolute inset-0 bg-dot-white opacity-40 mix-blend-overlay pointer-events-none" />

        {/* Glow at the bottom like Cloudflare */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[80%] h-[50%] bg-[#4ade80] rounded-[100%] blur-[100px] opacity-60 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center mt-8">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white max-w-6xl mb-8 leading-[1.1]"
          >
            La collaboration <br className="hidden md:block" />
            sécurisée à la française.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 max-w-2xl mb-12 font-medium"
          >
            L'alternative européenne à Slack et Teams. Centralisez vos échanges, réunions et fichiers dans un espace de travail ultra-rapide, chiffré de bout en bout.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="/contact"><button className="active:scale-95 transition-all duration-100 ease-in-out cursor-pointer inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-slate-50 gap-2 group shadow-xl">
              Nous contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button></a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-medium text-white/90"
          >
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
              <Lock className="w-4 h-4 text-white" />
              <span>Chiffré de bout en bout</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
              <Globe className="w-4 h-4 text-white" />
              <span>Souveraineté Européenne</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>100% RGPD</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
              <ServerOff className="w-4 h-4 text-white" />
              <span>Anti Cloud Act</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
