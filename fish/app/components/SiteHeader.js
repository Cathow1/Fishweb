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

  return (
    <header className={`site-header ${isAtFishAction ? "site-header--collapsed" : ""} ${className}`}>
      <div
        className={`relative mx-auto max-w-6xl px-5 py-2 sm:px-8 lg:px-10 ${
          showContactLink ? "pr-16 sm:py-2 sm:pr-8" : ""
        } ${
          showHomeLink ? "flex flex-col" : ""
        }`}
      >
        <div className="site-header__brand">
          <Link
            href="/"
            aria-label="F.I.S.H. home"
            className="flex w-fit max-w-full flex-row items-center justify-start"
          >
            <FishLogo className="h-12 w-24 shrink-0 sm:h-16 sm:w-40" />
          </Link>
        </div>

        {showHomeLink && (
          <Link
            href="/"
            className="mt-2 self-end rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-[#8aa7c7] hover:text-[#315b8e] sm:absolute sm:right-8 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 lg:right-10"
          >
            Home
          </Link>
        )}
      </div>
      {showContactLink && (
        <Link
          href="/#contact"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-700 transition hover:text-[#315b8e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f5df9]"
        >
          Contact Us
        </Link>
      )}
    </header>
  );
}
