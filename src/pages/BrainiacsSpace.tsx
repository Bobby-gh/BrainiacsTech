import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20'

const offerings = [
  {
    number: '01',
    title: 'Flexible coworking',
    description:
      'A comfortable, considered workspace for focused days, fresh ideas, and the people you meet along the way.',
  },
  {
    number: '02',
    title: 'Room for your team',
    description:
      'Bring your team together in a shared home designed to make collaboration feel natural and productive.',
  },
  {
    number: '03',
    title: 'Gather and connect',
    description:
      'Host a meeting, share a working session, or simply get out of your usual routine and meet the community.',
  },
]

export default function BrainiacsSpace() {
  const [bookingType, setBookingType] = useState<'individual' | 'company'>('individual')
  const [bookingSubmitted, setBookingSubmitted] = useState(false)

  function handleBookingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBookingSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Brainiacs Space · Coworking"
        title="A better place to do your best work."
        description="A welcoming coworking space in Tesano, Accra — home to independent professionals, growing teams, and curious minds who do their best work together."
        image="https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?auto=format&fit=crop&w=2200&q=85"
      />

      <section className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#08376B]">
            Make space for what’s next
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl">
            Work well. Feel at home.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Brainiacs Space brings people and ideas together in a workspace built
            around the way modern teams work: with room to focus, collaborate,
            and find a little inspiration in the everyday.
          </p>
          <a
            href="#booking"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#04B1C4] px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:bg-[#0399aa]"
          >
            Book a visit <span aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {offerings.map((offering) => (
            <li key={offering.number} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-6">
              <span className="font-mono text-xs text-[#04B1C4]">{offering.number}</span>
              <div>
                <h3 className="text-lg font-semibold text-[#08376B]">{offering.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{offering.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="booking" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20" aria-labelledby="booking-title">
        <div className="container-x grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#08376B]">
              Come see the space
            </p>
            <h2 id="booking-title" className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl">
              Book a visit or ask about membership.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Tell us a little about what you need. Whether you’re looking for a
              desk for yourself or a home for your team, we’ll help find the
              right fit.
            </p>
            <p className="mt-6 border-l-2 border-[#04B1C4] pl-4 text-sm leading-6 text-slate-600">
              Share your preferred date and we’ll follow up to confirm a time.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {bookingSubmitted ? (
              <div role="status" className="py-10 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-emerald-50 text-emerald-600" aria-hidden="true">✓</span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Thanks for your interest.</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Your booking request is ready. Our Brainiacs Space team will be in touch to confirm the details.
                </p>
                <button type="button" onClick={() => setBookingSubmitted(false)} className="mt-6 text-sm font-semibold text-blue-800 hover:underline">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <fieldset>
                  <legend className="mb-2 block text-sm font-medium text-slate-700">I’m booking as</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {(['individual', 'company'] as const).map((type) => (
                      <label key={type} className={`flex cursor-pointer items-center gap-2 rounded-md border px-4 py-3 text-sm font-medium capitalize transition ${bookingType === type ? 'border-[#08376B] bg-blue-50 text-[#08376B]' : 'border-slate-300 text-slate-600 hover:border-slate-400'}`}>
                        <input type="radio" name="bookingType" value={type} checked={bookingType === type} onChange={() => setBookingType(type)} className="accent-[#08376B]" />
                        {type}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="space-name" className="mb-1.5 block text-sm font-medium text-slate-700">Your name <span className="text-rose-500">*</span></label>
                    <input id="space-name" name="name" type="text" autoComplete="name" required placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="space-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email <span className="text-rose-500">*</span></label>
                    <input id="space-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>

                {bookingType === 'company' && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="space-company" className="mb-1.5 block text-sm font-medium text-slate-700">Company name <span className="text-rose-500">*</span></label>
                      <input id="space-company" name="company" type="text" required placeholder="Company name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="space-team-size" className="mb-1.5 block text-sm font-medium text-slate-700">Team size</label>
                      <select id="space-team-size" name="teamSize" defaultValue="" className={inputClass}>
                        <option value="" disabled>Select team size</option>
                        <option>2–5 people</option>
                        <option>6–10 people</option>
                        <option>11–25 people</option>
                        <option>26+ people</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="space-visit-date" className="mb-1.5 block text-sm font-medium text-slate-700">Preferred visit date</label>
                    <input id="space-visit-date" name="visitDate" type="date" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="space-membership" className="mb-1.5 block text-sm font-medium text-slate-700">What are you looking for?</label>
                    <select id="space-membership" name="membership" defaultValue="" className={inputClass}>
                      <option value="" disabled>Select an option</option>
                      <option>Day pass</option>
                      <option>Regular desk</option>
                      <option>Team workspace</option>
                      <option>Meeting room</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="space-notes" className="mb-1.5 block text-sm font-medium text-slate-700">Anything else we should know?</label>
                  <textarea id="space-notes" name="notes" rows={3} placeholder="Tell us about your workspace needs…" className={inputClass} />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#08376B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#062b54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04B1C4] sm:w-auto">
                  Request a booking <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#08376B] text-white">
        <div className="container-x grid items-center gap-8 py-12 sm:py-14 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#04B1C4]">
              Your next workday starts here
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Find your space with Brainiacs.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#04B1C4] hover:bg-[#04B1C4] hover:text-[#08376B]"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  )
}
