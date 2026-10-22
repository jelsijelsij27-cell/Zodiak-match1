/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { MatchCalculator } from './components/MatchCalculator';
import { CompatibilityMatrix } from './components/CompatibilityMatrix';
import { ZodiacDirectory } from './components/ZodiacDirectory';
import { CosmicGuide } from './components/CosmicGuide';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'matrix' | 'directory' | 'guide'>('calculator');
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [signAId, setSignAId] = useState<string>('aries');
  const [signBId, setSignBId] = useState<string>('libra');

  const handleSelectPair = (aId: string, bId: string) => {
    setSignAId(aId);
    setSignBId(bId);
    setActiveTab('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFromDirectory = (signId: string) => {
    setSignAId(signId);
    setActiveTab('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCalc = () => {
    setActiveTab('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        onScrollToCalc={handleScrollToCalc}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'calculator' && (
          <MatchCalculator
            lang={lang}
            signAId={signAId}
            setSignAId={setSignAId}
            signBId={signBId}
            setSignBId={setSignBId}
          />
        )}

        {activeTab === 'matrix' && (
          <CompatibilityMatrix
            lang={lang}
            onSelectPair={handleSelectPair}
          />
        )}

        {activeTab === 'directory' && (
          <ZodiacDirectory
            lang={lang}
            onSelectForMatch={handleSelectFromDirectory}
          />
        )}

        {activeTab === 'guide' && (
          <CosmicGuide lang={lang} />
        )}
      </main>

      <Footer lang={lang} />
    </div>
  );
}
