import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { TranslationSet } from '../types';

interface FAQProps {
  t: TranslationSet;
}

export default function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-slate-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mb-6 block">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-light text-slate-900 mb-6 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-brand/30 shadow-md shadow-slate-200/50' 
                    : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-brand' : 'text-slate-400 group-hover:text-brand'
                    }`} />
                    <span className={`text-sm font-medium transition-colors ${
                      isOpen ? 'text-brand' : 'text-slate-700 group-hover:text-brand'
                    }`}>
                      {item.q}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? 'bg-brand text-white rotate-180' 
                      : 'bg-slate-50 text-slate-400 group-hover:text-brand'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="pl-11">
                      <div className="h-px bg-slate-100 mb-4" />
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}