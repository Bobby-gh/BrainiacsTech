import { Link } from 'react-router-dom'
import BuildMock from './BuildMock'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[26rem] w-[48rem] -translate-x-1/2 rounded-full bg-indigo-400/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-10rem] top-40 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative py-16 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Booking Q4 2026 · 2 engagement slots left
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl">
              We design and build software that{' '}
              <span className="gradient-text">scales</span>.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Brainiac is a software engineering company. We embed senior
              product teams to take you from whiteboard to production — web,
              mobile, cloud, and AI — and stay accountable for what ships.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-lg bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-700"
              >
                Start a project
              </Link>
              <Link
                to="/projects"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                See our work
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <dt className="sr-only">Products shipped</dt>
                <dd className="text-2xl font-semibold tracking-tight text-slate-900">
                  200+
                </dd>
                <dd className="mt-1 text-xs text-slate-500">
                  Products shipped
                </dd>
              </div>
              <div>
                <dt className="sr-only">Companies served</dt>
                <dd className="text-2xl font-semibold tracking-tight text-slate-900">
                  120+
                </dd>
                <dd className="mt-1 text-xs text-slate-500">
                  Companies served
                </dd>
              </div>
              <div>
                <dt className="sr-only">Repeat engagements</dt>
                <dd className="text-2xl font-semibold tracking-tight text-slate-900">
                  94%
                </dd>
                <dd className="mt-1 text-xs text-slate-500">
                  Repeat engagements
                </dd>
              </div>
            </dl>
          </div>

          <BuildMock />
        </div>
      </div>
    </section>
  )
}
