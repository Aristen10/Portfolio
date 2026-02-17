"use client"
import { useEffect, useRef, useState } from "react"

interface Props {
  children: React.ReactNode
  delay?: number
}

export default function ScrollRevealItem({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // animation une seule fois
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-400 ease-out
        ${isVisible
  ? "opacity-100 translate-y-0 scale-100 blur-0"
  : "opacity-0 translate-y-6 scale-95"
}
      `}
    >
      {children}
    </div>
  )
}
