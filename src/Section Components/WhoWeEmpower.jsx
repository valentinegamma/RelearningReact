import { ArrowRight, BriefcaseBusiness, Compass, GraduationCap } from "lucide-react"

const audiences = [
  {
    number: "01",
    title: "Youth",
    description:
      "Build confidence, discover your purpose, and prepare for the next step into a career or business.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Individuals",
    description:
      "Grow your leadership, communication, and personal effectiveness with practical skills for life and work.",
    icon: Compass,
  },
  {
    number: "03",
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
          <p className="audiences__eyebrow">Learning that meets you where you are</p>
          <h2 className="audiences__title" id="audiences-title">
            Your goals. <span>Your next step.</span>
          </h2>
          <p className="audiences__description">
            Every journey is different. We shape practical training and mentorship around the people
            and organizations ready to grow.
          </p>
        </header>

        <div className="audiences__grid">
          {audiences.map(({ number, title, description, icon: Icon }) => (
            <article className="audience-card" key={title}>
              <div className="audience-card__topline">
                <span className="audience-card__number">{number}</span>
                <span className="audience-card__icon" aria-hidden="true">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="audience-card__title">{title}</h3>
              <p className="audience-card__description">{description}</p>
              <a
                className="audience-card__link"
                href="./index.html#programs"
                aria-label={`Explore programs for ${title.toLowerCase()}`}
              >
                Explore programs <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeEmpower
