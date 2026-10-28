import { ChartNoAxesCombined, Layers3, SlidersHorizontal, UsersRound, Video } from "lucide-react"

const principles = [
  {
    title: "Holistic Approach",
    description: "We combine mindset, skillset, and toolset development.",
    icon: Layers3,
  },
  {
    title: "Targeted Programs",
    description: "Tailored for different age groups, roles, and industries.",
    icon: SlidersHorizontal,
  },
  {
    title: "Practical & Measurable",
    description: "Action-oriented with clear success indicators.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Experienced Trainers & Mentors",
    description: "Industry leaders and certified coaches.",
    icon: UsersRound,
  },
  {
    title: "Flexible Delivery",
    description: "Onsite, online, hybrid, workshops, boot camps, or retreats.",
    icon: Video,
  },
]

function OurApproach() {
  return (
    <section className="approach" id="our-approach" aria-labelledby="approach-title">
      <p className="approach__eyebrow">Our approach to learning</p>
      <div className="approach__inner">
        <header className="approach__intro">
          <h2 className="approach__title" id="approach-title">
            More than training. <span>A path to progress.</span>
          </h2>
          <p className="approach__description">
            We combine practical learning and personal support to help people turn potential into
            progress—in ways that fit their goals.
          </p>
        </header>

        <ul className="approach__list">
          {principles.map(({ title, description, icon: Icon }) => (
            <li className="approach-item" key={title}>
              <span className="approach-item__icon" aria-hidden="true">
                <Icon size={21} strokeWidth={1.8} />
              </span>
              <div className="approach-item__copy">
                <h3 className="approach-item__title">{title}</h3>
                <p className="approach-item__description">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OurApproach
