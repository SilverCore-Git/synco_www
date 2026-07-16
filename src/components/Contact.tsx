"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section className="pt-32 pb-24 bg-slate-50 border-t border-border flex-1 flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Contactez-nous</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Une question sur nos offres ? Besoin d'une démo personnalisée pour votre entreprise ? Notre équipe vous répond rapidement.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground/80">Nom complet</label>
                <input 
                  type="text" 
                  id="name"
                  className="px-4 py-3 rounded-xl border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground/80">Email professionnel</label>
                <input 
                  type="email" 
                  id="email"
                  className="px-4 py-3 rounded-xl border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="jean@entreprise.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-semibold text-foreground/80">Sujet</label>
              <input 
                type="text" 
                id="subject"
                className="px-4 py-3 rounded-xl border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Comment pouvons-nous vous aider ?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground/80">Message</label>
              <textarea 
                id="message"
                rows={5}
                className="px-4 py-3 rounded-xl border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y"
                placeholder="Décrivez votre besoin..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-4 w-full md:w-auto md:ml-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg active:scale-95 cursor-pointer"
            >
              Envoyer le message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
