const companies = [
  'Ledgerline',
  'Cobalt Health',
  'Orbit Retail',
  'Kite Logistics',
  'Vertex AI',
  'Lumen Energy',
]

export default function LogoCloud() {
  return (
    <section className="border-y border-slate-200/70 bg-slate-50/60">
      <div className="container-x py-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-400">
          Trusted by product teams at 120+ companies
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((company) => (
            <li
              key={company}
              className="text-sm font-semibold tracking-tight text-slate-400 transition hover:text-slate-600 sm:text-base"
            >
              {company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
