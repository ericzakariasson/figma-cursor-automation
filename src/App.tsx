const eventTypes = [
  "FILE_UPDATE",
  "FILE_DELETE",
  "FILE_VERSION_UPDATE",
  "FILE_COMMENT",
  "LIBRARY_PUBLISH",
  "DEV_MODE_STATUS_UPDATE",
];

const steps = [
  {
    number: "01",
    title: "Register a webhook",
    description:
      "Connect a Figma team, project, or file to an endpoint with a single CLI flow.",
  },
  {
    number: "02",
    title: "Receive design events",
    description:
      "Capture live updates such as FILE_UPDATE and LIBRARY_PUBLISH the moment they happen.",
  },
  {
    number: "03",
    title: "Automate the code path",
    description:
      "Hand the payload to Cursor so the right code change lands in your repository without guesswork.",
  },
];

const highlights = [
  {
    value: "< 60s",
    label: "From webhook creation to local preview",
  },
  {
    value: "3",
    label: "Commands to get the workflow running",
  },
  {
    value: "6",
    label: "Event types already supported by the CLI",
  },
];

const quickStart = ["npm install", "npm run create-webhook", "npm run dev"];

const capabilities = [
  "Interactive team, project, and file selection",
  "Generated or user-provided webhook passcodes",
  "Figma REST API integration for projects and files",
  "A Vite-powered preview surface for design-driven iteration",
];

function EventBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 font-mono text-xs tracking-wide text-violet-200">
      {label}
    </span>
  );
}

function HighlightCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.35)]">
      <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.3)]">
      <p className="font-mono text-sm tracking-[0.24em] text-violet-300">
        {number}
      </p>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}

function CapabilityItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
      <span className="text-sm leading-7 text-slate-300">{text}</span>
    </li>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_24%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-slate-200 uppercase"
          >
            <span className="relative inline-flex h-3 w-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
              <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
            </span>
            figma x cursor
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#workflow">
              Workflow
            </a>
            <a className="transition hover:text-white" href="#events">
              Events
            </a>
            <a className="transition hover:text-white" href="#setup">
              Setup
            </a>
            <a
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:border-violet-400/40 hover:bg-violet-400/10"
              href="https://github.com/ericzakariasson/figma-cursor-automation"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="pb-20">
        <section id="hero" className="mx-auto max-w-6xl px-6 pt-20 sm:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-slate-300 uppercase">
                <span className="h-2 w-2 rounded-full bg-violet-300" />
                FILE_UPDATE ready
              </span>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Design changes.
                <span className="mt-2 block bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  Code follows.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Turn Figma webhooks into a polished development loop. Register a
                file, receive updates instantly, and let Cursor keep the UI in
                sync while you review the result in a live preview.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#setup"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-slate-100"
                >
                  Get started
                </a>
                <a
                  href="#workflow"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-300/40 hover:bg-violet-400/10"
                >
                  Explore the workflow
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <EventBadge label="figma webhook" />
                <EventBadge label="cursor automation" />
                <EventBadge label="vite preview" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-8 right-0 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_40px_120px_rgba(2,6,23,0.75)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-medium text-white">Live payload</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Cursor Automation / FILE_UPDATE
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    connected
                  </span>
                </div>

                <div className="mt-6 space-y-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">file</span>
                    <span className="font-medium text-white">
                      Cursor Automation
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">event</span>
                    <span className="font-mono text-violet-200">FILE_UPDATE</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">protocol</span>
                    <span className="font-mono text-slate-200">v2</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">automation</span>
                    <span className="text-cyan-200">preview and verify</span>
                  </div>
                </div>

                <div className="mt-6 rounded-[28px] border border-white/10 bg-[#0b1225] p-5">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                    <span className="rounded-full bg-violet-400/15 px-3 py-1 text-violet-200">
                      pipeline
                    </span>
                    active
                  </div>

                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-slate-200">
                      FILE_UPDATE
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-violet-400/70 to-cyan-400/70 sm:h-[1px]" />
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-slate-200">
                      cursor apply
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/70 to-emerald-400/70 sm:h-[1px]" />
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-slate-200">
                      screenshot verify
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {highlights.map((highlight) => (
              <HighlightCard
                key={highlight.label}
                value={highlight.value}
                label={highlight.label}
              />
            ))}
          </div>
        </section>

        <div className="mx-auto mt-20 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <section id="workflow" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-200">
              Workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A clean handoff from design updates to implementation.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The repository already knows how to create Figma webhooks. This
              interface reframes that capability as a focused product flow: wire
              the event, receive the payload, and verify the rendered result.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        <section
          id="events"
          className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-[1fr_0.95fr]"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_35px_110px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">
              Supported events
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Ready for the moments that change a UI.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Every event exposed by the webhook creator is reflected here so
              the product reads like a reliable developer tool rather than a
              placeholder screen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {eventTypes.map((eventType) => (
                <EventBadge key={eventType} label={eventType} />
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/85 p-8 shadow-[0_35px_110px_rgba(15,23,42,0.55)]">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-200">
              What ships in the repo
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Built around the existing CLI and file webhook flow.
            </h2>

            <ul className="mt-8 space-y-4">
              {capabilities.map((capability) => (
                <CapabilityItem key={capability} text={capability} />
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <section
          id="setup"
          className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_35px_110px_rgba(15,23,42,0.55)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-200">
                  Quick start
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  Launch the preview in three commands.
                </h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-300">
                terminal
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1020]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-4 px-5 py-6 font-mono text-sm text-slate-200">
                {quickStart.map((command) => (
                  <div
                    key={command}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="text-violet-200">$</span>
                    <span>{command}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_35px_110px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">
              Why this redesign
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              The interface now matches the tooling story.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Instead of a single title on a blank screen, the app now explains
              the Figma-to-Cursor workflow with structure, depth, and a clearer
              visual hierarchy. It reads like a finished product page while
              staying easy to maintain in a single component.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm font-medium text-white">Context aware</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Uses the actual webhook vocabulary already present in the
                  repository.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm font-medium text-white">Preview focused</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Optimized for quick screenshot verification on a running Vite
                  server.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-violet-400/20 bg-violet-400/10 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-100">
                Implementation note
              </p>
              <p className="mt-3 text-sm leading-7 text-violet-50/85">
                No extra runtime dependencies were needed. The redesign stays
                inside React, Tailwind, and the existing project structure.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Built for the Figma to Cursor automation workflow.</p>
          <a
            href="https://github.com/ericzakariasson/figma-cursor-automation"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-200 transition hover:text-white"
          >
            ericzakariasson/figma-cursor-automation
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
