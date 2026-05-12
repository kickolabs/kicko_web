import { motion } from 'motion/react';

import {
  Mail,
  Phone,
  Send,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';

import { useRef } from 'react';

import emailjs from '@emailjs/browser';

import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        'service_8afmpcv',
        'template_8c4lywb',
        formRef.current,
        'N0MA-xDlkQG827v8S'
      );

      toast.success('Inquiry Sent Successfully 🚀', {
        duration: 4000,
      });

      formRef.current.reset();
    } catch (error) {
      console.error(error);

      toast.error('Failed To Send Inquiry ❌', {
        duration: 4000,
      });
    }
  };

  return (
    <>
      <Toaster
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: {
      background: '#111',
      color: '#fff',
      borderRadius: '16px',
      padding: '16px',
      fontWeight: '600',
    },

    success: {
      iconTheme: {
        primary: '#22c55e',
        secondary: '#ffffff',
      },
    },

    error: {
      iconTheme: {
        primary: '#ef4444',
        secondary: '#ffffff',
      },
    },
  }}
/>

      <section
        id="contact"
        className="py-40 bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-grid-zinc-900/5 dark:bg-grid-white/5 opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20">
          {/* LEFT SIDE */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-electric font-bold tracking-[0.3em] uppercase text-[10px] mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-electric" />
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-medium leading-[0.95] tracking-tighter mb-12 text-zinc-900 dark:text-white"
            >
              Let's build <br />
              <span className="text-gradient-ocean italic font-light">
                something sharp.
              </span>
            </motion.h2>

            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-md mb-16 font-light">
              Tell us about your project roadmap. We'll help you refine the
              scope, design the architecture, and ship a launch-ready product.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center text-electric border border-zinc-100 dark:border-white/10">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">
                    Inquiries
                  </p>

                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    admin@kicko.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center text-electric border border-zinc-100 dark:border-white/10">
                  <Phone className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">
                    Direct Line
                  </p>

                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    +91 89258 98600
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center text-zinc-400 hover:text-electric border border-zinc-100 dark:border-white/10 transition-colors"
                  href="#"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 shadow-2xl border border-zinc-100 dark:border-white/5">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    required
                    className="w-full bg-white dark:bg-black/50 border border-zinc-100 dark:border-white/5 rounded-[1.25rem] px-6 py-4 outline-none focus:border-electric transition-colors text-zinc-900 dark:text-white"
                  />

                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-white dark:bg-black/50 border border-zinc-100 dark:border-white/5 rounded-[1.25rem] px-6 py-4 outline-none focus:border-electric transition-colors text-zinc-900 dark:text-white"
                  />
                </div>

                <select
                  name="service"
                  className="w-full bg-white dark:bg-black/50 border border-zinc-100 dark:border-white/5 rounded-[1.25rem] px-6 py-4 outline-none focus:border-electric transition-colors text-zinc-900 dark:text-white"
                >
                  <option>SaaS Development</option>
                  <option>Mobile App Development</option>
                  <option>Web Development</option>
                  <option>AI Solutions</option>
                </select>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Project Details"
                  required
                  className="w-full bg-white dark:bg-black/50 border border-zinc-100 dark:border-white/5 rounded-[1.25rem] px-6 py-4 outline-none focus:border-electric transition-colors resize-none text-zinc-900 dark:text-white"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 rounded-[1.25rem] bg-electric text-white font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 shadow-lg hover:shadow-electric/30 transition-all"
                >
                  Launch Inquiry
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};