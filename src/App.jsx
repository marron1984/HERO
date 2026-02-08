import { useApp } from './context/AppContext'
import HeroSection from './components/HeroSection'
import StartupSection from './components/StartupSection'
import IndividualSection from './components/IndividualSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import FloatingCTA from './components/FloatingCTA'
import ContactModal from './components/ContactModal'

export default function App() {
  const { segment } = useApp()

  return (
    <div className="relative">
      {/* Sections */}
      <div id="hero">
        <HeroSection />
      </div>

      {segment === 'startup' ? (
        <div id="startup">
          <StartupSection />
        </div>
      ) : (
        <div id="individual">
          <IndividualSection />
        </div>
      )}

      <div id="team">
        <TeamSection />
      </div>

      <Footer />

      {/* Overlays & Navigation */}
      <FloatingCTA />
      <BottomNav />
      <ContactModal />
    </div>
  )
}
