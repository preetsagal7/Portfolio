import { useState, useEffect } from "react";
import {
  Fingerprint,
  Droplets,
  Bot,
  Calendar,
  UserCircle,
  Award,
  X,
  Eye,
  ExternalLink,
} from "lucide-react";
import type { ReactNode } from "react";
import { projects, type Project } from "../data/portfolio.ts";
import SectionReveal from "../components/SectionReveal.tsx";
import GithubIcon from "../components/GithubIcon.tsx";

const iconMap: Record<string, ReactNode> = {
  Fingerprint: <Fingerprint size={26} />,
  Droplets: <Droplets size={26} />,
  Bot: <Bot size={26} />,
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <SectionReveal>
          <div className="section-header">
            <span className="section-label">What I've Built</span>
            <h2 id="projects-heading" className="section-title">
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Technical projects demonstrating problem-solving and system design
            </p>
          </div>
        </SectionReveal>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <SectionReveal key={project.id} delay={0.1 + idx * 0.12}>
              <div className="project-card">
                <div className="project-icon-wrapper">
                  {iconMap[project.icon] || <Bot size={26} />}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <div className="project-meta">
                  <span>
                    <UserCircle size={14} style={{ marginRight: 3 }} />
                    {project.role}
                  </span>
                  <span>
                    <Calendar size={14} style={{ marginRight: 3 }} />
                    {project.date}
                  </span>
                </div>

                {project.event && (
                  <div style={{ marginBottom: 12 }}>
                    <span className="tag">
                      <Award size={12} style={{ marginRight: 3 }} />
                      {project.event}
                    </span>
                  </div>
                )}

                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelected(project)}
                    aria-label={`View details about ${project.title}`}
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="btn btn-secondary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon size={16} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="btn btn-ghost btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <div
        className={`modal-overlay ${selected ? "open" : ""}`}
        onClick={() => setSelected(null)}
        role="dialog"
        aria-modal="true"
        aria-label={selected ? `${selected.title} details` : undefined}
      >
        {selected && (
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="project-icon-wrapper" style={{ marginBottom: 16 }}>
                {iconMap[selected.icon] || <Bot size={26} />}
              </div>

              <h3 className="project-title" style={{ fontSize: "1.4rem" }}>
                {selected.title}
              </h3>
              <p className="project-subtitle" style={{ marginBottom: 8 }}>
                {selected.subtitle}
              </p>

              <div className="project-meta" style={{ marginBottom: 16 }}>
                <span>
                  <UserCircle size={14} style={{ marginRight: 3 }} />
                  {selected.role}
                </span>
                <span>
                  <Calendar size={14} style={{ marginRight: 3 }} />
                  {selected.date}
                </span>
              </div>

              {selected.event && (
                <div style={{ marginBottom: 16 }}>
                  <span className="tag">
                    <Award size={12} style={{ marginRight: 3 }} />
                    {selected.event}
                  </span>
                </div>
              )}
            </div>

            <p
              className="project-description"
              style={{ marginBottom: 24, maxWidth: "none" }}
            >
              {selected.description}
            </p>

            <h4 style={{ marginBottom: 12, fontSize: "1rem" }}>
              Key Contributions
            </h4>
            <ul className="modal-contributions">
              {selected.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            {selected.technologies && selected.technologies.length > 0 && (
              <div style={{ marginTop: 20 }}>
                <h4 style={{ marginBottom: 8, fontSize: "1rem" }}>
                  Technologies
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {selected.technologies.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 24,
              }}
            >
              {selected.githubUrl && (
                <a
                  href={selected.githubUrl}
                  className="btn btn-secondary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={16} />
                  View on GitHub
                </a>
              )}
              {selected.liveUrl && (
                <a
                  href={selected.liveUrl}
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
