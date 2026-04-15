import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import About from './components/About'
import Products from './components/Products'
import ClientsCarousel from './components/ClientsCarousel'
import ForCompanies from './components/ForCompanies'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <WhyUs />
      <About />
      <Products />
      <ClientsCarousel />
      <ForCompanies />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
