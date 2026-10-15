import type { ReactNode, CSSProperties } from "react";
import { useInView } from "../hooks/useAnimations.ts";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function SectionReveal({
  children,
  delay = 0,
  className = "",
  style,
}: Props) {
  const [ref, inView] = useInView<HTMLDivElement>(0.1, false);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
