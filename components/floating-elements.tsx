"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200 mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-pink-200 mix-blend-multiply filter blur-xl opacity-60 animate-float-medium"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-amber-200 mix-blend-multiply filter blur-xl opacity-60 animate-float-fast"></div>
    </div>
  )
}
