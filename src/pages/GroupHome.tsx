import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import GroupCard from '../components/GroupCard'
import ScrollReveal from '../components/ScrollReveal'
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
        <section className="border-y border-slate-200 bg-[#f8fafc] py-14 sm:py-16" aria-labelledby="group-clients-title">
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
                  <li key={company.name} className="flex min-h-20 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-900/[0.02]">
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
