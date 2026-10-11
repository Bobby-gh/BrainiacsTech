import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import GroupCard from '../components/GroupCard'
import ScrollReveal from '../components/ScrollReveal'
import CTA from '../components/CTA'
import { branches, group } from '../data/group'

const groupStats = [
  { value: '2014', label: 'Founded in Accra — still our home' },
  { value: '3', label: 'Companies: Tech, Space & Talents' },
  { value: '60+', label: 'People across the group' },
  { value: '2', label: 'Cities — Accra & London' },
]

const principles = [
  {
    title: 'Build',
    body: 'Brainiacs Tech takes products from whiteboard to production — web, mobile, cloud, and AI, owned end to end.',
  },
  {
    title: 'Work',
    body: 'Brainiacs Space gives independents and teams a welcoming home in Accra to focus, meet, and make things.',
  },
  {
    title: 'Grow',
    body: 'Brainiacs Talents connects ambitious companies with the technology professionals who move them forward.',
  },
]

export default function GroupHome() {
  return (
    <>
      {/* Same carousel layout as /tech, with the group's own imagery */}
      <Hero
        ariaLabel="The Brainiacs Group companies at work"
        slides={[...group.heroSlides]}
      />

      {/* Group intro, directly under the hero */}
      <ScrollReveal>
        <section className="border-b border-slate-200 bg-white" aria-labelledby="group-intro-title">
          <div className="container-x py-14 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
              Brainiacs Group
            </p>
            <h2
              id="group-intro-title"
              className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#08376B] sm:text-5xl"
            >
              {group.tagline}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {group.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#companies"
                className="inline-flex items-center gap-2 rounded-md bg-[#04B1C4] px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:bg-[#0399aa]"
              >
                Meet the companies <span aria-hidden="true">→</span>
              </a>
              <Link
                to="/group"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:border-[#08376B]"
              >
                About the group <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Group stats */}
      <ScrollReveal>
        <section className="border-b border-slate-200 bg-white" aria-label="The group at a glance">
          <div className="container-x grid grid-cols-2 gap-6 py-10 sm:py-12 lg:grid-cols-4">
            {groupStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold tracking-tight text-[#08376B] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 max-w-44 text-xs leading-4 text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* The three companies */}
      <ScrollReveal>
        <section id="companies" className="scroll-mt-24" aria-labelledby="companies-title">
          <div className="container-x py-16 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
                Our companies
              </p>
              <h2
                id="companies-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-4xl"
              >
                Three companies, one standard of craft
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Each Brainiacs company runs its own team, its own site, and its own
                way of working — connected by one group and one standard.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {branches.map((branch) => (
                <GroupCard key={branch.slug} branch={branch} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Build / Work / Grow */}
      <ScrollReveal>
        <section className="bg-[#08376B] text-white" aria-labelledby="principles-title">
          <div className="container-x py-16 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
                How the group fits together
              </p>
              <h2
                id="principles-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
              >
                Build. Work. Grow.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-xl border border-white/15 bg-white/5 p-6"
                >
                  <p className="font-mono text-xs text-[#04B1C4]">
                    {principle.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </>
  )
}
