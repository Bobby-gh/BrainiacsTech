import CTA from '../components/CTA'
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'
import Process from '../components/Process'
import SelectedWork from '../components/SelectedWork'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Services />
      <SelectedWork />
      <Stats />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}
