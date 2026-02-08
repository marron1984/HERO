import { motion } from 'framer-motion'
import {
  Home,
  Rocket,
  User,
  Users,
  MessageSquare,
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const tabs = [
  { id: 'home', label: 'ホーム', icon: Home },
  { id: 'startup', label: 'スタートアップ', icon: Rocket },
  { id: 'individual', label: '個人向け', icon: User },
  { id: 'team', label: 'チーム', icon: Users },
  { id: 'contact', label: '相談', icon: MessageSquare, highlight: true },
]

export default function BottomNav() {
  const { activeTab, setActiveTab, setShowContact, setSegment, segment } =
    useApp()
  const isStartup = segment === 'startup'

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
      <div
        className={`backdrop-blur-xl border-t ${
          isStartup
            ? 'bg-navy-950/80 border-white/5'
            : 'bg-white/80 border-gray-200/50'
        }`}
      >
        <div className="max-w-lg mx-auto flex items-center justify-around px-1 pt-1.5 pb-0.5">
          {tabs.map(({ id, label, icon: Icon, highlight }) => {
            const isActive = activeTab === id
            return (
              <motion.button
                key={id}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleTap(id)}
                className="relative flex flex-col items-center py-1 px-2 min-w-0 flex-1"
              >
                {isActive && !highlight && (
                  <motion.div
                    layoutId="navIndicator"
                    className={`absolute -top-1.5 w-8 h-0.5 rounded-full ${
                      isStartup ? 'bg-gold-500' : 'bg-royal-500'
                    }`}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                {highlight ? (
                  <div
                    className={`w-10 h-10 -mt-3 rounded-full flex items-center justify-center shadow-lg ${
                      isStartup
                        ? 'bg-gold-500 shadow-gold-500/30'
                        : 'bg-royal-500 shadow-royal-500/30'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive
                        ? isStartup
                          ? 'text-gold-400'
                          : 'text-royal-500'
                        : isStartup
                          ? 'text-navy-400'
                          : 'text-gray-400'
                    }`}
                  />
                )}
                <span
                  className={`text-[10px] mt-0.5 truncate transition-colors ${
                    highlight
                      ? isStartup
                        ? 'text-gold-400 font-semibold'
                        : 'text-royal-500 font-semibold'
                      : isActive
                        ? isStartup
                          ? 'text-gold-400 font-semibold'
                          : 'text-royal-500 font-semibold'
                        : isStartup
                          ? 'text-navy-500'
                          : 'text-gray-400'
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
