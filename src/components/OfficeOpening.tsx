import { Link } from 'react-router-dom'

export default function OfficeOpening() {
  return (
    <section className="bg-[#08376B] py-16 text-white sm:py-20" aria-labelledby="office-opening-title">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div className="grid grid-cols-[1.5fr_0.85fr] items-end gap-3 sm:gap-5">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
              alt="Bright, newly opened Brainiacs Tech office with shared workspace"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-md object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85"
              alt="Meeting area in the new office"
              loading="lazy"
              className="mb-7 aspect-[3/4] w-full rounded-md object-cover sm:mb-10"
            />
          </div>

          <div className="lg:py-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
              <span className="size-1.5 rounded-full bg-[#04B1C4]" aria-hidden="true" />
              Tesano, Accra · Now open
            </p>
            <h2 id="office-opening-title" className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              A new place to make good things happen.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              Our new Tesano office in Accra is ready for working sessions, whiteboards, and the conversations that move a product forward. Drop by and meet the team behind your next build.
            </p>

            <div className="mt-7 flex flex-col gap-3 border-t border-white/20 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#04B1C4]">Find us</p>
                <p className="mt-2 text-sm font-medium text-white">Tesano, Accra</p>
                <p className="mt-1 text-xs text-white/65">Greater Accra, Ghana</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#04B1C4] px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:bg-white"
              >
                Plan a visit <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
