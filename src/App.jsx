import { HashRouter, Routes, Route } from 'react-router-dom'
import useReveal from './hooks/useReveal'
import Header from './components/Header'
import FloatingContact from './components/FloatingContact'
import ScrollHandler from './components/ScrollHandler'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AcademicsPage from './pages/AcademicsPage'
import CampusLifePage from './pages/CampusLifePage'
import AdmissionsPage from './pages/AdmissionsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  useReveal()

  return (
    <HashRouter>
      <ScrollHandler />
      <a
        href="#/home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <FloatingContact />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
