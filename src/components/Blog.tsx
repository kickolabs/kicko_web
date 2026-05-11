import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

const posts = [
  {
    title: "The Future of AI in Enterprise Architecture",
    excerpt: "How generative AI is reshaping the way large-scale systems are designed and deployed in 2026.",
    author: "Mugundan",
    date: "May 5, 2026",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Securing Decentralized Fintech Platforms",
    excerpt: "A deep dive into zero-trust security models for modern financial applications built on edge networks.",
    author: "Ajay Romeyo",
    date: "April 28, 2026",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Optimizing React Performance for Low-Bandwidth",
    excerpt: "Technical strategies for delivering high-end UI experiences in developing markets with limited connectivity.",
    author: "Kaleemullah",
    date: "April 15, 2026",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
  }
];

export const Blog = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/30 transition-colors duration-500" id="insights">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-electric" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Kicko Insights</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">
              Thought <span className="text-electric italic font-serif">Leadership.</span>
            </h2>
          </div>
          <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-electric transition-colors group">
            View All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 glass border border-white/20 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[10px] font-bold text-electric uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3" /> {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold group-hover:text-electric transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-zinc-100 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold text-electric flex items-center gap-2">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
