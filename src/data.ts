import { TranslationSet } from './types';

export const translations: Record<'FR' | 'EN', TranslationSet> = {
  FR: {
    nav: {
      features: "Fonctionnalités",
      security: "Souveraineté",
      pricing: "Tarifs",
      faq: "FAQ",
      teamsComparison: "Comparatif",
      ctaButton: "Essayer Sinco",
    },
    hero: {
      sovereignBadge: "Alternative Souveraine & Chiffrée 🇪🇺 🇫🇷",
      title: "La collaboration d'équipe,",
      titleGradient: "sans compromis sur le secret.",
      description: "Sinco remplace Slack et Teams pour les organisations exigeantes. Messagerie, appels et documents collaboratifs protégés par un chiffrement de bout en bout et hébergés exclusivement en France.",
      primaryCta: "Démarrer gratuitement",
      secondaryCta: "Voir la démo interactive",
      trustedBy: "Recommandé pour les acteurs stratégiques, OIV et administrations publiques",
      securityBadge: "Conforme RGPD • Certifié SecNumCloud-ready • Zéro Cloud Act",
    },
    liveDemo: {
      title: "Chiffrement de Bout en Bout",
      subtitle: "Faites l'expérience de la confidentialité absolue. Tapez un message et observez comment il transite sur le réseau sous forme de données chiffrées indéchiffrables.",
      sender: "Émetteur (Votre App)",
      recipient: "Destinataire (Chloé)",
      placeholder: "Écrivez un message confidentiel...",
      encryptButton: "Chiffrer localement",
      decryptButton: "Déchiffrer localement",
      networkNode: "Serveur Sinco (France)",
      networkWarning: "⚠️ Sans clé détentrice, le réseau ne voit que du bruit numérique impossible à casser.",
      cipherTextLabel: "Message Chiffré AES-256 (Données réseau)",
      keyLabel: "Clé Secrète de Session (Générée localement)",
      statusSecured: "Protégé de bout en bout",
      statusPlain: "Texte en clair",
      interactiveNotice: "Cliquez sur 'Chiffrer' pour simuler l'envoi sécurisé instantané.",
    },
    features: {
      title: "Une suite collaborative complète et inviolable",
      subtitle: "L'ergonomie moderne de Slack combinée aux exigences de sécurité les plus élevées.",
      e2eeTitle: "Chiffrement de bout en bout (E2EE)",
      e2eeDesc: "Chaque message, conversation de salon, appel vocal et ficher est chiffré sur votre terminal avec des clés privées que vous seul contrôlez.",
      voiceTitle: "Visioconférences Ultra-Fluides",
      voiceDesc: "Organisez des réunions d'équipe haute définition en peer-to-peer chiffré, sans aucune écoute intermédiaire possible.",
      fileTitle: "Coffre-fort de fichiers",
      fileDesc: "Partagez et stockez vos documents sensibles. Les métadonnées sont masquées et les fichiers sont fragmentés sur des serveurs souverains.",
      channelsTitle: "Salons thématiques & Espaces",
      channelsDesc: "Structurez vos projets en canaux publics ou privés. Invitez des partenaires externes en mode invité hautement sécurisé.",
      sovereignTitle: "Souveraineté Française",
      sovereignDesc: "Zéro risque d'ingérence étrangère. Vos données en transit et au repos restent sous la juridiction exclusive de la France et de l'UE.",
      integrationTitle: "Migration Slack/Teams",
      integrationDesc: "Importez vos historiques de canaux, utilisateurs et fichiers en un clic. Vos équipes ne perdront pas leurs habitudes.",
    },
    comparison: {
      title: "Pourquoi choisir Sinco face aux géants américains ?",
      subtitle: "Une comparaison objective de la sécurité, de la souveraineté et des fonctionnalités.",
      featureCol: "Critère de comparaison",
      slackCol: "Slack",
      teamsCol: "Microsoft Teams",
      sincoCol: "Sinco",
      rows: [
        { name: "Chiffrement de bout en bout (E2EE) par défaut", sinco: true, teams: "Limité / Option payante", slack: false, highlight: true },
        { name: "Hébergement certifié SecNumCloud et souverain", sinco: "Oui, France 🇫🇷", teams: "Non (Azure USA/EU)", slack: false },
        { name: "Immunité contre le FISA & Cloud Act américain", sinco: true, teams: false, slack: false, highlight: true },
        { name: "Compatibilité RGPD & Recommandations CNIL", sinco: "Conformité Totale", teams: "Partielle / Avis réservé", slack: "Partielle" },
        { name: "Messagerie, Salons et Fils de discussion", sinco: true, teams: true, slack: true },
        { name: "Appels Audio/Vidéo Haute Définition", sinco: "Oui (P2P E2EE)", teams: "Oui (Non E2EE par défaut)", slack: "Oui" },
        { name: "Éditeur collaboratif de documents intégrés", sinco: true, teams: "Oui (SharePoint)", slack: "Limité" },
        { name: "Architecture Zero-Knowledge (Aucun accès éditeur)", sinco: true, teams: false, slack: false, highlight: true }
      ]
    },
    sovereignty: {
      badge: "SOUVERAINETÉ ET CONFIANCE",
      title: "Immunisez vos échanges contre l'espionnage industriel",
      desc1: "Les suites collaboratives américaines sont soumises à des lois extraterritoriales (Cloud Act, FISA) permettant aux services de renseignement étrangers d'exiger l'accès à vos secrets d'affaires, plans stratégiques et codes sources.",
      desc2: "Sinco est une entreprise 100% française, financée par des capitaux européens et hébergée sur des infrastructures qualifiées SecNumCloud par l'ANSSI. Vos secrets de conception restent les vôtres.",
      hostTitle: "Infrastructure Française",
      hostDesc: "Serveurs opérant en France au sein de datacenters neutres et géo-redondants.",
      lawTitle: "Conformité CNIL stricte",
      lawDesc: "Zéro transfert de données hors de l'Union Européenne et aucun cookie publicitaire.",
      auditTitle: "Code source auditable",
      auditDesc: "Nos protocoles de chiffrement sont transparents et régulièrement audités par des tiers indépendants.",
    },
    pricing: {
      title: "Des tarifs transparents pour toutes les exigences",
      subtitle: "Hébergé par Sinco ou déployé dans vos propres infrastructures (On-Premise).",
      monthly: "mois",
      perUser: "par utilisateur",
      startBtn: "Commencer l'essai",
      contactBtn: "Contacter le service public",
      popularBadge: "Conseillé",
      tiers: [
        {
          name: "Souverain Standard",
          price: "4.90€",
          period: "/ user / mois",
          desc: "Pour les TPE, PME et startups souhaitant sécuriser immédiatement leurs communications internes.",
          features: [
            "Chiffrement de bout en bout (E2EE)",
            "Salons privés illimités",
            "Visioconférences chiffrées jusqu'à 50 participants",
            "Espace de stockage : 20 Go par utilisateur",
            "Hébergement souverain France standard",
            "Console d'administration basique"
          ],
          cta: "Essai gratuit de 30 jours",
          popular: false
        },
        {
          name: "Souverain Pro (Sécurité renforcée)",
          price: "8.90€",
          period: "/ user / mois",
          desc: "Idéal pour les Entreprises de Taille Intermédiaire (ETI) et les secteurs hautement stratégiques.",
          features: [
            "Tout le forfait Standard",
            "Authentification SSO (SAML v2, OIDC)",
            "Hébergement exclusif sur cloud qualifié SecNumCloud",
            "Journal d'audit de sécurité et de conformité",
            "Support prioritaire français 24/7",
            "Intégration Active Directory/LDAP",
            "Rétention de données configurable",
          ],
          cta: "Démarrer l'essai Pro",
          popular: true
        },
        {
          name: "Secteur Public & Défense",
          price: "Sur Devis",
          period: "",
          desc: "Pour les Ministères, collectivités territoriales, OIV, mairies et organisations de santé.",
          features: [
            "Déploiement possible sur vos propres serveurs (On-Premise)",
            "Support de chiffrement physique par HSM tiers",
            "Marque blanche et nom de domaine personnalisé",
            "Homologation de sécurité spécifique",
            "Tarification préférentielle pour l'administration publique",
            "Disponibilité garantie par SLA contractuel"
          ],
          cta: "Contacter nos ingénieurs",
          popular: false
        }
      ]
    },
    faq: {
      title: "Vos questions sur la sécurité et le chiffrement",
      subtitle: "Tout comprendre sur l'alternative souveraine Sinco.",
      items: [
        {
          q: "Qu'est-ce que le chiffrement de bout en bout de Sinco ?",
          a: "Le chiffrement de bout en bout (E2EE) signifie que vos messages de groupe, photos, documents et appels téléphoniques sont cryptés sur votre appareil avant d'être envoyés. Seul le destinataire ciblé dispose de la clé cryptographique pour déchiffrer la donnée. De ce fait, même nos administrateurs système ne peuvent pas lire vos conversations."
        },
        {
          q: "Pourquoi la souveraineté française est-elle importante face à Teams ou Slack ?",
          a: "Les outils américains comme Slack ou Microsoft Teams sont assujettis aux lois extraterritoriales comme le Cloud Act ou la section 702 du FISA. Ces lois permettent aux autorités américaines d'accéder à vos documents confidentiels stockés chez eux, sans vous en informer. Sinco étant une entité française hébergée en France, nous sommes protégés de ces requêtes."
        },
        {
          q: "Peut-on facilement migrer depuis Slack ou Microsoft Teams ?",
          a: "Oui absolument. Sinco propose un assistant d'importation automatique. Vous pouvez charger vos exports de canaux, vos listes d'utilisateurs et vos documents historiques. Vos collaborateurs retrouveront une interface familière avec des performances et une réactivité largement supérieures."
        },
        {
          q: "Sinco propose-t-il une option d'auto-hébergement (On-Premise) ?",
          a: "Oui, notre offre 'Secteur Public & Défense' permet d'installer Sinco directement sur vos propres serveurs physiques, de façon totalement déconnectée d'Internet si nécessaire (Air-Gapped), ou au sein d'un cloud privé étatique."
        },
        {
          q: "Où se situent précisément vos serveurs s'ils sont souverains ?",
          a: "Nos serveurs sont répartis au sein de datacenters certifiés ISO 27001 et qualifiés SecNumCloud situés exclusivement en Île-de-France (notamment chez Equinix et Scaleway), offrant une redondance géographique complète."
        }
      ]
    },
    footer: {
      tagline: "Sinco - Reprenez le contrôle de vos secrets industriels et de vos communications d'équipe.",
      legal: "Mentions Légales",
      privacy: "Politique de Confidentialité",
      terms: "CGU / CGV",
      cookies: "Gestion des cookies",
      rights: "© 2026 Sinco. Tous droits réservés. Conçu et hébergé en France 🇫🇷"
    }
  },
  EN: {
    nav: {
      features: "Features",
      security: "Sovereignty",
      pricing: "Pricing",
      faq: "FAQ",
      teamsComparison: "Comparison",
      ctaButton: "Try Sinco",
    },
    hero: {
      sovereignBadge: "Sovereign & Encrypted Alternative 🇪🇺 🇫🇷",
      title: "Team collaboration,",
      titleGradient: "completely confidential.",
      description: "Sinco replaces Slack and Teams for security-minded organizations. Chat, voice calls, and collaborative docs protected by end-to-end encryption and hosted exclusively in France.",
      primaryCta: "Start Free Trial",
      secondaryCta: "Interactive Encryption Demo",
      trustedBy: "Empowering strategic industries, critical national infrastructure, and public sectors",
      securityBadge: "GDPR Compliant • SecNumCloud-ready infra • Zero US Cloud Act exposure",
    },
    liveDemo: {
      title: "End-to-End Encryption Simulator",
      subtitle: "Experience absolute confidentiality. Type a message down below and see how it flows through the network nodes as unbreakable scrambled ciphertext.",
      sender: "Sender (Your App)",
      recipient: "Recipient (Chloé)",
      placeholder: "Write a highly confidential note...",
      encryptButton: "Encrypt Locally",
      decryptButton: "Decrypt Locally",
      networkNode: "Sinco Transit Node (Paris)",
      networkWarning: "⚠️ Without the session key, the host network only sees random noise, which is impossible to crack.",
      cipherTextLabel: "AES-256 Encrypted Ciphertext (Network Payload)",
      keyLabel: "Local Session Secret Key (Never leaves user device)",
      statusSecured: "End-to-End Encrypted",
      statusPlain: "Plaintext state",
      interactiveNotice: "Click 'Encrypt Locally' to trigger a secure network transmission simulation.",
    },
    features: {
      title: "A complete collaboration workspace without vulnerability",
      subtitle: "The user experience of standard team apps backboned with military-grade privacy structures.",
      e2eeTitle: "E2E Encrypted Core (E2EE)",
      e2eeDesc: "Every direct message, group channel, voice call, and attached file is encrypted before taking off, ensuring zero eavesdropping.",
      voiceTitle: "Secured HD Voice & Video",
      voiceDesc: "Peer-to-peer encrypted high-definition team meetings, immune to central server sniffing or record features.",
      fileTitle: "Encrypted Locker Vault",
      fileDesc: "Share your business blueprint and intellectual property securely. Meta-elements are obfuscated and blocks are heavily ciphered.",
      channelsTitle: "Topic Channels & Spaces",
      channelsDesc: "Organize workflows via public or private channels. Bring external clients inside restricted secure guest rooms.",
      sovereignTitle: "Sovereign EU Cloud",
      sovereignDesc: "Zero risk of foreign surveillance. Your active communications stay under the exclusive legal jurisdiction of France and the EU.",
      integrationTitle: "Seamless Migration Assistant",
      integrationDesc: "Import slack dump data and teams rosters instantly. Retain habits while boosting safety levels.",
    },
    comparison: {
      title: "Why switch to Sinco from Big Tech platforms?",
      subtitle: "An objective feature-by-feature layout of security and sovereignty metrics.",
      featureCol: "Key Evaluation",
      slackCol: "Slack",
      teamsCol: "Microsoft Teams",
      sincoCol: "Sinco",
      rows: [
        { name: "Default End-to-End Encryption (E2EE)", sinco: true, teams: "Incomplete / Paid Opt-In", slack: false, highlight: true },
        { name: "Sovereign & SecNumCloud hosting infrastructure", sinco: "Yes, France 🇫🇷", teams: "No (US/EU Azure)", slack: false },
        { name: "Immunity to FISA & US Cloud Act spying warrants", sinco: true, teams: false, slack: false, highlight: true },
        { name: "Full GDPR & European Data Protection alignment", sinco: "Complete Compliance", teams: "Partial Compliance / Flagged", slack: "Partial" },
        { name: "Modern Channel Chat & Threads", sinco: true, teams: true, slack: true },
        { name: "High Definition Audio/Video Conferencing", sinco: "Yes (E2EE P2P)", teams: "Yes (Plain Server)", slack: "Yes" },
        { name: "Collaborative Real-time Document Writing", sinco: true, teams: "Yes (SharePoint Integrations)", slack: "Minimal" },
        { name: "Zero-Knowledge Server Infrastructure", sinco: true, teams: false, slack: false, highlight: true }
      ]
    },
    sovereignty: {
      badge: "DATA SOVEREIGNTY",
      title: "Insulate your core blueprints from foreign espionage",
      desc1: "SaaS suites hosted by American tech giants fall under extraterritorial laws (Cloud Act, FISA Section 702), giving foreign authorities legislative channels to review your strategy, design specs, or contract logs.",
      desc2: "Sinco is 100% incorporated in France, backed by European capitals, and operates on French state-regulated hardware levels. Protect your secrets from corporate lookups.",
      hostTitle: "French Server Cluster",
      hostDesc: "Redundantly clustered systems hosted within neutral French secure facilities.",
      lawTitle: "Zero Foreign Transfers",
      lawDesc: "No database records ever ship outside of Europe, completely compliant with strict GDPR standards.",
      auditTitle: "Verifiable Cryptography",
      auditDesc: "Cryptographic protocol stacks are transparent and subject to scheduled audits by third-party specialists.",
    },
    pricing: {
      title: "Transparent secure plans built for growth",
      subtitle: "Host securely on our French Cloud or deploy self-managed inside your bare-metal servers.",
      monthly: "month",
      perUser: "per user",
      startBtn: "Start Free Trial",
      contactBtn: "Contact Public Sector",
      popularBadge: "Recommended",
      tiers: [
        {
          name: "Sovereign Standard",
          price: "$4.90",
          period: "/ user / month",
          desc: "For small business and startups to shield proprietary communication lines and chat rooms.",
          features: [
            "Default end-to-end encryption (E2EE)",
            "Unlimited workspace channels & private discussions",
            "HD voice/video meetings up to 50 active peers",
            "20 GB storage allowance per registered user",
            "Sovereign French cloud cluster architecture",
            "Standard security admin settings"
          ],
          cta: "30-Day Free Trial",
          popular: false
        },
        {
          name: "Sovereign Pro (Maximum Privacy)",
          price: "$8.90",
          period: "/ user / month",
          desc: "Engineered for medium enterprises, strategic research grids, and security-centric companies.",
          features: [
            "Everything included in Standard plan",
            "SSO identity gateways (SAML v2, OIDC)",
            "SecNumCloud-compliant cloud hosting servers",
            "Real-time corporate security audit trails & logs",
            "Full French-expert 24/7 priority response assistance",
            "Active Directory & LDAP integration parameters",
            "Flexible metadata retention protocols",
          ],
          cta: "Start Pro Trial",
          popular: true
        },
        {
          name: "Public Sector & On-Premise",
          price: "Custom quote",
          period: "",
          desc: "Tailored to ministries, city councils, vital industries (OIV), health grids, and defense commands.",
          features: [
            "Self-managed bare-metal setup (On-Prem On-Site)",
            "Air-gapped local system compatibility",
            "HSM hardware token cryptographic encryption bounds",
            "White-labeled customization & custom target subdomains",
            "Preferential tariffs for EU government units",
            "Contractual priority uptime guarantees"
          ],
          cta: "Contact Engineers",
          popular: false
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Get transparent insights about Sinco's cryptographic and legal architecture.",
      items: [
        {
          q: "What defines Sinco's End-to-End Encryption?",
          a: "End-to-end encryption means that keys are generated locally. Messages and files are ciphered prior to leaving your laptop or phone. Because we utilize true zero-knowledge systems, not even Sinco admins hold mechanical keys to decipher the active database payloads."
        },
        {
          q: "Why is France-based hosting crucial for corporate strategic security?",
          a: "Big Tech hubs like Teams or Slack are based in the United States, placing them directly within the Cloud Act boundary. If a foreign body commands secret access, they must comply without signaling. Operating inside French borders makes those subpoenas void."
        },
        {
          q: "Is it straightforward to migrate from active Microsoft Teams or Slack workspaces?",
          a: "Definitely. We provide custom migration upload modules. Drag and drop your archive json/zips to populate channel histories, user list directories, and media galleries in minutes."
        },
        {
          q: "Can we install Sinco inside completely offline networks?",
          a: "Yes. Our Public Sector and Defense package explicitly provides standalone distribution binaries. These configure seamlessly without online dependencies, preserving network isolation."
        },
        {
          q: "Where exactly are scale logs and files physically saved?",
          a: "All database instances operate inside certified French datacenters (scaleway and Equinix structures in the Paris area). This features automatic triple cluster backups."
        }
      ]
    },
    footer: {
      tagline: "Sinco - Regain control of your corporate intel, project blueprints, and operational streams.",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Administration",
      rights: "© 2026 Sinco. All rights reserved. Made under strict French & EU sovereignty guidelines 🇫🇷"
    }
  }
};
