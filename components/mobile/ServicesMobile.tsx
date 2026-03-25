'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useLenis } from 'lenis/react';
import { useRef } from 'react';
import { Code2, Layout, Search, Database, ArrowRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Full-stack development',
    desc: 'From technical architecture to deployment. We build robust, scalable applications with clean code.',
    icon: Code2,
    glowColor: 'bg-[#ff4d00]',
    borderColor: 'border-[#ff4d00]/30',
    cta: 'Build My App'
  },
  {
    num: '02',
    title: 'Frontend & UI design',
    desc: 'Interfaces that feel as good as they look. Pixel-precise, accessible UIs designed to keep users engaged.',
    icon: Layout,
    glowColor: 'bg-[#00a2ff]',
    borderColor: 'border-[#00a2ff]/30',
    cta: 'Start Designing'
  },
  {
    num: '03',
    title: 'SEO, AEO & GEO',
    desc: 'Technical SEO for Google, and GEO so tools like SearchGPT and Gemini cite your brand first.',
    icon: Search,
    glowColor: 'bg-[#00ff8c]',
    borderColor: 'border-[#00ff8c]/30',
    cta: 'Boost Ranking'
  },
  {
    num: '04',
    title: 'CMS & architecture',
    desc: 'Giving editors full control without touching code, while keeping the frontend blazing fast.',
    icon: Database,
    glowColor: 'bg-[#a200ff]',
    borderColor: 'border-[#a200ff]/30',
    cta: 'Manage Content'
  },
];

function GlowServiceCard({ item, index }: { item: typeof services[0]; index: number }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const lenis = useLenis();

  const scrollToContact = () => {
    if (lenis) {
      lenis.scrollTo('#contact');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity }}
      whileTap={{ scale: 0.98 }}
      onClick={scrollToContact}
      className="relative flex flex-col gap-6 pt-24 pb-20 px-10 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 overflow-hidden w-full items-center justify-center text-center min-h-[480px] cursor-pointer select-none active:bg-white/[0.02] transition-colors duration-300"
    >
      {/* Dynamic Aurora Glow */}
      <div className={`absolute -bottom-14 left-1/2 -translate-x-1/2 w-[140%] h-28 ${item.glowColor} opacity-20 blur-[60px] rounded-[100%]`} />
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${item.glowColor} opacity-60 blur-[1px]`} />

      {/* Icon Container */}
      <div className={`relative z-10 w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border ${item.borderColor} flex items-center justify-center mb-2`}>
        <item.icon className="w-7 h-7 text-white/90" />
      </div>

      <div className="relative z-10 flex flex-col gap-5 items-center">
        <h3 className="font-serif text-[1.6rem] tracking-tight text-white/95 leading-tight">
          {item.title}
        </h3>
        <p className="text-[0.85rem] text-white/35 font-light leading-relaxed max-w-[260px]">
          {item.desc}
        </p>

        {/* CTA Link */}
        <div className="mt-2 flex items-center gap-2 text-[0.9rem] font-medium text-white/70">
          {item.cta}
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesMobile() {
  return (
    <div id="services" className="relative flex min-h-[120vh] w-full flex-col px-6 py-32 bg-background z-10 overflow-hidden items-center justify-center">
      <div className="flex flex-col gap-12 items-center w-full">
        
        {/* Header Block */}
        <div className="flex flex-col gap-5 items-center text-center">
          <h2 className="font-serif text-[clamp(1.8rem,8vw,2.5rem)] leading-none tracking-tight text-white/95">
            Our Services
          </h2>
          <p className="text-[0.8rem] text-white/30 font-light leading-relaxed max-w-[280px]">
             Every tool we use is selected for speed and performance.
          </p>
        </div>

        {/* Services Stack with Alternating Entry Animations */}
        <div className="flex flex-col gap-10 w-full max-w-[380px]">
          {services.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 
              }}
              className="w-full"
            >
              <GlowServiceCard
                item={item}
                index={i}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ambient background detail */}
      <div className="absolute top-1/4 left-0 w-[80vw] h-[80vw] bg-accent/[0.02] rounded-full blur-[100px] -z-10 -translate-x-1/2" />
    </div>
  );
}
