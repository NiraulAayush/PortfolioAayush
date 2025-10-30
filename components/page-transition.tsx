"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Variants for the animation
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15, // Very short duration
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div key={pathname} initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  )
}
