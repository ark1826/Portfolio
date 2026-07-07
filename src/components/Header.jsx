import { motion } from 'framer-motion';

const Header = ({ navLinks, scrollToSection, activeSection }) => (
  <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <div className="text-lg font-semibold tracking-wide text-cyan-300">Arun Katiyar</div>
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <motion.button
            key={link.id}
            whileHover={{ y: -1 }}
            onClick={() => scrollToSection(link.id)}
            className={`text-sm transition ${
              activeSection === link.id ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-300'
            }`}
          >
            {link.title}
          </motion.button>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
