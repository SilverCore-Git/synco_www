import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, CalendarIcon } from '../../components/icons';
import ContactLink from '../../components/ContactLink';
import { links } from '../../data/site';
import { BILLING, PRICE_PER_USER, PRICING_ENABLED, eur } from '../../lib/pricing';

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const teamPrice = eur(annual ? PRICE_PER_USER * (1 - BILLING[1].rate) : PRICE_PER_USER);

  const tab = (on: boolean) =>
    `flex min-h-[52px] items-center justify-center gap-2.5 border-0 bg-transparent px-4 text-sm xl:justify-start xl:border-b xl:border-line xl:text-left ${
      on ? 'bg-accent/10 font-semibold text-accent xl:bg-transparent' : 'font-normal text-muted'
    }`;

  return (
    <section id="tarif" className="mx-auto box-border max-w-[1440px] scroll-mt-[calc(var(--nav-offset)+16px)] px-6 pt-12 pb-16 sm:px-16 sm:pt-16 sm:pb-24">
      <h2 className="m-0 mb-8 font-display text-[40px] sm:mb-10 sm:text-5xl font-bold tracking-[-0.03em]">Tarif</h2>

      <div className="flex flex-wrap items-start gap-8 xl:gap-10">
        <div
          role="group"
          aria-label="Période de facturation"
          className="grid w-full max-w-[480px] grid-cols-2 border border-line xl:flex xl:w-auto xl:max-w-[360px] xl:flex-[1_1_230px] xl:flex-col xl:border-0 xl:border-t"
        >
          <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)} className={tab(!annual)}>
            <CalendarIcon />
            Mensuel
          </button>
          <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)} className={tab(annual)}>
            <BoltIcon />
            Annuel (-7 %)
          </button>
        </div>

        <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-3 xl:w-auto xl:flex-[999_1_600px]">
          <PlanCard
            name="Projetez-vous"
            price="0 €"
            description="Pour explorer l’application avant de la déployer."
            cta={<CtaLink href={links.signup}>Créer mon organisation</CtaLink>}
          >
            <ul className="m-0 flex list-none flex-col gap-3.5 border-t border-line-strong p-0 pt-5 text-[13px] text-white">
              <li>— 1 utilisateur</li>
              <li>— Accès à l’application</li>
              <li>— 0 Go de stockage</li>
            </ul>
          </PlanCard>

          <PlanCard
            name="Équipe"
            price={teamPrice}
            description={
              <>
                À partir de {teamPrice} par utilisateur*
                <br />
                Hors taxe
              </>
            }
            cta={
              PRICING_ENABLED ? (
                <Link to="/configurateur" className={ctaClass}>
                  Faire une estimation
                </Link>
              ) : (
                <UnavailableCta />
              )
            }
          >
            <p className="m-0 border-t border-line-strong pt-5 text-sm text-fg">
              La meilleure solution pour travailler en équipe.
            </p>
          </PlanCard>

          <PlanCard
            name="Dédié"
            price="Sur devis"
            description="Pour du sur-mesure et un accompagnement."
            cta={
              PRICING_ENABLED ? <ContactLink className={ctaClass}>Nous contacter</ContactLink> : <UnavailableCta />
            }
          />
        </div>
      </div>
    </section>
  );
}

const ctaClass =
  'mt-auto flex min-h-12 px-3 text-center items-center justify-center border border-line-strong text-sm font-medium';

/** Remplace le bouton d'une offre tant que PRICING_ENABLED est à false : pointillés, gris, non cliquable. */
function UnavailableCta() {
  return (
    <span
      aria-disabled="true"
      className="mt-auto flex min-h-12 cursor-not-allowed items-center justify-center border border-dashed border-line-strong px-3 text-center font-mono text-[13px] tracking-[0.02em] text-subtle"
    >
      Non disponible
    </span>
  );
}

function CtaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className={ctaClass}>
      {children}
    </a>
  );
}

function PlanCard({
  name,
  price,
  description,
  cta,
  children,
}: {
  name: string;
  price: string;
  description: ReactNode;
  cta: ReactNode;
  children?: ReactNode;
}) {
  return (
    <article className="box-border flex min-w-0 flex-col border border-line-strong p-6 sm:p-8 md:p-6 lg:min-h-[465px] lg:p-8">
      <h3 className="m-0 mb-6 font-display text-[22px] font-semibold text-accent">{name}</h3>
      <p className="m-0 mb-4 font-display text-[40px] leading-none font-semibold md:text-[28px] lg:text-[36px] xl:text-[44px]">{price}</p>
      <p className="m-0 mb-5 text-[13px] leading-[1.6] text-muted">{description}</p>
      <div className="mb-7">{children}</div>
      {cta}
    </article>
  );
}
