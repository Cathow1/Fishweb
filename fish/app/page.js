import Link from "next/link";
import FishLogo from "./components/FishLogo";
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
        backgroundImage: `radial-gradient(circle at top, rgba(56,189,248,0.2), transparent 30%), linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 30%, rgba(255,255,255,0.42) 62%, rgba(255,255,255,0.12) 100%), url("${cobeImage.src}")`,
        backgroundSize: "auto, auto, cover",
        backgroundPosition: "center, center, center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-12 lg:px-10">
        <header className="mb-8 flex flex-col items-start gap-3 sm:mb-10 sm:flex-row sm:items-center">
          <div className="flex w-full items-center gap-2 sm:gap-3">
            <FishLogo
              className="h-14 w-32 shrink-0 sm:h-16 sm:w-40"
              style={{ objectFit: "contain" }}
              draggable={false}
            />
            <span className="min-w-0 text-sm font-semibold tracking-[0.1em] text-slate-700 sm:text-lg sm:tracking-[0.25em]">
              Focus, Inspire, Share & Hook
            </span>
          </div>

        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-sm sm:tracking-[0.35em]">
              Focus. Inspire. Share. Hook.
            </p>

            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
              F.I.S.H
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Mark 1:17: &quot;Come, follow me, and I will show you how to fish for people&quot;
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/learn-more"
                className="rounded-full bg-sky-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-500 sm:w-auto"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 sm:w-auto"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white/75 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {fishValues.map(({ letter, accent }) => (
                <div
                  key={letter}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center sm:p-4"
                >
                  <div className="text-3xl font-black text-sky-700">{letter}</div>
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
