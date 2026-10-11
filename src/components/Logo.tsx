type LogoCompany = 'group' | 'tech' | 'space' | 'talents'

type LogoProps = {
  variant?: 'dark' | 'light'
  company?: LogoCompany
  /** Show only the logo mark tile, without the wordmark next to it. */
  marksOnly?: boolean
}

const logoImages: Record<LogoCompany, { src: string; label: string }> = {
  group: {
    src: '/images/Logos/combined.png',
    label: 'Brainiacs Group',
  },
  tech: {
    src: '/images/Logos/tech-ai.png',
    label: 'Brainiacs Tech',
  },
  space: {
    src: '/images/Logos/space-ai.png',
    label: 'Brainiacs Space',
  },
  talents: {
    src: '/images/Logos/talent-ai.png',
    label: 'Brainiacs Talents',
  },
}

export default function Logo({
  variant = 'dark',
  company = 'tech',
  marksOnly = false,
}: LogoProps) {
  const logo = logoImages[company]

  if (marksOnly) {
    return (
      <span
        className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-md bg-white ring-1 ring-slate-200"
        role="img"
        aria-label={logo.label}
      >
        <img
          src={logo.src}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-[-7px] h-auto w-[110px] max-w-none -translate-x-1/2"
        />
      </span>
    )
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg ${variant === 'light' ? 'bg-white px-2 py-1 shadow-sm' : ''}`}
      role="img"
      aria-label={logo.label}
    >
      <img
        src={logo.src}
        alt=""
        aria-hidden="true"
        className="h-[3.75rem] w-[6rem] object-contain sm:h-16 sm:w-[6.4rem]"
      />
    </span>
  )
}
