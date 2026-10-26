import Link from "next/link";
import FishLogo from "../components/FishLogo";

const pillars = [
  {
    title: "Focus",
    text: "(sample sapmple sample)",
  },
  {
    title: "Inspire",
    text: "(sample sample sample)",
  },
  {
    title: "Share",
    text: "(sample sample sample)",
  },
  {
    title: "Hook",
    text: "(sample sample sample)",
  },
];

export default function LearnMorePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),_transparent_30%),linear-gradient(135deg,#f0fdf4_0%,#ecfeff_42%,#f8fafc_100%)] text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FishLogo className="h-16 w-40 shrink-0" />
            <span className="text-lg font-semibold tracking-[0.25em] text-slate-700">
              Focus, Inspire, Share & Hook
            </span>
          </div>

          <Link
            href="/"
            className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-300 hover:text-sky-700"
          >
            Home
          </Link>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              A Christian ministry for growth in Christ
            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
              Focus
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Focus is a ministry for Christians who want to grow with Christ, learn deeper truths from His Word, and become fishers of people by sharing the hope of the Gospel with love and purpose.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-500"
              >
                Back Home
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
              >
                Join the Journey
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="mb-6 text-center">
              <FishLogo className="mx-auto h-28 w-56" />
            </div>

            <div className="grid gap-3">
              {pillars.map(({ title, text }) => (
                <div
                  key={title}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-200 ease-out hover:z-10 hover:scale-105 hover:border-sky-300 hover:bg-sky-100 hover:shadow-lg motion-reduce:transition-none"
                >
                  <div className="text-sm font-black uppercase tracking-[0.2em] text-sky-700">
                    {title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700">
              Our mission
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Grow with Christ. Learn. Share. Lead.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-sm">
              <div className="mb-4 text-xl font-black text-sky-700">1. Grow</div>
              <p className="text-slate-600 leading-7">
                (sample sample sample0)
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-sm">
              <div className="mb-4 text-xl font-black text-sky-700">2. Learn</div>
              <p className="text-slate-600 leading-7">
               (sample sample sample)
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/75 p-6 shadow-sm">
              <div className="mb-4 text-xl font-black text-sky-700">3. Fish</div>
              <p className="text-slate-600 leading-7">
                (sample sapmple sample)
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
