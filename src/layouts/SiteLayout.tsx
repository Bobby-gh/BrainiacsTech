import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

export default function SiteLayout() {
  return (
    <div className="design-root min-h-screen font-sans antialiased">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
