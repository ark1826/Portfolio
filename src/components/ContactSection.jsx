import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ContactSection = ({ contactInfo, resumeUrl }) => (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65 }}
    className="mt-24 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow"
  >
    <div className="grid gap-10 lg:grid-cols-[0.95fr_0.6fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let’s collaborate on your next product.</h2>
        <p className="mt-6 max-w-2xl text-slate-300">
          I am actively seeking opportunities where I can contribute my software development skills, collaborate with talented teams, and build impactful products while continuously growing as an engineer.
        </p>
        <div className="mt-10 space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
          <div className="flex items-start gap-4">
            <FaEnvelope className="mt-1 text-cyan-300" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-slate-400">{contactInfo.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhone className="mt-1 text-cyan-300" />
            <div>
              <p className="font-semibold text-white">Phone</p>
              <p className="text-slate-400">{contactInfo.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="mt-1 text-cyan-300" />
            <div>
              <p className="font-semibold text-white">Location</p>
              <p className="text-slate-400">{contactInfo.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaLinkedin className="mt-1 text-cyan-300" />
            <div>
              <p className="font-semibold text-white">LinkedIn</p>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-cyan-300">{contactInfo.linkedin}</a>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="rounded-[2rem] border border-cyan-500/10 bg-slate-950/80 p-8 text-center"
      >
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Resume</p>
        <h3 className="mt-4 text-3xl font-semibold text-white">View my professional resume</h3>
        <p className="mt-4 text-slate-400">
          Explore my career summary, technical strengths, project outcomes, and contributions to real-world engineering challenges.
        </p>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          View Resume
        </a>
      </motion.div>
    </div>
  </motion.section>
);

export default ContactSection;
