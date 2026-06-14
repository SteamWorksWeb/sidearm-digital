'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'TradeEdge Pro',
    category: 'SaaS Dashboard',
    description:
      'Real-time commodities trading platform. Sub-200ms load time. 40k daily active users. Built without a single CMS.',
    tech: ['Next.js', 'Postgres', 'WebSockets'],
    metric: '98 Perf Score',
  },
  {
    title: 'Meridian Law Group',
    category: 'Professional Services',
    description:
      'White-glove legal firm rebrand. Fully custom-coded. Zero templates. Conversion rate jumped 3.2× in 60 days.',
    tech: ['Next.js', 'Framer Motion', 'Resend'],
    metric: '3.2× Leads',
  },
  {
    title: 'Holloway & Co.',
    category: 'Luxury E-Commerce',
    description:
      'Bespoke furniture brand. Custom Stripe checkout flow, animated product configurator, and same-day deployment pipeline.',
    tech: ['Next.js', 'Stripe', 'Sanity'],
    metric: '$2.1M Revenue',
  },
  {
    title: 'Apex Charter Group',
    category: 'Booking Platform',
    description:
      'Private aviation booking system with live availability, dynamic pricing engine, and PDF quote generation.',
    tech: ['Next.js', 'Supabase', 'Puppeteer'],
    metric: '100% Uptime',
  },
  {
    title: 'Nova Health Clinic',
    category: 'Healthcare Web App',
    description:
      'HIPAA-adjacent patient intake portal. Custom form flows, encrypted submissions, and zero third-party embeds.',
    tech: ['Next.js', 'Prisma', 'Zod'],
    metric: '4.9★ Patient NPS',
  },
  {
    title: 'Kinetic Studios',
    category: 'Creative Agency',
    description:
      'Full-motion portfolio for a top-tier creative studio. GPU-accelerated scroll animations, perfect Lighthouse audit.',
    tech: ['Next.js', 'Three.js', 'GSAP'],
    metric: '100 Lighthouse',
  },
]

export default function Arsenal() {
  return (
    <section
      id="arsenal"
      className="relative py-28 px-6 bg-zinc-950 border-t border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
              The Arsenal
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
              Work That Hits Hard
            </h2>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
              Selected client engagements. Every project custom-built,
              performance-obsessed, and zero-template.
            </p>
          </div>
          <p className="text-sm text-zinc-600 italic shrink-0">
            Full case studies on request
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.07 }}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-7 flex flex-col gap-5 hover:border-zinc-700 transition-colors duration-200 overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(59,130,246,0.06), transparent 70%)' }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-semibold tracking-widest text-blue-400 uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="shrink-0 w-9 h-9 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors duration-200">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-zinc-500 border border-zinc-800 rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-blue-400 shrink-0 ml-3">
                  {project.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
