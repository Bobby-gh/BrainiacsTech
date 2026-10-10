import { Link } from 'react-router-dom'
import { showcaseImages } from '../data/images'

const brainiacsCompanies = [
  {
    name: 'Brainiacs Tech',
    description: 'Digital products, engineered to move businesses forward.',
    to: '/',
    image: showcaseImages.tech,
    imageAlt: 'Black software engineers pair-programming in a technology workspace',
  },
  {
    name: 'Brainiacs Space',
    description: 'A coworking home for independent minds and ambitious teams.',
    to: '/space',
    image: showcaseImages.space,
    imageAlt: 'Bright shared coworking space',
  },
  {
    name: 'Brainiacs Talents',
    description: 'Thoughtful technology recruitment that brings people together.',
    to: '/talents',
    image: showcaseImages.talents,
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
