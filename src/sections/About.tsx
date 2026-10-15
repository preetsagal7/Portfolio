import {
  Shield,
  Code,
  Lock,
  FileText,
  Users,
  Trophy,
} from "lucide-react";
import type { ReactNode } from "react";
import { aboutText, aboutHighlights } from "../data/portfolio.ts";
import SectionReveal from "../components/SectionReveal.tsx";

const iconMap: Record<string, ReactNode> = {
  Shield: <Shield size={20} />,
  Code: <Code size={20} />,
  Lock: <Lock size={20} />,
  FileText: <FileText size={20} />,
  Users: <Users size={20} />,
  Trophy: <Trophy size={20} />,
};

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionReveal>
          <div className="section-header">
            <span className="section-label">Who I Am</span>
            <h2 id="about-heading" className="section-title">About Me</h2>
          </div>
        </SectionReveal>

        <div className="about-grid">
          <SectionReveal delay={0.1}>
            <div className="about-text">
              <p>{aboutText}</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="about-highlights">
              {aboutHighlights.map((item, i) => (
                <div className="about-highlight-item" key={i}>
                  <div className="about-highlight-icon">
                    {iconMap[item.icon] || <Code size={20} />}
                  </div>
                  <span className="about-highlight-label">{item.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
