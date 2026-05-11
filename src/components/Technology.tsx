import { motion } from 'motion/react';
import { Cpu, Globe, Database, Cloud, Code, Smartphone, Zap, Shield } from 'lucide-react';

const technologies = [
  { name: 'React', icon: <Code className="w-6 h-6" />, color: 'text-electric' },
  { name: 'Next.js', icon: <Zap className="w-6 h-6" />, color: 'text-zinc-900 dark:text-white' },
  { name: 'Node.js', icon: <Globe className="w-6 h-6" />, color: 'text-green-500' },
  { name: 'Firebase', icon: <Database className="w-6 h-6" />, color: 'text-orange-500' },
  { name: 'Tailwind CSS', icon: <Cloud className="w-6 h-6" />, color: 'text-sky-400' },
  { name: 'AI/ML Stacks', icon: <Cpu className="w-6 h-6" />, color: 'text-royal' },
  { name: 'Mobile SDKs', icon: <Smartphone className="w-6 h-6" />, color: 'text-pink-500' },
  { name: 'Cloud Infra', icon: <Shield className="w-6 h-6" />, color: 'text-blue-500' },
];

export const Technology = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-6 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[1px] bg-electric" /> The Ecosystem
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-medium leading-[0.95] tracking-tighter text-zinc-900 dark:text-white"
          >
            Engineering with <br /> <span className="text-gradient-neon italic font-light">premier technical stacks.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-electric/5 blur-[100px] rounded-full" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-royal/5 blur-[100px] rounded-full" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 relative z-10">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl border border-zinc-100 dark:border-white/5 flex flex-col items-center justify-center text-center hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-zinc-800 transition-colors duration-500 ${tech.color}`}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
