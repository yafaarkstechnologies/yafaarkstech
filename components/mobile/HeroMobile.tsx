'use client';

import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { Button } from '../ui/button';

export default function HeroMobile() {
  const lenis = useLenis();
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden gap-10 px-6 pt-32 pb-32 bg-background z-10 mb-20">

      {/* Brand Logo - Cinema-level Entrance */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.3 }
          }
        }}
        className="flex flex-col items-center gap-1.5 select-none"
      >
        <div className="flex">
          {"yafaarks".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: "100%", opacity: 0, scale: 0.8, filter: "blur(4px)" },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="inline-block font-serif text-[clamp(3.5rem,14vw,4.5rem)] tracking-[-0.035em] leading-none text-accent"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, delay: 1.2 } }
          }}
          className="font-mono text-[clamp(0.4rem,1.8vw,0.5rem)] uppercase tracking-[0.55em] text-foreground/60 font-medium"
        >
          Technologies
        </motion.span>
      </motion.div>

      {/* Hero copy - Balanced & Readable */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-7 text-center max-w-[300px]"
      >
        <h1 className="font-sans text-[clamp(1rem,4vw,1.15rem)] font-light text-foreground/80 leading-relaxed tracking-tight px-4">
          We build websites that <span className="text-white font-normal underline decoration-accent/30 decoration-2 underline-offset-4">rank</span>, load fast, and convert.
        </h1>

        <div className="flex flex-col items-center gap-4 w-full pt-2 max-w-[280px]">
          <Button
            size="xl"
            onClick={() => lenis?.scrollTo('#contact')}
            className="w-full"
          >
            Start a project
            <span className="active:translate-x-1 transition-transform duration-300">→</span>
          </Button>

          <Button
            variant="secondary"
            size="xl"
            onClick={() => lenis?.scrollTo('#work')}
            className="w-full"
          >
            See our work
          </Button>
        </div>
      </motion.div>

      {/* Ambient background detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-radial from-accent/[0.05] via-transparent to-transparent pointer-events-none -z-10" />

      {/* Scroll indicator with subtle animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-accent/50 to-transparent"
        />
        <span className="font-mono text-[0.45rem] uppercase tracking-[0.5em] text-white/20 font-medium">
          Scroll
        </span>
      </motion.div>
    </div>
  );
}
