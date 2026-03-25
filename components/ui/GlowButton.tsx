'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function GlowButton({
  children,
  className,
  variant = 'primary',
  ...props
}: GlowButtonProps) {
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className={cn(
        "group relative font-mono text-[0.8rem] md:text-[0.9rem] uppercase tracking-[0.3em] font-bold",
        "px-12 py-6 md:px-16 md:py-8 rounded-full transition-all duration-300 overflow-hidden",
        variant === 'primary' 
          ? "bg-accent text-black hover:bg-white hover:text-black" 
          : "bg-white/5 text-foreground/50 hover:bg-white/10 hover:text-foreground",
        className
      )}
      {...props}
    >
      <motion.span 
        variants={{
          hover: { x: 5 },
          initial: { x: 0 }
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-center gap-3"
      >
        {children}
      </motion.span>

      {/* Fast Background Overlay for Secondary */}
      {variant !== 'primary' && (
        <motion.div
           variants={{
            hover: { opacity: 1 },
            initial: { opacity: 0 }
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-white/5 -z-10"
        />
      )}
    </motion.button>
  );
}
