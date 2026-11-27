// Liens et informations globales du site.
// Les valeurs entre crochets sont des emplacements à compléter (repris tels quels du design).

export const links = {
  /** Bouton « Se connecter » de la nav. */
  login: 'https://umami.silvercore.fr/q/loginsynco',
  /** Inscription : bouton « Inscription » de la nav et boutons « Créer mon organisation ». */
  signup: 'https://umami.silvercore.fr/q/registresynco',
  instagram: '#instagram',
  discord: '#discord',
  github: '#github',
};

/**
 * Page Contact (/contact) : liens désactivés temporairement (pas encore active).
 * Les liens restent affichés mais grisés et non cliquables. Passer à `true` pour les réactiver.
 * La page reste accessible en tapant directement l'adresse /contact.
 */
export const CONTACT_ENABLED = true;

export const contact = {
  /** Adresse affichée sur la page Contact (lien mailto et bouton « Copier l'adresse »). */
  email: '[E-mail]',
  /**
   * URL qui reçoit le formulaire (POST JSON : name, email, topic, message).
   * Vide : rien n'est envoyé, la page affiche seulement l'écran de confirmation (comme le design).
   */
  formEndpoint: '',
  topics: ['Demande de devis', 'Question sur Synco ou ses offres', 'Autre demande'],
  steps: [
    'Vous remplissez le formulaire',
    'Nous analysons votre demande',
    'Réponse par e-mail (adresse transmise dans le formulaire)',
  ],
};

export const mainNav = [
  { label: 'Accueil', to: '/#accueil' },
  { label: 'Présentation', to: '/presentation' },
  { label: 'Tarif', to: '/#tarif' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/contact' },
];

export const footer = {
  tagline: '[Phrase de présentation de Synco]',
  columns: [
    {
      title: 'Plan du site',
      items: [
        { label: 'Accueil', href: '/#accueil' },
        { label: 'Présentation', href: '/presentation' },
        { label: 'Tarif', href: '/#tarif' },
        { label: 'Configurateur', href: '/configurateur' },
        { label: 'FAQ', href: '/#faq' },
      ],
    },
    {
      title: 'Nous sommes',
      items: [
        { label: 'Silvercore', href: 'https://u.silvercore.fr/q/syncosilvercore' },
        { label: 'Silvertransfert', href: 'https://u.silvercore.fr/q/syncosilvertransfert' },
      ],
    },
    {
      title: 'Légal',
      items: [
        { label: 'Confidentialité', href: '#confidentialite' },
        { label: 'Mentions légales', href: '#mentions-legales' },
      ],
    },
  ] as { title: string; items: { label: string; href?: string }[] }[],
};
