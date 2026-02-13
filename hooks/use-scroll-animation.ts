"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  enterThreshold?: number
  exitThreshold?: number
  triggerOnce?: boolean
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.9,
    enterThreshold,
    exitThreshold,
    triggerOnce = false,
  } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const clamp = (value: number) => Math.max(0, Math.min(1, value))
    const enterAt = clamp(enterThreshold ?? threshold)
    const defaultExit = clamp(Math.min(enterAt, threshold) - 0.08)
    const exitAt = clamp(exitThreshold ?? defaultExit)
    const observerThresholds = Array.from(new Set([exitAt, enterAt])).sort(
      (a, b) => a - b
    )

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio

        if (entry.isIntersecting && ratio >= enterAt) {
          setIsVisible(true)
          if (triggerOnce) observer.unobserve(element)
          return
        }

        if (!triggerOnce && ratio <= exitAt) {
          setIsVisible(false)
        }
      },
      { threshold: observerThresholds }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, enterThreshold, exitThreshold, triggerOnce])

  return { ref, isVisible }
}
