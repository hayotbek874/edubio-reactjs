import React from 'react';

export const PlantTissues = () => {
  return (
    <div className="plant-tissues-section animate-fade-in text-white">
      <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-400 mb-2">
          II BOB. HUJAYRA – HAYOTNING ASOSI
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-400 mb-8">
          6-§. O’SIMLIK TO’QIMALARI
        </h2>

        <div className="flex flex-col gap-6">

          {/* Intro */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/20 hover:bg-black/30 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-3">
              To'qima nima?
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Tuzilishi va vazifasi o’xshash bo’lgan hujayralar yig’indisiga <strong>to’qima</strong> deyiladi.
              <br/>
              O’simlikning har bir organi bir necha xil to’qimadan iborat.
            </p>
            <div className="mt-4 p-4 bg-indigo-900/20 border border-indigo-500/30 rounded-lg">
               <p className="text-sm text-gray-300">
                 <strong>Tarix:</strong> «To’qima» tushunchasini birinchi bo’lib <strong>1682-yilda N. Gryu</strong> «O’simliklar anatomiyasi» nomli kitobida fanga kiritgan.
               </p>
            </div>
          </div>

          {/* 1. Hosil qiluvchi to'qima */}
          <div className="border border-white/10 rounded-xl p-6 bg-emerald-900/10 hover:bg-emerald-900/20 transition-colors">
            <h3 className="text-xl font-bold text-emerald-400 mb-3">1. Hosil qiluvchi to’qima (Meristema)</h3>
            <p className="text-gray-300 text-sm mb-3">
              Tez-tez bo’linish xususiyatiga ega tirik hujayralar. O'simlikning o'sishini ta'minlaydi.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
               <li><strong>Uchki meristema:</strong> Novda va ildiz uchlarida (bo'yiga o'sish).</li>
               <li><strong>Yon meristema:</strong> Poya va ildiz ichida halqa shaklida (eniga o'sish/yo'g'onlashish).</li>
            </ul>
          </div>

          {/* 2. Asosiy to'qima */}
          <div className="border border-white/10 rounded-xl p-6 bg-blue-900/10 hover:bg-blue-900/20 transition-colors">
            <h3 className="text-xl font-bold text-blue-400 mb-3">2. Asosiy to’qima (Parenxima)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-black/20 p-3 rounded-lg">
                  <h4 className="font-bold text-blue-300 mb-1">Assimilyatsion (Xlorenxima)</h4>
                  <p className="text-xs text-gray-400">Yashil barg va novdalarda bo'ladi. Fotosintez jarayonini bajaradi.</p>
               </div>
               <div className="bg-black/20 p-3 rounded-lg">
                  <h4 className="font-bold text-blue-300 mb-1">Jamg'aruvchi</h4>
                  <p className="text-xs text-gray-400">Oziq modda, suv va havo to'playdi. Ildizmeva, tugunak, meva, urug' va kaktus tanasida bo'ladi.</p>
               </div>
            </div>
          </div>

          {/* 3. Qoplovchi to'qima */}
          <div className="border border-white/10 rounded-xl p-6 bg-amber-900/10 hover:bg-amber-900/20 transition-colors">
            <h3 className="text-xl font-bold text-amber-400 mb-3">3. Qoplovchi to’qima</h3>
            <p className="text-gray-300 text-sm mb-3">
              Organlarni tashqi tomondan qoplab, himoya qiladi.
            </p>
            <ul className="space-y-3">
               <li className="bg-black/20 p-3 rounded-lg border border-amber-500/20">
                  <strong className="text-amber-200 block">Epiderma:</strong>
                  <span className="text-gray-400 text-xs">Barg va yosh novdalarni qoplaydi. Ustida kutikula (mum) bo'lishi mumkin. Gaz almashinuvi uchun og'izchalari bor.</span>
               </li>
               <li className="bg-black/20 p-3 rounded-lg border border-amber-500/20">
                  <strong className="text-amber-200 block">Periderma va Po'stloq:</strong>
                  <span className="text-gray-400 text-xs">Poya va ildiz qarisganda epiderma o'rnini egallaydi. Po'kak (o'lik hujayra) issiq-sovuqdan saqlaydi.</span>
               </li>
            </ul>
          </div>

          {/* 4. O'tkazuvchi to'qima */}
          <div className="border border-white/10 rounded-xl p-6 bg-cyan-900/10 hover:bg-cyan-900/20 transition-colors">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">4. O’tkazuvchi to’qima</h3>
            <div className="flex flex-col md:flex-row gap-4">
               <div className="flex-1 bg-black/20 p-3 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-bold text-cyan-200 mb-1">Ksilema (Naylar)</h4>
                  <p className="text-xs text-gray-400">O'lik hujayralar. Ildizdan bargga suv va mineral tuzlarni tashiydi (Ko'tariluvchi oqim).</p>
               </div>
               <div className="flex-1 bg-black/20 p-3 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-200 mb-1">Floema (Elaksimon naylar)</h4>
                  <p className="text-xs text-gray-400">Tirik hujayralar. Bargdan boshqa organlarga organik moddalarni tashiydi (Tushuvchi oqim).</p>
               </div>
            </div>
          </div>

          {/* 5. Mexanik va Ajratuvchi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="border border-white/10 rounded-xl p-6 bg-red-900/10 hover:bg-red-900/20 transition-colors">
                <h3 className="text-xl font-bold text-red-400 mb-3">5. Mexanik to’qima</h3>
                <p className="text-gray-300 text-sm mb-2">Tayanch vazifasini bajaradi.</p>
                <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                   <li><strong>Kollenxima:</strong> Tirik, yosh novdalarda.</li>
                   <li><strong>Sklerenxima:</strong> O'lik, qattiq. Lub tolalari, yong'oq qobig'i, nok mag'zi (skleridlar).</li>
                </ul>
             </div>

             <div className="border border-white/10 rounded-xl p-6 bg-purple-900/10 hover:bg-purple-900/20 transition-colors">
                <h3 className="text-xl font-bold text-purple-400 mb-3">6. Ajratuvchi to’qima</h3>
                <p className="text-gray-300 text-sm">
                  Turli moddalarni ajratib chiqaradi.
                  <br/>
                  <span className="text-purple-200 text-xs mt-2 block">
                    Misollar: Efir moylari, kauchuk, nektar, smola, fitonsid.
                  </span>
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
