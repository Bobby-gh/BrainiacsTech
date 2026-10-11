import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import CTA from '../components/CTA'
import GroupCard from '../components/GroupCard'
import { branches, group } from '../data/group'
import Logo from '../components/Logo'

const timeline = [
  {
    year: '2014',
    title: 'Brainiacs Tech is founded',
    body: 'Four engineers, one Accra desk, and a rule: no body shops, only product teams.',
  },
  {
    year: '2021',
    title: 'Brainiacs Space opens',
    body: 'The team outgrew its office and opened the doors to the community — a coworking home in Tesano.',
  },
  {
    year: '2023',
    title: 'Brainiacs Talents launches',
    body: 'A decade of hiring taught us how to match people and teams, so we made it its own company.',
  },
  {
    year: '2026',
    title: 'One group, three companies',
    body: 'Tech, Space and Talents now operate as sister companies under Brainiacs Group, sharing one standard of craft.',
  },
]

export default function Group() {
  return (
    <>
      <PageHeader
        eyebrow="About the group"
        title="One group, three companies, one standard of craft."
        description="Brainiacs Group sits above three sister companies — Tech, Space and Talents — each with its own team, focus, and customers, all built on the same founding principle: do the work properly, and be easy to work with."
      >
        <dl className="mx-auto mt-2 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <dt className="sr-only">Founded</dt>
            <dd>
              <p className="text-2xl font-semibold tracking-tight text-white">
                2014
              </p>
              <p className="mt-1 text-xs text-blue-100/65">Founded in Accra</p>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Companies</dt>
            <dd>
              <p className="text-2xl font-semibold tracking-tight text-white">
                3
              </p>
              <p className="mt-1 text-xs text-blue-100/65">Sister companies</p>
            </dd>
          </div>
          <div>
            <dt className="sr-only">People</dt>
            <dd>
              <p className="text-2xl font-semibold tracking-tight text-white">
                60+
              </p>
              <p className="mt-1 text-xs text-blue-100/65">People group-wide</p>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Offices</dt>
            <dd>
              <p className="text-2xl font-semibold tracking-tight text-white">
                2
              </p>
              <p className="mt-1 text-xs text-blue-100/65">Accra &amp; London</p>
            </dd>
          </div>
        </dl>
      </PageHeader>

      {/* Group story */}
      <section className="container-x grid gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#04B1C4]">
            The mother company
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Built in Accra, run as a family of specialists
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              Brainiacs started in 2014 as a software engineering company. As the
              team grew, two things became obvious: the office we loved could
              serve the whole community, and the way we hired people was its own
              craft.
            </p>
            <p>
              So the company multiplied. Today, Brainiacs Group is the shared
              home for three focused companies — Tech builds the software, Space
              hosts the work, and Talents finds the people. Each runs
              independently, and each is accountable for its own outcomes.
            </p>
            <p>
              What connects them is simple: senior attention, honest estimates,
              and a standard of craft that does not change from one company to
              the next.
            </p>
          </div>
          <p className="mt-6 border-l-2 border-[#04B1C4] pl-4 text-sm leading-6 text-slate-600">
            {group.offices}
          </p>
        </div>

        <ol className="mx-auto w-full max-w-xl self-start">
          {timeline.map((item) => (
            <li
              key={item.year}
              className="relative grid grid-cols-[4.5rem_1fr] gap-6 pb-8 last:pb-0"
            >
              <span
                className="absolute left-[3.6rem] top-6 h-full w-px bg-slate-200"
                aria-hidden="true"
              />
              <div className="text-right">
                <span className="font-mono text-sm font-semibold text-blue-700">
                  {item.year}
                </span>
              </div>
              <div className="relative">
                <span
                  className="absolute -left-[1.95rem] top-1.5 size-2.5 rounded-full bg-[#04B1C4] ring-4 ring-blue-100"
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* The three companies, with their own logos */}
      <section
        className="border-y border-slate-200/70 bg-slate-50/60 py-16 sm:py-20"
        aria-labelledby="group-companies-title"
      >
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
              Group companies
            </p>
            <h2
              id="group-companies-title"
              className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-4xl"
            >
              Meet the sister companies
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {branches.map((branch) => (
              <GroupCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Company logos strip */}
      <section className="container-x py-14" aria-label="The three company logos">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <Logo company="group" />
          <Logo company="tech" />
          <Logo company="space" />
          <Logo company="talents" />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {branches.map((branch) => (
            <Link
              key={branch.slug}
              to={branch.path}
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:border-[#08376B]"
            >
              Visit {branch.name.replace('Brainiacs ', '')}{' '}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
