import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO @ FintechAI",
      text: "Kicko Tech's engineering precision is unmatched. They delivered our core platform 3 months ahead of schedule with flawless architecture and a scaleable stack.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Marc Andre",
      role: "Founder, Zenith SaaS",
      text: "The UI design they created for our analytics dashboard completely transformed our user retention. It feels like a work of art that actually works.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Lena Wu",
      role: "Product Lead, Global Health",
      text: "Working with them on our AI integration was the best technical decision we made last year. Knowledgeable, proactive, and lightning fast.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 relative bg-zinc-50 dark:bg-[#020202] overflow-hidden transition-colors duration-500">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-400 to-transparent" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-400 to-transparent" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-400 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-electric" /> Endorsements
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-medium leading-[0.95] tracking-tighter mb-12 text-zinc-900 dark:text-white"
            >
              Trusted by world <br /> <span className="text-zinc-400 dark:text-zinc-500 font-light italic">class engineers.</span>
            </motion.h2>
            
            <div className="flex gap-4">
              <button 
                onClick={prev} 
                className="w-14 h-14 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={next} 
                className="w-14 h-14 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer group"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-10 md:p-16 rounded-[2.5rem] bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-100 dark:border-white/5"
              >
                <Quote className="absolute top-10 right-10 w-16 h-16 text-electric/5" />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-electric text-electric" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-light italic text-zinc-800 dark:text-white/90 mb-12 leading-relaxed tracking-tight">
                  "{testimonials[index].text}"
                </p>

                <div className="flex items-center gap-6 pt-10 border-t border-zinc-50 dark:border-white/5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden ring-4 ring-zinc-50 dark:ring-white/5">
                    <img src={testimonials[index].img} alt={testimonials[index].name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{testimonials[index].name}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric">{testimonials[index].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
