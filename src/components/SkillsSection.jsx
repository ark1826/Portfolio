import { motion } from 'framer-motion';

const SkillsSection = ({ skills, skillProgress }) => (
  <motion.section
    id="skills"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65 }}
    className="mt-24 grid gap-10 lg:grid-cols-[0.95fr_0.7fr]"
  >
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Technical capabilities for modern product engineering</h2>
        </div>
        <div className="hidden rounded-3xl border border-cyan-500/15 bg-slate-900/70 px-4 py-3 text-sm text-cyan-200 md:inline-flex">
          MERN • Backend APIs • DSA • GitOps
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skills.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="portfolio-card rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow"
          >
            <h3 className="text-xl font-semibold text-white">{section.title}</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {section.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow"
    >
      <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Proficiency</p>
      <h3 className="text-2xl font-semibold text-white">Focused skill mastery</h3>
      <p className="text-slate-400">
        I build both frontend experiences and backend systems with equal attention to code quality, performance, and architecture.
      </p>
      <div className="space-y-5">
        {skillProgress.map((skill) => (
          <div key={skill.title}>
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{skill.title}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.section>
);

export default SkillsSection;
