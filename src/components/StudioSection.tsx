import { Link } from 'react-router-dom'

const principles = [
  {
    number: '01',
    title: 'The people you meet do the work',
    description: 'Speak directly with the engineers and designers building your product.',
  },
  {
    number: '02',
    title: 'Progress you can see',
    description: 'Review working software regularly and make decisions with us.',
  },
  {
    number: '03',
    title: 'Knowledge stays with your team',
    description: 'We share context, document decisions, and make handover part of delivery.',
  },
]

export default function StudioSection() {
  return (
    <section className="bg-white py-16 sm:py-16">
      <div className="container-x">
        <div className="grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <figure className="image-card m-0">
            <div className="overflow-hidden rounded-md bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                alt="Product designers and engineers collaborating around a table"
                loading="lazy"
                className="studio-photo aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <span className="size-1.5 rounded-full bg-[#04B1C4]" aria-hidden="true" />
              Product, design, and engineering—together.
            </figcaption>
          </figure>

          <div className="py-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#08376B]/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08376B]">
              <span className="size-1.5 rounded-full bg-[#04B1C4]" aria-hidden="true" />
              Built alongside your team
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#08376B] sm:text-5xl">
              More than extra hands. <span className="text-slate-500">A team that gets in it with you.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Bring us the knotty problem, the half-formed idea, or the product that needs another gear. We join your team, make the hard calls together, and stay close until it works in the real world.
            </p>

            <ol className="mt-7 border-t border-slate-200">
              {principles.map((principle) => (
                <li key={principle.number} className="studio-principle grid grid-cols-[2rem_1fr] gap-3 border-b border-slate-200 py-4">
                  <span className="pt-0.5 font-mono text-xs font-semibold text-[#04B1C4]">{principle.number}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{principle.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{principle.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link to="/about" className="studio-team-link mt-6 inline-flex items-center gap-2 rounded-md bg-[#08376B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#04B1C4] hover:text-[#08376B]">
              Meet the people behind the work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
