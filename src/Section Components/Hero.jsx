import { ArrowRight, BookOpen, BriefcaseBusiness, Sparkles } from "lucide-react"

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title" id="hero-title">
            Learn boldly.
            <br />
            <span>Build</span> what matters.
          </h1>
          <p className="hero__description">
            Develop practical skills, discover new possibilities, and shape a future you can be proud of.
          </p>
          <div className="hero__actions">
            <a className="hero__primary-action" href="#our-approach">  Discover our approach <ArrowRight size={18} aria-hidden="true" />
             
            </a>
          </div>
          <p className="hero__note">
            <Sparkles size={16} aria-hidden="true" />
            Learn by doing. Grow by sharing.
          </p>
        </div>

        <div className="hero-art" id="learning-paths" aria-label="Explore practical learning paths">
          <div className="hero-art__orbit hero-art__orbit--outer" aria-hidden="true" />
          <div className="hero-art__orbit hero-art__orbit--inner" aria-hidden="true" />
          <div className="hero-art__sun" aria-hidden="true" />
          <div className="hero-art__label">
            <span>Curiosity into capability</span>
            <span className="hero-art__index">01 / 02</span>
          </div>
          <div className="hero-art__message">
            <span className="hero-art__message-icon" aria-hidden="true">
              <Sparkles size={17} />
            </span>
            <span>
              <span className="hero-art__message-kicker">Your next chapter</span>
              <span className="hero-art__message-title">Starts with a skill.</span>
            </span>
          </div>
          <div className="hero-art__cards">
            <article className="learning-card">
              <span className="learning-card__icon learning-card__icon--yellow" aria-hidden="true">
                <BriefcaseBusiness size={21} />
              </span>
              <span>
                <span className="learning-card__title">Youth empowerment</span>
                <span className="learning-card__detail">Mentorship, entrepreneurship, and life skills.</span>
              </span>
              <ArrowRight className="learning-card__arrow" size={18} aria-hidden="true" />
            </article>
            <article className="learning-card">
              <span className="learning-card__icon learning-card__icon--blue" aria-hidden="true">
                <BookOpen size={21} />
              </span>
              <span>
                <span className="learning-card__title">Personal success</span>
                <span className="learning-card__detail">Grow through leadership and practical skills.</span>
              </span>
              <ArrowRight className="learning-card__arrow" size={18} aria-hidden="true" />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
