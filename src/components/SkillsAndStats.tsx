import React from 'react';
import { Code2, Terminal, Cpu, Award, Sparkles, CheckCircle2, Wrench, Infinity as InfinityIcon } from 'lucide-react';
import { skillsData } from '../data/cvData';
import { ScrollReveal } from './ScrollReveal';

export const SkillsAndStats: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#0a0a16]/95 border-b-[3px] border-black relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Stage Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#4ade80] border-2 border-black shadow-[3px_3px_0px_0px_#000] font-mono-neo text-xs font-black uppercase text-black">
            <InfinityIcon className="w-4 h-4 text-black" />
            <span>STAGE 03 • COSMIC TECH ARSENAL • GOING TO INFINITY</span>
          </span>
          <span className="font-mono-neo text-xs font-bold text-black bg-[#facc15] px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase hidden sm:inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Core Computer Science &amp; Hardware</span>
          </span>
        </div>

        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="mb-12">
            <h2 className="font-mono-neo text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <span>CODING &amp; TECH ARSENAL</span>
              <span className="text-[#f43f5e] text-2xl sm:text-3xl">✦</span>
            </h2>
            <p className="font-mono-neo text-stone-300 text-xs sm:text-sm font-semibold mt-1">
              Algorithmic problem solving, embedded robotics hardware, computer vision &amp; modern tooling
            </p>
          </div>
        </ScrollReveal>

        {/* STAT BLOCKS IN HIGH-CONTRAST VIBRANT COLORS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          
          {/* Stat 1: DSA Competitive Coding (MD: 5 cols) - Hot Coral */}
          <div className="md:col-span-5">
            <ScrollReveal direction="up" distance={35} delay={0.05}>
              <div 
                className="bg-[#fda4af] h-full border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 neo-bump flex flex-col justify-between"
                style={{
                  clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-neo text-xs font-black uppercase bg-black text-[#facc15] px-2.5 py-1">
                      Codeforces &amp; LeetCode
                    </span>
                    <Code2 className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-mono-neo text-4xl sm:text-5xl font-black text-black">
                      164
                    </span>
                    <span className="font-mono-neo text-sm font-black text-black uppercase bg-[#facc15] px-2 py-0.5 border border-black">
                      Total Solved
                    </span>
                  </div>
                  <div className="space-y-1.5 mt-2 bg-white/90 p-3 border-2 border-black font-mono-neo text-xs font-bold text-stone-900">
                    <div className="flex items-center justify-between">
                      <span>✦ 43 Questions on Codeforces</span>
                      <span className="font-black bg-black text-[#38bdf8] px-1.5 py-0.5 text-[11px]">Rating: 816</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>✦ 121 Questions on LeetCode</span>
                      <span className="font-black bg-black text-[#facc15] px-1.5 py-0.5 text-[11px]">Rating: 1287</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-mono-neo font-black">
                  <span className="text-black bg-white px-2 py-0.5 border border-black">C++ &amp; Python</span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://leetcode.com/u/kunwarpandey36/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-2 py-0.5 hover:bg-[#0284c7] transition-colors"
                    >
                      LeetCode
                    </a>
                    <span className="bg-[#facc15] text-black px-2 py-0.5 border border-black">
                      Codeforces
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Stat 2: ISRO Hackathon (MD: 4 cols) - Solar Gold */}
          <div className="md:col-span-4">
            <ScrollReveal direction="up" distance={35} delay={0.15}>
              <div className="bg-[#fef08a] h-full border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 neo-bump flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-neo text-xs font-black uppercase bg-black text-white px-2.5 py-1">
                      Space Research
                    </span>
                    <Cpu className="w-6 h-6 text-black" />
                  </div>
                  <div className="font-mono-neo text-3xl sm:text-4xl font-black text-black mb-1">
                    ISRO BAH
                  </div>
                  <p className="font-mono-neo text-xs sm:text-sm font-bold text-stone-900">
                    Project Cool Earth • Bharatiya Antariksh Hackathon '26 - AI &amp; Satellite Thermal Models.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-mono-neo font-black">
                  <span className="text-black bg-white px-2 py-0.5 border border-black">National Stage</span>
                  <span className="bg-black text-white px-2 py-0.5">4-Member Team • Member-1</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Stat 3: Academic Standing (MD: 3 cols) - Electric Cyan */}
          <div className="md:col-span-3">
            <ScrollReveal direction="up" distance={35} delay={0.25}>
              <div 
                className="bg-[#bae6fd] h-full border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 neo-bump flex flex-col justify-between"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-neo text-xs font-black uppercase bg-black text-white px-2.5 py-1">
                      NIT Silchar
                    </span>
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div className="font-mono-neo text-3xl sm:text-4xl font-black text-black mb-1">
                    6.87
                  </div>
                  <p className="font-mono-neo text-xs sm:text-sm font-bold text-stone-900">
                    B.Tech Cumulative GPA in Electronics &amp; Instrumentation.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-mono-neo font-black">
                  <span className="text-black bg-white px-2 py-0.5 border border-black">Batch 2024–2028</span>
                  <span className="bg-[#facc15] text-black px-2 py-0.5 border border-black">Pre-Final Year</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* SKILLS CARDS (Vibrant Multi-Color Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, idx) => {
            const bgs = ['bg-[#cffafe]', 'bg-[#fecdd3]', 'bg-[#bbf7d0]', 'bg-[#fef08a]'];
            const bgClass = bgs[idx % bgs.length];
            const items = category.content.split(',').map((s) => s.trim()).filter(Boolean);

            return (
              <ScrollReveal key={category.id} direction="up" distance={30} delay={idx * 0.1}>
                <div
                  className={`${bgClass} h-full border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 sm:p-7 neo-bump flex flex-col justify-between`}
                  style={{
                    clipPath:
                      idx % 2 === 0
                        ? 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'
                        : 'polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b-2 border-black">
                      <div className="flex items-center gap-2">
                        {idx === 0 && <Terminal className="w-5 h-5 text-black" />}
                        {idx === 1 && <Cpu className="w-5 h-5 text-black" />}
                        {idx === 2 && <Wrench className="w-5 h-5 text-black" />}
                        {idx === 3 && <CheckCircle2 className="w-5 h-5 text-black" />}
                        <h3 className="font-mono-neo text-lg sm:text-xl font-black text-black uppercase">
                          {category.label}
                        </h3>
                      </div>
                      <span className="font-mono-neo text-xs font-black text-black bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_#000]">
                        {items.length} Modules ✦
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-white text-black font-mono-neo text-xs sm:text-sm font-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-black hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-mono-neo font-black text-black">
                    <span>Verified Practical Application</span>
                    <span className="bg-black text-white px-2 py-0.5">READY</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
