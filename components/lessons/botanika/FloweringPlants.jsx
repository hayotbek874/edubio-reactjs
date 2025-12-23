import React from 'react';

export const FloweringPlants = () => {
  return (
    <div className="flowering-plants-section animate-fade-in text-white">
      <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-400 mb-8">
          2-§. GULLI O’SIMLIKLAR BILAN UMUMIY TANISHUV
        </h1>

        <div className="flex flex-col gap-6">

          {/* 1. Atama: Turlar soni */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              Yer yuzida gulli o’simliklarning 250 mingdan ortiq turi ma’lum.
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Bu o’simliklar o’ziga xos belgilari bilan bir-biridan farq qiladi.
            </p>
          </div>

          {/* 2. Atama: Tuzilishi */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              Gulli o’simliklarning tuzilishi
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Gulli o’simliklarning hammasi ham o’z hayoti davomida gullab meva tugadi. 
              Ular quyidagi organlardan tashkil topgan bo’ladi:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-teal-200">
                <li>Ildiz</li>
                <li>Poya</li>
                <li>Barg</li>
                <li>Gul</li>
                <li>Meva</li>
              </ul>
            </p>
          </div>

          {/* 3. Atama: Ajoyib xossalar */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              Har bir o’simlik turining o’ziga xos ajoyib xossalari bor.
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              O’simliklarning xilma-xilligiga dunyo bo'ylab ko'plab misollar keltirish mumkin:
              <ul className="list-disc list-inside mt-2 ml-4 mb-4 space-y-2 text-gray-300">
                <li><strong className="text-white">Seyshel palmasi:</strong> O'n yillarda pishib yetiladigan, og’irligi 25 kg ga yetadigan yong’oqlari bor.</li>
                <li><strong className="text-white">Meksika kaktuslari:</strong> Tanasida 200 litrgacha suv saqlaydi.</li>
                <li><strong className="text-white">Ajdar daraxtlari:</strong> Kanar orollarida 6000 yilgacha umr ko’radi.</li>
                <li><strong className="text-white">Rafleziya:</strong> Sumatra orolidagi diametri 1 metrga yetadigan ulkan gul.</li>
              </ul>
              <span className="text-teal-400 font-semibold">O'zbekistondagi ajoyibotlar:</span>
              <br/>
              Saksovul, qandim, nilufar, suv qaroqchisi, lola, chakanda, isiriq, na’matak va boshqalar shular jumlasidandir.
            </p>
          </div>

          {/* 4. Atama: Ekologik moslashuv */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              Moslashuvchanlik va O'zgaruvchanlik
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Gulli o’simliklarning xilma-xilligi ekologik sharoitning o’zgarishi bilan bog’liq. 
              Ular million yillar mobaynida o’zgarib, yangi muhitga moslasha borgan. 
              Foydali belgilar irsiylashib (mustahkamlanib), yangi turlar, turkumlar va oilalar paydo bo’lgan.
            </p>
          </div>

          {/* 5. Atama: Vegetativ va Generativ organlar */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              O’simlik organlarining turlari
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
               {/* Vegetativ */}
               <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-500/30">
                  <h4 className="font-bold text-emerald-400 mb-2">1. Vegetativ organlar</h4>
                  <p className="text-sm text-gray-300 italic mb-2">(Lotincha «vegetatio» – o’sish, rivojlanish)</p>
                  <ul className="list-disc list-inside text-gray-200">
                    <li>Ildiz</li>
                    <li>Poya</li>
                    <li>Barg</li>
                  </ul>
               </div>

               {/* Generativ */}
               <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-blue-400 mb-2">2. Generativ organlar</h4>
                  <p className="text-sm text-gray-300 italic mb-2">(Lotincha «generate» – yaratmoq, ko'paymoq)</p>
                  <ul className="list-disc list-inside text-gray-200">
                    <li>Gul</li>
                    <li>Meva</li>
                    <li>Urug'</li>
                  </ul>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
