import Link from "next/link";
import FishLogo from "../components/FishLogo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_32%),linear-gradient(135deg,#f0fdf4_0%,#ecfeff_45%,#f8fafc_100%)] text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-12 lg:px-10">
        <header className="mb-14 flex items-center justify-between gap-6">
          <Link href="/" aria-label="F.I.S.H. home">
            <FishLogo className="h-16 w-40 shrink-0" />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-300 hover:text-sky-700"
          >
            Home
          </Link>
        </header>

        <section className="mx-auto grid max-w-3xl gap-8">
          <div className="pt-2 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
              Let’s connect
            </p>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
              We’d love to hear from you.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Whether you have a question, a story to share, or want to learn
              more about F.I.S.H., this is a good place to start.
            </p>

          </div>

          <section
            aria-labelledby="contact-details-heading"
            className="w-full rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-sm sm:p-9"
          >
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
                Contact details
              </p>
              <h2
                id="contact-details-heading"
                className="mt-3 text-2xl font-black text-slate-900"
              >
                Contacts
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Contact information for F.I.S.H.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-sky-50 text-xs uppercase tracking-[0.15em] text-sky-800">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-bold">
                      Contact
                    </th>
                    <th scope="col" className="px-5 py-4 font-bold">
                      Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-100">
                    <th
                      scope="row"
                      className="px-5 py-5 font-semibold text-slate-800"
                    >
                      F.I.S.H.
                    </th>
                    <td className="px-5 py-5 text-slate-600">
                      numbere sanmple
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <footer className="mt-14 border-t border-slate-200/80 pt-6 text-center text-sm text-slate-500">
          Focus, Inspire, Share &amp; Hook
        </footer>
      </div>
    </main>
  );
}