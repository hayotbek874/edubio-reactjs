import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, BookOpen } from 'lucide-react';
import { BotanikaIntro } from '../components/lessons/botanika/BotanikaIntro';
import { FloweringPlants } from '../components/lessons/botanika/FloweringPlants';
import { PlantLifeForms } from '../components/lessons/botanika/PlantLifeForms';
import { PlantCellStructure } from '../components/lessons/botanika/PlantCellStructure';
import { CellActivity } from '../components/lessons/botanika/CellActivity';
import { PlantTissues } from '../components/lessons/botanika/PlantTissues';
import { RootTypes } from '../components/lessons/botanika/RootTypes';
import { RootInternalStructure } from '../components/lessons/botanika/RootInternalStructure';

// Bo'limlar ro'yxati (kategoriyalar)
const categories = [
  { 
    title: "BOTANIKA", 
    id: "botanika", 
    color: "#10b981",
    gradient: "bg-gradient-to-br from-green-600 to-emerald-900",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80"
  },
  { 
    title: "ZOOLOGIYA", 
    id: "zoologiya", 
    color: "#3b82f6",
    gradient: "bg-gradient-to-br from-blue-600 to-indigo-900",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80"
  },
  { 
    title: "ODAM ANATOMIYASI", 
    id: "anatomiya", 
    color: "#ef4444",
    gradient: "bg-gradient-to-br from-red-600 to-rose-900",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
  },
  { 
    title: "BIOLOGIYA VA SITOLOGIYA", 
    id: "sitologiya", 
    color: "#8b5cf6",
    gradient: "bg-gradient-to-br from-purple-600 to-violet-900",
    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?w=800&q=80"
  },
  { 
    title: "UMUMIY BIOLOGIYA", 
    id: "umumiy", 
    color: "#f59e0b",
    gradient: "bg-gradient-to-br from-amber-500 to-orange-900",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
  },
  { 
    title: "BIOLOGIYA VA EKOLOGIYA", 
    id: "ekologiya", 
    color: "#14b8a6",
    gradient: "bg-gradient-to-br from-teal-600 to-cyan-900",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
  },
];

