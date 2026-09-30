const testimonials = [
  {
    quote:
      'We replaced three tools with Brainiac. Our PMs finally answer their own questions, and standup is about decisions instead of dashboard archaeology.',
    name: 'Priya Raman',
    role: 'VP Product, Northwind',
    initials: 'PR',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    quote:
      'Setup took an afternoon. By the end of the week we had funnel and retention views the whole company was using — no tickets to the data team.',
    name: 'Marcus Lee',
    role: 'Head of Growth, Vertex',
    initials: 'ML',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    quote:
      'The anomaly alerts caught a checkout regression at 2am. We shipped the fix before it ever reached our EU customers. That paid for the year.',
    name: 'Sofia Álvarez',
    role: 'CTO, Cobalt',
    initials: 'SA',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-slate-200/70 bg-slate-50/60">
      <div className="container-x py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Customers
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Teams that keep coming back
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From ten-person startups to public companies — here is what happens
            after the first engagement ends.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-slate-700">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-xs font-semibold text-white ${item.gradient}`}
                  aria-hidden="true"
                >
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    {item.name}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
