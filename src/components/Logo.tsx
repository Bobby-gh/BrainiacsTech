type LogoProps = {
  variant?: 'dark' | 'light'
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  const wordmarkColor = variant === 'dark' ? 'text-[#08376B]' : 'text-white'

  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Brainiacs Tech">
      <span className="grid size-9 place-items-center rounded-md bg-[#08376B] ring-1 ring-[#04B1C4]/40">
        <svg
          viewBox="0 0 32 32"
          className="size-[22px]"
          fill="none"
          aria-hidden="true"
        >
          <path d="M8 6h8.5a5.5 5.5 0 010 11H8V6Zm0 11h10a5 5 0 010 10H8V17Z" stroke="#04B1C4" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M22.5 6v21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`inline-flex items-baseline gap-1.5 text-[17px] font-semibold tracking-tight ${wordmarkColor}`}>
        <span>Brainiacs</span>
        <span className="text-[#04B1C4]">Tech</span>
      </span>
    </span>
  )
}
