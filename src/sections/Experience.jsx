import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="pt-8 pb-16 overflow-hidden">
      <div className="mb-10">
        <span className="text-[#9BD8F5] font-bold text-sm sm:text-base font-mono tracking-wide block mb-3">
          Work History
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight font-mono">Work Experience</h2>
      </div>

      {/* Kontainer utama dengan efek transisi muncul dari kiri ke kanan (-translate-x ke translate-x-0) */}
      <div 
        className={`relative space-y-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        
        {/* Garis Vertikal Penghubung Antar Titik */}
        <div className="absolute left-[167px] sm:left-[205px] top-3 bottom-3 w-[2px] bg-[#D8D8D8] pointer-events-none" />

        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col sm:flex-row items-baseline gap-4 sm:gap-8">

            <span className="w-36 text-sm font-mono text-neutral-500 shrink-0 font-medium">
              {exp.period}
            </span>
            
            {/* Container konten kanan */}
            <div className="flex flex-col w-full ml-6 sm:ml-6">
              {/* Baris Judul & Titik Indikator yang Sejajar */}
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full shrink-0 z-10 shadow-xs"
                  style={{ backgroundColor: exp.dotColor }}
                />
                <h3 className="font-bold text-2xl tracking-tight leading-none text-[#111111]">
                  {exp.company}
                </h3>
              </div>

              {/* Baris Role & Deskripsi */}
              <div className="pl-6 sm:pl-6 mt-2.5">
                <span 
                  className="text-sm font-semibold block mb-2 font-mono"
                  style={{ color: exp.dotColor }}
                >
                  {exp.role}
                </span>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl font-mono">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}