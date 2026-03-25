'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Aura Interactive',
    category: 'WebGL Showcase',
    image: 'https://images.unsplash.com/photo-1614850523296-e8c041de24c6?auto=format&fit=crop&q=80&w=1000',
    color: '#CEC2B2'
  },
  {
    title: 'Logic Engine',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    color: '#111111'
  },
  {
    title: 'Nova Genesis',
    category: '3D E-Commerce',
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1000',
    color: '#CEC2B2'
  }
];

export default function Work() {
  return (
    <section id="work" className="w-full py-32 px-6 md:px-16 lg:px-24 bg-background flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-accent font-semibold mb-6 block">
              [ The Archive ]
            </span>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tight">Selected.</h2>
          </div>
          <p className="text-lg opacity-60 max-w-sm italic font-light leading-relaxed pb-4">
            A curation of digital landmarks built for brands ready to lead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] cursor-pointer shadow-2xl shadow-black/50 border border-white/5",
                i === 0 ? "md:col-span-2 aspect-[21/10]" : "aspect-[4/5]"
              )}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s] ease-out"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <div className="glass px-6 py-3 rounded-full text-[0.65rem] font-mono uppercase tracking-[0.2em] font-medium border border-white/20">
                    {project.category}
                  </div>
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-white group-hover:text-black transition-all duration-700 border border-white/20">
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="flex flex-col gap-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl tracking-tight">{project.title}</span>
                  <div className="flex items-center gap-6 text-white/80 font-mono text-[0.65rem] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-medium">
                    <div className="w-12 h-[1px] bg-white/40" />
                    <span>View Showcase</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
