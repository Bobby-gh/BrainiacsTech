import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="bg-[#08376B] text-white">
      <div className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#04B1C4]">
            What we do
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.035em] sm:text-4xl">
            Software, talent, and space to grow.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            We help ambitious teams build great products, find great people, and find a place to do their best work.
          </p>
          <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#04B1C4] transition hover:gap-3 hover:text-white">
            Explore all services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="grid gap-x-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.id} id={service.id} className={`border-t py-5 sm:py-6 ${service.category ? 'border-[#04B1C4]/60' : 'border-white/20'}`}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <span className="font-mono text-[11px] text-[#04B1C4]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              {service.category && (
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#04B1C4]">
                  {service.category}
                </p>
              )}
              <p className="mt-2 text-sm leading-6 text-white/70">
                {service.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
