import {
  Lightbulb,
  Music,
  TreePine,
} from "lucide-react";
import type { ReactNode } from "react";
import { leadershipActivities } from "../data/portfolio.ts";
import SectionReveal from "../components/SectionReveal.tsx";

const iconMap: Record<string, ReactNode> = {
  Lightbulb: <Lightbulb size={22} />,
  Music: <Music size={22} />,
  TreePine: <TreePine size={22} />,
};

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="section"
      aria-labelledby="leadership-heading"
    >
      <div className="container">
        <SectionReveal>
          <div className="section-header">
            <span className="section-label">Beyond the Code</span>
            <h2 id="leadership-heading" className="section-title">
              Leadership & Activities
            </h2>
            <p className="section-subtitle">
              Hackathons, cultural initiatives, and community contributions
            </p>
          </div>
        </SectionReveal>

        <div className="leadership-grid">
          {leadershipActivities.map((activity, idx) => (
            <SectionReveal key={idx} delay={0.1 + idx * 0.12}>
              <div className="leadership-card">
                <div className="leadership-icon-wrap">
                  {iconMap[activity.icon] || <Lightbulb size={22} />}
                </div>
                <h3 className="leadership-title">{activity.title}</h3>
                <p className="leadership-role">{activity.role}</p>
                {activity.date && (
                  <p className="leadership-date">{activity.date}</p>
                )}
                <ul className="leadership-list">
                  {activity.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
