'use client'

import { SessionProvider } from 'next-auth/react'

export default function PortalLayout({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
