import { Link, Navigate, useParams } from 'react-router-dom'
import CTA from '../components/CTA'
import { getProject, projects } from '../data/projects'
import { projectImages } from '../data/images'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  const meta = [
    { label: 'Client', value: project.client },
    { label: 'Industry', value: project.industry },
    { label: 'Engagement', value: project.services.join(', ') },
    { label: 'Timeline', value: project.duration },
    { label: 'Team', value: project.teamSize },
    { label: 'Year', value: project.year },
  ]

  return (
    <>
      <article>
        {/* header */}
        <section className="image-banner relative min-h-[31rem] overflow-hidden border-b border-[#1b3b61] text-white">
          <img
            src={projectImages[project.slug]}
            alt={`${project.client} project environment`}
            fetchPriority="high"
          />
          <div className="container-x flex min-h-[31rem] flex-col justify-center py-14 sm:py-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-100/65 transition hover:text-white"
            >
              <span aria-hidden="true">←</span> All projects
            </Link>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/75 sm:text-lg">
              {project.summary}
            </p>

            <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-blue-100/50">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* banner */}
        <section className="container-x pt-12">
          <div className="image-card relative flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-[#08376B] shadow-2xl shadow-blue-950/15 sm:h-96">
            <img
              src={projectImages[project.slug]}
              alt={`${project.client} project banner`}
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-[#08376B]/45" aria-hidden="true" />
            <span className="text-7xl font-bold tracking-tight text-white/90 sm:text-9xl">
              {project.monogram}
            </span>
          </div>
        </section>

        {/* challenge + solution */}
        <section className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              The challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              What we built
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {project.solution}
            </p>
          </div>
        </section>

        {/* outcomes */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="container-x relative py-14">
            <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-blue-300">
              Outcomes
            </h2>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
              {project.outcomes.map((outcome) => (
                <div key={outcome.label} className="text-center">
                  <dt className="sr-only">{outcome.label}</dt>
                  <dd>
                    <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {outcome.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {outcome.label}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* stack */}
        <section className="container-x py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Technologies used
            </h2>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-xs text-slate-600 shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* next project */}
        <section className="border-t border-slate-200/70 bg-slate-50/60">
          <div className="container-x py-12">
            <Link
              to={`/projects/${next.slug}`}
              className="group flex flex-col items-start justify-between gap-6 rounded-xl border border-[#dce4ef] bg-white p-6 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/5 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Next project
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {next.client} — {next.title}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800">
                View case study
                <span
                  className="transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </section>
      </article>

      <CTA />
    </>
  )
}
