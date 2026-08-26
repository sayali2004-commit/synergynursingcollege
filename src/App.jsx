import useReveal from './hooks/useReveal'
import Header from './components/Header'
import FloatingContact from './components/FloatingContact'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import College from './components/College'
import Courses from './components/Courses'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import Admissions from './components/Admissions'
import Notices from './components/Notices'
import AdmissionCTA from './components/AdmissionCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <FloatingContact />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <College />
        <Courses />
        <Facilities />
        <Gallery />
        <Admissions />
        <Notices />
        <AdmissionCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
