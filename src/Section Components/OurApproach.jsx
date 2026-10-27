import { ChartNoAxesCombined, Layers3, SlidersHorizontal, UsersRound, Video } from "lucide-react"

const principles = [
  {
    number: "01",
    title: "Whole-person growth",
    description:
      "We develop mindset, skillset, and toolset together, helping learning translate into meaningful progress.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Designed around you",
    description:
      "Programs are tailored to the needs of different ages, roles, industries, and organizations.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Practical and measurable",
    description:
      "Action-oriented learning is supported by clear success indicators and feedback on outcomes.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "04",
    title: "Guided by experienced trainers",
    description:
      "Industry experience, professional expertise, and mentorship bring each learning experience to life.",
    icon: UsersRound,
  },
  {
    number: "05",
    title: "Flexible ways to learn",
    description:
      "Choose onsite, online, or hybrid delivery, with formats such as workshops, boot camps, and retreats.",
    icon: Video,
  },
]

function OurApproach() {
  return (
    <section className="approach" id="our-approach" aria-labelledby="approach-title">
      <div className="approach__inner">
        <header className="approach__intro">
          <p className="approach__eyebrow">Learning with purpose</p>
          <h2 className="approach__title" id="approach-title">
            More than training. <span>A path to progress.</span>
          </h2>
          <p className="approach__description">
            We combine practical learning and personal support to help people turn potential into
            progress—in ways that fit their goals.
          </p>
        </header>

        <ol className="approach__list">
          {principles.map(({ number, title, description, icon: Icon }) => (
            <li className="approach-item" key={number}>
              <span className="approach-item__number">{number}</span>
              <span className="approach-item__icon" aria-hidden="true">
                <Icon size={21} strokeWidth={1.8} />
              </span>
              <div className="approach-item__copy">
                <h3 className="approach-item__title">{title}</h3>
                <p className="approach-item__description">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default OurApproach
