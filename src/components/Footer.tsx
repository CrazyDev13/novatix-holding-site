import { serviceCategories } from '../data/services';
import { companyContact } from '../data/contact';
import Logo from './Logo';

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export default function Footer() {
  const topServices = serviceCategories.slice(0, 6);

  return (
    <footer className="border-t border-white/5 bg-surface-elevated/50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Novatix Holding delivers secure, scalable digital solutions — from blockchain
              and Web3 to AI and mobile apps — for businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {topServices.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${companyContact.email}`}
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  {companyContact.email}
                </a>
              </li>
              <li>
                <a
                  href={companyContact.phoneHref}
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  {companyContact.phone}
                </a>
              </li>
              <li className="text-sm text-slate-400">{companyContact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Novatix Holding. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            {companyContact.website}
          </p>
        </div>
      </div>
    </footer>
  );
}
