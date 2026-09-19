import React, { useState } from 'react';
import { Github, Linkedin, Code2, Mail, Check, Copy, ArrowUpRight, Sparkles, Infinity as InfinityIcon } from 'lucide-react';
import { contactData } from '../data/cvData';
import { ScrollReveal } from './ScrollReveal';

export const ContactTogether: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleSayHello = () => {
    window.location.href = `mailto:${contactData.email}?subject=Project%20Inquiry%20from%20Portfolio`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#080814] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Stage Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#facc15] border-2 border-black shadow-[3px_3px_0px_0px_#000] font-mono-neo text-xs font-black uppercase text-black">
            <InfinityIcon className="w-4 h-4 text-black animate-spin" />
            <span>FINAL STAGE 05 • INFINITE HORIZON • ∞ REACHED</span>
          </span>
          <span className="font-mono-neo text-xs font-bold text-black bg-[#4ade80] px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase hidden sm:inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Ready for Collaborative Build ✦</span>
          </span>
        </div>

        {/* Large Neo-Brutalist Box in High-Energy Solar Yellow & Coral */}
        <ScrollReveal direction="up" distance={45} duration={0.7}>
          <div 
            className="bg-[#facc15] border-[3px] border-black shadow-[10px_10px_0px_0px_#000] p-8 sm:p-12 md:p-14 relative"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))'
            }}
          >
            <div className="absolute top-3 right-6 text-2xl font-black text-black select-none pointer-events-none">
              ✦
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Headline & Action (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white border-2 border-black text-xs font-mono-neo font-black uppercase shadow-[2px_2px_0px_0px_#fff]">
                  <InfinityIcon className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>Infinite Possibilities</span>
                </div>

                <h2 className="font-mono-neo text-3xl sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tight leading-none">
                  LET'S BUILD BEYOND LIMITS
                </h2>

                <p className="font-mono-neo text-stone-900 text-sm sm:text-lg font-bold leading-relaxed max-w-lg bg-white p-3.5 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                  Have an exciting project, robotics challenge, software engineering role, or hackathon collaboration in mind? Let's engineer something extraordinary.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleSayHello}
                    className="cursor-pointer font-mono-neo text-sm sm:text-base font-black bg-black text-white px-7 py-3.5 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#f43f5e] hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all uppercase tracking-wider flex items-center gap-2"
                  >
                    <span>SAY HELLO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="cursor-pointer font-mono-neo text-xs sm:text-sm font-black bg-white text-black px-5 py-3.5 border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#cffafe] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all uppercase flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#16a34a]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Direct Channels & Handles (5 Cols) in Vibrant Cyan */}
              <div className="lg:col-span-5 bg-[#cffafe] border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000] space-y-4">
                <div className="text-xs font-mono-neo font-black text-black uppercase border-b-2 border-black pb-2 flex items-center justify-between">
                  <span>✦ Direct Channels</span>
                  <span className="text-black bg-[#4ade80] px-2 py-0.5 border border-black font-bold">ONLINE</span>
                </div>

                <div className="space-y-3 font-mono-neo text-xs sm:text-sm">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="flex items-center gap-3 p-2.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#fecdd3] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="truncate font-black">{contactData.email}</span>
                  </a>

                  <a
                    href={contactData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#bbf7d0] transition-colors"
                  >
                    <Github className="w-4 h-4 text-black shrink-0" />
                    <span className="truncate font-black">github.com/kunwarpandey36</span>
                  </a>

                  <a
                    href={contactData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#fef08a] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0284c7] shrink-0" />
                    <span className="truncate font-black">linkedin.com/in/kunwarpandey36</span>
                  </a>

                  <a
                    href={contactData.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#e9d5ff] transition-colors"
                  >
                    <Code2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="truncate font-black">leetcode.com/u/kunwarpandey36</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
