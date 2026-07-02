import { motion } from 'framer-motion';
import { Shield, Users, Award, HeadphonesIcon } from 'lucide-react';
import { features, techStack } from '../data/services';
import { company } from '../data/company';

const featureIcons = [Shield, Users, Award, HeadphonesIcon];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              Why {company.name}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
              Your Trusted Partner for Digital Innovation
            </h2>
            <p className="mt-6 leading-relaxed text-slate-400">
              {company.name} is a trusted provider of reliable IT solutions for companies
              of all sizes. Our focus spans blockchain, online platforms, metaverse projects,
              gaming, and software development — delivering products that elevate your business.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Unlike our competitors, our services are personalized, secure, and infinitely
              scalable. We combine talent with quality to achieve results that provide a
              positive impact on your business.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                    <Icon size={20} className="text-violet-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Technology Stack
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:border-cyan-500/20 hover:text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
