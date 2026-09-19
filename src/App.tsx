/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsAndStats } from './components/SkillsAndStats';
import { AboutAndEducation } from './components/AboutAndEducation';
import { ContactTogether } from './components/ContactTogether';
import { Footer } from './components/Footer';
import { StarfieldBackground } from './components/StarfieldBackground';
import { InfinityTracker } from './components/InfinityTracker';
import { infinityMusic, Track } from './utils/musicEngine';
import { Disc3, Volume2 } from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(infinityMusic.getCurrentTrack());

  // Automatically start music immediately on load and on user's first click/touch
  useEffect(() => {
    infinityMusic.initGlobalAutoTrigger();
    const unsub = infinityMusic.subscribe((playing, track) => {
      setIsPlaying(playing);
      setCurrentTrack(track);
    });
    return () => unsub();
  }, []);

  const handleGlobalInteraction = () => {
    if (!isPlaying) {
      infinityMusic.start();
    }
  };

  return (
    <div
      onClick={handleGlobalInteraction}
      onTouchStart={handleGlobalInteraction}
      className="min-h-screen text-black font-mono-neo antialiased selection:bg-black selection:text-[#facc15] relative overflow-x-clip cursor-default"
    >
      {/* Instant Audio Prompt if Browser Autoplay Policy required a click */}
      {!isPlaying && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            infinityMusic.start();
          }}
          className="fixed top-2.5 sm:top-3.5 left-1/2 -translate-x-1/2 z-50 bg-[#facc15] text-black px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] font-mono-neo text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer hover:bg-[#38bdf8] hover:translate-y-0.5 transition-all animate-bounce"
        >
          <Disc3 className="w-4 h-4 animate-spin text-black shrink-0" />
          <span>⚡ CLICK TO PLAY: {currentTrack.artist} - {currentTrack.title}</span>
          <Volume2 className="w-4 h-4 text-black shrink-0" />
        </button>
      )}

      {/* 1. Cosmic Starfield Background with Twinkling Stars & Subtle Nebular Light */}
      <StarfieldBackground />

      {/* 2. "GOING TO INFINITY" Interactive Scroll Tracker & Audio HUD */}
      <InfinityTracker />

      {/* 3. Neo-Brutalist Sticky Navbar with Infinity Meter & Audio Trigger */}
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section with Kunwar's Final Neo-Brutalist Frame & Infinity Theme */}
        <Hero />

        {/* Marquee infinite ticker bar with vibrant colors */}
        <MarqueeTicker />

        {/* Projects Showcase with Vibrant Multi-Color Bento Blocks */}
        <ProjectsGrid />

        {/* Coding & Tech Arsenal with 164 DSA & ISRO Achievements */}
        <SkillsAndStats />

        {/* Education & Achievements with Stepped Stellar Cards */}
        <AboutAndEducation />

        {/* Contact Banner with Infinite Horizon Call-To-Action */}
        <ContactTogether />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
