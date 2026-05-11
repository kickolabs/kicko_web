import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "Kicko Tech specializes in Fintech, E-commerce, AI Solutions, and Real Estate Tech. However, our modular architecture approach allows us to scale across almost any industry."
  },
  {
    question: "Do you offer post-launch maintenance?",
    answer: "Yes, we provide 24/7 dedicated support and maintenance packages to ensure your platform stays updated with the latest security patches and performance optimizations."
  },
  {
    question: "What is your typical project timeline?",
    answer: "A standard MVP (Minimum Viable Product) typically takes between 8-12 weeks from discovery to deployment. Complex enterprise systems may take longer depending on technical requirements."
  },
  {
    question: "Can you help with legacy system migration?",
    answer: "Absolutely. We excel at modernizing outdated systems, migrating data securely to cloud infrastructures, and improving overall system architecture without downtime."
  },
  {
    question: "Do you work with startups?",
    answer: "We love startups! We offer flexible engagement models tailored for early-stage ventures, focusing on rapid prototyping and cost-effective scaling strategies."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <HelpCircle className="w-4 h-4 text-electric" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Resource Center</span>
          </motion.div>
          <h2 className="text-4xl font-display font-medium mb-4">Frequently Asked <span className="text-electric italic font-serif">Questions</span></h2>
          <p className="text-zinc-500 dark:text-zinc-400">Everything you need to know about partnering with Kicko Tech.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isActive 
                    ? 'border-electric/30 bg-electric/5' 
                    : 'border-zinc-200 dark:border-white/10 hover:border-electric/20'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className={`font-display font-bold text-lg transition-colors duration-300 ${isActive ? 'text-electric' : 'text-zinc-800 dark:text-zinc-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}>
                    {isActive ? (
                      <Minus className="w-5 h-5 text-electric" />
                    ) : (
                      <Plus className="w-5 h-5 text-zinc-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-electric/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};
