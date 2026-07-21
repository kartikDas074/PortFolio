"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Top Left Gradient Blob - Dimmed for deep dark tone */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-900/10 rounded-full blur-[140px]"
      />

      {/* Center Right Gradient Blob */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-[520px] h-[520px] bg-indigo-900/10 rounded-full blur-[150px]"
      />

      {/* Bottom Left Gradient Blob */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 left-1/4 w-[480px] h-[480px] bg-purple-900/10 rounded-full blur-[140px]"
      />

      {/* Soft Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-radial from-cyan-500/3 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
