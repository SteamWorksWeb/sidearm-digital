'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

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
    <section className="relative min-h-[calc(100vh-104px)] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero1.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition: 'center center' }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-zinc-950/70"
      />

      {/* Subtle blue glow on top of image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

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
          Premium Digital Engineering
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white"
        >
          Built for Industry Leaders Who{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
            }}
          >
            Expect Excellence.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="max-w-2xl text-lg sm:text-xl text-zinc-300 leading-relaxed"
        >
          We create custom websites, applications, and automations with refined
          design, fast performance, and high-touch service from start to finish.
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
            <span className="relative z-10">Get Started &rarr;</span>
          </Link>

          <Link
            id="hero-cta-secondary"
            href="/process"
            className="px-8 py-3.5 rounded-md text-sm font-bold text-zinc-200 border border-zinc-600 hover:border-blue-500/60 hover:text-white transition-all duration-200"
          >
            View Our Process
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgb(9,9,11))',
        }}
      />
    </section>
  )
}
