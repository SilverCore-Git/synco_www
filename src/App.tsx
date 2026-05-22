/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MessageSquare, 
  Sparkles, 
  Zap, 
  Lock, 
  HelpCircle, 
  Layers, 
  Globe, 
  ChevronRight, 
  Command,
  CheckCircle2,
  Cpu,
  Fingerprint
} from 'lucide-react';
import { SinkoSimulator } from './components/SinkoSimulator';
import { CompareSection } from './components/CompareSection';
import { MetricCalculator } from './components/MetricCalculator';
import { FeedbackSection } from './components/FeedbackSection';
import { ContactForm } from './components/ContactForm';

// Floating feature badges
const KEY_BENEFITS = [
  { icon: ShieldCheck, title: "Zéro-Knowledge", desc: "Clés détenues par l'client" },
  { icon: Zap, title: "Moteur Discord-engine", desc: "Légèreté et salons vocaux" },
  { icon: Globe, title: "Hébergement 100% FR", desc: "Immunisé CLOUD Act" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Simple scroll utility helper
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-sinko-green/25 selection:text-sinko-green font-sans pb-16 antialiased">
      
      {/* 1. TOP HEADER / BRAND BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 px-4 md:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-sinko-green flex items-center justify-center font-display font-extrabold text-white text-lg shadow-lg shadow-[#16ac7733] transition-transform hover:scale-105">
              S
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight font-display text-slate-950 uppercase">Sinko</span>
              <span className="text-[10px] text-zinc-500 block leading-tight font-mono font-medium">by Silvercor</span>
            </div>
          </div>

          {/* Quick anchor menus */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] text-slate-600 uppercase tracking-widest font-bold">
            <button onClick={() => scrollToId('sinko-simulator-section')} className="hover:text-sinko-green transition-colors cursor-pointer">Démo Interactive</button>
            <button onClick={() => scrollToId('sovereign-compare-section')} className="hover:text-sinko-green transition-colors font-display cursor-pointer">Souveraineté & RGPD</button>
            <button onClick={() => scrollToId('metrics-section')} className="hover:text-sinko-green transition-colors cursor-pointer">Calculateur Empreinte</button>
            <button onClick={() => scrollToId('feedback-section')} className="hover:text-sinko-green text-amber-600 transition-colors cursor-pointer">Co-Développement 💬</button>
          </nav>

          {/* French Flag & Access Action */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full text-[10px] text-slate-600 select-none font-semibold">
              <span className="w-2 h-2 bg-blue-600 rounded-full inline-block"></span>
              <span className="w-2 h-2 bg-slate-300 rounded-full inline-block"></span>
              <span className="w-2 h-2 bg-red-600 rounded-full inline-block"></span>
              <span className="font-sans ml-0.5">Souverain</span>
            </div>
            
            <button 
              onClick={() => scrollToId('contact-section')}
              className="bg-sinko-green hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-full text-xs transition-all active:scale-95 shadow-md shadow-[#16ac7733]"
            >
              Accès Anticipé
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-16 pb-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Decorative subtle visual pattern background */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] bg-sinko-green/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-green-50 text-sinko-green border border-green-100 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> L'alternative Souveraine Française à Slack & Teams
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-[1.05] tracking-tight text-slate-900">
            La collaboration, <br />
            <span className="text-sinko-green bg-gradient-to-r from-sinko-green to-emerald-600 bg-clip-text text-transparent font-extrabold">
              à la française.
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans max-w-xl">
            Inspiré de l'architecture fluide et intuitive de Discord, <strong className="text-slate-900">Sinko</strong> est la plateforme collaborative nouvelle génération conçue par <strong className="text-slate-900">Silvercor</strong>. Ultra-sécurisé, réglementaire RGPD et certifié Zero-Knowledge. Vos données restent privées, toujours.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => scrollToId('sinko-simulator-section')}
              className="px-6 py-3 bg-sinko-green hover:bg-emerald-600 text-white font-bold text-xs rounded-full transition-transform active:scale-95 shadow-lg shadow-[#16ac7733] flex items-center gap-2 cursor-pointer"
            >
              Tester la démo interactive <ChevronRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToId('sovereign-compare-section')}
              className="px-6 py-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 font-bold text-xs rounded-full transition-transform active:scale-95 shadow-sm cursor-pointer"
            >
              Pourquoi Sinko ?
            </button>
          </div>

          {/* Dynamic bullet items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200">
            {KEY_BENEFITS.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-center p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-transform hover:-translate-y-0.5">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-[#16ac77] flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-sinko-green" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-normal font-sans mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero mockup using our actual generated image asset with styling overlay */}
        <div className="lg:col-span-6 relative group">
          <div className="absolute -inset-2 bg-gradient-to-tr from-sinko-green to-transparent rounded-3xl opacity-5 blur-xl group-hover:opacity-10 transition-opacity"></div>
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white scale-[1.01] hover:scale-[1.02] transition-transform duration-300 p-1.5">
            <div className="rounded-2xl overflow-hidden border border-slate-300/60 bg-slate-900">
              {/* Image display */}
              <img 
                src="/src/assets/images/sinko_hero_visual_1779483680163.png" 
                alt="Aperçu Sinko Dashboard" 
                className="w-full h-auto object-cover opacity-95 block"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Micro window actions overlay representation */}
            <div className="absolute top-5 left-5 flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
            </div>

            {/* Badge overlay indicating cryptographic state */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-150 flex items-center gap-2 text-[11px] text-slate-600 font-bold shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sinko-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sinko-green"></span>
              </span>
              <span className="font-mono">CHIPHER_KEY: EMERALD_OK</span>
            </div>
          </div>
        </div>

      </section>

      {/* 3. CORE INTERACTIVE SIMULATOR (Discord style communication mockup) */}
      <section id="sinko-simulator-section" className="py-20 px-4 md:px-8 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider bg-green-50 text-sinko-green border border-green-100 px-3 py-1 rounded-full text-xs font-bold">
              DÉCODEUR INTERACTIF
            </span>
            <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
              Faites l'expérience du client de discussion Sinko
            </h2>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              Découvrez la simplicité de l'interface de discussion en naviguant dans les salons et testez le cryptage de bout en bout en temps réel. Saisissez une phrase ou posez une question sur le RGPD à notre bot.
            </p>
          </div>

          <SinkoSimulator />
        </div>
      </section>

      {/* 4. COMPARISON / SOVEREIGNTY / GDPR INFO */}
      <section id="sovereign-compare-section" className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <CompareSection />
        </div>
      </section>

      {/* 5. DYNAMIC METRIC CALCULATOR */}
      <section id="metrics-section" className="py-20 px-4 md:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <MetricCalculator />
        </div>
      </section>

      {/* 6. CO-DEVELOPMENT FEEDBACK / QUESTION DRAWER (PROMPTS) */}
      <section id="feedback-section" className="py-20 px-4 md:px-8 bg-slate-50 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <FeedbackSection />
        </div>
      </section>

      {/* 7. CONTACT / SIGN UP OR AUDIT REQUEST */}
      <section id="contact-section" className="py-20 px-4 md:px-8 border-t border-slate-200 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* 8. FOOTER WITH CREDITS */}
      <footer className="mt-16 pt-16 border-t border-slate-150 max-w-7xl mx-auto px-4 md:px-8 text-xs text-slate-500 bg-white/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sinko-green flex items-center justify-center font-bold text-white text-sm shadow-md">
              S
            </div>
            <div>
              <span className="font-extrabold text-slate-900 block font-display tracking-tight">Sinko</span>
              <span className="text-[10px] text-zinc-500 block">© 2026 Silvercor SAS - Souveraineté collective</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-600 font-semibold text-[11px] uppercase tracking-wider">
            <span className="hover:text-sinko-green cursor-pointer transition-colors">Chartes RGPD & Sécurité</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-sinko-green cursor-pointer transition-colors">Engagement Éco-Responsable</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-sinko-green cursor-pointer transition-colors">Devenir Testeur Sinko</span>
          </div>
          
          <div className="text-[10px] font-mono text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 font-semibold">
            Hebergé en France 🇫🇷 • v1.0.4-souveraine
          </div>
        </div>
      </footer>

    </div>
  );
}
