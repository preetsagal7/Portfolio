import { Award } from "lucide-react";
import { certifications } from "../data/portfolio.ts";
import SectionReveal from "../components/SectionReveal.tsx";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
      aria-labelledby="certifications-heading"
    >
      <div className="container">
        <SectionReveal>
          <div className="section-header">
            <span className="section-label">Credentials</span>
            <h2 id="certifications-heading" className="section-title">
              Certifications
            </h2>
          </div>
        </SectionReveal>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <SectionReveal key={idx} delay={0.1 + idx * 0.1}>
              <div className="cert-card">
                <div className="cert-icon">
                  <Award size={24} />
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    className="btn btn-ghost btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 12 }}
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
