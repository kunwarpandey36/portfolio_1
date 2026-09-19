import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Infinity as InfinityIcon, Sparkles, Rocket, Volume2, VolumeX, Disc3, SkipForward } from 'lucide-react';
import { infinityMusic, Track } from '../utils/musicEngine';

export const InfinityTracker: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);
  const [warpStage, setWarpStage] = useState('STAGE 01: LAUNCH');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(infinityMusic.getCurrentTrack());
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const p = Math.min(100, Math.max(0, Math.round(v * 100)));
      setPercent(p);

      if (p < 25) {
        setWarpStage('STAGE 01: LAUNCH');
      } else if (p < 50) {
        setWarpStage('STAGE 02: ORBIT');
      } else if (p < 75) {
        setWarpStage('STAGE 03: ARSENAL');
      } else if (p < 95) {
        setWarpStage('STAGE 04: STELLAR');
      } else {
        setWarpStage('STAGE 05: INFINITY (∞)');
      }
    });

    const unsubMusic = infinityMusic.subscribe((playing, track, idx) => {
      setIsPlaying(playing);
      setCurrentTrack(track);
      setCurrentIndex(idx);
    });

    return () => {
      unsubscribe();
      unsubMusic();
    };
  }, [scrollYProgress]);

  const toggleMusic = () => {
    infinityMusic.toggle();
  };

  const playNext = () => {
    infinityMusic.next();
  };

  return (
    <>
      {/* 1. Ultra-thin Top Edge Reading Progress Rail with Cosmic Gradient */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-black/20 overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#38bdf8] via-[#facc15] to-[#f43f5e]"
          style={{ scaleX: smoothProgress, transformOrigin: '0%' }}
        />
      </div>

      {/* 2. Floating Neo-Brutalist HUD Badge: "GOING TO INFINITY" */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        {/* Track Name Floating Chip */}
        <div className="flex items-center gap-1.5 bg-black text-[#facc15] px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#000] font-mono-neo text-[10px] font-black uppercase tracking-wider">
          <Disc3 className={`w-3.5 h-3.5 text-[#38bdf8] ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="truncate max-w-[170px] sm:max-w-[260px]">
            [{currentIndex + 1}/{infinityMusic.getPlaylist().length}] {currentTrack.artist} - {currentTrack.title}
          </span>
        </div>

        {/* Quick Audio Controls with Music Wave and Next Button */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={toggleMusic}
            title={isPlaying ? 'Mute Music' : `Play ${currentTrack.artist} - ${currentTrack.title}`}
            className={`cursor-pointer group flex items-center gap-2 px-3 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] font-mono-neo text-xs font-black uppercase transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] ${
              isPlaying ? 'bg-[#4ade80] text-black' : 'bg-[#fee2e2] text-black'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 animate-bounce text-black" />
                <span>PLAYING</span>
                <div className="flex items-center gap-0.5 ml-1">
                  <span className="w-1 h-3 bg-black animate-pulse" />
                  <span className="w-1 h-4 bg-black animate-pulse delay-75" />
                  <span className="w-1 h-2 bg-black animate-pulse delay-150" />
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                <span>TAP TO PLAY</span>
              </>
            )}
          </button>

          {/* Next Song Button */}
          <button
            type="button"
            onClick={playNext}
            title={`Play Next Song (${infinityMusic.getPlaylist()[(currentIndex + 1) % infinityMusic.getPlaylist().length].artist} - ${infinityMusic.getPlaylist()[(currentIndex + 1) % infinityMusic.getPlaylist().length].title})`}
            className="cursor-pointer bg-[#facc15] hover:bg-black hover:text-[#facc15] text-black px-2.5 py-2 border-y-[3px] border-r-[3px] border-black shadow-[4px_4px_0px_0px_#000] font-mono-neo text-xs font-black uppercase flex items-center gap-1 transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000]"
          >
            <SkipForward className="w-4 h-4" />
            <span>NEXT</span>
          </button>
        </div>

        {/* Main "GOING TO INFINITY" Dashboard Pill */}
        <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-3 sm:p-3.5 flex items-center gap-3">
          {/* Animated Spinning Infinity Icon */}
          <div className="w-10 h-10 bg-[#facc15] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center shrink-0">
            <InfinityIcon className={`w-6 h-6 text-black ${percent > 90 ? 'animate-spin' : ''}`} />
          </div>

          <div className="font-mono-neo">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-black">
                GOING TO INFINITY
              </span>
              <span className="text-[10px] font-bold bg-[#e0f2fe] text-[#0284c7] px-1.5 py-0.2 border border-black">
                {warpStage}
              </span>
            </div>

            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xl sm:text-2xl font-black text-black leading-none">
                {percent >= 98 ? '∞' : `${percent}%`}
              </span>
              <span className="text-[11px] font-bold text-stone-600">
                {percent >= 98 ? 'WARP TRANSCENDED' : 'PROGRESS TO LIMIT'}
              </span>
            </div>
          </div>

          {/* Mini cosmic rocket indicator */}
          <div className="hidden sm:flex flex-col items-center pl-2 border-l-2 border-black/20 text-[#0284c7]">
            <Rocket className="w-4 h-4 animate-pulse" />
            <Sparkles className="w-3 h-3 text-yellow-500 mt-1" />
          </div>
        </div>
      </div>
    </>
  );
};
