import React from 'react';
import { Flame, Mountain, Wind, Waves, Compass, Sparkles } from 'lucide-react';

interface CosmicGuideProps {
  lang: 'id' | 'en';
}

export const CosmicGuide: React.FC<CosmicGuideProps> = ({ lang }) => {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-amber-400 tracking-wider uppercase">
          <Compass className="w-4 h-4 text-amber-400" />
          <span>{lang === 'id' ? 'Kebijaksanaan Astrologi' : 'Astrological Foundations'}</span>
        </div>
        <h2 className="font-serif-celestial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
          {lang === 'id' ? 'Panduan 4 Elemen & Dinamika Hubungan' : 'The 4 Cosmic Elements in Romance'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
          {lang === 'id'
            ? 'Pahami interaksi antara Api, Tanah, Udara, dan Air untuk menciptakan hubungan yang harmonis dan langgeng.'
            : 'Understand how Fire, Earth, Air, and Water interact to cultivate mutual empathy and enduring connection.'}
        </p>
      </div>

      {/* 4 Elements Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fire */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-amber-400">
            <Flame className="w-5 h-5 text-amber-500" />
            <h3 className="font-serif-celestial text-lg font-bold">
              {lang === 'id' ? 'Elemen Api (Aries, Leo, Sagitarius)' : 'Fire Signs (Aries, Leo, Sagittarius)'}
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Energetik, bersemangat, spontan, dan penuh inisiatif. Mereka mencintai dengan gairah yang menyala-nyala dan menyukai pasangan yang dapat diajak bertualang.'
              : 'Passionate, bold, intuitive, and driven. Fire signs express love through grand gestures, adventure, and high enthusiasm.'}
          </p>
          <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
            <strong className="text-slate-300">{lang === 'id' ? 'Pasangan Terbaik: ' : 'Best Synergy: '}</strong>
            {lang === 'id' ? 'Udara (mengobarkan api) & Sesama Api (gairah seimbang).' : 'Air (fans the flames) & Fire (shared passion).'}
          </div>
        </div>

        {/* Earth */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-emerald-400">
            <Mountain className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif-celestial text-lg font-bold">
              {lang === 'id' ? 'Elemen Tanah (Taurus, Virgo, Capricorn)' : 'Earth Signs (Taurus, Virgo, Capricorn)'}
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Stabil, setia, realistis, dan berorientasi pada masa depan. Cinta bagi mereka adalah komitmen yang dibuktikan lewat aksi nyata dan kenyamanan hidup.'
              : 'Grounded, patient, practical, and steadfast. Earth signs value tangible devotion, sensual comfort, and unshakeable security.'}
          </p>
          <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
            <strong className="text-slate-300">{lang === 'id' ? 'Pasangan Terbaik: ' : 'Best Synergy: '}</strong>
            {lang === 'id' ? 'Air (menyuburkan dan melembutkan) & Sesama Tanah.' : 'Water (nourishes and enriches) & fellow Earth.'}
          </div>
        </div>

        {/* Air */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-sky-400">
            <Wind className="w-5 h-5 text-sky-400" />
            <h3 className="font-serif-celestial text-lg font-bold">
              {lang === 'id' ? 'Elemen Udara (Gemini, Libra, Aquarius)' : 'Air Signs (Gemini, Libra, Aquarius)'}
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Cerdas, komunikatif, objektif, dan menghargai ruang pribadi. Menjalin hubungan berawal dari percakapan intelektual dan saling menginspirasi ide baru.'
              : 'Intellectual, witty, open-minded, and social. Air signs bond through deep mental dialogue, humor, and mutual freedom.'}
          </p>
          <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
            <strong className="text-slate-300">{lang === 'id' ? 'Pasangan Terbaik: ' : 'Best Synergy: '}</strong>
            {lang === 'id' ? 'Api (memberi kehangatan & inspirasi) & Sesama Udara.' : 'Fire (sparks vitality) & fellow Air.'}
          </div>
        </div>

        {/* Water */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-cyan-400">
            <Waves className="w-5 h-5 text-cyan-400" />
            <h3 className="font-serif-celestial text-lg font-bold">
              {lang === 'id' ? 'Elemen Air (Cancer, Scorpio, Pisces)' : 'Water Signs (Cancer, Scorpio, Pisces)'}
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Intuitif, penuh empati, penyayang, dan mendalam. Mereka membutuhkan keintiman emosional sejati dan rasa aman untuk membuka pintu hati mereka.'
              : 'Emotional, psychic, caring, and deeply loyal. Water signs offer a soulful sanctuary and crave genuine intimacy.'}
          </p>
          <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
            <strong className="text-slate-300">{lang === 'id' ? 'Pasangan Terbaik: ' : 'Best Synergy: '}</strong>
            {lang === 'id' ? 'Tanah (memberi wadah aman & kestabilan) & Sesama Air.' : 'Earth (provides protective structure) & fellow Water.'}
          </div>
        </div>
      </div>

      {/* Cosmic Golden Rule */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-start gap-4">
        <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-100">
            {lang === 'id' ? 'Prinsip Hubungan Bintang' : 'The Celestial Relationship Principle'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'id'
              ? 'Kecocokan zodiak bukanlah vonis mutlak, melainkan peta navigasi emosional. Dua tanda yang menantang tetap bisa membangun hubungan cinta seumur hidup yang indah melalui komunikasi jujur, saling menghargai ruang pribadi, dan komitmen tulus.'
              : 'Astrological compatibility is not a rigid destiny, but an emotional navigation map. Even contrasting signs can build an enduring, sublime union with transparent communication, mutual grace, and heartfelt dedication.'}
          </p>
        </div>
      </div>
    </div>
  );
};
