import { BadgeCheck, ClipboardCheck, MessageCircleMore, RefreshCw } from "lucide-react"

const commitments = [
  {
    title: "Start with your needs",
    description:
      "We listen, assess your goals, and tailor training to your learners and organization.",
    icon: MessageCircleMore,
  },
  {
    title: "Deliver practical learning",
    description:
      "Qualified trainers provide relevant, engaging sessions in a safe and respectful environment.",
    icon: BadgeCheck,
  },
  {
    title: "Measure what matters",
    description:
      "Needs assessments and post-training evaluations help track outcomes and training effectiveness.",
    icon: ClipboardCheck,
  },
  {
    title: "Keep improving",
    description:
      "We welcome feedback, review our methods, and use what we learn to improve future programs.",
    icon: RefreshCw,
  },
]

function QualityCommitment() {
  return (
    <section className="quality" id="quality" aria-labelledby="quality-title">
      <div className="quality__inner">
        <header className="quality__intro">
          <p className="quality__eyebrow">Our promise to learners and clients</p>
          <h2 className="quality__title" id="quality-title">
            Committed to <span>quality.</span>
          </h2>
          <p className="quality__description">
            From the first conversation to the follow-up, we aim to make every training experience
            useful, respectful, and focused on your goals.
          </p>
        </header>

        <div className="quality__commitments">
          {commitments.map(({ title, description, icon: Icon }, index) => (
            <article className="quality-card" key={title}>
              <span className="quality-card__icon" aria-hidden="true">
                <Icon size={21} strokeWidth={1.8} />
              </span>
              <div>
                <p className="quality-card__number">0{index + 1}</p>
                <h3 className="quality-card__title">{title}</h3>
                <p className="quality-card__description">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="quality__standards" aria-label="Service standards">
          <div className="quality-standard">
            <span className="quality-standard__value">90%+</span>
            <span className="quality-standard__label">client satisfaction target</span>
          </div>
          <p className="quality__feedback">
            We aim to address client concerns within <strong>3 business days</strong>.
          </p>
        </aside>

        <p className="quality__source-note">
          Service commitments and performance targets are stated in the 2025 PASDC company profile.
        </p>
      </div>
    </section>
  )
}

export default QualityCommitment
