import { useId, useState } from 'react';
import { faqs } from '../../data/faq';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="mx-auto box-border flex max-w-[1440px] scroll-mt-4 flex-wrap gap-y-8 px-6 pt-12 pb-20 sm:px-16 sm:pt-16 sm:pb-[120px]"
    >
      <div className="max-w-[357px] flex-[1_1_293px]">
        <h2 className="m-0 font-display text-[40px] leading-none sm:text-5xl font-bold tracking-[-0.03em]">Questions</h2>
      </div>

      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-8 sm:gap-12">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          const panelId = `${baseId}-${i}`;
          return (
            <div key={item.q} className="flex flex-col gap-3.5">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className={`group flex min-h-11 items-center justify-between gap-6 border-0 bg-transparent p-0 text-left font-display text-lg font-medium text-fg transition-colors duration-150 hover:text-accent motion-reduce:transition-none ${open ? 'touch:text-accent' : ''}`}
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className={`w-6 text-center text-xl text-muted transition-colors duration-150 group-hover:text-accent motion-reduce:transition-none ${open ? 'touch:text-accent' : ''}`}
                >
                  {open ? '−' : '+'}
                </span>
              </button>
              {open && (
                <p id={panelId} className="m-0 max-w-[640px] text-sm leading-[1.7] text-muted">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
