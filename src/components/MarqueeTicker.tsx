import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'GOING TO INFINITY ∞',
    'FULL STACK WEB DEV (INFINITS)',
    'ROBOTICS & HARDWARE LINKAGES',
    'AI & MACHINE LEARNING',
    'DSA (43 CODEFORCES • 121 LEETCODE)',
    'ISRO BHARATIYA ANTARIKSH HACKATHON',
    'OPEN CV & COMPUTER VISION ATTENDANCE',
    'NIT SILCHAR ELECTRONICS & INSTRUMENTATION',
    'EMBEDDED ARDUINO & C++',
  ];

  return (
    <div className="w-full bg-[#facc15] text-black border-y-[3px] border-black py-3 overflow-hidden select-none shadow-[0px_4px_0px_0px_#000]">
      <div className="flex animate-marquee whitespace-nowrap font-mono-neo text-xs sm:text-sm font-black tracking-widest uppercase">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center mx-5">
            <span className="text-[#f43f5e] mr-3 font-bold text-base">✦</span>
            <span className="bg-black text-white px-2 py-0.5 border border-black shadow-[2px_2px_0px_0px_#000] hover:bg-white hover:text-black transition-colors">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
