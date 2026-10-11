import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import About from './pages/About'
import Companies from './pages/Companies'
import Contact from './pages/Contact'
import BrainiacsSpace from './pages/BrainiacsSpace'
import BrainiacsTalents from './pages/BrainiacsTalents'
import Group from './pages/Group'
import GroupHome from './pages/GroupHome'
import TechHome from './pages/TechHome'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import ServicesPage from './pages/ServicesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {/* Brainiacs Group — mother company */}
        <Route path="/" element={<GroupHome />} />
        <Route path="/group" element={<Group />} />

        {/* Brainiacs Tech — sub-company (previous home now lives here) */}
        <Route path="/tech" element={<TechHome />} />

        {/* Shared Tech pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Brainiacs Space — sub-company */}
        <Route path="/space" element={<BrainiacsSpace />} />

        {/* Brainiacs Talents — sub-company */}
        <Route path="/talents" element={<BrainiacsTalents />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
