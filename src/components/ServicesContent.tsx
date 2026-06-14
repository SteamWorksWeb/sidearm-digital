'use client'

import { motion } from 'framer-motion'
import { type Variants } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Workflow,
  Palette,
  LineChart,
  ArrowRight,
  CheckCircle2,
  ServerCog,
} from 'lucide-react'
import Link from 'next/link'

/* ─── animation variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut' as const, duration: 0.5 },
  },
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeOut' as const, duration: 0.55 },
  },
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeOut' as const, duration: 0.55 },
  },
}

/* ─── services data ─── */
const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Web Applications',
    tag: 'Performance-First',
    headline: 'Your site is your best salesperson. Treat it like one.',
    body: [
      'Every day your current site loads slowly, you are handing leads directly to your competitors. We write every line by hand — no WordPress, no Webflow, no page-builder shortcuts — producing Next.js applications that clear Google\'s Core Web Vitals with room to spare.',
      'The result: a digital asset that works while you sleep, converts while you pitch, and scales without re-architecting when your traffic doubles.',
    ],
    bullets: [
      'Sub-1-second load times on all devices',
      'Custom-coded — no templates, no plugins',
      'Built for growth: scalable architecture from day one',
      'Perfect Lighthouse scores across Performance, SEO, and Accessibility',
    ],
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Mobile Applications',
    tag: 'Native-Feel',
    headline: 'Your customers are on their phones. Are you meeting them there?',
    body: [
      'A clunky, slow mobile experience kills trust faster than any bad review. We engineer high-performance mobile interfaces that feel native — buttery smooth, instantly responsive, and built to keep your users engaged session after session.',
      'Whether it is a companion app for your web platform or a standalone product, we build for both iOS and Android with a single, maintainable codebase and zero compromise on feel.',
    ],
    bullets: [
      'Cross-platform: iOS and Android from one codebase',
      'Native-feel animations and transitions',
      'Offline capability and push notification integration',
      'Seamless handoff to our Zero-Maintenance Retainer',
    ],
  },
  {
    icon: Workflow,
    number: '03',
    title: 'Automations',
    tag: 'Efficiency',
    headline: 'Stop paying your team to do what a machine can do in milliseconds.',
    body: [
      'Manual data entry, copy-pasting between platforms, chasing invoices, manually onboarding clients — these are all expensive bottlenecks disguised as "just the way things work." They are not. They are leaks in your revenue pipeline.',
      'We build custom API integrations and end-to-end automation workflows that eliminate these tasks permanently. Your team stops doing grunt work and starts doing the high-leverage work that actually scales your business.',
    ],
    bullets: [
      'Custom API integrations between any two platforms',
      'Automated CRM, invoicing, and onboarding workflows',
      'Real-time data pipelines and reporting dashboards',
      'Webhook-driven triggers with zero manual intervention',
    ],
  },
  {
    icon: Palette,
    number: '05',
    title: 'Web Design',
    tag: 'Conversion-Focused',
    headline: 'Premium design is not decoration. It is persuasion architecture.',
    body: [
      'Your visitors make a trust decision within the first 50 milliseconds of landing on your site. A misaligned color palette, slow typography render, or cluttered layout can silently disqualify you before a single word is read.',
      'We design digital experiences that are aesthetically premium and psychologically engineered to guide your visitors from first impression to checkout — with frictionless clarity at every step.',
    ],
    bullets: [
      'Conversion-optimized UI/UX from the first wireframe',
      'Brand-consistent design systems built in Figma',
      'A/B tested layouts for maximum conversion rate',
      'Responsive across all screen sizes, pixel-perfect on all',
    ],
  },
  {
    icon: LineChart,
    number: '06',
    title: 'Consulting',
    tag: 'Strategy',
    headline: 'You cannot scale infrastructure you do not understand.',
    body: [
      'Most founders know their product better than their stack. That gap becomes expensive when the site breaks under load, the deployment pipeline fails before a launch, or a third-party dependency quietly takes your site offline for 48 hours.',
      'Our consulting engagements give you high-level technical clarity: architecture reviews, tech stack selection, scaling roadmaps, and the honest assessment of what needs to be rebuilt versus what just needs to be optimized.',
    ],
    bullets: [
      'Technical architecture reviews and risk assessments',
      'Tech stack selection aligned with your growth stage',
      'Scaling roadmaps for high-traffic scenarios',
      'Vendor evaluation: when to build vs. buy',
    ],
  },
]

