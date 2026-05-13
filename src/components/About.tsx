'use client'

import React from 'react'
import { motion } from 'framer-motion'

type AboutProps = {
  personalInfo: {
    name: string
    bio: string
    email: string
  }
  beyondTechActivities: string[]
  stats: {
    label: string
    value: string
    color: string
  }[]
  skillsData: {
    category: string
    skills: string[]
  }[]
}

export default function About({ personalInfo, skillsData }: AboutProps) {
  return (
    <section id="about" className="relative min-h-screen bg-[#0a0a0a]" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto w-full px-6">
        <motion.p
          className="text-xs uppercase tracking-[0.2em] text-[#888]"
          style={{ marginBottom: '12px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[45%_50%] gap-16 items-start">
          {/* Left — name + bio + buttons */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ marginBottom: '28px' }}
            >
              <h2 className="text-4xl md:text-5xl font-light leading-snug mb-1 text-white">
                Hi, I&apos;m
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold text-[#ff2d55] leading-tight" style={{ fontSize: '56px' }}>
                {personalInfo?.name}
              </h2>
            </motion.div>

            <motion.p
              className="text-[#888] text-base"
              style={{ lineHeight: '1.8', marginBottom: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              {personalInfo?.bio}
            </motion.p>

          </div>

          {/* Right — skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#888] mb-6">Technical Skills</p>
              <div>
                {skillsData?.map((category, ci) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: ci * 0.08 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '20px' }}
                  >
                    <p
                      className="text-[#555] uppercase"
                      style={{ fontSize: '11px', marginBottom: '8px', letterSpacing: '0.1em' }}
                    >
                      {category.category}
                    </p>
                    <div className="flex flex-wrap">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center text-white cursor-default
                                     hover:border-[#ff2d55] hover:text-[#ff2d55] hover:scale-105 hover:-translate-y-0.5
                                     transition-all duration-200"
                          style={{
                            background: '#1a1a1a',
                            border: '1px solid #2a2a2a',
                            borderRadius: '6px',
                            padding: '6px 12px',
                            fontSize: '13px',
                            margin: '4px',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
