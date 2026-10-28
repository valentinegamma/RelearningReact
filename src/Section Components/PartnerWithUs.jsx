import { Building2, BriefcaseBusiness, HeartHandshake, ShieldCheck, UsersRound } from "lucide-react"

const grantOutcomes = [
  {
    text: "Impact over 5,000 beneficiaries annually through targeted, skills-based programs.",
    icon: UsersRound,
  },
  {
    text: "Create jobs, income-generating ventures, and stronger local economies.",
    icon: BriefcaseBusiness,
  },
  {
    text: "Reduce youth unemployment, idleness, and social vulnerability.",
    icon: ShieldCheck,
  },
  {
    text: "Strengthen community development through empowered individuals and enterprises.",
    icon: Building2,
  },
]

function PartnerWithUs() {
  return (
    <section className="partnership" id="partner-with-us" aria-labelledby="partnership-title">
      <div className="partnership__inner">
        <header className="partnership__header">
          <span className="partnership__icon" aria-hidden="true">
            <HeartHandshake size={24} strokeWidth={1.8} />
          </span>
          <div>
            <h2 className="partnership__title" id="partnership-title">
              Partner with us to <span>expand opportunity.</span>
            </h2>
          </div>
        </header>

        <div className="partnership__goal">
          <div className="partnership__goal-copy">
            <h3 className="partnership__section-title">Strategic goal</h3>
            <p className="partnership__description">
              To scale our impact across the region by building training hubs, digital learning
              platforms, and expanding partnerships that drive inclusive growth and innovation.
            </p>
          </div>
          <div className="partnership__goal-stat" aria-label="Over 5,000 beneficiaries annually">
            <span className="partnership__goal-number">5,000+</span>
            <span className="partnership__goal-label">beneficiaries annually</span>
          </div>
        </div>

        <div className="partnership__content">
          <div className="partnership__support">
            <h3 className="partnership__section-title">Why we need your support</h3>
            <p className="partnership__description">
              Thousands of young people and aspiring entrepreneurs in our region face daily barriers
              to personal growth and economic empowerment — including lack of mentorship, business
              knowledge, leadership skills, and access to transformative training opportunities.
            </p>
          </div>

          <div className="partnership__outcomes">
            <div className="partnership__outcomes-heading">
              <h3 className="partnership__section-title">
                What your grant or donation will achieve
              </h3>
            </div>
            <ul className="partnership__outcomes-list">
              {grantOutcomes.map(({ text, icon: Icon }) => (
                <li className="partnership__outcome" key={text}>
                  <span className="partnership__outcome-icon" aria-hidden="true">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerWithUs
