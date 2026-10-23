import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="border border-[#D8D8D8] rounded-2xl p-6 sm:p-10 bg-white shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Kolom Kiri: Pesan Ajakan */}
          <div className="md:col-span-6">
            <span className="text-[11px] font-bold text-[#5EDDD0] uppercase tracking-wider bg-[#E6FAF8] px-2 py-0.5 rounded border border-[#5EDDD0]/40">
              Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-3 tracking-tight">
              Let's talk system
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
              Have a project in mind, looking for collaboration, or just want to say hi? Feel free to reach out.
            </p>
          </div>

          {/* Kolom Kanan: 4 Kartu Link */}
          <div className="md:col-span-6 flex flex-col gap-2.5">
            {/* GitHub (Black Card) */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#111111] text-white p-3.5 rounded-xl flex items-center justify-between hover:bg-neutral-800 transition-colors shadow-xs"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5" />
                <div>
                  <div className="text-xs font-bold font-mono">GitHub</div>
                  <div className="text-[10px] text-neutral-400">github.com/stevenimmanoel</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </a>

            {/* Email (White Card) */}
            <a
              href="mailto:contact@stevenimmanoel.com"
              className="bg-white border border-[#D8D8D8] text-black p-3.5 rounded-xl flex items-center justify-between hover:border-black transition-colors shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neutral-700" />
                <div>
                  <div className="text-xs font-bold font-mono">Email</div>
                  <div className="text-[10px] text-neutral-500">contact@stevenimmanoel.com</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </a>

            {/* LinkedIn (Light Blue Card) */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#EBF5FB] border border-[#CDE5F6] text-[#0A66C2] p-3.5 rounded-xl flex items-center justify-between hover:border-[#0A66C2] transition-colors"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5" />
                <div>
                  <div className="text-xs font-bold font-mono text-[#0A66C2]">LinkedIn</div>
                  <div className="text-[10px] text-neutral-600">linkedin.com/in/stevenimmanoel</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0A66C2]/70" />
            </a>

            {/* Instagram (Light Pink Card) */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#FDEEF4] border border-[#F9CFE0] text-[#D82D7E] p-3.5 rounded-xl flex items-center justify-between hover:border-[#D82D7E] transition-colors"
            >
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5" />
                <div>
                  <div className="text-xs font-bold font-mono text-[#D82D7E]">Instagram</div>
                  <div className="text-[10px] text-neutral-600">@stevenimmanoel</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#D82D7E]/70" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}