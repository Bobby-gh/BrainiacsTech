import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import GroupCard from '../components/GroupCard'
import ScrollReveal from '../components/ScrollReveal'
import Logo from '../components/Logo'
import { branches, group } from '../data/group'
import { companies } from '../data/companies'
import { sectionImages } from '../data/images'

const groupHomeImages = {
  team: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85',
  collaboration: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85',
}

const interestOptions = [
  'Software and product engineering',
  'Coworking and workspace',
  'Technology recruitment',
  'Group partnership',
]

const groupStats = [
  { value: '2014', label: 'Founded in Accra — still our home' },
  { value: '3', label: 'Companies: Tech, Space & Talents' },
  { value: '60+', label: 'People across the group' },
  { value: '2', label: 'Cities — Accra & London' },
]

const principles = [
  {
    title: 'Build',
    logoKey: 'tech' as const,
    to: '/tech',
    body: 'Brainiacs Tech takes products from whiteboard to production — web, mobile, cloud, and AI, owned end to end.',
  },
  {
    title: 'Work',
    logoKey: 'space' as const,
    to: '/space',
    body: 'Brainiacs Space gives independents and teams a welcoming home in Accra to focus, meet, and make things.',
  },
  {
    title: 'Grow',
    logoKey: 'talents' as const,
    to: '/talents',
    body: 'Brainiacs Talents connects ambitious companies with the technology professionals who move them forward.',
  },
]

