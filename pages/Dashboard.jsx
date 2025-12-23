import React from 'react';

export const Dashboard = () => {
  return (
    // Scrollable container for the Dashboard content
    <div className="relative w-full h-full overflow-hidden bg-slate-900">
      
      {/* Background Image - Fixed position */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=2574&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover object-[40%_28%] animate-fade-in opacity-95"
          />
          {/* Gradients for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        
        {/* Header / Hero Section - Bottom aligned on Desktop */}
        <div className="w-full md:w-3/4 lg:w-1/2 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 text-left shadow-2xl animate-fade-in transition-all ring-1 ring-white/5 mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">EduBio</span>{' '}
            <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">Platformasi</span>
          </h1>
          <p className="text-gray-100 text-base md:text-lg font-medium leading-relaxed opacity-95 drop-shadow-md mb-6">
            Salom O'quvchilar! Platformaga xush kelibsiz.<br/>
            Biologiya fanini zamonaviy usulda, sun'iy intellekt yordamida o'rganing.
          </p>
        </div>
      </div>

      {/* Muallif imzosi - Only on Dashboard */}
      <div className="absolute bottom-4 right-4 z-50 pointer-events-none select-none">
        <span className="text-[10px] md:text-xs font-black tracking-[0.2em] font-sans uppercase opacity-90 drop-shadow-md">
          {/* Animated Pink Gradient */}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">MAXMUD</span>
          
          {/* Animated White/Silver Gradient */}
          <span className="bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] mx-0.5">JONOV</span> 
          
          {/* Animated Green Gradient */}
          <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] ml-1">HAYOTBEK</span>
        </span>
      </div>
    </div>
  );
};
