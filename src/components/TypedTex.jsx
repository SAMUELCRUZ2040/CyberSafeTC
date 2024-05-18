"use client"

import { ReactTyped } from 'react-typed'

export default function TypedTex() {
  return (
        <ReactTyped
            strings={['Clientes.', 'Negocios.']}
            typeSpeed={45}
            backSpeed={45}
            loop
        />
  )
}