'use client'

import { motion, type Variants } from 'framer-motion'
import { Flag, Layers, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

/* ─── shared fade-up variant ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const, delay },
  }),
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const, delay },
  }),
}

/* ─── data ─── */
const stats = [
  { value: '40+', label: 'Years of Combined Technical Experience' },
  { value: '100%', label: 'U.S.-Based Team' },
  { value: '0', label: 'Templates Used' },
  { value: '<1s', label: 'Performance-First Load Time Target' },
]

const pillars = [
  {
    icon: Flag,
    title: 'U.S.-Based Engineering.',
    description:
      'Every project is handled by a U.S.-based team with direct communication, aligned working hours, and full accountability. Your build is never passed through layers of anonymous offshore handoffs. You work with the people responsible for the outcome.',
    tag: 'Domestic · Direct',
  },
  {
    icon: Layers,
    title: 'Bespoke System Architecture.',
    description:
      'We build custom web applications and automations using clean, scalable code. No rigid platforms or disconnected SaaS tools. Just tailored software that solves complex operational bottlenecks and drives efficiency.',
    tag: 'Custom · Architecture',
  },
  {
    icon: ShieldCheck,
    title: 'Long-Term Care.',
    description:
      'A premium website should be actively protected and maintained. Through our ongoing management model, we handle hosting, updates, security, monitoring, and refinements so your digital presence continues to perform after launch.',
    tag: 'Managed · Supported',
  },
]

const evolution = [
  { year: 'Legacy Systems & Integrations', label: 'Legacy Systems & Integrations', note: 'We mastered the platforms that shaped the modern web and learned exactly where they limit serious operational scaling.' },
  { year: 'Complex Data & Scaled APIs', label: 'Complex Data & Scaled APIs', note: 'We developed the discipline required to architect complex data pipelines, custom API integrations, and demanding use cases.' },
  { year: 'Custom-Coded Software', label: 'Custom-Coded Software', note: 'We moved beyond out-of-the-box limitations and committed to clean, hand-coded web applications designed for absolute flexibility.' },
  { year: 'White-Glove Digital Infrastructure', label: 'White-Glove Digital Infrastructure', note: 'We architect, host, secure, and maintain complex digital systems for clients who want operational excellence without the technical burden.' },
]

/* ─── component ─── */
export default function AboutContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 py-24 overflow-hidden border-b border-zinc-800/50">
        {/* Background radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(59,130,246,0.07), transparent 70%)',
          }}
        />
        {/* Grid texture */}
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
          <div className="max-w-4xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              The Team Behind the Standard
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white"
            >
              Experienced Engineers. Refined Process.{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
                }}
              >
                Custom System Architecture.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 text-xl text-zinc-400 leading-relaxed max-w-2xl"
            >
              Sidearm Digital was built for businesses that need more than a digital storefront. We partner with founders, operators, and premium brands that require bespoke web applications, seamless operational automations, and white-glove technical consulting to scale without friction.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-8"
            >
              <Link
                href="/start"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/40"
              >
                Get Started <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-zinc-800/50 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-zinc-800">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.07}
                className="flex flex-col items-center lg:items-start lg:px-10 first:lg:pl-0 last:lg:pr-0 gap-1"
              >
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-zinc-500 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Narrative ── */}
      <section className="py-28 px-6 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — sticky label */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            custom={0}
            className="lg:sticky lg:top-32"
          >
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
              Our Perspective
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              We Know Exactly Where{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
                }}
              >
                Off-the-Shelf Software
              </span>{' '}
              Falls Short.
            </h2>
            <p className="mt-4 text-zinc-500 text-sm leading-relaxed max-w-sm">
              Our team has spent decades wrestling with rigid SaaS platforms, disconnected APIs, and enterprise CMS bloat. We have seen how out-of-the-box solutions force businesses to compromise their operations to fit the software. That experience shaped the Sidearm standard. We build custom applications, internal tools, and automated workflows designed around your exact operational needs. Web design is just the surface; we engineer the engines underneath.
            </p>

            {/* Evolution timeline */}
            <div className="mt-12 relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
              <ol className="flex flex-col gap-6 pl-10">
                {evolution.map((e, i) => (
                  <motion.li
                    key={e.year}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i * 0.1}
                  >
                    <div className="absolute left-0 mt-1 h-6 w-6 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center" style={{ marginLeft: '0.375rem', position: 'relative', left: '-2.5rem', top: '0', float: 'left', marginRight: '0.75rem' }}>
                      <span className="h-2 w-2 rounded-full bg-blue-500/60" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">{e.year}</p>
                      <p className="text-sm font-semibold text-white">{e.label}</p>
                      <p className="text-xs text-zinc-600 mt-0.5">{e.note}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Right — body copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.1}
            className="flex flex-col gap-8 text-zinc-400 text-lg leading-relaxed"
          >
            <p>
              We do not build disposable websites. We build refined digital systems with clean architecture, long-term maintainability, and operational precision in mind. Every project is created to eliminate friction, automate complexity, and give your business a technical edge that compounds over time.
            </p>

            {/* Pull quote */}
            <blockquote className="relative border-l-2 border-blue-500/60 pl-6 py-1">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 -top-4 text-7xl text-blue-500/10 font-black leading-none select-none"
              >
                &ldquo;
              </div>
              <p className="text-zinc-300 text-xl leading-relaxed font-medium italic">
                A premium business deserves infrastructure that adapts to its growth, performs instantly, and eliminates operational friction.
              </p>
            </blockquote>

            <p>
              When you work with Sidearm Digital, you are not purchasing a one-time deliverable. You are gaining a technical partner invested in the performance, presentation, and reliability of your digital presence.
            </p>

            <div className="pt-4">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-150"
              >
                View Our Process <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Value pillars ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            custom={0}
            className="mb-16 max-w-2xl"
          >
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
              Our Principles
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              Three Commitments. No Compromise.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={i * 0.1}
                  className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 flex flex-col gap-6 hover:border-zinc-700 transition-colors duration-200 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'radial-gradient(300px circle at 50% 0%, rgba(59,130,246,0.05), transparent 70%)',
                    }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="h-12 w-12 rounded-xl border border-zinc-700 bg-zinc-800/80 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-600/10 transition-all duration-300">
                      <Icon
                        size={22}
                        className="text-zinc-400 group-hover:text-blue-400 transition-colors duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-zinc-600 border border-zinc-800 rounded-full px-2.5 py-1 uppercase">
                      {pillar.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
