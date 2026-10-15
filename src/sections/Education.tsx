import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Building,
} from "lucide-react";
import { education } from "../data/portfolio.ts";
import SectionReveal from "../components/SectionReveal.tsx";

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <SectionReveal>
          <div className="section-header">
            <span className="section-label">My Academic Journey</span>
            <h2 id="education-heading" className="section-title">
              Education
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="education-card">
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="edu-institution">{education.institution}</h3>
                <p className="edu-degree">{education.degree}</p>
              </div>
            </div>

            <div className="edu-meta">
              <span>
                <Building size={14} />
                {education.university}
              </span>
              <span>
                <MapPin size={14} />
                {education.location}
              </span>
              <span>
                <Calendar size={14} />
                Expected: {education.expectedGraduation}
              </span>
              <span>
                <BookOpen size={14} />
                USN: {education.usn}
              </span>
            </div>

            <h4 className="edu-coursework-title">Relevant Coursework</h4>
            <div className="edu-coursework">
              {education.coursework.map((course) => (
                <span key={course} className="skill-chip">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
