/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HelpCircle, Clipboard, Check, Lightbulb, TrendingUp, Users } from 'lucide-react';

interface FeedbackQuestion {
  id: string;
  questionText: string;
  options: { label: string; details: string; code: string }[];
}

const FEEDBACK_QUESTIONS: FeedbackQuestion[] = [
  {
    id: "feature",
    questionText: "1. Quelle fonctionnalité inspirée de Discord manque le plus à vos outils SaaS pro d'aujourd'hui ?",
    options: [
      { code: "VOICE", label: "Salons Vocaux Spatialisés de Sinko", details: "L'arrivée/départ à la volée dans des bulles vocales sans planification de réunions pénibles." },
      { code: "RAM", label: "Légèreté & Vitesse absolue du client", details: "Finir les latences et les 1.2 Go de RAM consommés par Teams au démarrage." },
      { code: "ROLES", label: "Gestion fine des rôles & grades", details: "Rôles hérités de Discord pour structurer la hiérarchie de l'organisation simplement." },
      { code: "BOTS", label: "Bots applicatifs sur-mesure", details: "Prise en charge native de l'API webhooks compatible Discord pour interconnecter les outils de l'équipe." }
    ]
  },
  {
    id: "hosting",
    questionText: "2. Quelle architecture de stockage et souveraineté viserait votre organisation ?",
    options: [
      { code: "SOV_CLOUD", label: "Hébergement Cloud Souverain Sinko", details: "Prêt à l'emploi, hébergé en France (Scaleway/OVH) avec clés détenues par vous." },
      { code: "ON_PREM", label: "Auto-Hébergement complet (On-Premise)", details: "Déploiement direct de serveurs Docker Sinko sur vos propres infrastructures physiques." },
      { code: "HYBRID", label: "Hébergement Hybride Décentralisé", details: "Sauvegardes chiffrées distantes en France, cache et communication peer-to-peer en local d'entreprise." }
    ]
  },
  {
    id: "org",
    questionText: "3. Quel canal d'authentification et de vie d'équipe est clé pour vous ?",
    options: [
      { code: "LDAP", label: "Connexion Active Directory / LDAP / SSO", details: "Indispensable pour synchroniser instantanément les comptes de l'entreprise d'un coup." },
      { code: "EXTERNAL_GUEST", label: "Accès Invités & Clients simple", details: "Inviter des prestataires d'un clic via un lien éphémère crypté." },
      { code: "SANS_SSO", label: "Autonome avec double authentification 2FA", details: "Outil ultra étanche hors réseau d'entreprise pour les cellules de crise sécurisées." }
    ]
  }
];

