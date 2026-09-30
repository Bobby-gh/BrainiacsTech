import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Companies', to: '/companies' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function linkClass(isActive: boolean, mobile = false) {
  if (mobile) {
    return `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
      isActive
        ? 'bg-indigo-50 text-indigo-700'
        : 'text-slate-700 hover:bg-slate-50'
    }`
  }
  return `text-sm font-medium transition ${
    isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <NavLink
          to="/"
          className="shrink-0"
          aria-label="Brainiac home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => linkClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:hello@brainiac.dev"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            hello@brainiac.dev
          </a>
          <NavLink
            to="/contact"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
          >
            Start a project
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="grid size-10 place-items-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav
            className="container-x flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => linkClass(isActive, true)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start a project
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
