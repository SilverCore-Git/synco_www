import React, { useState, useEffect, useRef } from 'react';
import { 
  Hash, 
  Volume2, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Send, 
  Sparkles, 
  Fingerprint, 
  Check, 
  AlertCircle,
  Eye,
  EyeOff,
  User,
  Activity,
  Server
} from 'lucide-react';
import { SinkoChannel, ChannelMessage } from '../types';

// Interactive Bot automatic responses based on keywords in French
const getBotResponse = (userMsg: string): string => {
  const norm = userMsg.toLowerCase();
  if (norm.includes('gdpr') || norm.includes('rgpd')) {
    return "🔐 Oui ! Sinko est 100% conforme au RGPD. Vos données sont hébergées exclusivement en France (sur serveurs souverains sécurisés et neutres en carbone) et protégées contre le CLOUD Act américain.";
  }
  if (norm.includes('chiffre') || norm.includes('cryp') || norm.includes('crypto')) {
    return "🔑 Sinko utilise un chiffrement de bout en bout (E2EE) basé sur le protocole de pointe AES-GCM et ECDH. Seuls les membres autorisés de votre canal possèdent la clé de déchiffrement. Ni Silvercor, ni votre hébergeur ne peuvent lire vos discussions.";
  }
  if (norm.includes('discord') || norm.includes('teams') || norm.includes('slack')) {
    return "💡 Notre architecture s'inspire de la fluidité de Discord (salons vocaux instantanés, hiérarchie intuitive) tout en l'adaptant aux exigences professionnelles et de sécurité des entreprises européennes d'aujourd'hui ! Finis les lags de Teams.";
  }
  if (norm.includes('silvercor') || norm.includes('qui')) {
    return "🏢 Sinko est fièrement conçu et soutenu par Silvercor, une entreprise technologique française passionnée par la souveraineté numérique européenne et basée à Paris.";
  }
  if (norm.includes('prix') || norm.includes('gratuit') || norm.includes('tarif')) {
    return "💶 Sinko propose une version d'essai gratuite pour tester la plateforme, puis des abonnements prédictifs simples (sans frais cachés) en fonction du nombre d'utilisateurs. Nous proposons également un hébergement On-Premise (sur site) sur devis !";
  }
  return "👋 Bonjour ! Je suis Gilbert de Silvercor. N'hésitez pas à me poser une question sur notre chiffrement E2EE, l'hébergement de vos données en France (RGPD), ou la comparaison avec Slack & Teams !";
};

// Seed message definitions for channels
const INITIAL_CHANNELS: SinkoChannel[] = [
  {
    id: 'general',
    name: 'général-bienvenue',
    category: 'TEXTE',
    iconType: 'hash',
    messages: [
      {
        id: 'msg-1',
        senderName: 'Amélie (Silvercor)',
        senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
        senderRole: 'Product Owner',
        contentPlain: 'Bienvenue sur Sinko 🚀 ! Le premier hub collaboratif inspiré de Discord, souverain, ultra-fluide et français.',
        contentEncrypted: 'U2FsdGVkX18K/Y1T+H3bT4T5X8eXm8N4O1Fz1VbN0K9pL2gZ7yD==',
        timestamp: '10:05',
      },
      {
        id: 'msg-2',
        senderName: 'Julien (Sécurité)',
        senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
        senderRole: 'RSSI',
        contentPlain: 'Toutes les communications ici sont chiffrées de bout en bout de manière transparente. Tentez d\'activer/désactiver le "Mode Crypto" en haut à droite !',
        contentEncrypted: 'U2FsdGVkX19fUzZ/V39zKzVzTzQ4Mzg3NjM4NzY4NzY4Nzc==',
        timestamp: '10:07',
      }
    ],
  },
  {
    id: 'secu',
    name: 'chiffrement-rgpd',
    category: 'SÉCURITÉ Grade-A',
    iconType: 'shield',
    messages: [
      {
        id: 'sec-1',
        senderName: 'Julien (Sécurité)',
        senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
        senderRole: 'RSSI',
        contentPlain: 'Notre infrastructure élimine tout risque lié au CLOUD Act américain historique. Hébergement français, clés de chiffrement détenues uniquement par vos terminaux.',
        contentEncrypted: 'U2FsdGVkX1+zN9fM1U2c3Q0W1k2b3M4a5p6o7i8u9y0tE91===',
        timestamp: 'Hier',
      },
      {
        id: 'sec-2',
        senderName: 'Gilbert-le-Bot',
        senderAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=120',
        senderRole: 'Bot Officiel',
        contentPlain: 'Tapez une question concernant le RGPD, le chiffrement ou notre hébergement local pour me tester !',
        contentEncrypted: 'U2FsdGVkX1/vLzR4Nzc4NzQ0NzM2Y29tcGxpYW5jZV9vaw==',
        timestamp: 'Hier',
        isBot: true,
      }
    ]
  },
  {
    id: 'dev',
    name: 'développement-api',
    category: 'R&D',
    iconType: 'hash',
    messages: [
      {
        id: 'dev-1',
        senderName: 'Marc',
        senderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
        senderRole: 'Lead Dev',
        contentPlain: 'L\'API de Sinko est compatible avec les webhooks Discord et Slack. Migrer nos bots internes a pris moins de 2 heures.',
        contentEncrypted: 'U2FsdGVkX19HZm9vYmFyMTIzNGRldmVsb3BtZW50X2FwaQ==',
        timestamp: '10:12',
      }
    ]
  }
];

