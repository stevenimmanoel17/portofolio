import React, { useState, useEffect, useRef } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
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

  const socials = [
    {
      id: 1,
      name: "GitHub",
      val: "stevenimmanoel17",
      href: "https://github.com/stevenimmanoel17",
      icon: GithubIcon,
      bg: "bg-[#111111] text-white",
      border: "border-transparent hover:bg-neutral-800",
      subText: "text-neutral-400"
    },
    {
      id: 2,
      name: "Email",
      val: "stevenimmanoel15@gmail.com",
      href: "mailto:stevenimmanoel15@gmail.com?subject=Halo%20Walawe&body=Halo,%20saya%20ingin%20menghubungi%20Anda.",
      icon: Mail,
      bg: "bg-white text-black",
      border: "border-[#D8D8D8] hover:border-black",
      iconColor: "text-neutral-700",
      subText: "text-neutral-500"
    },
    {
      id: 3,
      name: "LinkedIn",
      val: "Steven immanoel",
      href: "https://www.linkedin.com/in/steven-immanoel/",
      icon: LinkedinIcon,
      bg: "bg-[#EBF5FB] text-[#0A66C2]",
      border: "border-[#CDE5F6] hover:border-[#0A66C2]",
      subText: "text-neutral-600"
    },
    {
      id: 4,
      name: "Instagram",
      val: "nooeell.exe",
      href: "https://www.instagram.com/nooeell.exe/",
      icon: InstagramIcon,
      bg: "bg-[#FDEEF4] text-[#D82D7E]",
      border: "border-[#F9CFE0] hover:border-[#D8D8D8]",
      subText: "text-neutral-600"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-16 overflow-hidden">
      <style>{`
        @keyframes socialRoll {
          0% {
            transform: translateY(0);
          }
          100% {
            /* Bergeser tepat sejauh satu set data penuh (misal 4 item) agar transisi perulangannya tak terlihat patah */
            transform: translateY(calc(-100% / 3));
          }
        }
        .animate-social-roll {
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: socialRoll 12s linear infinite;
        }
      `}</style>

      {/* Box Utama dengan Efek Timbul ke Atas */}
      <div
        className={`border border-[#D8D8D8] rounded-2xl p-6 sm:p-10 bg-white shadow-xs transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Kolom Kiri: Pesan Ajakan */}
          <div className="md:col-span-6 flex flex-col justify-start items-start text-left">
            <span className="text-[#5EDDD0] font-bold text-lg font-mono tracking-wide block mb-3">
              Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-3 tracking-tight">
              Let's talk system
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
              Have a project in mind, looking for collaboration, or just want to say hi? Feel free to reach out.
            </p>
          </div>

          {/* Kolom Kanan: Efek Rolling Kartu Sosial Media */}
          <div className="md:col-span-6 h-56 overflow-hidden relative rounded-xl p-2 bg-transparent flex flex-col justify-center">
            
            {/* Wrapper Animasi Rolling (Diduplikasi 3 kali agar pergeseran kalkulasi persentasenya mulus tanpa jeda) */}
            <div 
              className="animate-social-roll"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {[...socials, ...socials, ...socials].map((s, idx) => {
                const IconComp = s.icon;
                return (
                  <a
                    key={`${s.id}-${idx}`}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${s.bg} border ${s.border} p-3.5 rounded-xl flex items-center justify-between transition-all shadow-xs shrink-0 cursor-pointer`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComp className={`w-5 h-5 ${s.iconColor || ''}`} />
                      <div>
                        <div className="text-xs font-bold font-mono">{s.name}</div>
                        <div className={`text-[10px] ${s.subText}`}>{s.val}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </a>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}