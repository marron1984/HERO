import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../context/AppContext'

const navLinks = [
  { id: 'home', label: 'ホーム', href: '#hero' },
  { id: 'startup', label: '企業・ベンチャー', href: '#startup' },
  { id: 'individual', label: '個人のお客様', href: '#individual' },
  { id: 'team', label: 'チーム', href: '#team' },
]

export default function DesktopNav() {
  const { segment, setSegment, setShowContact, activeTab, setActiveTab } =
    useApp()
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
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-20 h-16 flex items-center justify-between">
        {/* Logo — serif text only */}
        <span className="font-serif text-base tracking-[0.2em] text-stone-800 font-light">
          HERO LEGAL
        </span>

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          {navLinks.map(({ id, label }) => {
            const isActive = activeTab === id
            return (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`relative text-xs tracking-[0.15em] transition-colors duration-300 pb-0.5 ${
                  isActive
                    ? 'text-stone-900'
                    : 'text-stone-400 hover:text-stone-700'
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="desktopNavLine"
                    className="absolute bottom-0 left-0 right-0 h-px bg-stone-900"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            )
          })}
        </nav>

        {/* CTA */}
        <button
          onClick={() => setShowContact(true)}
          className="group flex items-center gap-2 text-warm-700 hover:text-warm-900 transition-colors"
        >
          <span className="text-xs tracking-wider font-medium">無料相談</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.header>
  )
}
