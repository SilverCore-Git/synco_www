"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor } from "lucide-react";

export function Cta() {
  return (
    <section className="py-24 relative bg-primary-dark/10 border-y border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center gap-6 mb-8 text-primary">
            <Monitor className="w-12 h-12" />
            <Smartphone className="w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Travaillez de n'importe où
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Synco est 100% responsive. Que vous soyez au bureau sur un grand écran ou dans les transports sur mobile, l'interface s'adapte intelligemment pour rester parfaitement fluide.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40">
            Rejoignez Synco aujourd'hui
          </button>
        </motion.div>
      </div>
    </section>
  );
}
