import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import PageHeader from '../components/PageHeader'
import { companies, companyIndustries } from '../data/companies'
import { companyImages } from '../data/images'

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
                <p className="text-2xl font-semibold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-blue-100/65">{stat.label}</p>
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
                  ? 'border-[#08376B] bg-[#08376B] text-white shadow-lg shadow-blue-950/15'
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
              className="flex flex-col overflow-hidden rounded-2xl border border-[#dce4ef] bg-white transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10"
            >
              <div className="image-card relative h-36 overflow-hidden bg-[#08376B]">
                <img
                  src={companyImages[company.industry] ?? companyImages.SaaS}
                  alt={`${company.industry} technology`} 
                  loading="lazy"
                  className="size-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-[#08376B]/40" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-3 px-6 pt-5">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#08376B] text-sm font-bold text-white"
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

              <p className="mt-4 flex-1 px-6 text-sm leading-relaxed text-slate-600">
                {company.description}
              </p>

              <div className="mx-6 mb-6 mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-800">
                  {company.engagement}
                </span>
                <Link
                  to="/projects"
                  className="text-xs font-semibold text-slate-400 transition hover:text-blue-700"
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
            <Link to="/contact" className="font-semibold text-blue-800">
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
