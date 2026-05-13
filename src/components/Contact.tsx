'use client'

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail, SiMedium } from 'react-icons/si'

const CONTACT_ROWS = [
  {
    icon: FaGithub,
    text: 'GitHub',
    href: 'https://github.com/Carrtik',
  },
  {
    icon: FaLinkedin,
    text: 'LinkedIn',
    href: 'https://linkedin.com/in/kartiknair-sec',
  },
  {
    icon: SiGmail,
    text: 'contact.kartikn@gmail.com',
    href: 'mailto:contact.kartikn@gmail.com',
  },
  {
    icon: SiMedium,
    text: 'Medium',
    href: 'https://medium.com/@contact.kartikn',
  },
]

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null)
  const vantaRef   = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    const init = async () => {
      if (!contactRef.current || vantaRef.current) return
      const THREE = await import('three')
      const VANTA = await import('vanta/dist/vanta.waves.min')
      vantaRef.current = VANTA.default({
        el: contactRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        backgroundColor: 0x0a0a0a,
        color: 0x1a0008,
        waveHeight: 15,
        waveSpeed: 0.4,
        zoom: 0.85,
      })
    }
    init()
    return () => {
      if (vantaRef.current) { vantaRef.current.destroy(); vantaRef.current = null }
    }
  }, [])

  return (
    <section
      ref={contactRef}
      id="contact"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px',
        width: '100%',
        background: '#0a0a0a',
      }}
      className="py-24"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-[40%_60%]"
          style={{ gap: '80px' }}
        >
          <div>
            <motion.h2
              className="text-5xl font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <div className="space-y-6 text-white/60 text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Open to security research collaborations, offensive security roles, and tool
                development projects. If it&apos;s interesting, reach out.
              </motion.p>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {CONTACT_ROWS.map(({ icon: Icon, text, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '20px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <Icon size={18} color="#ff2d55" />
                  <span style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    fontFamily: 'monospace',
                  }}>
                    {text}
                  </span>
                </a>
              ))}

              <p style={{
                marginTop: '32px',
                fontSize: '11px',
                fontFamily: 'monospace',
                color: 'rgba(255,255,255,0.2)',
              }}>
                {'> available for the right opportunity.'}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
