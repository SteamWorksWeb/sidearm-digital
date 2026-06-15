'use client'

import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiCloudflare,
  SiVercel,
  SiDocker,
  SiStripe,
  SiFigma,
  SiApple,
  SiAndroid,
  SiSwift,
  SiKotlin,
} from 'react-icons/si'
import { type IconType } from 'react-icons'

/* ─── data ─── */
interface Tech {
  icon: IconType
  label: string
}

const row1: Tech[] = [
  { icon: SiNextdotjs,   label: 'Next.js' },
  { icon: SiReact,       label: 'React' },
  { icon: SiTypescript,  label: 'TypeScript' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiFramer,      label: 'Framer Motion' },
  { icon: SiNodedotjs,   label: 'Node.js' },
  { icon: SiPostgresql,  label: 'PostgreSQL' },
  { icon: SiPrisma,      label: 'Prisma' },
  { icon: SiCloudflare,  label: 'Cloudflare' },
]

const row2: Tech[] = [
  { icon: SiVercel,   label: 'Vercel' },
  { icon: SiDocker,   label: 'Docker' },
  { icon: SiStripe,   label: 'Stripe' },
  { icon: SiFigma,    label: 'Figma' },
  { icon: SiApple,    label: 'iOS / Apple' },
  { icon: SiAndroid,  label: 'Android' },
  { icon: SiSwift,    label: 'Swift' },
  { icon: SiKotlin,   label: 'Kotlin' },
]

/* ─── sub-components ─── */
function TechIcon({ icon: Icon, label }: Tech) {
  return (
    <div
      title={label}
      className="group flex flex-col items-center gap-2.5 cursor-default"
    >
      <Icon
        size={44}
        className="text-zinc-600 group-hover:text-zinc-200 transition-colors duration-300"
        aria-label={label}
      />
      <span className="text-[10px] font-semibold tracking-widest text-zinc-700 group-hover:text-zinc-500 uppercase transition-colors duration-300 hidden sm:block">
        {label}
      </span>
    </div>
  )
}

/* ─── main component ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function TechStack() {
  return (
    <section className="relative py-24 px-6 border-t border-zinc-800/50 overflow-hidden">
      {/* faint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            The Foundation
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white leading-tight">
            Enterprise-Grade Infrastructure.
          </h2>
          <p className="mt-4 text-zinc-500 text-lg leading-relaxed max-w-2xl">
            We leverage a foundation of modern, secure, and highly scalable technologies.{' '}
            No legacy code. No fragile plugins.
          </p>
        </motion.div>

        {/* Row 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-8 mb-10"
        >
          {row1.map((tech) => (
            <TechIcon key={tech.label} {...tech} />
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-10" />

        {/* Row 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-8"
        >
          {row2.map((tech) => (
            <TechIcon key={tech.label} {...tech} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
