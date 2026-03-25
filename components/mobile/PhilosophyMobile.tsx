'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 15, suffix: '+', label: 'Projects Delivered' },
  { target: 5, suffix: '+', label: 'Industries Served' },
  { target: null, suffix: '4-in-1', label: 'Dev · SEO · AEO · GEO' },
];

function Counter({ target, suffix }: { target: number | null; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: '-10%' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-serif text-4xl font-medium tracking-tight leading-none text-accent tabular-nums">
      {target === null ? suffix : `${count}${suffix}`}
    </span>
  );
}

export default function PhilosophyMobile() {
  const sentence = "Senior-level work. No bloat.";
  const words = sentence.split(' ');

  return (
    <div id="agency" className="relative flex min-h-[120vh] w-full flex-col px-6 py-64 bg-background overflow-hidden z-10 items-center justify-center text-center">
      <div className="flex flex-col gap-12 items-center w-full">
        
        {/* Header Block */}
        <div className="flex flex-col gap-6 items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            className="font-mono text-[0.55rem] uppercase tracking-[0.4em] text-accent font-semibold"
          >
            [ Our Story ]
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="text-[clamp(1.8rem,8vw,2.5rem)] font-serif leading-none tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-1 max-w-[300px]"
          >
            {words.map((word, i) => (
              <div key={i} className="flex overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: "100%", rotateX: -60 },
                    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className={word.toLowerCase().includes('bloat') ? 'italic text-accent' : 'text-white/95'}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[0.85rem] font-sans text-foreground/45 leading-relaxed font-light max-w-[260px]"
          >
            We’re a lean team building high-performance web products. Every project gets the same level of senior-level craft.
          </motion.p>
        </div>

        {/* Stats Grid - Glassmorphic Cards */}
        <div className="flex flex-col gap-3 mt-4 w-full max-w-[280px]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md"
            >
              <div className="flex-shrink-0">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[0.4rem] uppercase tracking-[0.3em] text-foreground/30 font-bold mb-0.5">Metric</span>
                <span className="font-sans text-[0.7rem] font-light text-foreground/60 leading-tight">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Abstract background detail */}
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-accent/[0.03] rounded-full blur-[80px] -z-10 translate-x-1/4" />
    </div>
  );
}
