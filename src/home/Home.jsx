
import AboutSection from '../about/AboutSection'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import LocationMap from '../locationmap/LocationMap'
import DisplaySection from './DisplaySection'
import Project from './Project'

export default function Home() {
  return (
    <div>
        <DisplaySection />
        <Project />
        <AboutSection />
        <Contact />
        <LocationMap />
        <Footer />
    </div>
  )
}
