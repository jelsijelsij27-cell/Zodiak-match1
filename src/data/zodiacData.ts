export type ElementType = 'Fire' | 'Earth' | 'Air' | 'Water';
export type ModalityType = 'Cardinal' | 'Fixed' | 'Mutable';

export interface ZodiacSign {
  id: string;
  nameId: string;
  nameEn: string;
  symbol: string;
  unicodeSymbol: string;
  dateRangeId: string;
  dateRangeEn: string;
  startMonth: number; // 1-12
  startDay: number;
  endMonth: number;
  endDay: number;
  element: ElementType;
  modality: ModalityType;
  rulingPlanetId: string;
  rulingPlanetEn: string;
  traitsId: string[];
  traitsEn: string[];
  strengthsId: string[];
  strengthsEn: string[];
  weaknessesId: string[];
  weaknessesEn: string[];
  overviewId: string;
  overviewEn: string;
  loveStyleId: string;
  loveStyleEn: string;
  idealPartners: string[]; // ids
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    nameId: 'Aries',
    nameEn: 'Aries',
    symbol: '♈',
    unicodeSymbol: '♈',
    dateRangeId: '21 Mar - 19 Apr',
    dateRangeEn: 'Mar 21 - Apr 19',
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    element: 'Fire',
    modality: 'Cardinal',
    rulingPlanetId: 'Mars',
    rulingPlanetEn: 'Mars',
    traitsId: ['Pemberani', 'Spontan', 'Berenergi Tinggi', 'Penuh Semangat'],
    traitsEn: ['Bold', 'Spontaneous', 'High Energy', 'Passionate'],
    strengthsId: ['Inisiatif kuat', 'Jujur dan blak-blakan', 'Pelindung pasangan', 'Optimis'],
    strengthsEn: ['Strong initiative', 'Direct and honest', 'Protective partner', 'Optimistic'],
    weaknessesId: ['Mudah tidak sabar', 'Cepat bosan', 'Keras kepala'],
    weaknessesEn: ['Impatient', 'Easily restless', 'Stubborn temper'],
    overviewId: 'Zodiak pelopor yang dipimpin oleh Mars, melambangkan api pertama yang menyala dengan keberanian dan ambisi tak terbatas.',
    overviewEn: 'The pioneering fire sign ruled by Mars, symbolizing blazing passion, fierce loyalty, and unstoppable initiative.',
    loveStyleId: 'Mencintai dengan intensitas penuh, menyukai tantangan, dan tidak ragu mengejar orang yang memikat hatinya.',
    loveStyleEn: 'Loves with exhilarating intensity, thrives on playful pursuit, and remains unapologetically direct.',
    idealPartners: ['leo', 'sagittarius', 'gemini', 'aquarius', 'libra']
  },
  {
    id: 'taurus',
    nameId: 'Taurus',
    nameEn: 'Taurus',
    symbol: '♉',
    unicodeSymbol: '♉',
    dateRangeId: '20 Apr - 20 Mei',
    dateRangeEn: 'Apr 20 - May 20',
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    element: 'Earth',
    modality: 'Fixed',
    rulingPlanetId: 'Venus',
    rulingPlanetEn: 'Venus',
    traitsId: ['Setia', 'Penyabar', 'Realistis', 'Pecinta Kenyamanan'],
    traitsEn: ['Loyal', 'Patient', 'Grounded', 'Sensual'],
    strengthsId: ['Komitmen teguh', 'Dapat diandalkan 100%', 'Penuh kasih sayang hangat', 'Tenang'],
    strengthsEn: ['Rock-solid commitment', 'Deeply reliable', 'Warmly affectionate', 'Grounded calm'],
    weaknessesId: ['Keras kepala', 'Enggan keluar dari zona nyaman', 'Mudah posesif'],
    weaknessesEn: ['Inflexible at times', 'Resistant to sudden change', 'Possessive streaks'],
    overviewId: 'Zodiak tanah yang dinaungi Venus, menyukai keindahan, stabilitas finansial, serta kehangatan rumah tangga yang kokoh.',
    overviewEn: 'Grounded earth sign blessed by Venus, cherishing sensual luxury, emotional stability, and enduring loyalty.',
    loveStyleId: 'Menunjukkan cinta melalui tindakan nyata, sentuhan fisik, dan kesetiaan seumur hidup.',
    loveStyleEn: 'Expresses love through acts of service, comforting physical closeness, and lifelong devotion.',
    idealPartners: ['virgo', 'capricorn', 'cancer', 'pisces', 'scorpio']
  },
  {
    id: 'gemini',
    nameId: 'Gemini',
    nameEn: 'Gemini',
    symbol: '♊',
    unicodeSymbol: '♊',
    dateRangeId: '21 Mei - 20 Jun',
    dateRangeEn: 'May 21 - Jun 20',
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    element: 'Air',
    modality: 'Mutable',
    rulingPlanetId: 'Merkurius',
    rulingPlanetEn: 'Mercury',
    traitsId: ['Komunikatif', 'Cerdas', 'Adaptif', 'Penuh Rasa Ingin Tahu'],
    traitsEn: ['Articulate', 'Witty', 'Curious', 'Versatile'],
    strengthsId: ['Obrolan tidak pernah membosankan', 'Pikiran terbuka', 'Menghidupkan suasana', 'Humor cerdas'],
    strengthsEn: ['Never running out of dialogue', 'Open-minded', 'Playful spark', 'Quick intellect'],
    weaknessesId: ['Mudah bimbang', 'Mood berubah-ubah', 'Sulit ditebak emosinya'],
    weaknessesEn: ['Indecisive at times', 'Dual mood shifts', 'Restless attention span'],
    overviewId: 'Zodiak udara yang cerdik dan dinamis. Menghubungkan orang lewat dialog tajam dan rasa ingin tahu yang tak ada habisnya.',
    overviewEn: 'The intellectual quicksilver of the zodiac, energized by ideas, multifaceted banter, and endless curiosity.',
    loveStyleId: 'Jatuh cinta lewat pikiran dan percakapan mendalam sebelum menyerahkan hatinya.',
    loveStyleEn: 'Falls in love through sparkling mental connection, banter, and mutual intellectual stimulation.',
    idealPartners: ['libra', 'aquarius', 'aries', 'leo', 'sagittarius']
  },
  {
    id: 'cancer',
    nameId: 'Cancer',
    nameEn: 'Cancer',
    symbol: '♋',
    unicodeSymbol: '♋',
    dateRangeId: '21 Jun - 22 Jul',
    dateRangeEn: 'Jun 21 - Jul 22',
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    element: 'Water',
    modality: 'Cardinal',
    rulingPlanetId: 'Bulan (Moon)',
    rulingPlanetEn: 'Moon',
    traitsId: ['Penyayang', 'Intuitif', 'Protektif', 'Sensitif Mendalam'],
    traitsEn: ['Nurturing', 'Intuitive', 'Protective', 'Deeply Feeling'],
    strengthsId: ['Empati luar biasa', 'Menciptakan rasa aman', 'Ingatan emosional kuat', 'Tulus'],
    strengthsEn: ['profound empathy', 'Creates home comfort', 'Unconditional warmth', 'Faithful intuition'],
    weaknessesId: ['Mudah baper/moody', 'Sering memendam perasaan', 'Protektif berlebihan'],
    weaknessesEn: ['Moody shifts', 'Tends to retreat into shell', 'Overly protective'],
    overviewId: 'Zodiak air yang dinaungi Bulan, mewakili naluri keibuan, kehangatan jiwa, dan perlindungan keluarga.',
    overviewEn: 'The intuitive water sign governed by the Moon, offering emotional sanctuary and deep protective warmth.',
    loveStyleId: 'Mencintai dengan sepenuh jiwa, memprioritaskan kenyamanan emosional dan masa depan keluarga bersama.',
    loveStyleEn: 'Loves with vulnerable devotion, providing a soulful sanctuary and heartfelt nourishment.',
    idealPartners: ['scorpio', 'pisces', 'taurus', 'virgo', 'capricorn']
  },
  {
    id: 'leo',
    nameId: 'Leo',
    nameEn: 'Leo',
    symbol: '♌',
    unicodeSymbol: '♌',
    dateRangeId: '23 Jul - 22 Agu',
    dateRangeEn: 'Jul 23 - Aug 22',
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    element: 'Fire',
    modality: 'Fixed',
    rulingPlanetId: 'Matahari (Sun)',
    rulingPlanetEn: 'Sun',
    traitsId: ['Kharismatik', 'Murah Hati', 'Percaya Diri', 'Dramatis Romantis'],
    traitsEn: ['Charismatic', 'Generous', 'Radiant', 'Warmhearted'],
    strengthsId: ['Pelindung sejati pasangan', 'Suka memberi pujian dan hadiah', 'Setia tiada tara', 'Pemberani'],
    strengthsEn: ['Fiercely protective', 'Lavishly romantic & generous', 'Steadfast loyalty', 'Natural magnetism'],
    weaknessesId: ['Gengsi tinggi', 'Haus apresiasi konstan', 'Cepat tersinggung'],
    weaknessesEn: ['Proud ego', 'Craves constant validation', 'Prone to dramatic flares'],
    overviewId: 'Dinaungi oleh Matahari, Leo bersinar cerah sebagai lambang kebanggaan, kemurahan hati, dan kepemimpinan berjiwa besar.',
    overviewEn: 'Solar-powered monarch of the zodiac, exuding theatrical romance, unyielding loyalty, and radiant generosity.',
    loveStyleId: 'Memperlakukan pasangan bak raja atau ratu, penuh kejutan romantis dan cinta yang membara.',
    loveStyleEn: 'Treats partners like royalty with grandiose gestures, passionate devotion, and unwavering fidelity.',
    idealPartners: ['sagittarius', 'aries', 'libra', 'gemini', 'aquarius']
  },
  {
    id: 'virgo',
    nameId: 'Virgo',
    nameEn: 'Virgo',
    symbol: '♍',
    unicodeSymbol: '♍',
    dateRangeId: '23 Agu - 22 Sep',
    dateRangeEn: 'Aug 23 - Sep 22',
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    element: 'Earth',
    modality: 'Mutable',
    rulingPlanetId: 'Merkurius',
    rulingPlanetEn: 'Mercury',
    traitsId: ['Teliti', 'Bertanggung Jawab', 'Analitis', 'Tulus Membantu'],
    traitsEn: ['Detail-Oriented', 'Responsible', 'Analytical', 'Dedicated'],
    strengthsId: ['Selalu siap membantu', 'Solutif saat krisis', 'Sangat setia', 'Perhatian pada detail kecil'],
    strengthsEn: ['Service-driven care', 'Problem-solver in crisis', 'Rock-solid fidelity', 'Notices tiny details'],
    weaknessesId: ['Kritik diri/orang lain terlalu tajam', 'Sering overthinking', 'Perfeksionis kaku'],
    weaknessesEn: ['Hypercritical at times', 'Chronic overthinking', 'Rigid perfectionism'],
    overviewId: 'Zodiak tanah yang cermat dan berorientasi pada pengabdian serta perbaikan hidup terus-menerus.',
    overviewEn: 'Discerning earth sign embodying practical wisdom, quiet acts of care, and dedicated refinement.',
    loveStyleId: 'Cintanya dibuktikan lewat bantuan konkret dan usaha nyata menjadikan hidup pasangan lebih tertata.',
    loveStyleEn: 'Shows deep affection through acts of quiet service, mindful attentiveness, and loyal consistency.',
    idealPartners: ['taurus', 'capricorn', 'cancer', 'scorpio', 'pisces']
  },
  {
    id: 'libra',
    nameId: 'Libra',
    nameEn: 'Libra',
    symbol: '♎',
    unicodeSymbol: '♎',
    dateRangeId: '23 Sep - 22 Okt',
    dateRangeEn: 'Sep 23 - Oct 22',
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    element: 'Air',
    modality: 'Cardinal',
    rulingPlanetId: 'Venus',
    rulingPlanetEn: 'Venus',
    traitsId: ['Harmonis', 'Romantis', 'Diplomatis', 'Pecinta Seni'],
    traitsEn: ['Harmonious', 'Charming', 'Diplomatic', 'Aesthetic'],
    strengthsId: ['Pendengar yang adil', 'Pencipta keharmonisan', 'Romantis elegan', 'Menghindari konflik kasar'],
    strengthsEn: ['Fair-minded mediator', 'Cultivates graceful harmony', 'Romantic charm', 'Gentle composure'],
    weaknessesId: ['Ragu-ragu mengambil keputusan', 'Cenderung menyenangkan semua orang', 'Takut konfrontasi'],
    weaknessesEn: ['Chronic indecision', 'People-pleasing tendencies', 'Conflict avoidance'],
    overviewId: 'Zodiak udara timbangan keadilan di bawah Venus, mencari keseimbangan, keindahan, dan cinta sejati.',
    overviewEn: 'The archetypal lover of the cosmos governed by Venus, seeking balance, aesthetic grace, and true partnership.',
    loveStyleId: 'Mengutamakan kemitraan setara, kencan romantis elegan, dan komunikasi yang santun.',
    loveStyleEn: 'Flourishes in balanced partnership, intellectual charm, and refined romantic romance.',
    idealPartners: ['gemini', 'aquarius', 'leo', 'sagittarius', 'aries']
  },
  {
    id: 'scorpio',
    nameId: 'Scorpio',
    nameEn: 'Scorpio',
    symbol: '♏',
    unicodeSymbol: '♏',
    dateRangeId: '23 Okt - 21 Nov',
    dateRangeEn: 'Oct 23 - Nov 21',
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    element: 'Water',
    modality: 'Fixed',
    rulingPlanetId: 'Pluto & Mars',
    rulingPlanetEn: 'Pluto & Mars',
    traitsId: ['Intens', 'Penuh Rahasia', 'Setia Membatu', 'Penuh Daya Tarik'],
    traitsEn: ['Intense', 'Magnetic', 'Fiercely Loyal', 'Transformative'],
    strengthsId: ['Komitmen tak tergoyahkan', 'Intuisi psikologis tajam', 'Pelindung yang tak kenal takut', 'Gairah dalam'],
    strengthsEn: ['Unshakable devotion', 'Razor-sharp intuition', 'Fearless emotional bravery', 'Profound passion'],
    weaknessesId: ['Kecurigaan tinggi', 'Sulit memaafkan luka', 'Cemburu posesif'],
    weaknessesEn: ['Suspicious guard', 'Slow to forgive', 'Fierce possessiveness'],
    overviewId: 'Zodiak air berkekuatan transformatif, mampu merasakan getaran batin terdalam dan menjaga rahasia dengan sakral.',
    overviewEn: 'Mystic water sign carrying emotional alchemy, unyielding loyalty, and soul-merging depth.',
    loveStyleId: 'Menginginkan cinta yang total tanpa setengah-setengah—persatuan jiwa yang intim dan abadi.',
    loveStyleEn: 'Craves total emotional transparency and transformative intimacy that transcends superficial bounds.',
    idealPartners: ['cancer', 'pisces', 'virgo', 'capricorn', 'taurus']
  },
  {
    id: 'sagittarius',
    nameId: 'Sagitarius',
    nameEn: 'Sagittarius',
    symbol: '♐',
    unicodeSymbol: '♐',
    dateRangeId: '22 Nov - 21 Des',
    dateRangeEn: 'Nov 22 - Dec 21',
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    element: 'Fire',
    modality: 'Mutable',
    rulingPlanetId: 'Jupiter',
    rulingPlanetEn: 'Jupiter',
    traitsId: ['Petualang', 'Optimis', 'Filosofis', 'Pecinta Kebebasan'],
    traitsEn: ['Adventurous', 'Optimistic', 'Philosophical', 'Free-Spirited'],
    strengthsId: ['Selalu membawa tawa', 'Jujur apa adanya', 'Memberi ruang bertumbuh', 'Semangat petualang'],
    strengthsEn: ['Infectious joy & humor', 'Candid truthfulness', 'Supports partner growth', 'Wanderlust spirit'],
    weaknessesId: ['Kurang peka kata-kata', 'Takut terikat rutinitas kaku', 'Kurang teliti'],
    weaknessesEn: ['Blunt speech', 'Phobia of smothering cages', 'Restless restlessness'],
    overviewId: 'Sang pemanah api di bawah perlindungan Jupiter, mencari kebenaran, kebijaksanaan, dan pengalaman baru dunia.',
    overviewEn: 'The questing archer ruled by Jupiter, expanding horizons through adventurous discovery and philosophical truth.',
    loveStyleId: 'Pasangan adalah sahabat petualangan terbaik; membutuhkan kebebasan saling percaya tanpa kekangan.',
    loveStyleEn: 'Loves with open-hearted exuberance, seeking a partner in adventure and intellectual wonder.',
    idealPartners: ['aries', 'leo', 'libra', 'aquarius', 'gemini']
  },
  {
    id: 'capricorn',
    nameId: 'Capricorn',
    nameEn: 'Capricorn',
    symbol: '♑',
    unicodeSymbol: '♑',
    dateRangeId: '22 Des - 19 Jan',
    dateRangeEn: 'Dec 22 - Jan 19',
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    element: 'Earth',
    modality: 'Cardinal',
    rulingPlanetId: 'Saturnus',
    rulingPlanetEn: 'Saturn',
    traitsId: ['Disiplin', 'Ambisius', 'Setia Abadi', 'Tangguh'],
    traitsEn: ['Disciplined', 'Ambitious', 'Steadfast', 'Pragmatic'],
    strengthsId: ['Membangun masa depan mapan', 'Sangat bertanggung jawab', 'Bisa diandalkan saat badai hidup', 'Konsisten'],
    strengthsEn: ['Builds lasting empire & security', 'Unyielding duty', 'Rock in any storm', 'Integrity'],
    weaknessesId: ['Kaku mengekspresikan emosi', 'Workaholic', 'Pesimistis berlebihan'],
    weaknessesEn: ['Guarded emotional armor', 'Work-absorbed', 'Overly cautious'],
    overviewId: 'Zodiak tanah bertanduk yang mendaki puncak tertinggi di bawah Saturnus, simbol ketahanan, martabat, dan komitmen.',
    overviewEn: 'Architect of endurance ruled by Saturn, valuing timeless commitment, quiet maturity, and lasting legacy.',
    loveStyleId: 'Komitmen jangka panjang adalah harga mati; membuktikan cinta melalui perlindungan dan fondasi hidup kokoh.',
    loveStyleEn: 'Invests for the long haul, proving love through steadfast support and tangible devotion.',
    idealPartners: ['taurus', 'virgo', 'scorpio', 'pisces', 'cancer']
  },
  {
    id: 'aquarius',
    nameId: 'Aquarius',
    nameEn: 'Aquarius',
    symbol: '♒',
    unicodeSymbol: '♒',
    dateRangeId: '20 Jan - 18 Feb',
    dateRangeEn: 'Jan 20 - Feb 18',
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    element: 'Air',
    modality: 'Fixed',
    rulingPlanetId: 'Uranus & Saturnus',
    rulingPlanetEn: 'Uranus & Saturn',
    traitsId: ['Visioner', 'Mandiri', 'Humanis', 'Autentik Unik'],
    traitsEn: ['Visionary', 'Independent', 'Humanitarian', 'Unconventional'],
    strengthsId: ['Menghormati keunikan pasangan', 'Komunikasi jujur dan setara', 'Tidak posesif', 'Ide kreatif tanpa batas'],
    strengthsEn: ['Celebrates partner quirks', 'Equality-based connection', 'Zero toxic jealousy', 'Inventive mind'],
    weaknessesId: ['Tampak dingin secara emosional', 'Suka menyendiri tiba-tiba', 'Pemberontak jika ditekan'],
    weaknessesEn: ['Emotionally detached mask', 'Needs sudden isolation', 'Stubborn contrarianism'],
    overviewId: 'Pembawa air berjiwa masa depan, menembus batas tradisi untuk kemanusiaan, persahabatan, dan kebebasan berpikir.',
    overviewEn: 'The visionary air bearer guided by Uranus, valuing progressive ideals, electric intellect, and authentic freedom.',
    loveStyleId: 'Mencintai berawal dari persahabatan sejati; butuh pasangan yang bisa diajak berdiskusi tentang masa depan.',
    loveStyleEn: 'Best friends first, lovers forever; thrives in an unconventional relationship of mutual intellectual respect.',
    idealPartners: ['gemini', 'libra', 'aries', 'sagittarius', 'leo']
  },
  {
    id: 'pisces',
    nameId: 'Pisces',
    nameEn: 'Pisces',
    symbol: '♓',
    unicodeSymbol: '♓',
    dateRangeId: '19 Feb - 20 Mar',
    dateRangeEn: 'Feb 19 - Mar 20',
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    element: 'Water',
    modality: 'Mutable',
    rulingPlanetId: 'Neptunus & Jupiter',
    rulingPlanetEn: 'Neptune & Jupiter',
    traitsId: ['Puitis', 'Empatis', 'Romantis Murni', 'Imajinatif'],
    traitsEn: ['Poetic', 'Empathic', 'Soulful', 'Dreamer'],
    strengthsId: ['Ketulusan tanpa syarat', 'Intuisi magis', 'Mendengarkan dengan segenap hati', 'Sangat manis'],
    strengthsEn: ['Unconditional compassion', 'Magical intuition', 'Soulful listener', 'Tender warmth'],
    weaknessesId: ['Terlalu mudah percaya', 'Cenderung lari dari kenyataan', 'Mudah hanyut dalam emosi'],
    weaknessesEn: ['Overly trusting', 'Escapist tendencies', 'Absorbs external sorrow'],
    overviewId: 'Zodiak air pamungkas berjiwa samudra mistis di bawah Neptunus, menyatukan keindahan seni, mimpi, dan welas asih.',
    overviewEn: 'The mystical water dreamer ruled by Neptune, dissolving boundaries with boundless compassion and poetic love.',
    loveStyleId: 'Romansa dongeng yang tulus, menginginkan kedekatan emosional spiritual di mana kedua jiwa bersatu.',
    loveStyleEn: 'Loves like a timeless fairytale, craving spiritual closeness and heartfelt devotion.',
    idealPartners: ['cancer', 'scorpio', 'taurus', 'capricorn', 'virgo']
  }
];

