import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="pt-8 pb-16">
      <div className="mb-10">
        <span className="text-[11px] font-bold text-[#9BD8F5] uppercase tracking-wider bg-[#EBF6FC] px-2 py-0.5 rounded border border-[#9BD8F5]/40">
          Work History
        </span>
        <h2 className="text-2xl font-bold mt-2 tracking-tight">Work Experience</h2>
      </div>

      <div className="space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
            <span className="w-36 text-xs font-mono text-neutral-400 shrink-0">
              {exp.period}
            </span>
            <div className="flex items-start gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: exp.dotColor }}
              />
              <div>
                <h3 className="font-bold text-base tracking-tight">{exp.company}</h3>
                <span className="text-xs font-semibold text-neutral-700 block mb-2 font-mono">
                  {exp.role}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}