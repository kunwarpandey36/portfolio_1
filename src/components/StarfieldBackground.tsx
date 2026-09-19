import React, { useMemo } from 'react';

interface StarProps {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  isSparkle?: boolean;
}

export const StarfieldBackground: React.FC = () => {
  // Generate deterministic stars across the page
  const stars: StarProps[] = useMemo(() => {
    const list: StarProps[] = [];
    const count = 75;
    for (let i = 0; i < count; i++) {
      // pseudo-random seed generator
      const pseudoRand = (seed: number) => {
        const x = Math.sin(seed + 1) * 10000;
        return x - Math.floor(x);
      };

      const top = pseudoRand(i * 17) * 100; // 0 to 100%
      const left = pseudoRand(i * 31) * 100;
      const size = pseudoRand(i * 43) > 0.8 ? 3 : pseudoRand(i * 43) > 0.4 ? 2 : 1.5;
      const opacity = 0.35 + pseudoRand(i * 59) * 0.6;
      const duration = 2.5 + pseudoRand(i * 73) * 4;
      const delay = pseudoRand(i * 89) * 3;
      const isSparkle = pseudoRand(i * 97) > 0.7;

      list.push({ id: i, top, left, size, opacity, duration, delay, isSparkle });
    }
    return list;
  }, []);

  // Neo-brutalist large sparkle stars (✦)
  const bigStars = [
    { top: '6%', left: '8%', color: '#facc15', size: 28, delay: '0s' },
    { top: '14%', left: '92%', color: '#38bdf8', size: 24, delay: '1.2s' },
    { top: '28%', left: '4%', color: '#f43f5e', size: 22, delay: '2.4s' },
    { top: '42%', left: '95%', color: '#4ade80', size: 26, delay: '0.7s' },
    { top: '56%', left: '6%', color: '#c084fc', size: 30, delay: '1.9s' },
    { top: '70%', left: '90%', color: '#facc15', size: 22, delay: '2.8s' },
    { top: '84%', left: '12%', color: '#38bdf8', size: 26, delay: '1.5s' },
    { top: '94%', left: '88%', color: '#f43f5e', size: 24, delay: '0.3s' },
  ];

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070712]"
      aria-hidden="true"
    >
      {/* 1. Subtle Cosmic Ambient Gradients (Cyan, Magenta, Violet glow orbs) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#38bdf8]/10 rounded-full blur-[140px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#c084fc]/10 rounded-full blur-[130px]" />
      <div className="absolute top-2/3 left-10 w-[550px] h-[550px] bg-[#f43f5e]/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-[#4ade80]/8 rounded-full blur-[150px]" />

      {/* 2. Micro Dot Starfield with Twinkle Animation */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white transition-opacity"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            boxShadow: s.size > 2 ? '0 0 8px 1px rgba(255,255,255,0.8)' : 'none',
            animation: `twinkleStar ${s.duration}s ease-in-out infinite alternate`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* 3. Neo-Brutalist 4-Point Sparkle Stars (✦) */}
      {bigStars.map((star, idx) => (
        <div
          key={idx}
          className="absolute select-none font-bold"
          style={{
            top: star.top,
            left: star.left,
            color: star.color,
            fontSize: `${star.size}px`,
            textShadow: `0 0 12px ${star.color}88, 2px 2px 0px #000`,
            animation: `pulseGlow 3s ease-in-out infinite alternate`,
            animationDelay: star.delay,
          }}
        >
          ✦
        </div>
      ))}

      {/* 4. Cosmic Grid Wireframe in background (retro-futuristic) */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};
