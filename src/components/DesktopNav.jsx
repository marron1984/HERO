import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const navLinks = [
  { id: 'home', label: 'ホーム', href: '#hero' },
  { id: 'startup', label: 'スタートアップ支援', href: '#startup' },
  { id: 'individual', label: '個人のお客様', href: '#individual' },
  { id: 'team', label: 'チーム', href: '#team' },
]

export default function DesktopNav() {
  const { segment, setSegment, setShowContact, activeTab, setActiveTab } =
    useApp()
  const isStartup = segment === 'startup'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    if (id === 'startup') setSegment('startup')
    if (id === 'individual') setSegment('individual')
    setActiveTab(id)
    const target =
      id === 'startup' || id === 'individual' ? id : id === 'home' ? 'hero' : id
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isStartup
            ? 'glass shadow-lg shadow-navy-950/20'
            : 'glass-light shadow-lg shadow-gray-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-500 ${
              isStartup ? 'bg-gold-500' : 'bg-royal-500'
            }`}
          >
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span
            className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
              isStartup ? 'text-white' : 'text-navy-900'
            }`}
          >
            LEGAL HERO
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-1">
          {navLinks.map(({ id, label }) => {
            const isActive = activeTab === id
            return (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? isStartup
                      ? 'text-gold-400'
                      : 'text-royal-500'
                    : isStartup
                      ? 'text-navy-200 hover:text-white'
                      : 'text-gray-600 hover:text-navy-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopNavPill"
                    className={`absolute inset-0 rounded-lg ${
                      isStartup ? 'bg-white/5' : 'bg-royal-500/5'
                    }`}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            )
          })}
        </nav>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowContact(true)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-500 ${
            isStartup
              ? 'bg-gold-500 text-navy-950 hover:shadow-lg hover:shadow-gold-500/20'
              : 'bg-royal-500 text-white hover:shadow-lg hover:shadow-royal-500/20'
          }`}
        >
          無料相談
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </motion.header>
  )
}
