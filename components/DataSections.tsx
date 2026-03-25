'use client';

import { motion } from 'motion/react';

const dataCards = [
  {
    kpi: '400%',
    metric: 'Average Engagement Lift',
    desc: 'Through kinetic interactions and meticulously engineered scroll paths.',
    label: '[ Metric 01 ]'
  },
  {
    kpi: '< 0.8s',
    metric: 'Global TTI Latency',
    desc: 'Edge-distributed Next.js applications delivering instant interactivity.',
    label: '[ Metric 02 ]'
  },
  {
    kpi: '$12M+',
    metric: 'Attributed Revenue',
    desc: 'Generated through conversion-optimized flows and Fitts\'s Law principles.',
    label: '[ Metric 03 ]'
  }
];

export default function DataSections() {
  return (
    <>
      {dataCards.map((card, i) => (
        <div key={i} className="flex h-screen w-screen shrink-0 items-center justify-center bg-background px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl p-12 md:p-20 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-md relative overflow-hidden"
          >
            {/* Background accent glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-16 md:gap-24">
              <span className="font-mono text-[0.6rem] md:text-xs uppercase tracking-[0.4em] text-accent font-semibold flex items-center gap-4">
                {card.label}
                <div className="h-[1px] w-12 bg-accent/50" />
              </span>

              <div className="flex flex-col gap-6">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                  }}
                  className="font-serif text-[clamp(5rem,12vw,10rem)] tracking-tighter leading-none m-0 flex overflow-hidden"
                >
                  {card.kpi.split('').map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      variants={{
                        hidden: { y: "150%", opacity: 0, rotateZ: 5 },
                        visible: { y: 0, opacity: 1, rotateZ: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h3>
                <h4 className="font-sans text-xl md:text-3xl font-light tracking-tight opacity-90">
                  {card.metric}
                </h4>
                <p className="font-sans text-sm md:text-base font-light opacity-50 max-w-md leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </>
  );
}
