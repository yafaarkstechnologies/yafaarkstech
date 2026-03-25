'use client';

import { motion } from 'motion/react';

export default function WorkIntro() {
  return (
    <div className="flex h-screen min-w-[100vw] max-w-[100vw] w-[100vw] shrink-0 items-center justify-center bg-background px-6 pt-16 md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center gap-12 text-center"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="font-serif text-[clamp(2rem,10vw,12rem)] tracking-tight leading-none flex gap-[2vw] overflow-hidden p-2"
        >
          {['Our', 'Work.'].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: "110%", opacity: 0, rotateZ: 4 },
                visible: { y: 0, opacity: 1, rotateZ: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              className={i === 1 ? "italic text-accent" : ""}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 text-center max-w-md"
        >
          <p className="text-[0.75rem] md:text-[0.82rem] text-foreground/40 font-light leading-relaxed px-4">
            Performant code, structured content, and search visibility from day one.
            <span className="text-accent/60"> Different domains, one standard.</span>
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 opacity-50"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
          <span className="font-mono text-xs uppercase tracking-[0.4em]">Scroll</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
