import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import About from './pages/About'
import Companies from './pages/Companies'
import Contact from './pages/Contact'
import BrainiacsSpace from './pages/BrainiacsSpace'
import BrainiacsTalents from './pages/BrainiacsTalents'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import ServicesPage from './pages/ServicesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/space" element={<BrainiacsSpace />} />
        <Route path="/talents" element={<BrainiacsTalents />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
