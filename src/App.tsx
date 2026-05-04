import type { CSSProperties } from "react"

import {
  ArrowRight,
  BookOpenText,
  Bot,
  BriefcaseBusiness,
  ExternalLink,
  MessagesSquare,
  Network,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

import portrait from "./assets/alexander-fenin.jpeg"
import "./App.css"

type InsightBlock = {
  title: string
  body: string
  icon: LucideIcon
}

type SystemStep = {
  index: string
  title: string
  body: string
}

type CaseBlock = {
  label: string
  title: string
  body: string
}

type Article = {
  title: string
  href: string
  note: string
}

const reveal = (delay: number): CSSProperties =>
  ({ ["--delay" as string]: `${delay}ms` }) as CSSProperties

const painPoints: InsightBlock[] = [
  {
    title: "Research becomes an interruption channel",
    body: "Instead of shaping decisions systematically, the function gets pulled into urgent one-off questions, reactive calls, and last-minute narrative support for stakeholders.",
    icon: MessagesSquare,
  },
  {
    title: "Evidence is scattered across tools and owners",
    body: "Plans, interviews, support tickets, CRM notes, decks, transcripts, and chat fragments live in separate places. Teams cannot see what is already known or what changed over time.",
    icon: Network,
  },
  {
    title: "Dashboards cannot explain themselves",
    body: "Teams can see movement in the numbers, but they cannot drill down to the original language behind those changes or connect prioritisation to concrete evidence.",
    icon: Workflow,
  },
  {
    title: "Manual processing does not scale safely",
    body: "High-volume feedback loops get blocked by tagging overhead, privacy constraints, and unstructured inputs that are too messy for naive RAG or static documentation alone.",
    icon: ShieldCheck,
  },
]

const systemSteps: SystemStep[] = [
  {
    index: "01",
    title: "Capture and de-identify the raw input",
    body: "Support calls, interviews, surveys, sales notes, and CRM records are brought into a controlled intake with the metadata needed for later filtering and governance.",
  },
  {
    index: "02",
    title: "Break it into atomic evidence",
    body: "Instead of burying insight in reports, evidence gets split into reusable units with tags, ownership, source context, and a structure that survives across projects.",
  },
  {
    index: "03",
    title: "Classify and prioritise with LLMs",
    body: "LLMs help filter noise, cluster patterns, reformulate queries, score relevance, and keep the repository usable when feedback volume grows faster than the team.",
  },
  {
    index: "04",
    title: "Link outputs back to proof",
    body: "The resulting system supports summary, prioritisation, and decision conversations while preserving the path back to exact testimony, language, and responsible owners.",
  },
]

const caseBlocks: CaseBlock[] = [
  {
    label: "Voice of customer",
    title: "Support and sales conversations that never become product learning",
    body: "I help teams turn high-volume conversations into structured evidence, usable patterns, and drill-down paths from macro signals to specific customer language.",
  },
  {
    label: "Research function",
    title: "Internal research capability that depends on individuals, not infrastructure",
    body: "I design the operating model itself: intake, evidence format, ownership, reuse patterns, and the routines that make research useful beyond a single study or researcher.",
  },
  {
    label: "Prioritisation",
    title: "Too many signals, no way to compare them credibly",
    body: "I build prioritisation layers that combine qualitative material, support inputs, surveys, and product context into one decision surface rather than parallel narratives.",
  },
]

const articles: Article[] = [
  {
    title: "Building a UX Feedback System That Works for Your Colleagues",
    href: "https://www.uxmatters.com/mt/archives/2023/05/building-a-ux-feedback-system-that-works-for-your-colleagues.php",
    note: "On turning fragmented product feedback into a system people inside the company can actually use.",
  },
  {
    title: "Making Product Managers and UX Designers Wear Users' Hats",
    href: "https://www.uxmatters.com/mt/archives/2022/04/making-product-managers-and-ux-designers-wear-users-hats.php",
    note: "On connecting research practice to day-to-day product judgement, not just deliverables.",
  },
]

const operatingInputs = [
  "Support tickets",
  "Sales calls",
  "User interviews",
  "Surveys",
  "CRM notes",
  "Research archives",
]

const leadershipBackground = ["Yandex", "Sber", "Juro", "TrendAgent"]
const advisoryClients = ["Gazprom", "SweedPOS", "UULA", "Birch"]

function App() {
  return (
    <div className="page-shell">
      <div aria-hidden="true" className="page-aura page-aura-left" />
      <div aria-hidden="true" className="page-aura page-aura-right" />

      <header className="sticky top-0 z-40 border-b border-border/75 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary/70">
              Alexander Fenin
            </span>
            <span className="text-sm text-muted-foreground">
              Research systems and feedback automation
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            <a href="#focus" className="transition-colors hover:text-foreground">
              Focus
            </a>
            <a href="#system" className="transition-colors hover:text-foreground">
              System
            </a>
            <a href="#cases" className="transition-colors hover:text-foreground">
              Cases
            </a>
            <a href="#writing" className="transition-colors hover:text-foreground">
              Writing
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main
        id="top"
        className="mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-20 pt-6 lg:gap-32 lg:px-10"
      >
        <section
          className="reveal grid gap-12 border-b border-border/80 pb-16 pt-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-end"
          style={reveal(0)}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/6 px-3">
                Lead UX Researcher / Head of Research
              </Badge>
              <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/6 px-3">
                Internal research functions
              </Badge>
              <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/6 px-3">
                LLM-powered feedback loops
              </Badge>
            </div>

            <div className="max-w-4xl">
              <p className="section-kicker">Positioning</p>
              <h1 className="max-w-4xl text-5xl leading-none tracking-[-0.06em] text-balance text-foreground sm:text-6xl lg:text-7xl">
                I build internal research systems that turn customer feedback into
                product decisions.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Not freelance research on demand. I help product organisations build
                the function itself: intake, evidence structure, automation, and
                routines that make insight reusable across product, design, support,
                CX, and sales.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                My background includes Yandex, Sber, Juro, and TrendAgent. I have
                also advised Gazprom, SweedPOS, UULA, and Birch on how to build
                internal research capability instead of relying on isolated studies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-5 text-sm font-medium shadow-sm",
                )}
                href="https://www.linkedin.com/in/alexander-fenin/"
                rel="noreferrer"
                target="_blank"
              >
                Talk on LinkedIn
                <ArrowRight className="size-4" />
              </a>
              <a
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full border-primary/20 bg-background/70 px-5 text-sm",
                )}
                href="https://www.uxmatters.com/authors/aleksander-fenin/"
                rel="noreferrer"
                target="_blank"
              >
                Read UXMatters
                <ExternalLink className="size-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="metric-chip">
                <span className="metric-label">Core work</span>
                <span className="metric-value">Research operating systems</span>
              </div>
              <div className="metric-chip">
                <span className="metric-label">Output</span>
                <span className="metric-value">Evidence people can reuse</span>
              </div>
              <div className="metric-chip">
                <span className="metric-label">Method</span>
                <span className="metric-value">Automation with accountable traceability</span>
              </div>
            </div>
          </div>

          <div className="reveal relative lg:justify-self-end" style={reveal(140)}>
            <div className="photo-shell">
              <div className="photo-chip photo-chip-top">
                <Bot className="size-4" />
                <span>Atomic evidence</span>
              </div>
              <div className="photo-chip photo-chip-bottom">
                <Sparkles className="size-4" />
                <span>Speaking on automated insight pipelines</span>
              </div>
              <img
                src={portrait}
                alt="Alexander Fenin speaking on stage with a microphone."
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section
          id="focus"
          className="reveal grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
          style={reveal(60)}
        >
          <div className="max-w-md">
            <p className="section-kicker">Where teams stall</p>
            <h2 className="section-title">
              Most organisations do not lack feedback. They lack a usable internal
              research system.
            </h2>
            <p className="section-copy">
              The recurring pattern across my work is simple: signals exist, but
              nobody can reliably convert them into a shared language for decisions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {painPoints.map((item, index) => (
              <article key={item.title} className="signal-block">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <item.icon className="size-4 text-primary" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.32em]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl leading-tight tracking-[-0.04em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="system"
          className="reveal rounded-[2rem] border border-border/70 bg-background/75 p-6 shadow-[0_24px_90px_-60px_rgba(23,41,26,0.45)] backdrop-blur sm:p-8 lg:p-10"
          style={reveal(120)}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="max-w-md">
              <p className="section-kicker">What I build</p>
              <h2 className="section-title">
                An internal loop that converts raw conversations into structured,
                reusable evidence.
              </h2>
              <p className="section-copy">
                The goal is not another repository. It is a decision system:
                something product teams can query, audit, prioritise, and defend in
                front of leadership without losing the path back to real users.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {operatingInputs.map((input) => (
                  <Badge
                    key={input}
                    variant="outline"
                    className="rounded-full border-primary/15 bg-primary/6 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary/85"
                  >
                    {input}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-muted-foreground">
                Where privacy matters, the processing path can include internal
                transcription, de-identification, and strict metadata handling inside
                the client boundary.
              </p>
            </div>

            <div className="relative">
              <div aria-hidden="true" className="hidden lg:block system-line" />
              <div className="grid gap-6 lg:grid-cols-2">
                {systemSteps.map((step) => (
                  <article key={step.index} className="system-step">
                    <p className="font-mono text-xs uppercase tracking-[0.32em] text-primary/65">
                      {step.index}
                    </p>
                    <h3 className="mt-4 text-2xl leading-tight tracking-[-0.04em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="cases"
          className="reveal grid gap-12 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)]"
          style={reveal(180)}
        >
          <div className="max-w-md">
            <p className="section-kicker">Typical engagements</p>
            <h2 className="section-title">
              I work on cases where insight needs to become infrastructure, not just
              a report.
            </h2>
            <p className="section-copy">
              The pattern is usually a mix of process design, evidence architecture,
              automation choices, and a handoff model the team can keep running
              afterwards.
            </p>
          </div>

          <div>
            {caseBlocks.map((block, index) => (
              <div key={block.title}>
                {index > 0 ? <Separator className="my-8" /> : null}
                <article className="case-row">
                  <div className="case-label">
                    <BriefcaseBusiness className="size-4 text-primary" />
                    <span>{block.label}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl leading-tight tracking-[-0.04em] text-foreground sm:text-3xl">
                      {block.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                      {block.body}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section
          className="reveal grid gap-12 border-y border-border/80 py-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
          style={reveal(220)}
        >
          <div className="max-w-lg">
            <p className="section-kicker">Background</p>
            <h2 className="section-title">
              I position research as an operating capability inside the company, not
              as a queue of freelance deliverables.
            </h2>
            <p className="section-copy">
              That means designing the governance, ownership, evidence format, and
              feedback loops that allow research to keep compounding after the first
              intervention is over.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="list-block">
              <div className="flex items-center gap-3 text-primary">
                <ScrollText className="size-4" />
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary/75">
                  Leadership and in-house work
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-lg leading-7 text-foreground">
                {leadershipBackground.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="list-block">
              <div className="flex items-center gap-3 text-primary">
                <BookOpenText className="size-4" />
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary/75">
                  Advisory and consulting
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-lg leading-7 text-foreground">
                {advisoryClients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="writing"
          className="reveal grid gap-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)]"
          style={reveal(260)}
        >
          <div className="max-w-md">
            <p className="section-kicker">Writing and speaking</p>
            <h2 className="section-title">
              I write about making research usable inside organisations, and I speak
              about evidence pipelines that can keep up with modern product teams.
            </h2>
            <p className="section-copy">
              UXMatters is where some of that thinking is public. More recent work
              has been focused on atomic evidence, feedback operations, and
              automation patterns powered by LLMs.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article) => (
              <a
                key={article.title}
                className="article-link"
                href={article.href}
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/70">
                    UXMatters
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight tracking-[-0.04em] text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
                    {article.note}
                  </p>
                </div>
                <ExternalLink className="size-5 shrink-0 text-primary" />
              </a>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="reveal overflow-hidden rounded-[2.5rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(171,189,137,0.18),rgba(248,246,239,0.95)_40%,rgba(171,189,137,0.12))] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          style={reveal(300)}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">Contact</p>
              <h2 className="text-4xl leading-none tracking-[-0.05em] text-foreground sm:text-5xl">
                If your team has plenty of feedback but no reliable research
                operating system, I can help build one.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                The fastest starting point is a short message with the bottleneck you
                are trying to fix: scattered evidence, support-call overload,
                low-trust prioritisation, or a research function that does not scale.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-start">
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full rounded-full px-5 text-sm font-medium shadow-sm sm:w-auto",
                )}
                href="https://www.linkedin.com/in/alexander-fenin/"
                rel="noreferrer"
                target="_blank"
              >
                Message on LinkedIn
                <ArrowRight className="size-4" />
              </a>
              <a
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "w-full rounded-full border-primary/20 bg-background/70 px-5 text-sm sm:w-auto",
                )}
                href="https://www.uxmatters.com/authors/aleksander-fenin/"
                rel="noreferrer"
                target="_blank"
              >
                Browse published articles
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
