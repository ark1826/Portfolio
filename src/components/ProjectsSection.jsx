import { motion } from 'framer-motion';

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="mt-24">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Select real-world applications I built</h2>
      </div>
      <div className="rounded-3xl border border-cyan-500/15 bg-slate-900/80 px-5 py-4 text-sm text-cyan-200">
        Built with modern APIs, database design, and polished frontend UI.
      </div>
    </div>
    <div className="mt-10 grid gap-8 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4 }}
          className="portfolio-card group animate-slide-up overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow"
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <div 
            className="h-48 rounded-[1.6rem] overflow-hidden relative p-4 bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-500/10"
            style={project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'top' } : {}}
          >
            {project.image ? (
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            ) : (
              <div className="absolute inset-0 bg-slate-950/40" />
            )}
            <div className="flex h-full items-end relative z-10 w-full">
              <div className="w-full bg-slate-950/80 p-3 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-xs text-cyan-300 font-medium">Project {index + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-white leading-tight">{project.name}</h3>
              </div>
            </div>
          </div>
          <p className="mt-6 text-slate-300">{project.description}</p>
          <div className="mt-5 space-y-2 text-sm text-slate-400">
            {project.highlights.map((point) => (
              <div key={point} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-300">
            {project.tech.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700/90 bg-slate-900/80 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Live Demo
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
