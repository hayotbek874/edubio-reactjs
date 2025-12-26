import React, { useState } from 'react';
import { ArrowLeft, PlayCircle, BookOpen, Video, Box, PenTool, Play, ExternalLink, X } from 'lucide-react';
import { BotanikaIntro } from '../components/lessons/botanika/BotanikaIntro';
import { FloweringPlants } from '../components/lessons/botanika/FloweringPlants';
import { PlantLifeForms } from '../components/lessons/botanika/PlantLifeForms';
import { PlantCellStructure } from '../components/lessons/botanika/PlantCellStructure';
import { CellActivity } from '../components/lessons/botanika/CellActivity';
import { PlantTissues } from '../components/lessons/botanika/PlantTissues';
import { RootTypes } from '../components/lessons/botanika/RootTypes';
import { RootInternalStructure } from '../components/lessons/botanika/RootInternalStructure';
import { SeoHelmet } from '../components/SeoHelmet';

// YouTube ID sini ajratib olish funksiyasi
const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Asosiy Bo'limlar (Kategoriyalar)
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

// O'quv resurs turlari (Sub-menu)
const resourceTypes = [
  { id: 'lessons', title: "DARS MAVZULARI", icon: <BookOpen size={24} />, color: "bg-blue-500" },
  { id: 'videos', title: "VIDEO DARSLAR", icon: <Video size={24} />, color: "bg-red-500" },
  { id: '3d', title: "3D ANIMATSIYALAR", icon: <Box size={24} />, color: "bg-purple-500" },
  { id: 'quiz', title: "QUIZ TESTLAR", icon: <PenTool size={24} />, color: "bg-orange-500" },
];

// Darslar ma'lumotlari (Matnli)
const lessonsData = {
  botanika: [
    { id: 1, title: "1-§. Botanika – o‘simliklar haqidagi fan", duration: "O'qish", type: "reading", component: <BotanikaIntro /> },
    { id: 2, title: "2-§. Gulli o‘simliklar bilan umumiy tanishish", duration: "O'qish", type: "reading", component: <FloweringPlants /> },
    { id: 3, title: "3-§. O‘simliklarning hayotiy shakllari", duration: "O'qish", type: "reading", component: <PlantLifeForms /> },
    { id: 4, title: "4-§. O‘simlik hujayrasining tuzilishi", duration: "O'qish", type: "reading", component: <PlantCellStructure /> },
    { id: 5, title: "5-§. Hujayralarning hayotiy faoliyati", duration: "O'qish", type: "reading", component: <CellActivity /> },
    { id: 6, title: "6-§. O‘simlik to‘qimalari", duration: "O'qish", type: "reading", component: <PlantTissues /> },
    { id: 7, title: "7-§. Ildiz turlari va tizimlari", duration: "O'qish", type: "reading", component: <RootTypes /> },
    { id: 8, title: "8-§. Ildizning ichki tuzilishi", duration: "O'qish", type: "reading", component: <RootInternalStructure /> },
    { id: 9, title: "9-§. Shakli o‘zgargan ildizlar", duration: "10 daqiqa" },
    { id: 10, title: "10-§. Novda", duration: "12 daqiqa" },
    // ... qolgan darslar ...
  ],
  zoologiya: [],
  anatomiya: [],
};

