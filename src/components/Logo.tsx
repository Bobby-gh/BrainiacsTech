type LogoCompany = 'group' | 'tech' | 'space' | 'talents'

type LogoProps = {
  variant?: 'dark' | 'light'
  company?: LogoCompany
  /** Show only the logo mark tile, without the wordmark next to it. */
  marksOnly?: boolean
}

/** Per-company logo marks, one for each Brainiacs Group company. */
const marks: Record<
  LogoCompany,
  { svg: React.ReactNode; words: [string, string] }
> = {
  group: {
    svg: (
      <>
        {/* Group mark: three connected nodes under one roof bar */}
        <svg
          viewBox="0 0 32 32"
          className="size-[22px]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 12L16 4l12 8"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="22" r="3" stroke="#04B1C4" strokeWidth="2.4" />
          <circle cx="23" cy="22" r="3" stroke="#04B1C4" strokeWidth="2.4" />
          <circle cx="16" cy="14" r="2.6" stroke="white" strokeWidth="2.2" />
          <path
            d="M11.5 16.5 10 19m8.5-2.5L20 19m-4-2.4v-2.2"
            stroke="#04B1C4"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </>
    ),
    words: ['Brainiacs', 'Group'],
  },
  tech: {
    svg: (
      <>
        {/* Tech mark: the original "B + rail" monogram */}
        <svg
          viewBox="0 0 32 32"
          className="size-[22px]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 6h8.5a5.5 5.5 0 010 11H8V6Zm0 11h10a5 5 0 010 10H8V17Z"
            stroke="#04B1C4"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 6v21"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </>
    ),
    words: ['Brainiacs', 'Tech'],
  },
  space: {
    svg: (
      <>
        {/* Space mark: an open doorway / room */}
        <svg
          viewBox="0 0 32 32"
          className="size-[22px]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 28V6h13a5 5 0 015 5v3a5 5 0 01-5 5h-4"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 28v-9"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="16" cy="22" r="3" stroke="#04B1C4" strokeWidth="2.4" />
        </svg>
      </>
    ),
    words: ['Brainiacs', 'Space'],
  },
  talents: {
    svg: (
      <>
        {/* Talents mark: two people */}
        <svg
          viewBox="0 0 32 32"
          className="size-[22px]"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="9" r="4" stroke="white" strokeWidth="2.4" />
          <path
            d="M5 27c0-4.4 3.1-8 7-8s7 3.6 7 8"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M20.5 6.3A4 4 0 0121 13m2.6 6.6c2 1.5 3.4 4.2 3.4 7.4"
            stroke="#04B1C4"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </>
    ),
    words: ['Brainiacs', 'Talents'],
  },
}

export default function Logo({
  variant = 'dark',
  company = 'tech',
  marksOnly = false,
}: LogoProps) {
  const mark = marks[company]
  const tileBackground =
    company === 'tech' ? 'bg-[#08376B]' : 'bg-[#04B1C4]'
  const wordmarkColor = variant === 'dark' ? 'text-[#08376B]' : 'text-white'
  const [first, second] = mark.words

  if (marksOnly) {
    return (
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-md ${tileBackground} ring-1 ring-[#04B1C4]/40`}
        role="img"
        aria-label={mark.words.join(' ')}
      >
        {mark.svg}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-2.5" aria-label={mark.words.join(' ')}>
      <span
        className={`grid size-9 place-items-center rounded-md ${tileBackground} ring-1 ring-[#04B1C4]/40`}
      >
        {mark.svg}
      </span>
      {company === 'group' ? (
        <span
          className={`inline-flex items-baseline gap-1.5 text-[17px] font-semibold tracking-tight ${wordmarkColor}`}
        >
          <span>{first}</span>
          <span className="text-[#04B1C4]">{second}</span>
        </span>
      ) : (
        <span
          className={`inline-flex items-baseline gap-1.5 text-[15px] font-semibold tracking-tight ${wordmarkColor}`}
        >
          <span className="text-[13px] text-slate-500/90">Brainiacs</span>
          <span className="text-[#04B1C4]">{second}</span>
        </span>
      )}
    </span>
  )
}
