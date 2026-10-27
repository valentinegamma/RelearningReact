import { HeartHandshake, Lightbulb, ShieldCheck, Sprout, UsersRound } from "lucide-react"

const values = [
  {
    title: "Empowerment",
    description: "We believe in the untapped potential of every person.",
    icon: Sprout,
  },
  {
    title: "Integrity",
    description: "We lead with honesty, transparency, and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description: "We champion forward-thinking solutions and mindsets.",
    icon: Lightbulb,
  },
  {
    title: "Inclusivity",
    description: "We work to make growth accessible to diverse communities.",
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
        <header className="purpose__intro">
          <p className="purpose__eyebrow">What guides us</p>
          <h2 className="purpose__title" id="purpose-title">
            Purpose that moves <span>us forward.</span>
          </h2>
          <p className="purpose__description">
            We are working toward a future where people and organizations across Africa can realize
            their potential and thrive.
          </p>
        </header>

        <div className="purpose__statements">
          <article className="purpose-statement purpose-statement--mission">
            <p className="purpose-statement__label">Our mission</p>
            <p className="purpose-statement__text">
              To equip youth, individuals, and organizations with the mindset, skills, and strategies
              necessary to realize their potential and thrive in a dynamic, competitive world.
            </p>
          </article>
          <article className="purpose-statement purpose-statement--vision">
            <p className="purpose-statement__label">Our vision</p>
            <p className="purpose-statement__text">
              To be a leading catalyst for personal and business success across Africa and beyond
              through innovative training and mentorship.
            </p>
          </article>
        </div>

        <div className="values">
          <div className="values__intro">
            <p className="values__eyebrow">The principles behind our work</p>
            <h3 className="values__title">Our values</h3>
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
