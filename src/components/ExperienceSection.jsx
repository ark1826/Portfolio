import { motion } from 'framer-motion';

const ExperienceSection = ({ experience }) => (
  <motion.section
    id="experience"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65 }}
    className="mt-24 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl"
  >
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Professional Journey</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Experience & milestones</h2>
      </div>
      <p className="max-w-xl text-sm text-slate-400">
        A modern timeline showing personal projects, freelance work, open source contributions, and learning achievements.
      </p>
    </div>
    <div className="mt-10 space-y-6">
      {experience.map((entry, index) => (
        <motion.div
          key={entry.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="portfolio-card rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{entry.timeframe}</p>
            </div>
            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-cyan-300">
              Growth
            </div>
          </div>
          <p className="mt-4 text-slate-300">{entry.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default ExperienceSection;
