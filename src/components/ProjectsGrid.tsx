import React, { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  Cpu,
  Bot,
  Plane,
  UserCheck,
  Globe,
  Infinity as InfinityIcon,
  FileText,
  X,
  Layers,
  CheckCircle2,
  Users,
  Award,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProjectsGrid: React.FC = () => {
  const [showIsroModal, setShowIsroModal] = useState(false);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#0e0e1e]/90 border-b-[3px] border-black relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Stage Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#38bdf8] border-2 border-black shadow-[3px_3px_0px_0px_#000] font-mono-neo text-xs font-black uppercase text-black">
            <InfinityIcon className="w-4 h-4 text-black" />
            <span>STAGE 02 • ORBITAL SYSTEMS • GOING TO INFINITY</span>
          </span>
          <span className="font-mono-neo text-xs font-bold text-black bg-[#facc15] px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase hidden sm:inline-flex items-center gap-1">
            <span>✦ 5 Verified Deployments &amp; Builds ✦</span>
          </span>
        </div>

        {/* Section Title */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-mono-neo text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                <span>FEATURED BUILDS</span>
                <span className="text-[#facc15] text-2xl sm:text-3xl">✦</span>
              </h2>
              <p className="font-mono-neo text-stone-300 text-xs sm:text-sm font-semibold mt-1">
                Full-stack platforms, ISRO space-tech AI, gesture robotics hardware &amp; computer vision
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f43f5e] text-white font-mono-neo text-xs font-black border-2 border-black shadow-[3px_3px_0px_0px_#000] uppercase self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Full-Stack &amp; Hardware</span>
            </span>
          </div>
        </ScrollReveal>

        {/* ASYMMETRIC VIBRANT BENTO GRID */}
        <div className="space-y-8">
          
          {/* Row 1: Split 7-Col & 5-Col */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
            
            {/* Card 1: Infinits Full-Stack (7 Cols) - Vibrant Electric Cyan */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={35}>
                <div 
                  className="bg-[#cffafe] h-full border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 sm:p-8 flex flex-col justify-between relative neo-bump"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)'
                  }}
                >
                  <div className="absolute top-2 right-2 text-xl font-bold text-black select-none pointer-events-none">
                    ✦
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-neo font-black uppercase bg-black text-[#facc15] px-2.5 py-1">
                        <Globe className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>Flagship Web Ecosystem</span>
                      </span>
                      <span className="font-mono-neo text-xs font-black text-black bg-[#4ade80] border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_#000]">
                        PRODUCTION LIVE
                      </span>
                    </div>

                    <h3 className="font-mono-neo text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-1">
                      Infinits Portal
                    </h3>
                    <p className="font-mono-neo text-xs text-[#0369a1] font-black uppercase mb-4">
                      NIT Silchar Academic &amp; Student Ecosystem
                    </p>

                    <p className="font-mono-neo text-xs sm:text-sm text-stone-900 leading-relaxed mb-4 bg-white p-3.5 border-2 border-black font-semibold shadow-[2px_2px_0px_0px_#000]">
                      Developed an unofficial student-centric web platform for NIT Silchar, consolidating academic resources, past papers, syllabus portals, and tools required by 3,000+ students throughout their 4-year journey. Built end-to-end with AI-accelerated workflows.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {['TypeScript', 'JavaScript', 'Python', 'AI-Assisted CI/CD'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white text-black font-mono-neo text-xs font-black border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-3">
                    <a
                      href="https://infinits.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 text-xs font-mono-neo font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#f43f5e] hover:text-white transition-all"
                    >
                      <span>Visit infinits.onrender.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-xs font-mono-neo font-black text-black uppercase bg-[#fef08a] px-2 py-0.5 border border-black">
                      Deployed on Render
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Card 2: ISRO BAH Hackathon (5 Cols) - Solar Gold/Yellow */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" distance={35} delay={0.15}>
                <div 
                  className="bg-[#fef08a] h-full border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 sm:p-8 flex flex-col justify-between relative neo-bump"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-neo font-black uppercase bg-black text-white px-2.5 py-1 border border-black shadow-[2px_2px_0px_0px_#000]">
                        <Cpu className="w-3.5 h-3.5 text-yellow-300" />
                        <span>ISRO BAH '26 • Project Cool Earth</span>
                      </span>
                      <span className="font-mono-neo text-xs font-black text-black bg-white border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_#000]">
                        NATIONAL STAGE
                      </span>
                    </div>

                    <h3 className="font-mono-neo text-xl sm:text-2xl font-black text-black uppercase tracking-tight mb-1">
                      Bharatiya Antariksh Hackathon
                    </h3>
                    <p className="font-mono-neo text-xs text-amber-900 font-black uppercase mb-3 flex items-center gap-1.5 flex-wrap">
                      <span>ISRO Space Tech Challenge</span>
                      <span>•</span>
                      <span className="bg-amber-100 text-amber-950 px-1.5 py-0.5 border border-black font-black">4-Member Team (Member-1)</span>
                    </p>

                    <div className="bg-white p-3.5 border-2 border-black font-mono-neo text-xs text-stone-900 mb-4 shadow-[2px_2px_0px_0px_#000] space-y-2">
                      <p className="font-bold leading-relaxed">
                        Problem Statement: Optimizing Urban Heat Mitigation and cooling strategies via Artificial Intelligence and Machine Learning (AIML).
                      </p>
                      <div className="text-[11px] text-stone-700 pt-1.5 border-t border-black/20">
                        <span className="font-black text-black">Team Cool Earth (4 Members): </span>
                        1. Namrata Saikia (Lead, Mizoram Univ) • 2. Kunwar Pandey (NIT Silchar) • 3. Anwesha Maity (UEM) • 4. Sanika Santosh Bamane (Mizoram Univ).
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {['ISRO Bhuvan', 'Landsat-8/9', 'XGBoost AI', 'Physics Thermodynamic Layer', 'FastAPI'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-white text-black font-mono-neo text-[11px] font-black border border-black shadow-[1px_1px_0px_0px_#000]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setShowIsroModal(true)}
                      className="cursor-pointer inline-flex items-center gap-1.5 bg-black text-white px-3.5 py-2 text-xs font-mono-neo font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#38bdf8] hover:text-black transition-all"
                    >
                      <FileText className="w-3.5 h-3.5 text-yellow-300" />
                      <span>View ISRO BAH Details</span>
                    </button>
                    <span className="text-[11px] font-mono-neo font-black text-emerald-800 bg-white px-2 py-1 border border-black">
                      4–11°C Temp Drop Simulated
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Row 2: Tecnoesis Bot & Smart Attendance System */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Card 3: Tecnoesis NIT Silchar Bot (MD: 6 cols) - Vibrant Neon Mint with Real Bot Photo */}
            <div className="md:col-span-6">
              <ScrollReveal direction="up" distance={35} delay={0.1}>
                <div 
                  id="tecnoesis-bot"
                  className="bg-[#86efac] h-full border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 sm:p-7 flex flex-col justify-between neo-bump"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-neo font-black uppercase bg-black text-white px-2.5 py-1 border border-black">
                        <Bot className="w-3.5 h-3.5 text-[#4ade80]" />
                        <span>Tecnoesis NIT Silchar • Robowar</span>
                      </span>
                      <span className="text-xs font-mono-neo font-black text-stone-900 bg-white px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                        Nov 2024
                      </span>
                    </div>

                    <h4 className="font-mono-neo text-xl sm:text-2xl font-black text-black uppercase mb-1">
                      Robotic War Bot &amp; Combat Rover
                    </h4>
                    <p className="font-mono-neo text-xs text-emerald-950 font-black uppercase mb-3">
                      Team Captain • The Inevitables (N.E.R.D.S. NIT Silchar)
                    </p>

                    {/* Bot Photo Frame with Fallback */}
                    <div className="mb-4 relative border-[3px] border-black shadow-[4px_4px_0px_0px_#000] bg-black overflow-hidden group">
                      <img
                        src="/tecnoesis-bot.jpg"
                        alt="Tecnoesis NIT Silchar Combat Bot"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.src = 'https://raw.githubusercontent.com/kunwarpandey36/portfolio/main/src/1734147778157.jpg';
                        }}
                        className="w-full h-48 object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/90 text-white px-2 py-0.5 font-mono-neo text-[10px] font-black uppercase border border-white/20">
                        ✦ Live Bot Hardware Built at NIT Silchar
                      </div>
                    </div>

                    <p className="font-mono-neo text-xs sm:text-sm text-stone-900 leading-relaxed mb-4 bg-white p-3.5 border-2 border-black font-semibold shadow-[2px_2px_0px_0px_#000]">
                      Participated in Tecnoesis (Annual Techno-Management Fest of NIT Silchar) Robotron Module. Designed and fabricated a high-torque combat bot with gesture control, accelerometer-based steering, rugged chassis, and H-bridge motor drivers.
                    </p>
                  </div>

                  <div className="pt-3 border-t-2 border-black flex flex-wrap items-center justify-between gap-2 font-mono-neo text-xs font-black">
                    <div className="flex flex-wrap gap-1.5">
                      {['Robotics', 'C++', 'Microcontrollers', 'IMU Sensors', 'RF Link'].map((t) => (
                        <span key={t} className="text-[11px] bg-white px-2 py-0.5 border border-black font-black shadow-[1px_1px_0px_0px_#000]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="bg-black text-white px-2.5 py-1">RoboWar Stage</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Card 4: Smart AI Attendance System (MD: 6 cols) - Vibrant Neon Lavender/Violet */}
            <div className="md:col-span-6">
              <ScrollReveal direction="up" distance={35} delay={0.2}>
                <div 
                  className="bg-[#e9d5ff] h-full border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 sm:p-7 flex flex-col justify-between neo-bump"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-neo font-black uppercase bg-black text-[#facc15] px-2.5 py-1">
                        <UserCheck className="w-3.5 h-3.5 text-yellow-300" />
                        <span>AI Computer Vision</span>
                      </span>
                      <span className="text-xs font-mono-neo font-black text-purple-950 bg-white border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_#000]">
                        LIVE DEPLOYED ✦
                      </span>
                    </div>

                    <h4 className="font-mono-neo text-xl sm:text-2xl font-black text-black uppercase mb-1">
                      Smart AI Attendance System
                    </h4>
                    <p className="font-mono-neo text-xs text-purple-900 font-black uppercase mb-3">
                      Simultaneous Multi-Face Recognition &amp; Biometrics
                    </p>

                    <p className="font-mono-neo text-xs sm:text-sm text-stone-900 leading-relaxed mb-4 bg-white p-3.5 border-2 border-black font-semibold shadow-[2px_2px_0px_0px_#000]">
                      Engineered an automated face detection and recognition pipeline that processes classroom video streams simultaneously, identifying enrolled students and instantly marking timestamped attendance while preventing proxy/duplicate entries.
                    </p>

                    <div className="bg-white/90 p-3 border-2 border-black font-mono-neo text-xs font-bold text-stone-900 space-y-1 mb-4 shadow-[2px_2px_0px_0px_#000]">
                      <div className="flex items-center gap-1.5 text-purple-950">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Teacher-wise, subject-wise, and date-wise attendance filtering</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-purple-950">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Automated proxy elimination &amp; instant database sync</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {['OpenCV', 'FaceNet', 'Python', 'FastAPI', 'Vercel'].map((t) => (
                        <span key={t} className="text-[11px] bg-white px-2 py-0.5 border border-black font-black shadow-[1px_1px_0px_0px_#000]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t-2 border-black flex flex-wrap items-center justify-between gap-3">
                    <a
                      href="https://smart-attendance-system-woad.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 text-xs font-mono-neo font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#4ade80] hover:text-black transition-all"
                    >
                      <span>Open Live Attendance App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-xs font-mono-neo font-black text-black uppercase bg-[#4ade80] px-2.5 py-1 border border-black shadow-[1px_1px_0px_0px_#000]">
                      Vercel Live
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Row 3: Delta-Wing Aeromodelling Project Banner Box (Vibrant Hot Coral) */}
          <ScrollReveal direction="up" distance={30} delay={0.25}>
            <div className="bg-[#fecdd3] border-[3px] border-black shadow-[8px_8px_0px_0px_#000] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 neo-bump">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-black text-white text-xs font-mono-neo font-black uppercase">
                    <Plane className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>Aerospace Prototyping</span>
                  </span>
                  <span className="text-xs font-mono-neo text-black font-black bg-white px-2 py-0.5 border border-black">
                    June 2025
                  </span>
                </div>
                <h4 className="font-mono-neo text-xl sm:text-2xl font-black text-black uppercase">
                  DIY Delta-Wing Aircraft Prototyping
                </h4>
                <p className="font-mono-neo text-xs sm:text-sm text-stone-900 font-semibold leading-relaxed bg-white/80 p-3 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                  Engineered and flight-tested a custom delta-wing aircraft from foam, high-KV brushless motor, ESC speed controller, and dual elevon servo linkages. Tuned aerodynamic center-of-gravity (CG) stability under real wind turbulence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7352694564446437376/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 text-xs font-mono-neo font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#38bdf8] hover:text-black transition-all"
                >
                  <span>View LinkedIn Post &amp; Flight</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="px-3 py-1 bg-[#4ade80] text-black font-mono-neo text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                  Flight Tested ✦
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ISRO BAH MODAL VIEWER */}
      {showIsroModal && (
        <div 
          id="isro-presentation"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-[#fef08a] border-[4px] border-black shadow-[10px_10px_0px_0px_#000] max-w-3xl w-full p-6 sm:p-8 font-mono-neo relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowIsroModal(false)}
              className="absolute top-4 right-4 bg-black text-white p-2 border-2 border-black hover:bg-[#f43f5e] transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="bg-black text-[#facc15] px-3 py-1 text-xs font-black uppercase">
                ISRO Space Technology Challenge '26
              </span>
              <span className="bg-white text-black px-2 py-1 text-xs font-black border border-black">
                National Finalist
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-1">
              BHARATIYA ANTARIKSH HACKATHON 2026
            </h3>
            <p className="text-xs sm:text-sm font-black text-amber-900 uppercase mb-4">
              Project Cool Earth • Optimizing Urban Heat Mitigation &amp; Cooling Strategies via AIML
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-stone-900">
              {/* Team Details */}
              <div className="bg-white p-4 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <h4 className="font-black text-black uppercase text-sm mb-2 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#0284c7]" />
                    <span>Team Cool Earth Roster (4 Members)</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#facc15] text-black px-2 py-0.5 border border-black">
                    3 Universities Collaboration
                  </span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-[#fef9c3] border border-black">
                    <span className="font-black block">1. Team Leader: Namrata Saikia</span>
                    <span className="text-stone-700">Mizoram University</span>
                  </div>
                  <div className="p-2 bg-[#cffafe] border border-black">
                    <span className="font-black block">2. Member-1: Kunwar Pandey</span>
                    <span className="text-stone-700">NIT Silchar (Electronics &amp; Instrumentation)</span>
                  </div>
                  <div className="p-2 bg-stone-100 border border-black">
                    <span className="font-black block">3. Member-2: Anwesha Maity</span>
                    <span className="text-stone-700">Univ. of Engineering &amp; Management</span>
                  </div>
                  <div className="p-2 bg-stone-100 border border-black">
                    <span className="font-black block">4. Member-3: Sanika Santosh Bamane</span>
                    <span className="text-stone-700">Mizoram University</span>
                  </div>
                </div>
              </div>

              {/* Architecture & Workflow */}
              <div className="bg-white p-4 border-2 border-black shadow-[3px_3px_0px_0px_#000] space-y-2">
                <h4 className="font-black text-black uppercase text-sm mb-1 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#16a34a]" />
                  <span>Technical Architecture &amp; Methodology</span>
                </h4>
                <p className="leading-relaxed">
                  <strong>1. Micro-Level Precision:</strong> Replaces city-wide generalizations with block-by-block hotspot mapping using satellite data (ISRO Bhuvan, Landsat-8/9, Sentinel-2, MODIS, Cartosat) combined with open weather APIs.
                </p>
                <p className="leading-relaxed">
                  <strong>2. Machine Learning:</strong> XGBoost trained on multi-spectral satellite thermal infrared imagery to predict Land Surface Temperature (LST) and pinpoint vulnerable heat island pockets.
                </p>
                <p className="leading-relaxed">
                  <strong>3. Physics Validation Layer:</strong> Strict thermodynamic check verifying surface energy balance (Net Radiation = Sensible Heat + Latent Heat + Ground Heat Flux) ensuring realistic physical boundary limits.
                </p>
                <p className="leading-relaxed">
                  <strong>4. Two-Phase Action Simulator:</strong>
                  <br />• <em>Phase 1 (Short-term):</em> High-albedo cool roofs and rooftop gardens (drops indoor temp by 4–11°C).
                  <br />• <em>Phase 2 (Long-term):</em> Strategic urban tree canopy growth for persistent micro-climate cooling.
                </p>
              </div>

              {/* Delhi Case Study Numbers */}
              <div className="bg-[#bbf7d0] p-4 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                <h4 className="font-black text-black uppercase text-sm mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-800" />
                  <span>Validated Simulation Results (Delhi Case Study)</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs mt-2">
                  <div className="bg-white p-2 border border-black">
                    <span className="font-black text-lg block text-emerald-800">4°C - 11°C</span>
                    <span>Indoor Temp Drop</span>
                  </div>
                  <div className="bg-white p-2 border border-black">
                    <span className="font-black text-lg block text-emerald-800">3.34 Cr sq ft</span>
                    <span>Mapped Rooftops</span>
                  </div>
                  <div className="bg-white p-2 border border-black col-span-2 sm:col-span-1">
                    <span className="font-black text-lg block text-emerald-800">Physics-Based</span>
                    <span>Validation Layer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between">
              <span className="text-xs font-black uppercase text-stone-800">
                ISRO Bharatiya Antariksh Hackathon '26
              </span>
              <button
                type="button"
                onClick={() => setShowIsroModal(false)}
                className="bg-black text-white px-5 py-2 text-xs font-black uppercase hover:bg-[#f43f5e] transition-colors cursor-pointer border-2 border-black"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
