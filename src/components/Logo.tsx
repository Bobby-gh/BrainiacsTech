type LogoProps = {
  variant?: 'dark' | 'light'
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  const wordmarkColor = variant === 'dark' ? 'text-slate-900' : 'text-white'

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm shadow-indigo-500/30">
        <svg
          viewBox="0 0 24 24"
          className="size-[18px] text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2z" />
          <path
            d="M18.6 15.2l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z"
            fillOpacity="0.85"
          />
        </svg>
      </span>
      <span className={`text-[17px] font-semibold tracking-tight ${wordmarkColor}`}>
        Brainiac
      </span>
    </span>
  )
}
