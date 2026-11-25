"use client";

import Link from "next/link";
import FishLogo from "./FishLogo";
import { useEffect, useState } from "react";

export default function SiteHeader({
  showHomeLink = false,
  showContactLink = false,
  collapseAtFishAction = false,
  className = "",
}) {
  const [isAtFishAction, setIsAtFishAction] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!collapseAtFishAction) return undefined;

    const fishAction = document.getElementById("fish-in-action");
    if (!fishAction) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsAtFishAction(entry.isIntersecting),
      { rootMargin: "-15% 0px -35% 0px" },
    );

    observer.observe(fishAction);
    return () => observer.disconnect();
  }, [collapseAtFishAction]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header relative transition-[padding,background-color,box-shadow,backdrop-filter] duration-300 ease-out ${
        isAtFishAction ? "site-header--collapsed" : ""
      } ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white/90 shadow-sm"} ${className}`}
    >
      <div
        className={`relative mx-auto max-w-6xl px-5 transition-[padding] duration-300 ease-out sm:px-8 lg:px-10 ${
          isScrolled ? "py-1.5 sm:py-2" : "py-2 sm:py-3"
        } ${
          showContactLink ? "pr-16 sm:pr-8" : ""
        } ${
          showHomeLink ? "flex flex-col" : ""
        }`}
      >
        <div className="site-header__brand">
          <Link
            href="#top"
            aria-label="F.I.S.H. home"
            className="flex w-fit max-w-full flex-row items-center justify-start"
          >
            <FishLogo
              className={`shrink-0 transition-all duration-300 ease-out ${
                isScrolled ? "h-9 w-[4.5rem] sm:h-11 sm:w-[6.75rem]" : "h-12 w-24 sm:h-16 sm:w-40"
              }`}
            />
          </Link>
        </div>

        {showHomeLink && (
          <Link
            href="/"
            className="mt-2 self-end rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-[#8DD3F0] hover:text-[#109FD7] sm:absolute sm:right-8 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 lg:right-10"
          >
            Home
          </Link>
        )}
      </div>
      {showContactLink && (
        <Link
          href="/#contact"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-700 transition hover:text-[#109FD7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#109FD7] sm:right-6"
        >
          Contact Us
        </Link>
      )}
    </header>
  );
}
