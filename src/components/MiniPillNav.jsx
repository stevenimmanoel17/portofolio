import React, { useState, useEffect } from 'react';

export default function MiniPillNav() {
  const [activeSection, setActiveSection] = useState('about');
  const [lang, setLang] = useState('ENG');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  // Smooth scroll native yang ringan dan diproses langsung di thread GPU
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
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

  // Scroll listener dengan rAF throttling agar CPU laptop tidak terbebani berulang kali
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 250) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
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

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out transform ${
        isVisible
          ? 'top-6 opacity-100 translate-y-0 pointer-events-auto'
          : '-top-16 opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-[#D8D8D8] rounded-full shadow-sm px-5 sm:px-6 py-2.5 flex items-center gap-4 sm:gap-6 text-[12px] sm:text-[13px] font-medium">
        
        {/* 4 Segitiga Pastel */}
        <div className="flex items-center gap-1.5">
          <svg className="w-2.5 h-2.5 fill-[#8BD8A8]" viewBox="0 0 10 10">
            <polygon points="5,0 10,10 0,10" />
          </svg>
          <svg className="w-2.5 h-2.5 fill-[#F3D94E]" viewBox="0 0 10 10">
            <polygon points="0,0 10,0 5,10" />
          </svg>
          <svg className="w-2.5 h-2.5 fill-[#F58A8A]" viewBox="0 0 10 10">
            <polygon points="5,0 10,10 0,10" />
          </svg>
          <svg className="w-2.5 h-2.5 fill-[#9BD8F5]" viewBox="0 0 10 10">
            <polygon points="0,0 10,0 5,10" />
          </svg>
        </div>

        {/* Link Navigasi */}
        <div className="flex items-center gap-3 sm:gap-5 text-neutral-600">
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

        {/* Toggle Bahasa */}
        <button
          onClick={() => setLang(lang === 'ENG' ? 'IND' : 'ENG')}
          className="border border-[#D8D8D8] px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono hover:bg-neutral-100 transition-colors"
        >
          [{lang}]
        </button>
      </div>
    </nav>
  );
}