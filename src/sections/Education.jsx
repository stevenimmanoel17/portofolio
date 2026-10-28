import React, { useState, useEffect, useRef } from 'react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
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
    <section id="education" ref={sectionRef} className="pt-8 pb-16 overflow-hidden">
      <div className="mb-10">
        <span className="text-[#8BD8A8] font-bold text-sm sm:text-base font-mono tracking-wide block mb-3">
          Education History
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight font-mono">Education</h2>
      </div>

      {/* Kontainer utama dengan efek transisi muncul dari kiri ke kanan (-translate-x ke translate-x-0) */}
      <div 
        className={`relative space-y-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        
        {/* Garis Vertikal Penghubung Antar Titik */}
        <div className="absolute left-[167px] sm:left-[205px] top-3 bottom-3 w-[2px] bg-[#D8D8D8] pointer-events-none" />

        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="relative flex flex-col sm:flex-row items-baseline gap-4 sm:gap-8">
            
            <div className="w-36 shrink-0 flex flex-col gap-1">
              {/* Tahun / Periode */}
              <span className="w-36 text-sm font-mono text-neutral-500 shrink-0 font-medium">
                {edu.period}
              </span>

              {/* GPA */}
              <span className="text-xs font-mono font-bold mt-1" style={{ color: edu.dotColor }}>
                {edu.gpa}
              </span>
            </div>
            
            {/* Container konten kanan */}
            <div className="flex flex-col w-full ml-4 sm:ml-6">
              {/* Baris Institusi, Badge, & Titik Indikator yang Sejajar */}
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full shrink-0 z-10 shadow-xs"
                  style={{ backgroundColor: edu.dotColor }}
                />
                <h3 className="font-bold text-2xl tracking-tight leading-none text-[#111111]">
                  {edu.institution}
                </h3>
              </div>

              {/* Baris Gelar & Deskripsi */}
              <div className="pl-6 sm:pl-6 mt-2.5">
                <span 
                  className="text-sm font-semibold block mb-2 font-mono"
                  style={{ color: edu.dotColor }}
                >
                  {edu.degree}
                </span>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl font-mono">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}