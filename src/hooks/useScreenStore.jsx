"use client"

import { create } from 'zustand'

export const useScreenStore = create((set) => ({
  width: 0,
  setWidth: (width) => set({ width }),
}))