import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const AboutSection = () => (
  <section id="about" className="portfolio-card mt-24 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-glow backdrop-blur-xl">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="animate-slide-up max-w-3xl" style={{ animationDelay: '80ms' }}>
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">About Me</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Turning Ideas into Production-Ready Web Applications</h2>
        <p className="mt-6 text-slate-300">
         I'm a final-year B.Tech (CSE-AIML) student and MERN Stack Developer passionate about building scalable web applications and solving real-world problems.
        </p>
        <p className="mt-4 text-slate-300">
          My experience includes developing secure REST APIs, authentication systems, Razorpay integration, Socket.io applications, and responsive React interfaces. Alongside development, I enjoy strengthening my problem-solving skills through Data Structures and Algorithms.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="group relative max-w-sm overflow-hidden rounded-[2rem] border border-cyan-500/10 bg-slate-950/90 p-6 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10 opacity-0 transition group-hover:opacity-100" />
        <div className="relative rounded-[1.6rem] border border-white/10 bg-slate-900/90 p-6">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-[1.5rem] bg-slate-800">
            <img
              src={profileImg}
              alt="Arun Katiyar"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Developer</p>
            <p className="mt-2 text-2xl font-semibold text-white">Arun Katiyar</p>
            <p className="mt-2 text-slate-400">Building production-ready full-stack solutions.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
