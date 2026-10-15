import { Calendar, Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio.ts";
import SectionReveal from "../components/SectionReveal.tsx";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <SectionReveal>
          <div className="section-header">
            <span className="section-label">Where I've Worked</span>
            <h2 id="experience-heading" className="section-title">
              Professional Experience
            </h2>
          </div>
        </SectionReveal>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <SectionReveal key={idx} delay={0.1 + idx * 0.15}>
              <div className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <span className="timeline-org">{exp.organization}</span>
                    </div>
                  </div>

                  <div className="timeline-meta">
                    <span>
                      <Calendar size={14} />
                      {exp.date}
                    </span>
                    <span>
                      <Briefcase size={14} />
                      {exp.type}
                    </span>
                  </div>

                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>

                  <div className="timeline-tools">
                    {exp.tools.map((tool) => (
                      <span key={tool} className="tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
