import React, { useState } from 'react';
import { ZODIAC_SIGNS, ZodiacSign, ElementType } from '../data/zodiacData';
import { BookOpen, Flame, Waves, Wind, Mountain, Heart, Shield, ArrowRight } from 'lucide-react';

interface ZodiacDirectoryProps {
  lang: 'id' | 'en';
  onSelectForMatch: (signId: string) => void;
}

export const ZodiacDirectory: React.FC<ZodiacDirectoryProps> = ({
  lang,
  onSelectForMatch
}) => {
  const [selectedElement, setSelectedElement] = useState<'All' | ElementType>('All');
  const [activeSignModal, setActiveSignModal] = useState<ZodiacSign | null>(null);

  const filteredSigns = selectedElement === 'All'
    ? ZODIAC_SIGNS
    : ZODIAC_SIGNS.filter(s => s.element === selectedElement);

  const getElementIcon = (element: ElementType) => {
    switch (element) {
      case 'Fire': return <Flame className="w-3.5 h-3.5 text-amber-500" />;
      case 'Water': return <Waves className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Air': return <Wind className="w-3.5 h-3.5 text-sky-400" />;
      case 'Earth': return <Mountain className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-amber-400 tracking-wider uppercase">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>{lang === 'id' ? 'Ensiklopedia Karakter & Asmara' : 'Zodiac Archetypes & Romance'}</span>
        </div>
        <h2 className="font-serif-celestial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
          {lang === 'id' ? 'Karakteristik 12 Rasi Bintang' : 'Directory of the 12 Celestial Signs'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
          {lang === 'id'
            ? 'Kenali sifat dasar, gaya mencintai, kelebihan, dan tantangan tiap zodiak sebelum membangun hubungan asmara.'
            : 'Explore core psychological traits, love styles, strengths, and soul desires for each zodiac archetype.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg max-w-md mx-auto">
        <button
          onClick={() => setSelectedElement('All')}
          className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
            selectedElement === 'All' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang === 'id' ? 'Semua (12)' : 'All (12)'}
        </button>
        <button
          onClick={() => setSelectedElement('Fire')}
          className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
            selectedElement === 'Fire' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang === 'id' ? 'Api' : 'Fire'}
        </button>
        <button
          onClick={() => setSelectedElement('Earth')}
          className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
            selectedElement === 'Earth' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang === 'id' ? 'Tanah' : 'Earth'}
        </button>
        <button
          onClick={() => setSelectedElement('Air')}
          className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
            selectedElement === 'Air' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang === 'id' ? 'Udara' : 'Air'}
        </button>
        <button
          onClick={() => setSelectedElement('Water')}
          className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ${
            selectedElement === 'Water' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang === 'id' ? 'Air' : 'Water'}
        </button>
      </div>

      {/* Signs Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSigns.map((sign) => (
          <div
            key={sign.id}
            className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl select-none">{sign.unicodeSymbol}</span>
                  <div>
                    <h3 className="font-serif-celestial text-lg font-bold text-slate-100">
                      {lang === 'id' ? sign.nameId : sign.nameEn}
                    </h3>
                    <div className="text-xs text-slate-400">
                      {lang === 'id' ? sign.dateRangeId : sign.dateRangeEn}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded border border-slate-750 bg-slate-800/80 text-slate-300 flex items-center gap-1">
                  {getElementIcon(sign.element)}
                  <span>{sign.element}</span>
                </span>
              </div>

              <p className="mt-3 text-xs text-slate-300 leading-relaxed line-clamp-3">
                {lang === 'id' ? sign.overviewId : sign.overviewEn}
              </p>

              {/* Love Style Snippet */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                <div className="text-[11px] font-semibold text-rose-400 flex items-center gap-1 uppercase tracking-wider">
                  <Heart className="w-3 h-3" />
                  <span>{lang === 'id' ? 'Gaya Mencintai' : 'Love Style'}</span>
                </div>
                <p className="text-xs text-slate-300 italic line-clamp-2">
                  &ldquo;{lang === 'id' ? sign.loveStyleId : sign.loveStyleEn}&rdquo;
                </p>
              </div>

              {/* Traits text */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(lang === 'id' ? sign.traitsId : sign.traitsEn).map((trait, i) => (
                  <span key={i} className="text-[11px] text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-750">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => setActiveSignModal(sign)}
                className="flex-1 py-1.5 px-3 rounded bg-slate-800 hover:bg-slate-750 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
              >
                {lang === 'id' ? 'Lihat Detail Lengkap' : 'View Full Profile'}
              </button>
              <button
                onClick={() => onSelectForMatch(sign.id)}
                title={lang === 'id' ? 'Gunakan untuk Hitung Kecocokan' : 'Use in Match Calculator'}
                className="py-1.5 px-3 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-xs font-semibold text-amber-300 transition-colors flex items-center gap-1"
              >
                <span>{lang === 'id' ? 'Cocokkan' : 'Match'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Detailed Drawer for Full Profile */}
      {activeSignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-xl w-full p-6 sm:p-8 space-y-5 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveSignModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 text-lg w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <span className="text-4xl">{activeSignModal.unicodeSymbol}</span>
              <div>
                <h3 className="font-serif-celestial text-2xl font-bold text-slate-100">
                  {lang === 'id' ? activeSignModal.nameId : activeSignModal.nameEn}
                </h3>
                <div className="text-xs text-slate-400">
                  {lang === 'id' ? activeSignModal.dateRangeId : activeSignModal.dateRangeEn} · {activeSignModal.element} · {activeSignModal.modality}
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {lang === 'id' ? activeSignModal.overviewId : activeSignModal.overviewEn}
            </p>

            <div className="space-y-2 p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Filosofi Asmara' : 'Romance Philosophy'}</span>
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                {lang === 'id' ? activeSignModal.loveStyleId : activeSignModal.loveStyleEn}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">
                  {lang === 'id' ? 'Kelebihan dalam Hubungan:' : 'Relationship Strengths:'}
                </span>
                <ul className="space-y-1 text-slate-300">
                  {(lang === 'id' ? activeSignModal.strengthsId : activeSignModal.strengthsEn).map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800">
                <span className="font-bold text-amber-400 block mb-1">
                  {lang === 'id' ? 'Tantangan Sikap:' : 'Vulnerabilities:'}
                </span>
                <ul className="space-y-1 text-slate-300">
                  {(lang === 'id' ? activeSignModal.weaknessesId : activeSignModal.weaknessesEn).map((w, idx) => (
                    <li key={idx}>• {w}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                <span className="font-semibold text-slate-300">{lang === 'id' ? 'Planet Penguasa: ' : 'Ruling Planet: '}</span>
                <span>{lang === 'id' ? activeSignModal.rulingPlanetId : activeSignModal.rulingPlanetEn}</span>
              </div>
              <button
                onClick={() => {
                  onSelectForMatch(activeSignModal.id);
                  setActiveSignModal(null);
                }}
                className="py-2 px-4 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
              >
                {lang === 'id' ? 'Pilih untuk Tes Pasangan' : 'Calculate Compatibility'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
