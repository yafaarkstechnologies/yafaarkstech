'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const sentence = "Senior-level work. No bloat.";

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
    <span ref={ref} className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-right tabular-nums">
      {target === null ? suffix : `${count}${suffix}`}
    </span>
  );
}

export default function Philosophy() {
  const words = sentence.split(' ');

  return (
    <div id="agency" className="flex h-screen min-w-[100vw] max-w-[100vw] w-[100vw] shrink-0 items-center justify-center px-6 md:px-16 lg:px-24 pt-32 md:pt-0 bg-background z-10 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-28 items-center">

        {/* Left: copy */}
        <div className="flex flex-col gap-8 lg:gap-12 lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-20%' }}
            className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-accent font-semibold"
          >
            [ About Yafaarks ]
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-20%' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="text-3xl md:text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tight flex flex-wrap gap-x-4 gap-y-2"
          >
            {words.map((word, i) => (
              <div key={i} className="flex overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: "150%", rotateX: -60 },
                    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className={word.toLowerCase().includes('bloat') ? 'italic text-accent' : ''}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ margin: '-20%' }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-lg font-sans text-foreground/60 leading-relaxed font-light max-w-xl relative"
          >
            <span className="absolute -left-5 top-2 w-2 h-[1px] bg-accent" />
            We’re a lean, focused team that builds high-performance web applications and implements the search strategies that make them visible. Every project gets the same level of craft — whether it’s a startup’s first product or a growing business’s next evolution.
          </motion.p>
        </div>

        {/* Right: animated counters */}
        <div className="lg:col-span-5 flex flex-col">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.15 + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-8 py-7 border-b border-white/8 hover:border-accent/25 transition-colors duration-700 cursor-default"
            >
              <motion.span
                className="group-hover:text-accent transition-colors duration-700"
              >
                <Counter target={stat.target} suffix={stat.suffix} />
              </motion.span>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-foreground/35 font-semibold">Metric</span>
                <span className="font-sans text-sm font-light text-foreground/65 leading-tight">{stat.label}</span>
              </div>

              <div className="ml-auto w-0 h-[1px] bg-accent group-hover:w-10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
