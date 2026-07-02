import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Loader2, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../lib/contact';

const initialForm = {
  name: '',
  email: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitContactForm(form);
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  const updateField = (field: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get In Touch
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Tell us about your project and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'info@novatixholding.com' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                {
                  icon: MapPin,
                  label: 'Address',
                  value: '36/12, Kiran Path, Mansarovar, Jaipur - 302020, Rajasthan, India',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                    <item.icon size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    <p className="mt-0.5 text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                    <Send size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">Message Sent!</h3>
                  <p className="mt-2 text-slate-400">We&apos;ll get back to you shortly.</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  {status === 'error' && (
                    <div className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3">
                      <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
                      <p className="text-sm text-red-300">{errorMessage}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-400">
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={form.name}
                      onChange={updateField('name')}
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-500/50 disabled:opacity-60"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-400">
                      Email
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={updateField('email')}
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-500/50 disabled:opacity-60"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-400">
                      Service Interested In
                    </label>
                    <input
                      id="service"
                      type="text"
                      value={form.service}
                      onChange={updateField('service')}
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-500/50 disabled:opacity-60"
                      placeholder="e.g. Blockchain Development, NFT Marketplace"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-400">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={updateField('message')}
                      disabled={status === 'loading'}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-500/50 disabled:opacity-60"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
