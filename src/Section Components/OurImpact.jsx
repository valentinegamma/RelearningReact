import { Handshake, Sprout, Target } from "lucide-react"

const impactMetrics = [
  {
    value: "1,200+",
    label: "youth trained",
    context: "Equipped with skills and support for their next steps.",
    icon: Sprout,
  },
  {
    value: "100+",
    label: "personal success plans",
    context: "Created to help individuals set a clear direction.",
    icon: Target,
  },
  {
    value: "10",
    label: "partner institutions and companies",
    context: "Working together to extend learning and opportunity.",
    icon: Handshake,
  },
]

function OurImpact() {
  return (
    <section className="impact" id="our-impact" aria-labelledby="impact-title">
      <div className="impact__inner">
        <header className="impact__intro">
          <p className="impact__eyebrow">Progress worth sharing</p>
          <h2 className="impact__title" id="impact-title">
            Growing potential. <span>Creating impact.</span>
          </h2>
          <p className="impact__description">
            Every number represents people and partnerships moving toward a more confident,
            capable future.
          </p>
        </header>

        <div className="impact__metrics">
          {impactMetrics.map(({ value, label, context, icon: Icon }) => (
            <article className="impact-metric" key={label}>
              <span className="impact-metric__icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <p className="impact-metric__value">{value}</p>
              <h3 className="impact-metric__label">{label}</h3>
              <p className="impact-metric__context">{context}</p>
            </article>
          ))}
        </div>

        <p className="impact__source-note">
          Figures reported in the 2025 PASDC company profile; confirm current totals before
          publication as current results.
        </p>
      </div>
    </section>
  )
}

export default OurImpact
