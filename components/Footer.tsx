'use client';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-16 lg:px-24 bg-background border-t border-white/5 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex flex-col items-start leading-none group cursor-pointer">
            <span className="font-serif text-2xl tracking-tighter text-accent transition-transform group-hover:scale-[1.02]">
              yafaarks
            </span>
            <span className="font-sans text-[0.5rem] tracking-[0.35em] font-semibold text-foreground uppercase mt-1 opacity-90 pl-0.5">
              Technologies
            </span>
          </div>
          <p className="text-[0.6rem] font-mono uppercase tracking-[0.2em] opacity-40 mt-3 font-medium">
            © 2026 Architectural Web Authority.
          </p>
        </div>

        <div className="flex gap-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-foreground/50">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] opacity-50 font-semibold">System Operational</span>
        </div>
      </div>
    </footer>
  );
}
