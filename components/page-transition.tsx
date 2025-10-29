"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  )
}
