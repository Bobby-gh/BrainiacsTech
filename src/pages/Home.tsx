import CTA from '../components/CTA'
import AboutUsSection from '../components/AboutUsSection'
import ClientShowcase from '../components/ClientShowcase'
import Hero from '../components/Hero'
import OfficeOpening from '../components/OfficeOpening'
import ScrollReveal from '../components/ScrollReveal'
import SelectedWork from '../components/SelectedWork'
import Services from '../components/Services'
import Stats from '../components/Stats'
import StudioSection from '../components/StudioSection'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal><ClientShowcase /></ScrollReveal>
      <ScrollReveal><OfficeOpening /></ScrollReveal>
      <ScrollReveal><AboutUsSection /></ScrollReveal>
      <ScrollReveal><StudioSection /></ScrollReveal>
      <ScrollReveal delay={60}><Services /></ScrollReveal>
      <ScrollReveal delay={40}><SelectedWork /></ScrollReveal>
      <ScrollReveal><Stats /></ScrollReveal>
      <ScrollReveal delay={40}><Testimonials /></ScrollReveal>
      <ScrollReveal><CTA /></ScrollReveal>
    </>
  )
}
