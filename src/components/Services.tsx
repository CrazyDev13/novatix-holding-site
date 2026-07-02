import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Code2, Blocks, Image, TrendingUp, ArrowLeftRight,
  Coins, Wallet, Rocket, Smartphone, Box, Gamepad2, Brain,
  ChevronRight, Search,
  type LucideIcon,
} from 'lucide-react';
import { serviceCategories } from '../data/services';

const iconMap: Record<string, LucideIcon> = {
  Globe, Code2, Blocks, Image, TrendingUp, ArrowLeftRight,
  Coins, Wallet, Rocket, Smartphone, Box, Gamepad2, Brain,
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = searchQuery.trim()
    ? serviceCategories
        .map((cat) => ({
          ...cat,
          services: cat.services.filter((s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.services.length > 0)
    : serviceCategories;

  const current = filteredCategories.find((c) => c.id === activeCategory)
    ?? filteredCategories[0];

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Our Services
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Comprehensive Digital Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            From blockchain and Web3 to AI and mobile apps — we deliver secure,
            scalable solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-10 max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25"
          />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Blocks;
            const isActive = current?.id === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white ring-1 ring-cyan-500/30'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={16} />
                {cat.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current.id + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <div className="glass overflow-hidden rounded-3xl">
                <div className={`bg-gradient-to-r ${current.gradient} p-px`}>
                  <div className="rounded-[23px] bg-surface-elevated p-8 md:p-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-xl">
                        <div className="flex items-center gap-3">
                          {(() => {
                            const Icon = iconMap[current.icon] ?? Blocks;
                            return (
                              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${current.gradient}`}>
                                <Icon size={24} className="text-white" />
                              </div>
                            );
                          })()}
                          <div>
                            <h3 className="font-display text-2xl font-bold text-white">
                              {current.title}
                            </h3>
                            <p className="mt-1 text-sm text-slate-400">
                              {current.services.length} services available
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-slate-400 leading-relaxed">
                          {current.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {current.services.map((service, i) => (
                        <motion.a
                          key={service.path}
                          href={`#contact`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-all hover:border-cyan-500/20 hover:bg-cyan-500/5"
                        >
                          <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                            {service.name}
                          </span>
                          <ChevronRight
                            size={16}
                            className="shrink-0 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-400"
                          />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {serviceCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Blocks;
            return (
              <motion.button
                key={cat.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glass group rounded-2xl p-6 text-left transition-all hover:-translate-y-1 hover:border-cyan-500/20"
              >
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} opacity-80 transition-opacity group-hover:opacity-100`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h4 className="font-display font-semibold text-white">{cat.title}</h4>
                <p className="mt-1 text-xs text-slate-500">{cat.services.length} services</p>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