// Video darslar ma'lumotlari
const videosData = {
  botanika: [
    { id: 1, title: "1-§. Botanika – o‘simliklar haqidagi fan", url: "https://www.youtube.com/embed/KVLR1aSp4cY" },
    { id: 2, title: "2-§. Gulli o‘simliklar bilan umumiy tanishish", url: "https://www.youtube.com/embed/qY3qfaJoVLA" },
    { id: 3, title: "3-§. O‘simliklarning hayotiy shakllari", url: "https://www.youtube.com/embed/mRY6tWD2kPs" },
    { id: 4, title: "4-§. O‘simlik hujayrasining tuzilishi", url: "https://www.youtube.com/embed/hZA-hSni4t4" },
    { id: 5, title: "5-§. Hujayralarning hayotiy faoliyati", url: "https://www.youtube.com/embed/LdNObOU0WCo" },
    { id: 6, title: "6-§. O‘simlik to‘qimalari", url: "https://www.youtube.com/embed/m5haqIW25cE" },
    { id: 7, title: "7-§. Ildiz turlari va tizimlari", url: "https://www.youtube.com/embed/AXzNdKfn9lg" },
    { id: 8, title: "8-§. Ildizning ichki tuzilishi", url: "https://www.youtube.com/embed/U2og8cIRSjI" },
    { id: 9, title: "9-§. Shakli o‘zgargan ildizlar", url: "https://www.youtube.com/embed/aepItCM7Qu0" },
    { id: 10, title: "10-§. Novda", url: "https://www.youtube.com/embed/EXbOcuFIDCA" },
    { id: 11, title: "11-§. Poyaning xilma-xilligi", url: "https://www.youtube.com/embed/ZCkhElQIkVo" },
    { id: 12, title: "12-§. Kurtak", url: "https://www.youtube.com/embed/4Lrvgc_tUZg" },
    { id: 13, title: "13-§. Poyaning ichki tuzilishi", url: "https://www.youtube.com/embed/Ds_jUa6ZD7k" },
    { id: 14, title: "14-§. Novda tizimining shakllanishi", url: "" },
    { id: 15, title: "15-§. Barglarning tashqi tuzilishi", url: "https://www.youtube.com/embed/WwmdkhLhI5Y" },
    { id: 16, title: "16-§. Oddiy va murakkab barglar", url: "https://www.youtube.com/embed/O0i7UKVM3BM" },
    { id: 17, title: "17-§. Novdada barglarning joylashishi", url: "https://www.youtube.com/embed/7fKp229HYTc" },
    { id: 18, title: "18-§. Barglarning ichki tuzilishi", url: "https://www.youtube.com/embed/jp16gTXCeVU" },
    { id: 19, title: "19-§. Shakli o‘zgargan novdalar", url: "https://www.youtube.com/embed/7qwa7VgiASo" },
    { id: 20, title: "20-§. Gul – o‘simliklarning generativ ko‘payish organi", url: "https://www.youtube.com/embed/AOJYhOApYU0" },
    { id: 21, title: "21-§. Gullarning xilma-xilligi", url: "https://www.youtube.com/embed/5WFmLUsgRvM" },
    { id: 22, title: "22-§. To‘pgullar", url: "https://www.youtube.com/embed/WjXVMSekcZQ" },
    { id: 23, title: "23-§. Mevalar", url: "https://www.youtube.com/embed/UOPX0rJx_-w" },
    { id: 24, title: "24-§. Urug‘", url: "https://youtu.be/Cpm09KI9IDs?si=iG6pzRC2QE9HRubT" },
    { id: 25, title: "25-§. O‘simliklarning mineral oziqlanishi. Ildiz bosimi. O‘g‘itlar", url: "https://youtu.be/Vh7YrgBUVf4?si=b4HiDNNfp7iA7krj" },
    { id: 26, title: "26-§. Poyada oziq moddalarning harakatlanishi", url: "https://youtu.be/TRHkOMbOTCk?si=aV0cGa4WN9UtWr41" },
    { id: 27, title: "27-§. Barglarda organik moddalarning hosil bo‘lishi", url: "https://youtu.be/8XB5I4ZFB5U?si=ZFnBbX-ZgEu3dByM" },
    { id: 28, title: "28-§. O‘simliklarning nafas olishi, oziqlanishi. O‘simliklarda moddalar almashinuvi", url: "https://youtu.be/pyRooYrAXc8?si=fmLwWFu3b5Sg4yLQ" },
    { id: 29, title: "29-§. O‘simliklarning suv bug‘latishi", url: "https://youtu.be/87vgU8uaU0k?si=v6yCbq0-pbhgFqf4" },
    { id: 30, title: "30-§. Kuz faslida o‘simliklar hayotida ro‘y beradigan o‘zgarishlar", url: "https://youtu.be/esE7pYl3_-s?si=dcuDJy4tKiYJY5XR" },
    { id: 31, title: "31-§. O‘simliklarning ko‘payishi", url: "https://youtu.be/NrdUGyMiino?si=pIPuYE35LGAz-dU3" },
    { id: 32, title: "32-§. Gullarning changlanishi", url: "https://youtu.be/J7N8y2HrBgY?si=VJCDeCNhlakJVRP4" },
    { id: 33, title: "33-§. Gulli o‘simliklarning jinsiy ko‘payishi. Urug‘lanish", url: "https://youtu.be/AOJYhOApYU0?si=Hhyw3rK4CykNulmI" },
    { id: 34, title: "34-§. Meva va urug‘larning tarqalishi", url: "https://youtu.be/quoaxEbb0J0?si=jroLak-3QbSbE2JW" },
    { id: 35, title: "35-§. Urug‘larning unib chiqishi", url: "https://youtu.be/4MpewyvK94c?si=RG_Z9SDbGywUYr5F" },
    { id: 36, title: "36-§. O‘simlik – yaxlit organizm", url: "https://youtu.be/KF78UDxmDU8?si=P0Yd-xrJ8M56g7X2" },
    { id: 37, title: "37-§. O‘simliklar dunyosiga ekologik omillarning ta’siri", url: "https://youtu.be/fDHRtOf8ld8?si=tR4iFnipdEkCXdTA" },
    { id: 38, title: "38-§. O‘simliklar sistematikasi haqida tushuncha", url: "https://youtu.be/KkqQJqkch_Y?si=v6lovbZbeufNRvhg" },
    { id: 39, title: "39-§. Suv o‘tlari. Bir hujayrali yashil suv o‘tlari", url: "https://youtu.be/Vn7rBgs-PYA?si=Pbm32fLyoKXorOI1" },
    { id: 40, title: "40-§. Ko‘p hujayrali yashil suv o‘tlari", url: "https://youtu.be/f1YoNGOJiLA?si=6ibv8sCyfXr0AQEj" },
    { id: 41, title: "41-§. Qo‘ng‘ir va qizil suv o‘tlar bo‘limlari", url: "https://youtu.be/w-CthR3BVjU?si=KsBgaya3roLjCraZ" },
    { id: 42, title: "42-§. Yo‘sinlar bo‘limi", url: "https://youtu.be/5sMUdNl1xIM?si=bnyG_4rGqPNi3Oqc" },
    { id: 43, title: "43-§. Qirqbo‘g‘imlar bo‘limi", url: "https://youtu.be/KL3anPaeYGg?si=0z3qoctf1G-R7Psa" },
    { id: 44, title: "44-§. Qirqquloqlar bo‘limi", url: "https://youtu.be/fgfzio3SWo8?si=HQYIJ2c8iAJr6tXx" },
    { id: 45, title: "45-§. Ochiq urug‘li o‘simliklar bo‘limi. Archa", url: "https://youtu.be/DIc5mhrXgKQ?si=CjqS5SDYrlvoKFrj" },
    { id: 46, title: "46-§. Yopiq urug‘li o‘simliklar haqida ma’lumotlar", url: "https://youtu.be/8BAv2becVeQ?si=D6ZXDdtrwS36KmLG" },
    { id: 47, title: "47-§. Ra’nodoshlar oilasi", url: "https://youtu.be/pbOyuAkH7C8?si=1NBW3PkbWaHA2RCw" },
    { id: 48, title: "48-§. Karamdoshlar oilasi", url: "https://youtu.be/6aSpMRBo92k?si=VidY6YLdIxSlFO7W" },
    { id: 49, title: "49-§. Sho‘radoshlar oilasi", url: "https://youtu.be/uzu_g5aWKt4?si=4NC7fkPUT-Pe1uOv" },
    { id: 50, title: "50-§. Gulxayridoshlar oilasi", url: "https://youtu.be/znoXnq7fHPc?si=ysQAM-Itp55s1gty" },
    { id: 51, title: "51-§. Burchoqdoshlar (Dukkakdoshlar) oilasi", url: "https://youtu.be/aXtDVkC1hak?si=bNCj1S9WuBEYNrQL" },
    { id: 52, title: "52-§. Ituzumdoshlar oilasi", url: "https://youtu.be/ZowmLUvrHCM?si=MhCIVv-lCsTMLZlJ" },
    { id: 53, title: "53-§. Tokdoshlar oilasi", url: "https://youtu.be/8i4h37IADUI?si=nr1rnv3GaneOa2bR" },
    { id: 54, title: "54-§. Qovoqdoshlar oilasi", url: "https://youtu.be/KHPFreRIfp4?si=xfwNxplWN7uwZmpM" },
    { id: 55, title: "55-§. Qoqi o‘tdoshlar (Murakkabguldoshlar) oilasi", url: "https://youtu.be/XzR1eWm3hiw?si=Ux7ItACruPLQVXG3" },
    { id: 56, title: "56-§. Loladoshlar oilasi", url: "https://youtu.be/EMRWag3ZUK0?si=A3lJuCe97NFIZU-P" },
    { id: 57, title: "57-§. Piyozdoshlar oilasi", url: "https://youtu.be/ajewLpebbrU?si=0o-i36cdex44Yf4s" },
    { id: 58, title: "58-§. Bug‘doydoshlar (Boshoqdoshlar) oilasi", url: "https://youtu.be/Of-J7Igi_bU?si=ogzQQdJMCj86DGAZ" },
    { id: 59, title: "59-§. Yerda o‘simliklar dunyosining rivojlanishi", url: "https://youtu.be/jRqu61E63Ig?si=8LrPnHYX1aSP2FfA" }
  ],
  zoologiya: [],
  anatomiya: [],
};

