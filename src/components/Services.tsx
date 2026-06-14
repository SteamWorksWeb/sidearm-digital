'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Workflow, ServerCog, Palette, LineChart } from 'lucide-react'

const services = [
  {
    icon: <Code2 size={28} className="text-blue-400" />,
    title: 'Custom Web Applications',
    description:
      'Hand-coded, high-performance web applications built for speed, elegance, and scalability. Every page, interaction, and component is designed to create trust, reduce friction, and convert high-value visitors into serious inquiries.',
    tag: 'Performance-First',
  },
  {
    icon: <Smartphone size={28} className="text-blue-400" />,
    title: 'Mobile Applications',
    description:
      'Premium mobile experiences that feel intuitive, polished, and effortless. We create fast, responsive mobile applications that keep your brand close to your customers and make every interaction feel refined.',
    tag: 'Seamless Experience',
  },
  {
    icon: <Workflow size={28} className="text-blue-400" />,
    title: 'Custom Automations',
    description:
      'We eliminate the repetitive, manual tasks that quietly drain your team time and attention. From client onboarding to CRM workflows, we build automations that allow your team to operate with more precision and less friction.',
    tag: 'Operational Excellence',
  },
  {
    icon: <ServerCog size={28} className="text-blue-400" />,
    title: 'Hosting, Management & Ongoing Care',
    description:
      'A premium website should never become a technical burden. We host, secure, monitor, update, and maintain your digital infrastructure so you can stay focused on your clients, your team, and your growth.',
    tag: '★ White-Glove Support',
    featured: true,
  },
  {
    icon: <Palette size={28} className="text-blue-400" />,
    title: 'Premium Web Design',
    description:
      'High-end design is not decoration. It is a trust-building system. We create refined digital experiences that communicate credibility, guide visitors clearly, and position your brand as the obvious choice for discerning clients.',
    tag: 'Conversion & Trust',
  },
  {
    icon: <LineChart size={28} className="text-blue-400" />,
    title: 'Digital Strategy & Technical Consulting',
    description:
      'For businesses preparing to scale, rebuild, or make significant digital decisions, we provide clear technical direction. We help you align your digital infrastructure with your business goals.',
    tag: 'Strategic Guidance',
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
            What We Build
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
            Digital Infrastructure Designed for a Higher Standard.
          </h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            Every engagement is carefully scoped around your business, your customer experience, and your long-term growth. We do not sell generic packages or recycled templates. We design and engineer the exact digital asset your brand needs to look exceptional, perform flawlessly, and serve your clients with confidence.
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