// To'liq Darslar Mundarijasi (Botanika uchun)
const lessonsData = {
  botanika: [
    // I bob. O‘simliklar dunyosi bilan umumiy tanishuv
    { id: 1, title: "1-§. Botanika – o‘simliklar haqidagi fan", duration: "O'qish", type: "reading", component: <BotanikaIntro /> },
    { id: 2, title: "2-§. Gulli o‘simliklar bilan umumiy tanishish", duration: "O'qish", type: "reading", component: <FloweringPlants /> },
    { id: 3, title: "3-§. O‘simliklarning hayotiy shakllari", duration: "O'qish", type: "reading", component: <PlantLifeForms /> },

    // II bob. Hujayra – hayotning asosi
    { id: 4, title: "4-§. O‘simlik hujayrasining tuzilishi", duration: "O'qish", type: "reading", component: <PlantCellStructure /> },
    { id: 5, title: "5-§. Hujayralarning hayotiy faoliyati", duration: "O'qish", type: "reading", component: <CellActivity /> },
    { id: 6, title: "6-§. O‘simlik to‘qimalari", duration: "O'qish", type: "reading", component: <PlantTissues /> },

    // III bob. Gulli o‘simliklarning vegetativ va generativ organlari
    { id: 7, title: "7-§. Ildiz turlari va tizimlari", duration: "O'qish", type: "reading", component: <RootTypes /> },
    { id: 8, title: "8-§. Ildizning ichki tuzilishi", duration: "O'qish", type: "reading", component: <RootInternalStructure /> },
    { id: 9, title: "9-§. Shakli o‘zgargan ildizlar", duration: "10 daqiqa" },
    { id: 10, title: "10-§. Novda", duration: "12 daqiqa" },
    { id: 11, title: "11-§. Poyalarning xilma-xilligi", duration: "15 daqiqa" },
    { id: 12, title: "12-§. Kurtak", duration: "10 daqiqa" },
    { id: 13, title: "13-§. Poyaning ichki tuzilishi", duration: "20 daqiqa" },
    { id: 14, title: "14-§. Novda tizimining shakllanishi", duration: "12 daqiqa" },
    { id: 15, title: "15-§. Barglarning tashqi tuzilishi", duration: "15 daqiqa" },
    { id: 16, title: "16-§. Oddiy va murakkab barglar", duration: "12 daqiqa" },
    { id: 17, title: "17-§. Novdada barglarning joylashishi", duration: "10 daqiqa" },
    { id: 18, title: "18-§. Barglarning ichki tuzilishi", duration: "18 daqiqa" },
    { id: 19, title: "19-§. Shakli o‘zgargan novdalar", duration: "15 daqiqa" },
    { id: 20, title: "20-§. Gul – o‘simliklarning generativ ko‘payish organi", duration: "20 daqiqa" },
    { id: 21, title: "21-§. Gullarning xilma-xilligi", duration: "15 daqiqa" },
    { id: 22, title: "22-§. To‘pgullar", duration: "18 daqiqa" },
    { id: 23, title: "23-§. Mevalar", duration: "15 daqiqa" },
    { id: 24, title: "24-§. Urug‘", duration: "12 daqiqa" },

    // IV bob. Gulli o‘simliklarning hayotiy faoliyati
    { id: 25, title: "25-§. O‘simliklarning mineral oziqlanishi. Ildiz bosimi. O‘g‘itlar", duration: "20 daqiqa" },
    { id: 26, title: "26-§. Poyada oziq moddalarning harakatlanishi", duration: "15 daqiqa" },
    { id: 27, title: "27-§. Barglarda organik moddalarning hosil bo‘lishi", duration: "18 daqiqa" },
    { id: 28, title: "28-§. O‘simliklarning nafas olishi. Moddalar almashinuvi", duration: "20 daqiqa" },
    { id: 29, title: "29-§. O‘simliklarning suv bug‘latishi", duration: "15 daqiqa" },
    { id: 30, title: "30-§. Kuz faslida o‘simliklar hayotida ro‘y beradigan o‘zgarishlar", duration: "12 daqiqa" },
    { id: 31, title: "31-§. O‘simliklarning ko‘payishi", duration: "15 daqiqa" },
    { id: 32, title: "32-§. Gullarning changlanishi", duration: "18 daqiqa" },
    { id: 33, title: "33-§. Gulli o‘simliklarning jinsiy ko‘payishi. Urug‘lanish", duration: "20 daqiqa" },
    { id: 34, title: "34-§. Meva va urug‘larning tarqalishi", duration: "15 daqiqa" },
    { id: 35, title: "35-§. Urug‘larning unib chiqishi", duration: "12 daqiqa" },
    { id: 36, title: "36-§. O‘simlik – yaxlit organizm", duration: "15 daqiqa" },
    { id: 37, title: "37-§. O‘simliklar dunyosiga ekologik omillarning ta’siri", duration: "18 daqiqa" },
    
    // V bob. O‘simliklar sistematikasi
    { id: 38, title: "38-§. O‘simliklar sistematikasi haqida tushuncha", duration: "15 daqiqa" },
    { id: 39, title: "39-§. Suvo‘tlar. Bir hujayrali yashil suvo‘tlar", duration: "12 daqiqa" },
    { id: 40, title: "40-§. Ko‘p hujayrali yashil suvo‘tlar", duration: "15 daqiqa" },
    { id: 41, title: "41-§. Qo‘ng‘ir va qizil suvo‘tlar bo‘limlari", duration: "15 daqiqa" },
    { id: 42, title: "42-§. Yo‘sinlar bo‘limi", duration: "18 daqiqa" },
    { id: 43, title: "43-§. Qirqbo‘g‘imlar bo‘limi", duration: "15 daqiqa" },
    { id: 44, title: "44-§. Qirqquloqlar bo‘limi", duration: "15 daqiqa" },
    { id: 45, title: "45-§. Ochiq urug‘li o‘simliklar bo‘limi. Archa", duration: "18 daqiqa" },
    { id: 46, title: "46-§. Yopiq urug‘li o‘simliklar haqida ma’lumotlar", duration: "15 daqiqa" },
    { id: 47, title: "47-§. Ra’nodoshlar oilasi", duration: "15 daqiqa" },
    { id: 48, title: "48-§. Karamdoshlar oilasi", duration: "15 daqiqa" },
    { id: 49, title: "49-§. Sho‘radoshlar oilasi", duration: "12 daqiqa" },
    { id: 50, title: "50-§. Gulxayridoshlar oilasi", duration: "15 daqiqa" },
    { id: 51, title: "51-§. Burchoqdoshlar (Dukkakdoshlar) oilasi", duration: "15 daqiqa" },
    { id: 52, title: "52-§. Ituzumdoshlar oilasi", duration: "15 daqiqa" },
    { id: 53, title: "53-§. Tokdoshlar oilasi", duration: "12 daqiqa" },
    { id: 54, title: "54-§. Qovoqdoshlar oilasi", duration: "15 daqiqa" },
    { id: 55, title: "55-§. Qoqio‘tdoshlar (Murakkabguldoshlar) oilasi", duration: "15 daqiqa" },
    { id: 56, title: "56-§. Loladoshlar oilasi", duration: "15 daqiqa" },
    { id: 57, title: "57-§. Piyozdoshlar oilasi", duration: "12 daqiqa" },
    { id: 58, title: "58-§. Bug‘doydoshlar (Boshoqdoshlar) oilasi", duration: "18 daqiqa" },
    { id: 59, title: "59-§. Yerda o‘simliklar dunyosining rivojlanishi", duration: "20 daqiqa" },
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
};

export const LessonsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedLesson(null);
  };

  const handleBackClick = () => {
    if (selectedLesson) {
      setSelectedLesson(null); // Agar dars ochilgan bo'lsa, ro'yxatga qaytish
    } else {
      setSelectedCategory(null); // Agar ro'yxatda bo'lsa, kategoriyalarga qaytish
    }
  };

  const handleLessonClick = (lesson) => {
    if (lesson.component) {
      setSelectedLesson(lesson);
    } else {
      alert("Bu dars uchun ma'lumot hali tayyorlanmoqda.");
    }
  };

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
        
        {/* VIEW 1: CATEGORIES GRID (HOME) */}
        {!selectedCategory ? (
          <>
            <div className="mb-10 text-center flex flex-col items-center border-b border-white/10 pb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-2 tracking-tight">
                O'quv Bo'limlari
              </h1>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl text-center">
                Biologiya fanining asosiy yo'nalishlari bo'yicha darslarni tanlang va o'rganishni boshlang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, index) => (
                <div 
                  key={index} 
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-40 flex flex-col items-center justify-center border border-white/10 ${cat.gradient}`}
                >
                   {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                      onError={(e) => {
                        e.target.style.display = 'none'; // Agar rasm yuklanmasa, gradient ko'rinadi
                      }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-wider uppercase z-10 text-center px-4 leading-tight drop-shadow-xl group-hover:scale-105 transition-transform duration-300">
                    {cat.title}
                  </h3>
                  
                  {/* Decorative line */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out z-10"
                    style={{ backgroundColor: cat.color }}
                  ></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* VIEW 2 & 3: LESSONS LIST OR LESSON CONTENT */
          <div className="animate-fade-in">
            {/* Header: Back Button & Title */}
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={handleBackClick}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                {selectedLesson ? selectedLesson.title : currentCategory?.title}
              </h2>
            </div>

            {/* If a lesson is selected, show its component */}
            {selectedLesson ? (
               <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-2 md:p-6 min-h-[500px]">
                  {selectedLesson.component}
               </div>
            ) : (
              /* LESSONS LIST VIEW */
              currentLessons.length > 0 ? (
                <div className="space-y-4">
                  {currentLessons.map((lesson, index) => (
                    <div 
                      key={lesson.id} 
                      onClick={() => handleLessonClick(lesson)}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white"
                          style={{ color: currentCategory?.color }}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-lg group-hover:text-teal-400 transition-colors">
                            {lesson.title}
                          </h4>
                          <p className="text-gray-400 text-sm flex items-center gap-2">
                            <BookOpen size={14} /> {lesson.type === 'reading' ? "O'qish" : "Dars"}
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
                <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10 border-dashed">
                  <p className="text-gray-400 text-lg">Bu bo'limda hozircha darslar mavjud emas.</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
