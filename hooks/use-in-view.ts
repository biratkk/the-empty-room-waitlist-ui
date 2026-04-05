import { useEffect, useState, type RefObject } from "react"

export function useInView(
  ref: RefObject<HTMLElement | null>,
  options: { threshold?: number; once?: boolean } = {},
) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.once) observer.unobserve(element)
        } else if (!options.once) {
          setIsInView(false)
        }
      },
      { threshold: options.threshold ?? 0.1 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, options.threshold, options.once])

  return isInView
}
