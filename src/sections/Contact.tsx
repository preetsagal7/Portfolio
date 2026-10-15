import { useState } from "react";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { personalInfo } from "../data/portfolio.ts";
import SectionReveal from "../components/SectionReveal.tsx";
import GithubIcon from "../components/GithubIcon.tsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text
      const input = document.createElement("input");
      input.value = personalInfo.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <SectionReveal>
          <div className="section-header">
            <span className="section-label">Get in Touch</span>
            <h2 id="contact-heading" className="section-title">
              Contact Me
            </h2>
            <p className="section-subtitle">
              Interested in collaborating, hiring for internships, or discussing
              technology? Feel free to reach out.
            </p>
          </div>
        </SectionReveal>

        <div className="contact-grid">
          {/* Contact Info */}
          <SectionReveal delay={0.1}>
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-desc">
                I'm always open to discussing new projects, learning
                opportunities, and technical challenges.
              </p>

              <div className="contact-links">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-link-item"
                  aria-label="Send email"
                >
                  <div className="contact-link-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Email</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  className="contact-link-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub profile"
                >
                  <div className="contact-link-icon">
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>GitHub</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      github.com/preetsagal7
                    </div>
                  </div>
                </a>

                <div className="contact-link-item" style={{ cursor: "default" }}>
                  <div className="contact-link-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Location</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Quick Actions */}
          <SectionReveal delay={0.2}>
            <div className="contact-actions">
              <div className="contact-action-card">
                <div className="contact-action-icon">
                  <Send size={24} />
                </div>
                <h4 className="contact-action-title">Email Me</h4>
                <p className="contact-action-desc">
                  Direct email for inquiries
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-primary btn-sm"
                >
                  <Mail size={16} />
                  Send Email
                </a>
              </div>

              <div className="contact-action-card">
                <div className="contact-action-icon" style={{ background: "linear-gradient(135deg, #56CFE1, #4169E1)" }}>
                  <Copy size={24} />
                </div>
                <h4 className="contact-action-title">Copy Email</h4>
                <p className="contact-action-desc">
                  Copy email to clipboard
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={copyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
