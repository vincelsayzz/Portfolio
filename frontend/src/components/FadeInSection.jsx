import { useEffect, useRef, useState } from "react";

/**
 * Wraps any content and fades + slides it into view the first time it
 * scrolls into the viewport. Respects prefers-reduced-motion by simply
 * rendering visible immediately (handled in CSS via a media query).
 *
 * Usage: <FadeInSection><YourSection /></FadeInSection>
 */
export default function FadeInSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
