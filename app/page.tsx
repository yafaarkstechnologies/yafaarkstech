'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Process from "@/components/Process";
import HorizontalWork from "@/components/HorizontalWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WebGLBackground from "@/components/WebGLBackground";
import SmoothScroll from "@/components/SmoothScroll";
import HorizontalScroll from "@/components/HorizontalScroll";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

// Mobile Components
import HeroMobile from "@/components/mobile/HeroMobile";
import PhilosophyMobile from "@/components/mobile/PhilosophyMobile";
import ServicesMobile from "@/components/mobile/ServicesMobile";
import ProcessMobile from "@/components/mobile/ProcessMobile";
import WorkMobile from "@/components/mobile/WorkMobile";
import ContactMobile from "@/components/mobile/ContactMobile";
import FooterMobile from "@/components/mobile/FooterMobile";

const SectionSpacer = () => <div className="h-40 bg-background w-full" />;

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <SmoothScroll>
      <main className="relative min-h-screen selection:bg-accent selection:text-background bg-background text-foreground">
        <WebGLBackground />
        <Header />

        {!isMobile ? (
          <>
            {/* First Horizontal Block (3 screens) */}
            <HorizontalScroll pages={3}>
              <Hero />
              <Philosophy />
              <Services />
            </HorizontalScroll>

            {/* Cinematic Vertical Scroll (400vh) */}
            <Process />

            {/* Second Horizontal Block (6 screens: 1 Intro + 5 Projects) */}
            <div id="work" className="relative z-20 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
              <HorizontalScroll pages={6}>
                <HorizontalWork />
              </HorizontalScroll>
            </div>

            {/* Final Vertical Section (Contact + Footer) */}
            <div className="relative z-30 bg-background">
              <Contact />
              <Footer />
            </div>
          </>
        ) : (
          <div className="relative flex flex-col w-full overflow-x-hidden">
            <HeroMobile />
            <div className="relative z-20 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
              <SectionSpacer />
              <PhilosophyMobile />
              <SectionSpacer />
              <ServicesMobile />
              <SectionSpacer />
              <WorkMobile />
              <SectionSpacer />
              <ContactMobile />
              <FooterMobile />
            </div>
          </div>
        )}
      </main>
    </SmoothScroll>
  );
}
