
import React, { useMemo } from 'react';

export const BiologyBackground = () => {
  // 1. Zarrachalar (Chang/Molekulalar)
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  // 2. DNK Strukturasi uchun ma'lumotlar
  const dnaBasePairs = useMemo(() => {
    // 40 ta juftlik (zanjir uzunligi)
    return Array.from({ length: 40 }).map((_, i) => {
      // Ranglar palitrasi (Rasmga mos: Siyohrang, Ko'k, Yashil, Qizg'ish)
      const colors = [
        { outer: '#8b5cf6', inner: '#3b82f6' }, // Violet -> Blue
        { outer: '#10b981', inner: '#06b6d4' }, // Emerald -> Cyan
        { outer: '#ec4899', inner: '#f43f5e' }, // Pink -> Rose
        { outer: '#6366f1', inner: '#8b5cf6' }, // Indigo -> Violet
      ];
      
      const colorPair = colors[i % colors.length];

      return {
        id: i,
        rotation: i * 15, // Har bir qavat 15 gradusga buriladi (Spiral shakl)
        y: i * 16 - 300,  // Vertikal joylashuv (Markazlashtirish uchun offset)
        colorPair
      };
    });
  }, []);

  // Atom (Shar) stilini yaratish funksiyasi
  const getAtomStyle = (color, size) => ({
    width: `${size}px`,
    height: `${size}px`,
    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, ${color} 40%, #0f172a 100%)`,
    borderRadius: '50%',
    boxShadow: `0 0 10px ${color}80`, // Slight glow
  });

  return (
    <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden pointer-events-none">
      
      {/* --- Orqa fon gradienti --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0518] to-[#022c22] opacity-80"></div>

      {/* --- Suzib yuruvchi zarrachalar --- */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white blur-[1px]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float-particle ${p.duration}s infinite linear`,
          }}
        />
      ))}

      {/* --- KATTA 3D DNK MOLEKULASI --- */}
      <div className="absolute top-0 right-[-10%] md:right-[10%] h-full w-[300px] flex items-center justify-center perspective-dna">
        
        {/* Spiral Harakat Konteyneri (Tilt & Float) */}
        <div className="relative w-full h-full flex items-center justify-center animate-[dna-float_7s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Butun DNK zanjiri aylanadi (Spin) */}
          <div className="relative w-full h-full preserve-3d animate-[spin-dna_18s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 preserve-3d">
              {dnaBasePairs.map((pair) => (
                <div
                  key={pair.id}
                  className="absolute left-0 top-0 w-[200px] h-[20px] -ml-[100px] flex items-center justify-between preserve-3d"
                  style={{
                    transform: `translateY(${pair.y}px) rotateY(${pair.rotation}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Chap tomon (Backbone) */}
                  <div className="flex items-center transform -translate-x-1/2">
                    {/* Fosfat guruh (Katta shar) */}
                    <div style={getAtomStyle('#cbd5e1', 14)}></div>
                    {/* Kichik bog'lovchi shar */}
                    <div style={getAtomStyle(pair.colorPair.outer, 10)} className="-ml-1"></div>
                  </div>

                  {/* O'rta Bog'lamlar (Base Pairs - Tayoqchalar va Atomlar) */}
                  <div className="absolute left-[10px] right-[10px] h-[6px] top-1/2 -translate-y-1/2 flex items-center justify-center preserve-3d">
                    
                    {/* Chap tayoqcha */}
                    <div className="h-full w-1/2" style={{ background: `linear-gradient(90deg, ${pair.colorPair.outer}, ${pair.colorPair.inner})`, opacity: 0.8 }}></div>
                    
                    {/* O'rta Atomlar (Haqiqiy rasmga o'xshashlik uchun) */}
                    <div className="absolute flex gap-1">
                        <div style={getAtomStyle(pair.colorPair.inner, 8)}></div>
                        <div style={getAtomStyle(pair.colorPair.outer, 8)}></div>
                    </div>

                    {/* O'ng tayoqcha */}
                    <div className="h-full w-1/2" style={{ background: `linear-gradient(90deg, ${pair.colorPair.inner}, ${pair.colorPair.outer})`, opacity: 0.8 }}></div>
                  </div>

                  {/* O'ng tomon (Backbone) */}
                  <div className="flex items-center flex-row-reverse transform translate-x-1/2">
                    {/* Fosfat guruh (Katta shar) */}
                    <div style={getAtomStyle('#cbd5e1', 14)}></div>
                    {/* Kichik bog'lovchi shar */}
                    <div style={getAtomStyle(pair.colorPair.outer, 10)} className="-mr-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

       {/* --- Chap tomonda uzoqroqdagi xira DNK (Fonda) --- */}
       <div className="absolute top-0 left-[-15%] h-full w-[200px] opacity-20 blur-[2px] perspective-dna hidden md:flex items-center justify-center">
        <div className="relative w-full h-full preserve-3d animate-[spin-dna-reverse_25s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 preserve-3d">
             {dnaBasePairs.map((pair) => (
               <div
                key={`bg-${pair.id}`}
                className="absolute left-0 top-0 w-[120px] h-[20px] -ml-[60px] flex items-center justify-between"
                style={{
                  transform: `translateY(${pair.y * 1.5}px) rotateY(${pair.rotation}deg)`,
                }}
               >
                 <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                 <div className="h-[1px] w-full bg-emerald-500/30"></div>
                 <div className="w-3 h-3 rounded-full bg-cyan-500/50"></div>
               </div>
             ))}
          </div>
        </div>
      </div>

    </div>
  );
};