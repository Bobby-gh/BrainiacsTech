const stats = [
  { value: '200+', label: 'Products shipped since 2014' },
  { value: '120+', label: 'Companies served' },
  { value: '94%', label: 'Clients who work with us again' },
  { value: '60', label: 'Engineers across 9 countries' },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.28),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-20">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
