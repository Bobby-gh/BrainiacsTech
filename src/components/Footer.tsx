import { Link } from 'react-router-dom'
import Logo from './Logo'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Companies', to: '/companies' },
      { label: 'Projects', to: '/projects' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Product engineering', to: '/services#product-engineering' },
      { label: 'Web & mobile apps', to: '/services#web-applications' },
      { label: 'Cloud & DevOps', to: '/services#cloud-devops' },
      { label: 'AI & data platforms', to: '/services#ai-data' },
      { label: 'Brainiacs Talents', to: '/services#talents' },
      { label: 'Brainiacs Space', to: '/services#space' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Case studies', to: '/projects' },
      { label: 'Industries', to: '/companies' },
      { label: 'Our process', to: '/#process' },
      { label: 'Client results', to: '/#testimonials' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@brainiac.dev', to: '/contact' },
      { label: '+233 24 555 0142', to: '/contact' },
      { label: 'Accra, Tesano · London, UK', to: '/contact' },
      { label: 'Careers', to: '/about' },
    ],
  },
]

const socials = [
  {
    label: 'Brainiacs Tech on X',
    path: 'M4 4l7.5 9.5L4.5 20H7l5.6-6.4L16.8 20H20l-7.8-9.9L18.9 4H16.4l-5.1 5.9L7.2 4H4z',
  },
  {
    label: 'Brainiacs Tech on GitHub',
    path: 'M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0012 2z',
  },
  {
    label: 'Brainiacs Tech on LinkedIn',
    path: 'M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9.5h4v11H3v-11zm6.5 0h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.31-2.02 2.66v5.14h-4v-11z',
  },
]

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#08376B] text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" aria-label="Brainiacs Tech home">
              <Logo variant="light" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100/60">
              A UK software engineering company based in Accra, Ghana — we take
              products from whiteboard to production and keep them healthy at
              scale.
            </p>
            <ul className="mt-5 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href="#"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-md border border-white/15 text-blue-100/65 transition hover:border-white/40 hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-blue-100/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-blue-100/50">
            © {year} Brainiacs Tech. All rights reserved.
          </p>
          <p className="flex items-center gap-4 text-xs text-blue-100/50">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </span>
            <span>Software engineering, end to end</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
