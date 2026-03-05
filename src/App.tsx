const highlights = [
  {
    label: "Trigger",
    value: "FILE_UPDATE",
    detail: "Ship only when the design meaningfully changes.",
  },
  {
    label: "Verification",
    value: "Screenshot-ready",
    detail: "Review the implementation visually before you open a PR.",
  },
  {
    label: "Delivery",
    value: "Code to PR",
    detail: "Keep implementation, validation, and release in one loop.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Filter the noise",
    description:
      "Ignore PING events automatically and reserve the workflow for real design updates.",
  },
  {
    step: "02",
    title: "Translate the design",
    description:
      "Convert the updated visual direction into responsive React layouts, cards, and hierarchy.",
  },
  {
    step: "03",
    title: "Verify locally",
    description:
      "Run the app, inspect the refreshed screen, and capture a screenshot for review.",
  },
  {
    step: "04",
    title: "Open the release",
    description:
      "Commit the implementation and send it out as a pull request while context is still fresh.",
  },
];

const designFoundations = [
  {
    title: "Layered hero",
    description:
      "A bold headline, compact badges, and deep gradients replace the previous placeholder splash screen.",
  },
  {
    title: "Operational side panel",
    description:
      "The right column makes the design-to-code process visible through stages, payloads, and status.",
  },
  {
    title: "Review-friendly sections",
    description:
      "Structured content blocks keep the page easy to scan in screenshots and during pull request review.",
  },
];

const checklist = [
  "Meaningful FILE_UPDATE event received",
  "PING keepalive events excluded from the workflow",
  "Responsive layout implemented with polished styling",
  "Preview prepared for visual verification",
  "Ready to commit, push, and open a pull request",
];

const payloadPreview = `{
  "event_type": "FILE_UPDATE",
  "file_name": "Cursor Automation",
  "protocol_version": "2",
  "passcode": "[stored securely]",
  "action": "implement -> verify -> open_pr"
}`;

function App() {
  return (
    <main className="relative text-slate-100" id="main-content">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_24%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.10),_transparent_28%)]"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10">
              <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Cursor Automation</p>
              <p className="text-sm text-slate-400">
                A cleaner handoff from design changes to reviewed code.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 font-medium text-emerald-200">
              FILE_UPDATE active
            </span>
            <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-slate-300">
              PING events ignored
            </span>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur lg:min-h-[34rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Design changes, verified
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Turn a Figma webhook into a polished release surface.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The interface has been redesigned from a single placeholder heading
              into a high-contrast dashboard with layered cards, clearer
              hierarchy, and a workflow that highlights how design updates move
              from signal to screenshot to pull request.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                href="#verification"
              >
                Review verification flow
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                href="#payload"
              >
                Inspect payload preview
              </a>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-slate-950/55 p-5"
                >
                  <dt className="text-sm font-medium text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="mt-3 text-xl font-semibold text-white">
                    {item.value}
                  </dd>
                  <dd className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="rounded-[32px] border border-white/10 bg-slate-950/65 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur"
            id="verification"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-cyan-100">
                  Latest automation run
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Ready for local visual verification
                </h2>
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Live
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/85 p-5"
              id="payload"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">
                  Webhook payload preview
                </p>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  sanitized
                </span>
              </div>

              <pre className="mt-4 overflow-x-auto text-sm leading-7 text-slate-300">
                <code>{payloadPreview}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-medium text-cyan-100">
              Refreshed design system
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Everything the new direction needed
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {designFoundations.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/55 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[32px] border border-white/10 bg-slate-950/65 p-8 backdrop-blur">
            <p className="text-sm font-medium text-cyan-100">Release checklist</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Built for clean handoff
            </h2>

            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-200">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-3xl border border-cyan-300/15 bg-cyan-400/10 p-5">
              <p className="text-sm font-semibold text-white">
                Why this feels like a real product screen now
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Instead of a placeholder title on a flat background, the page now
                communicates state, process, and readiness in a way that is easy
                to compare in screenshots and easy to review in code.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
