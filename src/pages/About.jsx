import React, { useState, useEffect, useRef } from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver untuk mendeteksi saat masuk dan keluar layar secara dinamis
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Memicu ulang transisi jika navbar About ditekan saat posisi layar sudah di About
  useEffect(() => {
    const handleNavClick = (e) => {
      const anchor = e.target.closest('a[href="#about"]');
      if (anchor) {
        setIsVisible(false);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="pt-8 pb-16">
      {/* Kontainer kartu dengan animasi masuk & keluar yang halus */}
      <div
        className={`w-full border border-[#D8D8D8] rounded-[24px] overflow-hidden bg-white shadow-sm transform transition-all duration-500 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 scale-[0.98]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Kolom Teks Konten (mempertahankan text-justify dan join) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="text-[#5EDDD0] font-bold text-sm sm:text-base font-mono mb-3 tracking-wide block">
              {ABOUT_DATA.tag || 'About'}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-[1.25] tracking-tight mb-5 text-[#111111]">
              {ABOUT_DATA.headline}
            </h2>

            <div className="text-xs sm:text-sm text-neutral-500 font-mono leading-relaxed text-justify">
              <p>{ABOUT_DATA.paragraphs.join(" ")}</p>
            </div>
          </div>

          {/* Kolom Foto dengan posisi object-center di Android (mobile) dan object-bottom di Laptop (lg) */}
          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full w-full bg-neutral-100 overflow-hidden">
            <img
              src={ABOUT_DATA.image}
              alt="Steven Immanoel Portrait"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center lg:object-bottom absolute inset-0 select-none pointer-events-none hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}