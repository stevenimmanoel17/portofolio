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

      {/* Kontainer utama dengan efek transisi */}
      <div 
        className={`relative transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        
        {/* Garis Vertikal Utama: Responsif posisinya untuk Mobile dan Desktop */}
        <div className="absolute left-[5px] sm:left-[173px] top-3 bottom-3 w-[2px] bg-[#D8D8D8] pointer-events-none" />

        <div className="space-y-12">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-8">
              
              {/* Bagian Periode dan GPA: Flex row di mobile agar sejajar, kembali column di desktop */}
              <div className="sm:w-36 shrink-0 flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-1 pl-6 sm:pl-0">
                {/* Tahun / Periode */}
                <span className="text-xs sm:text-sm font-mono text-neutral-500 font-medium">
                  {edu.period}
                </span>

                {/* Pemisah kecil khusus di mobile */}
                <span className="text-neutral-300 sm:hidden">•</span>

                {/* GPA */}
                <span className="text-xs font-mono font-bold" style={{ color: edu.dotColor }}>
                  {edu.gpa}
                </span>
              </div>
              
              {/* Container Konten Kanan */}
              <div className="flex flex-col w-full sm:ml-6 relative pl-6 sm:pl-0">
                {/* Baris Institusi, Badge, & Titik Indikator */}
                <div className="flex flex-wrap items-center gap-3 relative">
                  {/* Titik indikator presisi menempel di garis tanpa terpotong */}
                  <span
                    className="absolute -left-6 sm:-left-8 w-3 h-3 rounded-full shrink-0 z-10 shadow-xs"
                    style={{ backgroundColor: edu.dotColor }}
                  />
                  <h3 className="font-bold text-xl sm:text-2xl tracking-tight leading-none text-[#111111]">
                    {edu.institution}
                  </h3>
                </div>

                {/* Baris Gelar & Deskripsi */}
                <div className="mt-2.5">
                  <span 
                    className="text-xs sm:text-sm font-semibold block mb-2 font-mono"
                    style={{ color: edu.dotColor }}
                  >
                    {edu.degree}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl font-mono text-justify sm:text-left">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}