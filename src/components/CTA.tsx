import { useState, type FormEvent } from 'react'
import { ctaImages } from '../data/images'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="container-x pb-20 pt-4">
      <div className="grid overflow-hidden rounded-xl bg-[#08376B] text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#04B1C4]">
            Let’s talk
          </p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
            Have a project worth building?
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            Tell us what you are planning. You will talk with a real engineer, get a clear next step, and never sit through a hard sell.
          </p>

          {submitted ? (
            <p
              className="mt-7 max-w-md border-l-2 border-[#04B1C4] bg-white/10 px-4 py-3 text-sm leading-6 text-white"
              role="status"
            >
              Thanks — we will reply to {email} within one business day.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-7 flex w-full max-w-lg flex-col gap-2.5 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your work email"
                className="min-w-0 flex-1 rounded-md border border-white/25 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:border-[#04B1C4] focus:outline-none focus:ring-2 focus:ring-[#04B1C4]/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#04B1C4] px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get in touch <span aria-hidden="true">↗</span>
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/60">
            One business day response · NDA on request
          </p>
        </div>

        <figure className="grid min-h-[17rem] grid-cols-5 grid-rows-2 gap-2 p-2 pt-0 sm:min-h-[24rem] sm:gap-3 sm:p-3 lg:h-[24rem] lg:min-h-0 lg:self-center lg:pl-0">
          <img
            src={ctaImages.main}
            alt="A Black-led product team in a strategy meeting"
            loading="lazy"
            className="col-span-3 row-span-2 size-full min-h-0 object-cover"
          />
          <img
            src={ctaImages.laptop}
            alt="A founder working on her laptop"
            loading="lazy"
            className="col-span-2 size-full min-h-0 object-cover"
          />
          <img
            src={ctaImages.team}
            alt="Engineers workshopping product ideas at a shared table"
            loading="lazy"
            className="col-span-2 size-full min-h-0 object-cover"
          />
          <figcaption className="sr-only">
            Product teams collaborate on thoughtful software, from planning through delivery.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
