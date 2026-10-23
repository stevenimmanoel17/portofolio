import React, { useState, useEffect, useRef } from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animasi otomatis dipicu secara mulus oleh IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
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
      {/* Kontainer kartu dengan akselerasi GPU murni dan isolasi render */}
      <div
        style={{ contain: 'paint' }}
        className={`w-full border border-[#D8D8D8] rounded-[24px] overflow-hidden bg-white shadow-sm transform transition-all duration-700 ease-out will-change-transform ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-[0.98]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Kolom Teks Konten */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="text-[#5EDDD0] font-bold text-xl font-mono mb-4 tracking-wide">
              {ABOUT_DATA.tag || 'About'}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-[1.2] tracking-tight mb-6 text-[#111111]">
              {ABOUT_DATA.headline}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-500 font-mono leading-relaxed">
              {ABOUT_DATA.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Kolom Foto Full-Bleed */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full w-full bg-neutral-100">
            <img
              src={ABOUT_DATA.image}
              alt="Steven Immanoel Portrait"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-bottom absolute inset-0 select-none pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}