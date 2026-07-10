/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

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
import { Team } from './components/Team';
import { Process } from './components/Process';
//import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';

const ThreeBackground = lazy(() => import('./components/ThreeBackground').then(m => ({ default: m.ThreeBackground })));
const ChatBot = lazy(() => import('./components/ChatBot').then(m => ({ default: m.ChatBot })));

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

const LoadingScreen = () => null;

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
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <ThreeBackground />
        </Suspense>
      </ErrorBoundary>
      
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
      <ErrorBoundary>
        <Suspense fallback={null}>
          <ChatBot />
        </Suspense>
      </ErrorBoundary>
      
      {/* Background Mesh Overlay */}
      <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none -z-0" />
    </div>
  );
}
