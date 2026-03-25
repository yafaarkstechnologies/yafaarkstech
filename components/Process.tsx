'use client';

import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';
import { Clock } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'Brief & Intelligence',
    desc: 'We learn your business, goals, and audience — then define the technical scope and SEO/AEO strategy before a single line of code is written.',
    duration: '1–2 Days',
    bg: '#0F0E0D'
  },
  {
    num: '02',
    title: 'Design & Build',
    subtitle: 'Engineering & UI',
    desc: 'UI design and full-stack development in parallel. Performance and accessibility baked in from the start — not bolted on at the end.',
    duration: '1–3 Weeks',
    bg: '#141618'
  },
  {
    num: '03',
    title: 'Optimise',
    subtitle: 'SEO · AEO · GEO',
    desc: 'Technical SEO audit, structured data implementation, AEO content structuring, and GEO entity signals — applied before launch.',
    duration: '3–5 Days',
    bg: '#1A1714'
  },
  {
    num: '04',
    title: 'Launch & Handoff',
    subtitle: 'Deploy & Handover',
    desc: 'Clean deployment, CMS handoff, and a final performance check. You get a site that’s live, fast, and visible from day one.',
    duration: '1–2 Days',
    bg: '#0A0A0A'
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const [active, setActive] = useState(0);

  // Trigger state based on vertical scroll progression
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActive(0);
    else if (latest < 0.5) setActive(1);
    else if (latest < 0.75) setActive(2);
    else setActive(3);
  });

  return (
    <div ref={containerRef} id="process" className="relative h-[400vh] w-full bg-background mt-[-1px] z-10 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Dynamic Background */}
        <motion.div
          className="absolute inset-0 transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: steps[active].bg }}
        />

        {/* Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none mix-blend-screen">
          <div className="w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[120px] transition-all duration-1000 scale-150" />
        </div>

        <div className="relative z-10 w-full h-full max-w-7xl px-6 md:px-16 lg:px-24 flex flex-col justify-center items-center">

          {/* Header pinned at top */}
          <div className="absolute top-10 left-0 right-0 md:top-16 md:left-16 lg:left-24 flex flex-col items-center md:items-start px-8 md:px-0">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-accent font-semibold block">
              [ The Process ]
            </span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 0.3, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
              }}
              className="text-2xl md:text-5xl font-serif tracking-tight mt-4 select-none flex overflow-hidden text-center md:text-left"
            >
              {"How we work.".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className={letter === " " ? "w-[0.3em]" : "inline-block"}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 relative mt-16 md:mt-0">
            {/* Left side: Big Numbers */}
            <div className="w-full md:w-1/2 flex justify-start md:justify-end items-center h-[20vh] md:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`num-${active}`}
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', y: 40 }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', y: -40 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex justify-center md:justify-end w-full"
                >
                  <h3 className="font-serif text-[clamp(5rem,15vw,24rem)] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/5 select-none pl-0 md:pl-0">
                    {steps[active].num}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center h-[50vh] md:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${active}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[0.6rem] md:text-xs uppercase tracking-[0.3em] text-accent/80 font-medium whitespace-nowrap">
                      {steps[active].subtitle}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </div>

                  <h4 className="text-3xl md:text-6xl lg:text-7xl font-serif tracking-tight text-white m-0 leading-[0.9] text-center md:text-left">
                    {steps[active].title}
                  </h4>

                  <p className="text-[0.8rem] md:text-lg text-foreground/60 font-light leading-relaxed max-w-[280px] md:max-w-md pt-2 text-center md:text-left">
                    {steps[active].desc}
                  </p>

                  <div className="mt-6 md:mt-8 flex items-center gap-4 glass w-max px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md self-center md:self-start">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    <span className="font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] font-medium text-white/80">
                      Phase: {steps[active].duration}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress bar anchored bottom */}
          <div className="absolute bottom-10 left-8 right-8 md:bottom-16 md:left-16 md:right-16 lg:left-24 lg:right-24 flex items-center gap-4">
            <div className="font-mono text-[0.5rem] uppercase tracking-[0.3em] opacity-40">01</div>
            <div className="h-[1px] flex-1 bg-white/10 overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-accent origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
            <div className="font-mono text-[0.5rem] uppercase tracking-[0.3em] opacity-40">04</div>
          </div>

        </div>
      </div>
    </div>
  );
}
