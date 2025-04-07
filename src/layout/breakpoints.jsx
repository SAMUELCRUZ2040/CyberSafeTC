'use client'

import { useScreenStore } from '@/hooks/useScreenStore'
import { useEffect } from 'react'

export const ScreenProvider = ({ children }) => {
  const setWidth = useScreenStore((state) => state.setWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [setWidth])

  return <>{children}</>
}
