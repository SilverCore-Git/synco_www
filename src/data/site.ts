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
 * Partie « Contact » : action désactivée temporairement (pas encore active).
 * Les liens restent affichés mais grisés et non cliquables. Passer à `true` pour les réactiver.
 */
export const CONTACT_ENABLED = false;

export const mainNav = [
  { label: 'Accueil', to: '/#accueil' },
  { label: 'Présentation', to: '/presentation' },
  { label: 'Tarif', to: '/#tarif' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/#contact' },
];

export const footer = {
  tagline: '[Phrase de présentation de Synco]',
  columns: [
    {
      title: 'Légal',
      items: [
        { label: 'Confidentialité', href: '#confidentialite' },
        { label: 'Mentions légales', href: '#mentions-legales' },
      ],
    },
    {
      title: 'Plan du site',
      items: [
        { label: 'Accueil', href: '/#accueil' },
        { label: 'Présentation', href: '/presentation' },
        { label: 'Tarif', href: '/#tarif' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Configurateur', href: '/configurateur' },
      ],
    },
    {
      title: 'Nous sommes',
      items: [
        { label: 'Silvercore', href: 'https://u.silvercore.fr/q/syncosilvercore' },
        { label: 'Silvertransfert', href: 'https://u.silvercore.fr/q/syncosilvertransfert' },
      ],
    },
  ] as { title: string; items: { label: string; href?: string }[] }[],
};
