import { useEffect, useRef, useState, type FormEvent } from 'react';
import { contact } from '../data/site';
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon, CopyIcon, MailIcon } from '../components/icons';

// Page Contact : port du design « Contact · V10 (V9 propre) ».

const field =
  'box-border min-h-12 w-full rounded-none border border-line-strong bg-bg-deep px-3.5 py-3 text-[15px] text-fg outline-none placeholder:text-dim focus:border-accent focus:shadow-[0_0_0_1px_var(--color-accent)]';
const label = 'text-sm font-medium';
const ghostBtn =
  'inline-flex min-h-12 items-center gap-2.5 border border-line-strong bg-transparent px-5 text-sm font-medium text-fg hover:border-accent hover:text-accent';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (!contact.formEndpoint) {
      setSent(true);
      return;
    }
    const data = Object.fromEntries(new FormData(ev.currentTarget));
    setSending(true);
    setError(false);
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  // Étape en cours : 01 avant l'envoi, 02 une fois la demande envoyée.
  const active = sent ? 1 : 0;

  return (
    <div className="mx-auto box-border max-w-[1440px] px-6 pt-12 pb-20 sm:px-16 sm:pt-16 sm:pb-24">
      {/* En-tête + e-mail direct */}
      <section className="flex flex-wrap items-end gap-x-16 gap-y-12 border-b border-line pb-16">
        <div className="min-w-0 flex-[1_1_420px]">
          <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-accent uppercase">Contact</p>
          <h1 className="m-0 font-display text-[clamp(2.75rem,5vw+1rem,4rem)] leading-[1.02] font-bold tracking-[-0.03em]">
            Un projet ?<br />
            Parlons-en.
          </h1>
          <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-muted">
            Un devis, une question sur Synco ou un besoin particulier pour votre équipe : écrivez-nous directement
            par e-mail, ou passez par le formulaire ci-dessous.
          </p>
        </div>

        <EmailCard />
      </section>

      {/* Fonctionnement + formulaire */}
      <section className="mt-16 flex flex-wrap items-start gap-x-20 gap-y-12">
        <div className="min-w-0 max-w-[460px] flex-[1_1_340px]">
          <h2 className="mb-8 font-display text-[40px] font-bold tracking-[-0.03em]">Formulaire</h2>
          <ol className="m-0 list-none border-t border-line p-0">
            {contact.steps.map((title, i) => {
              const on = i === active;
              return (
                <li key={title} className="box-border flex min-h-24 gap-6 border-b border-line py-6">
                  <span className={`w-10 flex-none pt-[3px] font-mono text-sm ${on ? 'text-accent' : 'text-subtle'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`m-0 min-w-0 text-[17px] leading-[1.4] font-semibold ${on ? 'text-accent' : 'text-fg'}`}>
                    {title}
                  </h3>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="min-w-0 flex-[999_1_560px] border border-line-strong">
          {sent ? (
            <div
              role="status"
              className="box-border flex min-h-[440px] flex-col items-start justify-center gap-5 px-6 py-14 sm:px-10"
            >
              <span className="flex size-[52px] items-center justify-center border border-accent text-accent">
                <CheckIcon width={24} height={24} />
              </span>
              <h3 className="m-0 font-display text-[32px] font-bold tracking-[-0.02em]">Demande envoyée</h3>
              <p className="m-0 max-w-[480px] text-[15px] leading-relaxed text-muted">
                Nous analysons votre demande. Vous recevrez notre réponse par e-mail, à l’adresse indiquée dans le
                formulaire.
              </p>
              <button type="button" className={`${ghostBtn} mt-2`} onClick={() => setSent(false)}>
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-6 p-6 sm:p-10">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="c-name" className={label}>
                    Nom
                  </label>
                  <input id="c-name" name="name" className={field} type="text" autoComplete="name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="c-email" className={label}>
                    E-mail <span className="font-normal text-subtle">— pour vous répondre</span>
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    className={field}
                    type="email"
                    autoComplete="email"
                    placeholder="vous@organisation.fr"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-topic" className={label}>
                  Objet de votre demande
                </label>
                <select
                  id="c-topic"
                  name="topic"
                  className={`${field} appearance-none bg-[linear-gradient(45deg,transparent_50%,var(--color-muted)_50%),linear-gradient(135deg,var(--color-muted)_50%,transparent_50%)] bg-[size:5px_5px] bg-[position:calc(100%-20px)_21px,calc(100%-15px)_21px] bg-no-repeat pr-10`}
                >
                  {contact.topics.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-msg" className={label}>
                  Votre demande
                </label>
                <textarea
                  id="c-msg"
                  name="message"
                  className={`${field} min-h-[168px] resize-y leading-[1.55]`}
                  required
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-line pt-2">
                <p className="m-0 flex-[1_1_280px] pt-4 text-[13px] leading-relaxed text-subtle">
                  {error ? (
                    <span role="alert" className="text-fg">
                      L’envoi a échoué. Réessayez, ou écrivez-nous directement par e-mail.
                    </span>
                  ) : (
                    'La réponse vous sera envoyée à l’adresse e-mail indiquée ci-dessus.'
                  )}
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-4 inline-flex min-h-[52px] items-center gap-2.5 border-0 bg-accent px-7 text-[15px] font-semibold text-ink hover:bg-[#3fe5ad] disabled:opacity-60"
                >
                  Envoyer ma demande
                  <ArrowRightIcon width={18} height={18} strokeWidth={1.8} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function EmailCard() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  function copy() {
    navigator.clipboard?.writeText(contact.email).catch(() => {});
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  }

  const mailto = `mailto:${contact.email}`;

  return (
    <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5 border border-line-strong bg-bg-deep p-6 sm:p-8">
      <div className="flex items-center gap-3 text-sm text-muted">
        <MailIcon className="text-accent" />
        <span>Email</span>
      </div>
      <a href={mailto} className="font-display text-[34px] font-semibold tracking-[-0.02em] break-all">
        {contact.email}
      </a>
      <div className="flex flex-wrap gap-3">
        <button type="button" className={ghostBtn} onClick={copy}>
          {copied ? (
            <>
              <CheckIcon className="text-accent" />
              Adresse copiée
            </>
          ) : (
            <>
              <CopyIcon />
              Copier l’adresse
            </>
          )}
        </button>
        <a href={mailto} className={ghostBtn}>
          Ouvrir ma messagerie
          <ArrowUpRightIcon />
        </a>
      </div>
    </div>
  );
}
