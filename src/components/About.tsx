'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const painPoints = [
  'Projects stall because there is no clear plan.',
  'Communication gets vague after the sale.',
  'Deadlines move without explanation.',
  'Details fall through the cracks.',
  'You are left managing the process instead of running your business.',
]

const promises = [
  'Custom-coded architecture built for speed and scalability.',
  'Premium design focused on credibility and conversion.',
  'Fully managed hosting, updates, security, and monitoring.',
  'Direct access to the team responsible for your build.',
  'A refined process built around clarity, communication, and care.',
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-zinc-950 border-t border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Pain */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
              The Problem
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              Great Ideas Fail Without{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #f87171 0%, #ef4444 50%, #dc2626 100%)',
                }}
              >
                Excellent Execution.
              </span>
            </h2>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Most companies do not lose momentum because the vision was wrong. They lose it because the execution was inconsistent, communication broke down, deadlines slipped, and no one truly owned the outcome.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Premium clients expect more. They expect clarity, responsiveness, precision, and a team that treats every detail like it matters.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              When your digital partner is slow to respond, unclear in their process, or careless with the handoff, your business pays the price.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-zinc-500">
                  <span className="mt-0.5 shrink-0 text-red-500/70">✕</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Promise */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            {/* Card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-8 lg:p-10">
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
                  The Sidearm Standard
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Custom-Coded. Fully Managed.{' '}
                  <span className="text-blue-400">Built to Impress.</span>
                </h3>
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                  We create digital assets that are engineered with care and managed with accountability. Every line of code, every design decision, and every client interaction is handled with the expectation that excellence is the baseline.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-blue-400"
                    />
                    {promise}
                  </li>
                ))}
              </ul>

              {/* CTA nudge */}
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-sm text-zinc-500">
                  Ready for a more refined digital foundation?{' '}
                  <a
                    href="/start"
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-150"
                  >
                    Start a Private Consultation &rarr;
                  </a>
                </p>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl border border-blue-500/30 bg-blue-600/10 backdrop-blur-md px-5 py-3 shadow-xl"
            >
              <p className="text-2xl font-black text-white">{'<1s'}</p>
              <p className="text-xs text-zinc-400 mt-0.5">Avg. load time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
