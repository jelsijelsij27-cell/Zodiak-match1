import React from 'react';
import { Sparkles, Globe } from 'lucide-react';

interface HeaderProps {
  activeTab: 'calculator' | 'matrix' | 'directory' | 'guide';
  setActiveTab: (tab: 'calculator' | 'matrix' | 'directory' | 'guide') => void;
  lang: 'id' | 'en';
  setLang: (lang: 'id' | 'en') => void;
  onScrollToCalc: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onScrollToCalc
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line wordmark */}
        <div 
          onClick={() => { setActiveTab('calculator'); }} 
          className="flex items-center gap-2.5 cursor-pointer shrink-0 select-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400/60 transition-colors">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <span className="font-serif-celestial text-xl font-bold tracking-wider text-slate-100 whitespace-nowrap group-hover:text-amber-300 transition-colors">
            ZODIAK MATCH
          </span>
        </div>

        {/* Zone 2: 4 nav links, 1-2 word labels, single-line */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-100 ${
              activeTab === 'calculator' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : ''
            }`}
          >
            {lang === 'id' ? 'Kalkulator Cinta' : 'Match Calculator'}
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-100 ${
              activeTab === 'matrix' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : ''
            }`}
          >
            {lang === 'id' ? 'Matriks Kecocokan' : 'Love Matrix'}
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-100 ${
              activeTab === 'directory' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : ''
            }`}
          >
            {lang === 'id' ? 'Ensiklopedia 12 Zodiak' : 'Zodiac Signs'}
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-100 ${
              activeTab === 'guide' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : ''
            }`}
          >
            {lang === 'id' ? 'Panduan Elemen' : 'Elemental Guide'}
          </button>
        </nav>

        {/* Zone 3: 1 primary action area */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-750 hover:border-slate-600 rounded-md transition-colors whitespace-nowrap shrink-0"
            title="Ganti Bahasa / Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase font-semibold tracking-wider">{lang === 'id' ? 'ID' : 'EN'}</span>
          </button>

          <button
            onClick={onScrollToCalc}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-amber-500/20 active:scale-95"
          >
            {lang === 'id' ? 'Hitung Pasangan' : 'Check Match'}
          </button>
        </div>
      </div>
    </header>
  );
};
