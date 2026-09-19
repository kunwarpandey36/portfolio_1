import React from 'react';
import { GraduationCap, Trophy, ShieldCheck, Flame, Sparkles, Infinity as InfinityIcon } from 'lucide-react';
import { educationData, certificationData, extracurricularData, responsibilityData } from '../data/cvData';
import { ScrollReveal } from './ScrollReveal';

export const AboutAndEducation: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0d0d1c]/95 border-b-[3px] border-black relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Stage Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f43f5e] border-2 border-black shadow-[3px_3px_0px_0px_#000] font-mono-neo text-xs font-black uppercase text-white">
            <InfinityIcon className="w-4 h-4 text-white" />
            <span>STAGE 04 • STELLAR FOUNDATIONS • GOING TO INFINITY</span>
          </span>
          <span className="font-mono-neo text-xs font-bold text-black bg-[#facc15] px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase hidden sm:inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Academic Excellence &amp; Leadership</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Education Column (7 Cols) - Vibrant Stepped Cards */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" distance={30}>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-[#facc15]" />
                <h2 className="font-mono-neo text-3xl sm:text-4xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <span>ACADEMICS &amp; DEGREES</span>
                  <span className="text-[#38bdf8] text-2xl">✦</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {educationData.map((edu, idx) => {
                const bgs = ['bg-[#86efac]', 'bg-[#fef08a]', 'bg-[#fecdd3]'];
                const cardBg = bgs[idx % bgs.length];

                return (
                  <ScrollReveal key={edu.id} direction="up" distance={35} delay={idx * 0.1}>
                    <div
                      className={`border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 neo-bump relative ${cardBg}`}
                      style={{
                        clipPath: idx === 0 
                          ? 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)' 
                          : idx === 1 
                          ? 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
                          : 'polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)'
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                        <h3 className="font-mono-neo text-lg sm:text-xl font-black text-black uppercase">
                          {edu.institution}
                        </h3>
                        <span className="font-mono-neo text-xs font-black text-black bg-white border border-black px-2 py-0.5 self-start shadow-[1px_1px_0px_0px_#000]">
                          {edu.location}
                        </span>
                      </div>

                      <div className="font-mono-neo text-sm font-bold text-stone-900 mb-3">
                        {edu.degreeOrGrade}
                      </div>

                      <div className="flex items-center justify-between font-mono-neo text-xs font-black pt-2.5 border-t-2 border-black">
                        <span className="text-black bg-white px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                          {edu.score}
                        </span>
                        <span className="text-white bg-black px-2.5 py-1 border border-black shadow-[2px_2px_0px_0px_#000]">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Certifications & Leadership Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" distance={30} delay={0.15}>
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-[#f43f5e]" />
                <h2 className="font-mono-neo text-3xl sm:text-4xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <span>HONORS &amp; IMPACT</span>
                  <span className="text-[#facc15] text-2xl">✦</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Certifications Box in Electric Cyan */}
            <ScrollReveal direction="up" distance={35} delay={0.2}>
              <div 
                className="bg-[#cffafe] border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 neo-bump"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                }}
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-black">
                  <ShieldCheck className="w-5 h-5 text-black" />
                  <h3 className="font-mono-neo text-base font-black text-black uppercase">
                    Certifications &amp; Finance
                  </h3>
                </div>
                <div className="space-y-3">
                  {certificationData.map((cert) => (
                    <div key={cert.id} className="bg-white p-3.5 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div className="font-mono-neo text-xs font-black text-black uppercase mb-1">
                        {cert.title}
                      </div>
                      <p className="text-xs font-mono-neo text-stone-800 font-medium leading-snug">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Extracurricular Leadership Box in Lavender */}
            <ScrollReveal direction="up" distance={35} delay={0.25}>
              <div className="bg-[#e9d5ff] border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 neo-bump">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-black">
                  <Flame className="w-5 h-5 text-black" />
                  <h3 className="font-mono-neo text-base font-black text-black uppercase">
                    Campus Leadership &amp; Hackathons
                  </h3>
                </div>
                <div className="space-y-3">
                  {responsibilityData.map((resp) => (
                    <div key={resp.id} className="bg-white p-3.5 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div className="font-mono-neo text-xs font-black text-black uppercase mb-1">
                        {resp.title}
                      </div>
                      <p className="text-xs font-mono-neo text-stone-800 font-medium leading-snug">
                        {resp.description}
                      </p>
                    </div>
                  ))}
                  {extracurricularData.map((extra) => (
                    <div key={extra.id} className="bg-white p-3.5 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div className="font-mono-neo text-xs font-black text-black uppercase mb-1">
                        {extra.title}
                      </div>
                      <p className="text-xs font-mono-neo text-stone-800 font-medium leading-snug">
                        {extra.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
