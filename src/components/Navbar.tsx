import { useState, useEffect, useCallback } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio.ts";
import { useActiveSection } from "../hooks/useAnimations.ts";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme === "dark" ? "#0A0D14" : "#F7F8FC");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    []
  );

  const resumeExists = false; // Set to true when resume.pdf is added

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="#home"
        className="navbar-brand"
        onClick={(e) => handleNavClick(e, "#home")}
        aria-label="Home"
      >
        SS
      </a>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`} role="menubar">
        {isOpen && (
          <button
            className="mobile-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </button>
        )}
        {navLinks.map((link) => (
          <li key={link.href} role="none">
            <a
              href={link.href}
              role="menuitem"
              className={
                activeSection === link.href.replace("#", "") ? "active" : ""
              }
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
        {resumeExists && (
          <li className="mobile-resume-link" role="none">
            <a
              href={personalInfo.resumePath}
              className="btn btn-primary btn-sm"
              download
              role="menuitem"
            >
              <Download size={16} />
              Resume
            </a>
          </li>
        )}
      </ul>

      <div className="navbar-actions">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <Sun size={19} className="theme-icon sun" />
          ) : (
            <Moon size={19} className="theme-icon moon" />
          )}
        </button>

        {resumeExists && (
          <div className="navbar-resume">
            <a
              href={personalInfo.resumePath}
              className="btn btn-primary btn-sm"
              download
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        )}

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
