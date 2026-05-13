'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { researchBlocks, type ResearchItem } from '@/data/portfolio'
import styles from './SecurityResearch.module.css'

const glassDelays = ['0s', '1.3s', '2.6s']

function ResearchCard({ item }: { item: ResearchItem }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: `1px solid ${hovered ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.1)'}`,
        borderRight: `1px solid ${hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)'}`,
        borderBottom: `1px solid ${hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)'}`,
        borderLeft: `3px solid ${item.leftBorder}`,
        borderRadius: '10px',
        padding: '20px',
        boxShadow: hovered ? '0 4px 16px rgba(0,0,0,0.3)' : 'none',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          fontFamily: 'monospace',
          fontSize: '10px',
          letterSpacing: '0.08em',
          padding: '3px 8px',
          borderRadius: '4px',
          background: 'transparent',
          color: item.statusColor,
          border: item.statusBorder,
        }}
      >
        {item.status}
      </span>

      <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em', marginBottom: '6px' }}>
        {item.platform}
      </div>

      <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', textShadow: '0 0 20px rgba(255,255,255,0.05)', marginBottom: '8px', paddingRight: '90px' }}>
        {item.title}
      </div>

      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '12px' }}>
        {item.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.05em',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              padding: '3px 8px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {item.linkLabel && item.linkHref && (
        <a
          href={item.linkHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', marginTop: '8px', fontSize: '12px', color: '#ff2d55', fontFamily: 'monospace', textDecoration: 'none' }}
        >
          {item.linkLabel}
        </a>
      )}
    </div>
  )
}

export default function SecurityResearch() {
  const [openBlocks, setOpenBlocks] = useState<Record<number, boolean>>({})
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // CSS animations for accordion headers
    const styleEl = document.createElement('style')
    styleEl.innerHTML = `
      @keyframes arrowBounce {
        0%, 100% { transform: translateY(0) }
        50% { transform: translateY(3px) }
      }
      @keyframes shimmerSweep {
        0% { transform: translateX(-100%) }
        100% { transform: translateX(100%) }
      }
      .sec-glass-header { overflow: hidden; }
      .sec-glass-header .shimmer-overlay {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%);
        transform: translateX(-100%);
        pointer-events: none;
      }
      .sec-glass-header:hover .shimmer-overlay {
        animation: shimmerSweep 0.6s ease forwards;
      }
      .tap-hint { display: none; }
      @media (max-width: 768px) { .tap-hint { display: block; } }
    `
    document.head.appendChild(styleEl)

    // Canvas particle background
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 100 + Math.random() * 80,
    }))

    let rafId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        g.addColorStop(0, 'rgba(255,45,85,0.08)')
        g.addColorStop(0.5, 'rgba(255,45,85,0.03)')
        g.addColorStop(1, 'rgba(255,45,85,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 300) {
            const alpha = (1 - dist / 300) * 0.06
            ctx.strokeStyle = `rgba(255,45,85,${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
      document.head.removeChild(styleEl)
    }
  }, [])

  const toggle = (i: number) =>
    setOpenBlocks((prev) => ({ ...prev, [i]: !prev[i] }))

  return (
    <section
      id="research"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '120px',
        background: '#0a0a0a',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="mx-auto w-full px-6" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#444444', marginBottom: '12px' }}>
            {'>'} security_research.log
          </p>
          <p style={{ fontSize: '13px', letterSpacing: '0.2em', color: '#666666', fontWeight: 400 }}>
            SECURITY RESEARCH
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', marginTop: '8px', marginBottom: '40px' }}>
            click any section to expand
          </p>
        </motion.div>

        {/* Accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {researchBlocks.map((block, i) => {
            const isOpen = !!openBlocks[i]

            return (
              <motion.div
                key={block.title}
                style={{ position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                {/* ── Frosted glass header ── */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => e.key === 'Enter' && toggle(i)}
                  className={`${styles.glassBreath} sec-glass-header`}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 32px',
                    background: 'rgba(10,10,10,0.75)',
                    backdropFilter: 'blur(16px) brightness(1.05)',
                    WebkitBackdropFilter: 'blur(16px) brightness(1.05)',
                    borderTop: '1px solid rgba(255,255,255,0.12)',
                    borderRight: '1px solid rgba(255,255,255,0.06)',
                    borderBottom: isOpen
                      ? '1px solid rgba(255,255,255,0.04)'
                      : '1px solid rgba(255,255,255,0.06)',
                    borderLeft: '3px solid #ff2d55',
                    borderRadius: isOpen ? '12px 12px 0 0' : '12px',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease, border-radius 0.3s ease',
                    userSelect: 'none',
                    animationDelay: glassDelays[i],
                  }}
                >
                  <div className="shimmer-overlay" />

                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#555555', letterSpacing: '0.1em', marginBottom: '6px' }}>
                      {block.label}
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
                      {block.title}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '16px' }}>
                    <span
                      className="tap-hint"
                      style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}
                    >
                      tap to expand
                    </span>
                    <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#ff2d55', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                      [{block.count} findings&nbsp;<span style={{
                        display: 'inline-block',
                        animation: isOpen ? 'none' : 'arrowBounce 1.5s ease-in-out infinite',
                        marginLeft: '4px',
                        color: '#ff2d55',
                      }}>{isOpen ? '↑' : '↓'}</span>]
                    </div>
                  </div>
                </div>

                {/* ── Expandable panel ── */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    overflow: 'hidden',
                    maxHeight: isOpen ? '2000px' : '0',
                    transition: 'max-height 0.4s ease',
                    background: 'rgba(8,8,8,0.80)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderTop: 'none',
                    borderLeft: '3px solid #ff2d55',
                    borderRight: isOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    borderBottom: isOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    borderRadius: '0 0 12px 12px',
                  }}
                >
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    style={{ padding: '24px 32px 32px' }}
                  >
                    {block.items.map((item) => (
                      <ResearchCard key={item.title} item={item} />
                    ))}
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
