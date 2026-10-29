import { ArrowRight } from "lucide-react"

const featuredTrainers = [
  {
    name: "Angeline Njambi Ndeto",
    role: "CEO and Lead Trainer",
    expertise: "Leadership, finance, and supply-chain training.",
    initials: "AN",
  },
  {
    name: "Josephine Mwikali Musyoka",
    role: "Part-Time Trainer and Marketing Director",
    expertise: "Leadership, team development, and customer service.",
    initials: "JM",
  },
  {
    name: "Fredrick Kavisi Musau",
    role: "Full-Time Trainer · Communication",
    expertise: "Communication, public relations, and interpersonal skills.",
    initials: "FM",
  },
]

function MeetOurTrainers() {
  return (
    <section className="trainers" id="meet-our-trainers" aria-labelledby="trainers-title">
      <div className="trainers__inner">
        <header className="trainers__intro">
          <div className="trainers__heading">
            <h2 className="trainers__title" id="trainers-title">
              Meet the people <span>who guide your growth.</span>
            </h2>
            <p className="trainers__description">
              Our trainers bring professional experience and practical knowledge to every learning
              journey.
            </p>
          </div>
        </header>

        <div className="trainers__grid">
          {featuredTrainers.map(({ name, role, expertise, initials }) => (
            <article className="trainer-card" key={name}>
              <div
                className="trainer-card__portrait"
                role="img"
                aria-label={`Portrait placeholder for ${name}`}
              >
                <span className="trainer-card__initials" aria-hidden="true">{initials}</span>
              </div>
              <div className="trainer-card__content">
                <h3 className="trainer-card__name">{name}</h3>
                <p className="trainer-card__role">{role}</p>
                <p className="trainer-card__expertise">{expertise}</p>
              </div>
            </article>
          ))}
        </div>

        <a className="trainers__link" href="./team.html">
          Meet the full team <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default MeetOurTrainers
