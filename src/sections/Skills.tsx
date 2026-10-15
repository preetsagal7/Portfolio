import { useState } from "react";
import {
  ShieldCheck,
  Terminal,
  Globe,
  Network,
} from "lucide-react";
import type { ReactNode } from "react";
import { skillCategories } from "../data/portfolio.ts";
import SectionReveal from "../components/SectionReveal.tsx";

const iconMap: Record<string, ReactNode> = {
  ShieldCheck: <ShieldCheck size={24} />,
  Terminal: <Terminal size={24} />,
  Globe: <Globe size={24} />,
  Network: <Network size={24} />,
};

export default function Skills() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...skillCategories.map((c) => c.title)];
  const visible =
    filter === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === filter);

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionReveal>
          <div className="section-header">
            <span className="section-label">What I Know</span>
            <h2 id="skills-heading" className="section-title">
              Technical Skills
            </h2>
            <p className="section-subtitle">
              Tools, languages, and frameworks I work with
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="skill-filters" role="tablist" aria-label="Filter skills by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                className={`skill-filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="skills-grid">
          {visible.map((category, idx) => (
            <SectionReveal key={category.title} delay={0.1 + idx * 0.1}>
              <div className="skill-category-card">
                <div className="skill-category-icon">
                  {iconMap[category.icon] || <Terminal size={24} />}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
