'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Subtle radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Faint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Eyebrow tag */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          Premium Digital Engineering for Ambitious Brands
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white"
        >
          Exquisite Web Applications.{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
            }}
          >
            Engineered
          </span>
          {' '}for Performance.
          <br />
          Built for Brands That Refuse Ordinary.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed"
        >
           Sidearm Digital creates custom-coded websites, applications, automations, and digital infrastructure for businesses that expect excellence at every touchpoint. No templates. No shortcuts. No disposable builds. Just refined digital systems designed to perform beautifully, load instantly, and support serious growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <Link
            id="hero-cta-primary"
            href="/start"
            className="group relative px-8 py-3.5 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/40 overflow-hidden"
          >
            <span className="relative z-10">Start a Private Consultation &rarr;</span>
          </Link>

          <Link
            id="hero-cta-secondary"
            href="/process"
            className="px-8 py-3.5 rounded-md text-sm font-bold text-zinc-300 border border-zinc-700 hover:border-blue-500/60 hover:text-white transition-all duration-200"
          >
            View Our Process
          </Link>
        </motion.div>

        {/* Social proof strip */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mt-4 text-xs text-zinc-600 tracking-widest uppercase"
        >
           Built for founders, operators, and premium brands that demand speed, polish, and reliability.
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgb(9,9,11))',
        }}
      />
    </section>
  )
}
