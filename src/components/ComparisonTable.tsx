import { Check, X, Shield, Star } from 'lucide-react';
import { TranslationSet } from '../types';

interface ComparisonTableProps {
  t: TranslationSet;
}

export default function ComparisonTable({ t }: ComparisonTableProps) {
  return (
    <section id="comparison" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mb-6 block">
            Comparatif
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-light text-slate-900 mb-6 tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <div className="min-w-[700px] bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-5 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {t.comparison.featureCol}
                    </span>
                  </th>
                  <th className="p-5 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Slack
                    </span>
                  </th>
                  <th className="p-5 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Teams
                    </span>
                  </th>
                  <th className="p-5 text-center bg-brand/5 relative">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-brand-dark" />
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-brand" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                        {t.comparison.sincoCol}
                      </span>
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
                    {/* Feature name */}
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        {row.highlight && <Star className="w-3.5 h-3.5 text-brand fill-brand flex-shrink-0" />}
                        <span className={`text-xs ${row.highlight ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                          {row.name}
                        </span>
                      </div>
                    </td>

                    {/* Slack */}
                    <td className="p-5 text-center">
                      {typeof row.slack === 'boolean' ? (
                        row.slack ? (
                          <div className="w-6 h-6 mx-auto rounded-full bg-brand/10 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-brand" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-slate-300" />
                          </div>
                        )
                      ) : (
                        <span className="text-[10px] text-slate-400">{row.slack}</span>
                      )}
                    </td>

                    {/* Teams */}
                    <td className="p-5 text-center">
                      {typeof row.teams === 'boolean' ? (
                        row.teams ? (
                          <div className="w-6 h-6 mx-auto rounded-full bg-brand/10 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-brand" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-slate-300" />
                          </div>
                        )
                      ) : (
                        <span className="text-[10px] text-slate-400">{row.teams}</span>
                      )}
                    </td>

                    {/* Sinco */}
                    <td className="p-5 text-center bg-brand/3">
                      {typeof row.sinco === 'boolean' ? (
                        row.sinco ? (
                          <div className="w-7 h-7 mx-auto rounded-full bg-brand flex items-center justify-center">
                            <Check className="w-4 h-4 text-white stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-slate-300" />
                          </div>
                        )
                      ) : (
                        <span className="text-xs font-semibold text-brand">{row.sinco}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-[10px] text-slate-400">
          * Comparatif basé sur les spécifications techniques publiques de chaque plateforme en date de mai 2026.
        </p>

      </div>
    </section>
  );
}