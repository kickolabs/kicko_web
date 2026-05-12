import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, ArrowRight, Instagram, ShieldCheck, Activity } from 'lucide-react';
import { useState } from 'react';
import { Modal, PrivacyDocs, SystemStatusDocs } from './Modal';

export const Footer = () => {
  const [modalType, setModalType] = useState<'privacy' | 'status' | null>(null);

  return (
    <footer className="pt-32 pb-12 bg-zinc-950 text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-6 gap-16 mb-24">
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold tracking-tight flex items-center gap-3 mb-8 text-white"
            >
              <div className="w-10 h-10 bg-electric rounded-xl flex items-center justify-center shadow-2xl shadow-electric/20">
                <span className="text-white text-lg font-bold">K</span>
              </div>
              <span>Kicko</span>
            </motion.div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-10 font-light">
              We engineer scalable digital ecosystems for the next generation of industry leaders. Precision architecture, deep intelligence, and rapid execution.
            </p>
            <div className="flex gap-3">
  {[
    { Icon: Github, color: 'hover:text-white' },
    { Icon: Twitter, color: 'hover:text-sky-400' },
    { Icon: Linkedin, color: 'hover:text-blue-500' },
    { Icon: Instagram, color: 'hover:text-pink-500' },
  ].map(({ Icon, color }, i) => (
    <motion.a
      key={i}
      whileHover={{
        y: -3,
        scale: 1.05,
      }}
      className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 transition-all cursor-pointer border border-white/10 hover:border-electric/30 ${color}`}
      href="#"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  ))}
</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-3 gap-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-electric pl-4">Platform</h4>
              <ul className="space-y-4 text-xs font-medium text-zinc-500">
                <li><a className="hover:text-electric transition-colors cursor-pointer flex items-center group">SaaS Development<ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></a></li>
                <li><a className="hover:text-electric transition-colors cursor-pointer flex items-center group">Mobile App Development <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></a></li>
                <li><a className="hover:text-electric transition-colors cursor-pointer flex items-center group">Web Development<ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></a></li>
                <li><a className="hover:text-electric transition-colors cursor-pointer flex items-center group">Product Design <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-electric pl-4">Network</h4>
              <ul className="space-y-4 text-xs font-medium text-zinc-500">
                <li><a className="hover:text-electric transition-colors cursor-pointer">Our Strategy</a></li>
                <li><a className="hover:text-electric transition-colors cursor-pointer">Case Archive</a></li>
                <li><a className="hover:text-electric transition-colors cursor-pointer">Career Portal</a></li>
                <li><a className="hover:text-electric transition-colors cursor-pointer" href="#contact">Contact Desk</a></li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-electric pl-4">Newsletter</h4>
              <p className="text-xs text-zinc-500 mb-6 font-medium leading-relaxed">
                Receive the latest insights on engineering and digital strategy.
              </p>
              <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xs font-medium focus:outline-none focus:border-electric transition-colors placeholder:text-zinc-700"
                />
                <button className="absolute right-2 top-2 bottom-2 w-10 bg-electric text-white rounded-lg flex items-center justify-center hover:bg-royal transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t border-white/5">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
              © 2026 KickoTech
            </p>
            <div className="hidden md:block h-3 w-[1px] bg-white/10" />
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              <button 
                onClick={() => setModalType('privacy')}
                className="hover:text-electric transition-colors cursor-pointer"
              >
                Privacy Docs
              </button>
              <button 
                onClick={() => setModalType('status')}
                className="hover:text-electric transition-colors cursor-pointer"
              >
                Systems Status
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Operational</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)} 
        title="Privacy & Governance"
        icon={<ShieldCheck className="w-6 h-6" />}
      >
        <PrivacyDocs />
      </Modal>

      <Modal 
        isOpen={modalType === 'status'} 
        onClose={() => setModalType(null)} 
        title="Infrastructure Status"
        icon={<Activity className="w-6 h-6" />}
      >
        <SystemStatusDocs />
      </Modal>
    </footer>
  );
};