/* ─── retainer data ─── */
const retainerIncludes = [
  'Vercel hosting and global edge deployment',
  'Next.js version upgrades and dependency updates',
  'SSL certificates and security patch management',
  'Database monitoring and performance optimization',
  'Uptime monitoring with instant incident response',
  'Monthly feature additions and copy updates',
  'Priority support with direct engineer access',
]

/* ─── shared motion props ─── */
const viewportOpts = { once: true, margin: '-60px' as const }

export default function ServicesContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex flex-col justify-center px-6 py-24 overflow-hidden border-b border-zinc-800/50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(59,130,246,0.07), transparent 70%)',
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
            What We Build
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight text-white max-w-3xl"
          >
            Engineered for{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
              }}
            >
              Dominance.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-xl text-zinc-400 leading-relaxed max-w-2xl"
          >
            We don&apos;t do templates. We do high-performance, hand-coded
            digital assets designed to scale and convert.
          </motion.p>
        </div>
      </section>

      {/* ── Alternating services ── */}
      <div className="max-w-7xl mx-auto px-6">
        {services.map((service, i) => {
          const Icon = service.icon
          const isEven = i % 2 === 0
          const textVariant = isEven ? fadeLeft : fadeRight
          const iconVariant = isEven ? fadeRight : fadeLeft

          return (
            <div key={service.number}>
              {/* Insert Retainer after index 2 (after Automations, before Web Design) */}
              {i === 3 && <RetainerHighlight />}

              <section
                className={`py-24 border-b border-zinc-800/40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Text column */}
                <motion.div
                  variants={textVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOpts}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
                      {service.number}
                    </span>
                    <span className="h-px flex-1 max-w-[40px] bg-blue-500/40" />
                    <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase border border-zinc-800 rounded-full px-2.5 py-1">
                      {service.tag}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
                      {service.title}
                    </h2>
                    <p className="text-blue-400 font-semibold text-base leading-snug">
                      {service.headline}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {service.body.map((para, j) => (
                      <p key={j} className="text-zinc-400 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  <ul className="flex flex-col gap-2.5 pt-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-blue-400"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Visual column */}
                <motion.div
                  variants={iconVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOpts}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-full max-w-sm aspect-square flex items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                    {/* Decorative glow */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.08), transparent 70%)',
                      }}
                    />
                    {/* Large decorative number */}
                    <span
                      aria-hidden="true"
                      className="absolute text-[10rem] font-black text-zinc-800/60 leading-none select-none tabular-nums"
                    >
                      {service.number}
                    </span>
                    {/* Icon */}
                    <div className="relative z-10 h-24 w-24 rounded-2xl border border-zinc-700 bg-zinc-800/80 flex items-center justify-center shadow-2xl">
                      <Icon size={44} className="text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              </section>
            </div>
          )
        })}
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
              Next Step
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to upgrade your{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
                }}
              >
                infrastructure?
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              No discovery calls that go nowhere. No proposal decks that
              collect dust. Just a direct conversation about your build.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/#comms"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/40"
              >
                Initiate Project <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-md text-sm font-bold text-zinc-300 border border-zinc-700 hover:border-blue-500/60 hover:text-white transition-all duration-200"
              >
                About the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

/* ─── Retainer highlight (inline, no import needed) ─── */
function RetainerHighlight() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="py-10"
    >
      <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 via-zinc-900/70 to-zinc-950 p-10 lg:p-16 overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(59,130,246,0.10), transparent 70%)',
          }}
        />
        {/* Decorative large icon */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 opacity-5"
        >
          <ServerCog size={280} className="text-blue-400" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
                04
              </span>
              <span className="h-px w-10 bg-blue-500/40" />
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/15 text-blue-400">
                ★ Most Popular
              </span>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">
                Project Hosting & Management
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                The Zero-Maintenance{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)',
                  }}
                >
                  Retainer.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
              <p>
                You run your business. We run your stack. We handle the Vercel
                deployments, the security patches, the Next.js version bumps,
                and the database management.{' '}
                <span className="text-white font-semibold">
                  You will never log into a broken dashboard again.
                </span>
              </p>
              <p className="text-zinc-400">
                This is not a support ticket system with a 48-hour SLA. This is
                a standing agreement between your team and ours — a dedicated
                technical partner who already knows your codebase inside out.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/#comms"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/40"
              >
                Ask About the Retainer <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right — what's included */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
              Fully managed starting at $TBD/mo
            </p>
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 flex flex-col gap-3">
              <p className="text-sm font-semibold text-white mb-1">
                Every retainer includes:
              </p>
              {retainerIncludes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-400" />
                  <span className="text-sm text-zinc-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
