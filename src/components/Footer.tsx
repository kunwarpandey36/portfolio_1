import React from 'react';
import { ArrowUp, Infinity as InfinityIcon } from 'lucide-react';
import { contactData } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#facc15] border-t-[3px] border-black py-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-neo">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-black">
          <InfinityIcon className="w-4 h-4 text-black" />
          <span>{contactData.name} • PRE-FINAL YEAR (BATCH 2024–2028) • NIT SILCHAR</span>
          <span>✦</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="cursor-pointer inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#38bdf8] hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all text-xs font-black uppercase tracking-wider"
        >
          <span>WARP TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
