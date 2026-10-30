import { ArrowRight, Mail, MapPin, Phone, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Header from "@/Section Components/Header.jsx"
import SiteFooter from "@/Section Components/SiteFooter.jsx"
import angelinePhoto from "@/lib/IMAGES/Angeline Njambi Ndeto.png"
import faithPhoto from "@/lib/IMAGES/Faith Muthiani.png"
import fredrickPhoto from "@/lib/IMAGES/Fredrick Kavisi Musau.png"
import josephinePhoto from "@/lib/IMAGES/Josephine Mwikali Musyoka.png"
import michaelPhoto from "@/lib/IMAGES/Michael Luchivya Mukeya.png"
import paskaliaPhoto from "@/lib/IMAGES/Paskalia Naku Walekhwa.png"

const team = [
  {
    name: "Angeline Njambi Ndeto",
    image: angelinePhoto,
    role: "CEO and Lead Trainer",
    expertise: "Finance, supply chain, and leadership training.",
    email: "angienjambi@gmail.com",
    phones: [{ label: "0769 391 370", href: "+254769391370" }],
    education:
      "Bachelor of Commerce (Finance), Jomo Kenyatta University of Agriculture and Technology, Thika; training in Computerized Secretarial Studies, Digital Computer College, Kajiado.",
    profile:
      "A visionary, results-driven CEO with over 10 years of experience leading institutions and developing human capital. She designs impactful training for corporate, SME, government, and NGO clients, and brings experience in leadership coaching, talent development, institutional growth, and strategic partnerships. She has served as Lead Trainer and CEO of Pan African Skill Development Centre since July 2025.",
    highlights: [
      "Leadership, communication, time management, financial management, and analytical skills.",
      "Over ten years in water and renewable energy solutions across East Africa.",
      "Administrative management experience overseeing finance and supplies at TransAfrica Water Systems Ltd.",
      "Cross-border and cross-cultural work experience in Kenya and Tanzania; knowledgeable in global procurement standards.",
      "Experience with Navision, Tally, ERPNext, and SAP.",
    ],
  },
  {
    name: "Paskalia Naku Walekhwa",
    image: paskaliaPhoto,
    role: "Part-Time Trainer · Finance and Accounting",
    expertise: "Financial planning, accounting systems, audit, and taxation.",
    email: "Naku.walekhwa@gmail.com",
    phones: [{ label: "+254 722 701 616", href: "+254722701616" }],
    education:
      "MBA, University of Nairobi; Bachelor of Arts in Economics, University of Nairobi; Certified Public Accountant training and member of the Institute of Certified Public Accountants of Kenya (ICPAK). Qualified Investment and Securities Analyst.",
    profile:
      "A senior finance and accounting professional with over ten years of experience across a wide range of organizations. Paskalia specializes in implementing and managing accounting systems and procedures, and in analyzing and communicating actual, forecast, and budgeted financial information to stakeholders. She builds effective internal and external relationships, develops strategic partnerships, and provides financial advice to management.",
    highlights: [
      "Corporate and financial planning across accounts, finance, auditing, taxation, and documentation.",
      "Designing systems that strengthen financial discipline and organizational efficiency.",
      "Strong analytical, relationship-management, and negotiation skills, including work with banks, financial institutions, and regulators.",
      "Proficient with Microsoft Excel, Scala Accounting System, Sage, and QuickBooks.",
    ],
  },
  {
    name: "Michael Luchivya Mukeya",
    image: michaelPhoto,
    role: "Full-Time Trainer · Corporate Relations",
    expertise: "Business development, finance, leadership, and strategic planning.",
    email: "michaelmukeya@gmail.com",
    phones: [{ label: "+254 724 759 274", href: "+254724759274" }],
    education:
      "Pursuing a PhD in Business and Economics (Finance), Moi University; MBA in Finance, Kenyatta University; Bachelor of Arts in Linguistics and Communication, Moi University.",
    profile:
      "A practicing lecturer and corporate trainer, Michael is a committed transformational leader, mentor, and coach. He develops creative proposals to address challenges, advances measurable organizational goals, and builds performance-driven teams. He is an attentive listener who works to understand customer needs and develop viable solutions in competitive environments.",
    highlights: [
      "Budgeting, accounting, financial planning, and credit appraisal and management.",
      "Business development, decision-making, communication, and leadership.",
      "Strategic planning, risk management, operations, and sales management.",
      "Listening, negotiation, mentoring, and team coaching.",
    ],
  },
  {
    name: "Faith Muthiani",
    image: faithPhoto,
    role: "Part-Time Trainer · Finance and Human Resources",
    expertise: "Accounting, HR management, budgeting, and audit.",
    email: "faithbn35@gmail.com",
    phones: [{ label: "+254 728 099 707", href: "+254728099707" }],
    education:
      "Bachelor of Commerce and Administration, Jomo Kenyatta University of Agriculture and Technology. Human Resource Management partner at Vintage Associates and part-time trainer at Pan African Skill Development Centre.",
    profile:
      "A capable accounting, management, and human-resources professional with knowledge of GAAP, internal audit practices, regulatory requirements, and accounting software. Faith brings experience supporting accounting, HR, and general management functions.",
    highlights: [
      "Budget costing, forecasts, and compiling information for budget planning.",
      "Audit, taxation, statutory preparation, and advisory support.",
      "Maintaining compliance with established controls and procedures.",
      "Supplier management, office management, computer systems, interpersonal communication, and teamwork.",
      "Knowledge of SAGE and ERP accounting systems.",
    ],
  },
  {
    name: "Josephine Mwikali Musyoka",
    image: josephinePhoto,
    role: "Part-Time Trainer and Marketing Director",
    expertise: "Leadership, team development, finance, and customer service.",
    email: "josephineokero@gmail.com",
    phones: [
      { label: "0729 080 135", href: "+254729080135" },
      { label: "0789 140 672", href: "+254789140672" },
    ],
    education:
      "Master’s in Education and Bachelor’s degrees in Sociology and Economics, University of Nairobi; Certified Public Accountant training, Strathmore University; member of ICPAK.",
    profile:
      "An individual and corporate trainer, CPA, and Marketing Director with over fifteen years of experience. Josephine brings expertise in banking products, people skills, organizational management, finance, operations, and policy formulation. She has mentored motivated teams through training, delegation, effective communication, and inclusive decision-making.",
    highlights: [
      "Building energized teams and fostering strong interpersonal skills and teamwork.",
      "Organizational leadership that focuses teams on achieving their goals.",
      "Strategy, planning, budgeting, evaluation, and monitoring.",
      "Customer service, marketing, and relationship management.",
      "Strong analytical, communication, and interpersonal skills; proficient with Microsoft Excel and PowerPoint.",
    ],
  },
  {
    name: "Fredrick Kavisi Musau",
    image: fredrickPhoto,
    role: "Full-Time Trainer · Communication",
    expertise: "Communication, public relations, and interpersonal skills.",
    email: "fredkmusau@gmail.com",
    phones: [{ label: "0796 980 659", href: "+254796980659" }],
    education:
      "Bachelor’s degree in Communication and Sociology, University of Nairobi. Individual and corporate trainer at Pan African Skill Development Centre.",
    profile:
      "A proactive, intuitive trainer with strong communication and public-relations skills. Fredrick focuses on constructive organizational development through clear guidelines, evaluation, and coordination, and is committed to continuous learning and professional growth.",
    highlights: [
      "Delivers training in communication, public relations, and interpersonal relationships.",
      "Reviews and improves training programs to strengthen engagement, learning, and retention.",
      "Keeps training materials current and applies new methods and relevant industry requirements.",
      "Identifies operational and industry needs that training can address.",
      "Facilitates training, coordinates external providers, and tracks training milestones, goals, and budgets.",
    ],
  },
]

function TeamPage() {
  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedTrainer && !dialog.open) {
      dialog.showModal()
    } else if (!selectedTrainer && dialog.open) {
      dialog.close()
    }
  }, [selectedTrainer])

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
              {team.map(({ name, image, role, expertise, email, phones, ...details }) => (
                <article className="team-card" key={name}>
                  <div className="team-card__heading">
                    <span className="team-card__portrait">
                      <img src={image} alt={`${name} portrait`} />
                    </span>
                    <div>
                      <h2 className="team-card__name">{name}</h2>
                      <p className="team-card__role">{role}</p>
                    </div>
                  </div>
                  <p className="team-card__expertise">{expertise}</p>
                  <button
                    className="team-card__read-more"
                    type="button"
                    aria-label={`Read more about ${name}`}
                    onClick={() => setSelectedTrainer({ name, role, ...details })}
                  >
                    Read more <ArrowRight size={16} aria-hidden="true" />
                  </button>
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

            <dialog
              className="trainer-dialog"
              ref={dialogRef}
              aria-labelledby="trainer-dialog-title"
              onClose={() => setSelectedTrainer(null)}
              onClick={(event) => {
                if (event.target === event.currentTarget) event.currentTarget.close()
              }}
            >
              {selectedTrainer && (
                <div className="trainer-dialog__content">
                  <div className="trainer-dialog__header">
                    <div>
                      <p className="trainer-dialog__eyebrow">{selectedTrainer.role}</p>
                      <h2 id="trainer-dialog-title">{selectedTrainer.name}</h2>
                    </div>
                    <button
                      className="trainer-dialog__close"
                      type="button"
                      aria-label="Close trainer details"
                      onClick={() => dialogRef.current?.close()}
                    >
                      <X size={20} aria-hidden="true" />
                    </button>
                  </div>
                  <section className="trainer-dialog__section">
                    <h3>Education and experience</h3>
                    <p>{selectedTrainer.education}</p>
                  </section>
                  <section className="trainer-dialog__section">
                    <h3>Personal profile</h3>
                    <p>{selectedTrainer.profile}</p>
                  </section>
                  <section className="trainer-dialog__section">
                    <h3>Key skills and experience</h3>
                    <ul>
                      {selectedTrainer.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              )}
            </dialog>

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
