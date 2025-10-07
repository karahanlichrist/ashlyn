"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo with animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-amber-500 blur-2xl opacity-50 animate-pulse-glow" />
              <h1 className="relative text-6xl md:text-8xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-400 to-blue-400 bg-[length:200%_auto] animate-gradient">
                Asslyn
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-blue-200/80 text-lg md:text-xl font-light tracking-wider"
            >
              Experience Luxury in Dubai
            </motion.p>

            {/* Loading spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-2 mt-4"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
              />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500 rounded-full mt-8 max-w-xs"
            />
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/30" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-amber-500/30" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-amber-500/30" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/30" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
