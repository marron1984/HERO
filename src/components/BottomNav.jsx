import { motion } from 'framer-motion'
import { Home, Rocket, User, Users, MessageSquare } from 'lucide-react'
import { useApp } from '../context/AppContext'

const tabs = [
  { id: 'home', label: 'ホーム', icon: Home },
  { id: 'startup', label: '企業法務', icon: Rocket },
  { id: 'individual', label: '個人', icon: User },
  { id: 'team', label: 'チーム', icon: Users },
  { id: 'contact', label: '相談', icon: MessageSquare, highlight: true },
]

export default function BottomNav() {
  const { activeTab, setActiveTab, setShowContact, setSegment } = useApp()

  const handleTap = (id) => {
    if (id === 'contact') {
      setShowContact(true)
      return
    }
    if (id === 'startup') setSegment('startup')
    if (id === 'individual') setSegment('individual')
    setActiveTab(id)

    const sectionMap = {
      home: 'hero',
      startup: 'startup',
      individual: 'individual',
      team: 'team',
    }
    const el = document.getElementById(sectionMap[id])
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-white/90 backdrop-blur-md border-t border-stone-200/60">
        <div className="max-w-lg mx-auto flex items-center justify-around px-1 pt-2 pb-1">
          {tabs.map(({ id, label, icon: Icon, highlight }) => {
            const isActive = activeTab === id
            return (
              <motion.button
                key={id}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleTap(id)}
                className="relative flex flex-col items-center py-1 px-2 min-w-0 flex-1"
              >
                {highlight ? (
                  <div className="w-10 h-10 -mt-4 rounded-full bg-stone-900 flex items-center justify-center shadow-md">
                    <Icon className="w-[18px] h-[18px] text-white" />
                  </div>
                ) : (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="mobileNavDot"
                        className="absolute -top-1 w-1 h-1 rounded-full bg-warm-500"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <Icon
                      className={`w-[18px] h-[18px] transition-colors ${
                        isActive ? 'text-stone-900' : 'text-stone-400'
                      }`}
                    />
                  </>
                )}
                <span
                  className={`text-[9px] mt-1 tracking-wider transition-colors ${
                    highlight
                      ? 'text-stone-900 font-medium'
                      : isActive
                        ? 'text-stone-900 font-medium'
                        : 'text-stone-400'
                  }`}
                >
                  {label}
                </span>
              </motion.button>
            )
          })}
        </div>
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>
    </nav>
  )
}
