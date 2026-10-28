import { HeartHandshake, Lightbulb, ShieldCheck, Sprout, UsersRound } from "lucide-react"

const values = [
  {
    title: "Empowerment",
    description: "We believe in the untapped potential of middle age and young person.",
    icon: Sprout,
  },
  {
    title: "Integrity",
    description: "We lead with honesty, transparency, and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We equip youth, individual and business owners, with forward-thinking solutions and mindsets.",
    icon: Lightbulb,
  },
  {
    title: "Inclusivity",
    description:
      "We serve all youth, individual and businesses, including marginalized and special groups.",
    icon: UsersRound,
  },
  {
    title: "Sustainability",
    description: "We foster long-term, self-reliant growth and impact.",
    icon: HeartHandshake,
  },
]

function MissionVisionValues() {
  return (
    <section className="purpose" id="mission-vision-values" aria-labelledby="purpose-title">
      <div className="purpose__inner">
        <div className="purpose__layout">
          <header className="purpose__intro">
            <h2 className="purpose__title" id="purpose-title">
              Our purpose:<br /> moving us <span>forward.</span>
            </h2>
            <p className="purpose__description">
              The future we are working toward, and the work that will take us there.
            </p>
          </header>

          <div className="purpose__statements">
            <article className="purpose-statement purpose-statement--vision">
              <p className="purpose-statement__label">Vision</p>
              <p className="purpose-statement__text">
                To be a leading catalyst for personal and business success across Africa and beyond
                through innovative training and mentorship.
              </p>
            </article>
            <article className="purpose-statement purpose-statement--mission">
              <p className="purpose-statement__label">Mission</p>
              <p className="purpose-statement__text">
                To equip youth, individuals, and organizations with the mindset, skills, and strategies
                necessary to realize their potential and thrive in a dynamic, competitive world.
              </p>
            </article>
          </div>
        </div>

        <div className="values">
          <div className="values__intro">
            <h3 className="values__title">The values that guide our work</h3>
          </div>
          <ul className="values__list">
            {values.map(({ title, description, icon: Icon }) => (
              <li className="value-item" key={title}>
                <span className="value-item__icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span>
                  <span className="value-item__title">{title}</span>
                  <span className="value-item__description">{description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValues
