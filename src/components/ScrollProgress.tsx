'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollPercentage(Math.round(latest * 100))
  })

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-[200px] w-[1px] bg-white/10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#ff0000] origin-top"
          style={{ scaleY, height: '100%' }}
        />
      </div>
      <div className="absolute -right-7 top-1/2 -translate-y-1/2 text-sm font-medium text-white/60">
        {scrollPercentage}
      </div>
    </motion.div>
  )
}

export default ScrollProgress
