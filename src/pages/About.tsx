import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import PageHeader from '../components/PageHeader'
import Stats from '../components/Stats'
import { milestones, team, values } from '../data/company'

const facts = [
  { label: 'Founded', value: '2014 · New York' },
  { label: 'Team', value: '60 engineers & designers' },
  { label: 'Model', value: 'Remote-first, 3 hubs' },
  { label: 'Engagements', value: 'Fixed-price or dedicated team' },
]

const certifications = [
  'SOC 2 Type II',
  'ISO 27001',
  'AWS Partner Network',
  'Google Cloud Partner',
  'Microsoft Solutions Partner',
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Engineers who own the outcome"
        description="Brainiac started in 2014 with one rule: no body shops, only product teams. Twelve years later, that rule is still how we hire, price, and deliver."
      />

      {/* story */}
      <section className="container-x grid gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Built by people who were tired of watching good products stall
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              Our founder spent a decade watching capable teams get buried under
              vendor handoffs, inflated estimates, and code nobody wanted to
              maintain. Brainiac was founded to be the opposite: one team,
              accountable from the first workshop to the production deploy.
            </p>
            <p>
              Today we are 60 engineers, designers, and delivery leads working
              across nine countries. We take on a handful of engagements at a
              time so every client gets senior attention — which is why 94% of
              our clients come back for the next project.
            </p>
            <p>
              We do not sell headcount. We sell working software, honest
              estimates, and a team that answers the phone when something breaks
              at 2am.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {certifications.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-6 text-white sm:col-span-2">
            <p className="text-sm font-medium text-indigo-100">Since 2014</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              200+ products shipped, 120+ companies, one standard of craft.
            </p>
            <Link
              to="/projects"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              See the case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="border-y border-slate-200/70 bg-slate-50/60">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              What we believe
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Four values we actually hire against
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={value.icon} />
                  </svg>
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Our story
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Twelve years, one direction
          </h2>
        </div>

        <ol className="mx-auto mt-12 max-w-2xl">
          {milestones.map((item) => (
            <li
              key={item.year}
              className="relative grid grid-cols-[4.5rem_1fr] gap-6 pb-8 last:pb-0"
            >
              <span
                className="absolute left-[3.6rem] top-6 h-full w-px bg-slate-200"
                aria-hidden="true"
              />
              <div className="text-right">
                <span className="font-mono text-sm font-semibold text-indigo-600">
                  {item.year}
                </span>
              </div>
              <div className="relative">
                <span
                  className="absolute -left-[1.95rem] top-1.5 size-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-100"
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

      {/* team */}
      <section className="border-t border-slate-200/70 bg-slate-50/60">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              The people who will be on your call
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              No account managers between you and the team doing the work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br text-sm font-semibold text-white ${member.gradient}`}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-indigo-600">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </>
  )
}
