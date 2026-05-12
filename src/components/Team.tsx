import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, ExternalLink, Code2, Briefcase } from 'lucide-react';

const team = [
  {
    name: 'Mugundan',
    degree: 'BE',
    role: 'Senior Software Developer',
    experience: '6+ Years in Full-Stack Architecture',
    projects: ['Cloud Infrastructure Sync', 'Nebula AI Core', 'Retail Scaler'],
    image: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Ajay Romeyo',
    degree: 'MCA',
    role: 'Software Developer',
    experience: '3+ Years in Scalable Web Apps',
    projects: ['Kicko Voice Integration', 'Fintech Dashboards', 'Auth Systems'],
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    color: 'from-electric to-royal'
  },
  {
    name: 'Ajay Kumar',
    degree: 'MCA',
    role: 'Software Developer',
    experience: '3+ Years in Backend Systems',
    projects: ['Real-time Analytics', 'Inventory Microservices', 'Migration Tools'],
    image: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png',

    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Kaleemullah',
    degree: 'BE, CSC',
    role: 'Software Developer',
    experience: '2+ Years in Frontend Engineering',
    projects: ['Vision OS UI Kit', 'Lord of Languages Core', 'Performance Tuning'],
    image: 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png',
    color: 'from-cyan-500 to-blue-500'
  }
];

export const Team = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="team">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-electric/10 rounded-[100%] blur-[120px] dark:opacity-30 opacity-10 animate-pulse" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px] -ml-64 -mb-64" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-electric" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Elite Engineering Team
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4"
          >
            The Architects of <span className="text-electric italic font-serif">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed"
          >
            Our core engineering squad combines academic depth with real-world execution. 
            We don't just write code; we build digital legacies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Smaller Image Container */}
              <div className="relative w-48 h-48 mb-8 rounded-2xl overflow-hidden glass border border-white/20 dark:border-white/10 shadow-xl group-hover:shadow-electric/30 transition-all duration-500 group-hover:-translate-y-2">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${member.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>

              {/* Content Below */}
              <div className="space-y-4 w-full">
                <div className="flex items-center justify-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-electric/10 text-[9px] font-bold text-electric uppercase tracking-widest border border-electric/20">
                    {member.degree}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold dark:text-white text-zinc-900 group-hover:text-electric transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold tracking-[0.2em] uppercase mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="pt-2 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-white/5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-white/10 w-full max-w-[240px] justify-center">
                    <Briefcase className="w-3.5 h-3.5 text-electric shrink-0" />
                    <span className="text-[11px] font-medium leading-tight">{member.experience}</span>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1.5 px-2">
                    {member.projects.map(proj => (
                      <div key={proj} className="flex items-center gap-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                        <Code2 className="w-3 h-3 text-electric/60" />
                        <span>{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-6 pt-4 border-t border-zinc-100 dark:border-white/5">
                   <button className="text-zinc-400 hover:text-electric transition-all duration-300 transform hover:scale-110">
                     <Linkedin className="w-5 h-5" />
                   </button>
                   <button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110">
                     <Github className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
