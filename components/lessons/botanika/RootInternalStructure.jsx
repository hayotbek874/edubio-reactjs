import React from 'react';

export const RootInternalStructure = () => {
  return (
    <div className="root-internal-structure-section animate-fade-in text-white">
      <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-400 mb-8">
          8-§. ILDIZNING ICHKI TUZILISHI
        </h1>

        {/* Ildizning bo'ylama zonalari */}
        <div className="border border-white/10 rounded-xl p-6 bg-black/20 mb-6">
          <h3 className="text-lg md:text-xl font-bold text-emerald-300 mb-4 text-center">Ildizning bo'ylama zonalari</h3>
          <ol className="relative border-l-2 border-emerald-500/30 space-y-8 ml-4">
            {/* 1. Ildiz qinchasi */}
            <li className="ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-emerald-800 rounded-full ring-4 ring-emerald-900/50">
                    <span className="text-emerald-200 font-bold">1</span>
                </span>
                <h4 className="font-bold text-emerald-300">Ildiz qinchasi</h4>
                <p className="text-sm text-gray-300">Bo'linuvchi hujayralarni shikastlanishdan himoya qiladi.</p>
            </li>
            {/* 2. Bo'linish zonasi */}
            <li className="ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-emerald-800 rounded-full ring-4 ring-emerald-900/50">
                    <span className="text-emerald-200 font-bold">2</span>
                </span>
                <h4 className="font-bold text-emerald-300">Bo'linish zonasi</h4>
                <p className="text-sm text-gray-300">Hosil qiluvchi to'qima hujayralari tinmay bo'linadi, ildizning o'sishini ta'minlaydi.</p>
            </li>
            {/* 3. O'sish (cho'zilish) zonasi */}
            <li className="ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-emerald-800 rounded-full ring-4 ring-emerald-900/50">
                    <span className="text-emerald-200 font-bold">3</span>
                </span>
                <h4 className="font-bold text-emerald-300">O'sish (cho'zilish) zonasi</h4>
                <p className="text-sm text-gray-300">Hujayralar bo'linmaydi, lekin o'sib, cho'ziladi, ildizning yerga chuqur kirishiga yordam beradi.</p>
            </li>
             {/* 4. So'rish zonasi */}
            <li className="ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-emerald-800 rounded-full ring-4 ring-emerald-900/50">
                    <span className="text-emerald-200 font-bold">4</span>
                </span>
                <h4 className="font-bold text-emerald-300">So'rish zonasi</h4>
                <p className="text-sm text-gray-300">Ildiz tukchalari joylashgan. Tuproqdan suv va mineral moddalarni shimadi.</p>
            </li>
             {/* 5. O'tkazish zonasi */}
            <li className="ml-8">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-emerald-800 rounded-full ring-4 ring-emerald-900/50">
                    <span className="text-emerald-200 font-bold">5</span>
                </span>
                <h4 className="font-bold text-emerald-300">O'tkazish zonasi</h4>
                <p className="text-sm text-gray-300">Suv va mineral moddalarni poyaga, organik moddalarni ildizga o'tkazadi.</p>
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-6">
          {/* Ildiz tukchalari */}
          <div className="border border-white/10 rounded-xl p-6 bg-blue-900/10 hover:bg-blue-900/20 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-blue-300 mb-3">Ildiz tukchalari</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Har bir ildiz tukchasi – bitta uzun hujayradan iborat (yupqa qobiq, sitoplazma, yadro).
              <br/>
              <strong>Vazifasi:</strong> Tuproqdan suv va unda erigan oziq moddalarni shimish.
              <br/>
              <span className="text-gray-400 text-sm mt-2 block">Faoliyati 10–12 kun davom etadi, so'ng yangilari o'sib chiqadi. Bu jarayon uzluksizdir.</span>
            </p>
          </div>

          {/* Nafas olish va Chopiq */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
               <h3 className="font-bold text-green-400 mb-2">Ildizning nafas olishi</h3>
               <p className="text-sm text-gray-300">
                 Ildiz ham nafas oladi. Shuning uchun urug' yumshoq yerga ekiladi va hosil yetilguncha yer yumshatib (chopiq qilib) turiladi.
               </p>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4">
               <h3 className="font-bold text-yellow-400 mb-2">Ildizning o'sishi</h3>
               <p className="text-sm text-gray-300">
                 Ildiz bo'linish qismidagi hujayralar hisobiga bo'yiga o'sadi. Masalan, g'o'za ildizi kuniga 2-3 sm, yantoq ildizi esa 30 metrgacha chuqurlikka yetishi mumkin.
               </p>
            </div>
          </div>

          {/* Chilpish */}
          <div className="border border-white/10 rounded-xl p-6 bg-red-900/10 hover:bg-red-900/20 transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-red-300 mb-3">Chilpish (Pikirovka)</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Ildizning uchki qismi (bo'linish zonasi) chilpib (kesib) tashlansa, uning bo'yiga o'sishi to'xtaydi va yon ildizlar hosil bo'lishi kuchayadi.
              <br/>
              <strong className="text-red-200 mt-2 block">Ahamiyati:</strong> Bu usuldan dehqonchilikda pomidor, karam, qalampir kabi ekinlardan mo'l hosil olish uchun foydalaniladi.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
