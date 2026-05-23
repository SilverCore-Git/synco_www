import { Check, X, Shield, Star } from 'lucide-react';
import { TranslationSet } from '../types';

interface ComparisonTableProps {
  t: TranslationSet;
}

export default function ComparisonTable({ t }: ComparisonTableProps) {
  return (
    <section id="comparison" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xxs font-bold text-brand uppercase tracking-widest bg-brand/10 px-3 py-1.5 rounded-full mb-4 inline-block">
            LE CHOIX COHÉRENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-900 mb-4">
            {t.comparison.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Desktop and Mobile-friendly comparison table layout */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200">
                <th className="p-5 font-display text-xs font-semibold uppercase tracking-wider text-slate-500 w-[35%]">
                  {t.comparison.featureCol}
                </th>
                <th className="p-5 font-display text-xs font-semibold uppercase tracking-wider text-slate-500 text-center w-[20%]">
                  {t.comparison.slackCol}
                </th>
                <th className="p-5 font-display text-xs font-semibold uppercase tracking-wider text-slate-500 text-center w-[20%]">
                  {t.comparison.teamsCol}
                </th>
                <th className="p-5 font-display text-xs font-semibold uppercase tracking-wider text-brand-dark bg-brand/5 text-center w-[25%] relative">
                  <div className="absolute top-0 inset-x-0 h-1 bg-brand" />
                  <div className="flex items-center justify-center gap-1.5 font-bold text-sm">
                    <Shield className="w-4 h-4 text-brand" />
                    <span>{t.comparison.sincoCol}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {t.comparison.rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-slate-50/50 transition-colors ${row.highlight ? 'bg-brand/2' : ''}`}
                >
                  {/* Feature description */}
                  <td className="p-5 align-middle">
                    <div className="flex items-center gap-2">
                      {row.highlight && <Star className="w-3.5 h-3.5 text-brand fill-brand" />}
                      <span className={`text-xs sm:text-sm font-medium ${row.highlight ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
                        {row.name}
                      </span>
                    </div>
                  </td>

                  {/* Slack status */}
                  <td className="p-5 text-center text-xs align-middle">
                    {typeof row.slack === 'boolean' ? (
                      row.slack ? (
                        <Check className="w-4.5 h-4.5 text-emerald-500 mx-auto" />
                      ) : (
                        <X className="w-4.5 h-4.5 text-slate-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-medium text-slate-500">{row.slack}</span>
                    )}
                  </td>

                  {/* Teams status */}
                  <td className="p-5 text-center text-xs align-middle">
                    {typeof row.teams === 'boolean' ? (
                      row.teams ? (
                        <Check className="w-4.5 h-4.5 text-emerald-500 mx-auto" />
                      ) : (
                        <X className="w-4.5 h-4.5 text-slate-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-medium text-slate-500">{row.teams}</span>
                    )}
                  </td>

                  {/* Sinco status (Always superior) */}
                  <td className="p-5 text-center text-xs bg-brand-bg/15 align-middle font-semibold text-slate-900">
                    {typeof row.sinco === 'boolean' ? (
                      row.sinco ? (
                        <div className="flex items-center justify-center text-brand-dark">
                          <Check className="w-5 h-5 stroke-[3]" />
                        </div>
                      ) : (
                        <X className="w-5 h-5 text-slate-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-brand-dark font-bold">{row.sinco}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center text-xxs text-slate-400">
          * Comparatif basé sur les spécifications techniques publiques de chaque plateforme en date de mai 2026.
        </div>

      </div>
    </section>
  );
}
