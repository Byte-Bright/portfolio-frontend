import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, inView] — fires once when the element enters the viewport.
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

/**
 * Animates an integer from 0 to `target` (ease-out cubic) over `duration` ms.
 * Only starts when `enabled` becomes true.
 */
export function useCountUp(target, duration = 1400, enabled = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return
    let startTime = null
    let rafId

    const tick = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setValue(Math.round(eased * target))
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [enabled, target, duration])

  return value
}
