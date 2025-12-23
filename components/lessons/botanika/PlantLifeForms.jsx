import React from 'react';

export const PlantLifeForms = () => {
  return (
    <div className="plant-life-forms-section animate-fade-in text-white">
      <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-400 mb-8">
          3-§. O’SIMLIKLARNING HAYOTIY SHAKLLARI
        </h1>

        <div className="flex flex-col gap-6">

          {/* 1. Atama: Hayotiy shakl ta'rifi */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              Hayotiy shakl nima?
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              O’simliklarning tashqi muhitga har xil shaklda moslashishi <span className="text-white font-semibold">hayotiy shakli</span> deyiladi.
              <br/>
              Gulli o’simliklar hayotiy shakllariga ko’ra quyidagi guruhlarga bo’linadi:
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-sm">Daraxt</span>
                <span className="px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-sm">Buta</span>
                <span className="px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-sm">Yarimbuta</span>
                <span className="px-3 py-1 rounded-full bg-teal-900/50 border border-teal-500/30 text-sm">O'tlar (1, 2 va ko'p yillik)</span>
            </div>
          </div>

          {/* Yog'ochlashgan o'simliklar bloki */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Daraxtlar */}
              <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 hover:bg-amber-900/30 transition-all">
                  <h3 className="font-bold text-amber-400 text-lg mb-2">1. Daraxtlar</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    Bitta yo’g’on yog’ochlashgan tanali, baquvvat ildizli va keng shox-shabballi, baland bo’yli ko’p yillik o’simliklar.
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    <strong className="text-amber-200">Misol:</strong> Olma, o’rik, yong’oq, qarag’ay, terak.
                  </p>
              </div>

              {/* Butalar */}
              <div className="bg-orange-900/20 border border-orange-700/30 rounded-xl p-4 hover:bg-orange-900/30 transition-all">
                  <h3 className="font-bold text-orange-400 text-lg mb-2">2. Butalar</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    Bir nechta yog’ochlashgan poya – tanaga ega ko’p yillik o’simliklar. Yangi novdalar ildizdagi kurtaklardan o'sib chiqadi.
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    <strong className="text-orange-200">Misol:</strong> Anor, limon, na’matak, zirk, nastarin.
                  </p>
              </div>

              {/* Yarimbutalar */}
              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-4 hover:bg-yellow-900/30 transition-all">
                  <h3 className="font-bold text-yellow-400 text-lg mb-2">3. Yarimbutalar</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    Poyasining pastki qismi yog’ochlashgan, yuqori yashil qismi qishda sovuq urib ketadigan o'simliklar.
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    <strong className="text-yellow-200">Misol:</strong> Izen, shuvoq, sarsazan (cho'l o'simliklari).
                  </p>
              </div>
          </div>

          {/* O't o'simliklar bloki */}
          <h3 className="text-xl font-bold text-teal-200 mt-4 border-b border-white/10 pb-2">O't o'simliklar</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* Ko'p yillik */}
               <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-4 hover:bg-green-900/30 transition-all">
                  <h3 className="font-bold text-green-400 text-lg mb-2">Ko’p yillik o’tlar</h3>
                  <p className="text-sm text-gray-300">
                    Yerusti qismi qishda qurib, bahorda o’sish kurtaklaridan yangi yosh novdalari o’sib chiqadi.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 border-t border-white/5 pt-2">
                    <strong className="text-green-200">Misol:</strong> Beda, ajriq, lola, yalpiz, gulsafsar.
                  </p>
               </div>

               {/* Ikki yillik */}
               <div className="bg-teal-900/20 border border-teal-700/30 rounded-xl p-4 hover:bg-teal-900/30 transition-all">
                  <h3 className="font-bold text-teal-400 text-lg mb-2">Ikki yillik o’tlar</h3>
                  <p className="text-sm text-gray-300">
                    1-yil: Vegetativ organlar va oziq to'playdi.<br/>
                    2-yil: Gullab, meva tugadi.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 border-t border-white/5 pt-2">
                    <strong className="text-teal-200">Misol:</strong> Sabzi, lavlagi, sholg’om.
                  </p>
               </div>

               {/* Bir yillik */}
               <div className="bg-cyan-900/20 border border-cyan-700/30 rounded-xl p-4 hover:bg-cyan-900/30 transition-all">
                  <h3 className="font-bold text-cyan-400 text-lg mb-2">Bir yillik o’tlar</h3>
                  <p className="text-sm text-gray-300">
                    Bir yil ichida urug’dan unib, o’sib, gullab, meva tugib, hayotini tugatadi.
                  </p>
                  <p className="text-xs text-gray-400 mt-2 border-t border-white/5 pt-2">
                    <strong className="text-cyan-200">Misol:</strong> Bug’doy, pomidor, qovun, g'o'za.
                  </p>
               </div>
          </div>

          {/* Xulosa */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors mt-4">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              Xulosa
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Shunday qilib, gulli o’simliklar hayotiy shakllariga ko’ra xilma-xil bo'lib, ular tashqi muhitga mukammal moslashgan. Daraxtlar qattiq sovuq va shamoldan himoyalanish xususiyatiga ega bo'lsa, o'tlar noqulay sharoitlarni (qishni) urug' yoki ildizpoya holida o'tkazadi.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
