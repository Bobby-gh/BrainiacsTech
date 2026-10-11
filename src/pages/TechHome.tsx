import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import GroupCard from '../components/GroupCard'
import CTA from '../components/CTA'
import { branches } from '../data/group'

// Every section below is imported from the previous Brainiacs Tech home page,
// unchanged — they all still describe the tech company.
import Hero from '../components/Hero'
import ClientShowcase from '../components/ClientShowcase'
import OfficeOpening from '../components/OfficeOpening'
import AboutUsSection from '../components/AboutUsSection'
import StudioSection from '../components/StudioSection'
import Services from '../components/Services'
import SelectedWork from '../components/SelectedWork'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'

// Sibling companies shown at the bottom (excluding Brainiacs Tech itself).
const siblings = branches.filter((branch) => branch.slug !== 'tech')

export default function TechHome() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <ClientShowcase />
      </ScrollReveal>
      <ScrollReveal>
        <OfficeOpening />
      </ScrollReveal>
      <ScrollReveal>
        <AboutUsSection />
      </ScrollReveal>
      <ScrollReveal>
        <StudioSection />
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={40}>
        <SelectedWork />
      </ScrollReveal>
      <ScrollReveal>
        <Stats />
      </ScrollReveal>
      <ScrollReveal delay={40}>
        <Testimonials />
      </ScrollReveal>

      {/* Sister companies, so nobody leaves the group by accident */}
      <ScrollReveal>
        <section
          className="container-x py-16 sm:py-20"
          aria-labelledby="tech-siblings-title"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#04B1C4]">
              Part of Brainiacs Group
            </p>
            <h2
              id="tech-siblings-title"
              className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-4xl"
            >
              More than a tech company
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Brainiacs Tech shares a home — and a standard — with a coworking
              space and a recruitment studio.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siblings.map((branch) => (
              <GroupCard key={branch.slug} branch={branch} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#08376B] transition hover:border-[#08376B]"
            >
              Back to Brainiacs Group <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </>
  )
}
