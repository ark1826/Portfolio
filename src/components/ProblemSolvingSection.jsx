import { motion } from 'framer-motion';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const ProblemSolvingSection = ({ stats }) => (
  <motion.section
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65 }}
    className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_0.7fr]"
  >
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow"
    >
      <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Problem Solving</p>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">DSA & logical reasoning</h2>
      <p className="mt-6 text-slate-300">
        I solve algorithmic problems daily, design efficient data structures, and apply strong logical reasoning to solve engineering challenges with optimal solutions.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="portfolio-card rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6"
          >
            <p className="text-3xl font-semibold text-white">{item.value}</p>
            <p className="mt-3 text-sm text-slate-400">{item.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 space-y-4 rounded-[1.75rem] border border-cyan-500/15 bg-slate-950/80 p-6">
        <a
          href="https://leetcode.com/arunkatiyar"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          <span className="flex items-center gap-3">
            <SiLeetcode size={20} /> LeetCode Profile
          </span>
          <span className="text-cyan-300">View</span>
        </a>
        <a
          href="https://www.hackerrank.com/arunkatiyar"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          <span className="flex items-center gap-3">
            <SiHackerrank size={20} /> HackerRank Profile
          </span>
          <span className="text-cyan-300">View</span>
        </a>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow"
    >
      <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Why Hire Me</p>
      <h3 className="mt-4 text-3xl font-semibold text-white">Ready to contribute from day one</h3>
      <ul className="mt-6 space-y-4 text-slate-300">
        <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
          <p className="font-semibold text-white">Strong MERN expertise</p>
          <p className="mt-2 text-sm text-slate-400">I build scalable React frontends, Express APIs, and resilient MongoDB-backed systems.</p>
        </li>
        <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
          <p className="font-semibold text-white">DSA foundation</p>
          <p className="mt-2 text-sm text-slate-400">I solve algorithmic problems and apply efficient data structures to production design.</p>
        </li>
        <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
          <p className="font-semibold text-white">Problem-solving mindset</p>
          <p className="mt-2 text-sm text-slate-400">I turn complex requirements into clean, maintainable solutions with strong engineering discipline.</p>
        </li>
      </ul>
    </motion.div>
  </motion.section>
);

export default ProblemSolvingSection;
