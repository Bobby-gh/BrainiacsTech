import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import CTA from '../components/CTA'
import GroupCard from '../components/GroupCard'
import ScrollReveal from '../components/ScrollReveal'
import Logo from '../components/Logo'
import { branches, group } from '../data/group'

const unsplash = (photo: string, width = 1400) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`

// Fresh imagery for the group page — none of these photo IDs are used elsewhere
// on the site (verified against src/data/images.ts and src/data/services.ts).
const groupImages = {
  aboutMain: unsplash('photo-1522071820081-009f0129c71c', 1200), // team gathered around laptops
  aboutSecondary: unsplash('photo-1542744173-8e7e53415bb0', 900), // presentation at a screen
  whatWeDo: [
    unsplash('photo-1498050108023-c5249f4df085', 900), // code on a laptop screen
    unsplash('photo-1524758631624-e2822e304c36', 900), // bright meeting room table
    unsplash('photo-1600880292203-757bb62b4baf', 900), // professionals in conversation (WOCinTech)
  ],
}

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

      {/* About us */}
      <ScrollReveal>
        <section className="container-x grid items-start gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#04B1C4]">
              About us
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Built in Accra, run as a family of specialists
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              {group.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-[#04B1C4] pl-4 text-sm leading-6 text-slate-600">
              {group.offices}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-5">
            <div className="overflow-hidden rounded-xl shadow-lg shadow-[#08376B]/10 sm:col-span-3">
              <img
                src={groupImages.aboutMain}
                alt="The Brainiacs team gathered around laptops in a working session"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg shadow-[#08376B]/10 sm:col-span-2 sm:mt-8">
              <img
                src={groupImages.aboutSecondary}
                alt="A team member presenting to colleagues in front of a screen"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What we do */}
      <ScrollReveal>
        <section
          className="border-y border-slate-200/70 bg-slate-50/60 py-16 sm:py-20"
          aria-labelledby="what-we-do-title"
        >
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
                What we do
              </p>
              <h2
                id="what-we-do-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-4xl"
              >
                Three companies, one connected ecosystem
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Whichever door you come through, you are working with people who
                take the work personally.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {group.whatWeDo.map((item, index) => (
                <article
                  key={item.title}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#08376B]/10"
                >
                  <div className="overflow-hidden bg-slate-100">
                    <img
                      src={groupImages.whatWeDo[index]}
                      alt={
                        item.title === 'Build software'
                          ? 'Code on a laptop screen during a build session'
                          : item.title === 'Host the work'
                            ? 'A bright meeting room with a shared work table'
                            : 'Professionals meeting across a table'
                      }
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs text-[#04B1C4]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#08376B]">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Objectives */}
      <ScrollReveal>
        <section
          className="bg-[#08376B] py-16 text-white sm:py-20"
          aria-labelledby="objectives-title"
        >
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
                Our objectives
              </p>
              <h2
                id="objectives-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
              >
                What the group is working towards
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {group.objectives.map((objective, index) => (
                <div
                  key={objective.title}
                  className="rounded-xl border border-white/15 bg-white/5 p-6"
                >
                  <span
                    className="grid size-9 place-items-center rounded-md bg-[#04B1C4] text-sm font-bold text-[#08376B]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{objective.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {objective.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* The journey — numbered steps */}
      <ScrollReveal>
        <section className="container-x py-16 sm:py-20" aria-labelledby="journey-title">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
              Our story
            </p>
            <h2
              id="journey-title"
              className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-4xl"
            >
              How we got here, step by step
            </h2>
          </div>

          <ol className="mx-auto mt-14 max-w-2xl">
            {timeline.map((step, index) => (
              <li key={step.year} className="relative grid grid-cols-[3.5rem_1fr] gap-5 pb-10 last:pb-0 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                {index < timeline.length - 1 && (
                  <span
                    className="absolute left-[1.6rem] top-8 h-full w-px bg-slate-200 sm:left-[2.1rem]"
                    aria-hidden="true"
                  />
                )}
                <div className="relative">
                  <span
                    className="absolute -left-4 top-0 grid size-9 place-items-center rounded-full bg-[#08376B] text-xs font-bold text-white ring-4 ring-[#f4f7fb] sm:-left-5"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="pt-1">
                  <span className="font-mono text-xs font-semibold text-blue-700">
                    {step.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </ScrollReveal>

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
