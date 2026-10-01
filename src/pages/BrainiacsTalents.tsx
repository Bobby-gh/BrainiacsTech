import { useState, type FormEvent } from 'react'
import PageHeader from '../components/PageHeader'

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20'

const strengths = [
  {
    number: '01',
    title: 'Technology specialists',
    description:
      'We connect companies with skilled technology professionals across engineering, product, data, and design.',
  },
  {
    number: '02',
    title: 'A human-first match',
    description:
      'We take the time to understand the role, the team, and what matters to each candidate before making an introduction.',
  },
  {
    number: '03',
    title: 'Support beyond the search',
    description:
      'From the first conversation through the offer, we keep communication clear and make the process feel personal.',
  },
]

export default function BrainiacsTalents() {
  const [inquiryType, setInquiryType] = useState<'candidate' | 'employer'>('candidate')
  const [inquirySubmitted, setInquirySubmitted] = useState(false)

  function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setInquirySubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Brainiacs Talents · Technology recruitment"
        title="The right people change everything."
        description="A specialist recruitment partner helping ambitious businesses find exceptional technology talent—and helping people find their next opportunity."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=85"
      />

      <section className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#08376B]">
            People make progress
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl">
            Recruitment with more understanding.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Brainiacs Talents brings growing teams and great people together. We
            combine a focused technology network with thoughtful, direct
            conversations to make hiring clearer for everyone.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#recruitment-form"
              className="inline-flex items-center gap-2 rounded-md bg-[#04B1C4] px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:bg-[#0399aa]"
            >
              Hire with us <span aria-hidden="true">→</span>
            </a>
            <a
              href="#recruitment-form"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:border-[#08376B]"
            >
              Explore opportunities <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {strengths.map((strength) => (
            <li key={strength.number} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6">
              <span className="font-mono text-xs text-[#04B1C4]">{strength.number}</span>
              <div>
                <h3 className="text-lg font-semibold text-[#08376B]">{strength.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{strength.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-slate-50">
        <div className="container-x grid gap-8 py-12 sm:py-14 md:grid-cols-2 md:gap-12">
          <article className="border-t-2 border-[#04B1C4] pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#08376B]">
              For employers
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">Build a team that fits.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Tell us what your team needs. We’ll help shape the search and introduce people who can make a meaningful difference.
            </p>
          </article>
          <article className="border-t-2 border-[#08376B] pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#08376B]">
              For candidates
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">Find work that moves you.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Share what you’re looking for and get a real conversation about roles that match your experience and ambitions.
            </p>
          </article>
        </div>
      </section>

      <section id="recruitment-form" className="scroll-mt-24 py-16 sm:py-20" aria-labelledby="recruitment-form-title">
        <div className="container-x grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#08376B]">
              Start a conversation
            </p>
            <h2 id="recruitment-form-title" className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl">
              Let’s find the right fit.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Whether you’re hiring or exploring your next move, share a few
              details and our recruitment team will follow up personally.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><span className="text-[#04B1C4]" aria-hidden="true">✓</span> Clear, confidential conversations</li>
              <li className="flex gap-2"><span className="text-[#04B1C4]" aria-hidden="true">✓</span> Technology roles and specialist talent</li>
              <li className="flex gap-2"><span className="text-[#04B1C4]" aria-hidden="true">✓</span> No pressure, just a useful first step</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {inquirySubmitted ? (
              <div role="status" className="py-10 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-emerald-50 text-emerald-600" aria-hidden="true">✓</span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Thanks for reaching out.</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Your recruitment inquiry is ready. The Brainiacs Talents team will be in touch to continue the conversation.
                </p>
                <button type="button" onClick={() => setInquirySubmitted(false)} className="mt-6 text-sm font-semibold text-blue-800 hover:underline">
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <fieldset>
                  <legend className="mb-2 block text-sm font-medium text-slate-700">I’m here as a</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {(['candidate', 'employer'] as const).map((type) => (
                      <label key={type} className={`flex cursor-pointer items-center gap-2 rounded-md border px-4 py-3 text-sm font-medium capitalize transition ${inquiryType === type ? 'border-[#08376B] bg-blue-50 text-[#08376B]' : 'border-slate-300 text-slate-600 hover:border-slate-400'}`}>
                        <input type="radio" name="inquiryType" value={type} checked={inquiryType === type} onChange={() => setInquiryType(type)} className="accent-[#08376B]" />
                        {type}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="talents-name" className="mb-1.5 block text-sm font-medium text-slate-700">Your name <span className="text-rose-500">*</span></label>
                    <input id="talents-name" name="name" type="text" autoComplete="name" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="talents-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email <span className="text-rose-500">*</span></label>
                    <input id="talents-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>

                {inquiryType === 'employer' ? (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="talents-company" className="mb-1.5 block text-sm font-medium text-slate-700">Company <span className="text-rose-500">*</span></label>
                      <input id="talents-company" name="company" type="text" required placeholder="Company name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="talents-role" className="mb-1.5 block text-sm font-medium text-slate-700">Role(s) to fill</label>
                      <input id="talents-role" name="role" type="text" placeholder="e.g. Product designer" className={inputClass} />
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="talents-specialty" className="mb-1.5 block text-sm font-medium text-slate-700">Area of expertise</label>
                      <select id="talents-specialty" name="specialty" defaultValue="" className={inputClass}>
                        <option value="" disabled>Select an area</option>
                        <option>Engineering</option>
                        <option>Product</option>
                        <option>Data & AI</option>
                        <option>Design</option>
                        <option>Other technology role</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="talents-profile" className="mb-1.5 block text-sm font-medium text-slate-700">LinkedIn or portfolio URL</label>
                      <input id="talents-profile" name="profileUrl" type="url" placeholder="https://…" className={inputClass} />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="talents-message" className="mb-1.5 block text-sm font-medium text-slate-700">{inquiryType === 'employer' ? 'Tell us about your hiring needs' : 'What are you looking for?'}</label>
                  <textarea id="talents-message" name="message" rows={4} placeholder={inquiryType === 'employer' ? 'Share the skills, experience, and timing you have in mind…' : 'Share a little about your experience and next step…'} className={inputClass} />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#08376B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#062b54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04B1C4] sm:w-auto">
                  Send recruitment inquiry <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