const VideoModal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  // YouTube embed URL formatiga o'tkazish
  const videoId = getYouTubeId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0` : videoUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl h-auto bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Modalni yopish"
        >
          <X size={24} />
        </button>
        <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};


export const LessonsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedResourceType, setSelectedResourceType] = useState(null); // 'lessons', 'videos', '3d', 'quiz'
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false); // YANGI: Video modalni boshqarish uchun state
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(''); // YANGI: Modalda ko'rsatiladigan video URL'i

  // Kategoriya (masalan, Botanika) tanlanganda
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedResourceType(null);
    setSelectedLesson(null);
    setShowVideoModal(false); // Modalni yopish
    setSelectedVideoUrl('');
  };

  // Resurs turi (masalan, Dars Mavzulari) tanlanganda
  const handleResourceTypeClick = (typeId) => {
    setSelectedResourceType(typeId);
    setSelectedLesson(null);
    setShowVideoModal(false); // Modalni yopish
    setSelectedVideoUrl('');
  };

  const handleBackClick = () => {
    if (showVideoModal) { // Agar video modal ochiq bo'lsa, uni yopamiz
      setShowVideoModal(false);
      setSelectedVideoUrl('');
    } else if (selectedLesson) {
      setSelectedLesson(null);
    } else if (selectedResourceType) {
      setSelectedResourceType(null);
    } else {
      setSelectedCategory(null);
    }
  };

  const handleLessonClick = (lesson) => {
    if (lesson.component) {
      setSelectedLesson(lesson);
    }
    else {
      alert("Bu dars uchun ma'lumot hali tayyorlanmoqda.");
    }
  };

  const handleVideoClick = (video) => {
    // Videoni to'g'ridan-to'g'ri YouTube saytida yangi tabda ochish O'rniga modalda ochamiz
    setSelectedVideoUrl(video.url);
    setShowVideoModal(true);
  };

  const currentCategory = categories.find(c => c.id === selectedCategory);
  const currentLessons = selectedCategory ? (lessonsData[selectedCategory] || []) : [];
  const currentVideos = selectedCategory ? (videosData[selectedCategory] || []) : [];

  return (
    <div className="w-full h-full min-h-screen bg-slate-900 overflow-y-auto no-scrollbar pb-20">
      <SeoHelmet 
        title={selectedLesson ? selectedLesson.title : selectedCategory ? `${currentCategory?.title} | Darslar` : "Darslar Bo'limi"}
        description="Biologiya fanining barcha bo'limlari: Botanika, Zoologiya, Anatomiya va boshqalar. Video darslar va matnli ma'lumotlar."
        keywords={`biologiya darslari, ${selectedCategory || 'botanika, zoologiya, anatomiya'}, video darslar, maktab darsliklari`}
      />
      
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
                        e.target.style.display = 'none'; 
                      }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg md:text-xl font-bold text-white tracking-wider uppercase z-10 text-center px-4 leading-tight drop-shadow-xl group-hover:scale-105 transition-transform duration-300">
                    {cat.title}
                  </h2>
                  
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
          /* SECTION VIEW */
          <div className="animate-fade-in">
            {/* Header: Back Button & Title */}
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={handleBackClick}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Orqaga qaytish"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                {selectedLesson ? selectedLesson.title : 
                 (selectedResourceType ? `${currentCategory?.title} - ${resourceTypes.find(r => r.id === selectedResourceType)?.title}` : currentCategory?.title)}
              </h2>
            </div>

            {/* VIEW 2: RESOURCE TYPES (SUB-MENU) */}
            {!selectedResourceType ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                  {resourceTypes.map((type) => (
                    <div 
                      key={type.id}
                      onClick={() => handleResourceTypeClick(type.id)}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 cursor-pointer hover:bg-white/10 transition-all hover:translate-x-2 group"
                    >
                       <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ${type.color} group-hover:scale-110 transition-transform`}>
                          {type.icon}
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{type.title}</h3>
                          <p className="text-gray-400 text-sm">
                            {type.id === 'lessons' ? "Nazariy ma'lumotlar va matnli darslar" : 
                             type.id === 'videos' ? "Videodarslar va tushuntirishlar" :
                             type.id === '3d' ? "Interaktiv 3D modellar" : "Bilimingizni sinash uchun testlar"}
                          </p>
                       </div>
                    </div>
                  ))}
               </div>
            ) : (
              /* VIEW 3: CONTENT LIST (LESSONS, VIDEOS, ETC) */
              <div className="animate-fade-in">
                 
                 {/* ------------- DARS MAVZULARI --------------- */}
                 {selectedResourceType === 'lessons' && (
                    selectedLesson ? (
                       /* LESSON DETAIL */
                       <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-2 md:p-6 min-h-[500px]">
                          {selectedLesson.component}
                       </div>
                    ) : (
                       /* LESSONS LIST */
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
                    )
                 )}

                 {/* ------------- VIDEO DARSLAR --------------- */}
                 {selectedResourceType === 'videos' && (
                    /* VIDEOS LIST */
                    currentVideos.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {currentVideos.map((video, index) => {
                            const videoId = getYouTubeId(video.url);
                            const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null;

                            return (
                              <div 
                                key={video.id} 
                                onClick={() => handleVideoClick(video)}
                                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:bg-white/10 transition-all hover:-translate-y-1"
                              >
                                 {/* Thumbnail Placeholder (or dynamic if available) */}
                                 <div className="h-44 relative flex items-center justify-center bg-black">
                                    {thumbnailUrl ? (
                                      <img 
                                        src={thumbnailUrl} 
                                        alt={video.title} 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        loading="lazy"
                                      />
                                    ) : (
                                      <div className="w-full h-full bg-black/40" /> 
                                    )}
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                           <PlayCircle size={20} fill="white" className="ml-1 text-white" /> {/* Changed ExternalLink to PlayCircle */}
                                        </div>
                                    </div>
                                    
                                 </div>
                                 <div className="p-4">
                                    <h4 className="text-white font-bold text-sm md:text-base mb-1 group-hover:text-teal-400 transition-colors line-clamp-2">
                                      {video.title}
                                    </h4>
                                    <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                                        <PlayCircle size={12} /> YouTube
                                    </p>
                                 </div>
                              </div>
                            );
                         })}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-2xl border border-white/10 border-dashed">
                         <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-red-500/20">
                            <Video size={40} className="text-red-400" />
                         </div>
                         <h3 className="text-2xl font-bold text-white mb-2">Videolar tez kunda...</h3>
                         <p className="text-gray-400 text-center max-w-md px-4">
                           Hozircha bu bo'limga videolar yuklanmagan. Iltimos, keyinroq tekshirib ko'ring.
                         </p>
                      </div>
                    )
                 )}

                 {/* ------------- 3D & QUIZ (Hozircha bo'sh) --------------- */}
                 {(selectedResourceType === '3d' || selectedResourceType === 'quiz') && (
                    <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-2xl border border-white/10 border-dashed">
                       <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${resourceTypes.find(r => r.id === selectedResourceType)?.color} bg-opacity-20`}>
                          {React.cloneElement(resourceTypes.find(r => r.id === selectedResourceType)?.icon, { size: 40, className: "text-white" })}
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-2">Tez kunda...</h3>
                       <p className="text-gray-400 text-center max-w-md px-4">
                         Ushbu bo'lim hozirda ishlab chiqilmoqda. Tez orada bu yerda qiziqarli {resourceTypes.find(r => r.id === selectedResourceType)?.title.toLowerCase()} paydo bo'ladi.
                       </p>
                    </div>
                 )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <VideoModal videoUrl={selectedVideoUrl} onClose={() => setShowVideoModal(false)} />
      )}
    </div>
  );
};
