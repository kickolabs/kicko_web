import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Lock, Eye, FileText, Globe, Server } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children, icon }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-zinc-200 dark:border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-zinc-100 dark:border-white/5 flex items-center justify-between sticky top-0 bg-white dark:bg-zinc-900 z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-electric/10 flex items-center justify-center text-electric">
                  {icon || <FileText className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-white uppercase tracking-tight">{title}</h3>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Last Updated: May 2026</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-500 hover:text-electric transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="max-w-3xl mx-auto prose dark:prose-invert prose-zinc">
                {children}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-100 dark:border-white/5 flex justify-end gap-4 bg-zinc-50 dark:bg-zinc-950/30">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-electric text-white rounded-xl font-bold text-sm hover:bg-royal transition-colors shadow-lg shadow-electric/20"
              >
                Accept & Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const PrivacyDocs = () => {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10">
          <Shield className="w-8 h-8 text-electric mb-4" />
          <h4 className="font-bold mb-2">Zero Trust</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">Your data remains encrypted at rest and in transit using military-grade protocols.</p>
        </div>
        <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10">
          <Eye className="w-8 h-8 text-electric mb-4" />
          <h4 className="font-bold mb-2">Total Control</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">You maintain full ownership of your data. We never sell or share information with third parties.</p>
        </div>
        <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10">
          <Lock className="w-8 h-8 text-electric mb-4" />
          <h4 className="font-bold mb-2">Data Integrity</h4>
          <p className="text-xs text-zinc-500 leading-relaxed">Frequent audits ensure that our security systems meet international standards (GDPR, SOC2).</p>
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
           <div className="w-1.5 h-6 bg-electric rounded-full" />
           1. Information Collection
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          At KickoTech, we collect only the minimum necessary information to provide our engineering services. This includes contact details and project-related data explicitly shared during engagement.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
           <div className="w-1.5 h-6 bg-electric rounded-full" />
           2. How We Use Data
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
          We use your information effectively for communication, service delivery, and improving our internal engineering workflows. We do not engage in automated profiling or behavioral tracking for marketing purposes.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
           <div className="w-1.5 h-6 bg-electric rounded-full" />
           3. Third-Party Integrations
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Some of our services utilize infrastructure from trusted partners like AWS, Vercel, and Google Cloud. These providers are bound by strict data protection agreements congruent with our high standards.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
           <div className="w-1.5 h-6 bg-electric rounded-full" />
           4. Cookies & Tracking
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          We use strictly necessary cookies for session management and basic site functionality. No non-essential tracking cookies are deployed without explicit user consent.
        </p>
      </section>
    </div>
  );
};

export const SystemStatusDocs = () => {
  const systems = [
    { name: "Frontend Deployment Node", status: "Operational", uptime: "99.99%", latency: "12ms" },
    { name: "Production Database Cluster", status: "Operational", uptime: "99.999%", latency: "5ms" },
    { name: "Nebula AI Core Engine", status: "Operational", uptime: "100%", latency: "450ms" },
    { name: "Auth & Identity Server", status: "Operational", uptime: "99.98%", latency: "22ms" },
    { name: "CDN / Edge Network", status: "Operational", uptime: "100%", latency: "2ms" },
    { name: "API Gateway Phase-1", status: "Maintenance", uptime: "99.95%", latency: "115ms" },
  ];

  return (
    <div className="space-y-12">
      <div className="p-8 rounded-[2rem] bg-green-500/5 border border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
            <Server className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">All Systems Operational</h4>
            <p className="text-sm text-zinc-500 font-medium">Real-time infrastructure health check.</p>
          </div>
        </div>
        <div className="px-6 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center gap-3">
           <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Global Health Index:</span>
           <span className="text-green-500 font-mono font-bold">99.97%</span>
        </div>
      </div>

      <div className="grid gap-4">
        {systems.map((sys) => (
          <div key={sys.name} className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/10 flex items-center justify-between group hover:border-electric/20 transition-colors">
            <div className="flex items-center gap-4">
              <Globe className="w-5 h-5 text-zinc-400 group-hover:text-electric transition-colors" />
              <div>
                <h5 className="font-bold text-sm">{sys.name}</h5>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Uptime: {sys.uptime}</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="hidden md:block text-right">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">Latency</p>
                <p className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">{sys.latency}</p>
              </div>
              <div className="flex items-center gap-3 min-w-[120px] justify-end">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${sys.status === 'Operational' ? 'text-green-500' : 'text-amber-500'}`}>
                  {sys.status}
                </span>
                <div className={`w-2 h-2 rounded-full ${sys.status === 'Operational' ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-[2rem] bg-electric/5 border border-electric/10 mt-12">
        <h4 className="font-bold mb-4 flex items-center gap-2">
          <div className="w-1 h-4 bg-electric rounded-full" />
          Incident History
        </h4>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-[1px] bg-zinc-200 dark:bg-zinc-800 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-300 rounded-full" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-400 uppercase mb-1">May 2, 2026</p>
              <h6 className="text-sm font-bold mb-1">Minor Frontend Degredation</h6>
              <p className="text-xs text-zinc-500 leading-relaxed">Brief intermittent connectivity issues due to CDN cache invalidation. Resolved in 14 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
