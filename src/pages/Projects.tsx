import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import PageHeader from '../components/PageHeader'
import { projectCategories, projects } from '../data/projects'
import { projectImages } from '../data/images'

export default function Projects() {
  const [category, setCategory] = useState<string>('All')

  const visible =
    category === 'All'
      ? projects
      : projects.filter((project) => project.category === category)

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Case studies from the field"
        description="Six engagements, six measurable outcomes. Every project below was designed, built, and shipped by an embedded Brainiacs Tech team."
      >
        <p className="text-sm text-slate-500">
          200+ products shipped since 2014 · these are the ones we can talk
          about publicly
        </p>
      </PageHeader>

      <section className="container-x py-16 sm:py-20">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                category === item
                  ? 'border-[#08376B] bg-[#08376B] text-white shadow-lg shadow-blue-950/15'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#dce4ef] bg-white transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/5"
            >
              <div className="image-card relative flex h-52 items-end justify-between overflow-hidden bg-[#08376B] p-5">
                <img
                  src={projectImages[project.slug]}
                  alt={`${project.client} project visual`}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-[#08376B]/55" aria-hidden="true" />
                <span className="text-4xl font-bold tracking-tight text-white/90">
                  {project.monogram}
                </span>
                <span className="rounded-full border border-white/25 bg-[#061b38]/40 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {project.client} · {project.industry} · {project.year}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">
                  {project.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {project.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <li
                      key={tech}
                      className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-500"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                  {project.outcomes.slice(0, 2).map((outcome) => (
                    <div key={outcome.label}>
                      <p className="text-base font-semibold text-slate-900">
                        {outcome.value}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {outcome.label}
                      </p>
                    </div>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800">
                  Read the case study
                  <span
                    className="transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-sm text-slate-500">
            No public case studies in this category yet —{' '}
            <Link to="/contact" className="font-semibold text-blue-800">
              ask us about it
            </Link>
            .
          </p>
        )}
      </section>

      <CTA />
    </>
  )
}
