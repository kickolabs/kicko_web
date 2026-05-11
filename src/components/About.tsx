import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2, Award, Zap, ShieldCheck } from 'lucide-react';
import { Counter } from './Counter';

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="py-40 relative bg-white dark:bg-[#030303] overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div style={{ scale, opacity }} className="relative order-2 lg:order-1">
          <div className="relative z-10 rounded-[3rem] overflow-hidden group">
            <motion.div 
              className="relative transition-transform duration-500 ease-out"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=1500" 
                alt="Our Engineering Team" 
                className="w-full aspect-[4/5] object-cover rounded-[3rem] transition-all duration-700 brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-40" />
            </motion.div>
            
            {/* Top Rated Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute bottom-8 left-8 p-6 glass rounded-2xl border border-white/20 shadow-2xl backdrop-blur-2xl hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Top Rated Firm</h4>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Awwwards 2026</p>
                </div>
              </div>
              <div className="h-1 w-full bg-zinc-200 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-electric w-[95%]" />
              </div>
            </motion.div>
          </div>
          
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-electric/10 blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-royal/10 blur-[120px] -z-10" />
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-electric" /> Excellence as Standard
          </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-medium mb-10 leading-[0.95] tracking-tighter text-zinc-900 dark:text-white"
            >
              Building the <br /> <span className="text-gradient-ocean italic font-light">New Digital Reality.</span>
            </motion.h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-12 font-light max-w-xl">
            Kicko Tech is a boutique software engineering firm dedicated to building high-performance digital products for startups and enterprises ready to disrupt their industries.
          </p>
          
          <div className="grid grid-cols-3 gap-8 mb-12 border-y border-zinc-100 dark:border-white/5 py-10">
            <div>
              <p className="text-4xl md:text-5xl font-display font-medium text-electric mb-1"><Counter value={40} suffix="+" /></p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Global Deployments</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display font-medium text-zinc-900 dark:text-white mb-1"><Counter value={8} suffix="x" /></p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Scale potential</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-display font-medium text-zinc-900 dark:text-white mb-1"><Counter value={99} suffix="%" /></p>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Code Quality</p>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            {[
              { icon: <Zap className="w-5 h-5" />, title: "Precision Engineering", desc: "Every module is architected for maximum performance and future-proof scalability." },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Enterprise Reliability", desc: "We deploy mission-critical systems that maintain high availability under any load." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 flex items-center justify-center text-electric">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1 text-zinc-900 dark:text-white">{item.title}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-sm font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-6"
          >
            <button className="px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95">
              Work With Us <CheckCircle2 className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
