import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-white py-8 px-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div>
          © {new Date().getFullYear()} Steven Immanoel. All rights reserved.
        </div>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          Back to top
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}