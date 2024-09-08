"use client"

import { animatePageIn } from "@/utils/animation"
import { useEffect } from "react"

export default function Template({ children }){
  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <div>
      <div
        id="banner-1"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  )
}