export default function GroupHome() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Same carousel layout as /tech, with the group's own imagery */}
      <Hero
        ariaLabel="The Brainiacs Group companies at work"
        slides={[...group.heroSlides]}
      />

      {/* Section beneath the hero: group intro + at-a-glance card */}
      <ScrollReveal>
        <section
          className="relative overflow-hidden border-b border-slate-200 bg-white"
          aria-labelledby="group-intro-title"
        >
          {/* brand accent stripe along the top edge */}
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#08376B] via-[#04B1C4] to-[#08376B]"
            aria-hidden="true"
          />
          {/* soft decorative glow */}
          <div
            className="absolute -right-24 -top-24 size-72 rounded-full bg-[#04B1C4]/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* left: identity + headline */}
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-1.5 pr-4">
                <Logo company="group" marksOnly />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#08376B]">
                  Brainiacs Group · Est. {group.founded.slice(0, 4)}
                </span>
              </span>

              <h2
                id="group-intro-title"
                className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#08376B] sm:text-5xl lg:text-[3.4rem]"
              >
                One group. Three ways to{' '}
                <span className="bg-gradient-to-r from-[#04B1C4] to-[#08376B] bg-clip-text text-transparent">
                  build, work, and grow.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {group.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#companies"
                  className="inline-flex items-center gap-2 rounded-md bg-[#04B1C4] px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:bg-[#0399aa]"
                >
                  Meet the companies <span aria-hidden="true">→</span>
                </a>
                <Link
                  to="/group"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:border-[#08376B]"
                >
                  About the group <span aria-hidden="true">↗</span>
                </Link>
              </div>

              {/* branch quick-links with their logos */}
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {branches.map((branch) => (
                  <li key={branch.slug}>
                    <Link
                      to={branch.path}
                      className="group inline-flex items-center gap-2.5 text-sm font-semibold text-[#08376B] transition hover:text-[#04B1C4]"
                    >
                      <Logo company={branch.logoKey} marksOnly />
                      {branch.name.replace('Brainiacs ', '')}
                      <span
                        className="text-[#04B1C4] transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* right: at-a-glance navy card */}
            <aside
              className="relative overflow-hidden rounded-2xl bg-[#08376B] p-6 text-white shadow-2xl shadow-[#08376B]/25 sm:p-8"
              aria-label="The group at a glance"
            >
              <div
                className="absolute -right-16 -top-16 size-52 rounded-full bg-[#04B1C4]/25 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-20 -left-14 size-56 rounded-full bg-white/5 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#04B1C4]">
                  The group at a glance
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                  {groupStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        {stat.value}
                      </dd>
                      <p className="mt-1.5 text-xs leading-4 text-blue-100/70">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 border-t border-white/15 pt-5">
                  <p className="text-xs font-medium text-blue-100/70">
                    One standard of craft across every company
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {branches.map((branch) => (
                      <Link
                        key={branch.slug}
                        to={branch.path}
                        className="rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold text-white transition hover:border-[#04B1C4] hover:bg-[#04B1C4] hover:text-[#08376B]"
                      >
                        {branch.name.replace('Brainiacs ', '')}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </ScrollReveal>

      {/* The three companies */}
      <ScrollReveal>
        <section
          id="companies"
          className="scroll-mt-24 bg-[#f6f8fb]"
          aria-labelledby="companies-title"
        >
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
              <div
                className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#04B1C4] to-[#08376B]"
                aria-hidden="true"
              />
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
        <section className="relative overflow-hidden bg-[#08376B] text-white" aria-labelledby="principles-title">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(4,177,196,0.18),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="container-x relative py-16 sm:py-20">
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
              {principles.map((principle, index) => (
                <Link
                  key={principle.title}
                  to={principle.to}
                  className="group rounded-xl border border-white/15 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#04B1C4]/60 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <Logo company={principle.logoKey} marksOnly />
                    <span className="font-mono text-xs text-[#04B1C4]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-5 text-xl font-semibold tracking-tight">
                    {principle.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {principle.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#04B1C4] transition group-hover:gap-3">
                    Visit {principle.title === 'Build' ? 'Tech' : principle.title === 'Work' ? 'Space' : 'Talents'}{' '}
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* About the people and purpose behind the group */}
      <ScrollReveal>
        <section className="overflow-hidden bg-[#f3f6f9] py-16 sm:py-20" aria-labelledby="group-about-title">
          <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
                About us
              </p>
              <h2 id="group-about-title" className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#08376B] sm:text-4xl">
                Good work starts with good people.
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                {group.about.slice(0, 2).map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <Link
                to="/group"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#08376B] transition hover:gap-3 hover:text-[#04B1C4]"
              >
                More about Brainiacs Group <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="relative mx-auto grid w-full max-w-xl grid-cols-[1.15fr_0.85fr] items-end gap-3 sm:gap-4">
              <img
                src={groupHomeImages.team}
                alt="Colleagues sharing ideas around a table"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-xl object-cover shadow-xl shadow-[#08376B]/10"
              />
              <div className="space-y-3 pb-8 sm:space-y-4 sm:pb-10">
                <img
                  src={sectionImages.studioCollab}
                  alt="A product team reviewing ideas together"
                  loading="lazy"
                  className="aspect-square w-full rounded-xl object-cover shadow-lg shadow-[#08376B]/10"
                />
                <img
                  src={groupHomeImages.collaboration}
                  alt="A team collaborating in a bright meeting space"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg shadow-[#08376B]/10"
                />
              </div>
              <div className="absolute bottom-0 left-2 rounded-lg bg-white px-4 py-3 shadow-lg sm:left-4 sm:px-5 sm:py-4">
                <p className="text-xl font-semibold tracking-tight text-[#08376B]">Since 2014</p>
                <p className="mt-0.5 text-xs text-slate-500">Rooted in Accra, working everywhere</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* The group objectives, expressed as commitments */}
      <ScrollReveal>
        <section className="bg-white py-16 sm:py-20" aria-labelledby="group-objectives-title">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
                Our objectives
              </p>
              <h2 id="group-objectives-title" className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#08376B] sm:text-4xl">
                A clear purpose behind every company.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                These commitments shape how we build products, welcome our community, and help people find work where they can thrive.
              </p>
              <img
                src={sectionImages.officeMeeting}
                alt="Colleagues working through a plan together"
                loading="lazy"
                className="mt-7 hidden aspect-[16/10] w-full rounded-xl object-cover shadow-lg shadow-[#08376B]/10 sm:block"
              />
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {group.objectives.map((objective, index) => (
                <article key={objective.title} className="grid gap-3 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-7">
                  <span className="font-mono text-sm font-semibold text-[#04B1C4]" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#08376B] sm:text-xl">{objective.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{objective.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Selected client teams */}
      <ScrollReveal>
        <section className="border-y border-slate-200 bg-[#08376B] py-14 sm:py-16" aria-labelledby="group-clients-title">
          <div className="container-x">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">People we’ve worked with</p>
                <h2 id="group-clients-title" className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#08376B] sm:text-3xl">
                  Trusted by teams solving real problems.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                  A few of the teams Brainiacs Tech has partnered with across fintech, healthcare, retail, logistics, and more.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Selected Brainiacs Tech clients">
                {companies.slice(0, 6).map((company) => (
                  <li key={company.name} className="flex min-h-20 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-900/[0.02] transition hover:-translate-y-0.5 hover:border-[#04B1C4]/40 hover:shadow-md">
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-[#08376B]/5 text-[11px] font-bold tracking-wide text-[#08376B]" aria-hidden="true">
                      {company.monogram}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-800">{company.name}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{company.industry}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Group-wide contact form */}
      <ScrollReveal>
        <section id="contact" className="scroll-mt-24 bg-white py-16 sm:py-20" aria-labelledby="group-contact-title">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">Contact us</p>
              <h2 id="group-contact-title" className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#08376B] sm:text-4xl">
                Let’s find the right Brainiacs team for you.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                Tell us a little about what you need. Whether it’s software, a place to work, or your next great hire, we’ll make sure your note reaches the right people.
              </p>
              <div className="mt-7 overflow-hidden rounded-xl bg-[#08376B]">
                <img
                  src={sectionImages.officeMain}
                  alt="The team working together in a bright studio"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <a href="mailto:hello@brainiac.dev" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#08376B] hover:text-[#04B1C4]">
                hello@brainiac.dev <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 shadow-sm sm:p-8">
              {submitted ? (
                <div role="status" className="flex min-h-80 flex-col justify-center">
                  <span className="grid size-11 place-items-center rounded-full bg-[#04B1C4]/15 text-lg font-bold text-[#08376B]" aria-hidden="true">✓</span>
                  <h3 className="mt-5 text-xl font-semibold text-[#08376B]">Thanks{name ? `, ${name.split(' ')[0]}` : ''}.</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Your enquiry is ready for our team. We’ll be in touch soon; you can also reach us directly at hello@brainiac.dev.
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-5 w-fit text-sm font-semibold text-[#08376B] underline decoration-[#04B1C4] underline-offset-4">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="group-contact-name" className="mb-1.5 block text-sm font-medium text-slate-700">Your name</label>
                      <input id="group-contact-name" name="name" type="text" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#04B1C4] focus:outline-none focus:ring-2 focus:ring-[#04B1C4]/20" />
                    </div>
                    <div>
                      <label htmlFor="group-contact-email" className="mb-1.5 block text-sm font-medium text-slate-700">Work email</label>
                      <input id="group-contact-email" name="email" type="email" required placeholder="you@company.com" className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#04B1C4] focus:outline-none focus:ring-2 focus:ring-[#04B1C4]/20" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="group-contact-interest" className="mb-1.5 block text-sm font-medium text-slate-700">What can we help with?</label>
                    <select id="group-contact-interest" name="interest" required defaultValue="" className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-700 focus:border-[#04B1C4] focus:outline-none focus:ring-2 focus:ring-[#04B1C4]/20">
                      <option value="" disabled>Select a team or service</option>
                      {interestOptions.map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="group-contact-message" className="mb-1.5 block text-sm font-medium text-slate-700">A little about your enquiry</label>
                    <textarea id="group-contact-message" name="message" required rows={5} placeholder="What are you hoping to make happen?" className="w-full resize-y rounded-md border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#04B1C4] focus:outline-none focus:ring-2 focus:ring-[#04B1C4]/20" />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#08376B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b4b8d] sm:w-auto">
                    Send an enquiry <span aria-hidden="true">→</span>
                  </button>
                  <p className="text-xs leading-5 text-slate-500">Your details will only be used to respond to your enquiry.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
