import { motion } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useState } from 'react';

export const StartProjectModal = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = () => {
    const text = `
🚀 New Project Inquiry

👤 Name: ${formData.name}

🏢 Company: ${formData.company}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

💼 Service: ${formData.service}

💰 Budget: ${formData.budget}

⏳ Timeline: ${formData.timeline}

📝 Project Details:
${formData.message}
    `;

    const url = `https://wa.me/918925898600?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, '_blank');
  };

  return (
    <>
      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(true)}
        className="px-10 py-4 rounded-full bg-electric text-white font-bold tracking-wider text-sm shadow-xl hover:shadow-electric/40 transition-all"
      >
        START PROJECT
      </motion.button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl rounded-[2rem] bg-white dark:bg-[#090909] border border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-200 dark:border-white/10">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  Start Your Project
                </h2>

                <p className="text-zinc-500 mt-2">
                  Tell us your requirements and we’ll contact you directly.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-red-500 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* FORM */}
            <div className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 px-6 py-4 outline-none text-zinc-900 dark:text-white"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 px-6 py-4 outline-none text-zinc-900 dark:text-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 px-6 py-4 outline-none text-zinc-900 dark:text-white"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 px-6 py-4 outline-none text-zinc-900 dark:text-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <select
                  name="service"
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 px-6 py-4 outline-none text-zinc-900 dark:text-white"
                >
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>SaaS Development</option>
                  <option>AI Solutions</option>
                </select>

                <input
                  type="text"
                  name="budget"
                  placeholder="Project Budget"
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 px-6 py-4 outline-none text-zinc-900 dark:text-white"
                />
              </div>

              <input
                type="text"
                name="timeline"
                placeholder="Expected Timeline"
                onChange={handleChange}
                className="w-full rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 px-6 py-4 outline-none text-zinc-900 dark:text-white"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Describe your project requirements..."
                onChange={handleChange}
                className="w-full rounded-2xl bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/10 px-6 py-4 outline-none resize-none text-zinc-900 dark:text-white"
              />

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={sendToWhatsApp}
                className="w-full py-5 rounded-2xl bg-electric text-white font-bold tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl hover:shadow-electric/40 transition-all"
              >
                Send To WhatsApp
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};