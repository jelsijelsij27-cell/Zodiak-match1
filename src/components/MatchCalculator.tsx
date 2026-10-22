import React, { useState, useId } from 'react';
import { 
  ZODIAC_SIGNS, 
  ZodiacSign, 
  calculateCompatibility, 
  getZodiacByDate,
  CompatibilityAnalysis 
} from '../data/zodiacData';
import { 
  Heart, 
  ArrowLeftRight, 
  Sparkles, 
  Share2, 
  Check, 
  Calendar, 
  Flame, 
  Waves, 
  Wind, 
  Mountain,
  Shuffle,
  ShieldCheck,
  AlertCircle,
  Lightbulb
} from 'lucide-react';

interface MatchCalculatorProps {
  lang: 'id' | 'en';
  signAId: string;
  setSignAId: (id: string) => void;
  signBId: string;
  setSignBId: (id: string) => void;
}

export const MatchCalculator: React.FC<MatchCalculatorProps> = ({
  lang,
  signAId,
  setSignAId,
  signBId,
  setSignBId
}) => {
  const [nameA, setNameA] = useState('');
  const [nameB, setNameB] = useState('');
  const [useBirthdayA, setUseBirthdayA] = useState(false);
  const [useBirthdayB, setUseBirthdayB] = useState(false);
  const [birthDateA, setBirthDateA] = useState('');
  const [birthDateB, setBirthDateB] = useState('');
  const [copied, setCopied] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const signAInputId = useId();
  const signBInputId = useId();

  const signA = ZODIAC_SIGNS.find(s => s.id === signAId) || ZODIAC_SIGNS[0];
  const signB = ZODIAC_SIGNS.find(s => s.id === signBId) || ZODIAC_SIGNS[6];

  const result: CompatibilityAnalysis = calculateCompatibility(signA, signB);

  const handleDateChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setBirthDateA(val);
    if (val) {
      const parts = val.split('-');
      if (parts.length === 3) {
        const month = parseInt(parts[1], 10);
        const day = parseInt(parts[2], 10);
        const found = getZodiacByDate(month, day);
        setSignAId(found.id);
      }
    }
  };

  const handleDateChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setBirthDateB(val);
    if (val) {
      const parts = val.split('-');
      if (parts.length === 3) {
        const month = parseInt(parts[1], 10);
        const day = parseInt(parts[2], 10);
        const found = getZodiacByDate(month, day);
        setSignBId(found.id);
      }
    }
  };

  const handleSwap = () => {
    const tempSign = signAId;
    setSignAId(signBId);
    setSignBId(tempSign);

    const tempName = nameA;
    setNameA(nameB);
    setNameB(tempName);

    const tempDate = birthDateA;
    setBirthDateA(birthDateB);
    setBirthDateB(tempDate);
  };

  const handleRandomize = () => {
    setIsCalculating(true);
    const randA = Math.floor(Math.random() * ZODIAC_SIGNS.length);
    let randB = Math.floor(Math.random() * ZODIAC_SIGNS.length);
    if (randA === randB) {
      randB = (randB + 1) % ZODIAC_SIGNS.length;
    }
    setSignAId(ZODIAC_SIGNS[randA].id);
    setSignBId(ZODIAC_SIGNS[randB].id);
    setTimeout(() => setIsCalculating(false), 250);
  };

  const handleCopyShare = async () => {
    const partner1Label = nameA.trim() ? `${nameA} (${signA.nameId})` : signA.nameId;
    const partner2Label = nameB.trim() ? `${nameB} (${signB.nameId})` : signB.nameId;
    const text = lang === 'id'
      ? `✨ Hasil Kecocokan Zodiak Match:
💑 ${partner1Label} + ${partner2Label}
⭐ Skor Kecocokan: ${result.overallScore}% (${result.dynamicTagId})
💖 Asmara & Gairah: ${result.loveScore}%
🗣️ Komunikasi: ${result.communicationScore}%
🌊 Kedalaman Emosional: ${result.emotionalScore}%
🧭 Nilai Hidup & Masa Depan: ${result.valuesScore}%

✨ Nasihat:
"${result.adviceId}"

Hitung kecocokanmu di Zodiak Match!`
      : `✨ Zodiac Match Compatibility Result:
💑 ${partner1Label} + ${partner2Label}
⭐ Compatibility Score: ${result.overallScore}% (${result.dynamicTagEn})
💖 Love & Romance: ${result.loveScore}%
🗣️ Communication: ${result.communicationScore}%
🌊 Emotional Bond: ${result.emotionalScore}%
🧭 Long-Term Values: ${result.valuesScore}%

✨ Advice:
"${result.adviceEn}"

Check your compatibility on Zodiac Match!`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Fire':
        return <Flame className="w-3.5 h-3.5 text-amber-500" />;
      case 'Water':
        return <Waves className="w-3.5 h-3.5 text-cyan-400" />;
      case 'Air':
        return <Wind className="w-3.5 h-3.5 text-sky-400" />;
      case 'Earth':
        return <Mountain className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return null;
    }
  };

  const getElementColorClass = (element: string) => {
    switch (element) {
      case 'Fire':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'Water':
        return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
      case 'Air':
        return 'text-sky-300 border-sky-500/30 bg-sky-500/10';
      case 'Earth':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      default:
        return 'text-slate-300 border-slate-700 bg-slate-800/40';
    }
  };

  return (
    <div id="calculator-section" className="space-y-10">
      {/* Hero Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-amber-400 tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{lang === 'id' ? 'Kalkulator Astrologi & Cinta' : 'Astrology & Love Compatibility'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'id' ? '12 Rasi Bintang' : '12 Zodiac Signs'}</span>
        </div>
        <h1 className="font-serif-celestial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 text-balance">
          {lang === 'id' 
            ? 'Temukan Seberapa Cocok Jiwa Kalian Menurut Bintang' 
            : 'Discover How Aligned Your Souls Are Under The Stars'}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {lang === 'id'
            ? 'Analisis mendalam kecocokan asmara, kedalaman emosional, komunikasi, dan sinergi elemen berdasarkan astrologi klasik.'
            : 'Deep astrological synthesis analyzing elemental synergy, romantic chemistry, emotional resonance, and shared longevity.'}
        </p>
      </div>

      {/* Main Interactive Selector Grid */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          {/* Partner 1 Selection */}
          <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                {lang === 'id' ? 'Pasangan 1' : 'Partner 1'}
              </span>
              <button
                type="button"
                onClick={() => setUseBirthdayA(!useBirthdayA)}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{useBirthdayA ? (lang === 'id' ? 'Pilih Zodiak' : 'Select Sign') : (lang === 'id' ? 'Gunakan Tanggal Lahir' : 'Use Birthdate')}</span>
              </button>
            </div>

            {/* Optional Name */}
            <div>
              <label htmlFor={`${signAInputId}-name`} className="block text-xs font-medium text-slate-400 mb-1">
                {lang === 'id' ? 'Nama (Opsional)' : 'Name (Optional)'}
              </label>
              <input
                id={`${signAInputId}-name`}
                type="text"
                value={nameA}
                onChange={(e) => setNameA(e.target.value)}
                placeholder={lang === 'id' ? 'Contoh: Alex' : 'e.g. Alex'}
                className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500/60 transition-colors"
              />
            </div>

            {/* Sign selection OR birthdate */}
            {useBirthdayA ? (
              <div>
                <label htmlFor={`${signAInputId}-birthdate`} className="block text-xs font-medium text-slate-400 mb-1">
                  {lang === 'id' ? 'Tanggal Lahir' : 'Date of Birth'}
                </label>
                <input
                  id={`${signAInputId}-birthdate`}
                  type="date"
                  value={birthDateA}
                  onChange={handleDateChangeA}
                  className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>
            ) : (
              <div>
                <label htmlFor={`${signAInputId}-select`} className="block text-xs font-medium text-slate-400 mb-1">
                  {lang === 'id' ? 'Pilih Zodiak' : 'Zodiac Sign'}
                </label>
                <select
                  id={`${signAInputId}-select`}
                  value={signAId}
                  onChange={(e) => setSignAId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2.5 text-sm font-medium text-slate-100 focus:outline-none focus:border-amber-500/60 transition-colors"
                >
                  {ZODIAC_SIGNS.map((s) => (
                    <option key={s.id} value={s.id} className="bg-slate-900 text-slate-100">
                      {s.unicodeSymbol} {lang === 'id' ? s.nameId : s.nameEn} ({lang === 'id' ? s.dateRangeId : s.dateRangeEn})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Active Sign Visual Badge */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-850">
              <div className="text-3xl select-none">{signA.unicodeSymbol}</div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span>{lang === 'id' ? signA.nameId : signA.nameEn}</span>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded border flex items-center gap-1 ${getElementColorClass(signA.element)}`}>
                    {getElementIcon(signA.element)}
                    <span>{signA.element}</span>
                  </span>
                </div>
                <div className="text-xs text-slate-500 truncate">
                  {lang === 'id' ? signA.dateRangeId : signA.dateRangeEn} · {lang === 'id' ? `Planet: ${signA.rulingPlanetId}` : `Ruler: ${signA.rulingPlanetEn}`}
                </div>
              </div>
            </div>
          </div>

          {/* Swap / Center Action Zone */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col items-center justify-center gap-3 py-2">
            <button
              onClick={handleSwap}
              title={lang === 'id' ? 'Tukar Pasangan' : 'Swap Partners'}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors shadow-md active:scale-95"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleRandomize}
              title={lang === 'id' ? 'Pasangan Acak' : 'Random Match'}
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors shadow-md active:scale-95"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>

          {/* Partner 2 Selection */}
          <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
                {lang === 'id' ? 'Pasangan 2' : 'Partner 2'}
              </span>
              <button
                type="button"
                onClick={() => setUseBirthdayB(!useBirthdayB)}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{useBirthdayB ? (lang === 'id' ? 'Pilih Zodiak' : 'Select Sign') : (lang === 'id' ? 'Gunakan Tanggal Lahir' : 'Use Birthdate')}</span>
              </button>
            </div>

            {/* Optional Name */}
            <div>
              <label htmlFor={`${signBInputId}-name`} className="block text-xs font-medium text-slate-400 mb-1">
                {lang === 'id' ? 'Nama (Opsional)' : 'Name (Optional)'}
              </label>
              <input
                id={`${signBInputId}-name`}
                type="text"
                value={nameB}
                onChange={(e) => setNameB(e.target.value)}
                placeholder={lang === 'id' ? 'Contoh: Taylor' : 'e.g. Taylor'}
                className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
              />
            </div>

            {/* Sign selection OR birthdate */}
            {useBirthdayB ? (
              <div>
                <label htmlFor={`${signBInputId}-birthdate`} className="block text-xs font-medium text-slate-400 mb-1">
                  {lang === 'id' ? 'Tanggal Lahir' : 'Date of Birth'}
                </label>
                <input
                  id={`${signBInputId}-birthdate`}
                  type="date"
                  value={birthDateB}
                  onChange={handleDateChangeB}
                  className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>
            ) : (
              <div>
                <label htmlFor={`${signBInputId}-select`} className="block text-xs font-medium text-slate-400 mb-1">
                  {lang === 'id' ? 'Pilih Zodiak' : 'Zodiac Sign'}
                </label>
                <select
                  id={`${signBInputId}-select`}
                  value={signBId}
                  onChange={(e) => setSignBId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-2.5 text-sm font-medium text-slate-100 focus:outline-none focus:border-cyan-500/60 transition-colors"
                >
                  {ZODIAC_SIGNS.map((s) => (
                    <option key={s.id} value={s.id} className="bg-slate-900 text-slate-100">
                      {s.unicodeSymbol} {lang === 'id' ? s.nameId : s.nameEn} ({lang === 'id' ? s.dateRangeId : s.dateRangeEn})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Active Sign Visual Badge */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-850">
              <div className="text-3xl select-none">{signB.unicodeSymbol}</div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span>{lang === 'id' ? signB.nameId : signB.nameEn}</span>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded border flex items-center gap-1 ${getElementColorClass(signB.element)}`}>
                    {getElementIcon(signB.element)}
                    <span>{signB.element}</span>
                  </span>
                </div>
                <div className="text-xs text-slate-500 truncate">
                  {lang === 'id' ? signB.dateRangeId : signB.dateRangeEn} · {lang === 'id' ? `Planet: ${signB.rulingPlanetId}` : `Ruler: ${signB.rulingPlanetEn}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Presentation Container */}
      <div className={`transition-opacity duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'} space-y-6`}>
        {/* Core Score Banner */}
        <div className="bg-slate-900/95 border border-slate-800 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-20 h-20 rounded-full border-2 border-amber-500/40 bg-amber-500/10 flex flex-col items-center justify-center shrink-0">
                <span className="font-mono text-2xl font-bold text-amber-400 tabular-nums">
                  {result.overallScore}%
                </span>
                <span className="text-[10px] text-amber-300/80 font-medium tracking-wide uppercase">
                  {lang === 'id' ? 'Kecocokan' : 'Match'}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-400">
                  <span className="text-amber-400 font-semibold">{lang === 'id' ? result.dynamicTagId : result.dynamicTagEn}</span>
                  <span aria-hidden="true">·</span>
                  <span>{signA.element} & {signB.element}</span>
                  <span aria-hidden="true">·</span>
                  <span>{signA.modality} / {signB.modality}</span>
                </div>
                <h2 className="font-serif-celestial text-2xl sm:text-3xl font-bold text-slate-100">
                  {nameA.trim() ? nameA : (lang === 'id' ? signA.nameId : signA.nameEn)} & {nameB.trim() ? nameB : (lang === 'id' ? signB.nameId : signB.nameEn)}
                </h2>
                <p className="text-sm text-slate-300">
                  {lang === 'id' ? result.verdictId : result.verdictEn}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyShare}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-md transition-colors shrink-0 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">{lang === 'id' ? 'Tersalin!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'id' ? 'Bagikan Hasil' : 'Share Result'}</span>
                </>
              )}
            </button>
          </div>

          {/* 4 Dimension Meters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>{lang === 'id' ? 'Asmara & Gairah' : 'Love & Romance'}</span>
                </span>
                <span className="font-mono text-slate-200 font-semibold tabular-nums">{result.loveScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-rose-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${result.loveScore}%` }} 
                />
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-sky-400" />
                  <span>{lang === 'id' ? 'Komunikasi' : 'Communication'}</span>
                </span>
                <span className="font-mono text-slate-200 font-semibold tabular-nums">{result.communicationScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${result.communicationScore}%` }} 
                />
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{lang === 'id' ? 'Kedalaman Emosi' : 'Emotional Bond'}</span>
                </span>
                <span className="font-mono text-slate-200 font-semibold tabular-nums">{result.emotionalScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-cyan-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${result.emotionalScore}%` }} 
                />
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'id' ? 'Masa Depan & Nilai' : 'Values & Longevity'}</span>
                </span>
                <span className="font-mono text-slate-200 font-semibold tabular-nums">{result.valuesScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${result.valuesScore}%` }} 
                />
              </div>
            </div>
          </div>

          {/* Elemental Synergy Note */}
          <div className="mt-6 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
            <span className="font-semibold text-amber-300 block mb-1">
              {lang === 'id' ? 'Sinergi Elemen Astrologi' : 'Elemental Synergy'}:
            </span>
            {lang === 'id' ? result.elementSynergyId : result.elementSynergyEn}
          </div>
        </div>

        {/* Detailed Insights: Summary, Strengths, Challenges, and Advice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'id' ? 'Kekuatan Utama Pasangan' : 'Core Relationship Strengths'}</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {(lang === 'id' ? result.strengthsId : result.strengthsEn).map((str, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-100">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>{lang === 'id' ? 'Tantangan yang Perlu Diwaspadai' : 'Potential Pitfalls to Navigate'}</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {(lang === 'id' ? result.challengesId : result.challengesEn).map((chal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">!</span>
                  <span>{chal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Golden Relationship Advice */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-start gap-4">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
            <Lightbulb className="w-5 h-5 text-amber-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-100">
              {lang === 'id' ? 'Nasihat Emas untuk Hubungan Bahagia' : 'Golden Advice for Lasting Harmony'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'id' ? result.adviceId : result.adviceEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