export const SinkoSimulator: React.FC = () => {
  const [channels, setChannels] = useState<SinkoChannel[]>(INITIAL_CHANNELS);
  const [activeChannelId, setActiveChannelId] = useState<string>('general');
  const [inputText, setInputText] = useState<string>('');
  const [isEncryptedView, setIsEncryptedView] = useState<boolean>(false);
  const [isVoiceConnected, setIsVoiceConnected] = useState<boolean>(false);
  const [isGeneratingReply, setIsGeneratingReply] = useState<boolean>(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeChannel = channels.find(c => c.id === activeChannelId) || channels[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChannel.messages, isGeneratingReply]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    
    // Add User Message to the active channel
    const userMsgId = `user-${Date.now()}`;
    // Simple custom cipher simulation
    const dummyCipher = `U2FsdGVkX1/${btoa(encodeURIComponent(userText)).slice(0, 24)}==`;
    
    const newUserMsg: ChannelMessage = {
      id: userMsgId,
      senderName: 'Vous (Invité Sinko)',
      senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      senderRole: 'Membre Visionnaire',
      contentPlain: userText,
      contentEncrypted: dummyCipher,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    };

    setChannels(prev => prev.map(ch => {
      if (ch.id === activeChannelId) {
        return { ...ch, messages: [...ch.messages, newUserMsg] };
      }
      return ch;
    }));

    setInputText('');

    // Trigger AI / Bot Response after 1 second
    setIsGeneratingReply(true);
    setTimeout(() => {
      const botReply = getBotResponse(userText);
      const botMsgId = `bot-${Date.now()}`;
      const botCipher = `U2FsdGVkX1/${btoa(encodeURIComponent(botReply)).slice(0, 24)}==`;

      const newBotMsg: ChannelMessage = {
        id: botMsgId,
        senderName: 'Gilbert-le-Bot',
        senderAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=120',
        senderRole: 'Bot Officiel',
        contentPlain: botReply,
        contentEncrypted: botCipher,
        timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        isBot: true
      };

      setChannels(prev => prev.map(ch => {
        if (ch.id === activeChannelId) {
          return { ...ch, messages: [...ch.messages, newBotMsg] };
        }
        return ch;
      }));
      setIsGeneratingReply(false);
    }, 1200);
  };

  const toggleVoice = () => {
    setIsVoiceConnected(!isVoiceConnected);
  };

  return (
    <div id="sinko-interactive-app" className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-950 font-sans text-gray-100 flex flex-col md:flex-row h-[550px]">
      
      {/* 1. Left Sidebar: Server list & Channel list (Discord inspiration) */}
      <div className="w-full md:w-64 bg-gray-900 flex flex-col border-r border-gray-800 shrink-0">
        
        {/* Server Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sinko-green font-display font-bold text-white flex items-center justify-center text-lg shadow-md shadow-sinko-green/20">
              S
            </div>
            <div>
              <h4 className="font-semibold text-gray-100 text-sm leading-tight flex items-center gap-1">
                Espace Silvercor
                <span className="text-[10px] bg-sinko-green/10 text-sinko-green px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider">FR</span>
              </h4>
              <p className="text-[11px] text-gray-400">Collaboratif Souverain</p>
            </div>
          </div>
        </div>

        {/* Channels scrollable container */}
        <div className="flex-1 overflow-y-auto p-2 space-y-4">
          <div>
            <span className="text-[10px] font-bold text-gray-500 px-2 tracking-wider font-display block uppercase">
              💬 Salons de Discussion
            </span>
            <div className="mt-1.5 space-y-0.5">
              {channels.map((ch) => {
                const isActive = ch.id === activeChannelId;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChannelId(ch.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md flex items-center justify-between text-xs transition-all ${
                      isActive 
                        ? 'bg-sinko-green/20 text-sinko-green font-medium' 
                        : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {ch.iconType === 'shield' ? (
                        <ShieldCheck className={`w-4 h-4 shrink-0 ${isActive ? 'text-sinko-green' : 'text-gray-500'}`} />
                      ) : (
                        <Hash className={`w-4 h-4 shrink-0 ${isActive ? 'text-sinko-green' : 'text-gray-500'}`} />
                      )}
                      <span className="truncate">{ch.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-gray-500 px-2 tracking-wider font-display block uppercase">
              🔊 Canaux Vocaux Souverains
            </span>
            <div className="mt-1.5 space-y-0.5">
              <button 
                onClick={toggleVoice}
                className={`w-full text-left px-2.5 py-1.5 rounded-md flex items-center justify-between text-xs transition-all ${
                  isVoiceConnected
                    ? 'bg-emerald-950 text-emerald-400 font-semibold ring-1 ring-emerald-800'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Volume2 className={`w-4 h-4 shrink-0 ${isVoiceConnected ? 'animate-pulse text-emerald-400' : 'text-gray-500'}`} />
                  <span className="truncate">Salle de Réunion A</span>
                </div>
                {isVoiceConnected ? (
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-400 font-mono font-bold px-1 py-0.5 rounded animate-pulse">
                    CO
                  </span>
                ) : (
                  <span className="text-[10px] text-gray-600 font-sans">E2EE</span>
                )}
              </button>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-gray-500 px-2 tracking-wider font-display block uppercase">
              👥 Équipe en ligne (3)
            </span>
            <div className="mt-1.5 space-y-1.5 px-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sinko-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sinko-green"></span>
                </span>
                <span className="font-medium text-gray-300">Amélie</span>
                <span className="text-[9px] bg-gray-800 text-gray-400 px-1 rounded">PO</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sinko-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sinko-green"></span>
                </span>
                <span className="font-medium text-gray-300">Julien</span>
                <span className="text-[9px] bg-red-950 text-red-400 px-1 rounded font-bold">RSSI</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="h-2 w-2 rounded-full bg-gray-600 block"></span>
                <span>Marc (Absent)</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Card */}
        <div className="p-3 bg-gray-950 border-t border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <div className="w-8 h-8 rounded-full bg-sinko-green/20 text-sinko-green flex items-center justify-center font-bold font-display ring-1 ring-sinko-green/30">
              U
            </div>
            <div className="truncate">
              <h5 className="text-xs font-semibold text-gray-200 truncate">Souverain_Invité</h5>
              <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                <Fingerprint className="w-3 h-3 text-sinko-green" /> Clé_E2EE_Active
              </p>
            </div>
          </div>
          <div className="text-xs text-gray-500 bg-gray-800/60 px-1.5 py-0.5 rounded font-mono border border-gray-800">
            FR
          </div>
        </div>
      </div>

      {/* 2. Main Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-950 relative">
        
        {/* Chat Header with Encryption Toggle */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gray-900/40">
          <div className="flex items-center gap-2">
            <Hash className="w-5 h-5 text-sinko-green" />
            <div>
              <h3 className="font-bold text-sm text-gray-100">#{activeChannel.name}</h3>
              <p className="text-xs text-gray-400 hidden sm:block">
                {activeChannel.id === 'secu' ? 'Audit cryptographique et conformité européenne' : 'Discussions générales d\'équipe'}
              </p>
            </div>
          </div>

          {/* Encryption visual toggler */}
          <div className="flex items-center gap-2 bg-gray-950 p-1.5 rounded-lg border border-gray-800">
            <span className="text-[10px] font-mono font-medium hidden xs:block text-gray-400">
              {isEncryptedView ? 'MODE SECURE' : 'MODE DIALECTE'}
            </span>
            <button
              onClick={() => setIsEncryptedView(!isEncryptedView)}
              className={`p-1 rounded transition-colors ${
                isEncryptedView 
                  ? 'bg-sinko-green text-gray-950' 
                  : 'bg-gray-800 text-gray-400 hover:text-gray-200'
              }`}
              title={isEncryptedView ? "Chiffrement transparent activé" : "Affichage brut"}
            >
              {isEncryptedView ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Security / Decryptor Banner */}
        <div className="bg-sinko-green/10 border-b border-sinko-green/20 px-4 py-2 flex items-center justify-between text-[11px] text-zinc-300">
          <div className="flex items-center gap-1.5 truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-sinko-green animate-pulse shrink-0" />
            <span className="truncate">
              {isEncryptedView 
                ? "Flux chiffré aes-256 brut circulant sur le serveur." 
                : "Données déchiffrées uniquement dans votre navigateur via clé locale privative."}
            </span>
          </div>
          <button 
            onClick={() => setIsEncryptedView(!isEncryptedView)}
            className="text-[10px] text-sinko-green active:scale-95 font-bold hover:underline shrink-0"
          >
            {isEncryptedView ? "Déchiffrer" : "Voir Chiffré"}
          </button>
        </div>

        {/* Channel Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {activeChannel.messages.map((msg) => (
            <div key={msg.id} className="flex gap-3 text-xs group transition-colors p-1.5 hover:bg-gray-900/30 rounded-lg">
              <img 
                src={msg.senderAvatar} 
                className="w-8 h-8 rounded-full border border-gray-800 ring-2 ring-gray-900 group-hover:scale-105 transition-transform" 
                alt={msg.senderName}
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className={`font-semibold ${msg.isBot ? 'text-amber-400' : 'text-zinc-200'}`}>
                    {msg.senderName}
                  </span>
                  {msg.isBot && (
                    <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 rounded text-[9px] font-bold">
                      BOT
                    </span>
                  )}
                  <span className="text-[9px] bg-gray-800 text-gray-400 px-1 py-0.5 rounded">
                    {msg.senderRole}
                  </span>
                  <span className="text-[10px] text-gray-500">
                    {msg.timestamp}
                  </span>
                </div>
                
                {/* Simulated encrypted text block with transition */}
                <div className="text-zinc-300 font-sans break-words bg-gray-900/10 p-1 rounded">
                  {isEncryptedView ? (
                    <span className="font-mono text-[11px] text-sinko-green break-all leading-normal bg-sinko-green/5 px-1 py-0.5 rounded border border-sinko-green/10 select-all block">
                      🔒 {msg.contentEncrypted}
                    </span>
                  ) : (
                    <span>{msg.contentPlain}</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Bot Typing Simulation */}
          {isGeneratingReply && (
            <div className="flex gap-3 text-xs p-1.5">
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=120" 
                className="w-8 h-8 rounded-full animate-bounce" 
                alt="Gilbert"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-amber-400">Gilbert-le-Bot</span>
                  <span className="text-[9px] bg-amber-500/10 text-amber-500 font-bold px-1 rounded">BOT</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-900/50 p-2 rounded-xl border border-gray-800 max-w-[100px] mt-1">
                  <span className="w-1.5 h-1.5 bg-sinko-green rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-sinko-green rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-sinko-green rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800 bg-gray-900/20">
          <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-xl p-2 focus-within:ring-2 focus-within:ring-sinko-green/40 xs:flex-row flex-col">
            <div className="p-1 px-2 text-xs font-mono font-medium text-sinko-green bg-sinko-green/10 rounded-lg shrink-0 select-none flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              E2EE Chat
            </div>
            
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Écrire dans #${activeChannel.name}... (posez une question !)`}
              className="flex-1 bg-transparent text-gray-100 placeholder-gray-500 border-none outline-none text-xs p-1.5 w-full font-sans"
            />
            
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="px-3.5 py-1.5 bg-sinko-green hover:bg-emerald-600 disabled:opacity-45 text-gray-950 font-bold text-xs rounded-lg transition-transform active:scale-95 shrink-0 flex items-center gap-1 w-full xs:w-auto justify-center"
            >
              Envoyer <Send className="w-3 h-3" />
            </button>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-gray-500 justify-between">
            <p className="flex items-center gap-1">
              💡 Suggestions : <span onClick={() => setInputText("Est-ce RGPD ?")} className="text-sinko-green hover:underline cursor-pointer">"Est-ce RGPD ?"</span> · <span onClick={() => setInputText("Le chiffrement Sinko")} className="text-sinko-green hover:underline cursor-pointer">"Le chiffrement Sinko"</span>
            </p>
            <p className="flex items-center font-mono text-gray-600">
              Serveurs : Paris (France) <Server className="w-3.5 h-3.5 text-sinko-green ml-1" />
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};
