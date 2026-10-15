import { ArrowDown, Mail, Shield, Code, Users } from "lucide-react";
import { personalInfo } from "../data/portfolio.ts";

export default function Hero() {
  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("about");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Background decorations */}
      <div className="hero-bg-decor" aria-hidden="true">
        <div className="hero-bg-circle hero-bg-circle-1" />
        <div className="hero-bg-circle hero-bg-circle-2" />
        <div className="hero-circuit-line hero-circuit-1" />
        <div className="hero-circuit-line hero-circuit-2" />
        <div className="hero-circuit-line hero-circuit-3" />
      </div>

      <div className="hero-container">
        {/* Left — Content */}
        <div className="hero-content">
          <span className="hero-label">{personalInfo.introLabel}</span>

          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="highlight">{personalInfo.name}</span>
          </h1>

          <p className="hero-tagline">{personalInfo.tagline}</p>
          <p className="hero-description">{personalInfo.description}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleExplore}>
              <ArrowDown size={18} />
              Explore My Work
            </button>
            <button className="btn btn-secondary" onClick={handleContact}>
              <Mail size={18} />
              Contact Me
            </button>
          </div>

          <div className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            {personalInfo.availability}
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="hero-visual">
          <div className="portrait-wrapper">
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src={personalInfo.profileImage}
                alt={`Portrait of ${personalInfo.name}`}
                width={340}
                height={400}
                loading="eager"
              />
            </div>

            {/* Floating cards */}
            <div className="floating-card float-1" aria-hidden="true">
              <Shield size={18} />
              <span>Cybersecurity & Network Analysis</span>
            </div>
            <div className="floating-card float-2" aria-hidden="true">
              <Code size={18} />
              <span>Full-Stack Development</span>
            </div>
            <div className="floating-card float-3" aria-hidden="true">
              <Users size={18} />
              <span>Hackathon Team Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
