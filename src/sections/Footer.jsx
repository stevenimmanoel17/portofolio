import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    let startTime = null; // Ubah const menjadi let di sini
    const duration = 800; 

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, -startPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <footer className="w-full bg-[#111111] text-white py-8 px-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div>
            © {new Date().getFullYear()} Steven Immanoel.
          </div>
          <div className="text-neutral-500">
            Build with React, Tailwind CSS, and prayer.
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
        >
          Back to top
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}