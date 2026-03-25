'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight, Phone } from 'lucide-react';

export default function ContactMobile() {
  return (
    <div id="contact" className="relative flex min-h-[120vh] w-full flex-col px-6 py-48 bg-background z-10 items-center justify-center text-center mt-40 mb-40">
      <div className="flex flex-col gap-10 items-center w-full max-w-[320px]">

        {/* Header Block */}
        <div className="flex flex-col gap-4 items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[0.55rem] uppercase tracking-[0.45em] text-accent font-semibold"
          >
          </motion.span>
          <h2 className="font-serif text-[clamp(1.8rem,8vw,2.5rem)] leading-none tracking-tight text-white/95">
            Let's build<br />something.
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col gap-3 w-full">
          <motion.a
            href="mailto:yafaarkstechnologies@gmail.com"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-md flex flex-col items-center gap-3 group active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-[0.45rem] uppercase tracking-widest text-white/30 font-bold">Email us</span>
              <p className="text-lg font-serif text-white group-hover:text-accent transition-colors">yafaarkstechnologies@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:7738347914"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-md flex flex-col items-center gap-3 group active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-[0.45rem] uppercase tracking-widest text-white/30 font-bold">Call us</span>
              <p className="text-lg font-serif text-white group-hover:text-accent transition-colors">+91 77383 47914</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-md flex flex-col items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white/40" />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-[0.45rem] uppercase tracking-widest text-white/30 font-bold">Location</span>
              <p className="text-lg font-serif text-white">INDIA</p>
            </div>
          </motion.div>
        </div>


        {/* Brand visual detail */}
        <div className="mt-12 flex justify-center opacity-10 grayscale">
          <span className="font-serif text-[4rem] tracking-tighter text-white">yafaarks</span>
        </div>
      </div>

      {/* Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-radial from-accent/[0.03] to-transparent pointer-events-none -z-10" />
    </div>
  );
}
