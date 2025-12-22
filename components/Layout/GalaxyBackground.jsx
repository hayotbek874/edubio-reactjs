
import React, { useMemo } from 'react';

export const GalaxyBackground = () => {
  // 1. Orqa fondagi umumiy koinot yulduzlari (Miltillovchi)
  const universeStars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1, // 1px dan 3px gacha
      delay: Math.random() * 5,
    }));
  }, []);

  // 2. Galaktika Zarrachalari (Spiral shaklida)
  const galaxyParticles = useMemo(() => {
    const particles = [];
    const particleCount = 400; // Yulduzlar soni
    const arms = 2; // Somon yo'li kabi 2 ta asosiy yeng
    const spiralTightness = 0.15; // Spiralning qanchalik zichligi

    for (let i = 0; i < particleCount; i++) {
      // Markazdan uzoqlashish (tasodifiy, lekin markazda zichroq)
      const r = Math.pow(Math.random(), 1.5) * 350; // Radius 0 dan 350px gacha
      
      // Qaysi yengda joylashishi
      const armIndex = i % arms;
      const armAngle = (armIndex * Math.PI * 2) / arms;

      // Spiral burchagi (radius kattalashgan sari burchak ham o'zgaradi)
      const spiralAngle = r * spiralTightness;
      
      // Yengdan chetga chiqish (tarqoqlik effekti)
      const scatter = (Math.random() - 0.5) * 50 * (r / 350 + 0.2); 

      const angle = armAngle + spiralAngle;

      const x = Math.cos(angle) * r + Math.cos(angle + Math.PI/2) * scatter;
      const y = Math.sin(angle) * r + Math.sin(angle + Math.PI/2) * scatter;

      // Rang berish (Markaz: Oq/Sariq, O'rta: Pushti, Chet: Ko'k)
      let color = '#ffffff';
      let size = Math.random() * 2 + 0.5;
      
      if (r < 50) {
        color = '#fffbeb'; // Markaz (Sariq-oq)
        size += 1;
      } else if (r < 180) {
        color = '#f0abfc'; // O'rta (Pushti-binafsha)
      } else {
        color = '#60a5fa'; // Chet (Moviy)
      }

      particles.push({
        id: `g-${i}`,
        x,
        y,
        size,
        color,
        opacity: Math.random() * 0.5 + 0.5
      });
    }
    return particles;
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      {/* Orqa fon yulduzlari */}
      {universeStars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-30 animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Aylanuvchi Galaktika Konteyneri */}
      <div className="absolute top-1/2 left-1/2 w-0 h-0 animate-spin-galaxy">
        
        {/* Galaktika Markazi (Kichik va zich yorug'lik) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange-100/10 blur-[30px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white blur-[5px] rounded-full z-10"></div>

        {/* Galaktika Yulduzlari */}
        {galaxyParticles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              transform: `translate(${p.x}px, ${p.y}px)`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              opacity: p.opacity
            }}
          />
        ))}
      </div>
      
      {/* Yengil vinyetka (burchaklarni qoraytirish) */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80"></div>
    </div>
  );
};
