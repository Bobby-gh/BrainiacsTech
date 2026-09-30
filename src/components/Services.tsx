const services = [
  {
    title: 'Product engineering',
    body: 'Discovery, architecture, and delivery in one team. We scope honestly, ship in two-week increments, and own the outcome end to end.',
    icon: (
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Web applications',
    body: 'React and Next.js platforms built for speed — design systems, dashboards, and customer-facing products that stay fast under load.',
    icon: (
      <path
        d="M8 6l-6 6 6 6M16 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Mobile apps',
    body: 'React Native and native iOS/Android delivery, from offline-first field apps to consumer products with weekly store releases.',
    icon: (
      <path
        d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM12 18h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Cloud & DevOps',
    body: 'AWS, GCP, and Azure infrastructure as code, CI/CD pipelines, and SRE practices that turn deploys into a non-event.',
    icon: (
      <path
        d="M18 10a5 5 0 00-9.6-1.4A4 4 0 106.5 18H18a4 4 0 000-8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'AI & data',
    body: 'Retrieval pipelines, evaluation harnesses, and agent workflows that survive production — plus the data plumbing underneath.',
    icon: (
      <path
        d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM18.5 15.5l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Embedded teams',
    body: 'Senior squads that plug into your org, follow your rituals, and hand over clean documentation when the engagement ends.',
    icon: (
      <path
        d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9.5 7a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM22 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="container-x py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          What we do
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Full-stack engineering, one accountable team
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Strategy, design, and delivery under one roof — so nothing gets lost
          between the pitch deck and production.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <span className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 transition group-hover:from-indigo-500 group-hover:to-violet-500 group-hover:text-white">
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                {service.icon}
              </svg>
            </span>
            <h3 className="mt-5 text-base font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {service.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
