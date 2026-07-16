"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { MessageSquare, Video, FolderLock, Kanban, Network, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    title: "Espaces & Canaux",
    description: "Organisez votre entreprise. Salons textuels et vocaux instantanés sans friction.",
    icon: MessageSquare,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500"
  },
  {
    title: "Messagerie Ultra-Sécurisée",
    description: "Échanges en tête-à-tête chiffrés et sessions éphémères P2P pour vos secrets.",
    icon: Network,
    gradient: "from-primary/20 to-[#4ade80]/20",
    iconColor: "text-primary"
  },
  {
    title: "Visioconférence",
    description: "Partage d'écran et collaboration en temps réel, intégrés directement dans l'app.",
    icon: Video,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500"
  },
  {
    title: "Fichiers Cloud",
    description: "Stockage dédié par projet. Fini les recherches interminables dans l'historique.",
    icon: FolderLock,
    gradient: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-500"
  },
  {
    title: "Kanban Intégré",
    description: "Gérez vos tâches visuellement. À faire, En cours, Terminé. Tout est centralisé.",
    icon: Kanban,
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-500"
  },
];

export function Modules() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // We track the scroll progress within this tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map progress (0 to 1) to an index (0 to length-1)
    let newIdx = Math.floor(latest * modules.length);
    if (newIdx >= modules.length) newIdx = modules.length - 1;
    if (newIdx < 0) newIdx = 0;
    
    if (newIdx !== activeIdx) {
      setActiveIdx(newIdx);
    }
  });

  const handleJumpToModule = (idx: number) => {
    if (!containerRef.current) return;
    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    
    // We scroll to the exact vertical position corresponding to the module's chunk
    const targetY = top + scrollY + (idx * height / modules.length) + 10;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    // Outer container is very tall to allow scrolling (100vh per module)
    <section id="modules" ref={containerRef} className="relative bg-background border-t border-border/50" style={{ height: `${modules.length * 80}vh` }}>
      
      {/* Sticky wrapper that stays glued to the screen while scrolling through the section */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Un espace. Des <span className="text-primary">modules</span> infinis.
            </h2>
            <p className="text-muted-foreground text-xl">
              Faites défiler pour explorer les fonctionnalités de la plateforme.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Interactive List */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {modules.map((mod, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleJumpToModule(idx)}
                    className={cn(
                      "text-left p-6 rounded-2xl transition-all duration-300 border flex gap-6 items-start",
                      isActive 
                        ? "bg-white shadow-lg border-primary/20 scale-100" 
                        : "bg-transparent border-transparent hover:bg-slate-50 hover:scale-[1.02] opacity-60 hover:opacity-100"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                      isActive ? `bg-black/5 ${mod.iconColor}` : "bg-slate-100 text-muted-foreground"
                    )}>
                      <mod.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={cn("text-xl font-bold mb-2 transition-colors", isActive ? "text-foreground" : "text-foreground/80")}>
                        {mod.title}
                      </h3>
                      
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-muted-foreground pt-1 pb-2">
                              {mod.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Media Showcase */}
            <div className="w-full lg:w-1/2 relative h-[500px]">
              <div className="absolute inset-0 bg-white rounded-3xl border border-border shadow-2xl flex flex-col overflow-hidden">
                
                <div className="h-12 border-b border-border bg-slate-50 flex items-center px-6 gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="flex-1 relative bg-slate-50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br flex flex-col items-center justify-center p-8",
                        modules[activeIdx].gradient
                      )}
                    >
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-white/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <PlayCircle className={cn("relative z-10 w-24 h-24 drop-shadow-md transition-transform duration-300 group-hover:scale-110", modules[activeIdx].iconColor)} />
                      </div>
                      <p className="mt-8 text-foreground/60 font-medium text-lg text-center">
                        [ Vidéo / Screenshot : {modules[activeIdx].title} ]
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
