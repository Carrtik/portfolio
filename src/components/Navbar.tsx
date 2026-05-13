'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

type MagLinkProps = {
  href: string
  children: React.ReactNode
}

function MagLink({ href, children }: MagLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const rawX = (e.clientX - (rect.left + rect.width / 2)) * 0.15
    const rawY = (e.clientY - (rect.top + rect.height / 2)) * 0.15
    setPos({
      x: Math.max(-2, Math.min(2, rawX)),
      y: Math.max(-2, Math.min(2, rawY)),
    })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 100, damping: 28 }}
      className="text-[#888] hover:text-[#ff2d55] transition-colors duration-200 text-base tracking-widest uppercase"
    >
      {children}
    </motion.a>
  )
}

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '64px',
        paddingRight: '48px',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        background: 'rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-2xl font-bold text-[#ff2d55] tracking-[0.2em]"
        >
          KN
        </a>

        <div className="flex items-center gap-12 mr-6">
          <MagLink href="#projects">Projects</MagLink>
          <MagLink href="#research">Research</MagLink>
          <MagLink href="#certifications">Certifications</MagLink>
          <MagLink href="#about">About</MagLink>
          <MagLink href="#contact">Contact</MagLink>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
