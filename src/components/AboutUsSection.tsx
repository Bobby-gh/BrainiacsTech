import { Link } from 'react-router-dom'

const facts = [
  { value: '2014', label: 'Founded in Accra' },
  { value: '60', label: 'Engineers and designers' },
  { value: '9', label: 'Countries represented' },
]

export default function AboutUsSection() {
  return (
    <section className="overflow-hidden bg-[#f3f4f6] py-16 sm:py-20" aria-labelledby="about-us-title">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#08376B]">
              About Brainiacs Tech
            </p>
            <h2 id="about-us-title" className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#08376B] sm:text-5xl">
              Good people. Clear thinking. Software that lasts.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              We bring product thinkers, designers, and engineers together as one accountable team. From the first conversation to launch and beyond, we turn complex challenges into useful software your people can confidently own.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#08376B] transition hover:gap-3 hover:text-[#04B1C4]">
                Meet Brainiacs Tech <span aria-hidden="true">→</span>
              </Link>
              <Link to="/projects" className="text-sm font-semibold text-slate-600 transition hover:text-[#08376B]">
                Explore our work
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 border-t border-[#08376B]/20 pt-6 sm:mt-12 sm:pt-8">
              {facts.map((fact, index) => (
                <div key={fact.label} className={`pr-2 sm:pr-5 ${index > 0 ? 'border-l border-[#08376B]/20 pl-3 sm:pl-6' : ''}`}>
                  <dt className="text-2xl font-semibold tracking-tight text-[#08376B] sm:text-4xl">{fact.value}</dt>
                  <dd className="mt-1 max-w-32 text-[11px] leading-4 text-slate-600 sm:mt-2 sm:text-sm">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
            <div className="overflow-hidden rounded-xl bg-[#08376B] shadow-xl shadow-[#08376B]/15">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="The Brainiacs team working together around a table"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="relative mx-4 -mt-8 rounded-lg bg-white p-5 shadow-lg sm:absolute sm:-bottom-6 sm:-left-8 sm:mx-0 sm:mt-0 sm:max-w-xs sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#04B1C4]">
                One team, start to scale
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Senior attention, open communication, and an outcome you can own—not another handoff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
