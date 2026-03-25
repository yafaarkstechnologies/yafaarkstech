'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import WorkIntro from './WorkIntro';

const projects = [
  {
    title: 'Hira Landmark',
    category: 'Real Estate & Property',
    desc: 'Professional real estate website to establish trust, showcase properties, and generate qualified leads. Structured for local SEO.',
    outcome: 'Lead-gen focused property site with local SEO signals and clear enquiry flows.',
    stack: ['Next.js', 'Tailwind', 'React', 'Lead Gen'],
    url: 'https://hira-gilt.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1400'
  },
  {
    title: 'House of Pickle',
    category: 'Sports & Hospitality',
    desc: 'Full-stack marketing and booking website for Thane’s premier pickleball club. Integrated with Hudle for real-time court scheduling.',
    outcome: 'Turns visitors into booked players — clear CTAs, event pages, membership flows.',
    stack: ['Next.js', 'Tailwind', 'React', 'Court Booking'],
    url: 'https://hop-one-kappa.vercel.app/',
    image: '/projects/hop.png'
  },
  {
    title: 'ANF',
    category: 'Film Education & Creative Arts',
    desc: 'Professional website for a film academy — designed to establish credibility, communicate courses, and convert students into enquiries.',
    outcome: 'SEO-optimised web presence with crawlable course pages and CMS built to grow.',
    stack: ['Next.js', 'Tailwind', 'Sanity CMS', 'SEO'],
    url: 'https://www.aniketnalinifilms.in',
    image: '/projects/anf.png'
  },
  {
    title: 'Mango Mamaji',
    category: 'D2C Food & Agri-Commerce',
    desc: 'Premium D2C e-commerce for a curated Alphonso mango brand. Built around seasonal pre-orders, blending storytelling with commerce.',
    outcome: 'Brand-first product site that sells the story as much as the mango.',
    stack: ['Next.js', 'Tailwind', 'React', 'Pre-order Flow'],
    url: 'https://mango-six-dusky.vercel.app',
    image: '/projects/mango.png'
  },
  {
    title: 'Skinish',
    category: 'Skincare E-Commerce — D2C',
    desc: 'Full e-commerce build for a clinical organic skincare brand. Interactive routine builder and AM/PM regimen bundles.',
    outcome: 'High-converting storefront with routine quiz, ingredient storytelling, SEO journal.',
    stack: ['Next.js', 'Tailwind', 'React', 'E-commerce', 'SEO'],
    url: 'https://www.skinish.in',
    image: '/projects/skinish.png'
  },
];

export default function HorizontalWork() {
  return (
    <>
      {/* Intro Screen */}
      <WorkIntro />

      {/* Project Screens */}
      {projects.map((project, i) => (
        <div key={i} className="flex h-screen min-w-[100vw] max-w-[100vw] w-[100vw] shrink-0 items-center justify-center bg-background px-6 md:px-12 lg:px-20 overflow-hidden pt-32 md:pt-0 z-10">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[70vh] sm:h-[75vh] md:h-[80vh] max-w-7xl group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] cursor-pointer shadow-2xl shadow-black/50 border border-white/5 block"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
            <div className="absolute inset-0 bg-radial-gradient from-black/60 via-black/20 to-transparent z-10" />

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s] ease-out"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 md:p-14 lg:p-20 flex flex-col z-20">
              {/* Top Row: Category & Link */}
              <div className="flex justify-between items-start w-full">
                <div className="glass px-5 py-2.5 rounded-full text-[0.6rem] font-mono uppercase tracking-[0.2em] font-medium border border-white/20 backdrop-blur-md">
                  {project.category}
                </div>
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-white group-hover:text-black transition-all duration-700 border border-white/20 backdrop-blur-md"
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              {/* Centered Content Block */}
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex flex-col items-center gap-4 max-w-2xl">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-accent font-semibold">
                    [ Project {String(i + 1).padStart(2, '0')} ]
                  </span>

                  <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.2 } }
                    }}
                    className="font-serif text-[clamp(1.5rem,7vw,5.5rem)] md:text-7xl lg:text-8xl text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] tracking-tight leading-[1.1] flex flex-wrap justify-center overflow-hidden"
                  >
                    {project.title.split('').map((char, charIdx) => (
                      <motion.span
                        key={charIdx}
                        variants={{
                          hidden: { y: "150%", opacity: 0 },
                          visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className={char === ' ' ? 'w-[0.3em]' : 'inline-block'}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h3>

                  {/* Outcome — visible on hover */}
                  <p className="text-[0.8rem] md:text-[0.95rem] text-white/95 font-medium leading-relaxed max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 italic drop-shadow-md">
                    {project.outcome}
                  </p>

                  {/* Stack chips */}
                  <div className="flex flex-wrap justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    {project.stack.map(s => (
                      <span key={s} className="px-3.5 py-1.5 rounded-full text-[0.6rem] font-mono uppercase tracking-[0.15em] font-bold border border-white/30 text-white bg-black/40 backdrop-blur-md shadow-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      ))}
    </>
  );
}
