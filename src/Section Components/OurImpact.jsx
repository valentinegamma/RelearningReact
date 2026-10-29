import { useEffect, useRef, useState } from "react"
import { Handshake, Sprout, Target } from "lucide-react"

const impactMetrics = [
  {
    value: 1200,
    suffix: "+",
    label: "youth trained",
    context: "Equipped with skills and support for their next steps.",
    icon: Sprout,
  },
  {
    value: 100,
    suffix: "+",
    label: "personal success plans",
    context: "Created to help individuals set a clear direction.",
    icon: Target,
  },
  {
    value: 10,
    suffix: "",
    label: "partner institutions and companies",
    context: "Working together to extend learning and opportunity.",
    icon: Handshake,
  },
]

function ImpactMetric({ value, suffix, label, context, icon: Icon }) {
  const [count, setCount] = useState(0)
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    if (!("IntersectionObserver" in window)) {
      setCount(value)
      return
    }

    let animationFrame
    let isVisible = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true
          setCount(0)

          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCount(value)
            return
          }

          let startTime
          const animate = (timestamp) => {
            if (startTime === undefined) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / 1000, 1)
            const easedProgress = 1 - (1 - progress) ** 3
            setCount(Math.round(value * easedProgress))

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate)
            }
          }

          animationFrame = requestAnimationFrame(animate)
        } else if (!entry.isIntersecting) {
          isVisible = false
          cancelAnimationFrame(animationFrame)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(card)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [value])

  return (
    <article className="impact-metric" ref={cardRef}>
      <span className="impact-metric__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <p className="impact-metric__value">
        {new Intl.NumberFormat().format(count)}
        {suffix}
      </p>
      <h3 className="impact-metric__label">{label}</h3>
      <p className="impact-metric__context">{context}</p>
    </article>
  )
}

function OurImpact() {
  return (
    <section className="impact" id="our-impact" aria-labelledby="impact-title">
      <h3 className="mb-20 text-center text-2xl font-extralight tracking-[0.16em] text-emerald-700 sm:mb-8" style={{ color: "var(--color-page)" }}>
        Progress worth sharing
      </h3>
      <div className="impact__inner">         

        <header className="impact__intro">
          <h2 className="impact__title" id="impact-title">
            growing potential. <span>creating impact.</span>
          </h2>
          <p className="impact__description">
            Every number represents people and partnerships moving toward a more confident,
            capable future.
          </p>
        </header>
        <div className="impact__metrics">
          {impactMetrics.map((metric) => (
            <ImpactMetric {...metric} key={metric.label} />
          ))}
        </div>


      </div>
    </section>
  )
}

export default OurImpact
