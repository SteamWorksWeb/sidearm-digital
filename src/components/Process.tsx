'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Map,
  ClipboardList,
  Code2,
  FlaskConical,
  Rocket,
  ShieldCheck,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description:
      'We audit your existing infrastructure and pinpoint exactly where bloated code is costing you leads.',
    detail: 'Tech stack analysis · Competitor benchmarking · Conversion audit',
  },
  {
    number: '02',
    title: 'Strategy',
    icon: Map,
    description:
      'We architect a custom digital roadmap focused purely on speed, security, and aggressive conversion rates.',
    detail: 'Architecture design · KPI definition · Risk assessment',
  },
  {
    number: '03',
    title: 'Planning',
    icon: ClipboardList,
    description:
      'We define the exact technical stack and deliverables. Zero guesswork, zero scope creep.',
    detail: 'Sprint planning · Milestone mapping · Stakeholder alignment',
  },
  {
    number: '04',
    title: 'Development',
    icon: Code2,
    description:
      'We hand-code your application from the ground up in Next.js. No rigid templates, no fragile plugins.',
    detail: 'Next.js · TypeScript · Tailwind CSS · Custom APIs',
  },
  {
    number: '05',
    title: 'Testing',
    icon: FlaskConical,
    description:
      'Rigorous Lighthouse auditing and UX validation. We do not ship until the performance metrics are flawless.',
    detail: 'Core Web Vitals · Cross-browser QA · Accessibility audit',
  },
  {
    number: '06',
    title: 'Execution',
    icon: Rocket,
    description:
      "A seamless, zero-downtime deployment to Vercel's global edge network.",
    detail: 'CI/CD pipeline · Canary deployment · DNS & SSL provisioning',
  },
  {
    number: '07',
    title: 'Management & Support',
    icon: ShieldCheck,
    description:
      'The Zero-Maintenance Retainer. You focus on scaling your business — we handle hosting, security patches, and code updates, every single month without exception.',
    detail: 'Uptime monitoring · Security patches · Feature updates · Priority support',
    featured: true,
  },
]

export default function Process() {
  return (
    <section
      id="arsenal"
      className="relative py-32 px-6 bg-zinc-950 border-t border-zinc-800/50 overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 100% 20%, rgba(59,130,246,0.08), transparent)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header — two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-400 uppercase">
              <span className="h-px w-6 bg-blue-400/60" />
              The Process
            </span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight">
              How We{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)',
                }}
              >
                Do It
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col justify-end gap-4"
          >
            <p className="text-zinc-400 text-lg leading-relaxed">
              A systematic, engineering-led approach to building digital assets
              that actually perform. Seven steps. Zero shortcuts.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-black text-white">{'<1s'}</p>
                <p className="text-xs text-zinc-600 mt-1">Avg. load time</p>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div className="text-center">
                <p className="text-2xl font-black text-white">100</p>
                <p className="text-xs text-zinc-600 mt-1">Lighthouse target</p>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div className="text-center">
                <p className="text-2xl font-black text-white">0</p>
                <p className="text-xs text-zinc-600 mt-1">Templates used</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical spine — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(59,130,246,0.15) 80%, transparent)',
            }}
          />

          <ol className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.55,
                    ease: 'easeOut',
                    delay: i * 0.05,
                  }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${
                    step.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Featured step — full-width special treatment */}
                  {step.featured ? (
                    <div className="lg:col-span-2 relative">
                      {/* Center dot on spine */}
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full border-2 border-blue-400 bg-zinc-950 items-center justify-center shadow-lg shadow-blue-900/50">
                        <ShieldCheck size={20} className="text-blue-400" />
                      </div>

                      <div className="relative rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-950/40 via-zinc-900/60 to-zinc-950 p-8 lg:p-12 overflow-hidden">
                        {/* Large decorative number */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-[10rem] font-black text-blue-500/5 leading-none select-none tabular-nums"
                        >
                          07
                        </div>

                        {/* Glow */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background:
                              'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(59,130,246,0.07), transparent)',
                          }}
                        />

                        <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
                          <div className="flex items-center gap-5 lg:shrink-0">
                            <div className="h-16 w-16 rounded-xl border border-blue-500/40 bg-blue-600/20 flex items-center justify-center shadow-lg shadow-blue-900/30">
                              <ShieldCheck size={30} className="text-blue-400" />
                            </div>
                            <div>
                              <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-1">
                                Step 07 · Final Stage
                              </p>
                              <h3 className="text-2xl lg:text-3xl font-black text-white">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <div className="lg:flex-1 flex flex-col gap-4">
                            <p className="text-zinc-300 leading-relaxed">
                              {step.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {step.detail.split(' · ').map((d) => (
                                <span
                                  key={d}
                                  className="text-[11px] font-medium text-blue-300/80 border border-blue-500/25 bg-blue-500/10 rounded-full px-3 py-1"
                                >
                                  {d}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="lg:shrink-0">
                            <div className="inline-flex flex-col items-center gap-1 rounded-xl border border-blue-500/30 bg-blue-600/10 px-6 py-4 text-center">
                              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                                Zero-Maintenance
                              </span>
                              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                                Retainer
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Even steps: card left, empty right */}
                      {/* Odd steps: empty left, card right */}
                      {isEven ? (
                        <>
                          {/* Card — left side */}
                          <div className="lg:pr-16">
                            <StepCard step={step} Icon={Icon} />
                          </div>

                          {/* Center dot */}
                          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-zinc-700 bg-zinc-900 items-center justify-center shadow-md">
                            <span className="text-[10px] font-black text-zinc-500 tabular-nums">
                              {step.number}
                            </span>
                          </div>

                          {/* Right — label only on desktop */}
                          <div className="hidden lg:flex lg:pl-16 items-center">
                            <p className="text-zinc-700 text-sm font-medium tracking-wide">
                              {step.detail}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Left — label only on desktop */}
                          <div className="hidden lg:flex lg:pr-16 items-center justify-end">
                            <p className="text-right text-zinc-700 text-sm font-medium tracking-wide">
                              {step.detail}
                            </p>
                          </div>

                          {/* Center dot */}
                          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-zinc-700 bg-zinc-900 items-center justify-center shadow-md">
                            <span className="text-[10px] font-black text-zinc-500 tabular-nums">
                              {step.number}
                            </span>
                          </div>

                          {/* Card — right side */}
                          <div className="lg:pl-16">
                            <StepCard step={step} Icon={Icon} />
                          </div>
                        </>
                      )}
                    </>
                  )}
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  Icon,
}: {
  step: (typeof steps)[number]
  Icon: React.ElementType
}) {
  return (
    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
      {/* Decorative step number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 bottom-2 text-[5rem] font-black text-zinc-800/50 leading-none select-none tabular-nums group-hover:text-zinc-700/40 transition-colors duration-300"
      >
        {step.number}
      </div>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background:
            'radial-gradient(300px circle at 50% 0%, rgba(59,130,246,0.05), transparent 70%)',
        }}
      />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="h-11 w-11 rounded-xl border border-zinc-700/80 bg-zinc-800/80 flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-600/10 transition-all duration-300">
            <Icon size={20} className="text-zinc-400 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
          <span className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">
            Step {step.number}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-100">
            {step.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Detail tags — mobile only (desktop shows in spine column) */}
        <div className="flex flex-wrap gap-1.5 lg:hidden">
          {step.detail.split(' · ').map((d) => (
            <span
              key={d}
              className="text-[10px] font-medium text-zinc-600 border border-zinc-800 rounded px-2 py-0.5"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
