import React from 'react';

export const PlantCellStructure = () => {
  return (
    <div className="plant-cell-structure-section animate-fade-in text-white">
      <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-400 mb-2">
          II BOB. HUJAYRA – HAYOTNING ASOSI
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-400 mb-8">
          4-§. O’SIMLIK HUJAYRASINING TUZILISHI
        </h2>

        <div className="flex flex-col gap-6">

          {/* Intro */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              Hujayra – tiriklik asosi
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Tabiatdagi barcha tirik mavjudotlarning eng muhim umumiy belgisi – ularning hujayralardan tuzilganligidir.
              <br/>
              <strong>Hujayra</strong> – tirik organizmning eng mayda tarkibiy qismi bo'lib, u tiriklikka xos barcha xususiyatlarni o’zida mujassamlantirgan.
            </p>
          </div>

          {/* Sitologiya va Tarix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-4 hover:bg-indigo-900/30 transition-all">
               <h3 className="font-bold text-indigo-400 mb-2">Sitologiya</h3>
               <p className="text-sm text-gray-300">
                 Hujayraning tuzilishini o’rganadigan fan.
                 <br/>
                 (Yunoncha: <em>«sitos»</em> – hujayra, <em>«logos»</em> – ta’limot).
               </p>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 hover:bg-purple-900/30 transition-all">
               <h3 className="font-bold text-purple-400 mb-2">Kashfiyot</h3>
               <p className="text-sm text-gray-300">
                 Hujayra ingliz fizigi <strong>Robert Guk</strong> tomonidan <strong>1665-yilda</strong> kashf etilgan.
               </p>
            </div>
          </div>

          {/* Hujayra tuzilishi - Asosiy qismlar */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20">
             <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-4 text-center">
               Hujayraning asosiy tarkibiy qismlari
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Qobiq */}
                <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/20 hover:bg-emerald-900/30 transition-all">
                   <h4 className="font-bold text-emerald-400">1. Hujayra qobig’i</h4>
                   <p className="text-sm text-gray-300 mt-2">
                     Kletchatkadan iborat, tiniq va mustahkam. Hujayrani himoya qiladi va shakl beradi.
                   </p>
                </div>

                {/* Sitoplazma */}
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20 hover:bg-blue-900/30 transition-all">
                   <h4 className="font-bold text-blue-400">2. Sitoplazma</h4>
                   <p className="text-sm text-gray-300 mt-2">
                     Asosiy tarkibiy qism. Rangsiz, tiniq, suyuq yoki shilimshiq, doimo harakatda.
                   </p>
                </div>

                {/* Yadro */}
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/20 hover:bg-red-900/30 transition-all">
                   <h4 className="font-bold text-red-400">3. Yadro</h4>
                   <p className="text-sm text-gray-300 mt-2">
                     Eng muhim qism. Ko'payish va irsiy belgilarni saqlashda rol o'ynaydi.
                   </p>
                </div>
             </div>
          </div>

          {/* Plastidalar va Vakuol */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-xl p-4 bg-white/5 hover:bg-white/10 transition-all">
                 <h3 className="font-bold text-yellow-400 mb-2">Plastidalar (3 xil)</h3>
                 <ul className="space-y-2 text-sm text-gray-300">
                    <li><strong className="text-green-400">Xloroplastlar:</strong> Yashil, fotosintez jarayoni boradi.</li>
                    <li><strong className="text-orange-400">Xromoplastlar:</strong> Qizil/Sariq, gul va mevaga rang beradi.</li>
                    <li><strong className="text-gray-400">Leykoplastlar:</strong> Rangsiz, zaxira modda saqlaydi.</li>
                 </ul>
                 <p className="text-xs text-gray-400 mt-2 italic">Izoh: Zamburug’ va bakteriyalarda plastida bo'lmaydi.</p>
              </div>

              <div className="border border-white/10 rounded-xl p-4 bg-white/5 hover:bg-white/10 transition-all">
                 <h3 className="font-bold text-cyan-400 mb-2">Vakuol</h3>
                 <p className="text-sm text-gray-300 leading-relaxed">
                   Sitoplazma ichidagi shira bilan to'lgan bo'shliq.
                   <br/>
                   <span className="block mt-2 text-xs text-gray-400">
                     Tarkibi: 70–95% suv, mineral va organik moddalar (shakar, kislota, oqsil). Bu mevaning ta'mini (shirin, nordon, achchiq) belgilaydi.
                   </span>
                 </p>
              </div>
          </div>

          {/* Xilma-xillik va Tarkib */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
             <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                   <h3 className="font-bold text-teal-300 mb-2">Xilma-xillik</h3>
                   <p className="text-sm text-gray-300">
                     Hujayralar shakli (yumaloq, cho'ziq, qirrali) va o'lchami bilan farqlanadi. 
                     Masalan, chigit tolasi bitta hujayra bo'lib, uzunligi 3-4 sm ga yetadi.
                     <br/>
                     O'simliklar <strong>bir hujayrali</strong> (xlorella) va <strong>ko'p hujayrali</strong> bo'lishi mumkin.
                   </p>
                </div>
                <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                   <h3 className="font-bold text-teal-300 mb-2">Kimyoviy tarkib</h3>
                   <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                      <li><strong>Anorganik moddalar:</strong> Suv, mineral tuzlar.</li>
                      <li><strong>Organik moddalar:</strong> Oqsil, uglevod, yog'lar.</li>
                   </ul>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