export function getZodiacByDate(month: number, day: number): ZodiacSign {
  // month: 1-12, day: 1-31
  for (const sign of ZODIAC_SIGNS) {
    if (sign.startMonth === sign.endMonth) {
      if (month === sign.startMonth && day >= sign.startDay && day <= sign.endDay) return sign;
    } else if (sign.startMonth > sign.endMonth) {
      // wraps around year end (Capricorn Dec 22 - Jan 19)
      if ((month === sign.startMonth && day >= sign.startDay) || (month === sign.endMonth && day <= sign.endDay)) {
        return sign;
      }
    } else {
      if (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay)
      ) {
        return sign;
      }
    }
  }
  return ZODIAC_SIGNS[0];
}

export interface CompatibilityAnalysis {
  overallScore: number;
  loveScore: number;
  communicationScore: number;
  emotionalScore: number;
  valuesScore: number;
  verdictId: string;
  verdictEn: string;
  summaryId: string;
  summaryEn: string;
  elementSynergyId: string;
  elementSynergyEn: string;
  strengthsId: string[];
  strengthsEn: string[];
  challengesId: string[];
  challengesEn: string[];
  adviceId: string;
  adviceEn: string;
  dynamicTagId: string;
  dynamicTagEn: string;
}

// Astrological compatibility calculation
export function calculateCompatibility(signA: ZodiacSign, signB: ZodiacSign): CompatibilityAnalysis {
  const isSameSign = signA.id === signB.id;
  const sameElement = signA.element === signB.element;
  const isOpposite = 
    (signA.id === 'aries' && signB.id === 'libra') ||
    (signA.id === 'libra' && signB.id === 'aries') ||
    (signA.id === 'taurus' && signB.id === 'scorpio') ||
    (signA.id === 'scorpio' && signB.id === 'taurus') ||
    (signA.id === 'gemini' && signB.id === 'sagittarius') ||
    (signA.id === 'sagittarius' && signB.id === 'gemini') ||
    (signA.id === 'cancer' && signB.id === 'capricorn') ||
    (signA.id === 'capricorn' && signB.id === 'cancer') ||
    (signA.id === 'leo' && signB.id === 'aquarius') ||
    (signA.id === 'aquarius' && signB.id === 'leo') ||
    (signA.id === 'virgo' && signB.id === 'pisces') ||
    (signA.id === 'pisces' && signB.id === 'virgo');

  const complementaryElements = 
    (signA.element === 'Fire' && signB.element === 'Air') ||
    (signA.element === 'Air' && signB.element === 'Fire') ||
    (signA.element === 'Earth' && signB.element === 'Water') ||
    (signA.element === 'Water' && signB.element === 'Earth');

  let baseOverall = 70;
  let baseLove = 72;
  let baseComm = 68;
  let baseEmo = 70;
  let baseVal = 70;

  if (sameElement) {
    baseOverall += 20;
    baseLove += 18;
    baseComm += 22;
    baseEmo += 20;
    baseVal += 22;
  } else if (complementaryElements) {
    baseOverall += 22;
    baseLove += 24;
    baseComm += 22;
    baseEmo += 18;
    baseVal += 18;
  } else if (isOpposite) {
    baseOverall += 16;
    baseLove += 25;
    baseComm += 14;
    baseEmo += 16;
    baseVal += 15;
  } else {
    // Challenging element combos (e.g. Fire + Water, Fire + Earth, Air + Water, Air + Earth)
    baseOverall -= 8;
    baseLove -= 6;
    baseComm -= 6;
    baseEmo -= 10;
    baseVal -= 6;
  }

  // Modality interaction
  if (signA.modality === signB.modality) {
    if (signA.modality === 'Cardinal') {
      // Two leaders: can clash on control
      baseComm -= 4;
      baseVal += 5;
    } else if (signA.modality === 'Fixed') {
      // Two unyielding: very loyal, stubborn
      baseLove += 6;
      baseComm -= 6;
    } else {
      // Two mutables: versatile, may need anchor
      baseComm += 8;
      baseVal -= 4;
    }
  }

  // Deterministic seed based on sign IDs for natural variability
  const seed = (signA.id.charCodeAt(0) * 7 + signB.id.charCodeAt(0) * 11) % 9;
  const overall = Math.min(99, Math.max(52, baseOverall + (seed % 5) - 2));
  const love = Math.min(99, Math.max(50, baseLove + (seed % 6) - 3));
  const comm = Math.min(99, Math.max(48, baseComm + ((seed + 2) % 6) - 3));
  const emo = Math.min(99, Math.max(46, baseEmo + ((seed + 4) % 6) - 3));
  const val = Math.min(99, Math.max(50, baseVal + ((seed + 1) % 6) - 2));

  // Determine dynamic Tag
  let dynamicTagId = 'Harmoni Alami';
  let dynamicTagEn = 'Natural Harmony';
  if (overall >= 90) {
    dynamicTagId = 'Soulmate Surgawi';
    dynamicTagEn = 'Cosmic Soulmates';
  } else if (isOpposite) {
    dynamicTagId = 'Daya Tarik Kutub Magnet';
    dynamicTagEn = 'Magnetic Opposites';
  } else if (complementaryElements) {
    dynamicTagId = 'Sinergi Menginspirasi';
    dynamicTagEn = 'Inspiring Spark';
  } else if (sameElement) {
    dynamicTagId = 'Pemahaman Cermin Jiwa';
    dynamicTagEn = 'Mirror Soul Understanding';
  } else {
    dynamicTagId = 'Pembelajaran Kedewasaan';
    dynamicTagEn = 'Evolving Alchemy';
  }

  // Element synergy description
  let elementSynergyId = '';
  let elementSynergyEn = '';

  const comboKey = [signA.element, signB.element].sort().join('+');
  switch (comboKey) {
    case 'Fire+Fire':
      elementSynergyId = 'Api bertemu Api: Gairah berkobar, penuh antusiasme dan petualangan, namun perlu menjaga agar ego tidak saling membakar.';
      elementSynergyEn = 'Fire meets Fire: Radiant passion, shared enthusiasm, and high adventure; require maturity to keep competitive flames in check.';
      break;
    case 'Earth+Earth':
      elementSynergyId = 'Tanah bertemu Tanah: Fondasi kokoh, sangat stabil, saling setia dan berorientasi pada masa depan yang aman.';
      elementSynergyEn = 'Earth meets Earth: Unshakable bedrock, profound loyalty, practical care, and shared long-term security.';
      break;
    case 'Air+Air':
      elementSynergyId = 'Udara bertemu Udara: Percakapan tanpa henti, sinergi intelektual tinggi, dan kebebasan saling menghormati.';
      elementSynergyEn = 'Air meets Air: Endless sparkling banter, high intellectual synchronicity, and generous mental freedom.';
      break;
    case 'Water+Water':
      elementSynergyId = 'Water bertemu Water: Ikatan batin yang mendalam, empati tanpa kata, dan kehangatan emosional tak terpisahkan.';
      elementSynergyEn = 'Water meets Water: Ocean-deep psychic resonance, tender empathy, and an intuitive emotional haven.';
      break;
    case 'Air+Fire':
      elementSynergyId = 'Api & Udara: Udara mengobarkan kobaran api, menciptakan ide-ide brilian, tawa riang, dan dorongan eksplorasi tak terbatas.';
      elementSynergyEn = 'Fire & Air: Air stokes the passionate fire, generating boundless inspiration, magnetic charm, and lively discovery.';
      break;
    case 'Earth+Water':
      elementSynergyId = 'Tanah & Air: Air menyuburkan tanah, tanah memberi wadah aman bagi air. Hubungan yang subur, protektif, dan langgeng.';
      elementSynergyEn = 'Earth & Water: Water enriches the earth, while earth offers a safe riverbed. Deeply fertile, protective, and enduring.';
      break;
    case 'Fire+Water':
      elementSynergyId = 'Api & Air: Api memanaskan air, air dapat menenangkan api. Kombinasi intens yang memerlukan kompromi emosional.';
      elementSynergyEn = 'Fire & Water: Steam and passion. High emotional intensity where sensitivity and raw drive learn to dance.';
      break;
    case 'Earth+Fire':
      elementSynergyId = 'Api & Tanah: Tanah menstabilkan gairah api, api membakar semangat tanah menjadi karya nyata. Sangat produktif.';
      elementSynergyEn = 'Fire & Earth: Volcano and rock. Earth anchors fire’s vision into concrete reality, creating tangible success.';
      break;
    case 'Air+Earth':
      elementSynergyId = 'Udara & Tanah: Ide-ide abstrak udara diwujudkan secara realistis oleh tanah, melatih kesabaran dan keseimbangan.';
      elementSynergyEn = 'Earth & Air: Theoretical vision meets grounded execution. A bridge between ideals and daily discipline.';
      break;
    case 'Air+Water':
      elementSynergyId = 'Udara & Air: Logika tajam bertemu kedalaman rasa. Membantu satu sama lain melihat dunia lewat akal dan hati.';
      elementSynergyEn = 'Air & Water: Mind meets heart. Logic weaves with deep feeling, teaching balance between reason and intuition.';
      break;
  }

  // Verdict & Summary
  let verdictId = '';
  let verdictEn = '';
  let summaryId = '';
  let summaryEn = '';

  if (overall >= 88) {
    verdictId = `Kecocokan Sangat Tinggi (${overall}%)`;
    verdictEn = `Exceptional Cosmic Harmony (${overall}%)`;
    summaryId = `Pasangan ${signA.nameId} dan ${signB.nameId} memiliki resonansi astrologi yang sangat kuat. Kalian saling melengkapi secara natural dan memiliki energi yang saling menguatkan impian satu sama lain.`;
    summaryEn = `${signA.nameEn} and ${signB.nameEn} share a profoundly radiant astrological connection. Your natural inclinations complement each other seamlessly, creating a resilient and joyful partnership.`;
  } else if (overall >= 75) {
    verdictId = `Kecocokan Harmonis (${overall}%)`;
    verdictEn = `Harmonious Partnership (${overall}%)`;
    summaryId = `Hubungan antara ${signA.nameId} dan ${signB.nameId} penuh potensi manis dan kehangatan. Dengan komunikasi yang terbuka, kalian mampu mengatasi setiap rintangan dengan anggun.`;
    summaryEn = `The bond between ${signA.nameEn} and ${signB.nameEn} radiates warm potential and steady affection. With honest dialogue, you effortlessly transform differences into growth.`;
  } else {
    verdictId = `Kombinasi Dinamis & Menantang (${overall}%)`;
    verdictEn = `Dynamic Growth Connection (${overall}%)`;
    summaryId = `Pertemuan dua karakter unik dengan perspektif berbeda. Meskipun memerlukan adaptasi dan saling menghargai batasan, hubungan ini bisa menjadi guru kehidupan terbaik untuk pendewasaan diri.`;
    summaryEn = `A fascinating blend of distinct worldviews. While requiring patience and conscious respect for differences, this pairing serves as an invaluable catalyst for personal growth.`;
  }

  // Strengths & Challenges
  const strengthsId = [
    `Kombinasi energi ${signA.element} dan ${signB.element} yang saling memicu inspirasi baru`,
    `Saling menghargai kelebihan unik masing-masing di depan keluarga dan sahabat`,
    `Kemampuan menyelesaikan masalah ketika mengedepankan kompromi dan kasih sayang`,
    `Dukungan moril yang tulus saat salah satu pihak sedang mengalami masa sulit`
  ];
  const strengthsEn = [
    `Dynamic synergy between ${signA.element} and ${signB.element} sparking fresh inspiration`,
    `Mutual celebration of each other's distinct strengths and individual passions`,
    `Potent problem-solving chemistry when grounded in patience and affection`,
    `Unwavering moral backbone during challenging life transitions`
  ];

  const challengesId = [
    `Perbedaan ritme pengambilan keputusan (${signA.nameId} vs ${signB.nameId})`,
    `Kecenderungan memaksakan cara pandang sendiri saat terjadi perdebatan panas`,
    `Kebutuhan ruang personal dan waktu sendiri yang berbeda intensitasnya`
  ];
  const challengesEn = [
    `Varying decision-making tempos between ${signA.nameEn} and ${signB.nameEn}`,
    `Risk of digging into stubborn positions during heated debates`,
    `Contrasting needs for solitary recharge time vs joint social activities`
  ];

  const adviceId = `Kunci utama hubungan ${signA.nameId} dan ${signB.nameId} adalah merayakan perbedaan, bukan mengubah pasangan. Luangkan waktu rutin untuk kencan tanpa distraksi gawai dan bicarakan perasaan secara terbuka sebelum tidur.`;
  const adviceEn = `The secret to lasting happiness for ${signA.nameEn} and ${signB.nameEn} lies in celebrating differences rather than trying to reshape each other. Dedicate weekly unplugged quality time and verbalize appreciation frequently.`;

  return {
    overallScore: overall,
    loveScore: love,
    communicationScore: comm,
    emotionalScore: emo,
    valuesScore: val,
    verdictId,
    verdictEn,
    summaryId,
    summaryEn,
    elementSynergyId,
    elementSynergyEn,
    strengthsId,
    strengthsEn,
    challengesId,
    challengesEn,
    adviceId,
    adviceEn,
    dynamicTagId,
    dynamicTagEn
  };
}
