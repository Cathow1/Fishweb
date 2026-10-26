import Link from "next/link";
import FishLogo2 from "../components/FishLogo2";
import cobeImage from "../assets/cobe.jpeg";

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
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FishLogo2 className="h-16 w-40 shrink-0" 
            style={{ objectFit: "contain" }} 
            draggable={false}
            />
            <span className="text-lg font-semibold tracking-[0.25em] text-slate-700">
              Focus, Inspire, Share & Hook
            </span>
          </div>

        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Focus. Inspire. Share. Hook.
            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
              F.I.S.H
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Mark 1:17: &quot;Come, follow me, and I will show you how to fish for people&quot;
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/learn-more"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-500"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              {fishValues.map(({ letter, accent }) => (
                <div
                  key={letter}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <div className="text-3xl font-black text-sky-700">{letter}</div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
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
          className="mt-12 min-h-[120px] w-full text-lg leading-8 text-slate-700 outline-none transition focus:text-slate-900"
        >
          sample sample sample
        </p>
      </div>
    </main>
  );
}
