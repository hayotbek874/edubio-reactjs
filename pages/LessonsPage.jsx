import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, BookOpen } from 'lucide-react';

// Bo'limlar ro'yxati (kategoriyalar)
const categories = [
  { title: "BOTANIKA", id: "botanika", color: "#10b981" },
  { title: "ZOOLOGIYA", id: "zoologiya", color: "#3b82f6" },
  { title: "ODAM ANATOMIYASI", id: "anatomiya", color: "#ef4444" },
  { title: "BIOLOGIYA VA SITOLOGIYA", id: "sitologiya", color: "#8b5cf6" },
  { title: "UMUMIY BIOLOGIYA", id: "umumiy", color: "#f59e0b" },
  { title: "BIOLOGIYA VA EKOLOGIYA", id: "ekologiya", color: "#14b8a6" },
];

// Darslar ma'lumotlari (Namuna uchun)
const lessonsData = {
  botanika: [
    { id: 1, title: "O'simlik hujayrasi", duration: "15 daqiqa" },
    { id: 2, title: "Ildiz tizimi va turlari", duration: "20 daqiqa" },
    { id: 3, title: "Barg tuzilishi va funksiyalari", duration: "18 daqiqa" },
    { id: 4, title: "Gullarning changlanishi", duration: "25 daqiqa" },
  ],
  zoologiya: [
    { id: 1, title: "Bir hujayrali hayvonlar", duration: "12 daqiqa" },
    { id: 2, title: "Bo'shliqichlilar tipi", duration: "16 daqiqa" },
    { id: 3, title: "Yassi chuvalchanglar", duration: "22 daqiqa" },
  ],
  anatomiya: [
    { id: 1, title: "Tirek-harakat tizimi", duration: "30 daqiqa" },
    { id: 2, title: "Qon aylanish tizimi", duration: "28 daqiqa" },
  ],
  // Boshqa bo'limlar uchun ham shunday davom ettirish mumkin...
};

export const LessonsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  // Tanlangan bo'lim ma'lumotlarini topish
  const currentCategory = categories.find(c => c.id === selectedCategory);
  const currentLessons = selectedCategory ? (lessonsData[selectedCategory] || []) : [];

  return (
    <div className="w-full h-full min-h-screen bg-slate-900 overflow-y-auto no-scrollbar pb-20">
      
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto w-full pt-10">
        
        {/* Agar bo'lim tanlanmagan bo'lsa (Asosiy ko'rinish) */}
        {!selectedCategory ? (
          <>
            {/* Page Header - Centered */}
            <div className="mb-10 text-center flex flex-col items-center border-b border-white/10 pb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-2 tracking-tight">
                O'quv Bo'limlari
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl text-center">
                Biologiya fanining asosiy yo'nalishlari bo'yicha darslarni tanlang va o'rganishni boshlang.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat, index) => (
                <div 
                  key={index} 
                  onClick={() => handleCategoryClick(cat.id)}
                  className="group relative bg-white overflow-hidden rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_25px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 cursor-pointer h-36 flex flex-col items-center justify-center border border-gray-100"
                >
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 tracking-wider uppercase z-10 text-center px-4 leading-tight group-hover:scale-105 transition-transform duration-300">
                    {cat.title}
                  </h3>
                  
                  {/* Top border highlight on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Agar bo'lim tanlangan bo'lsa (Darslar ro'yxati) */
          <div className="animate-fade-in">
            {/* Back Button & Title */}
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={handleBackClick}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                {currentCategory?.title}
              </h2>
            </div>

            {/* Lessons List */}
            {currentLessons.length > 0 ? (
              <div className="space-y-4">
                {currentLessons.map((lesson, index) => (
                  <div 
                    key={lesson.id} 
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-lg group-hover:text-teal-400 transition-colors">
                          {lesson.title}
                        </h4>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                          <BookOpen size={14} /> Dars
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm hidden md:inline">{lesson.duration}</span>
                      <PlayCircle className="text-gray-400 group-hover:text-teal-400 transition-colors" size={24} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10 border-dashed">
                <p className="text-gray-400 text-lg">Bu bo'limda hozircha darslar mavjud emas.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
