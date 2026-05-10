const keyFacts = [
  {
    label: "When",
    value: "Wednesday, January 14",
    detail: "4:00 PM - 8:30 PM",
  },
  {
    label: "Where",
    value: "Chapter Two's office",
    detail: "Stockholm, Sweden",
  },
  {
    label: "Hosted by",
    value: "Eric Zakariasson and Jonathan Ljungek",
    detail: "Cursor community event",
  },
];

const experienceHighlights = [
  {
    title: "Build alongside the team",
    description:
      "Spend the evening shipping your own idea while Cursor engineers circulate to answer questions and unblock experiments.",
  },
  {
    title: "Pilot something new",
    description:
      "The session is designed for hands-on feedback, so attendees get to try a new product direction while they build.",
  },
  {
    title: "Arrive ready to work",
    description:
      "Bring your laptop and get access to the tools, comped Cursor credits, and an environment tuned for focused making.",
  },
  {
    title: "Make it social",
    description:
      "Come solo or pair up with a friend or coworker, then settle in with food, drinks, and a room full of makers.",
  },
];

const eveningFlow = [
  {
    step: "01",
    title: "Show up with a project in mind",
    description:
      "Bring something you want to move forward, or decide what to build once you arrive at the venue.",
  },
  {
    step: "02",
    title: "Get set up in minutes",
    description:
      "The team provides credits, support, and access so the evening starts with momentum instead of setup overhead.",
  },
  {
    step: "03",
    title: "Build, compare notes, and share feedback",
    description:
      "Work independently or side by side, then swap ideas with other attendees and Cursor engineers throughout the night.",
  },
];

const attendeeChecklist = [
  "Bring a laptop and anything you need to work comfortably.",
  "Project idea optional - brainstorming on-site is encouraged too.",
  "Friends and coworkers are welcome as long as they sign up separately.",
  "Expect a small-group format, direct support, and a collaborative pace.",
];

const communityNotes = [
  {
    label: "Format",
    value: "Small-group build night",
  },
  {
    label: "Support",
    value: "Cursor engineers on-site",
  },
  {
    label: "Perks",
    value: "Credits, food, and drinks included",
  },
];

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-100/90">
      {children}
    </p>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_30%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.12),transparent_28%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a
            href="#hero"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200"
          >
            <span className="relative inline-flex h-3 w-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/45" />
              <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
            </span>
            build with cursor
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#details">
              Details
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#checklist">
              Checklist
            </a>
            <a
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10"
              href="https://luma.com/xynhlu71"
              target="_blank"
              rel="noreferrer"
            >
              Event page
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
        <section
          id="hero"
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Stockholm community event
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build with Cursor:
              <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                Stockholm
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A redesigned landing page for an in-person Cursor build night in
              Stockholm, created to feel equal parts polished, technical, and
              community-driven. The layout turns event details into a clear
              visual story with a stronger hero, richer supporting sections, and
              a more memorable review surface.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://luma.com/xynhlu71"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-cyan-100"
              >
                View event details
              </a>
              <a
                href="https://luma.com/cursorcommunity?k=c"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-300/50 hover:bg-violet-400/10"
              >
                Explore community events
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {communityNotes.map((note) => (
                <div
                  key={note.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_90px_rgba(15,23,42,0.35)]"
                >
                  <p className="text-sm text-slate-400">{note.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {note.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_40px_140px_rgba(2,6,23,0.72)]"
            id="details"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <SectionEyebrow>Event snapshot</SectionEyebrow>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  One evening to build, learn, and compare notes.
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Past event
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                    {fact.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{fact.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[28px] border border-cyan-300/15 bg-cyan-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
                Why it matters
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                The updated design replaces a generic placeholder with a full
                event landing page that can stand on its own in screenshots,
                demos, and review flows.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20" id="experience">
          <SectionEyebrow>What to expect</SectionEyebrow>
          <div className="mt-4 max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Designed around the energy of an in-person build night.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Every section focuses on the parts of the event attendees actually
              care about: what kind of room it is, how supported they will be,
              and why it is worth showing up with something to build.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {experienceHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_90px_rgba(15,23,42,0.35)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                  {item.title.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <SectionEyebrow>How the evening works</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              A simple flow, from arrival to feedback.
            </h2>

            <div className="mt-8 space-y-4">
              {eveningFlow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[30px] border border-white/10 bg-slate-950/55 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-300/25 bg-violet-400/10 text-sm font-semibold text-violet-100">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside
            className="rounded-[34px] border border-white/10 bg-slate-950/70 p-8 backdrop-blur"
            id="checklist"
          >
            <SectionEyebrow>Attendee checklist</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Everything needed for a smooth arrival.
            </h2>

            <ul className="mt-8 space-y-4">
              {attendeeChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-[26px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(168,85,247,0.16))] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
                Community-first
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-100/90">
                The new page balances practical event information with the
                atmosphere of a local Cursor gathering, so the final UI feels
                both useful and inviting.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-20">
          <div className="overflow-hidden rounded-[38px] border border-white/10 bg-slate-950/75 p-8 shadow-[0_35px_120px_rgba(2,6,23,0.6)]">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <SectionEyebrow>Stay close to the community</SectionEyebrow>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">
                  A stronger design makes the event memorable before anyone even
                  walks through the door.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  This version turns the app into a polished event surface that
                  is easy to review, easy to demo, and easy to capture in a
                  full-page screenshot for design verification.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="https://luma.com/cursorcommunity?k=c"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  Explore community events
                </a>
                <a
                  href="https://cursor.com/workshops/recording/cursor-for-designers"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-400/10"
                >
                  Watch Cursor for Designers
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
