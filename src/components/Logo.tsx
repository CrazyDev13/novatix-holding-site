import { company } from '../data/company';

interface LogoMarkProps {
  className?: string;
  gradientId?: string;
}

export function LogoMark({ className = 'h-12 w-12', gradientId = 'logo-gradient' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 36V12"
        stroke="#1e3a5f"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M12 12L36 36"
        stroke={`url(#${gradientId})`}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M36 12V36"
        stroke={`url(#${gradientId})`}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={gradientId} x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
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
  const gradientId = variant === 'navbar' ? 'logo-gradient-nav' : 'logo-gradient-footer';

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label={company.name}>
      <div
        className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-600/15 ring-1 ring-white/10 transition-transform group-hover:scale-105 ${
          isNavbar ? 'h-14 w-14 sm:h-16 sm:w-16' : 'h-11 w-11'
        }`}
      >
        <LogoMark
          gradientId={gradientId}
          className={isNavbar ? 'h-9 w-9 sm:h-10 sm:w-10' : 'h-8 w-8'}
        />
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
