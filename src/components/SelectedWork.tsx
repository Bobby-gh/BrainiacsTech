import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { projectImages } from '../data/images'

export default function SelectedWork() {
  const featured = projects.filter((project) => project.featured).slice(0, 3)

  return (
    <section className="container-x py-16 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Products we shipped, outcomes we can measure
          </h2>
        </div>
        <Link
          to="/projects"
          className="shrink-0 rounded-md border border-[#cbd8e8] bg-white px-5 py-2.5 text-sm font-semibold text-[#08376B] transition hover:border-blue-400 hover:bg-blue-50"
        >
          All projects →
        </Link>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {featured.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-[#dce4ef] bg-white transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/5"
          >
            <div className="image-card relative flex h-52 items-end justify-between overflow-hidden bg-[#08376B] p-5">
              <img
                src={projectImages[project.slug]}
                alt={`${project.client} software project`}
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
                {project.client} · {project.industry}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {project.summary}
              </p>

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
                View case study
                <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
