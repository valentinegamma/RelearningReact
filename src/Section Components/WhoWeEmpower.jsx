import { BriefcaseBusiness, Compass, GraduationCap } from "lucide-react"

const audiences = [
  {
    title: "Youths",
    subtitle: "Building Tomorrow’s Leaders Today",
    lead: "We prepare youth to:",
    points: [
      "Develop self-awareness, confidence, and a growth mindset",
      "Discover their talents, passions, and purpose-driven goals",
      "Cultivate entrepreneurship, financial literacy, and life skills",
      "Transition smoothly from school to career or business",
      "Stay motivated and focused through mentorship and real-life role models",
    ],
    impact:
      "Youth emerge as visionary, self-reliant, and ethically grounded contributors to society and the economy.",
    icon: GraduationCap,
  },
  {
    title: "Individuals",
    subtitle: "Empowering Personal and Professional Growth",
    lead: "We equip individuals to:",
    points: [
      "Set and achieve meaningful goals in life and career",
      "Enhance emotional intelligence, communication, and decision-making",
      "Boost time management, focus, and productivity",
      "Develop leadership, resilience, and continuous improvement habits",
    ],
    impact:
      "Individuals gain clarity, direction, and confidence to take charge of their lives and succeed in their chosen paths.",
    icon: Compass,
  },
  {
    title: "Businesses",
    subtitle: "Enhancing People, Performance, and Profitability",
    lead: "We support organizations to:",
    points: [
      "Build high-performing, purpose-driven teams",
      "Improve staff engagement, innovation, and leadership capacity",
      "Align personal development with company goals and culture",
      "Train staff in strategic thinking, problem-solving, and customer excellence",
    ],
    impact:
      "Businesses experience improved productivity, talent retention, and sustainable growth.",
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
              At Pan African Skill Development Centre, we deliver Success-Geared Training Programs that empower youth, individuals, and businesses to unlock their full potential, achieve measurable growth, and thrive in a fast-changing world. Our programs are intentionally designed to instill purpose, enhance performance, and fuel progress at every level — personal, professional, and organizational
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
          {audiences.map(({ title, subtitle, lead, points, impact, icon: Icon }) => (
            <article className="audience-card" key={title}>
              <div className="audience-card__topline">
                <span className="audience-card__icon" aria-hidden="true">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <h3 className="audience-card__title">{title}</h3>
              </div>
              <h4 className="audience-card__subtitle">{subtitle}</h4>
              <p className="audience-card__lead">{lead}</p>
              <ul className="audience-card__points">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="audience-card__impact">
                <strong>Impact:</strong> {impact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeEmpower
