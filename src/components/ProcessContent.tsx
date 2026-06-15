'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Search,
  Map,
  ClipboardList,
  Code2,
  FlaskConical,
  Rocket,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

/* ─── animation variant ─── */
const stepIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut' as const, duration: 0.6 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut' as const, duration: 0.5 },
  },
}

const viewportOpts = { once: true, margin: '-60px' as const }

/* ─── methodology data ─── */
const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    tag: 'Weeks 1–2',
    action: {
      heading: 'What we do',
      body: 'We perform a full technical and conversion audit of your current digital footprint. Every page is profiled for load time, Core Web Vitals scores, and leaky conversion funnels. We map out the competitive landscape and benchmark your site against the two or three competitors you are actually losing deals to right now.',
      bullets: [
        'Lighthouse audit across all key pages',
        'Competitor benchmark analysis',
        'Conversion funnel mapping and drop-off analysis',
        'Infrastructure review: hosting, CDN, database, DNS',
      ],
    },
    outcome: {
      heading: 'Why it protects you',
      body: 'Most agencies skip this step and start designing before they understand your actual problem. That is how projects go three months over budget fixing issues that were knowable on day one. Our audit locks in a shared definition of success before a single line of code is written — which means no surprises later.',
      highlight: 'You get clarity, not assumptions. Every build decision is grounded in data, not guesswork.',
    },
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategy',
    tag: 'Weeks 2–3',
    action: {
      heading: 'What we do',
      body: 'We architect the complete digital roadmap. This includes the technology stack selection, the hosting and deployment pipeline, the data flow between any third-party services, and the exact KPIs we will use to measure whether this build succeeded. Every decision is documented and signed off before we move.',
      bullets: [
        'Technology stack selection and rationale',
        'Deployment pipeline architecture (CI/CD)',
        'Third-party API dependency mapping',
        'KPI definition and measurement framework',
      ],
    },
    outcome: {
      heading: 'Why it protects you',
      body: 'Technology choices made under time pressure are the root cause of 80% of technical debt. By locking the strategy phase before development, we eliminate the costly mid-project pivot — where a team discovers six weeks in that their framework choice cannot handle the required feature set.',
      highlight: 'Your stack is chosen for your specific growth trajectory, not because it was the fastest to scaffold.',
    },
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Planning',
    tag: 'Week 3',
    action: {
      heading: 'What we do',
      body: 'We translate the strategy into a granular, sprint-by-sprint project plan. Every deliverable is scoped, every dependency is mapped, and every risk is documented with a mitigation strategy. We issue a fixed-scope Statement of Work before a single line of code is written.',
      bullets: [
        'Sprint-by-sprint delivery schedule',
        'Fixed-scope Statement of Work',
        'Risk register with documented mitigations',
        'Stakeholder sign-off on all deliverables',
      ],
    },
    outcome: {
      heading: 'Why it protects you',
      body: 'Scope creep is not a development problem — it is a planning problem. When the scope is ambiguous, both sides lose. We lose margin. You lose predictability. A fixed-scope SOW means you know exactly what you are getting, when you are getting it, and what it costs. No exceptions.',
      highlight: 'You never receive an unexpected invoice. The price you sign is the price you pay.',
    },
  },
  {
    number: '04',
    icon: Code2,
    title: 'Development',
    tag: 'Weeks 4–10',
    action: {
      heading: 'What we do',
      body: 'Every component is hand-coded in Next.js with TypeScript. We use a component-first architecture, building a design system of reusable, performant building blocks before assembling the final pages. Every PR is peer-reviewed. Every merge triggers an automated Lighthouse CI run — if performance regresses, the build fails.',
      bullets: [
        'Hand-coded Next.js with TypeScript — zero templates',
        'Component-first architecture with a shared design system',
        'Automated Lighthouse CI on every pull request',
        'Weekly staged builds deployed to a preview URL for your review',
      ],
    },
    outcome: {
      heading: 'Why it protects you',
      body: 'Template-based builds create invisible ceilings. The day you need a feature the template does not support, you hit a wall — and the agency charges you to work around their own shortcuts. Because we write every line ourselves, the codebase is fully owned, fully understood, and fully extensible by any competent Next.js engineer.',
      highlight: 'You own clean, documented code. Not a black-box license you cannot take elsewhere.',
    },
  },
  {
    number: '05',
    icon: FlaskConical,
    title: 'Testing',
    tag: 'Weeks 10–11',
    action: {
      heading: 'What we do',
      body: 'We run a full battery of performance, accessibility, and user experience validation before anything touches production. This includes Lighthouse audits on every key page (targeting 95+ across all categories), cross-browser QA on Chrome, Safari, Firefox, and Edge, full WCAG 2.1 AA accessibility compliance testing, and structured end-to-end user flow validation.',
      bullets: [
        'Lighthouse 95+ target across Performance, SEO, Accessibility',
        'Cross-browser QA: Chrome, Safari, Firefox, Edge',
        'WCAG 2.1 AA accessibility audit',
        'Full end-to-end user flow validation on all devices',
      ],
    },
    outcome: {
      heading: 'Why it protects you',
      body: 'Every hour of QA prevents roughly ten hours of post-launch firefighting. A missed accessibility issue is a legal liability. A performance regression discovered after launch is a brand incident. We do not ship until every gate is cleared — because our reputation is attached to your load time.',
      highlight: 'You launch with confidence, not with a list of known issues to fix next sprint.',
    },
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Execution',
    tag: 'Week 12',
    action: {
      heading: 'What we do',
      body: 'We deploy to Vercel\'s global edge network using a canary deployment strategy — traffic is gradually shifted from the old infrastructure to the new, allowing us to catch any production anomalies before they affect your full user base. DNS cutover is handled by us, SSL is provisioned automatically, and a full post-launch monitoring window is observed.',
      bullets: [
        'Canary deployment via Vercel for zero-downtime cutover',
        'DNS migration and SSL provisioning',
        'Post-launch 72-hour intensive monitoring window',
        'Full rollback plan documented and ready to execute',
      ],
    },
    outcome: {
      heading: 'Why it protects you',
      body: 'A botched launch is not just a technical failure — it is a sales and brand event. Downtime during a major campaign, a broken checkout at peak traffic, an SSL error on a critical landing page. Our canary strategy means we see issues before your customers do, and our rollback plan means we can revert in under five minutes if we need to.',
      highlight: 'Your launch is an event, not a gamble. We have a contingency for every failure mode.',
    },
  },
]

