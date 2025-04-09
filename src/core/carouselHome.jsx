"use client"

import { useScreenStore } from '@/hooks/useScreenStore'
import { CarouselDesktop, CarouselMobile } from './confiComponents/confiCarouselHome'
import { useEffect } from 'react'

export const CarouselHome = () => {
  const width = useScreenStore((state) => state.width)

  const isMobile = width < 1024

  return isMobile ? <CarouselMobile /> : <CarouselDesktop />
}
