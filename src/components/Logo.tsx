import { company } from '../data/company';

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = 'h-12 w-12' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 40V8l14 22L36 8v32"
        stroke="url(#logo-gradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8l14 22"
        stroke="#1e3a5f"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="logo-gradient" x1="22" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface LogoProps {
  variant?: 'navbar' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'navbar', className = '' }: LogoProps) {
  const isNavbar = variant === 'navbar';

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label={company.name}>
      <div
        className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-600/15 ring-1 ring-white/10 transition-transform group-hover:scale-105 ${
          isNavbar ? 'h-14 w-14 sm:h-16 sm:w-16' : 'h-11 w-11'
        }`}
      >
        <LogoMark className={isNavbar ? 'h-8 w-8 sm:h-9 sm:w-9' : 'h-7 w-7'} />
      </div>
      <div className="min-w-0">
        <p
          className={`font-display font-bold leading-none tracking-tight text-white ${
            isNavbar ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          Nova<span className="gradient-text">trix</span>
        </p>
        <p
          className={`mt-1 font-medium uppercase tracking-[0.25em] text-slate-400 ${
            isNavbar ? 'text-[11px] sm:text-xs' : 'text-[10px]'
          }`}
        >
          Holding
        </p>
      </div>
    </div>
  );
}
