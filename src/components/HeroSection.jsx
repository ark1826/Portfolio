import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

const HeroSection = ({ resumeUrl, socialLinks, contactInfo, scrollToSection }) => (
  <section id="home" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="max-w-2xl"
    >
      <p className="animate-slide-up inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
        MERN Stack Developer • Problem Solver • Real-World Engineering
      </p>
      <h1 className="animate-slide-up mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ animationDelay: '120ms' }}>
        Arun Katiyar
      </h1>
      <p className="animate-slide-up mt-4 max-w-xl text-lg text-slate-300" style={{ animationDelay: '180ms' }}>
        MERN Stack Developer | Full Stack Engineer | Solving Real-World Problems with Clean & Scalable Code
      </p>
      <p className="animate-slide-up mt-6 text-slate-300" style={{ animationDelay: '240ms' }}>
        MERN Stack Developer passionate about building scalable web applications using MongoDB, Express.js, React, and Node.js. Experienced in authentication, REST APIs, Razorpay integration, real-time applications with Socket.io, and solving 250+ DSA problems.
      </p>
      <div className="animate-slide-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: '300ms' }}>
        <button
          onClick={() => scrollToSection('projects')}
          className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          View Projects
        </button>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          <FaDownload className="mr-2" /> Download Resume
        </a>
      </div>
      <div className="animate-slide-up mt-8 flex items-center gap-4" style={{ animationDelay: '360ms' }}>
        {socialLinks.map((social) => {
          const Icon = socialIcons[social.label];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="animate-float rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-500/15 bg-slate-950/80 p-6">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500" />
        <div className="mb-6 flex items-center gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 p-[2px]">
            <img src={profileImg} alt="Arun Katiyar" className="h-full w-full rounded-[1.3rem] object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Software Engineer</p>
            <p className="text-xl font-semibold text-white">Professional Profile</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
            <p className="text-sm text-slate-400">Title</p>
            <p className="mt-2 text-lg font-semibold text-white">MERN Stack Developer</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
            <p className="text-sm text-slate-400">Ready to Contribute</p>
            <p className="mt-2 text-lg font-semibold text-white">Production-ready mindset</p>
          </div>
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Contact</p>
          <p className="mt-3 text-lg font-semibold text-white">{contactInfo.email}</p>
          <p className="text-slate-400">{contactInfo.phone}</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
