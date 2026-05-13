'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CERTS = [
  {
    id: 1,
    title: 'CompTIA Security+ SY0-701',
    issuer: 'CompTIA',
    abbrev: 'C+',
    year: 'In Progress',
  },
  {
    id: 2,
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google',
    abbrev: 'G',
    year: '2024',
  },
  {
    id: 3,
    title: 'AWS Security: IAM',
    issuer: 'Amazon Web Services',
    abbrev: 'AWS',
    year: '2024',
  },
  {
    id: 4,
    title: 'NoSQL, Big Data & Spark Foundations',
    issuer: 'IBM',
    abbrev: 'IBM',
    year: '2024',
  },
]

const TERMINAL_CARDS = [
  {
    id: 'tryhackme',
    rows: [
      { key: 'PLATFORM', value: 'TryHackMe' },
      { key: 'GLOBAL_RANK', value: 'Top 5%' },
      { key: 'PATH', value: 'SOC Analyst' },
      { key: 'MODULES', value: 'Splunk / EDR / IR' },
      { key: 'STATUS', value: '[ACTIVE]' },
    ],
    footer: '> all checks passed. access granted.',
  },
  {
    id: 'overthewire',
    rows: [
      { key: 'PLATFORM', value: 'OverTheWire' },
      { key: 'WARGAME', value: 'Bandit' },
      { key: 'LEVELS', value: '0 → 25 Complete' },
      { key: 'FOCUS', value: 'Linux / SSH / Privesc' },
      { key: 'STATUS', value: '[COMPLETED]' },
    ],
    footer: '> mission complete. shell obtained.',
  },
]

function TerminalCard({
  rows,
  footer,
}: {
  rows: { key: string; value: string }[]
  footer: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0a0a0a',
        borderTop: hovered ? '1px solid rgba(255,45,85,0.5)' : '1px solid rgba(255,45,85,0.3)',
        borderRight: '1px solid rgba(255,45,85,0.1)',
        borderBottom: '1px solid rgba(255,45,85,0.1)',
        borderLeft: '3px solid #ff2d55',
        borderRadius: '8px',
        padding: '24px',
        fontFamily: 'monospace',
        boxShadow: hovered
          ? '0 0 30px rgba(255,45,85,0.1), inset 0 1px 0 rgba(255,45,85,0.2)'
          : '0 0 20px rgba(255,45,85,0.05), inset 0 1px 0 rgba(255,45,85,0.1)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
      }}
    >
      <div style={{ fontSize: '11px', color: 'rgba(255,45,85,0.5)', marginBottom: '16px' }}>
        $ system_status --verbose
        <span style={{ animation: 'blink 1s step-end infinite', color: '#ff2d55' }}> █</span>
      </div>

      {rows.map(({ key, value }) => (
        <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
            {key}
          </span>
          <span style={{ fontSize: '11px', color: '#ff2d55', fontWeight: 600, letterSpacing: '0.05em' }}>
            {value}
          </span>
        </div>
      ))}

      <div style={{ borderTop: '1px solid rgba(255,45,85,0.15)', marginTop: '14px', paddingTop: '14px' }}>
        <span style={{ color: 'rgba(255,45,85,0.4)', fontSize: '10px' }}>
          {footer}
        </span>
      </div>
    </div>
  )
}

const Certifications = () => {
  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
        .cert-card { position: relative; overflow: hidden; }
        .cert-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 100%;
          background: rgba(255,45,85,0.92);
          transform: translateY(100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 16px;
          text-align: center;
        }
        .cert-card:hover .cert-overlay {
          transform: translateY(0);
        }
      `}</style>
      <section id="certifications" className="relative py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-[#888] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.p>
          <motion.p
            className="text-[#888] text-sm mb-16 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Professional certifications demonstrating a commitment to continuous learning.
          </motion.p>

          {/* Cert cards grid — full width */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {CERTS.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="cert-card rounded-lg bg-[#111] border border-white/5 w-full"
                style={{ height: '200px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                  <span
                    className="text-4xl font-bold text-white/10 mb-2 select-none"
                    aria-hidden="true"
                  >
                    {cert.abbrev}
                  </span>
                  <span className="text-[#888] text-xs tracking-widest uppercase mb-1 truncate w-full text-center">
                    {cert.issuer}
                  </span>
                  <h3 className="text-white font-medium text-xs leading-snug text-center line-clamp-2 w-full">
                    {cert.title}
                  </h3>
                  <span
                    className={`mt-2 text-xs px-2 py-0.5 rounded border shrink-0 ${
                      cert.year === 'In Progress'
                        ? 'text-[#888] border-[#333]'
                        : 'text-[#ff2d55] border-[#ff2d55]/30'
                    }`}
                  >
                    {cert.year}
                  </span>
                </div>

                <div className="cert-overlay">
                  <p style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>
                    {cert.title}
                  </p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
                    {cert.issuer}
                  </p>
                  <span style={{
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    border: '1px solid rgba(255,255,255,0.4)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    color: 'white',
                  }}>
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal cards — separate container below */}
          <div style={{ marginTop: '80px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#444444', marginBottom: '24px' }}>
              PLATFORMS &amp; ACHIEVEMENTS
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '40px',
            }}>
              {TERMINAL_CARDS.map((card) => (
                <div key={card.id} style={{ width: '48%' }}>
                  <TerminalCard rows={card.rows} footer={card.footer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Certifications
