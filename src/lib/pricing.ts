// Grille tarifaire et calcul de l'estimation — logique reprise du configurateur du design.

/**
 * Offres payantes : pas encore disponibles dans l'application.
 * Tant que c'est à false, dans la section Tarif, « Faire une estimation » (Équipe) et
 * « Nous contacter » (Dédié) sont remplacés par un bouton « Non disponible » non cliquable.
 * Passer à `true` pour les réactiver.
 */
export const PRICING_ENABLED = false;

export const PRICE_PER_USER = 4; // € HT / utilisateur / mois
export const PRICE_PER_MODULE = 1.5; // € HT / module / utilisateur au-delà des 5 premiers
export const FREE_MODULE_USERS = 5;
export const MAX_USERS = 1000;

export const STORAGE_TIERS = [
  { label: 'Aucun', size: '0 Go', price: 0, fill: 0 },
  { label: '+20 Go', size: '20 Go', price: 5, fill: 1 },
  { label: '+100 Go', size: '100 Go', price: 18, fill: 2 },
  { label: '+500 Go', size: '500 Go', price: 70, fill: 3 },
  { label: '+2 To', size: '2 To', price: 220, fill: 4 },
];

export const BILLING = [
  { label: 'Mensuel, sans engagement', badge: '', rate: 0 },
  { label: 'Annuel, payé chaque mois', badge: '-7 %', rate: 0.07 },
];

export const MODULES = [
  {
    name: 'Tâches',
    desc: 'Kanban par espace et vue globale de vos tâches.',
    icon: 'M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5zm5.354-4.146 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0',
  },
  {
    name: 'Fichiers',
    desc: 'Un espace de fichiers pour chaque espace de travail.',
    icon: 'M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z',
  },
  {
    name: 'Agenda',
    desc: 'Calendrier personnel et partagé, invités, rappels.',
    icon: 'M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z',
  },
  {
    name: 'Synco AI',
    desc: 'Assistant IA, en local (WebGPU) ou dans le cloud.',
    icon: 'M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z',
  },
];

export const clampUsers = (v: number) => Math.max(1, Math.min(MAX_USERS, v));

/** Format monétaire du design : « 1 234,50 € » (entier sans décimales). */
export function eur(v: number): string {
  const r = Math.round(v * 100) / 100;
  const s = r % 1 === 0 ? String(r) : r.toFixed(2).replace('.', ',');
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' €';
}

export interface Estimate {
  paidUsers: number;
  activeModules: number;
  socle: number;
  modules: number;
  storage: number;
  subtotal: number;
  discount: number;
  total: number;
}

export function estimate(users: number, tier: number, modules: boolean[], billing: number): Estimate {
  const paidUsers = Math.max(0, users - FREE_MODULE_USERS);
  const activeModules = modules.filter(Boolean).length;
  const socle = users > 1 ? users * PRICE_PER_USER : 0;
  const modulesCost = paidUsers * activeModules * PRICE_PER_MODULE;
  const storage = STORAGE_TIERS[tier].price;
  const subtotal = socle + modulesCost + storage;
  const discount = subtotal * BILLING[billing].rate;
  return {
    paidUsers,
    activeModules,
    socle,
    modules: modulesCost,
    storage,
    subtotal,
    discount,
    total: subtotal - discount,
  };
}
