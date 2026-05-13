'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  personalInfo: {
    name: string
    tagline: string
    bio: string
    email: string
    socialLinks?: {
      github?: string
      linkedin?: string
      twitter?: string
    }
    resumeUrl?: string
  }
}

const CELL = 60
const LIT = 'rgba(255,255,255,0.7)'
const OFF = 'rgba(0,0,0,0)'
const TRAIL_HOLD = 80
const FADE_OUT = '0.55s'
const FADE_IN = '0.04s'
const WAVE_START_DELAY = 2200

export default function Hero({ personalInfo }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const fadeTimeouts = useRef<Record<string, ReturnType<typeof setTimeout>>>({})
  const waveTriggered = useRef(false)
  const waveActive = useRef(false)
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const update = () => {
      setGridSize({
        rows: Math.ceil(window.innerHeight / CELL),
        cols: Math.ceil(window.innerWidth / CELL),
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Mouse hover glow — blocked while wave is running
  useEffect(() => {
    const grid = gridRef.current
    const section = sectionRef.current
    if (!grid || !section || gridSize.rows === 0) return

    const handleMouseMove = (e: MouseEvent) => {
      if (waveActive.current) return
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return

      const col = Math.floor(x / CELL)
      const row = Math.floor(y / CELL)
      if (col < 0 || col >= gridSize.cols || row < 0 || row >= gridSize.rows) return

      const idx = row * gridSize.cols + col
      const cell = grid.children[idx] as HTMLElement | undefined
      if (!cell) return

      const key = String(idx)
      if (fadeTimeouts.current[key]) {
        clearTimeout(fadeTimeouts.current[key])
        delete fadeTimeouts.current[key]
      }

      cell.style.transition = `background-color ${FADE_IN} ease, transform ${FADE_IN} cubic-bezier(0.4, 0, 0.2, 1)`
      cell.style.backgroundColor = LIT
      cell.style.transform = 'scale(1.12)'

      fadeTimeouts.current[key] = setTimeout(() => {
        cell.style.transition = `background-color ${FADE_OUT} cubic-bezier(0.4, 0, 0.2, 1), transform ${FADE_OUT} cubic-bezier(0.4, 0, 0.2, 1)`
        cell.style.backgroundColor = OFF
        cell.style.transform = 'scale(1)'
      }, TRAIL_HOLD)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      Object.values(fadeTimeouts.current).forEach(clearTimeout)
    }
  }, [gridSize])

  // One-time diagonal wave on load
  useEffect(() => {
    const grid = gridRef.current
    if (!grid || gridSize.rows === 0 || waveTriggered.current) return
    waveTriggered.current = true

    const allTimeouts: ReturnType<typeof setTimeout>[] = []
    let maxEndTime = 0

    for (let row = 0; row < gridSize.rows; row++) {
      for (let col = 0; col < gridSize.cols; col++) {
        const idx = row * gridSize.cols + col
        const jitter = Math.random() * 200
        const cellDelay = WAVE_START_DELAY + col * 60 + row * 60 + jitter
        const opacity = (0.4 + Math.random() * 0.45).toFixed(2)
        const peakColor = `rgba(255,45,85,${opacity})`
        const cellEnd = cellDelay + 500 + 900
        if (cellEnd > maxEndTime) maxEndTime = cellEnd

        const t1 = setTimeout(() => {
          waveActive.current = true
          const cell = grid.children[idx] as HTMLElement | undefined
          if (!cell) return
          cell.style.transition = 'background-color 500ms ease, transform 500ms ease'
          cell.style.backgroundColor = peakColor
          cell.style.transform = 'scale(1.02)'

          const t2 = setTimeout(() => {
            cell.style.transition = 'background-color 900ms ease, transform 900ms ease'
            cell.style.backgroundColor = OFF
            cell.style.transform = 'scale(1)'
          }, 500)
          allTimeouts.push(t2)
        }, cellDelay)
        allTimeouts.push(t1)
      }
    }

    const tEnd = setTimeout(() => {
      waveActive.current = false
    }, maxEndTime)
    allTimeouts.push(tEnd)

    return () => allTimeouts.forEach(clearTimeout)
  }, [gridSize])

  const cellCount = gridSize.rows * gridSize.cols

  return (
    <section
      ref={sectionRef}
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={gridRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: `repeat(${gridSize.cols}, ${CELL}px)`,
            gridTemplateRows: `repeat(${gridSize.rows}, ${CELL}px)`,
          }}
        >
          {Array.from({ length: cellCount }).map((_, i) => (
            <div
              key={i}
              data-cell={String(i)}
              style={{
                width: CELL,
                height: CELL,
                borderRight: '1px solid rgba(255,255,255,0.13)',
                borderBottom: '1px solid rgba(255,255,255,0.13)',
                backgroundColor: OFF,
              }}
            />
          ))}
        </div>
      </div>

      {/* Frosted glass hero card */}
      <div className="relative z-10 w-full px-8" style={{ maxWidth: '820px' }}>
        <div
          className="relative w-full"
          style={{
            padding: '52px 44px',
            background: 'rgba(0,0,0,0.03)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.30)',
            borderRadius: '16px',
            boxShadow: '0 20px 48px rgba(0,0,0,0.5)',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-[#ff2d55] uppercase tracking-[0.2em] text-sm mb-5"
          >
            {personalInfo.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.15 }}
            className="text-5xl md:text-6xl font-bold text-white leading-none mb-6 tracking-tight"
          >
            {personalInfo.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-[#888] text-base leading-relaxed"
            style={{ marginBottom: '1.5rem' }}
          >
            Engineering offensive security tooling, automating threat intelligence
            pipelines, and building infrastructure that defends itself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.45 }}
            className="flex flex-wrap items-center gap-8"
            style={{ marginBottom: '1rem' }}
          >
            <a
              href="#projects"
              className="relative group px-6 py-3 text-base bg-transparent text-white overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                View Projects
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#contact"
              className="relative group px-6 py-3 text-base bg-transparent text-white overflow-hidden"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Get in Touch
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="flex items-center gap-5"
          >
            {personalInfo?.socialLinks?.github && (
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="text-[#888] hover:text-[#ff2d55] transition-colors" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {personalInfo?.socialLinks?.linkedin && (
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-[#888] hover:text-[#ff2d55] transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {personalInfo?.email && (
              <a href={`mailto:${personalInfo.email}`}
                className="text-[#888] hover:text-[#ff2d55] transition-colors" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bouncing scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#888] uppercase tracking-[0.2em] text-xs">Scroll</span>
        <div className="animate-bounce-arrow text-[#ff2d55]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
