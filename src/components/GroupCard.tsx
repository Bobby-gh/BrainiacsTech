import { Link } from 'react-router-dom'
import type { Branch } from '../data/group'
import Logo from './Logo'

type GroupCardProps = {
  branch: Branch
}

export default function GroupCard({ branch }: GroupCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#04B1C4]/50 hover:shadow-xl hover:shadow-[#08376B]/10">
      <Link
        to={branch.path}
        className="relative block overflow-hidden bg-[#08376B] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#04B1C4]"
        aria-label={`Explore ${branch.name}`}
      >
        <img
          src={branch.image}
          alt={branch.imageAlt}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#08376B]/70 via-[#08376B]/10 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-3 left-4 inline-flex">
          <Logo company={branch.logoKey} variant="light" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#04B1C4]">
          {branch.tagline}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
          {branch.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {branch.description}
        </p>

        <dl className="mt-5 grid grid-cols-4 gap-2 border-t border-slate-100 pt-4">
          {branch.highlights.map((highlight) => (
            <div key={highlight.label}>
              <dt className="sr-only">{highlight.label}</dt>
              <dd className="text-sm font-semibold text-[#08376B]">
                {highlight.value}
              </dd>
              <p className="mt-0.5 text-[10px] leading-3 text-slate-500">
                {highlight.label}
              </p>
            </div>
          ))}
        </dl>

        <Link
          to={branch.ctaTo}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-[#04B1C4] px-4 py-2.5 text-sm font-semibold text-[#08376B] transition hover:bg-[#0399aa]"
        >
          {branch.ctaLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
