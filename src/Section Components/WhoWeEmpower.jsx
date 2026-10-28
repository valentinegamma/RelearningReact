import { BriefcaseBusiness, Compass, GraduationCap } from "lucide-react"

const audiences = [
  {
    title: "Youths",
    description:
      "Build confidence, discover your purpose, and prepare for the next step into a career or business.",
    icon: GraduationCap,
  },
  {
    title: "Individuals",
    description:
      "Grow your leadership, communication, and personal effectiveness with practical skills for life and work.",
    icon: Compass,
  },
  {
    title: "Businesses",
    description:
      "Strengthen teams, develop leaders, and improve performance for sustainable organizational growth.",
    icon: BriefcaseBusiness,
  },
]

function WhoWeEmpower() {
  return (
    <section className="audiences" id="who-we-empower" aria-labelledby="audiences-title">
      <div className="audiences__inner">
        <header className="audiences__intro">
          <div className="audiences__intro-copy">
            <h2 className="audiences__title" id="audiences-title">
              Who we empower
            </h2>
            <p className="audiences__description">
              Every journey is different. We shape practical training and mentorship around the
              people and organizations ready to grow.
            </p>
          </div>
          <aside className="audiences__promise" aria-labelledby="audiences-promise-title">
            <h3 className="audiences__promise-title" id="audiences-promise-title">
              Our promise
            </h3>
            <p className="audiences__promise-text">
              We don’t just train — we transform potential into progress, ambition into achievement,
              and vision into real value.
            </p>
            <div className="audiences__slogan">
              <p className="audiences__slogan-label">Our slogan</p>
              <p className="audiences__slogan-text">Delighting in your success!</p>
            </div>
          </aside>
        </header>

        <div className="audiences__grid">
          {audiences.map(({ title, description, icon: Icon }) => (
            <article className="audience-card" key={title}>
              <div className="audience-card__topline">
                <span className="audience-card__icon" aria-hidden="true">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <h3 className="audience-card__title">{title}</h3>
              </div>
              <p className="audience-card__description">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeEmpower
