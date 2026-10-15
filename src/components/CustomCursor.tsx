import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Apply class to hide default OS cursor across the entire page
    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      // Direct, 0-delay instant tracking matching mouse position 1:1
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      if (cursor.style.opacity !== "1") {
        cursor.style.opacity = "1";
      }
    };

    const onMouseDown = () => {
      cursor.classList.add("active");
    };

    const onMouseUp = () => {
      cursor.classList.remove("active");
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest("select") ||
        target?.closest("[role='button']") ||
        target?.closest("[role='menuitem']") ||
        target?.closest(".interactive")
      ) {
        cursor.classList.add("hover");
      } else {
        cursor.classList.remove("hover");
      }
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    />
  );
}
