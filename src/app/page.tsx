'use client'

import React from 'react'
import PageWrapper from '@/components/PageWrapper'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import SecurityResearch from '@/components/SecurityResearch'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

import { personalInfo, projects, skills, beyondTechActivities, stats } from '@/data/portfolio'

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        <Navbar />
        <Hero personalInfo={personalInfo} />
        <div className="max-w-6xl mx-auto px-6">
          <About
            personalInfo={personalInfo}
            beyondTechActivities={beyondTechActivities}
            stats={stats}
            skillsData={skills}
          />
        </div>
        <SecurityResearch />
        <div className="max-w-6xl mx-auto px-6">
          <Projects projects={projects} />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <Certifications />
        </div>
        <Contact />
      </main>
    </PageWrapper>
  )
}
