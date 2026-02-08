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
  { id: 'contact', label: '相談', icon: MessageSquare },
]

export default function BottomNav() {
  const { activeTab, setActiveTab, setShowContact, setSegment } = useApp()

  const handleTap = (id) => {
    if (id === 'contact') {
      setShowContact(true)
      return
    }
    if (id === 'startup') {
      setSegment('startup')
    }
    if (id === 'individual') {
      setSegment('individual')
    }
    setActiveTab(id)

    // Scroll to the appropriate section
    const sectionMap = {
      home: 'hero',
      startup: 'startup',
      individual: 'individual',
      team: 'team',
    }
    const el = document.getElementById(sectionMap[id])
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 safe-area-bottom">
      <div className="max-w-lg mx-auto flex items-center justify-around px-2 py-1">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id
          return (
            <button
              key={id}
              onClick={() => handleTap(id)}
              className="relative flex flex-col items-center py-1.5 px-2 min-w-0 flex-1"
            >
              {isActive && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -top-1 w-8 h-0.5 rounded-full bg-royal-500"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? 'text-royal-500' : 'text-gray-400'
                }`}
              />
              <span
                className={`text-[10px] mt-0.5 truncate transition-colors ${
                  isActive ? 'text-royal-500 font-semibold' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
      {/* Safe area spacer for iOS */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  )
}
