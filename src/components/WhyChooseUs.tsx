import { motion } from 'motion/react';
import { Shield, Zap, Target, Award, ArrowUpRight } from 'lucide-react';
import { Counter } from './Counter';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Grade Security",
      desc: "ISO-certified protocols and encrypted architecture for complete data sovereignty.",
      color: "text-electric"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Performance",
      desc: "Sub-second load times and optimized edge delivery for a seamless global experience.",
      color: "text-royal"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Engineering",
      desc: "Meticulous code standards and rigorous QA cycles ensuring objective excellence.",
      color: "text-soft-cyan"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Elite Design",
      desc: "Award-winning UI/UX that blends aesthetic luxury with intuitive high-conversion flows.",
      color: "text-electric"
    }
  ];

  const stats = [
    { value: 150, suffix: "+", label: "Projects Completed", decimals: 0 },
    { value: 85, suffix: "+", label: "Global Clients", decimals: 0 },
    { value: 99.9, suffix: "%", label: "System Uptime", decimals: 1 },
    { value: 24, suffix: "/7", label: "Expert Support", decimals: 0 }
  ];

  return (
    <section className="py-40 relative overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-electric" /> The Kicko Standard
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.95] tracking-tighter mb-12 text-zinc-900 dark:text-white"
            >
              Why founders <br /> <span className="text-gradient-neon italic font-light">choose Kicko.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 glass rounded-[2.5rem] max-w-sm lg:mt-20 border border-zinc-100 dark:border-white/5 shadow-2xl"
          >
            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed mb-8 italic">
              "We don't just build software. We engineer competitive advantages that allow modern teams to outpace the market."
            </p>
            <div className="flex items-center gap-4 text-electric font-bold text-[10px] uppercase tracking-[0.3em] cursor-pointer group">
              Our Methodology <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 rounded-[2rem] border border-zinc-100 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="relative group/icon">
                <motion.div 
                   animate={{ 
                     scale: [1, 1.05, 1],
                     boxShadow: ["0 0 0px 0px rgba(79, 70, 229, 0)", "0 0 20px 2px rgba(79, 70, 229, 0.1)", "0 0 0px 0px rgba(79, 70, 229, 0)"]
                   }}
                   transition={{ 
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                   className={`w-12 h-12 rounded-xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center mb-8 ${item.color} border border-zinc-100 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-zinc-800 transition-colors relative z-10`}
                >
                  {item.icon}
                </motion.div>
                {/* Secondary glow layer */}
                <div className="absolute inset-0 w-12 h-12 bg-electric/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-zinc-900 dark:text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
              
              <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Efficiency</span>
                  <span className="text-[9px] font-bold text-electric uppercase">99%</span>
                </div>
                <div className="h-1 w-full bg-zinc-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '99%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-electric"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 grid lg:grid-cols-4 gap-12 border-t border-zinc-100 dark:border-white/5 pt-40">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-6xl md:text-7xl font-display font-medium text-zinc-900 dark:text-white mb-4 tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

