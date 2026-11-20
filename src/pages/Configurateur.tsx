import { useEffect, useRef, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';
import Header from '../components/Header';
import ContactLink from '../components/ContactLink';
import { ChevronDownIcon, MinusIcon, PathIcon, PlusIcon } from '../components/icons';
import { links } from '../data/site';
import {
  BILLING,
  FREE_MODULE_USERS,
  MODULES,
  PRICE_PER_MODULE,
  PRICE_PER_USER,
  STORAGE_TIERS,
  clampUsers,
  estimate,
  eur,
  type Estimate,
} from '../lib/pricing';

const PRESETS = [1, 5, 10, 25, 50, 100];
const MAX_SEATS_SHOWN = 60;
/** Vitesse de défilement de la colonne d'options (1 = vitesse normale du navigateur). */
const SCROLL_SPEED = 0.6;
/** À partir de cette largeur (lg), mise en page « ordinateur » : illustration + colonne d'options. */
const DESKTOP_QUERY = '(min-width: 1024px)';

const box = 'border border-line-strong';
const label = 'font-mono text-[11px]';

/** Étapes du questionnaire mobile (la dernière, le récapitulatif, n'est pas numérotée). */
const WIZARD_STEPS = [
  { kicker: 'Équipe', title: 'Combien de personnes ?' },
  { kicker: 'Stockage', title: 'Quel espace partagé ?' },
  { kicker: 'Modules', title: 'Quels modules activer ?' },
  { kicker: 'Facturation', title: 'Quel mode de facturation ?' },
];
const RECAP_STEP = WIZARD_STEPS.length;

interface Config {
  users: number;
  setUsers: Dispatch<SetStateAction<number>>;
  tier: number;
  setTier: Dispatch<SetStateAction<number>>;
  mods: boolean[];
  setMods: Dispatch<SetStateAction<boolean[]>>;
  billing: number;
  setBilling: Dispatch<SetStateAction<number>>;
  e: Estimate;
  totalNote: string;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

export default function Configurateur() {
  const [users, setUsers] = useState(8);
  const [tier, setTier] = useState(2);
  const [mods, setMods] = useState([true, true, true, false]);
  const [billing, setBilling] = useState(0);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  const e = estimate(users, tier, mods, billing);
  let totalNote = billing === 1 ? 'HT / mois, engagement 12 mois.' : 'HT / mois, sans engagement.';
  if (users === 1 && e.subtotal === 0) totalNote = 'Offre Découverte : 1 utilisateur, sans stockage.';

  const config: Config = { users, setUsers, tier, setTier, mods, setMods, billing, setBilling, e, totalNote };

  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg lg:h-screen lg:overflow-hidden">
      <Header />
      {isDesktop ? <DesktopLayout {...config} /> : <MobileWizard {...config} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ordinateur : illustration (3/4) + colonne d'options qui défile (1/4) */
/* ------------------------------------------------------------------ */

function DesktopLayout(c: Config) {
  const [billingOpen, setBillingOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const asideRef = useRef<HTMLElement>(null);

  // Seule la colonne d'options défile. La molette, qu'elle soit au-dessus de l'illustration
  // (gauche) ou des options (droite), fait défiler les options, ralenties.
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const onWheel = (ev: globalThis.WheelEvent) => {
      const aside = asideRef.current;
      if (!aside || aside.scrollHeight <= aside.clientHeight) return;
      if (ev.ctrlKey || Math.abs(ev.deltaX) > Math.abs(ev.deltaY)) return; // zoom / défilement horizontal
      ev.preventDefault();
      const unit = ev.deltaMode === 1 ? 16 : ev.deltaMode === 2 ? aside.clientHeight : 1;
      aside.scrollTop += ev.deltaY * unit * SCROLL_SPEED;
    };
    // passive: false pour pouvoir remplacer le défilement natif.
    main.addEventListener('wheel', onWheel, { passive: false });
    return () => main.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <main ref={mainRef} className="mx-auto flex min-h-0 w-full max-w-[1440px] flex-auto flex-row">
      {/* Illustration (3/4). Écran peu haut : marges réduites pour ne rien couper. */}
      <div className="box-border flex min-w-0 flex-[3_1_0] flex-col justify-center overflow-hidden p-16 short:p-8">
        <Illustration users={c.users} tier={c.tier} mods={c.mods} />
      </div>

      {/* Options (1/4) */}
      <aside
        ref={asideRef}
        aria-label="Options"
        className="box-border flex min-w-[320px] flex-[1_0_0] flex-col overflow-y-auto border-l border-line px-8 pt-12 pb-16"
      >
        <Step n="01" kicker="Équipe" title="Combien de personnes ?" first>
          <TeamOptions {...c} />
        </Step>
        <Step n="02" kicker="Stockage" title="Quel espace partagé ?">
          <StorageOptions {...c} />
        </Step>
        <Step n="03" kicker="Modules" title="Quels modules activer ?">
          <ModuleOptions {...c} />
        </Step>

        {/* Récapitulatif */}
        <section aria-label="Récapitulatif" className="flex flex-col gap-4 pt-10">
          <div className="relative flex flex-col gap-2">
            <span className="text-[13px] text-muted" id="billing-label">
              Facturation
            </span>
            <button
              type="button"
              aria-expanded={billingOpen}
              aria-haspopup="listbox"
              aria-labelledby="billing-label"
              onClick={() => setBillingOpen((v) => !v)}
              className="flex min-h-[52px] items-center justify-between gap-3 border border-accent bg-transparent px-4 text-left text-sm font-semibold text-accent"
            >
              <span>{BILLING[c.billing].label}</span>
              <span className="flex items-center gap-3">
                {BILLING[c.billing].badge}
                <ChevronDownIcon className={`transition-transform ${billingOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>
            {billingOpen && (
              <div role="listbox" aria-label="Facturation" className={`flex flex-col ${box}`}>
                {BILLING.map((b, i) =>
                  i === c.billing ? null : (
                    <button
                      key={b.label}
                      type="button"
                      role="option"
                      aria-selected={false}
                      onClick={() => {
                        c.setBilling(i);
                        setBillingOpen(false);
                      }}
                      className="flex min-h-12 items-center justify-between gap-3 border-0 border-b border-line bg-transparent px-4 text-left text-sm text-fg-soft last:border-b-0"
                    >
                      <span>{b.label}</span>
                      <span className="text-accent">{b.badge}</span>
                    </button>
                  ),
                )}
              </div>
            )}
          </div>

          <Summary {...c} />
        </section>
      </aside>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile et tablette : questionnaire, une question par écran          */
/* ------------------------------------------------------------------ */

function MobileWizard(c: Config) {
  const [step, setStep] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  // À chaque changement d'étape : retour en haut, focus sur le titre (lecteurs d'écran).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    titleRef.current?.focus({ preventScroll: true });
  }, [step]);

  const isRecap = step === RECAP_STEP;
  const current = WIZARD_STEPS[step];

  return (
    <main
      aria-label="Configurateur"
      // Chaque étape occupe la hauteur de l'écran moins l'en-tête (74 px + 1 px de bordure).
      // dvh suit l'apparition de la barre du navigateur mobile : « Suivant » reste visible.
      className="mx-auto box-border flex min-h-[calc(100dvh-75px)] w-full max-w-[640px] flex-col px-6 pt-6 pb-[max(24px,env(safe-area-inset-bottom))] sm:px-8"
    >
      <div className="flex min-h-11 items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="-ml-1 flex min-h-11 items-center gap-1.5 border-0 bg-transparent px-1 text-sm text-fg"
          >
            <span aria-hidden="true">←</span> Retour
          </button>
        ) : (
          <span />
        )}
        <span className={`${label} text-accent`}>
          {isRecap ? 'Récapitulatif' : `Étape ${step + 1} / ${WIZARD_STEPS.length} — ${current.kicker}`}
        </span>
      </div>

      <div
        role="progressbar"
        aria-label="Progression"
        aria-valuemin={1}
        aria-valuemax={WIZARD_STEPS.length}
        aria-valuenow={Math.min(step + 1, WIZARD_STEPS.length)}
        className="mt-3 grid grid-cols-4 gap-1"
      >
        {WIZARD_STEPS.map((s, i) => (
          <span key={s.kicker} className={`block h-[3px] ${i <= step ? 'bg-accent' : 'bg-line-strong'}`} />
        ))}
      </div>

      {isRecap ? (
        <section aria-labelledby="recap-title" className="flex flex-col gap-6 pt-8">
          <h2
            id="recap-title"
            ref={titleRef}
            tabIndex={-1}
            className="m-0 font-display text-[26px] leading-[1.2] font-semibold outline-none"
          >
            Votre estimation
          </h2>
          <Illustration users={c.users} tier={c.tier} mods={c.mods} compact />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-muted">
            <span>Modifier :</span>
            {WIZARD_STEPS.map((s, i) => (
              <button
                key={s.kicker}
                type="button"
                onClick={() => setStep(i)}
                className="min-h-9 border-0 bg-transparent p-0 text-accent underline-offset-4 hover:underline"
              >
                {s.kicker}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <Summary {...c} showBilling />
          </div>
        </section>
      ) : (
        <>
          <section aria-labelledby="step-title" className="flex flex-col gap-4 pt-8">
            <h2
              id="step-title"
              ref={titleRef}
              tabIndex={-1}
              className="m-0 font-display text-[26px] leading-[1.2] font-semibold outline-none"
            >
              {current.title}
            </h2>
            {step === 0 && <TeamOptions {...c} />}
            {step === 1 && <StorageOptions {...c} />}
            {step === 2 && <ModuleOptions {...c} />}
            {step === 3 && <BillingOptions {...c} />}
          </section>

          {/* « Suivant » seul sur sa rangée, poussé en bas de l'étape (dans la page, pas fixé à l'écran). */}
          <div className="flex-1" />
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="mt-10 flex min-h-[56px] w-full items-center justify-center gap-2 border-0 bg-accent font-display text-lg font-semibold text-ink hover:brightness-110"
          >
            {step === RECAP_STEP - 1 ? 'Voir le récapitulatif' : 'Suivant'} <span aria-hidden="true">→</span>
          </button>
        </>
      )}
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Blocs partagés                                                       */
/* ------------------------------------------------------------------ */

function Illustration({ users, tier, mods, compact }: { users: number; tier: number; mods: boolean[]; compact?: boolean }) {
  const storageTier = STORAGE_TIERS[tier];
  const pad = compact ? 'p-5' : 'p-8 short:p-6';
  const gap = compact ? 'gap-4' : 'gap-6 short:gap-4';

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${box}`}>
      <section aria-label="Aperçu de l’équipe" className={`flex flex-col ${gap} border-b border-line-strong ${pad} sm:col-span-2`}>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <span className={`${label} text-subtle`}>Fig. 1 — Équipe</span>
          <span className="text-[13px] text-muted">
            <span className="mr-2 inline-block h-2.5 w-2.5 bg-accent" />
            Modules offerts
            <span className="mr-2 ml-5 inline-block box-border h-2.5 w-2.5 border border-dim" />
            Modules facturés
          </span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className={`font-display leading-none font-semibold ${compact ? 'text-[56px]' : 'text-[72px] short:text-[56px]'}`}>
            {users}
          </span>
          <span className="text-base text-muted">{users > 1 ? 'utilisateurs' : 'utilisateur'}</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: Math.min(users, MAX_SEATS_SHOWN) }, (_, i) => (
            <span
              key={i}
              className={`block box-border ${compact ? 'h-[18px] w-[18px]' : 'h-[22px] w-[22px]'} ${i < FREE_MODULE_USERS ? 'bg-accent' : 'border border-dim'}`}
            />
          ))}
          {users > MAX_SEATS_SHOWN && (
            <span className="ml-2 font-mono text-xs text-muted">+{users - MAX_SEATS_SHOWN}</span>
          )}
        </div>
      </section>

      <section aria-label="Aperçu du stockage" className={`flex flex-col ${gap} border-b border-line-strong ${pad} sm:border-r sm:border-b-0`}>
        <span className={`${label} text-subtle`}>Fig. 2 — Stockage partagé</span>
        <span className={`font-display leading-none font-semibold ${compact ? 'text-[44px]' : 'text-[56px] short:text-[44px]'}`}>
          {storageTier.size}
        </span>
        <div aria-hidden="true" className="grid grid-cols-4 gap-1">
          {[1, 2, 3, 4].map((k) => (
            <span
              key={k}
              className={`block self-end transition-colors ${storageTier.fill >= k ? 'bg-accent' : 'bg-[#2a2a30]'}`}
              style={{ height: (compact ? 10 : 16) + k * (compact ? 10 : 14) }}
            />
          ))}
        </div>
      </section>

      <section aria-label="Aperçu des modules" className={`flex flex-col ${gap} ${pad}`}>
        <span className={`${label} text-subtle`}>Fig. 3 — Modules</span>
        <div className="grid grid-cols-2 gap-3">
          {MODULES.map((m, i) => (
            <div
              key={m.name}
              className={`box-border flex flex-col border transition-colors ${
                compact ? 'min-h-[88px] gap-3 p-4' : 'min-h-[120px] gap-4 p-5 short:min-h-[92px] short:gap-3 short:p-4'
              } ${mods[i] ? 'border-accent bg-accent/8 text-accent' : 'border-[#2f2f35] text-[#5c5c64]'}`}
            >
              <PathIcon d={m.icon} size={compact ? 24 : 28} />
              <span className="font-display text-lg font-semibold">{m.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TeamOptions({ users, setUsers }: Config) {
  return (
    <>
      <div className={`flex items-stretch ${box}`}>
        <button
          type="button"
          aria-label="Retirer un utilisateur"
          onClick={() => setUsers((u) => clampUsers(u - 1))}
          className="flex min-h-[52px] w-[52px] items-center justify-center border-0 border-r border-line-strong bg-transparent text-fg"
        >
          <MinusIcon />
        </button>
        <label className="flex flex-1 items-center justify-center gap-2">
          <span className="sr-only">Nombre d’utilisateurs</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={1000}
            value={users}
            onChange={(ev) => {
              const v = parseInt(ev.target.value, 10);
              if (!Number.isNaN(v)) setUsers(clampUsers(v));
            }}
            className="w-[72px] border-0 bg-transparent p-0 text-right font-display text-2xl font-semibold text-fg"
          />
          <span className="text-sm text-muted">utilisateurs</span>
        </label>
        <button
          type="button"
          aria-label="Ajouter un utilisateur"
          onClick={() => setUsers((u) => clampUsers(u + 1))}
          className="flex min-h-[52px] w-[52px] items-center justify-center border-0 border-l border-line-strong bg-transparent text-fg"
        >
          <PlusIcon />
        </button>
      </div>
      <div role="group" aria-label="Tailles courantes" className="flex flex-wrap gap-2">
        {PRESETS.map((v) => {
          const on = users === v;
          return (
            <button
              key={v}
              type="button"
              aria-pressed={on}
              onClick={() => setUsers(v)}
              className={`min-h-10 min-w-[52px] border px-3.5 ${
                on ? 'border-accent bg-accent/12 text-accent' : 'border-line-strong bg-transparent text-fg-soft'
              }`}
            >
              {v}
            </button>
          );
        })}
      </div>
      <Hint>
        {PRICE_PER_USER} € HT par utilisateur et par mois. Les modules sont offerts pour les{' '}
        {FREE_MODULE_USERS} premiers utilisateurs, à vie.
      </Hint>
    </>
  );
}

function StorageOptions({ tier, setTier }: Config) {
  return (
    <>
      <div role="radiogroup" aria-label="Palier de stockage" className="flex flex-col gap-2">
        {STORAGE_TIERS.map((t, i) => (
          <Choice key={t.label} on={tier === i} onClick={() => setTier(i)}>
            <span className="font-medium">{t.label}</span>
            <span className="text-[13px] text-muted">{t.price ? `${t.price} € / mois` : 'Inclus'}</span>
          </Choice>
        ))}
      </div>
      <Hint>
        Au-delà de 2 To, ou pour un serveur dédié :{' '}
        <ContactLink className="text-accent">sur devis</ContactLink>
        .
      </Hint>
    </>
  );
}

function ModuleOptions({ mods, setMods }: Config) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {MODULES.map((m, i) => {
          const on = mods[i];
          return (
            <button
              key={m.name}
              type="button"
              aria-pressed={on}
              onClick={() => setMods((prev) => prev.map((x, j) => (j === i ? !x : x)))}
              className={`flex items-start gap-3.5 border bg-transparent p-4 text-[15px] ${
                on ? 'border-accent text-accent shadow-[inset_0_0_0_1px_var(--color-accent)]' : 'border-line-strong text-muted'
              }`}
            >
              <PathIcon d={m.icon} className="mt-0.5 shrink-0" />
              <span className="flex flex-1 flex-col gap-1 text-left">
                <span className="font-medium text-fg">{m.name}</span>
                <span className="text-xs leading-normal text-muted">{m.desc}</span>
              </span>
              <span
                aria-hidden="true"
                className={`box-border flex h-[22px] w-[22px] shrink-0 items-center justify-center text-[13px] ${
                  on ? 'bg-accent text-ink' : 'border border-dim'
                }`}
              >
                {on ? '✓' : ''}
              </span>
            </button>
          );
        })}
      </div>
      <Hint>
        {eur(PRICE_PER_MODULE)} HT par module et par utilisateur au-delà du {FREE_MODULE_USERS}ᵉ. Activables et
        désactivables à tout moment.
      </Hint>
    </>
  );
}

/** Étape « Facturation » du questionnaire mobile (sur ordinateur, c'est un menu déroulant). */
function BillingOptions({ billing, setBilling }: Config) {
  return (
    <div role="radiogroup" aria-label="Facturation" className="flex flex-col gap-2">
      {BILLING.map((b, i) => (
        <Choice key={b.label} on={billing === i} onClick={() => setBilling(i)}>
          <span className="font-medium">{b.label}</span>
          {b.badge && <span className="text-[13px] text-accent">{b.badge}</span>}
        </Choice>
      ))}
    </div>
  );
}

/** Détail du prix, total et boutons d'action. */
function Summary({ users, billing, e, tier, totalNote, showBilling }: Config & { showBilling?: boolean }) {
  const storageTier = STORAGE_TIERS[tier];
  return (
    <>
      <dl className="mt-2 mb-0 flex flex-col gap-2.5 text-[13px]">
        <Line
          term={users > 1 ? `Socle · ${users} × ${PRICE_PER_USER} €` : 'Socle · 1 utilisateur'}
          value={eur(e.socle)}
        />
        <Line
          term={`Modules · ${e.paidUsers} × ${e.activeModules} × ${eur(PRICE_PER_MODULE)}`}
          value={eur(e.modules)}
        />
        <Line term={`Stockage · ${storageTier.label}`} value={eur(e.storage)} />
        {BILLING[billing].rate > 0 && (
          <Line term={`Remise engagement ${BILLING[billing].badge}`} value={`−${eur(e.discount)}`} accent />
        )}
        {showBilling && <Line term="Facturation" value={BILLING[billing].label} />}
      </dl>

      <div className="flex flex-col gap-1.5 border-t border-line pt-4" aria-live="polite">
        <span className="text-[13px] text-muted">Total estimé</span>
        <span className="font-display text-[44px] leading-none font-semibold">{eur(e.total)}</span>
        <span className="text-[13px] text-muted">{totalNote}</span>
      </div>

      <a
        href={links.signup}
        className="mt-2 flex min-h-[52px] items-center justify-center bg-accent font-display text-lg font-semibold text-ink hover:text-ink hover:brightness-110"
      >
        Créer mon organisation
      </a>
      <ContactLink className="flex min-h-12 items-center justify-center border border-line-strong text-sm font-medium">
        Nous contacter
      </ContactLink>
    </>
  );
}

function Choice({ on, onClick, children }: { on: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={on}
      onClick={onClick}
      className={`flex min-h-[52px] items-center justify-between gap-3 border bg-transparent px-4 text-left text-[15px] text-fg ${
        on ? 'border-accent shadow-[inset_0_0_0_1px_var(--color-accent)]' : 'border-line-strong'
      }`}
    >
      {children}
    </button>
  );
}

function Step({
  n,
  kicker,
  title,
  first,
  children,
}: {
  n: string;
  kicker: string;
  title: string;
  first?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`flex flex-col gap-4 border-b border-line ${first ? 'pb-10' : 'py-10'}`}>
      <span className="font-mono text-[11px] text-accent">
        {n} — {kicker}
      </span>
      <h2 className="m-0 font-display text-[26px] leading-[1.2] font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Hint({ children }: { children: ReactNode }) {
  return <p className="m-0 text-[13px] leading-[1.6] text-muted">{children}</p>;
}

function Line({ term, value, accent }: { term: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted">{term}</dt>
      <dd className={`m-0 text-right ${accent ? 'text-accent' : ''}`}>{value}</dd>
    </div>
  );
}
