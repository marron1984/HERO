import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  // 'startup' = B2B, 'individual' = B2C
  const [segment, setSegment] = useState('startup')
  // Bottom nav active tab
  const [activeTab, setActiveTab] = useState('home')
  // Contact modal
  const [showContact, setShowContact] = useState(false)

  const toggleSegment = useCallback(() => {
    setSegment(prev => (prev === 'startup' ? 'individual' : 'startup'))
  }, [])

  return (
    <AppContext.Provider
      value={{
        segment,
        setSegment,
        toggleSegment,
        activeTab,
        setActiveTab,
        showContact,
        setShowContact,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
