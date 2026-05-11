import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Monitor, Smartphone, Cloud, Layout, CheckCircle2, Terminal, Shield, Cpu, Palette, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative p-8 md:p-12 rounded-[2.5rem] glass border border-zinc-100 dark:border-white/5 transition-all duration-500 shadow-xl bg-white dark:bg-zinc-900/30"
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {/* Subtle Glow Overlay */}
        <div className="absolute -inset-4 bg-gradient-to-br from-electric/10 via-royal/10 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 mb-8 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-all duration-500 border border-zinc-100 dark:border-white/5">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:translate-z-10 transition-transform tracking-tight">{service.title}</h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 leading-relaxed font-light">
            {service.desc}
          </p>
          
          <ul className="space-y-3 mb-8">
            {service.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                <CheckCircle2 className="w-4 h-4 text-electric/40" />
                {feature}
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ x: 5 }}
            className="text-[10px] uppercase font-bold tracking-[0.2em] text-electric flex items-center gap-2 group/btn"
          >
            Capabilities <ArrowUpRight className="w-3 h-3 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'High-performance web applications built with the most advanced React and Next.js ecosystems.',
      icon: <Monitor className="w-6 h-6" />,
      features: ['Modern Frameworks', 'Full-stack Solutions', 'Performance Optimized']
    },
    {
      title: 'UI/UX Design',
      desc: 'Modern and intuitive user interface designs crafted to enhance user engagement, usability, and digital experiences.',
      icon: <Palette className="w-6 h-6" />,
      features: ['User-Centered Design', 'Interactive Prototypes', 'Modern Visual Systems']
    },
    {
      title: 'App Development',
      desc: 'Native-feel mobile experiences for iOS and Android that capture the true essence of premium UX.',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['Cross-platform Power', 'Real-time Features', 'Offline Support']
    },
  ];

  return (
    <section id="services" className="py-40 bg-zinc-50 dark:bg-[#020202] relative transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-electric" /> Specialization
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-medium leading-[0.95] tracking-tighter text-zinc-900 dark:text-white"
            >
              Advanced solutions for <br /> <span className="text-gradient-ocean italic font-light">the modern enterprise.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 glass rounded-[2rem] border border-zinc-100 dark:border-white/5 max-w-[320px] hidden lg:block"
          >
            <Shield className="w-6 h-6 text-electric mb-4" />
            <p className="text-zinc-500 dark:text-gray-400 text-xs font-medium leading-relaxed italic">
              "We maintain a 99.9% uptime record for all products engineered and hosted by our team."
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
