import { ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"
import heroVideo from "@/lib/VIDEOS/Trainer_gesturing_in_classroom_a4dea208.mp4"

function Hero() {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <video
        className={`hero__video${videoReady ? " hero__video--ready" : ""}`}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
        onCanPlay={() => setVideoReady(true)}
      />
      <div className="hero-video-overlay" aria-hidden="true" />
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
            <a className="hero__primary-action" href="#programs">
              Get started <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
