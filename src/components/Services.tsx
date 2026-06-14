'use client'

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, RefreshCw, Code2, BarChart3, HeartHandshake } from 'lucide-react'

const services = [
  {
    icon: <Code2 size={28} className="text-blue-400" />,
    title: 'Custom Web Applications',
    description:
      'Hand-coded, zero-template web apps built for speed and scale. No WordPress. No Webflow. Just pure, performant code that loads in under a second and converts.',
    tag: 'Performance-first',
  },
  {
    icon: <ShieldCheck size={28} className="text-blue-400" />,
    title: 'Zero-Maintenance Retainer',
    description:
      'You run your business. We run your stack. Hosting, security patches, SSL, uptime monitoring, and feature updates — all handled by us, every month. You will never touch a backend again.',
    tag: '★ Most Popular',
    featured: true,
  },
  {
    icon: <BarChart3 size={28} className="text-blue-400" />,
    title: 'Conversion Rate Optimization',
    description:
      'A fast site that doesn\'t convert is just expensive infrastructure. We audit your funnel, run A/B tests, and engineer landing pages that turn visitors into paying clients.',
    tag: 'Revenue-focused',
  },
  {
    icon: <Zap size={28} className="text-blue-400" />,
    title: 'Core Web Vitals Rescue',
    description:
      'Stuck with a bloated site killing your Google rankings? We diagnose and rebuild your performance layer — LCP, CLS, FID — to get you back in the game fast.',
    tag: 'SEO impact',
  },
  {
    icon: <RefreshCw size={28} className="text-blue-400" />,
    title: 'Site Migrations & Rebuilds',
    description:
      'Escape template hell. We migrate your content from any platform and rebuild your site from scratch — faster, cleaner, and fully yours. No vendor lock-in. Ever.',
    tag: 'Clean slate',
  },
  {
    icon: <HeartHandshake size={28} className="text-blue-400" />,
    title: 'Growth Partnerships',
    description:
      'For founders ready to scale. We embed alongside your team as your dedicated web partner — strategy, design, development, and shipping, all in one relationship.',
    tag: 'Long-term',
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
