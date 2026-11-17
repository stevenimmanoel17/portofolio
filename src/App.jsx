import React from 'react';
import MiniPillNav from './components/MiniPillNav';
import Hero from './pages/Hero';
import About from './pages/About';
import TechnologyStack from './pages/TechnologyStack';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#F3D94E]/40 selection:text-black">
      {/* Floating Topbar */}
      <MiniPillNav />

      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        <Hero />
      </main>

      {/* Main Container Bergaris Tipis */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8">
        <About />
        <TechnologyStack />
        <Projects />
        <Experience />
        <Education />
      </main>

      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        <Contact />
      </main>

      {/* Black Footer */}
      <Footer />
    </div>
  );
}