import { useState, useEffect } from 'react'

interface UseMobileOptions {
  mobileBreakpoint?: number
}

export default function useMobile({ mobileBreakpoint = 768 }: UseMobileOptions = {}) {
  const [isMobile, setIsMobile] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }
    
    checkMobile()
    setReady(true)
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [mobileBreakpoint])

  const select = <T>(options: { mobile?: T, tablet?: T, desktop?: T }): T | undefined => {
    if (!ready) return options.desktop // Default to desktop for SSR
    
    // If we are on the client, we can use the current state
    if (isMobile) return options.mobile
    
    // Simple tablet check
    const isTablet = window.innerWidth >= mobileBreakpoint && window.innerWidth < 1024
    if (isTablet && options.tablet) return options.tablet
    
    return options.desktop || options.tablet || options.mobile
  }

  return { isMobile, ready, select }
}
