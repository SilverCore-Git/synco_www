import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, Ticket, Building, Users, Server, Trash } from 'lucide-react';
import { ContactRequest } from '../types';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [teamSize, setTeamSize] = useState<number>(30);
  const [hostingPreference, setHostingPreference] = useState<'sovereign_cloud' | 'on_premise'>('sovereign_cloud');
  
  const [successRequest, setSuccessRequest] = useState<ContactRequest | null>(null);
  const [pastRequests, setPastRequests] = useState<ContactRequest[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('sinko_requests');
    if (saved) {
      setPastRequests(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;

    const requestUniqueToken = `SINKO-FR-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const newRequest: ContactRequest = {
      id: requestUniqueToken,
      name,
      email,
      company,
      teamSize,
      hostingPreference,
      submittedAt: new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const updated = [newRequest, ...pastRequests];
    setPastRequests(updated);
    localStorage.setItem('sinko_requests', JSON.stringify(updated));

    setSuccessRequest(newRequest);
    
    // Clear inputs
    setName('');
    setEmail('');
    setCompany('');
  };

  const handleClearHistory = () => {
    localStorage.removeItem('sinko_requests');
    setPastRequests([]);
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-[11px] font-mono uppercase tracking-wider bg-green-50 text-sinko-green px-3.5 py-1.5 rounded-full border border-green-150 font-bold">
          Rejoignez l'aventure souveraine
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-slate-950">
          Demande d'accès anticipé & Démonstration Sinko
        </h2>
        <p className="text-sm text-slate-600 font-sans leading-relaxed">
          Vous souhaitez déployer Sinko au sein de vos équipes ou commander un audit de sécurité pour tester la version On-Premise ? Remplissez ce formulaire d'amorçage.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Form elements in col span 7 */}
        <div className="lg:col-span-7 bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-200/80 space-y-6">
          
          {successRequest ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-2xl space-y-4 animate-fade-in text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 text-sinko-green flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">Demande enregistrée avec succès !</h3>
              <p className="text-xs text-slate-600">
                Félicitations, votre organisation <strong className="text-slate-900 font-bold">{successRequest.company}</strong> a rejoint la file d'attente pour Sinko. Notre équipe de Silvercor vous contactera d'ici 24 heures ouvrées.
              </p>

              {/* Secure Token badge */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 inline-flex flex-col items-center">
                <span className="text-[9px] text-slate-500 font-mono tracking-wider font-bold">CODE ANTICIPÉ SOUVERAIN</span>
                <span className="text-sm font-bold text-sinko-green font-mono tracking-widest mt-1 flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-sinko-green" /> {successRequest.id}
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSuccessRequest(null)}
                  className="text-xs text-emerald-700 font-bold hover:underline"
                >
                  Effectuer une nouvelle demande
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full name */}
                <div className="space-y-2">
                  <label htmlFor="fullname" className="text-xs font-bold text-slate-800">Votre Nom Complet :</label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    placeholder="Amandine Leroy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-200 rounded-xl p-3 text-slate-850 outline-none focus:border-sinko-green focus:ring-1 focus:ring-sinko-green font-medium shadow-sm"
                  />
                </div>

                {/* Professional Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-800">Mail Professionnel :</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="amandine.leroy@votre-entreprise.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl p-3 pl-9 text-slate-850 outline-none focus:border-sinko-green focus:ring-1 focus:ring-sinko-green font-medium shadow-sm"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Organization name */}
                <div className="space-y-2">
                  <label htmlFor="orgname" className="text-xs font-bold text-slate-800">Nom de l'Organisation / Entreprise :</label>
                  <div className="relative">
                    <input
                      id="orgname"
                      type="text"
                      required
                      placeholder="Silvercor SAS"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl p-3 pl-9 text-slate-850 outline-none focus:border-sinko-green focus:ring-1 focus:ring-sinko-green font-medium shadow-sm"
                    />
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  </div>
                </div>

                {/* Team size select */}
                <div className="space-y-2">
                  <label htmlFor="teamsizeselect" className="text-xs font-bold text-slate-800">Taille estimée de l'Équipe :</label>
                  <div className="relative flex items-center">
                    <select
                      id="teamsizeselect"
                      value={teamSize}
                      onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl p-3 pl-9 text-slate-850 outline-none focus:border-sinko-green focus:ring-1 focus:ring-sinko-green font-medium shadow-sm cursor-pointer"
                    >
                      <option value="5">Moins de 10 personnes</option>
                      <option value="30">10 à 50 personnes</option>
                      <option value="150">50 à 250 personnes</option>
                      <option value="500">Plus de 250 personnes</option>
                    </select>
                    <Users className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Hosting preference */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 block">Option de déploiement privilégiée :</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHostingPreference('sovereign_cloud')}
                    className={`p-3 rounded-xl border text-left flex gap-3 h-20 items-start cursor-pointer transition-all ${
                      hostingPreference === 'sovereign_cloud'
                        ? 'border-sinko-green bg-green-50/20 text-slate-900 ring-1 ring-sinko-green'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Server className={`w-5 h-5 mt-0.5 shrink-0 ${hostingPreference === 'sovereign_cloud' ? 'text-sinko-green' : 'text-slate-400'}`} />
                    <div>
                      <strong className="text-xs text-slate-900 block font-bold">Cloud Souverain Français</strong>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">
                        Hébergé sur serveurs Scaleway/OVH sécurisés avec administration exclusive en France.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHostingPreference('on_premise')}
                    className={`p-3 rounded-xl border text-left flex gap-3 h-20 items-start cursor-pointer transition-all ${
                      hostingPreference === 'on_premise'
                        ? 'border-sinko-green bg-green-50/20 text-slate-900 ring-1 ring-sinko-green'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Building className={`w-5 h-5 mt-0.5 shrink-0 ${hostingPreference === 'on_premise' ? 'text-sinko-green' : 'text-slate-400'}`} />
                    <div>
                      <strong className="text-xs text-slate-900 block font-bold">On-Premise (Sur Site)</strong>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-normal">
                        Déployé sur votre propre cloud privé d'entreprise, sous contrôle total de votre DSI.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-sinko-green hover:bg-emerald-600 text-white font-black text-xs rounded-full transition-all shadow-md shadow-[#16ac7733] hover:shadow-lg active:scale-[0.98] uppercase tracking-wider cursor-pointer"
              >
                Inscrire mon organisation à la Beta souveraine 🇫🇷
              </button>

              <p className="text-[10px] text-center text-slate-500 font-medium">
                🔒 Vos informations sont confidentielles et ne seront jamais partagées en dehors de Silvercor, conformément à notre charte souveraine.
              </p>
            </form>
          )}

        </div>

        {/* History of submissions / Past Requests in col span 5 */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 space-y-4 shadow-md min-h-[300px]">
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-display">
              Mes Demandes ({pastRequests.length})
            </h4>
            {pastRequests.length > 0 && (
              <button 
                onClick={handleClearHistory}
                className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                title="Vider l'historique local"
              >
                <Trash className="w-4 h-4" />
              </button>
            )}
          </div>

          {pastRequests.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 min-h-[220px]">
              <Ticket className="w-8 h-8 text-slate-400 mb-2" />
              <p className="text-xs text-slate-700 font-bold">Aucune inscription active.</p>
              <p className="text-[10px] text-slate-500 mt-1 font-sans">
                Remplissez le formulaire ci-contre pour générer votre pass digital certifié Silvercor.
              </p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
              {pastRequests.map((req) => (
                <div key={req.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-150 space-y-2 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-slate-900 block font-bold text-sm leading-tight">{req.company}</strong>
                      <span className="text-[10px] text-slate-500 block mt-1">Par {req.name} ({req.email})</span>
                    </div>
                    <span className="bg-green-50 text-sinko-green border border-green-150 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold shrink-0">
                      {req.id}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-500 pt-2 border-t border-slate-150">
                    <span className="flex items-center gap-1 font-bold">
                      📁 {req.hostingPreference === 'sovereign_cloud' ? 'Cloud FR' : 'On-Premise'}
                    </span>
                    <span className="font-semibold">{req.submittedAt}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-150 text-[10px] text-slate-650 leading-normal">
            💡 <strong className="text-slate-900 font-bold">Test en conditions réelles :</strong> Les demandes d'accès d'invité sont stockées de façon sécurisée uniquement dans la mémoire de votre navigateur (sans base externe lointaine), respectant notre charte de sécurité.
          </div>
        </div>

      </div>
    </div>
  );
};
