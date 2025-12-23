import React from 'react';

export const CellActivity = () => {
  return (
    <div className="cell-activity-section animate-fade-in text-white">
      <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-400 mb-2">
          II BOB. HUJAYRA – HAYOTNING ASOSI
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-400 mb-8">
          5-§. HUJAYRALARNING HAYOTIY FAOLIYATI
        </h2>

        <div className="flex flex-col gap-6">

          {/* Harakat Kuzatuvi */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              1. Hujayra ichidagi harakat
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Tirik hujayralar ichidagi harakatni <strong>Elodeya</strong> o'simligi bargida mikroskop orqali kuzatish mumkin.
              <br/>
              Uning barglari shaffof bo'lgani uchun sitoplazmaning uzluksiz harakati aniq ko'rinadi.
            </p>
          </div>

          {/* Moddalar almashinuvi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-4">
                <h3 className="font-bold text-indigo-400 mb-2">Moddalar almashinuvi</h3>
                <p className="text-sm text-gray-300">
                  Hujayra qobig’idagi teshikchalar orqali oziq moddalar va kislorod bir hujayradan ikkinchisiga o'tadi.
                  <br/>
                  <span className="text-xs text-indigo-300 mt-2 block">
                    Tajriba: Bug'doy xamiri solingan sellofan xaltacha yodli suvga solinsa, ichkariga yod o'tib xamir ko'karadi. Bu qobiqning o'tkazuvchanligini isbotlaydi.
                  </span>
                </p>
             </div>
             
             <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                <h3 className="font-bold text-blue-400 mb-2">Nafas olish va Oziqlanish</h3>
                <p className="text-sm text-gray-300">
                  Har bir tirik hujayra nafas oladi va oziqlanadi. 
                  Bu jarayon quyosh nuri, suv, mineral moddalar va kislorod ishtirokida amalga oshadi.
                  <br/>
                  Tashqaridan kirgan moddalar qayta ishlanib, hayotiy zarur moddalarga aylanadi.
                </p>
             </div>
          </div>

          {/* O'sish va Rivojlanish */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
             <h3 className="text-lg md:text-xl font-bold text-amber-300 mb-4 text-center">
               Hujayraning o'sishi
             </h3>
             <div className="flex flex-col md:flex-row gap-6 items-center">
                 <div className="flex-1 text-gray-300 text-sm">
                    <p className="mb-2"><strong className="text-white">Yosh hujayra:</strong> Kichik bo'ladi, o'sgan sari kattalashadi.</p>
                    <p className="mb-2"><strong className="text-white">Qari hujayra:</strong> Vakuol katta joy egallaydi, qobig'i qalinlashadi. Vaqt o'tishi bilan sitoplazma va yadro yo'qolib, o'rni havo/suv bilan to'ladi va hujayra o'ladi.</p>
                 </div>
                 <div className="w-full md:w-1/3 bg-black/40 rounded-lg p-4 text-center border border-white/10">
                    <span className="text-4xl">🌱 ➡️ 🌳</span>
                    <p className="text-xs text-gray-400 mt-2">Niholning daraxtga aylanishi - hujayralar ko'payishi natijasidir.</p>
                 </div>
             </div>
          </div>

          {/* Hujayra Bo'linishi */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-6">
             <h3 className="text-lg md:text-xl font-bold text-teal-300 mb-4">
               Hujayraning bo'linishi (Ko'payish)
             </h3>
             <p className="text-gray-300 mb-4">
               Hamma hujayra ham bo'linavermaydi, asosan <strong>hosil qiluvchi to'qima</strong> hujayralari bo'linadi.
               <br/>
               Bu jarayonda <strong>Yadro</strong> asosiy rol o'ynaydi.
             </p>
             
             <div className="space-y-3">
                <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                   <span className="bg-teal-500 text-black font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
                   <p className="text-sm text-gray-300">Yadro kattalashadi va ikkiga bo'linadi.</p>
                </div>
                <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                   <span className="bg-teal-500 text-black font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span>
                   <p className="text-sm text-gray-300">Sitoplazmada to'siq paydo bo'lib, ona hujayrani ikkita yosh hujayraga ajratadi.</p>
                </div>
                <div className="flex items-start gap-3 bg-black/20 p-3 rounded-lg">
                   <span className="bg-teal-500 text-black font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs">3</span>
                   <p className="text-sm text-gray-300">Plastidalar teng taqsimlanadi. Yosh hujayralar o'sib, ona hujayra o'lchamiga yetgach, yana bo'linadi.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
