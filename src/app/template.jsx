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
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-0 w-[17%]"
      />
      <div
        id="banner-2"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-[16%] w-[17%]"
      />
      <div
        id="banner-3"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-[33%] w-[17%]"
      />
      <div
        id="banner-4"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-[50%] w-[17%]"
      />
      <div
        id="banner-5"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-[66%] w-[17%]"
      />
      <div
        id="banner-6"
        className="z-[9999] transition-none min-h-screen bg-neutral-950 fixed top-0 left-[83%] w-[17%]"
      />
      {children}
    </div>
  )
}