import { useState, type FormEvent } from 'react'
import CTA from '../components/CTA'
import PageHeader from '../components/PageHeader'

const services = [
  'Product engineering',
  'Web application',
  'Mobile app',
  'Cloud & DevOps',
  'AI & data',
  'Embedded team',
]

const budgets = [
  'Under $50k',
  '$50k – $150k',
  '$150k – $500k',
  '$500k+',
  'Not sure yet',
]

const offices = [
  { city: 'New York', detail: '115 W 30th St, Floor 6' },
  { city: 'London', detail: '22 Bishopsgate, Level 30' },
  { city: 'Singapore', detail: '8 Marina View, #28-01' },
]

const nextSteps = [
  'We reply from a real inbox within one business day.',
  'A 30-minute call with an engineer, not a salesperson.',
  'A scoped plan with a timeline and estimate within a week.',
]

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Tell us what you are building"
        description="One form, one engineer on the reply. Whether you have a full spec or a napkin sketch, we will tell you honestly what it takes."
      />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-5 lg:py-20">
        {/* form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div role="status" className="py-10 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h2 className="mt-5 text-xl font-semibold text-slate-900">
                  Thanks{name ? `, ${name.split(' ')[0]}` : ''} — message
                  received.
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                  An engineer will reply within one business day. If it is
                  urgent, call us on +1 (415) 555-0142.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-indigo-600 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Your name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Ada Lovelace"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Work email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Inc."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      What do you need? <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select a range</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Project details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What are you building, who is it for, and when does it need to ship?"
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-700 sm:w-auto"
                >
                  Send message
                </button>
                <p className="text-xs text-slate-500">
                  We only use these details to reply to your enquiry. No
                  newsletters, no lists, no spam.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* details */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Direct lines
            </h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  New projects
                </p>
                <a
                  href="mailto:hello@brainiac.dev"
                  className="font-medium text-slate-900 hover:text-indigo-600"
                >
                  hello@brainiac.dev
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Existing clients
                </p>
                <a
                  href="mailto:support@brainiac.dev"
                  className="font-medium text-slate-900 hover:text-indigo-600"
                >
                  support@brainiac.dev
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Phone
                </p>
                <a
                  href="tel:+14155550142"
                  className="font-medium text-slate-900 hover:text-indigo-600"
                >
                  +1 (415) 555-0142
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Offices
            </h2>
            <ul className="mt-4 space-y-4">
              {offices.map((office) => (
                <li key={office.city} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-indigo-500"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {office.city}
                    </p>
                    <p className="text-xs text-slate-500">{office.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
              Remote-first — we work in your timezone, wherever you are.
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6">
            <h2 className="text-base font-semibold text-slate-900">
              What happens next
            </h2>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-slate-600">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
