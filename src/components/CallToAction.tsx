'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="relative border-y border-zinc-800 bg-zinc-900/50 overflow-hidden">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59,130,246,0.07), transparent 70%)',
        }}
      />
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-28 sm:py-36 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            The Next Move
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-50 leading-[1.05] tracking-tight max-w-3xl">
            Ready for a Digital Partner Who{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
              }}
            >
              Executes at a Higher Standard?
            </span>
          </h2>

          {/* Body */}
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            For firms, practices, and service professionals who value precision,
            quality, and clear communication, Sidearm Digital builds polished
            digital systems with careful execution and white-glove support from
            start to finish.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              id="cta-primary"
              href="/start"
              className="px-8 py-3.5 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-900/40"
            >
              Get Started →
            </Link>
            <Link
              id="cta-secondary"
              href="/services"
              className="px-8 py-3.5 rounded-md text-sm font-bold text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
