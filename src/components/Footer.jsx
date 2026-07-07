import { motion } from 'framer-motion';

const Footer = ({ contactInfo, resumeUrl }) => (
  <motion.footer
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className="mt-24 border-t border-slate-800/80 pt-8 text-sm text-slate-500"
  >
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 Arun Katiyar. Built for recruiters and engineering teams.</p>
      <div className="flex items-center gap-4">
        <a href={contactInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-cyan-300">GitHub</a>
        <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-cyan-300">LinkedIn</a>
        <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-cyan-300">Resume</a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
