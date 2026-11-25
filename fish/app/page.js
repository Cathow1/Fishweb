import LogoFlash from "./components/LogoFlash";
import SiteHeader from "./components/SiteHeader";
import VerseHighlight from "./components/VerseHighlight";
import fishPeeps from "./assets/Hook peps.jpg";

const fishValues = [
  { letter: "F", accent: "Focus" },
  { letter: "I", accent: "Inspire" },
  { letter: "S", accent: "Share" },
  { letter: "H", accent: "Hook" },
];

export default function Home() {
  const fishPeepsBackgroundStyle = {
    backgroundImage: `url("${fishPeeps.src}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <LogoFlash />
      <main id="top" className="min-h-screen bg-slate-50 text-slate-800">
        <div className="sticky top-0 z-50 px-5 pt-0 sm:px-8 sm:pt-0 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <SiteHeader
              showContactLink
              collapseAtFishAction
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="overflow-x-clip">

        <div
          className="relative w-full overflow-hidden bg-cover bg-[center_45%]"
          style={{ ...fishPeepsBackgroundStyle, minHeight: "18rem" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-slate-900/10" />
          <div className="relative mx-auto flex min-h-[18rem] max-w-6xl items-end px-5 pb-6 sm:px-8 sm:pb-8 lg:px-10">
            <p className="flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:gap-3 sm:text-sm sm:tracking-[0.28em]">
              <span aria-hidden="true" className="h-8 w-px bg-white/80 sm:h-10" />
              <span>Faith • Community • Purpose</span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-6 sm:px-8 sm:pb-8 lg:px-10">
          <section
            id="fish-values"
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,9.5rem)] items-start gap-3 border-b border-slate-200 pt-7 pb-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,13rem)] sm:items-center sm:gap-8 sm:py-16 md:grid-cols-2 md:gap-10 lg:px-8"
          >
            <div className="min-w-0 text-left">
              <p className="flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-[#109FD7] sm:gap-3 sm:text-sm sm:tracking-[0.2em]">
                <span aria-hidden="true" className="h-px w-5 bg-[#109FD7] sm:w-10" />
                <span>Welcome sons of God</span>
              </p>
              <h1 className="m-0 mt-4 text-[2.75rem] font-black leading-[0.95] tracking-tight text-[#109FD7] sm:mt-5 sm:text-7xl lg:text-8xl">
                F.I.S.H
              </h1>
              <p className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:mt-2 sm:text-5xl lg:text-6xl">
                Ministry
              </p>
              <VerseHighlight className="mt-5 max-w-xl text-left sm:mt-8">
                <span aria-hidden="true" className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-[#109FD7] sm:w-1" />
                <div>
                  <p className="text-[0.68rem] leading-4 text-slate-700 sm:text-lg sm:leading-8">
                    &quot;Come, follow me, and I will show you how to fish for people.&quot;
                  </p>
                  <p className="mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-slate-900 sm:mt-3 sm:text-sm sm:tracking-[0.18em]">
                    Mark 1:17
                  </p>
                </div>
              </VerseHighlight>
            </div>

            <div className="mt-5 w-full min-w-0 sm:mt-0 md:mx-auto md:max-w-md">
              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-5">
                {fishValues.map(({ letter, accent }) => (
                  <a
                    key={letter}
                    href={`#fish-action-${letter.toLowerCase()}`}
                    className="group flex min-h-[4.75rem] flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-3 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#109FD7]/35 hover:shadow-[0_10px_24px_rgba(16,159,215,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#109FD7] sm:min-h-32 sm:rounded-xl sm:px-4 sm:py-6 md:min-h-36"
                  >
                    <div className="text-2xl font-black text-[#109FD7] sm:text-4xl md:text-5xl">{letter}</div>
                    <div className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.14em] text-slate-500 transition duration-200 group-hover:text-[#109FD7] sm:mt-3 sm:text-xs sm:tracking-[0.2em] md:text-sm">
                      {accent}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b-2 border-slate-900/80 py-8 text-center sm:py-14 max-sm:mx-1 max-sm:mt-4 max-sm:px-4 max-sm:py-6">
            <h2 className="text-2xl font-medium tracking-[0.08em] text-slate-900 sm:text-5xl">
              ABOUT US
            </h2>
            <div className="mx-auto mt-4 max-w-3xl space-y-5 rounded-xl px-4 py-3 text-center text-sm leading-6 text-slate-700 sm:mt-7 sm:space-y-8 sm:text-lg sm:leading-8">
              <div className="space-y-3">
                <h3 className="text-center text-lg font-semibold text-slate-900 sm:text-2xl">Sample</h3>
                <p>sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-center text-lg font-semibold text-slate-900 sm:text-2xl">Sample 2</h3>
                <p>sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-center text-lg font-semibold text-slate-900 sm:text-2xl">Sample 3</h3>
                <p>sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample</p>
              </div>
            </div>
          </section>

          <section id="fish-in-action" className="scroll-mt-24 py-8 sm:py-14">
            <h2 className="text-center text-2xl font-medium tracking-[0.08em] text-slate-900 sm:text-5xl">
              F.I.S.H. in Action
            </h2>
            <div className="mt-6 grid grid-cols-4 gap-2 sm:mt-10 sm:gap-4">
              {fishValues.map(({ letter, accent }) => (
                <article
                  key={letter}
                  id={`fish-action-${letter.toLowerCase()}`}
                  className="liquid-glass scroll-mt-28 relative overflow-hidden rounded-2xl border p-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_20px_rgba(16,159,215,0.12)] backdrop-blur-md sm:p-6"
                >
                  <div className="pointer-events-none absolute -left-6 -top-8 h-16 w-24 rotate-12 rounded-full bg-white/60 blur-xl" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent" />
                  <div className="relative">
                    <div className="text-2xl font-black text-[#109FD7] drop-shadow-sm sm:text-4xl">{letter}</div>
                    <div className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-slate-700 sm:mt-2 sm:text-sm sm:tracking-[0.18em]">{accent}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="border-t-2 border-slate-900/80 px-3 py-4 text-center sm:px-6 sm:py-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#109FD7] sm:text-sm sm:tracking-[0.3em]">
              Let&apos;s connect
            </p>
            <h2
              id="contact-heading"
              className="mt-1 text-xl font-black tracking-tight text-slate-900 sm:text-3xl"
            >
              We&apos;d love to hear from you.
            </h2>
            <p className="mx-auto mt-1 max-w-lg text-xs leading-4 text-slate-600 sm:text-sm sm:leading-5">
              Whether you have a question, a story to share, or want to learn
              more about F.I.S.H., this is a good place to start.
            </p>

            <div className="liquid-glass relative mx-auto mt-3 w-full max-w-xl overflow-hidden rounded-xl border p-2.5 shadow-[0_8px_32px_rgba(16,159,215,0.18)] ring-1 backdrop-blur-xl sm:rounded-2xl sm:p-4">
              <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-40 rotate-12 rounded-full bg-white/60 blur-2xl" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent" />
              <div className="relative">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#109FD7] sm:text-xs sm:tracking-[0.25em]">
                  Contact details
                </p>
                <h3 className="mt-0.5 text-lg font-black text-slate-900">
                  Contacts
                </h3>
                <p className="mt-0.5 text-[0.7rem] leading-4 text-slate-600">
                  Contact information for F.I.S.H.
                </p>

                <div className="liquid-glass relative mx-auto mt-2 w-full min-w-0 max-w-[16rem] overflow-hidden rounded-lg border shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_16px_rgba(16,159,215,0.1)] backdrop-blur-md">
                  <table className="relative w-full table-fixed text-left text-[0.65rem]">
                    <thead className="liquid-glass text-[0.6rem] uppercase tracking-[0.12em] text-[#109FD7]">
                      <tr>
                        <th scope="col" className="w-2/5 break-words px-2.5 py-2 font-bold">
                          Contact
                        </th>
                        <th scope="col" className="break-words px-2.5 py-2 font-bold">
                          Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="liquid-glass border-t">
                        <th
                          scope="row"
                          className="min-w-0 break-words px-2.5 py-2 font-semibold text-slate-800"
                        >
                          F.I.S.H.
                        </th>
                        <td className="min-w-0 break-words px-2.5 py-2 text-slate-700">
                          tawagi si achi aleah
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-slate-200/80 py-5 text-center text-sm text-slate-500">
            Focus, Inspire, Share &amp; Hook
          </footer>
        </div>
        </div>
      </main>
    </>
  );
}
