import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Companies', to: '/companies' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white text-[#08376B]">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-5">
        <NavLink
          to="/"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#04B1C4]"
          aria-label="Brainiacs Tech home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </NavLink>

        <nav className="hidden h-full items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link relative inline-flex h-full items-center text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#04B1C4] ${isActive ? 'nav-link-active text-[#08376B]' : 'text-slate-600 hover:text-[#08376B]'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-[#04B1C4] px-4 py-2.5 text-sm font-semibold text-[#08376B] transition hover:bg-[#0399aa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#08376B]"
          >
            Start a project
            <span aria-hidden="true">↗</span>
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="grid size-10 place-items-center rounded-md border border-slate-200 text-[#08376B] transition hover:border-[#04B1C4] hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04B1C4] lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="nav-panel-enter border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-3" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded-md px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-[#08376B] text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-[#08376B]'}`}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#04B1C4] px-4 py-3 text-sm font-semibold text-[#08376B] transition hover:bg-[#0399aa]"
            >
              Start a project <span aria-hidden="true">↗</span>
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
