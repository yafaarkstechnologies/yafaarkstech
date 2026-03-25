'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-background text-white flex flex-col items-center relative overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-[150px] pointer-events-none"
      />

      <div className="max-w-5xl w-full text-center relative z-10 flex flex-col items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.6em] text-accent font-semibold">
            [ Final Thought ]
          </span>
          <h2 className="text-4xl md:text-8xl lg:text-[10rem] font-serif italic leading-[0.85] tracking-tighter">
            Stop Asking. <br />
            <span className="text-white/20">Start Leading.</span>
          </h2>
        </motion.div>

        <p className="text-lg md:text-3xl font-sans opacity-60 max-w-3xl leading-relaxed italic font-light px-4">
          Yafaarks Technologies doesn&apos;t just build websites. We architect authority. Are you ready to claim yours?
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-6 md:gap-12 px-8 py-5 md:px-12 md:py-8 bg-white text-black rounded-full font-mono text-[0.65rem] md:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-700 hover:bg-accent mt-4 md:mt-8 shadow-2xl shadow-white/5 border border-white/10 w-auto"
        >
          Initiate Extraction
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700">
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
          </div>
        </motion.button>
      </div>

      <div className="mt-40 flex flex-col items-center gap-6 opacity-30">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.4em] leading-none font-semibold text-accent">yafaarks</span>
        <div className="w-[1px] h-32 bg-white/50" />
      </div>
    </section>
  );
}
