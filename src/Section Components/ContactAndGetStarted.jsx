import { ArrowUpRight, Mail, Phone } from "lucide-react"

const contactDetails = [
  {
    label: "Email",
    value: "panafricaskillsdevcentre@gmail.com",
    href: "mailto:panafricaskillsdevcentre@gmail.com",
    icon: Mail,
  },
  {
    label: "Call",
    value: "+254 729 080 135",
    href: "tel:+254729080135",
    icon: Phone,
  },
  {
    label: "Call",
    value: "+254 789 140 672",
    href: "tel:+254789140672",
    icon: Phone,
  },
]

function ContactAndGetStarted() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__content">
          <h2 className="contact__title" id="contact-title">
            <span>Contact us,</span> let’s make <br /> progress together.
          </h2>
          <p className="contact__description">
            Tell us what you’re working toward. We’ll help you explore a training or mentorship
            program that fits your goals.
          </p>
        </div>

        <div className="contact__details">
          {contactDetails.map(({ label, value, href, icon: Icon }) => (
            <a className="contact-detail" href={href} key={href}>
              <span className="contact-detail__icon" aria-hidden="true">
                <Icon size={19} />
              </span>
              <span>
                <span className="contact-detail__label">{label}</span>
                <span className="contact-detail__value">{value}</span>
              </span>
              <ArrowUpRight className="contact-detail__arrow" size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactAndGetStarted
