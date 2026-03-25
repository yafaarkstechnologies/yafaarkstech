'use client';

import { motion } from 'motion/react';

export default function FooterMobile() {
  return (
    <footer className="w-full px-6 py-24 bg-background border-t border-white/5 flex flex-col items-center gap-10 z-10 relative">
      <div className="flex flex-col items-center gap-2">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-2xl text-white tracking-tight"
        >
          yafaarks<span className="text-accent">.</span>
        </motion.span>
        <span className="font-mono text-[0.4rem] uppercase tracking-[0.6em] text-white/20 font-bold">Technologies</span>
      </div>
      
      <nav className="flex flex-col items-center gap-4">
        <div className="flex gap-6 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-white/40 font-semibold">
          <span className="hover:text-accent transition-colors">Twitter</span>
          <span className="hover:text-accent transition-colors">LinkedIn</span>
        </div>
        
        <div className="h-[1px] w-8 bg-white/10" />
        
        <div className="flex gap-5 font-mono text-[0.5rem] uppercase tracking-widest text-white/20">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </nav>
      
      <div className="flex flex-col items-center gap-2 pt-6">
        <p className="font-mono text-[0.45rem] uppercase tracking-[0.45em] text-white/15">
          Built for performance
        </p>
        <p className="font-mono text-[0.4rem] uppercase tracking-[0.2em] text-white/10">
          © 2026 Yafaarks Tech. All rights reserved.
        </p>
      </div>

      {/* Aesthetic detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </footer>
  );
}
