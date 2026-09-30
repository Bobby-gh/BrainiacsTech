import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative py-28 text-center sm:py-36">
        <p className="font-mono text-sm font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          This page is not in the repo
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-600">
          The link you followed either moved or never existed. Everything worth
          reading is one click away.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Back to home
          </Link>
          <Link
            to="/projects"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Browse projects
          </Link>
        </div>
      </div>
    </section>
  )
}
