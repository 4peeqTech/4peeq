import React from 'react'
import { Nav } from '@/components/frontend/Nav'
import { Footer } from '@/components/frontend/Footer'
import { ClientAnimations } from '@/components/frontend/ClientAnimations'
import './styles.css'

export const metadata = {
  description: 'Programas de formación y capacitación para que tus equipos alcancen los objetivos y resultados esperados.',
  title: '4peeq · Personas & Equipos',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="es">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ClientAnimations />
      </body>
    </html>
  )
}
