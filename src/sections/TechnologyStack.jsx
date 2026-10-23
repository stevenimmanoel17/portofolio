import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  BIG_TECH_CARDS,
  PILL_ROW_1,
  PILL_ROW_2,
  SKILL_CATEGORIES
} from '../data/portfolioData';

export default function TechnologyStack() {
  const [openCategory, setOpenCategory] = useState('frontend');

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section id="skills" className="pt-20 pb-16">
      {/* Definisi animasi memutar jalan terus satu arah tanpa jeda pantulan */}
      <style>{`
        @keyframes loopScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes loopScrollRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-loop-left {
          display: flex;
          width: max-content;
          animation: loopScrollLeft 24s linear infinite;
          will-change: transform;
        }
        .animate-loop-right {
          display: flex;
          width: max-content;
          animation: loopScrollRight 24s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Header: Bersih tanpa background box pada teks Skills & Expertise */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[#F3D94E] font-bold text-sm sm:text-base font-mono tracking-wide block mb-3">
          Skills & Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#111111] font-mono">
          Thecnology Stack
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-mono leading-relaxed max-w-lg mx-auto">
          The stack i use to build, integrate, and ship production systems.
        </p>
      </div>

      {/* 6 Overlapping Cards Deck dengan Efek Shadow Lembut & Sudut Membulat */}
      <div className="flex items-center justify-center -space-x-3 sm:-space-x-4 md:-space-x-6 pt-4 pb-12 overflow-visible px-4">
        {BIG_TECH_CARDS.map((card) => (
          <div
            key={card.id}
            className={`w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[26px] shadow-[0_12px_32px_rgba(0,0,0,0.11)] border border-neutral-100/80 flex items-center justify-center p-3 sm:p-4 md:p-5 transform transition-all duration-300 hover:scale-110 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] hover:z-30 shrink-0 ${
              card.rotate
            } ${card.zIndex} ${card.elevated ? '-translate-y-2' : ''}`}
          >
            <img
              src={card.icon}
              alt={card.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = card.fallback;
              }}
              className="w-full h-full object-contain pointer-events-none drop-shadow-2xs select-none"
            />
          </div>
        ))}
      </div>

      {/* Pill Mini Badges: Bergerak Memutar Satu Arah & Berulang Tanpa Batas */}
      <div className="space-y-4 mb-16">
        {/* Baris 1: Batasan max-w-3xl, memutar dari kanan ke kiri */}
        <div className="max-w-3xl mx-auto overflow-hidden relative py-1">
          {/* Efek pudar sisi kiri & kanan agar kartu tampak masuk/keluar secara mulus */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-loop-left hover:[animation-play-state:paused] flex gap-3 sm:gap-3.5">
            {[...PILL_ROW_1, ...PILL_ROW_1].map((pill, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-100 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-200 shrink-0"
              >
                <img
                  src={pill.icon}
                  alt={pill.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = pill.fallback;
                  }}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                />
                <span className="text-xs sm:text-[13px] font-mono font-bold text-neutral-800 tracking-tight whitespace-nowrap">
                  {pill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Baris 2: Batasan max-w-2xl, memutar dari kiri ke kanan */}
        <div className="max-w-2xl mx-auto overflow-hidden relative py-1">
          {/* Efek pudar sisi kiri & kanan */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-loop-right hover:[animation-play-state:paused] flex gap-3 sm:gap-3.5">
            {[...PILL_ROW_2, ...PILL_ROW_2].map((pill, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-100 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-200 shrink-0"
              >
                <img
                  src={pill.icon}
                  alt={pill.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = pill.fallback;
                  }}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                />
                <span className="text-xs sm:text-[13px] font-mono font-bold text-neutral-800 tracking-tight whitespace-nowrap">
                  {pill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend Tingkatan Skill */}
      <div className="flex flex-wrap items-center justify-end gap-4 text-[11px] font-mono text-neutral-500 mb-4 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#F3A8C8]" /> Learning
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#F3D94E]" /> Proficient
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#9BD8F5]" /> Advanced
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#8BD8A8]" /> Expert
        </div>
      </div>

      {/* Interactive Accordion Cards */}
      <div className="space-y-3">
        {SKILL_CATEGORIES.map((cat) => {
          const isOpen = openCategory === cat.id;

          return (
            <div
              key={cat.id}
              className="border border-[#D8D8D8] rounded-xl overflow-hidden bg-white transition-all shadow-xs"
            >
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
                    style={{ backgroundColor: `${cat.color}35`, color: '#111111' }}
                  >
                    /
                  </div>
                  <span className="font-bold text-sm tracking-tight font-mono">{cat.title}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 text-xs font-mono">
                  <span>{cat.count} Skills</span>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 border-t border-dashed border-[#E5E5E5] flex flex-wrap gap-2.5">
                  {cat.skills.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg text-xs font-mono"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: s.levelColor }}
                      />
                      <span className="font-medium text-neutral-800">{s.name}</span>
                      <span className="text-[10px] text-neutral-400">({s.level})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}