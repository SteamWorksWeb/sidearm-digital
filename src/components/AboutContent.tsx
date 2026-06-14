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
  { value: '40+', label: 'Years combined experience' },
  { value: '100%', label: 'U.S.-based team' },
  { value: '0', label: 'Templates ever used' },
  { value: '<1s', label: 'Avg. load time delivered' },
]

const pillars = [
  {
    icon: Flag,
    title: 'U.S. Engineering.',
    description:
      'Every engineer on our team is based in the United States. That means elite technical ability, real-time communication, zero language barriers, and perfectly aligned time zones. Your build never gets handed off to an overseas seat farm.',
    tag: 'Domestic · Elite',
  },
  {
    icon: Layers,
    title: 'Zero-CMS Philosophy.',
    description:
      'We spent decades in the trenches with WordPress, Shopify, and enterprise legacy stacks. We know exactly where the bodies are buried. That experience is why we build everything custom — bypassing the plugin roulette and database bloat that is silently throttling your conversions.',
    tag: 'Custom · Performance',
  },
  {
    icon: ShieldCheck,
    title: 'The Retainer Model.',
    description:
      'We build it. We host it. We manage it. The Zero-Maintenance Retainer means you hand the backend over to us permanently. Hosting, security patches, SSL, uptime monitoring, and feature updates — handled every month while you focus on scaling your revenue.',
    tag: 'Managed · Retained',
  },
]

const evolution = [
  { year: 'Early days', label: 'WordPress & Shopify', note: 'Mastered the platforms that power the web' },
  { year: 'Mid career', label: 'Enterprise CMS stacks', note: 'Learned exactly where legacy systems fail at scale' },
  { year: 'The shift', label: 'Custom Next.js architecture', note: 'Abandoned templates entirely for hand-coded performance' },
  { year: 'Today', label: 'The Zero-Maintenance Retainer', note: 'We build it, host it, manage it — while you scale' },
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
              The Team Behind the Stack
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white"
            >
              40 Years of Combined{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
                }}
              >
                Engineering.
              </span>
              <br />
              100% U.S. Based.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 text-xl text-zinc-400 leading-relaxed max-w-2xl"
            >
              We didn&apos;t just learn the web. We lived it. Now, we&apos;re
              rebuilding it for speed.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-8"
            >
              <Link
                href="/#comms"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/40"
              >
                Start a Project <ArrowRight size={15} />
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
              Our Story
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              We Know The{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
                }}
              >
                Old Way
              </span>{' '}
              Is Broken.
            </h2>
            <p className="mt-4 text-zinc-500 text-sm leading-relaxed max-w-sm">
              That&apos;s not criticism. That&apos;s authority. You can&apos;t
              engineer something better until you&apos;ve fully understood what
              it got wrong.
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
              We&apos;ve spent decades mastering the platforms that power the
              internet — App Development, WordPress, Shopify, and enterprise
              legacy stacks. We know exactly how they work.{' '}
              <span className="text-zinc-200 font-semibold">
                And more importantly, we know exactly where they fail.
              </span>
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
                Bloated plugins, fragile databases, and slow load times kill
                your conversion rates. That&apos;s why Sidearm Digital shifted
                entirely to custom-coded, performance-obsessed Next.js
                architectures.
              </p>
            </blockquote>

            <p>
              We leverage our history to give you an unfair advantage today.{' '}
              <span className="text-zinc-200 font-semibold">
                No offshore handoffs. No templates. Just pure, scalable
                engineering.
              </span>{' '}
              Every line of code written in-house, in the United States, by
              engineers who have already seen every failure mode the modern web
              has to offer.
            </p>

            <p>
              When you work with Sidearm, you are not buying a product. You are
              gaining a technical partner with four decades of institutional
              knowledge, focused entirely on one outcome: a digital asset that
              performs, converts, and never breaks.
            </p>

            <div className="pt-4">
              <Link
                href="/#comms"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-150"
              >
                See how we work → Our Process <ArrowRight size={14} />
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
              Why It Matters
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              Three Principles. Zero Compromise.
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
