'use client'

import { motion, type Variants } from 'framer-motion'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import ProjectRequestForm from '@/components/ProjectRequestForm'

const fadeLeft: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut' as const, duration: 0.5 },
  },
}

const fadeRight: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut' as const, duration: 0.5, delay: 0.1 },
  },
}

const qualifiers = [
  'You have a real budget and a real deadline.',
  'You want a partner, not a vendor who disappears after launch.',
  'You understand that performance is a revenue multiplier.',
]

export default function StartContent() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* Backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 100% 20%, rgba(59,130,246,0.07), transparent 70%)',
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

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <motion.span
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          Project Intake
        </motion.span>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — positioning + qualifier copy */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-10 lg:sticky lg:top-32"
          >
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1.05] tracking-tight text-white">
                Define the{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
                  }}
                >
                  Mission.
                </span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                We build digital weapons for brands that refuse to compromise on
                speed or scale. Fill out the scope below.{' '}
                <span className="text-zinc-200 font-semibold">
                  The more detail you provide, the faster we can architect a
                  solution.
                </span>
              </p>
            </div>

            {/* Qualifier checklist */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase">
                We are the right fit if...
              </p>
              <ul className="flex flex-col gap-3">
                {qualifiers.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-400" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            {/* Retainer notice */}
            <div className="rounded-xl border border-blue-500/25 bg-blue-500/5 p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg border border-blue-500/30 bg-blue-600/15 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-blue-400" />
                </div>
                <p className="text-sm font-bold text-white">
                  Zero-Maintenance Retainer Required
                </p>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                All custom builds require enrollment in our Zero-Maintenance
                Retainer post-launch. This ensures your site stays secure,
                up-to-date, and performant — permanently. Your architect will
                walk you through the pricing and options during the kickoff
                call.
              </p>
            </div>

            {/* Response time */}
            <div className="border-t border-zinc-800/60 pt-6">
              <p className="text-xs text-zinc-600 leading-relaxed">
                <span className="text-zinc-400 font-semibold">
                  Response time:
                </span>{' '}
                Our lead architect reviews every submission personally. Expect a
                direct reply — not a CRM sequence — within one business day.
              </p>
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-8"
          >
            <div className="mb-7">
              <h2 className="text-xl font-black text-white">
                Project Scope
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                Fields marked <span className="text-blue-400">*</span> are
                required.
              </p>
            </div>
            <ProjectRequestForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
