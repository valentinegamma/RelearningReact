import { ArrowRight, Award, BriefcaseBusiness, MessageCircle } from "lucide-react"

const featuredTrainers = [
  {
    name: "Angeline Njambi Ndeto",
    role: "CEO and Lead Trainer",
    expertise: "Leadership, finance, and supply-chain training.",
    initials: "AN",
    icon: Award,
  },
  {
    name: "Josephine Mwikali Musyoka",
    role: "Part-Time Trainer and Marketing Director",
    expertise: "Leadership, team development, and customer service.",
    initials: "JM",
    icon: BriefcaseBusiness,
  },
  {
    name: "Fredrick Kavisi Musau",
    role: "Full-Time Trainer · Communication",
    expertise: "Communication, public relations, and interpersonal skills.",
    initials: "FM",
    icon: MessageCircle,
  },
]

function MeetOurTrainers() {
  return (
    <section className="trainers" id="meet-our-trainers" aria-labelledby="trainers-title">
      <div className="trainers__inner">
        <header className="trainers__intro">
          <div>
            <p className="trainers__eyebrow">Experience with a human touch</p>
            <h2 className="trainers__title" id="trainers-title">
              Meet the people <span>who guide your growth.</span>
            </h2>
          </div>
          <p className="trainers__description">
            Our trainers bring professional experience and practical knowledge to every learning
            journey.
          </p>
        </header>

        <div className="trainers__grid">
          {featuredTrainers.map(({ name, role, expertise, initials, icon: Icon }) => (
            <article className="trainer-card" key={name}>
              <div className="trainer-card__visual" aria-hidden="true">
                <span className="trainer-card__initials">{initials}</span>
                <span className="trainer-card__icon">
                  <Icon size={20} />
                </span>
              </div>
              <div className="trainer-card__content">
                <p className="trainer-card__role">{role}</p>
                <h3 className="trainer-card__name">{name}</h3>
                <p className="trainer-card__expertise">{expertise}</p>
              </div>
            </article>
          ))}
        </div>

        <a className="trainers__link" href="./team.html">
          Meet the full team <ArrowRight size={18} aria-hidden="true" />
        </a>
        <p className="trainers__source-note">
          Roles and expertise are based on the 2025 PASDC company profile.
        </p>
      </div>
    </section>
  )
}

export default MeetOurTrainers
