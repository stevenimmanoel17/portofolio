import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, ThreadsIcon } from '../components/SocialIcons';
import { HERO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Daftar teks pemasaran yang akan bergulir bergantian secara mengetik (Typewriter)
  const marketingTexts = [
    "Designing and building a website that supports your needs.",
    "Analyzing complex datasets to uncover actionable business insights.",
    "Crafting stunning visual layouts and graphic designs using modern tools."
  ];
  
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Daftar opsi peran (roles) yang bergulir dari atas ke bawah secara bersamaan
  const roles = [
    "Junior Web-Development",
    "Data Analyst",
    "Graphic Design"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  const socials = [
    { id: 1, name: 'github', label: 'stevenimmanoel17', icon: GithubIcon, href: 'https://github.com/stevenimmanoel17' },
    { id: 2, name: 'linkedin', label: 'Steven Immanoel', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/steven-immanoel/' },
    { id: 3, name: 'instagram', label: '@nooeell.exe', icon: InstagramIcon, href: 'https://www.instagram.com/nooeell.exe/' },
    { id: 4, name: 'threads', label: '@nooeell.exe', icon: ThreadsIcon, href: 'https://www.threads.com/@nooeell.exe?xmt=AQGz245Np4bw4xcUDgG2Yv8lQgiHxE0Bsw10Y0IZ0wLzjVc' },
  ];

  // Pengaturan alur dan kecepatan animasi mengetik bergantian untuk marketingTexts
  useEffect(() => {
    let timer;
    const currentFullText = marketingTexts[textIndex];

    const typingSpeed = 55;
    const deletingSpeed = 30;
    const pauseAfterFullText = 2200;
    const pauseAfterDelete = 500;

    if (!isDeleting && displayText.length < currentFullText.length) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentFullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterFullText);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        // Berpindah ke indeks kalimat marketing berikutnya secara berputar (looping)
        setTextIndex((prevIndex) => (prevIndex + 1) % marketingTexts.length);
      }, pauseAfterDelete);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, marketingTexts]);

  // Pengaturan rotasi teks posisi pekerjaan ke arah bawah
  useEffect(() => {
    const roleChangeInterval = 2800;

    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, roleChangeInterval);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12">
      <style>{`
        @keyframes rollDownSmooth {
          0% {
            transform: translateY(-110%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-16">
        
        {/* Kolom Kiri: Avatar, Headline Animasi Mengetik Bergantian, dan Subtitle Rolling */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-4 sm:gap-5 mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[4px] bg-gradient-to-tr from-[#8BD8A8] via-[#F3D94E] via-[#F58A8A] to-[#9BD8F5] shadow-sm shrink-0">
              <img
                src="/assets/avatar.jfif"
                alt="Steven Immanoel"
                className="w-full h-full object-cover object-top rounded-full bg-white"
              />
            </div>
            
            <span className="font-bold text-2xl md:text-3xl tracking-tight text-[#111111]">
              {HERO_DATA.name}
            </span>
          </div>

          {/* Area headline dengan min-height responsif agar tata letak stabil saat teks berganti */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.25] tracking-tight mb-5 text-[#111111] min-h-[5.5rem] sm:min-h-[6.5rem] md:min-h-[8.5rem]">
            <span>{displayText}</span>
            <span className="inline-block w-[3px] h-7 sm:h-9 md:h-11 bg-[#111111] ml-1.5 align-middle animate-pulse" />
          </h1>
          
          {/* Kontainer rolling teks peran pekerjaan */}
          <div className="h-8 md:h-9 overflow-hidden flex items-center mb-10">
            <span
              key={roleIndex}
              className="inline-block text-neutral-500 text-base md:text-lg font-normal tracking-wide"
              style={{
                animation: 'rollDownSmooth 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              }}
            >
              {roles[roleIndex]}
            </span>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={HERO_DATA.cvUrl}
              download="CV_Steven_Immanoel.pdf"
              className="bg-[#111111] text-white px-6 py-3 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2.5 hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <ArrowDownToLine className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="border border-[#111111] text-[#111111] px-6 py-3 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2.5 hover:bg-neutral-100 transition-colors"
            >
              See all project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Tombol Media Sosial (Responsif: Mendatar di HP, Vertikal di Desktop) */}
        <div className="flex flex-col items-start md:items-end shrink-0 w-full md:w-auto">
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3 md:mb-4">
            Connect
          </span>
          {/* Menggunakan flex-row di mobile/Android agar berderet rapi ke samping, dan flex-col di md (desktop) */}
          <div className="flex flex-row md:flex-col gap-3 relative flex-wrap">
            {socials.map((s, idx) => {
              const IconComp = s.icon;
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={s.id}
                  className="relative flex items-center"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-11 h-11 md:w-14 md:h-14 rounded-full border border-[#D8D8D8] flex items-center justify-center transform transition-all duration-300 ease-out active:scale-95 ${
                      isHovered
                        ? 'bg-[#111111] text-white border-[#111111] scale-110 shadow-lg'
                        : 'bg-white text-neutral-700 hover:border-black hover:scale-105 shadow-2xs'
                    }`}
                  >
                    <IconComp className="w-4 h-4 md:w-6 md:h-6 transition-transform duration-300" />
                  </a>

                  {/* Tooltip label hanya muncul pada layar komputer atau saat interaksi hover */}
                  {isHovered && (
                    <div className="hidden md:flex absolute left-full ml-3.5 z-30 whitespace-nowrap bg-[#111111] text-white text-xs px-3.5 py-2 rounded-lg shadow-lg items-center gap-2 animate-in fade-in zoom-in-95 duration-200">
                      <span>{s.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}