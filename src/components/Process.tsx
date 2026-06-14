'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We audit your existing infrastructure and pinpoint exactly where bloated code is costing you leads.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We architect a custom digital roadmap focused purely on speed, security, and aggressive conversion rates.',
  },
  {
    number: '03',
    title: 'Planning',
    description:
      'We define the exact technical stack and deliverables. Zero guesswork, zero scope creep.',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'We hand-code your application from the ground up in Next.js. No rigid templates, no fragile plugins.',
  },
  {
    number: '05',
    title: 'Testing',
    description:
      'Rigorous Lighthouse auditing and UX validation. We do not ship until the performance metrics are flawless.',
  },
  {
    number: '06',
    title: 'Execution',
    description:
      "A seamless, zero-downtime deployment to Vercel's global edge network.",
  },
  {
    number: '07',
    title: 'Management / Support',
    description:
      'The Zero-Maintenance Retainer. You focus on scaling your business; we handle the hosting, security patches, and code updates — every single month, without exception.',
    featured: true,
  },
]

export default function Process() {
  return (
    <section
      id="arsenal"
      className="relative py-28 px-6 bg-zinc-950 border-t border-zinc-800/50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            The Process
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
            How We Do It
          </h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            A systematic, engineering-led approach to building digital assets
            that actually perform.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Connecting thread — left border */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-zinc-800 to-transparent"
          />

          <ol className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div
                  className={`relative z-10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-black tabular-nums ${
                    step.featured
                      ? 'border-blue-500/60 bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-900/30'
                      : 'border-zinc-700 bg-zinc-900 text-zinc-500'
                  }`}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 rounded-xl border p-6 transition-colors duration-200 ${
                    step.featured
                      ? 'border-blue-500/30 bg-blue-600/8 hover:border-blue-400/50'
                      : 'border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className={`text-lg font-bold ${
                        step.featured ? 'text-blue-300' : 'text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                    {step.featured && (
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/15 text-blue-400">
                        Zero-Maintenance Retainer
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      step.featured ? 'text-zinc-300' : 'text-zinc-400'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
