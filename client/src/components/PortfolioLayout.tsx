import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import FloatingPanel from "./FloatingPanel";
import Home from "./sections/Home";
import Recognitions from "./sections/Recognitions";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Now from "./sections/Now";
import Contact from "./sections/Contact";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SECTIONS = [
  { id: "home", component: <Home />, label: "01 // HOME" },
  { id: "recognitions", component: <Recognitions />, label: "02 // HONORS" },
  { id: "projects", component: <Projects />, label: "03 // WORKS" },
  { id: "about", component: <About />, label: "04 // JOURNEY" },
  { id: "blog", component: <Blog />, label: "05 // PERSPECTIVE" },
  { id: "now", component: <Now />, label: "06 // NOW" },
  { id: "contact", component: <Contact />, label: "07 // CONNECT" },
];

export default function PortfolioLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mouseX = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, currentTarget } = e;
    const { width } = currentTarget.getBoundingClientRect();
    const normalizedX = (clientX - width / 2) / (width / 2);
    mouseX.set(normalizedX);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex(prev => Math.min(prev + 1, SECTIONS.length - 1));
      } else if (e.key === "ArrowLeft") {
        setActiveIndex(prev => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div 
      className="h-screen w-screen overflow-hidden bg-background relative flex flex-col items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
      </div>

      {/* Nav - Fixed at top with proper spacing */}
      <nav className="relative w-full z-50 flex justify-center py-6 md:py-12 px-4">
        <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar py-2 max-w-full">
          {SECTIONS.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-[10px] font-mono tracking-widest transition-all whitespace-nowrap shrink-0 ${
                idx === activeIndex ? "text-primary border-b border-primary pb-1" : "text-white/20 hover:text-white/40"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Panels Area - Flex grow to fill space and prevent overlap */}
      <main className="relative flex-1 w-full flex items-center justify-center preserve-3d">
        {SECTIONS.map((section, idx) => (
          <FloatingPanel
            key={section.id}
            index={idx}
            activeIndex={activeIndex}
            isActive={idx === activeIndex}
            mouseX={mouseX}
          >
            {section.component}
          </FloatingPanel>
        ))}
      </main>

      {/* Arrows - Relative to screen for accessibility */}
      <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-50">
        <button 
          onClick={() => setActiveIndex(prev => Math.max(prev - 1, 0))}
          className={`p-3 md:p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all pointer-events-auto hover:bg-white/10 ${activeIndex === 0 ? "opacity-0 cursor-default" : "opacity-100"}`}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button 
          onClick={() => setActiveIndex(prev => Math.min(prev + 1, SECTIONS.length - 1))}
          className={`p-3 md:p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all pointer-events-auto hover:bg-white/10 ${activeIndex === SECTIONS.length - 1 ? "opacity-0 cursor-default" : "opacity-100"}`}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Progress Footer - Fixed at bottom */}
      <footer className="relative w-full z-50 flex flex-col items-center gap-4 py-8 md:py-12">
        <div className="w-32 md:w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            animate={{ width: `${((activeIndex + 1) / SECTIONS.length) * 100}%` }}
          />
        </div>
        <p className="text-[10px] font-mono text-white/20">SYSTEM PANEL {activeIndex + 1} OF {SECTIONS.length}</p>
      </footer>
    </div>
  );
}
