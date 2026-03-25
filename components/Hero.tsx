'use client';

import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { Button } from './ui/button';

export default function Hero() {
  const lenis = useLenis();
  return (
    <div className="relative flex h-screen min-w-[100vw] max-w-[100vw] w-[100vw] shrink-0 flex-col items-center justify-center overflow-hidden gap-8 px-6 md:px-6 pt-20 md:pt-0 bg-background z-10">

      {/* Centered Logo — staggered letter reveal */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
          }
        }}
        className="flex flex-col items-center gap-[6px] select-none overflow-hidden"
      >
        <span className="font-serif text-[clamp(2.5em,10vw,9rem)] tracking-[-0.025em] leading-none text-accent font-normal flex">
          {"yafaarks".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: "100%", opacity: 0, scale: 0.8 },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 1 } }
          }}
          className="font-mono text-[clamp(0.45rem,1.2vw,0.75rem)] uppercase tracking-[0.55em] text-foreground font-semibold"
        >
          Technologies
        </motion.span>
      </motion.div>

      {/* Hero copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-10 text-center max-w-2xl"
      >
        <h1 className="font-sans text-[clamp(0.85rem,2vw,1.3rem)] font-light text-foreground/75 leading-relaxed tracking-tight px-4 flex-wrap">
          We build websites that rank, load fast, and convert.
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 md:pt-4 w-auto">
          <motion.span
            onClick={() => lenis?.scrollTo('#contact')}
            className="cursor-pointer text-[0.7rem] uppercase tracking-[0.2em] font-mono font-bold hover:text-accent transition-colors duration-300"
          >
            Start a project
          </motion.span>

          <motion.span
            onClick={() => lenis?.scrollTo('#work')}
            className="cursor-pointer text-[0.7rem] uppercase tracking-[0.2em] font-mono font-bold text-foreground/50 hover:text-foreground transition-colors duration-300"
          >
            See our work
          </motion.span>
        </div>
      </motion.div>

      {/* Scroll indicator — bottom center text only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="font-mono text-[0.45rem] uppercase tracking-[0.45em] text-white font-medium"
        >
          Scroll
        </motion.span>
      </motion.div>

      {/* Contact Button — bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 right-6 md:bottom-10 md:right-12"
      >
        <motion.span
          onClick={() => lenis?.scrollTo('#contact')}
          className="cursor-pointer text-[0.65rem] lowercase tracking-[0.2em] font-mono font-medium hover:text-accent transition-colors duration-300"
        >
          Contact Us
        </motion.span>
      </motion.div>
    </div>
  );
}
