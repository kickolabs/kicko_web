import { motion } from 'motion/react';
import { ExternalLink, Github, Monitor, Smartphone, Database, Cpu, ArrowRight, Layout } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative rounded-[2.5rem] overflow-hidden mb-6 aspect-[4/5] border border-zinc-100 dark:border-white/5 shadow-2xl transition-all duration-700">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex flex-col justify-end p-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-electric mb-4 block">{project.cat}</span>
            <h3 className="text-3xl font-display font-medium mb-4 text-white tracking-tight">{project.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light line-clamp-3">{project.fullDesc}</p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-electric hover:text-white transition-all">
                Case Study
              </button>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-electric font-bold uppercase tracking-widest text-[9px] mb-1 block">Featured {project.cat}</span>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-electric transition-colors">
              {project.title}
            </h4>
          </div>
          <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-electric group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    { 
      title: "Fintech Pro", 
      cat: "Web Application", 
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=1000", 
      icon: <Smartphone className="w-6 h-6" />,
      fullDesc: "A complete rebuild of a legacy banking system into a modern, reactive financial dashboard."
    },
    { 
      title: "Nebula AI", 
      cat: "AI Integration", 
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=1000", 
      icon: <Database className="w-6 h-6" />,
      fullDesc: "Predictive threat detection system using custom neural networks for enterprise security."
    },
    { 
      title: "Pulse Mobile", 
      cat: "App Development", 
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=1000", 
      icon: <Monitor className="w-6 h-6" />,
      fullDesc: "High-performance health tracking app with real-time biometric synchronization."
    },
    { 
      title: "CloudScale", 
      cat: "Infrastructure", 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=1000", 
      icon: <Database className="w-6 h-6" />,
      fullDesc: "Automated multi-cloud migration and scaling strategy for high-growth e-commerce platforms."
    },
    { 
      title: "Vision OS", 
      cat: "Product Design", 
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800&h=1000", 
      icon: <Layout className="w-6 h-6" />,
      fullDesc: "An intuitive operating system interface design for next-generation spatial computing devices."
    },
    { 
      title: "Aura Home", 
      cat: "IoT Systems", 
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800&h=1000", 
      icon: <Cpu className="w-6 h-6" />,
      fullDesc: "Smart home automation ecosystem with low-latency communication and encrypted data privacy."
    }
  ];

  return (
    <section id="projects" className="py-40 bg-white dark:bg-[#030303] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-[1px] bg-electric" /> Portfolio
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-medium leading-[0.95] tracking-tighter text-zinc-900 dark:text-white"
              >
                Selected digital <br /> <span className="text-gradient-ocean italic font-light">works and artifacts.</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-md lg:text-right"
            >
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed font-light mb-8">
                A deeper dive into the products we've scaled for high-performance teams.
              </p>
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 dark:text-white group flex items-center justify-end gap-2 hover:text-electric transition-colors">
                View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
