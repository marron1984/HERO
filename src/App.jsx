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
  visible: { opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
}

export default function App() {
  const { segment } = useApp()

  return (
    <div className="relative">
      <DesktopNav />

      <div id="hero">
        <HeroSection />
      </div>

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

      <FloatingCTA />
      <BottomNav />
      <ContactModal />
    </div>
  )
}
