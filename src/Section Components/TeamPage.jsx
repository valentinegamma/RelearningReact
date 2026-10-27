import { Mail, MapPin, Phone } from "lucide-react"
import Header from "@/Section Components/Header.jsx"
import SiteFooter from "@/Section Components/SiteFooter.jsx"

const team = [
  {
    name: "Angeline Njambi Ndeto",
    role: "CEO and Lead Trainer",
    expertise: "Finance, supply chain, and leadership training.",
    email: "angienjambi@gmail.com",
    phones: [{ label: "0769 391 370", href: "+254769391370" }],
  },
  {
    name: "Paskalia Naku Walekhwa",
    role: "Part-Time Trainer · Finance and Accounting",
    expertise: "Financial planning, accounting systems, audit, and taxation.",
    email: "Naku.walekhwa@gmail.com",
    phones: [{ label: "+254 722 701 616", href: "+254722701616" }],
  },
  {
    name: "Michael Luchivya Mukeya",
    role: "Full-Time Trainer · Corporate Relations",
    expertise: "Business development, finance, leadership, and strategic planning.",
    email: "michaelmukeya@gmail.com",
    phones: [{ label: "+254 724 759 274", href: "+254724759274" }],
  },
  {
    name: "Faith Muthiani",
    role: "Part-Time Trainer · Finance and Human Resources",
    expertise: "Accounting, HR management, budgeting, and audit.",
    email: "faithbn35@gmail.com",
    phones: [{ label: "+254 728 099 707", href: "+254728099707" }],
  },
  {
    name: "Josephine Mwikali Musyoka",
    role: "Part-Time Trainer and Marketing Director",
    expertise: "Leadership, team development, finance, and customer service.",
    email: "josephineokero@gmail.com",
    phones: [
      { label: "0729 080 135", href: "+254729080135" },
      { label: "0789 140 672", href: "+254789140672" },
    ],
  },
  {
    name: "Fredrick Kavisi Musau",
    role: "Full-Time Trainer · Communication",
    expertise: "Communication, public relations, and interpersonal skills.",
    email: "fredkmusau@gmail.com",
    phones: [{ label: "0796 980 659", href: "+254796980659" }],
  },
]

function TeamPage() {
  return (
    <>
      <Header currentPage="team" />
      <main>
        <section className="team-page" aria-labelledby="team-title">
          <div className="team-page__inner">
            <header className="team-page__intro">
              <p className="team-page__eyebrow">The people behind your progress</p>
              <h1 className="team-page__title" id="team-title">
                Meet our team.
              </h1>
              <p className="team-page__description">
                Connect with the trainers and professionals who bring experience, care, and practical
                knowledge to PASDC’s programs.
              </p>
            </header>

            <div className="team-grid">
              {team.map(({ name, role, expertise, email, phones }) => (
                <article className="team-card" key={name}>
                  <div className="team-card__heading">
                    <span className="team-card__initials" aria-hidden="true">
                      {name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <div>
                      <h2 className="team-card__name">{name}</h2>
                      <p className="team-card__role">{role}</p>
                    </div>
                  </div>
                  <p className="team-card__expertise">{expertise}</p>
                  <address className="team-card__contacts">
                    <a className="team-card__contact" href={`mailto:${email}`}>
                      <Mail size={17} aria-hidden="true" />
                      <span>{email}</span>
                    </a>
                    {phones.map(({ label, href }) => (
                      <a className="team-card__contact" href={`tel:${href}`} key={href}>
                        <Phone size={17} aria-hidden="true" />
                        <span>{label}</span>
                      </a>
                    ))}
                  </address>
                </article>
              ))}
            </div>

            <aside className="team-page__location">
              <MapPin size={19} aria-hidden="true" />
              <p>
                <strong>Pan African Skill Development Centre</strong>
                <span>Elite House, Kikuyu, Kiambu, Kenya</span>
              </p>
            </aside>
            <p className="team-page__source-note">
              Contact details and roles are from the 2025 company profile. Please confirm details
              before relying on them.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default TeamPage
