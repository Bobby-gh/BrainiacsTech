const steps = [
  {
    number: '01',
    title: 'Discover',
    timeline: '1–2 weeks',
    body: 'We audit the codebase, interview stakeholders, and turn the idea into a scoped plan with estimates you can hold us to.',
  },
  {
    number: '02',
    title: 'Design',
    timeline: '2–4 weeks',
    body: 'Architecture, data model, and clickable prototypes validated with real users — before a line of production code is written.',
  },
  {
    number: '03',
    title: 'Build',
    timeline: '2-week sprints',
    body: 'A senior squad ships to staging every week, demos every Friday, and keeps the backlog honest about what is next.',
  },
  {
    number: '04',
    title: 'Scale',
    timeline: 'Ongoing',
    body: 'Observability, SRE, and documentation — plus knowledge transfer so your team can own it without us.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-y border-slate-200/70 bg-slate-50/60">
      <div className="container-x py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A process built to remove surprises
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Four phases, weekly demos, and one point of contact from kickoff to
            handover.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-indigo-600">
                  {step.number}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                  {step.timeline}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
              {index < steps.length - 1 && (
                <span
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-slate-300 lg:block"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
