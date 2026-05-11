import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business goals, user needs, and market landscape to define a clear roadmap.",
    color: "bg-blue-500"
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Crafting intuitive user experiences and stunning visual interfaces that align with your brand identity.",
    color: "bg-purple-500"
  },
  {
    icon: Code2,
    title: "Development",
    description: "Turning designs into reality using cutting-edge tech stacks and agile methodologies for rapid delivery.",
    color: "bg-electric"
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Rigorous testing and seamless launch strategies to ensure your product performs perfectly from day one.",
    color: "bg-royal"
  }
];

export const Process = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 transition-colors duration-500" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-electric">How We Work</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6"> Our <span className="text-electric italic font-serif">Process</span></h2>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            A structured approach to innovation. We combine creative thinking with technical precision to deliver exceptional results phase by phase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-black/10 transition-transform duration-500 hover:rotate-12`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                   <span className="text-sm font-mono text-electric font-bold">0{idx + 1}</span>
                   <h3 className="text-xl font-display font-bold">{step.title}</h3>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl glass border border-electric/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Ongoing Support</h4>
              <p className="text-sm text-zinc-500">We don't just launch and leave. We maintain and scale.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-electric text-white rounded-full font-bold text-sm hover:bg-royal transition-colors shadow-lg hover:shadow-electric/30">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};