export const FeedbackSection: React.FC = () => {
  const [votes, setVotes] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('sinko_feedback');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [comment, setComment] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectOption = (questionId: string, optionCode: string) => {
    const newVotes = { ...votes, [questionId]: optionCode };
    setVotes(newVotes);
    localStorage.setItem('sinko_feedback', JSON.stringify(newVotes));
  };

  // Generate a friendly summary text the user can easily copy & send to the model
  const generateFeedbackSummary = () => {
    let text = "Bonjour ! Voici mes orientations pour le développement de l'application Sinko construite par Silvercor :\n\n";
    FEEDBACK_QUESTIONS.forEach(q => {
      const selectedCode = votes[q.id];
      const selectedOption = q.options.find(o => o.code === selectedCode);
      text += `• ${q.questionText}\n  👉 Mon choix : ${selectedOption ? selectedOption.label : "Non spécifié"}\n\n`;
    });
    if (comment.trim()) {
      text += `• Suggestions & Idées supplémentaires :\n  💬 "${comment.trim()}"\n\n`;
    }
    text += "Qu'en penses-tu ? Hâte de continuer à développer Sinko sous cette direction !";
    return text;
  };

  const handleCopyToClipboard = () => {
    const text = generateFeedbackSummary();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error("Failed to copy", err);
    });
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const allAnswered = Object.keys(votes).length === FEEDBACK_QUESTIONS.length;

  return (
    <section className="bg-slate-50/50 border border-slate-200/80 rounded-3xl p-6 md:p-10 space-y-8 relative overflow-hidden shadow-sm">
      
      {/* Decorative top green bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sinko-green to-emerald-500"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Conceptual Text & Prompt Integration */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono font-bold">
            <HelpCircle className="w-4 h-4 text-sinko-green shrink-0" />
            PARTICIPEZ AU CO-DÉVELOPPEMENT
          </div>
          
          <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-950 tracking-tight">
            Co-concevons Sinko ensemble !
          </h3>
          
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            Vous avez demandé à me poser des questions pour co-développer l'idée de Sinko et affiner son orientation artistique ou technique.
          </p>
          
          <div className="text-xs text-slate-600 leading-relaxed font-sans bg-white p-4.5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sinko-green inline-block"></span>
              Mode d'emploi :
            </div>
            <p>
              Cochez vos préférences dans le formulaire interactif ci-contre. Vos choix généreront un résumé structuré et formaté. <span className="text-emerald-700 font-bold">Copiez-le en un clic</span> pour me l'envoyer directement dans la discussion de chat ci-contre !
            </p>
          </div>

          {/* Simulated stats showing community preference ratios */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block flex items-center gap-2 font-bold">
              <TrendingUp className="w-4 h-4 text-sinko-green shrink-0" /> Tendances des décideurs informatiques :
            </span>

            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1 font-semibold">
                  <span>Chiffrement client de bout-en-bout (E2EE)</span>
                  <span className="font-bold text-slate-900">92%</span>
                </div>
                <div className="w-full bg-slate-200/70 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-sinko-green h-1.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1 font-semibold">
                  <span>Recherche d'hébergement 100% Souverain FR</span>
                  <span className="font-bold text-slate-900">86%</span>
                </div>
                <div className="w-full bg-slate-200/70 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-sinko-green h-1.5 rounded-full" style={{ width: '86%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1 font-semibold">
                  <span>Intégration de type bulles vocales (Discord-style)</span>
                  <span className="font-bold text-slate-900">71%</span>
                </div>
                <div className="w-full bg-slate-200/70 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-sinko-green h-1.5 rounded-full" style={{ width: '71%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voting UI Form */}
        <div className="lg:col-span-7 space-y-6 bg-white p-6 rounded-2xl border border-slate-250 shadow-md">
          
          <form onSubmit={handleSubmitFeedback} className="space-y-6">
            {FEEDBACK_QUESTIONS.map((q) => (
              <div key={q.id} className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase font-display tracking-wider">
                  {q.questionText}
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt) => {
                    const isSelected = votes[q.id] === opt.code;
                    return (
                      <button
                        type="button"
                        key={opt.code}
                        onClick={() => handleSelectOption(q.id, opt.code)}
                        className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between h-24 cursor-pointer ${
                          isSelected
                            ? 'bg-green-50/50 border-sinko-green ring-1 ring-sinko-green text-slate-900'
                            : 'bg-slate-50/50 border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between w-full">
                          <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-emerald-700' : 'text-slate-800'}`}>
                            {opt.label}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-sinko-green shrink-0" />}
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal line-clamp-2 mt-1 font-sans">
                          {opt.details}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Custom comments box */}
            <div className="space-y-2">
              <label htmlFor="custom-comments" className="text-xs font-bold text-slate-900 uppercase font-display tracking-wider block">
                ✍️ Vos suggestions complémentaires ou questions :
              </label>
              <textarea
                id="custom-comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ex : Ajout d'une version web ultra légère, d'un bot de traduction anglais / français intégré..."
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-850 outline-none focus:border-sinko-green focus:ring-1 focus:ring-sinko-green"
                rows={2}
              />
            </div>

            {/* Actions for copying to clipboard */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-[11px] text-slate-500 font-semibold text-center sm:text-left">
                {allAnswered ? (
                  <span className="text-emerald-700 font-bold block">⭐ Choix complétés !</span>
                ) : (
                  <span>⚠️ Répondez aux {FEEDBACK_QUESTIONS.length - Object.keys(votes).length} questions pour générer le rapport.</span>
                )}
              </div>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyToClipboard}
                  disabled={!allAnswered}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-sinko-green hover:bg-emerald-600 disabled:opacity-40 text-white font-bold text-xs rounded-full transition-all active:scale-95 shadow-md shadow-[#16ac7733] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Clipboard className="w-4 h-4" />}
                  {copied ? "Copié !" : "Copier mes choix"}
                </button>
              </div>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
};
