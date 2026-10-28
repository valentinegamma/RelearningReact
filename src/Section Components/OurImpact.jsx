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


      </div>
    </section>
  )
}

export default OurImpact
