import Link from "next/link";
import FishLogo from "./FishLogo";

export default function SiteHeader({ showHomeLink = false, className = "" }) {
  return (
    <header className={`site-header ${className}`}>
      <div
        className={`relative mx-auto max-w-6xl px-5 py-2 sm:px-8 lg:px-10 ${
          showHomeLink ? "flex flex-col" : ""
        }`}
      >
        <Link
          href="/"
          aria-label="F.I.S.H. home"
          className="mx-auto flex w-fit max-w-full flex-row items-center justify-center gap-2 text-center sm:gap-3"
        >
          <FishLogo className="h-12 w-24 shrink-0 sm:h-16 sm:w-40" />
          <span className="whitespace-nowrap text-[0.6rem] font-semibold tracking-[0.08em] text-slate-700 sm:text-lg sm:tracking-[0.25em]">
            Focus, Inspire, Share &amp; Hook
          </span>
        </Link>

        {showHomeLink && (
          <Link
            href="/"
            className="mt-2 self-end rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-[#8aa7c7] hover:text-[#315b8e] sm:absolute sm:right-8 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 lg:right-10"
          >
            Home
          </Link>
        )}
      </div>
    </header>
  );
}
