'use client';

import { motion, useInView } from 'motion/react';
import { useLenis } from 'lenis/react';
import { useRef } from 'react';
import { Code2, Layout, Search, Database, ArrowRight } from 'lucide-react';

/* ─── Service data ───────────────────────────────────────────────────────── */
const services = [
  {
    num: '01',
    title: 'Full-stack development',
    desc: 'From technical architecture to deployment. We build robust, scalable applications with clean code and sub-second load times.',
    icon: Code2,
    color: 'orange',
    glowColor: 'bg-[#ff4d00]',
    borderColor: 'border-[#ff4d00]/30',
    cta: 'Build My App'
  },
  {
    num: '02',
    title: 'Frontend & UI design',
    desc: 'Interfaces that feel as good as they look. Pixel-precise, accessible UIs designed to keep your users engaged and converting.',
    icon: Layout,
    color: 'blue',
    glowColor: 'bg-[#00a2ff]',
    borderColor: 'border-[#00a2ff]/30',
    cta: 'Start Designing'
  },
  {
    num: '03',
    title: 'SEO, AEO & GEO',
    desc: 'Technical SEO for Google, AEO for AI answer boxes, and GEO so tools like SearchGPT and Gemini cite your brand first.',
    icon: Search,
    color: 'green',
    glowColor: 'bg-[#00ff8c]',
    borderColor: 'border-[#00ff8c]/30',
    cta: 'Boost Ranking'
  },
  {
    num: '04',
    title: 'CMS & content architecture',
    desc: 'Giving editors full control without touching code, while keeping the frontend blazing fast and schema-clean.',
    icon: Database,
    color: 'purple',
    glowColor: 'bg-[#a200ff]',
    borderColor: 'border-[#a200ff]/30',
    cta: 'Manage Content'
  },
];

/* ─── Service Card Component ─────────────────────────────────────────────── */
function GlowServiceCard({ item, index }: { item: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
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
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -8 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1 
      }}
      onClick={scrollToContact}
      className="relative flex flex-col items-center justify-center text-center p-10 rounded-[2rem] bg-[#0c0c0c] border border-white/5 overflow-hidden group min-h-[380px] transition-all duration-500 hover:border-white/10 cursor-pointer shadow-2xl shadow-black/20"
    >
      {/* Dynamic Aurora Glow */}
      <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 w-[140%] h-32 ${item.glowColor} opacity-0 group-hover:opacity-30 blur-[80px] rounded-[100%] transition-opacity duration-1000`} />
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]`} />

      {/* Icon Container */}
      <div className={`relative z-10 w-12 h-12 rounded-2xl bg-white/[0.03] border ${item.borderColor} flex items-center justify-center mb-6 group-hover:bg-white/[0.05] transition-colors duration-500`}>
        <item.icon className="w-5 h-5 text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h3 className="font-serif text-[1rem] md:text-[1.2rem] tracking-tight text-white/95 mb-3 group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <p className="text-[0.7rem] md:text-[0.75rem] text-white/30 font-light leading-relaxed mb-8 group-hover:text-white/50 transition-colors max-w-[260px]">
          {item.desc}
        </p>

        {/* CTA Link */}
        <div className="flex items-center gap-2 text-[0.75rem] font-medium text-white/80 group-hover:text-white transition-colors">
          {item.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Hover Background Detail */}
      <div className="absolute inset-0 bg-radial from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
}

/* ─── Main Section ────────────────────────────────────────────────────────── */
export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-60px' });

  return (
    <div
      id="services"
      className="relative flex h-screen min-w-[100vw] max-w-[100vw] w-[100vw] shrink-0 flex-col items-center justify-center bg-background px-6 md:px-12 lg:px-20 overflow-hidden py-20 z-10"
    >
      <div className="w-full max-w-[1400px] flex flex-col gap-16">

        {/* Simplified Header Block */}
        <div ref={headRef} className="flex flex-col gap-4 items-center text-center">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-none tracking-tight text-white/95">
            Our Services
          </h2>
          <p className="text-[0.8rem] md:text-[0.85rem] text-white/30 font-light leading-relaxed max-w-[400px]">
            Every tool we use is selected for speed and performance.
          </p>
        </div>

        {/* Glow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {services.map((item, i) => (
            <GlowServiceCard
              key={item.num}
              item={item}
              index={i}
            />
          ))}
        </div>

      </div>

      {/* Background Detail */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-radial from-accent/[0.02] to-transparent pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-radial from-accent/[0.015] to-transparent pointer-events-none -z-10" />
    </div>
  );
}
