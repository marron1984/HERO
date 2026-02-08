import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from './context/AppContext'
import DesktopNav from './components/DesktopNav'
import HeroSection from './components/HeroSection'
import StartupSection from './components/StartupSection'
import IndividualSection from './components/IndividualSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import FloatingCTA from './components/FloatingCTA'
import ContactModal from './components/ContactModal'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function App() {
  const { segment } = useApp()

  return (
    <div className="relative">
      {/* Desktop glassmorphism navigation */}
      <DesktopNav />

      {/* Hero — always visible */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Content sections with page transition */}
      <AnimatePresence mode="wait">
        {segment === 'startup' ? (
          <motion.div
            key="startup-section"
            id="startup"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <StartupSection />
          </motion.div>
        ) : (
          <motion.div
            key="individual-section"
            id="individual"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <IndividualSection />
          </motion.div>
        )}
      </AnimatePresence>

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
