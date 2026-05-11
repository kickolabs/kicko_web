import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      id="main-navbar"
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-100 dark:border-white/5 shadow-sm' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          id="navbar-logo"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-9 h-9 bg-electric rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
            <span className="text-white font-bold text-base">K</span>
          </div>
          <span className="text-zinc-900 dark:text-white">
            Kicko<span className="text-electric"></span>
          </span>
        </motion.div>

        {/* Desktop Links */}
          <div id="desktop-links" className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 hover:text-electric dark:hover:text-electric transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="h-4 w-[1px] bg-zinc-200 dark:bg-white/10" />
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-800 dark:text-white transition-colors hover:border-electric"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.button>

            <motion.button 
              id="start-project-btn"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-2.5 rounded-full bg-electric text-white text-[10px] font-bold uppercase tracking-widest shadow-lg hover:shadow-electric/20 active:scale-95 transition-all"
            >
              Start Project
            </motion.button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center text-zinc-800 dark:text-white"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </motion.button>

          <motion.button 
            id="mobile-menu-toggle"
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center text-zinc-800 dark:text-white" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-3xl font-bold text-zinc-400 dark:text-zinc-500 hover:text-electric transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button className="px-10 py-5 rounded-full bg-electric text-white font-bold uppercase tracking-widest shadow-xl">
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
