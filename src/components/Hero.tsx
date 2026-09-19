import React from 'react';
import { contactData } from '../data/cvData';
import { ScrollReveal } from './ScrollReveal';
import { ProfilePhoto } from './ProfilePhoto';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  ArrowUpRight, 
  Sparkles,
  Infinity as InfinityIcon,
  Cpu,
  Flame
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-6 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      {/* Infinity Mission Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#facc15] border-2 border-black shadow-[3px_3px_0px_0px_#000] font-mono-neo text-xs font-black uppercase text-black">
          <InfinityIcon className="w-4 h-4 text-black animate-spin" />
          <span>STAGE 01 • LAUNCH TRAJECTORY • GOING TO INFINITY</span>
        </span>
        <span className="font-mono-neo text-xs font-bold text-black bg-[#38bdf8] px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase hidden sm:inline-flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>Cosmic Infinity Protocol</span>
        </span>
      </div>

      <ScrollReveal>
        {/* Main Hero Container with High-Contrast Neo-Brutalist Frame */}
        <div className="relative bg-white border-[3px] border-black shadow-[10px_10px_0px_0px_#000] p-6 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Decorative Corner Sparkle */}
          <div className="absolute top-2 right-2 text-2xl font-black text-[#facc15] select-none pointer-events-none">
            ✦
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Intro & Headline (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill with Solar Yellow & Neon Emerald */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4ade80] border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                  <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
                  <span className="font-mono-neo text-xs font-black uppercase tracking-wider text-black">
                    Active for Software &amp; AI Engineering
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#fee2e2] border-2 border-black text-xs font-mono-neo font-bold text-red-700">
                  <Flame className="w-3.5 h-3.5 text-red-600" />
                  <span>NIT Silchar (2024–2028)</span>
                </div>
              </div>

              {/* Dynamic Headline with High-Impact Pop Colors */}
              <div className="space-y-2">
                <h1 className="font-mono-neo text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-black uppercase">
                  Hi, I'm <br className="hidden sm:inline" />
                  <span className="bg-[#facc15] px-2.5 py-0.5 border-2 border-black shadow-[5px_5px_0px_0px_#000] text-black inline-block mt-1">
                    {contactData.name}
                  </span>
                </h1>
                <p className="font-mono-neo text-base sm:text-lg text-stone-900 font-bold pt-2 leading-relaxed max-w-xl">
                  {contactData.tagline}. Pre-final year Electronics &amp; Instrumentation undergraduate at{' '}
                  <span className="font-black bg-[#38bdf8] px-1.5 py-0.5 border border-black inline-block">
                    NIT Silchar
                  </span>
                  .
                </p>
              </div>

              {/* Bio Highlights with Pastel Purple Border */}
              <p className="font-mono-neo text-xs sm:text-sm text-stone-900 font-semibold leading-relaxed max-w-xl bg-[#f5f3ff] p-4 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                {contactData.summary}
              </p>

              {/* Action Buttons & Socials with Vibrant Colors */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="cursor-pointer inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 font-mono-neo text-sm font-black border-2 border-black shadow-[5px_5px_0px_0px_#000] hover:bg-[#f43f5e] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all uppercase tracking-wider"
                >
                  <span>Explore Builds</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={contactData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  className="w-12 h-12 bg-[#cffafe] text-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href={contactData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="w-12 h-12 bg-[#fef08a] text-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href={`mailto:${contactData.email}`}
                  title="Send Email"
                  className="w-12 h-12 bg-[#fbcfe8] text-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Profile Card with Kunwar's Photo (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden">
                
                {/* Photo Frame Header with Neon Controls */}
                <div className="bg-black text-white px-4 py-2 border-b-2 border-black flex items-center justify-between font-mono-neo text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#facc15] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] inline-block" />
                  </div>
                  <span className="text-[#facc15] font-black uppercase tracking-wider flex items-center gap-1">
                    <span>✦ kunwar.exe</span>
                  </span>
                </div>

                {/* Profile Photo Display with Real Portrait */}
                <div className="p-4 bg-[#f8fafc] border-b-2 border-black space-y-4">
                  <ProfilePhoto />

                  {/* Name & Academic Meta in Vibrant Yellow */}
                  <div className="bg-[#fef08a] border-2 border-black p-3 shadow-[3px_3px_0px_0px_#000]">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono-neo text-lg font-black text-black uppercase">
                        Kunwar Pandey
                      </h3>
                      <span className="px-2 py-0.5 bg-black text-white text-[10px] font-mono-neo font-black">
                        CGPA 6.87
                      </span>
                    </div>
                    <p className="font-mono-neo text-xs text-red-700 font-black uppercase mt-0.5">
                      B.Tech E&amp;I • NIT Silchar (2024–2028)
                    </p>
                  </div>

                  {/* Quick stats badges: DSA & Infinits Portal Project */}
                  <div className="grid grid-cols-2 gap-2 text-center font-mono-neo text-xs">
                    <div className="bg-[#cffafe] border-2 border-black p-2 shadow-[2px_2px_0px_0px_#000]">
                      <span className="block text-red-600 font-black text-sm">164 Solved</span>
                      <span className="text-stone-700 text-[11px] font-bold">DSA Problems</span>
                    </div>
                    <a
                      href="https://infinits.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#bbf7d0] border-2 border-black p-2 shadow-[2px_2px_0px_0px_#000] hover:bg-[#4ade80] transition-colors block group cursor-pointer"
                      title="Open Infinits Portal Project"
                    >
                      <span className="block text-emerald-950 font-black text-sm uppercase group-hover:underline">
                        INFINITS
                      </span>
                      <span className="text-stone-800 text-[11px] font-black uppercase flex items-center justify-center gap-0.5">
                        Live Portal ↗
                      </span>
                    </a>
                  </div>
                </div>

                {/* Terminal status bar */}
                <div className="p-3 bg-[#fdf2f8] flex items-center justify-between text-xs font-mono-neo">
                  <span className="inline-flex items-center gap-1.5 font-black text-black">
                    <Terminal className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>C++ / Python / AI / ROS</span>
                  </span>
                  <span className="text-emerald-700 font-black bg-white px-2 py-0.5 border border-black">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
