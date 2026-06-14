'use client'

import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#arsenal' },
  { label: 'About', href: '#about' },
  { label: 'Comms', href: '#comms' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="comms"
      className="relative border-t border-zinc-800/60 bg-zinc-950 px-6 py-14"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Link href="/" className="opacity-70 hover:opacity-100 transition-opacity duration-200">
            <Image
              src="/sidearmLogo.png"
              alt="Sidearm Digital"
              width={220}
              height={64}
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-xs text-zinc-600 max-w-xs text-center sm:text-left leading-relaxed">
            Precision-engineered web applications for founders who refuse to
            settle. No templates. No bloat. Just performance.
          </p>
          <p className="text-xs text-zinc-700 mt-1">
            © {year} Sidearm Digital. All rights reserved.
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center sm:justify-end gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-zinc-700 sm:text-right text-center">
            Built with Next.js · Deployed on Vercel
          </p>
        </nav>
      </div>
    </footer>
  )
}
