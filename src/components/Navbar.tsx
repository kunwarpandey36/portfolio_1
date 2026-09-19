import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { contactData } from '../data/cvData';
import { Infinity as InfinityIcon, Music, Volume2, Sparkles, SkipForward } from 'lucide-react';
import { infinityMusic, Track } from '../utils/musicEngine';

export const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(infinityMusic.getCurrentTrack());
  const [currentIndex, setCurrentIndex] = useState(infinityMusic.getCurrentIndex());
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      setScrollPercent(Math.min(100, Math.round(v * 100)));
    });
    return () => unsub();
  }, [scrollYProgress]);

  useEffect(() => {
    const unsub = infinityMusic.subscribe((playing, track, idx) => {
      setIsPlayingMusic(playing);
      setCurrentTrack(track);
      setCurrentIndex(idx);
    });
    return () => unsub();
  }, []);

  const toggleMusic = () => {
    infinityMusic.toggle();
  };

  const playNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    infinityMusic.next();
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b-[3px] border-black sticky top-0 z-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Brand Identity & Warp Factor */}
        <div className="flex items-center gap-3">
          <div
            onClick={() => scrollTo('hero')}
            className="cursor-pointer flex items-center gap-2 group"
          >
            {/* Solar Yellow Neo-Brutalist Logo Box */}
            <div className="w-9 h-9 bg-[#facc15] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-mono-neo font-black text-black group-hover:bg-[#f43f5e] group-hover:text-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_0px_#000] transition-all">
              <InfinityIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono-neo font-black text-base tracking-wider uppercase text-black leading-tight flex items-center gap-1">
                <span>{contactData.name.split(' ')[0]}</span>
                <span className="text-[#0284c7] text-xs">✦</span>
              </span>
              <span className="text-[10px] font-mono-neo font-bold text-stone-600 uppercase tracking-widest -mt-0.5">
                PORTFOLIO
              </span>
            </div>
          </div>

          {/* Dynamic Scroll Warp Badge */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-[#bae6fd] border-2 border-black font-mono-neo text-xs font-black shadow-[2px_2px_0px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span className="text-black">
              WARP: {scrollPercent}%
            </span>
          </div>
        </div>

        {/* Right: Navigation Links & Music Controls */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono-neo text-sm">
          {/* Section Shortcuts */}
          <div className="hidden md:flex items-center gap-5 mr-1 font-mono-neo text-xs tracking-wider">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="cursor-pointer text-black hover:text-[#0284c7] transition-colors uppercase font-bold"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollTo('skills')}
              className="cursor-pointer text-black hover:text-[#16a34a] transition-colors uppercase font-bold"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => scrollTo('about')}
              className="cursor-pointer text-black hover:text-[#f43f5e] transition-colors uppercase font-bold"
            >
              About
            </button>
          </div>

          {/* Music Controller (Play/Pause + Play Next) */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleMusic}
              title={isPlayingMusic ? `Mute ${currentTrack.artist}` : `Play ${currentTrack.artist} - ${currentTrack.title}`}
              className={`cursor-pointer font-mono-neo text-xs font-black px-2.5 sm:px-3 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all uppercase flex items-center gap-1.5 ${
                isPlayingMusic ? 'bg-[#4ade80] text-black' : 'bg-[#fee2e2] text-black'
              }`}
            >
              {isPlayingMusic ? (
                <>
                  <Volume2 className="w-4 h-4 animate-bounce text-black shrink-0" />
                  <span className="truncate max-w-[90px] sm:max-w-[130px]">
                    {currentTrack.artist}
                  </span>
                  <div className="hidden sm:flex items-center gap-0.5">
                    <span className="w-1 h-2.5 bg-black animate-pulse" />
                    <span className="w-1 h-3.5 bg-black animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-black animate-pulse delay-150" />
                  </div>
                </>
              ) : (
                <>
                  <Music className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="hidden sm:inline">PLAY MUSIC</span>
                </>
              )}
            </button>

            {/* Play Next Track Button */}
            <button
              type="button"
              onClick={playNext}
              title={`Play Next: ${infinityMusic.getPlaylist()[(currentIndex + 1) % infinityMusic.getPlaylist().length].artist} - ${infinityMusic.getPlaylist()[(currentIndex + 1) % infinityMusic.getPlaylist().length].title}`}
              className="cursor-pointer bg-[#facc15] hover:bg-black hover:text-[#facc15] text-black px-2 py-2 border-y-2 border-r-2 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all flex items-center gap-1 font-mono-neo text-[11px] font-black uppercase"
            >
              <SkipForward className="w-4 h-4" />
              <span className="hidden sm:inline">NEXT</span>
            </button>
          </div>

          {/* Contact CTA Button with Solar Yellow Pop */}
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="cursor-pointer font-mono-neo text-xs sm:text-sm font-bold bg-[#38bdf8] text-black px-3.5 sm:px-5 py-2 sm:py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#facc15] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all uppercase tracking-wider"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Infinity Gradient Progress Bar on Navbar Edge */}
      <div className="absolute bottom-[-3px] left-0 w-full h-[3px] bg-black/10 overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#38bdf8] via-[#facc15] to-[#f43f5e] origin-left"
          style={{ scaleX }}
        />
      </div>
    </nav>
  );
};
