"use client";

import { motion } from "framer-motion";

export function Cta() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-primary rounded-[2rem] sm:rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Dotted background overlay */}
        <div className="absolute inset-0 bg-dot-white opacity-40 pointer-events-none" />
        
        {/* Cloudflare-like glow at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[60%] h-[60%] bg-white rounded-full blur-[120px] opacity-20 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Build without boundaries
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers de développeurs qui ont éliminé la complexité de l'infrastructure pour déployer globalement avec Synco.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
              Start building for free
            </button>
            <button className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors">
              View docs
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
