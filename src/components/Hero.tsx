import { motion } from 'motion/react';
import { ArrowRight, Play, Cpu, Database, Layout } from 'lucide-react';
import { useState, useEffect } from 'react';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-gradient-ocean italic font-light">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse text-electric ml-1">|</span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#030303]">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-royal/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Engineering the Digital Future</span>
        </motion.div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tighter mb-8 text-zinc-900 dark:text-white px-4"
          >
            Building Powerful <br />
            <Typewriter texts={['Web Development', 'App Development','SaaS Platforms']} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
           Kicko Tech delivers cutting-edge Web Development, App Development, and SaaS solutions designed to help businesses scale with precision, combining modern architecture, seamless user experiences, secure cloud infrastructure, and high-performance digital innovation to transform complex ideas into powerful digital reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <button className="px-10 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-full glass border border-black/5 dark:border-white/10 text-zinc-900 dark:text-white font-bold uppercase tracking-widest text-[10px] hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              View Our Services
            </button>
          </motion.div>
        </div>

        {/* Dashboard Mockup Visual */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-electric/20 via-royal/20 to-soft-cyan/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative glass rounded-[2rem] border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden aspect-[16/9] bg-zinc-50 dark:bg-zinc-900/50">
            {/* Minimal Dashboard Mockup Content with Online Image */}
            <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/10 flex items-center px-6 gap-2 bg-white/50 dark:bg-black/20 backdrop-blur-md z-10">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-amber-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
              <div className="ml-4 h-6 w-40 rounded-md bg-zinc-200 dark:bg-white/10" />
            </div>
            <div className="h-full pt-12 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Dashboard Data" 
                className="w-full h-full object-cover opacity-80 dark:opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#030303] via-transparent to-transparent" />
              
              <div className="absolute top-20 left-12 grid grid-cols-12 gap-6 w-full pr-24">
                <div className="col-span-8 space-y-6">
                  {/* Revenue Card */}
                  <div className="rounded-2xl bg-white/70 dark:bg-zinc-800/80 backdrop-blur-md border border-white/20 dark:border-white/5 p-6 shadow-xl relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">Monthly Analytics</p>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">$48,294.00</h3>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-[10px] font-bold">+12.5%</div>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      {[40, 70, 45, 90, 65, 80, 50, 85, 60, 75, 55, 95].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-electric/20 rounded-t-sm group-hover:bg-electric/40 transition-colors" 
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Active Sessions Card */}
                    <div className="rounded-2xl bg-white/70 dark:bg-zinc-800/80 backdrop-blur-md border border-white/20 dark:border-white/5 p-5 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-royal/10 flex items-center justify-center text-royal">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">System Load</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-bold">
                          <span className="text-zinc-500">CPU</span>
                          <span className="text-zinc-900 dark:text-white">42%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-200 dark:bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-electric w-[42%] rounded-full" />
                        </div>
                        <div className="flex justify-between text-[10px] font-bold">
                          <span className="text-zinc-500">RAM</span>
                          <span className="text-zinc-900 dark:text-white">68%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-200 dark:bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-royal w-[68%] rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats Card */}
                    <div className="rounded-2xl bg-white/70 dark:bg-zinc-800/80 backdrop-blur-md border border-white/20 dark:border-white/5 p-5 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-soft-cyan/20 flex items-center justify-center text-soft-cyan">
                          <Database className="w-4 h-4" />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Cloud Storage</p>
                      </div>
                      <div className="flex flex-col items-center justify-center py-2">
                        <div className="relative w-16 h-16">
                          <svg className="w-full h-full" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-zinc-200 dark:stroke-white/5" strokeWidth="4" />
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-soft-cyan" strokeWidth="4" strokeDasharray="75, 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-zinc-900 dark:text-white">75%</div>
                        </div>
                        <p className="text-[9px] text-zinc-500 mt-2">1.2TB of 1.6TB used</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Task Sidebar */}
                <div className="col-span-4 rounded-2xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-white/20 dark:border-white/5 p-5 shadow-lg">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Recent Deployments</p>
                  <div className="space-y-5">
                    {[
                      { name: "v2.0.4 - Production", time: "2m ago", status: "success" },
                      { name: "v2.0.3 - Staging", time: "14m ago", status: "success" },
                      { name: "v2.0.3 - Hotfix", time: "1h ago", status: "warning" },
                      { name: "v2.0.2 - Production", time: "4h ago", status: "success" },
                      { name: "v2.0.1 - Beta", time: "1d ago", status: "success" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.status === 'success' ? 'bg-green-500' : 'bg-amber-500'}`} />
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-zinc-900 dark:text-white leading-none mb-1">{item.name}</p>
                          <p className="text-[9px] text-zinc-500">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/5">
                    <div className="w-full h-24 rounded-xl bg-gradient-to-br from-electric/10 to-royal/10 flex flex-col items-center justify-center border border-electric/5">
                      <p className="text-[9px] font-bold text-electric">Node Health</p>
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">99.99%</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 hidden lg:block"
          >
            <div className="p-4 glass rounded-2xl border border-white/20 shadow-xl">
              <Cpu className="w-6 h-6 text-electric" />
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 hidden lg:block"
          >
            <div className="p-4 glass rounded-2xl border border-white/20 shadow-xl">
              <Layout className="w-6 h-6 text-royal" />
            </div>
          </motion.div>
        </motion.div>

        {/* Core Capabilities Badge Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity"
        >
          {['Web Engineering', 'Digital Platforms', 'Cloud Systems', 'Software Engineering'].map((tech) => (
            <div key={tech} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-electric" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 dark:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
