'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Hira Landmark',
    category: 'Real Estate',
    desc: 'Professional real estate website to establish trust and showcase properties.',
    stack: ['Next.js', 'Tailwind', 'React'],
    url: 'https://hira-gilt.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'House of Pickle',
    category: 'Sports & Hospitality',
    desc: 'Full-stack marketing and booking website for Thane’s premier pickleball club.',
    stack: ['Next.js', 'Tailwind', 'React'],
    url: 'https://hop-one-kappa.vercel.app/',
    image: '/projects/hop.png'
  },
  {
    title: 'ANF',
    category: 'Film Education',
    desc: 'Professional website for a film academy — designed to establish credibility and convert students.',
    stack: ['Next.js', 'Tailwind', 'Sanity CMS'],
    url: 'https://www.aniketnalinifilms.in',
    image: '/projects/anf.png'
  },
  {
    title: 'Mango Mamaji',
    category: 'Food & Agri-Commerce',
    desc: 'Premium D2C e-commerce for a curated Alphonso mango brand.',
    stack: ['Next.js', 'Tailwind', 'React'],
    url: 'https://mango-six-dusky.vercel.app',
    image: '/projects/mango.png'
  },
  {
    title: 'Skinish',
    category: 'Skincare E-Commerce',
    desc: 'Full e-commerce build for a clinical organic skincare brand.',
    stack: ['Next.js', 'Tailwind', 'React'],
    url: 'https://www.skinish.in',
    image: '/projects/skinish.png'
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      style={{ scale }}
      className="relative w-full aspect-[4/4] rounded-[2rem] overflow-hidden border border-white/10 group shadow-xl shadow-black/60 block"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-10, 10]) }}
        className="absolute inset-0 w-full h-full scale-105"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />
      </motion.div>

      {/* Floating Header */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
        <div className="glass px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
          <span className="font-mono text-[0.5rem] uppercase tracking-widest text-white/80">{project.category}</span>
        </div>
        <div
          className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center shadow-lg shadow-accent/20"
        >
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col items-center text-center gap-3 z-20">
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-[0.5rem] uppercase tracking-[0.4em] text-accent font-semibold">
            [ Case 0{index + 1} ]
          </span>
          <h3 className="font-serif text-[1.5rem] leading-[1.1] tracking-tight text-white m-0 drop-shadow-lg">
            {project.title}
          </h3>
        </div>

        <p className="text-[0.7rem] text-white/90 font-medium leading-relaxed max-w-[220px] drop-shadow-sm">
          {project.desc}
        </p>

        <div className="flex flex-wrap justify-center gap-1.5 pt-1">
          {project.stack.map(s => (
            <span key={s} className="px-2.5 py-1 rounded-full text-[0.4rem] font-mono uppercase tracking-widest border border-white/20 bg-black/40 text-white/90 backdrop-blur-md font-bold shadow-md">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function WorkMobile() {
  return (
    <div id="work" className="relative flex min-h-[120vh] w-full flex-col items-center justify-center px-6 py-32 bg-background z-10">
      <div className="flex flex-col gap-10 items-center w-full">

        {/* Header Block */}
        <div className="flex flex-col gap-4 items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[0.55rem] uppercase tracking-[0.45em] text-accent font-semibold"
          >
            [ Portfolio ]
          </motion.span>
          <h2 className="font-serif text-[clamp(1.8rem,8vw,2.5rem)] leading-none tracking-tight text-white/95">
            Recent Projects.
          </h2>
        </div>

        {/* Project Feed */}
        <div className="flex flex-col gap-6 w-full max-w-[320px]">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
