export type Language = 'FR' | 'EN';

export interface TranslationSet {
  nav: {
    features: string;
    security: string;
    pricing: string;
    faq: string;
    ctaButton: string;
    teamsComparison: string;
  };
  hero: {
    title: string;
    titleGradient: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    securityBadge: string;
  };
  liveDemo: {
    title: string;
    subtitle: string;
    sender: string;
    recipient: string;
    placeholder: string;
    encryptButton: string;
    decryptButton: string;
    networkNode: string;
    networkWarning: string;
    cipherTextLabel: string;
    keyLabel: string;
    statusSecured: string;
    statusPlain: string;
    interactiveNotice: string;
  };
  features: {
    title: string;
    subtitle: string;
    e2eeTitle: string;
    e2eeDesc: string;
    voiceTitle: string;
    voiceDesc: string;
    fileTitle: string;
    fileDesc: string;
    channelsTitle: string;
    channelsDesc: string;
    sovereignTitle: string;
    sovereignDesc: string;
    integrationTitle: string;
    integrationDesc: string;
  };
  comparison: {
    title: string;
    subtitle: string;
    featureCol: string;
    slackCol: string;
    teamsCol: string;
    SyncoCol: string;
    rows: Array<{
      name: string;
      Synco: boolean | string;
      teams: boolean | string;
      slack: boolean | string;
      highlight?: boolean;
    }>;
  };
  sovereignty: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    hostTitle: string;
    hostDesc: string;
    lawTitle: string;
    lawDesc: string;
    auditTitle: string;
    auditDesc: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    perUser: string;
    startBtn: string;
    contactBtn: string;
    popularBadge: string;
    tiers: Array<{
      name: string;
      price: string;
      period: string;
      desc: string;
      features: string[];
      cta: string;
      popular: boolean;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  footer: {
    tagline: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    rights: string;
  };
}
