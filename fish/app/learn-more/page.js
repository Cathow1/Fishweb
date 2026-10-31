"use client";

import Link from "next/link";
import { useState } from "react";
import FishLogo from "../components/FishLogo";
import SiteHeader from "../components/SiteHeader";

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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_hsla(224,80%,51%,0.12),_transparent_30%),linear-gradient(135deg,#f1f5f9_0%,#e8eef6_42%,#f8fafc_100%)] text-slate-800">
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8 sm:pb-12 lg:px-10">
        <SiteHeader
          showHomeLink
          className="mb-4 rounded-xl bg-white/90 px-3 py-2 shadow-sm sm:mb-5 sm:px-5 sm:py-3"
        />

        <section className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-3 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="min-w-0">
            <p className="mb-3 text-[0.6rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#315b8e] sm:mb-4 sm:text-sm sm:tracking-[0.35em]">
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
                className="rounded-full bg-[linear-gradient(135deg,_#1f5df9_0%,_#284a9f_100%)] px-2 py-3 text-center text-xs font-semibold text-white shadow-lg shadow-[#315b8e]/20 transition hover:brightness-110 sm:px-6 sm:text-sm"
              >
                Back Home
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border border-slate-200 bg-white px-2 py-3 text-center text-xs font-semibold text-slate-700 transition hover:border-[#8aa7c7] hover:text-[#315b8e] sm:px-6 sm:text-sm"
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
                  className={`relative w-full rounded-xl border p-2 text-left transition duration-200 ease-out hover:z-10 hover:border-[#8aa7c7] hover:bg-[#eaf1ff] hover:shadow-lg md:hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f5df9] motion-reduce:transition-none sm:rounded-2xl sm:p-4 ${
                    selectedPillar.title === pillar.title
                      ? "border-[#8aa7c7] bg-[#eaf1ff] shadow-md"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-[#315b8e] sm:text-sm sm:tracking-[0.2em]">
                    {pillar.title}
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">{pillar.text}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
