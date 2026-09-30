const pulls = [
  {
    title: 'feat: idempotent payment retries',
    author: 'd.reyes',
    state: 'Merged',
    tone: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'perf: cut p95 authorisation to 80ms',
    author: 'm.chow',
    state: 'Merged',
    tone: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'fix: webhook retry backoff',
    author: 't.herrera',
    state: 'In review',
    tone: 'text-amber-600 bg-amber-50',
  },
]

const pipeline = [
  { label: 'Build', time: '1m 12s', done: true },
  { label: 'Tests · 1,284 passing', time: '2m 48s', done: true },
  { label: 'Security scan', time: '46s', done: true },
  { label: 'Deploy → production', time: 'in progress', done: false },
]

export default function BuildMock() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
        <div className="overflow-hidden rounded-xl bg-slate-50">
          {/* window bar */}
          <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-slate-200" />
              <span className="size-2.5 rounded-full bg-slate-200" />
              <span className="size-2.5 rounded-full bg-slate-200" />
            </span>
            <p className="truncate font-mono text-xs text-slate-500">
              ledgerline / api
            </p>
            <span className="ml-auto rounded-md bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-500">
              main
            </span>
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            {/* pull requests */}
            <div className="rounded-lg border border-slate-200/80 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-900">
                  Pull requests
                </p>
                <span className="text-[11px] text-slate-400">3 open</span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {pulls.map((pull) => (
                  <li
                    key={pull.title}
                    className="flex items-center gap-3 rounded-md border border-slate-100 px-3 py-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 shrink-0 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                      <path d="M6 9v6M21 6v3a4 4 0 01-4 4H9" />
                    </svg>
                    <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-slate-600">
                      {pull.title}
                    </span>
                    <span className="hidden shrink-0 text-[11px] text-slate-400 sm:inline">
                      @{pull.author}
                    </span>
                    <span
                      className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold ${pull.tone}`}
                    >
                      {pull.state}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* pipeline */}
            <div className="rounded-lg border border-slate-200/80 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-900">
                  Pipeline · PR #482
                </p>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Passing
                </span>
              </div>
              <ul className="mt-3 space-y-2">
                {pipeline.map((step) => (
                  <li key={step.label} className="flex items-center gap-3">
                    <span
                      className={`grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white ${
                        step.done ? 'bg-emerald-500' : 'bg-indigo-500'
                      }`}
                      aria-hidden="true"
                    >
                      {step.done ? '✓' : '•'}
                    </span>
                    <span className="flex-1 truncate text-[11px] text-slate-600">
                      {step.label}
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[11px] ${
                        step.done ? 'text-slate-400' : 'text-indigo-600'
                      }`}
                    >
                      {step.time}
                    </span>
                  </li>
                ))}
              </ul>
              {!pipeline[3].done && (
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[68%] animate-pulse rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                </div>
              )}
            </div>

            <p className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="rounded bg-slate-900 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                v2.14.0
              </span>
              Deployed to production 4 minutes ago
            </p>
          </div>
        </div>
      </div>

      {/* floating velocity card */}
      <div className="absolute -top-6 right-2 hidden rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-xl shadow-slate-900/10 lg:block">
        <p className="text-[11px] font-semibold text-slate-900">
          Sprint 24 · velocity
        </p>
        <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
          34 / 36 points shipped · demo Friday
        </p>
      </div>
    </div>
  )
}
