"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-grid">
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

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-10"
          >
            <Lock className="w-4 h-4" />
            <span>Connect 2026 · The Agentic Conference · Register</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white max-w-5xl mb-8 leading-[1.1]"
          >
            L'IA de pointe. <br className="hidden sm:block" />
            Sous votre contrôle.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 max-w-2xl mb-12 font-medium"
          >
            Une plateforme pour vos applications, agents et équipes. Construisez, sécurisez et scalez sans gérer d'infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-slate-50 transition-colors gap-2 group shadow-xl">
              Commencez gratuitement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
