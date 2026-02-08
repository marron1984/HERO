import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function FloatingCTA() {
  const { setShowContact } = useApp()

  return (
    <>
      {/* Mobile: subtle dark circle */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setShowContact(true)}
        className="fixed bottom-20 right-4 z-30 w-12 h-12 rounded-full bg-stone-900 shadow-lg flex items-center justify-center md:hidden"
      >
        <Phone className="w-5 h-5 text-white" />
      </motion.button>

      {/* Desktop: vertical "CONTACT" text on right side */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => setShowContact(true)}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 items-center justify-center hover:opacity-70 transition-opacity"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="text-[10px] tracking-[0.4em] text-stone-400 font-light">
          CONTACT
        </span>
      </motion.button>
    </>
  )
}
