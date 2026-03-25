'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function HorizontalScroll({ children, pages = 5 }: { children: React.ReactNode, pages?: number }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${((pages - 1) / pages) * 100}%`]);

  return (
    <section ref={targetRef} className="relative" style={{ height: `${pages * 100}svh` }}>
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.div 
          className="flex flex-nowrap h-full"
          style={{ 
            x, 
            width: `${pages * 100}vw` 
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
