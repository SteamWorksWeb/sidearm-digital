'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Workflow, ServerCog, Palette, LineChart } from 'lucide-react'

const services = [
  {
    icon: <Code2 size={28} className="text-blue-400" />,
    title: 'Web Applications',
    description:
      'Hand-coded, zero-template web apps built for speed and scale. No bloat. Just pure, performant code that loads instantly and converts.',
    tag: 'Performance-first',
  },
  {
    icon: <Smartphone size={28} className="text-blue-400" />,
    title: 'Mobile Applications',
    description:
      'Seamless, high-performance mobile experiences designed to keep your users engaged and your business in their pockets.',
    tag: 'Native-feel',
  },
  {
    icon: <Workflow size={28} className="text-blue-400" />,
    title: 'Automations',
    description:
      'We eliminate manual bottlenecks. Custom API integrations and automated workflows so your team can focus on scaling, not data entry.',
    tag: 'Efficiency',
  },
  {
    icon: <ServerCog size={28} className="text-blue-400" />,
    title: 'Project Hosting & Management',
    description:
      'The Zero-Maintenance Retainer. You run your business. We run your stack. Hosting, security, and feature updates — handled. You will never touch a backend again.',
    tag: '★ Most Popular',
    featured: true,
  },
  {
    icon: <Palette size={28} className="text-blue-400" />,
    title: 'Web Design',
    description:
      'Aesthetically premium, revenue-driven UI/UX. We design digital experiences that build trust and seamlessly guide your visitors to the checkout.',
    tag: 'Conversion-focused',
  },
  {
    icon: <LineChart size={28} className="text-blue-400" />,
    title: 'Consulting',
    description:
      'High-level technical architecture and strategy. We align your digital infrastructure with your business goals to ensure you are ready to scale without friction.',
    tag: 'Strategy',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-zinc-950 border-t border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
            Our Services
          </h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            Every engagement is custom-scoped. No packages. No upsells. Just
            the exact solution your business needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.07 }}
              className={`relative rounded-xl border p-7 flex flex-col gap-4 transition-colors duration-200 group ${
                service.featured
                  ? 'bg-blue-600/10 border-blue-500/40 hover:border-blue-400/60'
                  : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Tag */}
              <span
                className={`absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                  service.featured
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                }`}
              >
                {service.tag}
              </span>

              <div className="w-12 h-12 rounded-lg bg-zinc-800/80 flex items-center justify-center">
                {service.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
