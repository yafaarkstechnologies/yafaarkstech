'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';
import { Clock } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'Brief & Intelligence',
    desc: 'We learn your business, goals, and audience — then define the technical scope and SEO/AEO strategy.',
    duration: '1–2 Days',
    bg: '#0F0E0D'
  },
  {
    num: '02',
    title: 'Design & Build',
    subtitle: 'Engineering & UI',
    desc: 'UI design and full-stack development in parallel. Performance and accessibility baked in from the start.',
    duration: '1–3 Weeks',
    bg: '#141618'
  },
  {
    num: '03',
    title: 'Optimise',
    subtitle: 'SEO · AEO · GEO',
    desc: 'Technical SEO audit, AEO content structuring, and GEO entity signals applied before launch.',
    duration: '3–5 Days',
    bg: '#1A1714'
  },
  {
    num: '04',
    title: 'Launch',
    subtitle: 'Deploy & Handover',
    desc: 'Clean deployment, CMS handoff, and final performance check. Live and visible from day one.',
    duration: '1–2 Days',
    bg: '#0A0A0A'
  },
];

export default function ProcessMobile() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActive(0);
    else if (latest < 0.5) setActive(1);
    else if (latest < 0.75) setActive(2);
    else setActive(3);
  });

  return (
    <div ref={containerRef} id="process" className="relative flex min-h-[140vh] flex-col w-full bg-background z-10 items-center justify-center py-48 mt-80 mb-80">
      
      {/* Background Transition Layer */}
      <motion.div 
        animate={{ backgroundColor: steps[active].bg }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      />

      <div className="flex flex-col gap-12 px-6 py-24 items-center w-full">
        
        {/* Header Block */}
        <div className="flex flex-col gap-4 items-center text-center">
           <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[0.55rem] uppercase tracking-[0.45em] text-accent font-semibold"
          >
            [ The Process ]
          </motion.span>
          <h2 className="font-serif text-[clamp(1.8rem,8vw,2.5rem)] leading-none tracking-tight text-white/95">
            Phase by Phase.
          </h2>
        </div>

        {/* Timeline Feed */}
        <div className="flex flex-col gap-20 relative w-full items-center">
          {/* Vertical central line progress - centered locally */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-white/10 overflow-hidden">
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="w-full h-full bg-accent origin-top"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-6 w-full text-center"
            >
              {/* Node indicator - centered */}
              <div className="relative flex flex-col items-center">
                <div className={`z-10 w-[42px] h-[42px] rounded-full border flex items-center justify-center font-serif text-lg transition-all duration-700 ${active === i ? 'bg-accent text-black border-accent' : 'bg-black/50 text-white/40 border-white/10 backdrop-blur-md'}`}>
                  {step.num}
                </div>
              </div>

              {/* Content Panel */}
              <div className="flex flex-col gap-3 items-center max-w-[260px]">
                <div className="flex flex-col gap-1 items-center">
                  <span className="font-mono text-[0.45rem] uppercase tracking-widest text-accent/80 font-bold">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-xl leading-none tracking-tight text-white/95">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-[0.75rem] text-white/35 font-light leading-relaxed">
                  {step.desc}
                </p>
                
                <div className={`mt-1 flex items-center gap-2.5 w-max px-3 py-1.5 rounded-full border transition-all duration-700 ${active === i ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5 opacity-50'}`}>
                  <Clock className={`w-2.5 h-2.5 transition-colors ${active === i ? 'text-accent' : 'text-white/30'}`} />
                  <span className="font-mono text-[0.45rem] uppercase tracking-widest text-white/80">
                    {step.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Persistent Progress Bar anchored right */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 h-32 flex flex-col items-center gap-2 pointer-events-none z-50">
        <span className="font-mono text-[0.45rem] tracking-widest text-white/20 uppercase rotate-90 mb-4">Phase</span>
        <div className="w-[1px] flex-1 bg-white/10 relative">
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-0 w-full h-full bg-accent origin-top shadow-[0_0_15px_rgba(191,161,129,0.5)]"
          />
        </div>
      </div>
    </div>
  );
}
