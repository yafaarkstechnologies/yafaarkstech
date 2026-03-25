'use client';

import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useRef, useState } from 'react';

export default function Header() {
  const [pastHero, setPastHero] = useState(false);
  const { scrollY } = useScroll();

  // Hero is one screen tall — once we've scrolled past ~80vh, show the logo
  useMotionValueEvent(scrollY, 'change', (v) => {
    setPastHero(v > window.innerHeight * 0.7);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-center pointer-events-auto md:pointer-events-none bg-background md:bg-transparent border-b border-white/5 md:border-none backdrop-blur-md md:backdrop-blur-none"
      style={{ height: '72px' }}
    >
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: -12, scale: 0.9 }}
        animate={pastHero
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: -12, scale: 0.9 }
        }
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex flex-col items-center gap-[4px] cursor-pointer group"
      >
        <span className="font-serif text-[1.8rem] md:text-[2rem] tracking-[-0.02em] leading-none text-accent group-hover:opacity-75 transition-opacity duration-300">
          yafaarks
        </span>
        <span className="font-mono text-[0.42rem] uppercase tracking-[0.48em] text-foreground/45 font-semibold">
          Technologies
        </span>
      </motion.button>
    </motion.header>
  );
}
