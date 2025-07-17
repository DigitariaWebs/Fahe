import Hero from './Hero'
import AboutUs from './AboutUs'
import Services from './Services'
import { TestimonialsSection } from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'
import FAQ from './FAQ'

export default function Home() {
  return (
    <div className="w-full h-full m-0 p-0">
      <Hero />
      <Services />
      <TestimonialsSection />
      <Gallery />
      <AboutUs />
      <FAQ />
      <Contact />
    </div>
  )
}