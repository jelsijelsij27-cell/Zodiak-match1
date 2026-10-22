import React, { useState } from 'react';
import { ZODIAC_SIGNS, calculateCompatibility } from '../data/zodiacData';
import { Grid, Sparkles, ArrowRight } from 'lucide-react';

interface CompatibilityMatrixProps {
  lang: 'id' | 'en';
  onSelectPair: (signAId: string, signBId: string) => void;
}

export const CompatibilityMatrix: React.FC<CompatibilityMatrixProps> = ({
  lang,
  onSelectPair
}) => {
  const [selectedSignId, setSelectedSignId] = useState<string>('aries');
  const baseSign = ZODIAC_SIGNS.find(s => s.id === selectedSignId) || ZODIAC_SIGNS[0];

  const getScoreColor = (score: number) => {
    if (score >= 88) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    if (score >= 76) return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    return 'bg-slate-800 text-slate-300 border-slate-700';
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-amber-400 tracking-wider uppercase">
          <Grid className="w-4 h-4 text-amber-400" />
          <span>{lang === 'id' ? 'Matriks Kompatibilitas Cinta' : 'Zodiac Love Matrix'}</span>
        </div>
        <h2 className="font-serif-celestial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
          {lang === 'id' ? 'Peta Kecocokan 12 Rasi Bintang' : '12-Sign Compatibility Compass'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
          {lang === 'id'
            ? 'Pilih satu zodiak untuk melihat tingkat kesesuaian cintanya dengan seluruh 11 zodiak lainnya secara instan.'
            : 'Select any sign to instantly observe its romantic synchronicity against all 11 other celestial signs.'}
        </p>
      </div>

      {/* Sign Selector Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
        {ZODIAC_SIGNS.map((s) => {
          const isActive = s.id === selectedSignId;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedSignId(s.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all border ${
                isActive
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className="text-sm">{s.unicodeSymbol}</span>
              <span>{lang === 'id' ? s.nameId : s.nameEn}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of 12 pairings for the selected sign */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{baseSign.unicodeSymbol}</span>
            <div>
              <div className="text-base font-bold text-slate-100 flex items-center gap-2">
                <span>{lang === 'id' ? baseSign.nameId : baseSign.nameEn}</span>
                <span className="text-xs text-amber-400 font-normal">({baseSign.element} · {baseSign.modality})</span>
              </div>
              <p className="text-xs text-slate-400">
                {lang === 'id' ? `Tingkat kecocokan ${baseSign.nameId} dengan seluruh zodiak:` : `${baseSign.nameEn}'s compatibility with all signs:`}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>&ge; 88% (Tinggi)</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span>76-87% (Harmonis)</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
              <span>&lt; 76% (Dinamis)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ZODIAC_SIGNS.map((otherSign) => {
            const comp = calculateCompatibility(baseSign, otherSign);
            const isSelf = baseSign.id === otherSign.id;
            return (
              <div
                key={otherSign.id}
                className="bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 rounded-lg p-4 flex flex-col justify-between gap-3 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl select-none">{otherSign.unicodeSymbol}</span>
                    <div>
                      <div className="text-sm font-bold text-slate-100">
                        {lang === 'id' ? otherSign.nameId : otherSign.nameEn}
                        {isSelf && <span className="ml-1 text-[11px] text-amber-400 font-normal">({lang === 'id' ? 'Sesama' : 'Same'})</span>}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {otherSign.element} · {lang === 'id' ? otherSign.dateRangeId : otherSign.dateRangeEn}
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded border text-xs font-mono font-bold tabular-nums ${getScoreColor(comp.overallScore)}`}>
                    {comp.overallScore}%
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {lang === 'id' ? comp.summaryId : comp.summaryEn}
                </p>

                <button
                  onClick={() => onSelectPair(baseSign.id, otherSign.id)}
                  className="w-full mt-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  <span>{lang === 'id' ? 'Buka Analisis Lengkap' : 'Open Full Analysis'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
