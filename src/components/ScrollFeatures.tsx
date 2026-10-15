import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollFeatures() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate progress (0 to 1)
      if (totalHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, currentScrollY / totalHeight)));
      }

      // Show/hide Back-to-Top button
      setShowBackToTop(currentScrollY > 350);

      // Track scroll direction on html element
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        const direction = currentScrollY > lastScrollY ? "down" : "up";
        document.documentElement.setAttribute("data-scroll-dir", direction);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll Progress Bar at the very top of the window */}
      <div
        className="scroll-progress-container"
        aria-hidden="true"
      >
        <div
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* Floating Back to Top Button */}
      <button
        className={`back-to-top-btn ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp size={20} className="back-to-top-icon" />
      </button>
    </>
  );
}
