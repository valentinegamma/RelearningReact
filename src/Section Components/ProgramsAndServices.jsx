import {
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  Lightbulb,
  UsersRound,
} from "lucide-react"

const programs = [
  {
    number: "01",
    title: "Youth empowerment & mentorship",
    description:
      "Support young people as they build confidence, explore entrepreneurship, and prepare for their future.",
    topics: ["Personal development", "Financial literacy", "Career guidance"],
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Personal success & leadership",
    description:
      "Develop practical habits and people skills to move forward in life, work, and leadership.",
    topics: ["Self-leadership", "Productivity", "Communication"],
    icon: Compass,
  },
  {
    number: "03",
    title: "Corporate & SME capacity building",
    description:
      "Help organizations build strong teams, sharpen strategy, and improve customer experience.",
    topics: ["Team performance", "Strategic planning", "Customer service"],
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    title: "Startup & business growth clinics",
    description:
      "Give entrepreneurs practical guidance to shape, plan, and grow their business ideas.",
    topics: ["Business modeling", "Marketing", "Investment readiness"],
    icon: Lightbulb,
  },
]

function ProgramsAndServices() {
  return (
    <section className="programs" id="programs" aria-labelledby="programs-title">
      <div className="programs__inner">
        <header className="programs__intro">
          <div>
            <p className="programs__eyebrow">Practical pathways to progress</p>
            <h2 className="programs__title" id="programs-title">
              Programs that move you <span>forward.</span>
            </h2>
          </div>
          <p className="programs__description">
            From personal growth to organizational performance, our programs pair useful knowledge
            with practical tools you can put to work.
          </p>
        </header>

        <div className="programs__grid">
          {programs.map(({ number, title, description, topics, icon: Icon }) => (
            <article className="program-card" key={title}>
              <div className="program-card__topline">
                <span className="program-card__number">{number}</span>
                <span className="program-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="program-card__title">{title}</h3>
              <p className="program-card__description">{description}</p>
              <ul className="program-card__topics" aria-label={`${title} includes`}>
                {topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <a className="program-card__link" href="mailto:panafricaskillsdevcentre@gmail.com">
                Enquire about this program <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="programs__note">
          Programs can be tailored for your audience and delivered onsite, online, or in a hybrid
          format.
        </p>
      </div>
    </section>
  )
}

export default ProgramsAndServices
