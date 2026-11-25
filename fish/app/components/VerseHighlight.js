"use client";

import { useEffect, useRef, useState } from "react";

export default function VerseHighlight({ children, className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !hasScrolled || visible) return undefined;
    const timer = window.setTimeout(() => setVisible(true), 2000);
    return () => window.clearTimeout(timer);
  }, [inView, hasScrolled, visible]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-r-2xl ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 rounded-r-2xl border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-200/70 via-yellow-100/45 to-transparent transition-all duration-700 ease-out motion-reduce:transition-none ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
        }`}
      />
      <div className="relative z-10 flex items-start gap-2 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
        {children}
      </div>
    </div>
  );
}
