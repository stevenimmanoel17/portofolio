import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('web');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'web', label: 'Junior Web Developer', activeColor: 'bg-[#F58A8A] text-white' },
    { id: 'data', label: 'Data Analyst', activeColor: 'bg-[#8BD8A8] text-white' },
    { id: 'design', label: 'Graphic Design', activeColor: 'bg-[#C084FC] text-white' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => proj.category === activeTab);

  return (
    <section id="projects" ref={sectionRef} className="pt-8 pb-16">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>

      <div
        className={`transform transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <span className="text-[#F58A8A] font-bold text-sm sm:text-base font-mono tracking-wide block mb-3">
              Selected Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight font-mono">
              Project
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              A collection of web applications, data dashboards, and digital design works I've built.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            0{filteredProjects.length} / Total Shown
          </span>
        </div>

        {/* Tombol Filter Kategori (Tabs) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#D8D8D8] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer shadow-2xs ${
                activeTab === cat.id
                  ? `${cat.activeColor} scale-105 shadow-md`
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Proyek dengan Key agar Animasi Terpicu Saat Tab Berubah */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group border border-[#D8D8D8] rounded-xl overflow-hidden bg-white p-4 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs transform hover:-translate-y-1"
            >
              <div>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-[#E5E5E5] mb-4 bg-neutral-100 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-bold text-base mb-2 tracking-tight flex items-center justify-between">
                  {proj.title}
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-neutral-100">
                {proj.tags.map((tag, i) => (
                  <div
                    key={i}
                    title={tag.name}
                    className="w-9 h-9 bg-white border border-[#D8D8D8] rounded-lg p-1.5 flex items-center justify-center shadow-2xs hover:border-black transition-colors"
                  >
                    <img
                      src={tag.icon}
                      alt={tag.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = tag.fallback;
                      }}
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}