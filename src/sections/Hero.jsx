import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, ThreadsIcon } from '../components/SocialIcons';
import { HERO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Variabel teks dasar untuk animasi mengetik
  const marketingText = "Designing and building a website that supports your needs.";
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Daftar opsi peran yang akan bergulir secara bergantian
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

  // Pengaturan alur dan kecepatan animasi mengetik
  useEffect(() => {
    let timer;

    // Durasi pengetikan setiap karakter (milidetik)
    const typingSpeed = 65;

    // Durasi penghapusan setiap karakter saat mundur (milidetik)
    const deletingSpeed = 35;

    // Waktu tunggu saat teks sudah terketik utuh sebelum mulai dihapus (milidetik)
    const pauseAfterFullText = 2200;

    // Waktu tunggu saat teks sudah kosong sebelum mulai mengetik ulang (milidetik)
    const pauseAfterDelete = 600;

    if (!isDeleting && displayText.length < marketingText.length) {
      timer = setTimeout(() => {
        setDisplayText(marketingText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === marketingText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterFullText);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(marketingText.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, pauseAfterDelete);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, marketingText]);

  // Pengaturan rotasi teks posisi pekerjaan ke arah bawah
  useEffect(() => {
    // Interval waktu pergantian teks sebelum bergulir ke peran berikutnya (milidetik)
    const roleChangeInterval = 2800;

    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, roleChangeInterval);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12">
      {/* Definisi keyframe untuk pergerakan teks meluncur dari atas ke posisi normal */}
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
        
        {/* Kolom Kiri: Avatar, Headline Animasi Mengetik, dan Subtitle Rolling */}
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

          {/* Area headline dengan batas tinggi minimum agar tata letak di bawahnya tidak bergeser naik-turun */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.25] tracking-tight mb-5 text-[#111111] min-h-[4.5rem] sm:min-h-[5.5rem] md:min-h-[7.5rem]">
            <span>{displayText}</span>
            <span className="inline-block w-[3px] h-7 sm:h-9 md:h-11 bg-[#111111] ml-1.5 align-middle animate-pulse" />
          </h1>
          
          {/* Kontainer rolling teks yang membatasi tampilan luar dengan overflow-hidden */}
          <div className="h-8 md:h-9 overflow-hidden flex items-center mb-10">
            <span
              key={roleIndex}
              className="inline-block text-neutral-500 text-base md:text-lg font-normal tracking-wide"
              style={{
                // Durasi serta kurva kehalusan geseran teks ke bawah
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

        {/* Kolom Kanan: Tombol Media Sosial */}
        <div className="flex flex-col items-start md:items-end shrink-0">
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4">
            Connect
          </span>
          <div className="flex flex-col gap-3.5 relative">
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
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#D8D8D8] flex items-center justify-center transform transition-all duration-300 ease-out active:scale-95 ${
                      isHovered
                        ? 'bg-[#111111] text-white border-[#111111] scale-110 shadow-lg'
                        : 'bg-white text-neutral-700 hover:border-black hover:scale-105 shadow-2xs'
                    }`}
                  >
                    <IconComp className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
                  </a>

                  {isHovered && (
                    <div className="absolute left-full ml-3.5 z-30 whitespace-nowrap bg-[#111111] text-white text-xs px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in zoom-in-95 duration-200">
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