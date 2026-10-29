import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import cobeImage from "./assets/cobe.jpeg";

const fishValues = [
  { letter: "F", accent: "Focus" },
  { letter: "I", accent: "Inspire" },
  { letter: "S", accent: "Share" },
  { letter: "H", accent: "Hook" },
];

export default function Home() {
  return (
    <main
      className="min-h-screen text-slate-800"
      style={{
        backgroundImage: `radial-gradient(ellipse at top, hsla(224, 75%, 28%, 0.28), transparent 38%), radial-gradient(ellipse 55% 75% at right center, hsla(224, 75%, 28%, 0.38), transparent 100%), linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 30%, rgba(255,255,255,0.42) 62%, rgba(255,255,255,0.12) 100%), url("${cobeImage.src}")`,
        backgroundSize: "auto, auto, auto, cover",
        backgroundPosition: "center, center, center, center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <SiteHeader className="mb-8 sm:mb-10" />

        <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-end gap-3 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="min-w-0">
            <p className="mb-3 text-[0.6rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#315b8e] sm:mb-4 sm:text-sm sm:tracking-[0.35em]">
              Focus. Inspire. Share. Hook.
            </p>

            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              F.I.S.H
            </h1>

            <p className="mt-3 flex max-w-xl gap-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              <span aria-hidden="true" className="w-1 shrink-0 rounded-full bg-[#315b8e]" />
              <span>
                Mark 1:17: &quot;Come, follow me, and I will show you how to fish for people&quot;
              </span>
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-4">
              <Link
                href="/learn-more"
                className="rounded-full bg-[linear-gradient(135deg,_#1f5df9_0%,_#284a9f_100%)] px-3 py-2.5 text-center text-xs font-semibold text-white shadow-lg shadow-[#315b8e]/20 transition hover:brightness-110 sm:px-6 sm:py-3 sm:text-sm"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 bg-white px-3 py-2.5 text-center text-xs font-semibold text-slate-700 transition hover:border-[#8aa7c7] hover:text-[#315b8e] sm:px-6 sm:py-3 sm:text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/75 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {fishValues.map(({ letter, accent }) => (
                <div
                  key={letter}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center sm:rounded-2xl sm:p-4"
                >
                  <div className="text-3xl font-black text-[#315b8e]">{letter}</div>
                  <div className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.2em]">
                    {accent}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <p
          contentEditable
          suppressContentEditableWarning
          aria-label="Editable Focus content area"
          className="mt-8 min-h-[120px] w-full text-base leading-7 text-slate-700 outline-none transition focus:text-slate-900 sm:mt-12 sm:text-lg sm:leading-8"
        >
          sample sample sample
        </p>
      </div>
    </main>
  );
}
