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
      className="min-h-screen overflow-x-clip text-slate-800"
      style={{
        backgroundImage: `radial-gradient(ellipse at top, hsla(224, 75%, 28%, 0.28), transparent 38%), radial-gradient(ellipse 55% 75% at right center, hsla(224, 75%, 28%, 0.38), transparent 100%), linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 30%, rgba(255,255,255,0.42) 62%, rgba(255,255,255,0.12) 100%), url("${cobeImage.src}")`,
        backgroundSize: "auto, auto, auto, cover",
        backgroundPosition: "center, center, center, center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 pb-6 sm:px-8 sm:pb-8 lg:px-10">
        <SiteHeader
          showContactLink
          collapseAtFishAction
          className="mb-4 rounded-xl bg-white/90 px-3 py-2 shadow-sm sm:mb-5 sm:px-5 sm:py-3"
        />

        <section
          id="fish-values"
          className="grid items-center gap-6 border-y-2 border-slate-900/80 py-10 sm:gap-10 sm:py-14 md:grid-cols-2 lg:px-16 max-sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-sm:gap-3 max-sm:py-6"
        >
          <div className="min-w-0 text-left">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              F.I.S.H
              <br />
              Ministry
            </h1>
            <p className="mx-auto mt-5 flex max-w-xl items-start gap-3 text-left text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 md:mx-0">
              <span aria-hidden="true" className="w-1 shrink-0 self-stretch rounded-full bg-[#315b8e]" />
              <span>
                Mark 1:17: &quot;Come, follow me, and I will show you how to fish for people&quot;
              </span>
            </p>
          </div>

          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white/75 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:rounded-[2rem] sm:p-5 max-sm:mx-0 max-sm:justify-self-end max-sm:rounded-xl max-sm:p-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-sm:gap-1.5">
              {fishValues.map(({ letter, accent }) => (
                <div
                  key={letter}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center sm:rounded-2xl sm:p-5 max-sm:rounded-lg max-sm:px-1 max-sm:py-2"
                >
                  <div className="text-3xl font-black text-[#315b8e] sm:text-4xl max-sm:text-xl">{letter}</div>
                  <div className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-slate-500 sm:mt-2 sm:text-xs sm:tracking-[0.2em] max-sm:mt-0.5 max-sm:text-[0.45rem] max-sm:tracking-[0.08em]">
                    {accent}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b-2 border-slate-900/80 py-10 text-center sm:py-14 max-sm:mx-1 max-sm:mt-4 max-sm:px-4 max-sm:py-6">
          <h2 className="text-3xl font-medium tracking-[0.08em] text-slate-900 sm:text-5xl">
            ABOUT US
          </h2>
          <p className="mx-auto mt-5 min-h-[72px] max-w-3xl rounded-xl px-4 py-3 text-base leading-7 text-slate-700 sm:mt-7 sm:text-lg sm:leading-8">
            sample sample sample
          </p>
        </section>

        <nav aria-label="Explore F.I.S.H" className="grid gap-3 py-6 sm:gap-4 sm:py-8">
          <Link
            href="/learn-more"
            className="flex min-h-28 items-center justify-center rounded-xl border border-[#315b8e]/70 bg-white/75 px-5 py-6 text-center text-sm font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:border-[#315b8e] hover:bg-[#eaf1ff] hover:text-[#315b8e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f5df9] sm:min-h-36 sm:text-base"
          >
            About Us
          </Link>
          <Link
            id="fish-in-action"
            href="#fish-values"
            className="flex min-h-28 scroll-mt-24 items-center justify-center rounded-xl border border-[#315b8e]/70 bg-white/75 px-5 py-6 text-center text-sm font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:border-[#315b8e] hover:bg-[#eaf1ff] hover:text-[#315b8e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f5df9] sm:min-h-36 sm:text-base"
          >
            F.I.S.H in Action
          </Link>
        </nav>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="border-t-2 border-slate-900/80 px-3 py-4 text-center sm:px-6 sm:py-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#315b8e] sm:text-sm sm:tracking-[0.3em]">
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

          <div className="mx-auto mt-3 w-full max-w-xl rounded-xl border border-white/70 bg-white/65 p-2.5 shadow-sm backdrop-blur-sm sm:p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#315b8e] sm:text-xs sm:tracking-[0.25em]">
              Contact details
            </p>
            <h3 className="mt-0.5 text-lg font-black text-slate-900">
              Contacts
            </h3>
            <p className="mt-0.5 text-[0.7rem] leading-4 text-slate-600">
              Contact information for F.I.S.H.
            </p>

            <div className="mx-auto mt-2 w-full min-w-0 max-w-[16rem] overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full table-fixed text-left text-[0.65rem]">
                <thead className="bg-[#eaf1ff] text-[0.6rem] uppercase tracking-[0.12em] text-[#284a9f]">
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
                  <tr className="border-t border-slate-100">
                    <th
                      scope="row"
                      className="min-w-0 break-words px-2.5 py-2 font-semibold text-slate-800"
                    >
                      F.I.S.H.
                    </th>
                    <td className="min-w-0 break-words px-2.5 py-2 text-slate-600">
                      tawagi si achi aleah
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200/80 py-5 text-center text-sm text-slate-500">
          Focus, Inspire, Share &amp; Hook
        </footer>
      </div>
    </main>
  );
}
