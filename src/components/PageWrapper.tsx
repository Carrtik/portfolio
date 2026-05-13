'use client'

import { motion } from 'framer-motion'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
    >
      {children}
    </motion.div>
  )
}
