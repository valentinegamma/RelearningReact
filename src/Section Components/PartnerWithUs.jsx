import { ArrowUpRight, Building2, HeartHandshake, Lightbulb, UsersRound } from "lucide-react"

const opportunities = [
  {
    title: "Institutions",
    description: "Collaborate on training hubs, mentorship, and learning opportunities.",
    icon: Building2,
  },
  {
    title: "Businesses",
    description: "Invest in people and strengthen teams through practical development.",
    icon: Lightbulb,
  },
  {
    title: "Community partners",
    description: "Help make inclusive skills and support accessible to more people.",
    icon: UsersRound,
  },
]

function PartnerWithUs() {
  return (
    <section className="partnership" id="partner-with-us" aria-labelledby="partnership-title">
      <div className="partnership__inner">
        <div className="partnership__intro">
          <span className="partnership__icon" aria-hidden="true">
            <HeartHandshake size={25} strokeWidth={1.8} />
          </span>
          <p className="partnership__eyebrow">Together, we can do more</p>
          <h2 className="partnership__title" id="partnership-title">
            Partner with us to <span>expand opportunity.</span>
          </h2>
          <p className="partnership__description">
            We’re building partnerships that support inclusive growth and practical learning. Bring
            your ideas, experience, or resources to help more people move forward.
          </p>
          <a
            className="partnership__action"
            href="mailto:panafricaskillsdevcentre@gmail.com?subject=Partnership%20enquiry"
          >
            Explore a partnership <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="partnership__opportunities">
          {opportunities.map(({ title, description, icon: Icon }, index) => (
            <article className="partnership-item" key={title}>
              <span className="partnership-item__number">0{index + 1}</span>
              <span className="partnership-item__icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="partnership-item__title">{title}</h3>
                <p className="partnership-item__description">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="partnership__note">
        Interested in supporting our work? Contact PASDC to discuss potential collaboration.
      </p>
    </section>
  )
}

export default PartnerWithUs
