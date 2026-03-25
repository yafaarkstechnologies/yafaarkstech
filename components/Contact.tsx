'use client';

import { motion } from 'motion/react';
import { Mail, Phone, ArrowUpRight, Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen w-screen shrink-0 flex items-center justify-center px-8 md:px-14 lg:px-20 pt-32 pb-24 md:py-32 bg-background overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-20 lg:gap-24 relative z-10">

        {/* LEFT COMPONENT */}
        <div className="flex flex-col gap-16 lg:w-[45%] xl:w-1/2">
          {/* Main Title */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
            }}
            className="font-serif text-[clamp(2.8rem,10vw,8.5rem)] tracking-tight leading-none text-foreground flex overflow-hidden p-2"
          >
            {"Connect".split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: "110%", opacity: 0, rotateZ: 4 },
                  visible: { y: 0, opacity: 1, rotateZ: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          <div className="flex flex-col gap-12 lg:gap-14">
            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 text-accent font-mono text-[0.6rem] uppercase tracking-[0.2em] font-medium">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </div>
              <a href="mailto:yafaarkstechnologies@gmail.com" className="text-2xl md:text-3xl lg:text-4xl font-light hover:text-accent transition-colors w-max relative group pb-2">
                yafaarkstechnologies@gmail.com
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/30 group-hover:bg-accent transition-colors duration-500" />
              </a>
            </motion.div>

            {/* PHONE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 text-accent font-mono text-[0.6rem] uppercase tracking-[0.2em] font-medium">
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </div>
              <a href="tel:7738347914" className="text-2xl md:text-3xl lg:text-4xl font-light hover:text-accent transition-colors w-max relative group pb-2">
                +91 77383 47914
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COMPONENT (Social Links) */}
        <div className="w-full lg:w-[50%] xl:w-[45%] flex items-center lg:justify-end mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 w-full max-w-[28rem] self-center"
          >
            {[
              { name: 'Instagram', url: '#', icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" /> },
              { name: 'X / Twitter', url: '#', icon: <Twitter className="w-5 h-5 md:w-6 md:h-6" /> },
              { name: 'LinkedIn', url: '#', icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" /> },
              { name: 'Dribbble', url: '#', icon: <Dribbble className="w-5 h-5 md:w-6 md:h-6" /> }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-[1.25rem] bg-[#111111] border border-white/[0.04] hover:border-accent/40 transition-colors duration-500 shadow-2xl shadow-black/20"
              >
                <div className="flex items-center gap-4 text-white/80 group-hover:text-white transition-colors">
                  <span className="text-accent">{social.icon}</span>
                  <span className="font-mono text-[0.6rem] md:text-xs uppercase tracking-[0.25em] font-medium">{social.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
