import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon, CalendarIcon } from '../../components/icons';
import { links } from '../../data/site';
import { BILLING, PRICE_PER_USER, eur } from '../../lib/pricing';

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const teamPrice = eur(annual ? PRICE_PER_USER * (1 - BILLING[1].rate) : PRICE_PER_USER);

  const tab = (on: boolean) =>
    `flex min-h-[52px] items-center gap-2.5 border-0 border-b border-line bg-transparent px-4 text-left text-sm ${
      on ? 'font-semibold text-accent' : 'font-normal text-muted'
    }`;

  return (
    <section id="tarif" className="mx-auto box-border max-w-[1440px] scroll-mt-4 px-6 pt-16 pb-24 sm:px-16">
      <h2 className="m-0 mb-10 font-display text-5xl font-bold tracking-[-0.03em]">Tarif</h2>

      <div className="flex flex-wrap items-start gap-10">
        <div
          role="group"
          aria-label="Période de facturation"
          className="flex max-w-[360px] flex-[1_1_230px] flex-col border-t border-line"
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

        <div className="grid min-w-0 flex-[999_1_600px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
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
              <Link to="/configurateur" className={ctaClass}>
                Faire une estimation
              </Link>
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
              <Link to="/#contact" className={ctaClass}>
                Nous contacter
              </Link>
            }
          />
        </div>
      </div>
    </section>
  );
}

const ctaClass =
  'mt-auto flex min-h-12 items-center justify-center border border-line-strong text-sm font-medium';

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
    <article className="box-border flex min-h-[465px] flex-col border border-line-strong p-8">
      <h3 className="m-0 mb-6 font-display text-[22px] font-semibold text-accent">{name}</h3>
      <p className="m-0 mb-4 font-display text-[44px] leading-none font-semibold">{price}</p>
      <p className="m-0 mb-5 text-[13px] leading-[1.6] text-muted">{description}</p>
      <div className="mb-7">{children}</div>
      {cta}
    </article>
  );
}
