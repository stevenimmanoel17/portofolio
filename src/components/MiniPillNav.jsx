import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function MiniPillNav() {
  const [activeSection, setActiveSection] = useState('about');
  const [lang, setLang] = useState('ENG');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const navOffset = 50;
    const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset - navOffset;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${targetId}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 250) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setIsMobileOpen(false);
          }

          const scrollPos = window.scrollY + 180;
          for (let i = 0; i < navItems.length; i++) {
            const el = document.getElementById(navItems[i].id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(navItems[i].id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

// Komponen Tombol Menggunakan Gambar Bendera SVG Resmi
  const FlagToggleBtn = () => (
    <button
      onClick={() => setLang(lang === 'ENG' ? 'IND' : 'ENG')}
      className="w-10 h-8 rounded-full border-none bg-transparent transition-all flex items-center justify-center cursor-pointer shadow-2xs overflow-hidden p-1.5"
      title={lang === 'ENG' ? 'Switch to Indonesia' : 'Switch to English'}
    >
      <img
        src={
          lang === 'ENG'
            ? 'https://flagcdn.com/w40/gb.png' // Bendera Inggris (GB)
            : 'https://flagcdn.com/w40/id.png' // Bendera Indonesia (ID)
        }
        alt={lang}
        className="w-full h-full object-cover rounded-xs"
      />
    </button>
  );

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-dropdown {
          animation: fadeInScale 0.25s ease-out forwards;
        }
      `}</style>

      {/* DESKTOP NAV */}
      <nav
        className={`hidden md:flex fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out transform ${
          isVisible
            ? 'top-6 opacity-100 translate-y-0 pointer-events-auto'
            : '-top-16 opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border border-[#D8D8D8] rounded-full shadow-sm px-6 py-2.5 flex items-center gap-6 text-[13px] font-medium">
          <div className="flex items-center gap-1.5">
            <svg className="w-2.5 h-2.5 fill-[#8BD8A8]" viewBox="0 0 10 10"><polygon points="5,0 10,10 0,10" /></svg>
            <svg className="w-2.5 h-2.5 fill-[#F3D94E]" viewBox="0 0 10 10"><polygon points="0,0 10,0 5,10" /></svg>
            <svg className="w-2.5 h-2.5 fill-[#F58A8A]" viewBox="0 0 10 10"><polygon points="5,0 10,10 0,10" /></svg>
            <svg className="w-2.5 h-2.5 fill-[#9BD8F5]" viewBox="0 0 10 10"><polygon points="0,0 10,0 5,10" /></svg>
          </div>

          <div className="flex items-center gap-5 text-neutral-600">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`hover:text-black transition-colors relative pb-0.5 ${
                  activeSection === item.id ? 'text-black font-bold' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8BD8A8]" />
                )}
              </a>
            ))}
          </div>

          <FlagToggleBtn />
        </div>
      </nav>

      {/* MOBILE / ANDROID NAV */}
      <div
        ref={dropdownRef}
        className={`md:hidden fixed right-5 z-[100] transition-all duration-500 ease-out transform ${
          isVisible
            ? 'top-5 opacity-100 translate-y-0 pointer-events-auto'
            : '-top-16 opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="relative">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="w-11 h-11 bg-white/95 backdrop-blur-md border border-[#D8D8D8] rounded-full shadow-md flex items-center justify-center text-neutral-800 hover:border-black transition-all cursor-pointer"
            aria-label="Menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {isMobileOpen && (
            <div className="absolute right-0 top-14 w-52 bg-white/95 backdrop-blur-md border border-[#D8D8D8] rounded-2xl shadow-xl py-3 px-2 flex flex-col gap-1 z-50 animate-dropdown">
              <div className="px-3 py-1.5 flex items-center justify-between border-b border-neutral-100 mb-1">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Language</span>
                <FlagToggleBtn />
              </div>

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-neutral-100 text-black font-bold'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-black'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <span className="w-2 h-2 rounded-full bg-[#8BD8A8]" />}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}