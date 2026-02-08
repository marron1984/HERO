import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function FloatingCTA() {
  const { setShowContact, segment } = useApp()
  const isStartup = segment === 'startup'

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setShowContact(true)}
      className={`fixed bottom-20 right-4 z-30 w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${
        isStartup
          ? 'bg-gold-500 shadow-gold-500/30'
          : 'bg-royal-500 shadow-royal-500/30'
      }`}
    >
      <Phone className="w-6 h-6 text-white" />
      {/* Pulse ring */}
      <span
        className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
          isStartup ? 'bg-gold-500' : 'bg-royal-500'
        }`}
      />
    </motion.button>
  )
}
