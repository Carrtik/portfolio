'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

type Project = {
  id: string
  shortName: string
  name: string
  description: string
  technologies: string[]
  githubUrl?: string
  badge?: string
  wip?: boolean
}

type ProjectsProps = {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  useEffect(() => {
    const s = document.createElement('style')
    s.innerHTML = `
      @keyframes cardBreath {
        0%,100% {
          box-shadow: 0 0 0 1px rgba(255,45,85,0.2),
          0 0 20px rgba(255,45,85,0.06);
        }
        50% {
          box-shadow: 0 0 0 1px rgba(255,45,85,0.5),
          0 0 30px rgba(255,45,85,0.12);
        }
      }
    `
    document.head.appendChild(s)
    return () => { document.head.removeChild(s) }
  }, [])

  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0a] py-[84px] lg:py-[120px]"
    >
      <div className="mx-auto w-full px-6" style={{ maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '48px' }}
        >
          <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#444444', marginBottom: '12px' }}>
            {'>'} {projects.length} modules loaded
          </p>
          <p style={{ fontSize: '13px', letterSpacing: '0.2em', color: '#666666', fontWeight: 400 }}>
            PROJECTS
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {projects.map((project, i) => {
            const badge = project.badge ?? (project.wip ? 'IN DEV' : undefined)
            return (
              <div
                key={project.id}
                style={{
                  background: '#0d0d0d',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,45,85,0.15)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '380px',
                  animation: 'cardBreath 3s ease-in-out infinite',
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                {/* TOP AREA — big project name */}
                <div
                  style={{
                    height: '160px',
                    background: '#0a0a0a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(ellipse at center, rgba(255,45,85,0.07) 0%, transparent 70%)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: 'clamp(40px, 6vw, 64px)',
                      fontWeight: 900,
                      fontFamily: 'monospace',
                      letterSpacing: '-0.02em',
                      color: 'transparent',
                      backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      userSelect: 'none',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {project.shortName}
                  </span>
                </div>

                {/* BOTTOM AREA — content */}
                <div
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}
                >
                  {/* Number + badge row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>
                      0{i + 1}
                    </span>
                    {badge && (
                      <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#ff2d55', letterSpacing: '0.08em' }}>
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, marginBottom: '10px' }}>
                    {project.name}
                  </p>

                  {/* Description 2 lines */}
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.6,
                      marginBottom: '12px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    } as React.CSSProperties}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {project.technologies.map((t, j) => (
                      <span key={j} style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>
                        [ {t} ]
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: 'auto',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      color: '#ff2d55',
                      textDecoration: 'none',
                    }}
                  >
                    {project.githubUrl ? '→ GitHub' : '→ Coming Soon'}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
