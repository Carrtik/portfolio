'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  if (typeof window === 'undefined') return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { duration: 0.06 },
          y: { duration: 0.06 },
          opacity: { duration: 0.3 },
        }}
        style={{ translateX: '-50%', translateY: '-50%', mixBlendMode: 'difference' }}
      >
        <div className="w-7 h-7 rounded-full border border-white" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>
    </>
  )
}

export default CustomCursor
