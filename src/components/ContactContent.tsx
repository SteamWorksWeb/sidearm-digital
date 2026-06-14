'use client'

import { motion, type Variants } from 'framer-motion'
import { Flag, ShieldCheck, Zap, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

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

const trust = [
  {
    icon: Flag,
    title: '100% U.S. Based Engineering',
    body: 'Every engineer on your build is domestic. No offshore handoffs, no timezone friction, no language barriers.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Maintenance Retainer',
    body: 'We host, secure, and maintain your codebase post-launch. You focus on revenue. We run the stack.',
  },
  {
    icon: Zap,
    title: 'Performance-Obsessed',
    body: 'We target sub-1-second load times and 95+ Lighthouse scores across every page we ship.',
  },
  {
    icon: Clock,
    title: 'Response Within 24 Hours',
    body: 'Our lead architect reviews every submission personally. You will hear from a senior engineer, not a sales rep.',
  },
]

export default function ContactContent() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 0% 30%, rgba(59,130,246,0.07), transparent 70%)',
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
        {/* Page-level header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Scope Your Build
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1.05] tracking-tight text-white max-w-3xl">
            Let&apos;s Build Something{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #60a5fa 0%, #3b82f6 40%, #93c5fd 100%)',
              }}
            >
              Lethal.
            </span>
          </h1>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — positioning copy + trust signals */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-10 lg:sticky lg:top-32"
          >
            <div className="flex flex-col gap-5 text-zinc-400 text-lg leading-relaxed">
              <p>
                We do not take on every project. We partner with founders and
                brands who are ready to scale with zero technical friction — and
                who understand that a hand-coded, performance-obsessed
                architecture is a{' '}
                <span className="text-zinc-200 font-semibold">
                  revenue decision, not a design preference.
                </span>
              </p>
              <p>
                Fill out the scope below. If we are a fit, our lead architect
                will reach out directly within one business day.
              </p>
            </div>

            {/* Trust grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trust.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
                  >
                    <div className="h-9 w-9 rounded-lg border border-zinc-700 bg-zinc-800/80 flex items-center justify-center">
                      <Icon size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social proof strip */}
            <div className="border-t border-zinc-800/60 pt-6 flex flex-col gap-1">
              <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase">
                Built for
              </p>
              <p className="text-sm text-zinc-500">
                SaaS founders · E-commerce operators · Professional service firms · Early-stage startups ready to scale
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-8"
          >
            <div className="mb-7">
              <h2 className="text-xl font-black text-white">
                Project Scope
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                All fields marked <span className="text-blue-400">*</span> are
                required.
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
