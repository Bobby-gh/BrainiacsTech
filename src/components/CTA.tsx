import { useState, type FormEvent } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="container-x pb-24 pt-4">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 shadow-2xl shadow-slate-900/20 sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-fuchsia-500/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have a project worth building?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Tell us what you are planning. You will get a real engineer on the
            call, a scoped plan within a week, and no hard sell.
          </p>

          {submitted ? (
            <p
              className="mx-auto mt-8 max-w-md rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm font-medium text-emerald-300"
              role="status"
            >
              Thanks — we will reply from a real inbox within one business
              day, using {email}.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
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
                placeholder="you@company.com"
                className="w-full flex-1 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Get started
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-slate-500">
            Reply within one business day · NDA on request · Fixed-price or
            dedicated team
          </p>
        </div>
      </div>
    </section>
  )
}
