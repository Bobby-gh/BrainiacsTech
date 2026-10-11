import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import PageHeader from '../components/PageHeader'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="More than software. The support to build what's next."
        description="From product engineering to recruitment and coworking, explore the ways the Brainiacs Group companies can help you move forward."
      />

      <section className="container-x py-14 sm:py-20" aria-label="Our services">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#08376B]">
            One connected ecosystem
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Choose the help you need.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="group flex scroll-mt-24 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#04B1C4]/50 hover:shadow-lg hover:shadow-[#08376B]/10"
            >
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {service.category && (
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#04B1C4]">
                        {service.category}
                      </p>
                    )}
                    <h3 className="text-lg font-semibold tracking-tight text-[#08376B]">
                      {service.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {service.body}
                </p>
                <Link
                  to={
                    service.id === 'talents'
                      ? '/talents#recruitment-form'
                      : service.id === 'space'
                        ? '/space#booking'
                        : '/contact'
                  }
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#08376B] transition hover:gap-3 hover:text-[#04B1C4]"
                >
                  {service.id === 'talents'
                    ? 'Join Brainiacs Talents'
                    : service.id === 'space'
                      ? 'Join Brainiacs Space'
                      : 'Discuss this service'}{' '}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
