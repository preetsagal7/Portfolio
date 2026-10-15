import { Heart } from "lucide-react";
import { personalInfo, navLinks } from "../data/portfolio.ts";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-brand">{personalInfo.name}</div>
        <p className="footer-text">
          Built with <Heart size={14} style={{ display: "inline", verticalAlign: "middle", color: "#ef4444" }} /> and passion for technology
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
