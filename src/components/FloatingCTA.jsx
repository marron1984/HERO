import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function FloatingCTA() {
  const { setShowContact, segment } = useApp()
  const isStartup = segment === 'startup'

  return (
    <>
      {/* Mobile: bottom-right above nav */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setShowContact(true)}
        className={`fixed bottom-20 right-4 z-30 w-14 h-14 rounded-full shadow-xl flex items-center justify-center md:hidden ${
          isStartup
            ? 'bg-gold-500 shadow-gold-500/30'
            : 'bg-royal-500 shadow-royal-500/30'
        }`}
      >
        <Phone className="w-6 h-6 text-white" />
        <span className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
          isStartup ? 'bg-gold-500' : 'bg-royal-500'
        }`} />
      </motion.button>

      {/* Desktop: side floating bar */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowContact(true)}
          className={`w-12 h-12 rounded-xl shadow-xl flex items-center justify-center transition-colors ${
            isStartup
              ? 'bg-gold-500 hover:bg-gold-400 shadow-gold-500/20'
              : 'bg-royal-500 hover:bg-royal-400 shadow-royal-500/20'
          }`}
          title="電話で相談"
        >
          <Phone className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-xl bg-[#06C755] hover:bg-[#05b64c] shadow-xl shadow-[#06C755]/20 flex items-center justify-center"
          title="LINEで相談"
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </motion.button>
      </motion.div>
    </>
  )
}
