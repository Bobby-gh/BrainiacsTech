import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import PageHeader from '../components/PageHeader'
import { companies, companyIndustries } from '../data/companies'

const quickStats = [
  { value: '120+', label: 'Companies served' },
  { value: '14', label: 'Industries' },
  { value: '94%', label: 'Repeat engagements' },
  { value: '9', label: 'Countries' },
]

export default function Companies() {
  const [industry, setIndustry] = useState<string>('All')

  const visible =
    industry === 'All'
      ? companies
      : companies.filter((company) => company.industry === industry)

  return (
    <>
      <PageHeader
        eyebrow="Companies"
        title="The teams we build for"
        description="From regulated fintechs to logistics operators running on three continents — here is a selection of the companies that trust us with their product."
      >
        <dl className="mx-auto mt-2 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {quickStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="text-2xl font-semibold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <section className="container-x py-16 sm:py-20">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {companyIndustries.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setIndustry(item)}
              aria-pressed={industry === item}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                industry === item
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((company) => (
            <article
              key={company.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold text-white ${company.gradient}`}
                  aria-hidden="true"
                >
                  {company.monogram}
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-base font-semibold text-slate-900">
                    {company.name}
                  </h2>
                  <p className="truncate text-xs text-slate-500">
                    {company.industry} · {company.region}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                {company.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-600">
                  {company.engagement}
                </span>
                <Link
                  to="/projects"
                  className="text-xs font-semibold text-slate-400 transition hover:text-indigo-600"
                >
                  See the work →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-sm text-slate-500">
            No public names in this industry — we likely still work there under
            NDA.{' '}
            <Link to="/contact" className="font-semibold text-indigo-600">
              Ask us directly
            </Link>
            .
          </p>
        )}
      </section>

      {/* quote */}
      <section className="border-y border-slate-200/70 bg-slate-50/60">
        <div className="container-x py-16">
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="text-xl font-medium leading-relaxed text-slate-900 sm:text-2xl">
              “They shipped our payments rebuild in nine months with a team of
              six. Two years later, half of that team still supports it.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-slate-500">
              <span className="font-semibold text-slate-900">Dana Whitfield</span>{' '}
              · Chief Technology Officer, Ledgerline
            </figcaption>
          </figure>
        </div>
      </section>

      <CTA />
    </>
  )
}
