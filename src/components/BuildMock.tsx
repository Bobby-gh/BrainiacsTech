import { Link } from 'react-router-dom'

const volume = [28, 36, 30, 45, 38, 54, 47, 62, 56, 72, 63, 80, 70, 88, 76, 96, 83, 100, 89, 108, 95, 119, 103, 128]

export default function BuildMock() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-950/10">
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
          <span className="grid size-8 place-items-center rounded-md bg-[#08376B] text-xs font-bold text-white" aria-hidden="true">
            L
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">Ledgerline</p>
            <p className="text-xs text-slate-500">Payments platform</p>
          </div>
          <span className="ml-auto rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-500">
            Case study
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-slate-500">Platform at a glance</p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Built for payment traffic at scale</p>
            </div>
            <Link to="/projects/ledgerline-payments-platform" className="text-xs font-semibold text-[#08376B] transition hover:text-[#04B1C4]">
              Read the case study <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-4">
            <div className="pr-3">
              <p className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">12M</p>
              <p className="mt-1 text-[11px] leading-4 text-slate-500">transactions / day</p>
            </div>
            <div className="px-3">
              <p className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">80<span className="text-sm">ms</span></p>
              <p className="mt-1 text-[11px] leading-4 text-slate-500">p95 authorisation</p>
            </div>
            <div className="pl-3">
              <p className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">99.99%</p>
              <p className="mt-1 text-[11px] leading-4 text-slate-500">platform uptime</p>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold text-slate-700">Daily transaction volume</p>
              <p className="text-[11px] text-slate-500">Illustrative profile</p>
            </div>
            <div className="mt-4 flex h-28 items-end gap-1" role="img" aria-label="Illustrative bar chart showing transaction volume rising through the day">
              {volume.map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="min-w-0 flex-1 rounded-t-[2px] bg-[#04B1C4]"
                  style={{ height: `${height / 1.35}%`, opacity: 0.32 + (index / volume.length) * 0.6 }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-slate-400">
              <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
            </div>
          </div>

          <p className="mt-4 text-[11px] leading-5 text-slate-500">
            Outcomes from a production platform rebuild for Ledgerline.
          </p>
        </div>
      </div>
    </div>
  )
}
