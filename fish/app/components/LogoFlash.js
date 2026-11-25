"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function LogoFlash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const dismissedRef = useRef(false);
  const timeoutRef = useRef(null);
  const prevOverflowRef = useRef("");

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;

    // Unlock page scrolling as the logo starts fading
    document.body.style.overflow = prevOverflowRef.current;

    setFading(true);
    timeoutRef.current = setTimeout(() => setVisible(false), 700);
  }, []);

  useEffect(() => {
    // Start at the top and lock scrolling while the logo is showing
    window.scrollTo(0, 0);
    prevOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onWheel = (e) => {
      if (e.deltaY > 0) dismiss();
    };

    let touchStartY = null;
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (touchStartY === null) return;
      if (e.touches[0].clientY - touchStartY < -10) dismiss();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      clearTimeout(timeoutRef.current);
      document.body.style.overflow = prevOverflowRef.current;
    };
  }, [dismiss]);

  if (!visible) return null;

  return (
    <div
      className={`logo-flash ${fading ? "logo-flash--fade" : ""}`}
      aria-hidden="true"
    >
      <div className="logo-flash__content">
        <div className="logo-flash__logo-float">
          <Image
            src="/logo_fish3.png"
            alt=""
            width={422}
            height={359}
            priority
            className="h-32 w-auto sm:h-40 md:h-48"
          />
        </div>

        <span className="logo-flash__bubble logo-flash__bubble--left" />
        <span className="logo-flash__bubble logo-flash__bubble--right-small" />
        <span className="logo-flash__bubble logo-flash__bubble--right-big" />
      </div>
    </div>
  );
}