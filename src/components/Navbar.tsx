import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { branches } from '../data/group'

const links = [
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

/** Small custom dropdown listing the three sub-companies. */
function CompaniesMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-full">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex h-full items-center gap-1.5 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#04B1C4] ${
          open ? 'text-[#08376B]' : 'text-slate-600 hover:text-[#08376B]'
        }`}
      >
        Group companies
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`size-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
      <div
        className="nav-panel-enter absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-2"
        role="menu"
        aria-label="Group companies"
      >
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl shadow-slate-950/10">
            {branches.map((branch) => (
              <NavLink
                key={branch.slug}
                to={branch.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-[#08376B] transition hover:bg-slate-50"
              >
                <span className="text-[#04B1C4]" aria-hidden="true">
                  →
                </span>
                {branch.name.replace('Brainiacs ', '')}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white text-[#08376B]">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-5">
        <NavLink
          to="/"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#04B1C4]"
          aria-label="Brainiacs Group home"
          onClick={() => setOpen(false)}
        >
          <Logo company="group" />
        </NavLink>

        <nav className="hidden h-full items-center gap-7 lg:flex" aria-label="Primary">
          <CompaniesMenu />
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative inline-flex h-full items-center text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#04B1C4] ${
                  isActive
                    ? 'nav-link-active text-[#08376B]'
                    : 'text-slate-600 hover:text-[#08376B]'
                }`
              }
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
        <div
          id="mobile-navigation"
          className="nav-panel-enter border-t border-slate-200 bg-white lg:hidden"
        >
          <nav className="container-x flex flex-col gap-1 py-3" aria-label="Mobile">
            <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Group companies
            </p>
            {branches.map((branch) => (
              <NavLink
                key={branch.slug}
                to={branch.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#08376B] text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#08376B]'
                  }`
                }
              >
                {branch.name.replace('Brainiacs ', '')}
              </NavLink>
            ))}

            <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Explore
            </p>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#08376B] text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#08376B]'
                  }`
                }
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
