import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  BIG_TECH_CARDS,
  PILL_ROW_1,
  PILL_ROW_2,
  SKILL_CATEGORIES
} from '../data/portfolioData';

export default function TechnologyStack() {
  const [openCategory, setOpenCategory] = useState('frontend');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [isPillsVisible, setIsPillsVisible] = useState(false);
  const [isLegendVisible, setIsLegendVisible] = useState(false);
  const [isAccordionVisible, setIsAccordionVisible] = useState(false); // State untuk animasi Accordion

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const pillsRef = useRef(null);
  const legendRef = useRef(null);
  const accordionRef = useRef(null); // Ref untuk Accordion

  useEffect(() => {
    const createObserver = (setter) => {
      return new IntersectionObserver(
        ([entry]) => {
          setter(entry.isIntersecting);
        },
        { threshold: 0.15 }
      );
    };

    const headerObserver = createObserver(setIsHeaderVisible);
    const cardsObserver = createObserver(setIsCardsVisible);
    const pillsObserver = createObserver(setIsPillsVisible);
    const legendObserver = createObserver(setIsLegendVisible);
    const accordionObserver = createObserver(setIsAccordionVisible); // Observer Accordion

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);
    if (pillsRef.current) pillsObserver.observe(pillsRef.current);
    if (legendRef.current) legendObserver.observe(legendRef.current);
    if (accordionRef.current) accordionObserver.observe(accordionRef.current);

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
      if (pillsRef.current) pillsObserver.unobserve(pillsRef.current);
      if (legendRef.current) legendObserver.unobserve(legendRef.current);
      if (accordionRef.current) accordionObserver.unobserve(accordionRef.current);
    };
  }, []);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'backend':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        );
      case 'design':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        );
      case 'office':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case 'tools':
      default:
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="pt-20 pb-16 overflow-hidden">
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

      {/* Header dengan Animasi Drop Down (Masuk) & Drop Up (Keluar) */}
      <div
        ref={headerRef}
        className={`text-center max-w-xl mx-auto mb-12 transform transition-all duration-700 ease-out ${
          isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'
        }`}
      >
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

      {/* 6 Overlapping Cards Deck dengan Animasi Swipe */}
      <div ref={cardsRef} className="flex items-center justify-center -space-x-3 sm:-space-x-4 md:-space-x-6 pt-4 pb-12 overflow-visible px-4">
        {BIG_TECH_CARDS.map((card, idx) => {
          const isLeftSide = idx < 3;
          let transformStyle = '';

          if (isCardsVisible) {
            transformStyle = 'opacity-100 translate-x-0';
          } else {
            transformStyle = isLeftSide ? 'opacity-0 -translate-x-32' : 'opacity-0 translate-x-32';
          }

          return (
            <div
              key={card.id}
              className={`w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[26px] shadow-[0_12px_32px_rgba(0,0,0,0.11)] border border-neutral-100/80 flex items-center justify-center p-3 sm:p-4 md:p-5 transform transition-all duration-700 ease-out hover:scale-110 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] hover:z-30 shrink-0 ${
                card.rotate
              } ${card.zIndex} ${card.elevated ? '-translate-y-2' : ''} ${transformStyle}`}
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
          );
        })}
      </div>

      {/* Pill Mini Badges dengan Animasi Drop Down (Masuk) & Drop Up (Keluar) */}
      <div
        ref={pillsRef}
        className={`space-y-4 mb-16 transform transition-all duration-700 ease-out ${
          isPillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-3xl mx-auto overflow-hidden relative py-1">
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

        <div className="max-w-2xl mx-auto overflow-hidden relative py-1">
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

      {/* Legend Tingkatan Skill dengan Animasi Masuk/Keluar */}
      <div
        ref={legendRef}
        className={`flex flex-wrap items-center justify-end gap-4 text-sm font-mono text-neutral-500 mb-4 px-1 transform transition-all duration-700 ease-out ${
          isLegendVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}
      >
        <div className="flex items-center gap-1.5 transition-transform hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-[#F3D94E] animate-pulse" /> Learning
        </div>
        <div className="flex items-center gap-1.5 transition-transform hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-[#9BD8F5] animate-pulse" /> Proficient
        </div>
        <div className="flex items-center gap-1.5 transition-transform hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-[#8BD8A8] animate-pulse" /> Advanced
        </div>
        <div className="flex items-center gap-1.5 transition-transform hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-[#F3A8C8] animate-pulse" /> Expert
        </div>
      </div>

      {/* Interactive Accordion Cards dengan Animasi Masuk/Keluar & Expand Halus */}
      <div
        ref={accordionRef}
        className={`space-y-3 transform transition-all duration-700 ease-out ${
          isAccordionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {SKILL_CATEGORIES.map((cat) => {
          const isOpen = openCategory === cat.id;

          return (
            <div
              key={cat.id}
              className="border rounded-xl overflow-hidden bg-white transition-all shadow-xs hover:border-neutral-400"
              style={{ borderColor: cat.borderColor || '#D8D8D8' }}
            >
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-bold"
                    style={{
                      backgroundColor: cat.bgColor || `${cat.color}20`,
                      color: cat.color,
                      border: `1px solid ${cat.borderColor || cat.color}`
                    }}
                  >
                    {getCategoryIcon(cat.id)}
                  </div>
                  <span className="font-bold text-sm tracking-tight font-mono text-[#111111]">{cat.title}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 text-xs font-mono">
                  <span>{cat.skills.length} Skills</span>
                  {/* Animasi Putar Ikon Panah */}
                  <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-black' : 'rotate-0'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Konten Accordion dengan Animasi Buka-Tutup (Fade-in Slide Down) */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 pt-3 border-t border-dashed border-[#E5E5E5] flex flex-wrap gap-2.5">
                  {cat.skills.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono shadow-2xs transition-all transform hover:scale-105"
                      style={{
                        backgroundColor: cat.bgColor || '#FAFAFA',
                        border: `1px solid ${cat.borderColor || '#E0E0E0'}`,
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: s.levelColor }}
                      />
                      <span className="font-bold text-neutral-800">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}