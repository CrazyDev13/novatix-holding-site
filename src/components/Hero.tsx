import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { company } from '../data/company';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 pb-32 text-center lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm text-cyan-400"
        >
          <Sparkles size={14} />
          {company.heroBadge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          Transform Your Business with{' '}
          <span className="gradient-text">Next-Gen Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          Secure, scalable web and blockchain solutions. We combine talent with quality
          to deliver personalized, innovative products that drive real business impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110"
          >
            Explore Services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {['Blockchain', 'Web3', 'AI/ML', 'Mobile'].map((tag, i) => (
            <div
              key={tag}
              className="glass rounded-2xl px-4 py-5 text-center transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="font-display text-sm font-semibold text-white">{tag}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
