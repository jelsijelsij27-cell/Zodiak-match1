import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'id' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10 mt-20 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500/60" />
          <span className="font-serif-celestial font-semibold tracking-wider text-slate-300">
            ZODIAK MATCH
          </span>
          <span aria-hidden="true">·</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span>{lang === 'id' ? 'Dibuat untuk petualangan cinta di bawah rasi bintang' : 'Crafted for romance under the cosmic stars'}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500/80 inline" />
        </div>
      </div>
    </footer>
  );
};
