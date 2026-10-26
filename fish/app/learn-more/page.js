"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [selectedPillar, setSelectedPillar] = useState(pillars[0]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),_transparent_30%),linear-gradient(135deg,#f0fdf4_0%,#ecfeff_42%,#f8fafc_100%)] text-slate-800">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10">
        <header className="mb-8 flex items-start justify-between gap-3 sm:mb-10 sm:items-center sm:gap-6">
          <div className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-3">
            <FishLogo className="h-14 w-32 shrink-0 sm:h-16 sm:w-40" />
            <span className="text-xs font-semibold tracking-[0.1em] text-slate-700 sm:text-lg sm:tracking-[0.25em]">
              Focus, Inspire, Share & Hook
            </span>
          </div>

          <Link
            href="/"
            className="shrink-0 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-300 hover:text-sky-700"
          >
            Home
          </Link>
        </header>

        <section className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-3 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="min-w-0">
            <p className="mb-3 text-[0.6rem] font-semibold uppercase leading-5 tracking-[0.12em] text-sky-700 sm:mb-4 sm:text-sm sm:tracking-[0.35em]">
              A Christian ministry for growth in Christ
            </p>

            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {selectedPillar.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              {selectedPillar.text}
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:mt-8 sm:gap-3 lg:flex-row lg:flex-wrap lg:gap-4">
              <Link
                href="/"
                className="rounded-full bg-sky-600 px-2 py-3 text-center text-xs font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-500 sm:px-6 sm:text-sm"
              >
                Back Home
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-200 bg-white px-2 py-3 text-center text-xs font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 sm:px-6 sm:text-sm"
              >
                Join the Journey
              </Link>
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white/75 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
            <div className="mb-3 text-center sm:mb-6">
              <FishLogo className="mx-auto h-14 w-28 sm:h-28 sm:w-56" />
            </div>

            <div className="grid gap-3">
              {pillars.map((pillar) => (
                <button
                  key={pillar.title}
                  type="button"
                  aria-pressed={selectedPillar.title === pillar.title}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`relative w-full rounded-xl border p-2 text-left transition duration-200 ease-out hover:z-10 hover:border-sky-300 hover:bg-sky-100 hover:shadow-lg md:hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 motion-reduce:transition-none sm:rounded-2xl sm:p-4 ${
                    selectedPillar.title === pillar.title
                      ? "border-sky-300 bg-sky-100 shadow-md"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-sky-700 sm:text-sm sm:tracking-[0.2em]">
                    {pillar.title}
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">{pillar.text}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 sm:mt-14">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-sm sm:tracking-[0.35em]">
              Our mission
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Grow with Christ. Learn. Share. Lead.
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/75 p-5 shadow-sm sm:rounded-[2rem] sm:p-6">
              <div className="mb-4 text-xl font-black text-sky-700">1. Grow</div>
              <p className="text-slate-600 leading-7">
                (sample sample sample0)
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white/75 p-5 shadow-sm sm:rounded-[2rem] sm:p-6">
              <div className="mb-4 text-xl font-black text-sky-700">2. Learn</div>
              <p className="text-slate-600 leading-7">
               (sample sample sample)
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white/75 p-5 shadow-sm sm:rounded-[2rem] sm:p-6">
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
