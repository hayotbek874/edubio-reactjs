import React from 'react';

export const RootTypes = () => {
  return (
    <div className="root-types-section animate-fade-in text-white">
      <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-400 mb-2">
          III BOB. GULLI O’SIMLIKLARNING VEGETATIV VA GENERATIV ORGANLARI
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-400 mb-8">
          7-§. ILDIZ TURLARI VA TIZIMLARI
        </h2>

        <div className="flex flex-col gap-6">

          {/* Ildiz ta'rifi */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              Ildiz nima?
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              <strong>Ildiz</strong> – yuksak o’simliklarning vegetativ organi bo’lib, o’simlikni tuproqqa biriktiradi, suv va mineral tuzlarni shimib, yer usti qismiga yetkazadi.
              <br/>
              <span className="text-gray-400 text-sm italic mt-2 block">
                Izoh: Ildiz novdadan farqli o'laroq barg hosil qilmaydi.
              </span>
            </p>
          </div>

          {/* Ildiz turlari */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4 hover:bg-amber-900/30 transition-all">
                <h3 className="font-bold text-amber-400 mb-2">1. Asosiy ildiz</h3>
                <p className="text-sm text-gray-300">
                  Urug'dagi murtak ildizchasidan rivojlanadi.
                </p>
             </div>
             <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 hover:bg-orange-900/30 transition-all">
                <h3 className="font-bold text-orange-400 mb-2">2. Qo'shimcha ildiz</h3>
                <p className="text-sm text-gray-300">
                  Poya yoki bargdan o'sib chiqadi.
                </p>
             </div>
             <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 hover:bg-yellow-900/30 transition-all">
                <h3 className="font-bold text-yellow-400 mb-2">3. Yon ildiz</h3>
                <p className="text-sm text-gray-300">
                  Asosiy va qo'shimcha ildizlardan shoxlanib chiqadi.
                </p>
             </div>
          </div>

          {/* Ildiz tizimlari */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
             <h3 className="text-lg md:text-xl font-bold text-teal-300 mb-4 text-center">
               Ildiz tizimlari (Sistemasi)
             </h3>
             <p className="text-center text-gray-400 text-sm mb-6">
               Bir tup o'simlikdagi barcha ildizlar yig'indisi <strong>ildiz tizimi</strong> deyiladi.
             </p>

             <div className="flex flex-col md:flex-row gap-6">
                
                {/* O'q ildiz */}
                <div className="flex-1 bg-black/30 rounded-xl p-4 border border-teal-500/30">
                   <h4 className="font-bold text-teal-200 mb-2 text-lg">1. O'q ildiz tizimi</h4>
                   <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                      <li>Asosiy ildiz yaqqol ko'zga tashlanadi (yaxshi rivojlangan).</li>
                      <li>Undan yon ildizlar o'sib chiqadi.</li>
                      <li><strong>Ikki urug'pallalilar</strong>ga xos.</li>
                   </ul>
                   <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs text-gray-400"><strong>Misollar:</strong> G'o'za, qovun, tarvuz, no'xat, loviya, terak, saksovul.</p>
                   </div>
                </div>

                {/* Popuk ildiz */}
                <div className="flex-1 bg-black/30 rounded-xl p-4 border border-cyan-500/30">
                   <h4 className="font-bold text-cyan-200 mb-2 text-lg">2. Popuk ildiz tizimi</h4>
                   <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                      <li>Asosiy ildiz bilinmaydi yoki erta qurib qoladi.</li>
                      <li>Ko'plab qo'shimcha va yon ildizlardan iborat (popuksimon).</li>
                      <li><strong>Bir urug'pallalilar</strong>ga xos.</li>
                   </ul>
                   <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs text-gray-400"><strong>Misollar:</strong> Bug'doy, makkajo'xori, arpa, piyoz.</p>
                   </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
