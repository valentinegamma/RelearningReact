const qualityStandards = [
  {
    title: "Customer Service Commitment",
    introduction: "We are committed to:",
    points: [
      "Client-Centered Approach: Understanding your specific training needs and customizing solutions accordingly.",
      "Professionalism: Treating every client with respect, integrity, and courtesy at all times.",
      "Responsiveness: Providing timely communication, prompt support, and follow-up on inquiries and feedback.",
      "Transparency: Offering clear and honest information about our services, pricing, timelines, and results.",
      "Accessibility: Ensuring our services are accessible and inclusive to all participants, regardless of background.",
    ],
  },
  {
    title: "Training Delivery Standards",
    introduction: "We promise to:",
    points: [
      "Deliver engaging, relevant, and practical training content aligned with client objectives.",
      "Use qualified, experienced, and certified trainers for all programs.",
      "Employ diverse delivery methods (in-person, virtual, hybrid) to suit client preferences.",
      "Create a positive, safe, and respectful learning environment for all participants.",
      "Continuously improve our content and methodology to reflect emerging trends and client feedback.",
    ],
  },
  {
    title: "Quality Assurance Measures",
    introduction: "To ensure quality, we:",
    points: [
      "Conduct pre-training needs assessments and post-training evaluations.",
      "Monitor trainer performance through participant feedback and internal reviews.",
      "Maintain up-to-date training materials aligned with industry standards and best practices.",
      "Implement a continuous improvement system using data and client input.",
      "Schedule regular internal audits and staff development to uphold service excellence.",
    ],
  },
  {
    title: "Client Feedback & Complaints Handling",
    introduction: "We value your input and commit to:",
    points: [
      "Encouraging open feedback from clients and trainees at every stage.",
      "Addressing concerns or complaints within 3 business days.",
      "Investigating issues fairly and taking corrective actions promptly.",
      "Using feedback to shape service improvements and training innovation.",
    ],
  },
  {
    title: "Performance Indicators",
    introduction: "We monitor success based on:",
    points: [
      "Client satisfaction rates (target: 90%+ satisfaction score)",
      "Participant learning outcomes and retention",
      "Training effectiveness (pre/post-assessments and ROI feedback)",
      "Timely service delivery and responsiveness",
      "Repeat business and referrals from satisfied clients",
    ],
  },
]

function QualityCommitment() {
  return (
    <section className="quality" id="quality" aria-labelledby="quality-title">
      <div className="quality__inner">
        <div className="quality__top">
          <header className="quality__intro">
            <h2 className="quality__title" id="quality-title">
              Committed to <span>quality.</span>
            </h2>
            <p className="quality__description">
              At Pan African Skill Development Centre, we are dedicated to providing exceptional corporate training services that exceed client expectations. Our Customer Service and Quality Assurance Charter outlines our promise to deliver value-driven, professional, and learner-focused experiences to all our stakeholders.
            </p>
            <aside className="quality__standards" aria-label="Client satisfaction target">
              <p className="quality-standard__value">90%+</p>
              <p className="quality-standard__label">client satisfaction target</p>
            </aside>
          </header>
          <div
            className="quality__image-placeholder"
            role="img"
            aria-label="Image placeholder"
          />
        </div>

        <div className="quality__commitments">
          {qualityStandards.map(({ title, introduction, points }) => (
            <div className="quality-row" key={title}>
              <div
                className="quality__image-placeholder"
                role="img"
                aria-label={`Image placeholder for ${title}`}
              />
              <article className="quality-card">
                <h3 className="quality-card__title">{title}</h3>
                <p className="quality-card__introduction">{introduction}</p>
                <ul className="quality-card__points">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityCommitment
