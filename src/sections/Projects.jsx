import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="pt-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
        <div>
          <span className="text-[11px] font-bold text-[#F58A8A] uppercase tracking-wider bg-[#FDEEEE] px-2 py-0.5 rounded border border-[#F58A8A]/30">
            Selected Works
          </span>
          <h2 className="text-2xl font-bold mt-2 tracking-tight">Project</h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            A collection of web applications and digital experiences I've built.
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-400">
          0{PROJECTS.length} / Total Projects
        </span>
      </div>

      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="group border border-[#D8D8D8] rounded-xl overflow-hidden bg-white p-4 hover:border-black transition-all duration-200 flex flex-col justify-between shadow-xs"
          >
            <div>
              {/* Gambar Proyek dengan Hover Zoom Halus */}
              <div className="w-full h-48 rounded-lg overflow-hidden border border-[#E5E5E5] mb-4 bg-neutral-100">
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

            {/* Tag Badges di Bawah */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-neutral-100">
              {proj.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}