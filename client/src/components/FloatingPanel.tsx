import { motion, useTransform, useSpring } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface FloatingPanelProps {
  children: ReactNode;
  isActive: boolean;
  index: number;
  activeIndex: number;
  mouseX: any; // MotionValue
}

export default function FloatingPanel({ 
  children, 
  isActive, 
  index,
  activeIndex,
  mouseX 
}: FloatingPanelProps) {
  const offset = index - activeIndex;
  const isMobile = useIsMobile();
  
  const parallaxX = useTransform(mouseX, [-1, 1], [30, -30]);
  const springConfig = { stiffness: 200, damping: 30, mass: 1 };
  const smoothParallax = useSpring(parallaxX, springConfig);

  // Mobile: centered single panel, no parallax/perspective; Desktop: full carousel
  const animateProps = isMobile
    ? {
        x: `calc(-50% + ${offset * 100}%)`,
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.3,
        z: isActive ? 0 : -150,
        rotateY: 0,
      }
    : {
        x: `calc(-50% + ${offset * 105}% + ${offset * 20}px)` as const,
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.3,
        z: isActive ? 0 : -150,
        rotateY: offset * -8,
      };

  const styleProps = isMobile
    ? {
        left: "50%" as const,
        translateX: 0,
        zIndex: isActive ? 50 : 40 - Math.abs(offset),
        filter: isActive ? "blur(0px)" : "blur(4px)",
      }
    : {
        left: "50%" as const,
        translateX: smoothParallax,
        zIndex: isActive ? 50 : 40 - Math.abs(offset),
        filter: isActive ? "blur(0px)" : "blur(4px)",
      };

  return (
    <motion.div
      className={cn(
        "absolute top-0 bottom-0 my-auto",
        "w-[95vw] max-w-[95vw] md:w-[450px] md:max-w-none lg:w-[500px]",
        "h-full max-h-[80vh] md:max-h-[650px]", 
        "transition-all duration-700 ease-out",
        "mx-auto md:mx-0",
        "origin-center"
      )}
      initial={false}
      animate={animateProps}
      style={styleProps}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 25
      }}
    >
      <div className={cn(
        "w-full h-full rounded-2xl overflow-hidden relative",
        "glass-panel border border-white/10 shadow-2xl",
        isActive ? "border-primary/20 shadow-primary/10" : "bg-black/60"
      )}>
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-white/5 pointer-events-none" />
        )}
        
        <div className="h-full w-full relative z-10 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
