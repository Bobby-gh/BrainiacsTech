import { Link } from 'react-router-dom'

const brainiacsCompanies = [
  {
    name: 'Brainiacs Tech',
    description: 'Digital products, engineered to move businesses forward.',
    to: '/',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Developer working at a computer',
  },
  {
    name: 'Brainiacs Space',
    description: 'A coworking home for independent minds and ambitious teams.',
    to: '/space',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Bright shared coworking space',
  },
  {
    name: 'Brainiacs Talents',
    description: 'Thoughtful technology recruitment that brings people together.',
    to: '/talents',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'People meeting in a modern office',
  },
]

export default function ClientShowcase() {
  return (
    <section className="border-b border-slate-200 bg-white py-12 sm:py-16" aria-labelledby="client-showcase-title">
      <div className="container-x">
        <h2 id="client-showcase-title" className="sr-only">
          Explore the Brainiacs companies
        </h2>
        <ul className="grid gap-5 sm:grid-cols-3">
          {brainiacsCompanies.map((company) => (
            <li key={company.name} className="min-w-0">
              <Link
                to={company.to}
                aria-label={`Explore ${company.name}`}
                className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#04B1C4]"
              >
                <div className="overflow-hidden rounded-md bg-slate-100">
                <img
                  src={company.image}
                  alt={company.imageAlt}
                  loading="eager"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                </div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#08376B]">{company.name}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{company.description}</p>
                  </div>
                  <span className="mt-0.5 text-[#04B1C4] transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
