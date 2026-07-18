import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ navLinks, scrollToSection, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    // close mobile menu if open
    setMenuOpen(false);
    // call parent scroll function; it should handle centering
    scrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo / Brand */}
        <div className="text-lg font-semibold tracking-wide text-cyan-300">Arun Katiyar</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              whileHover={{ y: -1 }}
              onClick={() => handleClick(link.id)}
              className={`text-sm transition ${activeSection === link.id ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-300'}`}
            >
              {link.title}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/70"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleClick(link.id)}
                  className={`text-base transition ${activeSection === link.id ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-300'}`}
                >
                  {link.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
