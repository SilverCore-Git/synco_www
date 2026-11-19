// Liens et informations globales du site.
// Les valeurs entre crochets sont des emplacements à compléter (repris tels quels du design).

export const links = {
  /** URL de l'application (bouton « Se connecter ») — à remplacer par la vraie URL. */
  login: '#connexion',
  /** Inscription : bouton « Inscription » de la nav et boutons « Créer mon organisation ». */
  signup: 'https://umami.silvercore.fr/q/registresynco',
  instagram: '#instagram',
  discord: '#discord',
  github: '#github',
};

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
      title: 'Information',
      items: [
        { label: 'Confidentialité', href: '#confidentialite' },
        { label: 'Mentions légales', href: '#mentions-legales' },
      ],
    },
    {
      title: 'Contact',
      items: [{ label: '[E-mail]' }, { label: '[Téléphone]' }],
    },
    {
      title: 'Nos services',
      items: [{ label: '[Service 1]' }, { label: '[Service 2]' }, { label: '[Service 3]' }],
    },
  ] as { title: string; items: { label: string; href?: string }[] }[],
};
