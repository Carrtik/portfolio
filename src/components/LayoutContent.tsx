'use client'

import { useEffect } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import dynamic from 'next/dynamic'

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false })

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollToTop />
      <LoadingScreen />
      <ScrollProgress />
      <div className="relative">{children}</div>
    </ThemeProvider>
  )
}
