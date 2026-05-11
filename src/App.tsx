/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronUp } from 'lucide-react';

// Modular Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Technology } from './components/Technology';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { Team } from './components/Team';
import { Process } from './components/Process';
//import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { ScrollToTop } from './components/ScrollToTop';

const ThreeBackground = lazy(() => import('./components/ThreeBackground').then(m => ({ default: m.ThreeBackground })));

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-electric origin-left z-[200]" 
      style={{ scaleX }}
    />
  );
};

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white dark:bg-[#030303] flex flex-col items-center justify-center z-[1000] overflow-hidden">
    <div className="absolute inset-0 bg-grid-zinc-900/5 dark:bg-grid-white/5 opacity-20" />
    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-electric to-transparent animate-shimmer" />
    
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-20 h-20 bg-electric rounded-2xl flex items-center justify-center shadow-2xl shadow-electric/20 mb-8 relative"
      >
        <span className="text-white font-bold text-3xl">K</span>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-electric rounded-2xl -z-10 blur-xl"
        />
      </motion.div>
      
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-[1px] w-12 bg-electric/30"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            Initializing Systems
          </span>
          <motion.div 
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-[1px] w-12 bg-electric/30"
          />
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-1 h-1 rounded-full bg-electric"
            />
          ))}
        </div>
      </div>
    </div>

    <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center opacity-40">
      <p className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">KickoTech v2.0.4</p>
      <p className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">Est. 2026</p>
    </div>
  </div>
);

export default function App() {
  const partners = [
    { name: 'Kicko Voice', logo: 'src/images/kicko voice.png' },
    { name: 'Seven Pounds', logo: 'src/images/7pounds.png' },
    { name: 'Visabook HR', logo: 'src/images/vb hr.png' },
    { name: 'Lord of Languages', logo: 'src/images/lol.png' },
    { name: 'Kicko Coworks', logo: 'src/images/KICKO COWORDS.png' },
    { name: 'Kicko Tech', logo: 'src/images/KICKO s1.png' },
    { name: 'Maverick Ghouse', logo: 'src/images/MG.png' },
    { name: 'Maverick Legal', logo: 'src/images/MLA.png' },
  ];
  return (
    <div className="bg-white dark:bg-[#030303] text-zinc-900 dark:text-white overflow-x-hidden transition-colors duration-700">
      <ScrollProgress />
      
      <Suspense fallback={<LoadingScreen />}>
        <ThreeBackground />
      </Suspense>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Simple Marquee / Client Section */}
        <section className="py-24 border-y border-black/5 dark:border-white/5 bg-white dark:bg-black/40 backdrop-blur-sm overflow-hidden transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400 dark:text-gray-600">Powering Next-Gen Teams</p>
          </div>
          <div className="flex whitespace-nowrap overflow-hidden group">
            <motion.div 
              animate={{ x: [0, -1800] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-32 items-center px-12"
            >
              {[...partners, ...partners].map((partner, i) => (
                <div key={`${partner.name}-${i}`} className="flex items-center gap-12 group/logo">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-10 md:h-12 w-auto opacity-70 group-hover/logo:opacity-100 transition-all duration-500 pointer-events-none object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-electric' : 'bg-royal'} opacity-30`} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <Services />
        <Technology />
        <WhyChooseUs />
        <Process />
        <About />
        <Team />
        <Projects />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
      <ChatBot />
      
      {/* Background Mesh Overlay */}
      <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none -z-0" />
    </div>
  );
}