export default function ProcessContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex flex-col justify-center px-6 py-24 overflow-hidden border-b border-zinc-800/50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 70% at 100% 50%, rgba(59,130,246,0.07), transparent 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            7-Step Methodology
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight text-white max-w-4xl"
          >
            Engineering Without{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
              }}
            >
              Guesswork.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-xl text-zinc-400 leading-relaxed max-w-2xl"
          >
            A systematic, battle-tested pipeline for delivering high-performance
            digital assets. Zero templates. Zero scope creep. Absolute
            precision.
          </motion.p>
        </div>
      </section>

      {/* ── Steps 01–06 ── */}
      <div className="max-w-7xl mx-auto px-6">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.section
              key={step.number}
              variants={stepIn}
              initial="hidden"
              whileInView="show"
              viewport={viewportOpts}
              className="relative py-20 border-b border-zinc-800/40 overflow-hidden"
            >
              {/* Decorative mega number */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none select-none tabular-nums text-zinc-800/40"
              >
                {step.number}
              </div>

              <div className="relative">
                {/* Step header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-12 w-12 rounded-xl border border-zinc-700 bg-zinc-800/80 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
                        Step {step.number}
                      </span>
                      <span className="h-px w-6 bg-blue-500/40" />
                      <span className="text-[10px] font-bold tracking-widest text-zinc-600 border border-zinc-800 rounded-full px-2.5 py-1 uppercase">
                        {step.tag}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-1">
                      {step.title}
                    </h2>
                  </div>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                  {/* Left — Action */}
                  <div className="flex flex-col gap-5">
                    <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      {step.action.heading}
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      {step.action.body}
                    </p>
                    <ul className="flex flex-col gap-2.5 pt-1">
                      {step.action.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm text-zinc-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right — Outcome */}
                  <div className="flex flex-col gap-5">
                    <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      {step.outcome.heading}
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                      {step.outcome.body}
                    </p>
                    <blockquote className="border-l-2 border-blue-500/50 pl-5 py-1">
                      <p className="text-zinc-300 font-medium leading-relaxed italic text-sm">
                        {step.outcome.highlight}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.section>
          )
        })}
      </div>

      {/* ── Step 07 — Retainer (full-width featured) ── */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <motion.section
          variants={stepIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOpts}
          className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 via-zinc-900/70 to-zinc-950 p-10 lg:p-16 overflow-hidden"
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(59,130,246,0.10), transparent 70%)',
            }}
          />
          {/* Decorative mega number */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none select-none tabular-nums text-blue-400/5"
          >
            07
          </div>
          {/* Decorative icon */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-10 bottom-6 opacity-5"
          >
            <ShieldCheck size={220} className="text-blue-400" />
          </div>

          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-14 w-14 rounded-xl border border-blue-500/40 bg-blue-600/20 flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/30">
                <ShieldCheck size={26} className="text-blue-400" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
                    Step 07
                  </span>
                  <span className="h-px w-6 bg-blue-500/40" />
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/15 text-blue-400">
                    ★ The Endgame
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mt-1">
                  Management & Support
                </h2>
              </div>
            </div>

            {/* Full-width copy block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-10">
              <div className="flex flex-col gap-5">
                <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                  What we do
                </p>
                <div className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                  <p>
                    We do not hand you the keys to a fragile CMS and walk away.
                    The Zero-Maintenance Retainer is a standing operational
                    agreement: we host, secure, update, and maintain the
                    codebase on an ongoing monthly basis. Every Vercel
                    deployment, every Next.js version bump, every security patch
                    — handled by the engineers who built it.
                  </p>
                  <ul className="flex flex-col gap-2.5 pt-1">
                    {[
                      'Monthly hosting on Vercel\'s global edge network',
                      'Next.js and dependency version management',
                      'Proactive security patching and SSL renewal',
                      'Uptime monitoring with sub-5-minute incident response',
                      'Database performance monitoring and query optimization',
                      'Monthly feature and copy updates on request',
                      'Priority support — direct line to your build engineer',
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                  Why it changes everything
                </p>
                <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed">
                  <p>
                    The hidden cost of self-managing your infrastructure is not
                    the hosting invoice. It is the 3 a.m. call when the site
                    goes down the night before your biggest sales push. It is
                    the freelancer you emergency-hire to fix a dependency
                    conflict they have never seen before. It is the three weeks
                    you spend trying to debug a Next.js version upgrade that
                    breaks five components simultaneously.
                  </p>
                  <p>
                    You run your business. We run your infrastructure. That is
                    not a support arrangement — it is a competitive advantage.
                    Your site is always on the latest, most secure version of
                    every dependency, maintained by the engineers who wrote it.
                  </p>
                </div>

                <blockquote className="border-l-2 border-blue-500 pl-5 py-1 mt-2">
                  <p className="text-blue-200 font-semibold leading-relaxed">
                    &ldquo;You will never log into a broken dashboard again.
                    Fully managed. Fully yours.&rdquo;
                  </p>
                </blockquote>

                <div className="pt-2">
                  <Link
                    href="/start"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/40"
                  >
                    Get Started <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="py-28 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOpts}
            className="flex flex-col items-center gap-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              The Next Move
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
                }}
              >
                execute?
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Seven steps. One fixed price. Zero surprises. Let&apos;s map out
              your build.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/40"
              >
                Get Started <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-md text-sm font-bold text-zinc-300 border border-zinc-700 hover:border-blue-500/60 hover:text-white transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
