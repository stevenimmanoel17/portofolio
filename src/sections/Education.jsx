import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="pt-8 pb-16">
      <h2 className="text-2xl font-bold mb-10 tracking-tight">Education</h2>

      <div className="space-y-6">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
            <span className="w-36 text-xs font-mono text-neutral-400 shrink-0">
              {edu.period}
            </span>
            <div className="flex items-start gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: edu.dotColor }}
              />
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-base tracking-tight">{edu.institution}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-100 border border-neutral-200 rounded text-neutral-600">
                    {edu.badge}
                  </span>
                </div>
                <span className="text-xs font-semibold text-neutral-700 block mb-2 font-mono">
                  {edu.degree}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}